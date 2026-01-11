import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Socket.io 클라이언트 생성 (컴포넌트 외부에서 한번만)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Native: new WebSocket('ws://localhost:8080')
// Socket.io: io('http://localhost:8080', options)

const socket = io("http://localhost:8080", {
    autoConnect: true, //자동 연결(기본값 : true)
    reconnection: true, //자동 재연결 활성화
    reconnectionDelay: 1000, //재연결 대기 시간 1초
    reconnectionDelayMax: 5000, // 최대 대기 시간 5초
    reconnectionAttempts: 5, //최대 재연결 시도 횟수
    timeout: 10000, //연결 타임아웃 10초
});

//개발 환경에서 디버깅용 로그
socket.onAny((eventName, ...args) => {
    console.log(`이벤트:${eventName}`, args);
});

function App() {
    const [counter, setCounter] = useState(0);
    const [clients, setClients] = useState(0);
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessage] = useState([]);

    function addMessage(type, text) {
        setMessage((prev) => [
            ...prev.slice(-9),
            {
                type,
                text,
                time: new Date().toLocaleTimeString(),
            },
        ]);
    }

    useEffect(() => {
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // 연결 상태 이벤트
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // Native: ws.onopen / ws.onclose
        // Socket.io: socket.on('connect') / socket.on('disconnect')

        function onConnect() {
            console.log("socket io 연결 성공");
            console.log(`socket ID: ${socket.id}`);
            setIsConnected(true);

            addMessage("connect", "서버 연결됨");
        }

        function onDisconnect(reason) {
            console.log("socket io 종료");
            console.log(`종료 이유: ${reason}`);
            setIsConnected(false);

            addMessage("disconnect", "연결 종료");
        }

        //재연결 시도
        function onReconnectAttempt(attemptNumber) {
            console.log(`재연결 시도중... (${attemptNumber}번째)`);
            addMessage("reconnecting", `재연결 시도${attemptNumber}`);
        }

        //재연결 실패
        function onReconnectFailed() {
            console.log("재연결 실패");
            addMessage("error", "재연결 실패");
        }

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // 데이터 수신 이벤트
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // Native: ws.onmessage + switch(data.type)
        // Socket.io: socket.on('이벤트명', 콜백)

        function onInit(data) {
            console.log("초기 데이터 수신: ", data);
            setCounter(data.counter);
            setClients(data.clients);
            addMessage("init", `초기 값: ${data.counter}`);
        }

        function onCounterUpdate(value) {
            console.log("카운터 없데이트: ", value);
            setCounter(value);
            addMessage("counter-update", `새 값: ${value}`);
        }

        function onClientsUpdate(count) {
            console.log("접속자 수 업데이트:", count);
            setClients(count);
            addMessage("clients-update", `접속자: ${count}명`);
        }

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // 이벤트 리스너 등록
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("reconnect_attempt", onReconnectAttempt);
        socket.on("reconnect_failed", onReconnectFailed);

        socket.on("init", onInit);
        socket.on("counter-update", onCounterUpdate);
        socket.on("clients-update", onClientsUpdate);

        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // Cleanup: 컴포넌트 언마운트 시 리스너 제거
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("reconnect_attempt", onReconnectAttempt);
            socket.off("reconnect_failed", onReconnectFailed);

            socket.off("init", onInit);
            socket.off("counter-update", onCounterUpdate);
            socket.off("clients-update", onClientsUpdate);
        };
    }, []);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 버튼 핸들러 (이벤트 전송)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Native: ws.send(JSON.stringify({ type: 'INCREMENT' }))
    // Socket.io: socket.emit('increment')

    const handleIncrement = () => {
        socket.emit("increment");
        console.log("increment 이벤트 전송");
    };

    const handleDecrement = () => {
        socket.emit("decrement");
        console.log("decrement 이벤트 전송");
    };

    const handleReset = () => {
        socket.emit("reset");
        console.log("reset 이벤트 전송");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "system-ui, -apple-system, sans-serif",
                padding: "20px",
            }}
        >
            <div
                style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "48px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    maxWidth: "600px",
                    width: "100%",
                }}
            >
                {/* 헤더 */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            color: "#1a202c",
                            margin: "0 0 12px 0",
                        }}
                    >
                        실시간 카운터
                    </h1>

                    {/* 연결 상태 */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 16px",
                            borderRadius: "12px",
                            background: isConnected ? "#d1fae5" : "#fee2e2",
                            color: isConnected ? "#065f46" : "#991b1b",
                            fontSize: "14px",
                            fontWeight: "600",
                        }}
                    >
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: isConnected ? "#10b981" : "#ef4444",
                                animation: isConnected ? "pulse 2s infinite" : "none",
                            }}
                        />
                        {isConnected ? "연결됨" : "연결 끊김"}
                    </div>
                </div>

                {/* 카운터 디스플레이 */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        borderRadius: "20px",
                        padding: "48px",
                        textAlign: "center",
                        marginBottom: "32px",
                        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                    }}
                >
                    <div
                        style={{
                            fontSize: "80px",
                            fontWeight: "bold",
                            color: "white",
                            lineHeight: "1",
                            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                    >
                        {counter}
                    </div>
                    <div
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.8)",
                            marginTop: "12px",
                            fontWeight: "500",
                        }}
                    >
                        접속자 {clients}명
                    </div>
                </div>

                {/* 컨트롤 버튼들 */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "12px",
                        marginBottom: "32px",
                    }}
                >
                    <button
                        onClick={handleIncrement}
                        disabled={!isConnected}
                        style={{
                            padding: "16px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            border: "none",
                            borderRadius: "12px",
                            background: isConnected ? "#10b981" : "#d1d5db",
                            color: "white",
                            cursor: isConnected ? "pointer" : "not-allowed",
                            transition: "all 0.2s",
                            boxShadow: isConnected ? "0 4px 12px rgba(16, 185, 129, 0.4)" : "none",
                        }}
                        onMouseOver={(e) => {
                            if (isConnected) {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 16px rgba(16, 185, 129, 0.5)";
                            }
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = isConnected
                                ? "0 4px 12px rgba(16, 185, 129, 0.4)"
                                : "none";
                        }}
                    >
                        +
                    </button>

                    <button
                        onClick={handleDecrement}
                        disabled={!isConnected}
                        style={{
                            padding: "16px",
                            fontSize: "24px",
                            fontWeight: "bold",
                            border: "none",
                            borderRadius: "12px",
                            background: isConnected ? "#ef4444" : "#d1d5db",
                            color: "white",
                            cursor: isConnected ? "pointer" : "not-allowed",
                            transition: "all 0.2s",
                            boxShadow: isConnected ? "0 4px 12px rgba(239, 68, 68, 0.4)" : "none",
                        }}
                        onMouseOver={(e) => {
                            if (isConnected) {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 16px rgba(239, 68, 68, 0.5)";
                            }
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = isConnected
                                ? "0 4px 12px rgba(239, 68, 68, 0.4)"
                                : "none";
                        }}
                    >
                        −
                    </button>

                    <button
                        onClick={handleReset}
                        disabled={!isConnected}
                        style={{
                            padding: "16px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            border: "none",
                            borderRadius: "12px",
                            background: isConnected ? "#6366f1" : "#d1d5db",
                            color: "white",
                            cursor: isConnected ? "pointer" : "not-allowed",
                            transition: "all 0.2s",
                            boxShadow: isConnected ? "0 4px 12px rgba(99, 102, 241, 0.4)" : "none",
                        }}
                        onMouseOver={(e) => {
                            if (isConnected) {
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 16px rgba(99, 102, 241, 0.5)";
                            }
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = isConnected
                                ? "0 4px 12px rgba(99, 102, 241, 0.4)"
                                : "none";
                        }}
                    >
                        리셋
                    </button>
                </div>

                {/* 메시지 로그 */}
                <div
                    style={{
                        background: "#f9fafb",
                        borderRadius: "12px",
                        padding: "16px",
                        maxHeight: "200px",
                        overflowY: "auto",
                    }}
                >
                    <div
                        style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#6b7280",
                            marginBottom: "8px",
                        }}
                    >
                        실시간 이벤트 로그
                    </div>
                    {messages.length === 0 ? (
                        <div
                            style={{
                                fontSize: "13px",
                                color: "#9ca3af",
                                textAlign: "center",
                                padding: "20px",
                            }}
                        >
                            이벤트를 기다리는 중...
                        </div>
                    ) : (
                        messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    fontSize: "13px",
                                    color: "#4b5563",
                                    padding: "6px 0",
                                    borderBottom:
                                        i < messages.length - 1 ? "1px solid #e5e7eb" : "none",
                                }}
                            >
                                <span style={{ color: "#9ca3af" }}>{msg.time}</span>
                                {" · "}
                                <span style={{ fontWeight: "500" }}>{msg.type}</span>
                            </div>
                        ))
                    )}
                </div>

                {/* 안내 문구 */}
                <div
                    style={{
                        marginTop: "24px",
                        padding: "16px",
                        background: "#eff6ff",
                        borderRadius: "12px",
                        fontSize: "14px",
                        color: "#1e40af",
                        lineHeight: "1.6",
                    }}
                >
                    <strong> 팁:</strong> 새 탭을 열어서 동일한 페이지에 접속해보세요! 모든 탭에서
                    카운터가 실시간으로 동기화되는 것을 확인할 수 있습니다.
                </div>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}

export default App;
