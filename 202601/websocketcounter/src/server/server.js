//웹 소켓 서버 생성
const wss = new WebSocket({ port: 8080 });

//전역 카운터
let counter = 0;

//연결된 모든 클라이언트에게 메시지를 보내는 함수
function broadcast(data) {
    const message = JSON.stringify(data);

    wss.clients.forEach((client) => {
        //클라이언트가 연결되어있고, OPEN 상태일 때만 전송
        if (client.readyState === 1) {
            client.send(message);
        }
    });
}

//클라이언트가 연결되었을 때
wss.on("connection", (ws) => {
    console.log("새로운 클라이언트 연결됨");
    console.log(`현재 접속자 수: ${wss.client.size}`);

    //새 클라이언트에게 현재 카운터 값 전송
    ws.send(
        JSON.stringify({
            type: "INIT",
            counter: counter,
            clients: wss.clients.size,
        })
    );

    //모든 클라이언트에게 접속자 수 업데이트
    broadcast({
        type: "CLIENTS_UPDATE",
        clients: wss.clients.size,
    });

    //클라이언트로부터 메시지를 받았을 때
    ws.on("message", (data) => {
        try {
            const message = JSON.parse(data);
            console.log("받은 메시지: ", message);

            //메시지 타입에 따라 처리
            switch (message.type) {
                case "INCREMENT":
                    counter++;
                    broadcast({
                        type: "COUNTER_UPDATE",
                        counter: counter,
                    });
                    break;
                case "DECREMENT":
                    counter--;
                    broadcast({
                        type: "COUNTER_UPDATE",
                        counter: counter,
                    });
                    break;
                case "RESET":
                    counter = 0;
                    broadcast({
                        type: "COUNTER_UPDATE",
                        counter: counter,
                    });
                    break;
                default:
                    console.log("알 수 없는 메시지 타입:", message.type);
            }
        } catch (error) {
            console.error("메시지 파싱 에러", error);
        }
    });

    //클라이언트 연결이 끊어졌을 때
    ws.on("close", () => {
        console.log("클라이언트 연결 종료됨");
        console.log(`현재 접속자 수: ${wss.clients.size}`);

        //남은 클라이언트들에게 접속자 수 업데이트
        broadcast({
            type: "CLIENTS_UPDATE",
            clients: wss.clients.size,
        });
    });

    //에러 처리
    ws.on("error", (error) => {
        console.error("websocket 에러: ", error);
    });
});

console.log("websocket 서버 실행 중");
