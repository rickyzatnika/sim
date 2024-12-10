import mongoose from "mongoose";

const InfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "information",
    },
    subDesc: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Info = mongoose.model("Information", InfoSchema);

export default Info;
