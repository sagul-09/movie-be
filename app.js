import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import movieRouter from "./route/movieRoute.js";

app.use(express.json());
app.use(cors());

dotenv.config();
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (errorMessage) => {
  console.log(errorMessage);
});
db.once("open", () => {
  console.log("Connected successfully to the database!");
});

app.use("/api/v1/movie", movieRouter);

app.listen(3500, () => {
  console.log(`server is running in http://localhost:3500`);
});
