import express from "express";
import session from "express-session";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const logger = morgan("dev");
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// 라우트 이전에 세션 설정
app.use(
    session({
        secret: "Hello!",
        resave: true,
        saveUninitialized: true,
    })
);
app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});

app.get("/add-one", (req, res, next) => {
    req.session.potato += 1;
    return res.send(`${req.session.id} ${req.session.potato}`);
});

app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
