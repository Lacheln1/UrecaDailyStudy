import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

//express 앱 생성
const app = express();
const httpServer = createServer(app);

//socket.io 서버 생성
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

//전역 카운터 상태
let counter = 0;

//접속자 수를 가져오는 헬퍼 함수
function getClientsCount() {
    return io.engine.clientsCount;
}

//클라이언트가 연결되었을 때
io.on("connection", (socket) => {
    console.log("새로운 클라이언트 연결됨");
    console.log(`socket ID : ,${socket.id}`);
    console.log(`현재 접속자 수 : ${getClientsCount}`);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 초기 데이터 전송 (특정 클라이언트에게만)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Native: ws.send(JSON.stringify({ type: 'INIT', ... }))
    // Socket.io: socket.emit('이벤트명', 데이터)
    socket.emit("init", {
        counter: counter,
        clients: getClientsCount(),
    });

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 모든 클라이언트에게 접속자 수 업데이트
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Native: broadcast({ type: 'CLIENTS_UPDATE', ... })
    // Socket.io: io.emit('이벤트명', 데이터)
    io.emit("clients-update", getClientsCount());

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 이벤트 리스너 등록
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // Native: switch(message.type) { case 'INCREMENT': ... }
    // Socket.io: socket.on('이벤트명', 콜백)
    socket.on("increment", () => {
        console.log("increment 이벤트 수신");
        counter++;

        //모든 클라이언트에게 브로드캐스트
        io.emit("counter-update", counter);
        console.log(`새 카운터 값: ${counter}`);
    });

    socket.on("decrement", () => {
        console.log("decrement 이벤트 수신");
        counter--;

        io.emit("counter-update", counter);
        console.log(`새 카운터 값: ${counter}`);
    });

    socket.on("reset", () => {
        console.log("reset 이벤트 수신");
        counter = 0;

        io.emit("counter-update", counter);
        console.log(`카운터 초기화 됨`);
    });

    //연결 종료 처리
    socket.on("disconnect", (reason) => {
        console.log("클라이언트 연결 종료됨");
        console.log(`soket ID: ${socket.id}`);
        console.log(`종료 이유: ${reason}`);
        console.log(`남은 접속자 수: ${getClientsCount()}`);

        //남은 클라이언트들에게 업데이트
        io.emit("clients-update", getClientsCount());
    });

    //에러 처리
    socket.on("error", (error) => {
        console.log("socket error: ", error);
    });
});

//서버 시작
const PORT = 8080;
httpServer.listen(PORT, () => {
    console.log("socket.io 서버가 8080에서 실행중");
    console.log(`접속 url: http://localhost:${PORT}`);
});
