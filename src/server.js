import express from "express";
import morgan from "morgan";

const PORT = 4000;

const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

const app = express();
const logger = morgan("dev"); // logger middleware: 정교함: 메서드, 경로, url, 상태코드, 실행시간 반환
app.listen(PORT, handleListening);

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not allowed</h1>");
    } else {
        console.log("The url is allowed. You may continue");
        next();
    }
};

const handleLogin = (req, res) => {
    return res.send({ message: "Login here." });
};

const handleProtected = (req, res) => {
    console.log("Welcome to the private lounge");
};

const home = (req, res) => {
    return res.send("Hello!");
};

const login = (req, res) => {
    return res.send("login");
};

app.use(logger);
app.get("/private", handleProtected);
app.get("/", home);
app.get("/login", login);

app.use(privateMiddleware);

app.get("/login", handleLogin);
