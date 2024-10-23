import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
const PORT = 4000;
app.listen(PORT, () => console.log(`Connected to http://localhost:${PORT} 🚀`));

const home = (req, res) => {
    console.log("current route: http://localhost");
    return res.end();
};

const login = (req, res) => {
    console.log(`Current route: http://localhost:${PORT}/login`);
    return res.send("Login Page");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);
