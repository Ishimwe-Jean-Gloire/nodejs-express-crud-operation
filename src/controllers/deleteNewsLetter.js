import { newsLetter } from "../models";

export const deleteAt = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteNews = await newsLetter.findOneAndDelete(id);

    if (!deleteNews) {
      return res
        .status(404)
        .json({ message: `cannot find any newsletter with ID ${id}` });
    }
    res.status(200).json(deleteNews);
  } catch (error) {
    console.log(error.message);
  }
};
