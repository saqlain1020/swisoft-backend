import dotenv from "dotenv"
dotenv.config()
import app from "./app";
import mongoose from "mongoose";

const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ""
const MONGO_STRING = process.env.MONGO_STRING || ""
const PORT = process.env.PORT || 8000;

const DB = MONGO_STRING.replace(
  "<password>",
  MONGO_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("connected to mogndodb");
  });

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});