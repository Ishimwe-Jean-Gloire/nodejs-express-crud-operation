import { newsLetter } from "../models";

export const addNew = async (req, res) => {
  await newsLetter.create(req.body);

  res.status(201).json({
    message: "Newsletter created",
  });
};

