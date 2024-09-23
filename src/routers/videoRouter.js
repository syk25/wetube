import express from "express";
import {
    see,
    edit,
    deleteVideo,
    uploadVideo,
} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);

export default videoRouter;
