import express from "express";
import session from "express-session";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";

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
        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017/wetube",
        }),
    })
);

app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
