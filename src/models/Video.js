import mongoose from "mongoose";

// 데이터베이스에게 모델을 알려주자

// 1. 스키마 결정하기
const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,
    },
});

// 2. 모델 내보내기
const Video = mongoose.model("Video", videoSchema);
export default Video;
