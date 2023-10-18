import { generateToken, hashPassword } from "../../utils";
import { User } from "../../models";

export const signUp = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    res.status(409).json({ message: "user already exists" });
  }

  try {
    let hashedPassword =await hashPassword(req.body.password);
    req.body.password = hashedPassword;
    let newUser = await User.create(req.body);

    console.log("New User", newUser);

    let token = generateToken({
      _id: newUser._id,
      email: newUser.email,
    });

    res.status(201).json({
      message: "user registered successfully",
      access_token: token,
      user: {
        email: newUser.email,
        location: newUser.location,
        fullNames: newUser.fullNames,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
