import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

app.get("/", (req, res) => {
  res.send("working");
});
app.listen(3500, () => {
  console.log(`server is running in http://localhost:3500`);
});
