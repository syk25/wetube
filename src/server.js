import express from "express";

const PORT = 4000;

const app = express(); // Express application 생성

/* NOTE: 서버란?
서버는 항상 켜져 있고 인터넷에 연결되어 있는 컴퓨터다.
서버는 request를 기다리고 있다.
request란 연결요쳥이다.
 */

const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); // localhost:4000 에 접속 가능
