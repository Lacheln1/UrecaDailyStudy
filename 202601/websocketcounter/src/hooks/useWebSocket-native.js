import { useCallback, useEffect, useRef, useState } from "react";

export function useWebSocket(url) {
    //websocket 인스턴스를 저장 (리렌더링 시에도 유지)
    const ws = useRef(null);

    //연결 상태 관리
    const [isConnected, setIsConnected] = useState(false);

    //재연결 시도 횟수
    const reconnectAttempts = useRef(0);
    const maxReconnectAttempts = 5;

    //재연결 타이머
    const reconnectTimer = useRef(null);

    //websocket 연결 함수
    const connect = useCallback(() => {
        try {
            //이미 연결되어 있으면 리턴
            if (ws.current?.readyState === WebSocket.OPEN) {
                return;
            }
            console.log("websocket 연결 시도중...");
            ws.current = new WebSocket(url);

            //연결 성공
            ws.current.onopen = () => {
                console.log("websocket 연결 성공");
                setIsConnected(true);
                reconnectAttempts.current = 0; // 재연결 카운터 리셋
            };

            //연결 종료
            ws.current.onclose = () => {
                console.log("websocket 연결 종료");
                setIsConnected(false);

                //자동 재연결 시도
                if (reconnectAttempts.current < maxReconnectAttempts) {
                    reconnectAttempts.current++;
                    const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 10000);
                    console.log(
                        `${delay}ms 후 재연결 시도...(${reconnectAttempts.current}/${maxReconnectAttempts})`
                    );

                    reconnectTimer.current = setTimeout(() => {
                        connect();
                    }, delay);
                } else {
                    console.error("최대 재연결 시도 횟수 초과");
                }
            };

            //에러 처리
            ws.current.onerror = (error) => {
                console.error("websocket에러:", error);
                setIsConnected(false);
            };
        } catch (error) {
            console.error("websocket 연결 실패: ", error);
            setIsConnected(false);
        }
    }, [url]);

    //메시지 전송 함수
    const sendMessage = (data) => {
        if (ws.current?.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(data));
            console.log("메시지 전송:", data);
        } else {
            console.warn("websocket이 연결되어 있지 않습니다");
        }
    };

    //메시지 수신 리스너 등록 함수
    const onMessage = (callback) => {
        if (ws.current) {
            ws.current.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    console.log("메시지 수신", data);
                    callback(data);
                } catch (error) {
                    console.error("메시지 파싱 에러", error);
                }
            };
        }
    };

    //컴포넌트 마운트 시 연결
    useEffect(() => {
        connect();

        //컴포넌트 언마운트 시 정리
        return () => {
            console.log("websocket 정리중");
            if (reconnectTimer.current) {
                clearTimeout(reconnectTimer.current);
            }
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [url]);

    return {
        isConnected,
        sendMessage,
        onMessage,
        reconnect: connect,
    };
}
