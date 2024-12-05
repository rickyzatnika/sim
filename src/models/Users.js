import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    // name: {
    //   type: String,
    //   unique: true,
    //   required: true,
    // },

    // major: {
    //   type: String,
    //   unique: true,
    // },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String, // URL atau path ke gambar
    },
    role: {
      type: String,
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Users = mongoose.model("Users", UsersSchema);

export default Users;