const express = require("express");
const createError = require("http-errors");
const dotenv = require("dotenv");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const path = require("path");
const indexRouter = require("./routes");
// const authRouter = require("./routes/auth");
// const usersRouter = require("./routes/users");
// const profilesRouter = require("./routes/profiles");
const teamsRouter = require("./routes/teams");
const rostersRouter = require("./routes/rosters");
// const ytRouter = require('./routes/yt')
const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "api")));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", indexRouter);

app.use("/api", teamsRouter);
app.use("/api", rostersRouter);
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  if (err instanceof createError.HttpError) {
    res.locals.message = err.message;
    res.locals.status = err.statusCode;
    if (process.env.NODE_ENV === "development") {
      res.locals.error = err;
    }
  }

  if (process.env.NODE_ENV === "production" && !res.locals.message) {
    res.locals.message = "ApplicationError";
    res.locals.status = 500;
  }
  if (res.locals.status) {
    res.status(res.locals.status || 500);
    const errObject = { error: res.locals.error, message: res.locals.message };
    return res.json(errObject);
  }
  next(err);
});

module.exports = app;
