import express from "express";
import { verifyToken } from "../middlewares";

const newsLetterRouter = express.Router();

import { addNew, update, getDataById, getData, deleteAt } from "../controllers";

newsLetterRouter.use(verifyToken);

newsLetterRouter.get("/", getData);
newsLetterRouter.post("/", addNew);
newsLetterRouter.patch("/update/:id", update);
newsLetterRouter.delete("/delete/:id", deleteAt);
newsLetterRouter.get("/:paramid", getDataById);

export default newsLetterRouter;
