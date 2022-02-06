import express from "express"
import rateLimit from "express-rate-limit";//for brute force attack
import mongoSanitize from "express-mongo-sanitize"; //for noSql query injections
import helmet from "helmet"; //Protects from various attacks eg xss etc
import cors from "cors"
import morgan from "morgan"

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1hr
  max: 1000, // limit each IP to 100 requests per windowMs
  message: "you've exceed the number of requests",
});

const app = express();

//implementing cors
app.use(cors({ origin: true, credentials: true }));
//serving static content
// app.use(express.static("public"));
// app.use("/uploads", express.static("uploads"));

//middlewares
app.use(limiter);

app.use(express.json());

app.use(mongoSanitize());
app.use(helmet())
app.use(morgan("dev"));

//routers
// app.use("/api/v1/arts", artRouter);
// app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/profile", profileRouter);
// app.use("/api/v1/link", linkRouter);

// app.use((req, res, next) => {
//   res.sendFile(__dirname + "/public/" + "index.html");
// });

// module.exports = app;
export default app;