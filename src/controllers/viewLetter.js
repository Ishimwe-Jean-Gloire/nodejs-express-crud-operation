import { newsLetter } from "../models";

export const getData =async (req, res) => {
 let data = await newsLetter.find();
 res.status(200).json({ data: data });
};

  
