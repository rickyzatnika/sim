import mongoose from "mongoose";

const MateriSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Judul materi
  teacher: { type: String, required: true }, // Nama guru
  desc: { type: String, required: true }, // Deskripsi singkat materi
  date: { type: Date, default: Date.now }, // Tanggal materi diunggah
  contentUrl: { type: String, required: true }, // URL file PDF materi
  
});



mongoose.models = {};
const Materi = mongoose.model("Materi", MateriSchema);

export default Materi;