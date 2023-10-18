import { newsLetter } from "../models";

export const getDataById = async (req, res) => {
  try {
    let { paramid } = req.params;
    console.log(paramid);
    let data = await newsLetter.findById(paramid);
    console.log(data);
    res.status(200).json({
      message: "user found",
      user: data,
    });
  } catch (error) {
    console.log(error);
  }
};
