import express from "express";
import {
    see,
    edit,
    deleteVideo,
    uploadVideo,
} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);

export default videoRouter;
