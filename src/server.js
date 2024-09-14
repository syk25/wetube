import express from "express";

const PORT = 4000;

const app = express(); // Express application 생성

/* NOTE: GET 요청 */
const handleHome = (req, res) => {
    // req: 서버한테 전달되는 내용을 표현하는 객체
    // console.log(req);
    // console.log(res);

    // return res.end(); // 요청을 끝내는 법 중에 하나 - 파이썬의 pass와 비슷한 역할 - 프로그램의 무한 실행을 중단시킴
    return res.send("I still love you.");
}; // NOTE: route handler

app.get("/", handleHome); // 요청은 받았지만 아직 응답은 아직 하지는 않았다.

/* NOTE: 서버 연결에 대한 콜백함수 */
const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);

/* NOTE:서버에 연결 */
app.listen(PORT, handleListening); // localhost:4000 에 접속 가능

const handleLogin = (req, res) => {
    return res.send("Login here.");
};
app.get("/login", handleLogin);
