import mongoose from "mongoose";

// 데이터베이스에게 모델을 알려주자

// 1. 스키마 결정하기
const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    },
});

// 2. 모델 내보내기
const Video = mongoose.model("Video", videoSchema);
export default Video;
