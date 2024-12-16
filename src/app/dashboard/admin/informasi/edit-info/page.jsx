"use client";

import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditInformation = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [subDesc, setSubdesc] = useState("");
  const [desc, setDesc] = useState("");

  // const formInformation = async (e) => {
  //     e.preventDefault();

  //     try {
  //         setLoading(true);
  //         const res = await fetch("/api/info/", {
  //             method: "PUT",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({
  //                 title,
  //                 subDesc,
  //                 desc,
  //             }),
  //         });

  //         const resJ = await res.json();

  //         if (res.status === 200) {
  //             const timeoutId = setTimeout(() => {
  //                 setLoading(false);
  //                 toast.success(resJ.message);
  //                 mutate();
  //                 setShowModal(false);
  //             }, 3000);

  //             return () => clearTimeout(timeoutId);
  //         } else {
  //             toast.error("ups coba ulangi");
  //         }
  //     } catch (error) {
  //         toast.error(resJ.message);
  //     }
  // };

  return (
    <>
      {/* PROFILE MURID */}
      <div className="flex-1 bg-gray-50 rounded shadow-md">
        <div className="mb-3 text-md ">
          <p className="bg-orange-400 uppercase shadow-md p-3 text-center text-white">
            Buat Informasi
          </p>
        </div>
        <form onSubmit={formInformation} className="p-4">
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800  outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
          />
          <input
            type="text"
            placeholder="Sub Deskripsi"
            value={subDesc}
            onChange={(e) => setSubdesc(e.target.value)}
            className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800  outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
          />
          <textarea
            type="text"
            placeholder="Deskripsi"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800  outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
          />
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-3 mt-6 w-full rounded uppercase transition-all duration-150 ease-linear bg-gradient-to-tr from-green-500 to-lime-400 text-slate-100 hover:bg-green-500 hover:text-white"
              type="submit"
            >
              {loading ? (
                <div className="flex gap-2 items-center justify-center">
                  <span className=" text-white">Loading... </span>
                  <span className="loader"></span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
            <button onClick={() => setShowModal(false)} className="px-4 py-3 mt-6 w-full rounded  uppercase transition-all duration-150 ease-linear bg-orange-400  text-white">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditInformation;
