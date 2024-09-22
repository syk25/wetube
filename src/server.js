import express from "express";

const PORT = 4000;

const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

const app = express();
app.listen(PORT, handleListening);

const gossipMiddleware = (req, res, next) => {
    // 미들웨어는 요청에 응답하지 않고 다른 함수에게 요청을 토스함
    // next 함수 실행시 미들웨어라는 의미
    console.log(`Someone is going to request: ${req.url}`);
    next(); // 다음에 연결 된 함수 실행
};

const handleHome = (req, res) => {
    return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
    return res.send({ message: "Login here." });
};

app.get("/", gossipMiddleware, handleHome); // 미들웨어 실행 후 다음 함수 실행, 여기서 handleHome은 finalware - get 메서드 설명을 보면 헨들러는 여러개 등록 가능
app.get("/login", handleLogin);
