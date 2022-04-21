const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const candidates = require("./routes/candidates");
app.use("/api/v1", candidates);
module.exports = app;
