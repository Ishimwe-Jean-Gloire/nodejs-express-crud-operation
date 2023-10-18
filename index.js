import express from "express";
const app = express();
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
app.use(bodyParser.json());

import mainRouter from "./src/routes/mainRoutes";
app.use("/api/v1", mainRouter);

const port = 5000;
mongoose.connect(process.env.NEW_CONNECTION).then((res) => {
  console.log("connected to database");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
