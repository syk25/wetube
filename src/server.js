import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
app.listen(PORT, handleListening);

const logger = morgan("dev");
app.use(logger);

/* NOTE: global Router */
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

/* NOTE: User Router */
const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

/* NOTE: Video Router */
const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Edit video");
videoRouter.get("/watch", handleWatchVideo);

/* NOTE: Router 등록 */
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("video", videoRouter);

const handleListening = () =>
    console.log(`Server is listening on port http://localhost:${PORT} 🚀`);
