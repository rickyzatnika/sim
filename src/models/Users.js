import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "student",
    },
     name: {
      type: String,
      unique: true,
    },
    kodePeserta: {
      type: String,
      unique: true,
    },
    mataUjian: {
      type: String,
    },
    classes: {
      type: String,
    },
    gender: {
      type: String,
    },
    major: {
      type: String,
    },
    tempatLahir: {
      type: String,
    },
    tanggalLahir: {
      type: String,
    },
    agama: {
      type: String,
    },
    alamat: {
      type: String,
    },
    image: {
      type: String, // URL atau path ke gambar
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Users = mongoose.model("Users", UsersSchema);

export default Users;