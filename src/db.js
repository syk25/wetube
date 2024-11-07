import mongoose from "mongoose";

// 데이터베이스와 연결
mongoose.connect(process.env.DB_URL);

// 연결 성공여부 확인
const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
