"use client"; // Menandakan bahwa ini hanya dijalankan di sisi klien

import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const getInfoById = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_PRO}/api/info/${id}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const DetailInfo = ({ id }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Pemanggilan API hanya dilakukan di sisi klien
    const fetchInfo = async () => {
      const data = await getInfoById(id);
      setInfo(data);
    };

    fetchInfo();
  }, [id]); // Dependency array, fetch data setiap kali `id` berubah

  if (!info) {
    return <div>Loading...</div>; // Menampilkan state loading jika data belum diambil
  }

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 py-6 sm:py-14 gap-4 md:gap-8 ">
        {/* Left */}
        <div className="col-span-12 md:col-span-8">
          <div className="relative flex justify-center flex-col gap-3 ">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold leading-relaxed tracking-wide">
              {info?.title}
            </h1>
            <div className="relative w-full h-full my-2 sm:my-6">
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center justify-between w-full px-0 md:px-2 pt-2">
                <div className="flex items-center gap-1 ">
                  <span className="text-xs px-2 py-0.5 rounded-full text-gray-500 bg-slate-200 shadow dark:bg-slate-700 dark:text-gray-200 w-fit">
                    {moment(info?.createdAt).format("LL")}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs px-2 py-0.5 rounded-full text-gray-500 bg-slate-200 shadow dark:bg-slate-700 dark:text-gray-200 w-fit">
                    {info?.subDesc}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-md font-medium text-gray-600 dark:text-gray-400">
              {info?.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailInfo;
