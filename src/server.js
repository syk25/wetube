import express from "express";

const app = express();
const PORT = 4000;
app.listen(PORT, () => console.log(`Connected to http://localhost:${PORT} 🚀`));

const handleHome = (req, res) => {
    console.log("current route: http://localhost");
    return res.end();
};

app.get("/", handleHome);
