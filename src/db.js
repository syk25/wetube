import mongoose from "mongoose";

// 데이터베이스와 연결
mongoose.connect("mongodb://127.0.0.1:27017/wetube");

// 연결 성공여부 확인
const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB error", error);

db.on("error", handleError); // on 함수로 에러 감지
db.once("open", handleOpen); // once 함수로 한번만 실행 감지
