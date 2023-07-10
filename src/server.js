const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    console.log("hello from express");

    // res.status(200);
    res.sendFile(path.resolve("./src/index.html"));
    // res.json({ message: "hello" });
});

module.exports = app;
