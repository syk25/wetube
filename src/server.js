import express from "express";

const app = express();
const PORT = 4000;
app.listen(PORT, () =>
    console.log(
        `Connected to http://localhost:${PORT} 🚀`
    )
);
