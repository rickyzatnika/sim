"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";


const MateriForm = () => {
  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();


  const UPLOAD_PRESET = "myBlog_project_nextjs";
  const CLOUD_NAME = "inkara-id";


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("File PDF diperlukan!");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Upload File ke Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!cloudinaryResponse.ok) {
        throw new Error("Gagal mengunggah file ke Cloudinary");
      }

      const cloudinaryData = await cloudinaryResponse.json();
      const fileUrl = cloudinaryData.secure_url;

      // Step 2: Simpan Materi ke Database
      const body = {
        title,
        teacher,
        desc,
        contentUrl: fileUrl, // URL file PDF dari Cloudinary
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/api/materi`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success("Materi berhasil disimpan!");
        mutate();
        router.push("/dashboard/admin/materi-belajar")
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Gagal menyimpan materi");
      }
    } catch (error) {
      toast.error(error.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg w-full md:w-4/6">
        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1">Pelajaran</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 outline-none border rounded-lg focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1">Nama Guru</label>
          <input
            type="text"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="p-2 outline-none border rounded-lg focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1">Deskripsi</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="p-2 outline-none border rounded-lg focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>


        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1">Upload File PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 outline-none border rounded-lg focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          {loading ? "Loading..." : "Simpan Materi"}
        </button>
      </form>
    </div>
  );
};

export default MateriForm;
