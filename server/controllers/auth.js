import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const secret = "test";

//Sign in
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Checking if the user exists
    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    // Validates the Password
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    // Response
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    });
    res.status(200).json({ result: oldUser, token: token });
  } catch (error) {
    // Error
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Sign Up
export const signup = async (req, res) => {
  const { name, email, password, url } = req.body;
  try {
    // Check Duplicate Email
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the User
    const result = await User.create({
      name,
      email,
      password: hashedPassword,
      image_url: url,
    });

    // Response
    res.status(201).json({ result });
  } catch (error) {
    // Error
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const getMe = async (req, res) => {
  res.status(200).json(req.user);
};

export const logout = async (req, res) => {
  res.status(200).clearCookie("jwtoken", { path: "/" }).send("Logout success");
};

//deletes the profile details from db
export const deleteProfile = async (req, res) => {
  const currentEmail = req.user.email;
  try {
    await User.deleteOne({ email: currentEmail });
    res
      .status(200)
      .clearCookie("jwtoken", { path: "/" })
      .send("Delete Successful");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const changePassword = async (req, res) => {
  const currentEmail = req.user.email;
  const { password, url } = req.body;
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.findOneAndUpdate(
      { email: currentEmail },
      { password: hashedPassword, image_url: url }
    );
    res.status(200).send("success");
  } else {
    res.status(500).send("something went wrong");
  }
};
