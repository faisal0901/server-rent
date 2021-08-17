require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const ratingsRouter = require("./routes/ratings");
const carsRouter = require("./routes/cars");
const carsImageRouter = require("./routes/carsImage");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/ratings", ratingsRouter);
app.use("/cars", carsRouter);
app.use("/carsImage", carsImageRouter);
module.exports = app;
