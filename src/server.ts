import express from "express";
import router from "./router";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    next(new Error("wake up"));

    // setTimeout(() => {
    //     throw new Error("");
    // }, 1);
    // console.log("hello from express");
    // res.sendFile(path.resolve("./src/index.html"));
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signIn);

app.use((err, req, res, next) => {
    if (err.type === "auth") {
        res.status(401).json({ message: "Unauthorized" });
    } else if (err.type === "input") {
        res.status(400).json({ message: "invalid input" });
    } else {
        res.status(500).json({ message: "service error" });
    }
});

export default app;
