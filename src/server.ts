import express from "express";
import router from "./router";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";

const app = express();

// const customLogger = message => (req, res, next) => {
//     console.log(message);
//     next();
// };

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(customLogger("custom logger active"));

app.get("/", (req, res) => {
    console.log("hello from express");
    res.sendFile(path.resolve("./src/index.html"));
});

app.use("/api", protect, router);

export default app;
