"use client"

import { FaBell } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {

  const { data: session } = useSession();

  const { data: users, mutate } = useSWR(
    session?.user?._id ? `${process.env.NEXT_PUBLIC_API_PRO}/api/register/${session.user._id}` : null,
    fetcher
  );

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [kodePeserta, setKodePeserta] = useState("");
  const [mataUjian, setMataUjian] = useState("");
  const [gender, setGender] = useState("");



  useEffect(() => {
    if (users) {
      setName(users.name || "");
      setKodePeserta(users.kodePeserta || "");
      setMataUjian(users.mataUjian || "");
      setGender(users.gender || "");
    }
  }, [users]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?._id) {
      toast.error("User tidak valid!");
      return;
    }

    setLoading(true);
    try {
      const body = { name, kodePeserta, mataUjian, gender };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRO}/api/register/${session.user._id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const resJson = await res.json();
        toast.success(`${resJson.kodePeserta} Valid!`);
        mutate();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Gagal memperbarui data");
      }
    } catch (error) {
      toast.error("Ups something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='w-full flex flex-wrap gap-4 md:gap-8 px-1 md:px-8'>
      {/* LEFT CONTENT */}
      <div className='w-full flex-1 bg-gray-50 rounded-lg shadow-md'>
        <div className="px-2 py-2 border-b border-gray-300">
          <div className="flex gap-1 items-center text-blue-500">
            <FaBell />
            <p className="font-semibold ">Informasi</p>
          </div>
        </div>
        {/* CONTENT DATA FETCH */}
        <div className="flex items-start gap-2 px-4 py-3 mt-6">
          <div className="bg-blue-400 rounded-full mt-1 w-8 h-8 flex items-center justify-center">
            <IoMailSharp size={20} className="mt-1 text-white" />
          </div>
          <div className="flex-1 shadow-sm">
            <div className="flex items-center justify-between bg-orange-100/50 p-2 rounded-md text-gray-600">
              <p className="text-blue-800/80 font-semibold">INFORMASI</p>
              <div className="text-sm flex gap-1 items-center">
                <MdOutlineDateRange size={14} />
                <span>01-09-2024</span>
                <p className="text-sm">Admin</p>
              </div>
            </div>
            <p className="px-3 py-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum voluptas cumque! Saepe dolor laborum quo harum rem non rerum nulla? Maxime aut vitae a.</p>
          </div>
        </div>
        {/* CONTENT DATA FETCH */}
        <div className="flex items-start gap-2 px-4 py-3">
          <div className="bg-blue-400 rounded-full mt-1 w-8 h-8 flex items-center justify-center">
            <IoMailSharp size={20} className="mt-1 text-white" />
          </div>
          <div className="flex-1 shadow-sm">
            <div className="flex items-center justify-between bg-orange-100/50 p-2 rounded-md text-gray-600">
              <p className="text-blue-800/80 font-semibold">INFORMASI</p>
              <div className="text-sm flex gap-1 items-center">
                <MdOutlineDateRange size={14} />
                <span>01-09-2024</span>
                <p className="text-sm">Admin</p>
              </div>
            </div>
            <p className="px-3 py-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum voluptas cumque! Saepe dolor laborum quo harum rem non rerum nulla? Maxime aut vitae a.</p>
          </div>
        </div>
        {/* CONTENT DATA FETCH */}
        <div className="flex items-start gap-2 px-4 py-3">
          <div className="bg-blue-400 rounded-full mt-1 w-8 h-8 flex items-center justify-center">
            <IoMailSharp size={20} className="mt-1 text-white" />
          </div>
          <div className="flex-1 shadow-sm">
            <div className="flex items-center justify-between bg-orange-100/50 p-2 rounded-md text-gray-600">
              <p className="text-blue-800/80 font-semibold">INFORMASI</p>
              <div className="text-sm flex gap-1 items-center">
                <MdOutlineDateRange size={14} />
                <span>01-09-2024</span>
                <p className="text-sm">Admin</p>
              </div>
            </div>
            <p className="px-3 py-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum voluptas cumque! Saepe dolor laborum quo harum rem non rerum nulla? Maxime aut vitae a.</p>
          </div>
        </div>
      </div>
      {/* RIGHT CONTENT */}
      <div className='w-full flex-1 bg-gray-50 p-4 rounded-lg shadow-md'>
        <div className="flex gap-2 items-center text-gray-800">
          <FaGraduationCap size={28} />
          <p className="text-lg ">Konfirmasi Data Peserta</p>
        </div>
        {/* FORM INPUT */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col">
            <label className="text-sm mb-2">Kode Peserta</label>
            <input type="text" value={kodePeserta} disabled className="p-2 cursor-not-allowed outline-none rounded-lg text-gray-500 bg-white" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2">Nama Peserta</label>
            <input value={name} onChange={((e) => setName(e.target.value))} type="text" className="p-2 text-gray-500  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2">Mata Ujian</label>
            <input value={mataUjian} onChange={(e) => setMataUjian(e.target.value)} type="text" className="p-2 text-gray-500  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2">Jenis Kelamin</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="p-2  text-gray-500 outline-none focus:border-2 rounded-lg focus:border-blue-500">
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>
          <button className="flex items-center justify-center w-full py-2 bg-blue-300 rounded-full text-gray-50 mt-8 hover:bg-blue-400 hover:text-white transition-all duration-150" type="submit">
            {loading ? <div className="flex items-center justify-center gap-2"><span>Loading...</span><span className="loader"></span></div> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard