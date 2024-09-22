import express from "express";

const PORT = 4000;

const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

const app = express();
app.listen(PORT, handleListening);

const logger = (req, res, next) => {
    console.log(`The action requested: ${req.method} ${req.url}`);
    next();
};

/* NOTE: 미들웨어를 통해 로직을 추가할 수 있다. + url 검증도 가능 */
const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not allowed</h1>");
    } else {
        console.log("The url is allowed. You may continue");
        next();
    }
};

const handleHome = (req, res) => {
    return res.send("I love middlewares");
};

const handleLogin = (req, res) => {
    return res.send({ message: "Login here." });
};

/* NOTE:  */
const handleProtected = (req, res) => {
    console.log("Welcome to the private lounge");
};

/* NOTE: use-get 순서 보장하기! */
app.use(logger); // 해당 함수는 아래서부터의 경로에서 호출 된다
app.use(privateMiddleware);

app.get("/", handleHome); // 미들웨어 실행 후 다음 함수 실행, 여기서 handleHome은 finalware - get 메서드 설명을 보면 헨들러는 여러개 등록 가능
app.get("/private", handleProtected);

app.get("/login", handleLogin);
