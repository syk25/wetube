import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
app.listen(PORT, handleListening);

const logger = morgan("dev");
app.use(logger);

/* NOTE: Router 등록 */
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("video", videoRouter);

const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);
