import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favourites: {
    type: Number,
    default: 0,
  },
  myrecipe: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("USER", userSchema);
export default User;
