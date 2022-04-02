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

    res.cookie("authToken", token);
    // Response
    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    // Error
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Sign Up
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

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
    });

    // Response
    res.status(201).json({ result });
  } catch (error) {
    // Error
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
