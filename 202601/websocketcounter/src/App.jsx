import { useEffect, useState } from "react";
import { useWebSocket } from "./hooks/useWebSocket";

function App() {
    const [counter, setCounter] = useState(0);
    const [clients, setClients] = useState(0);
    const [messages, setMessage] = useState([]);

    //WebSocket 연결
    const { isConnected, sendMessage, onMessage } = useWebSocket("ws://localhost:8080");

    //메시지 수신 처리
    useEffect(() => {
        onMessage((data) => {
            //메시지 로그 추가
            setMessage((prev) => [
                ...prev.slice(-9),
                {
                    type: data.type,
                    time: new Date().toLocaleTimeString(),
                },
            ]);

            switch (data.type) {
                case "INIT":
                    setCounter(data.counter);
                    setClients(data.clients);
                    break;
                case "COUNTER_UPDATE":
                    setCounter(data.counter);
                    break;
                case "CLIENTS_UPDATE":
                    setClients(data.clients);
                    break;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //버튼 핸들러들
    const handleIncrement = () => sendMessage({ type: "INCREMENT" });
    const handleDecrement = () => sendMessage({ type: "DECREMENT" });
    const handleReset = () => sendMessage({ type: "RESET" });

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
