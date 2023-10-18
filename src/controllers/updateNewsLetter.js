import { newsLetter } from "../models";

export const update = async (req, res) => {
  try {
    const updateId = req.params.id;
    const newData = req.body;
    const user = await newsLetter.findByIdAndUpdate(updateId, newData);

    if (user) {
      const updatedData = await newsLetter.findById(updateId);

      res.status(200).json({
        status: 200,
        newData: updatedData,
      });
    } else {
      res.status(404).json({ status: 404, message: "user not found" });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};
