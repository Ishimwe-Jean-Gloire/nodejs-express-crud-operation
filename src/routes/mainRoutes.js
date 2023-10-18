import express from "express";

import authRouter from "./authentication";
import newsLetterRouter from "./newsLetter";

const mainRouter = express.Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/newsLetter", newsLetterRouter);

export default mainRouter;
