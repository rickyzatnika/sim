"use client"


import React from 'react'
import Image from 'next/image'
import { FaRegPenToSquare } from "react-icons/fa6";
import Link from "next/link";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());
const fetchAll = (url) => fetch(url).then((res) => res.json());


const TABLE_HEAD = [
  "No",
  "Mata Pelajaran",
  "Guru",
];


const MateriBelajar = () => {

  const { data: session } = useSession();
  // const { data: materi, error } = useSWR(
  //   session?.user?.jurusan ? `${process.env.NEXT_PUBLIC_API_PRO}/api/materi/${session.user.jurusan}` : null,
  //   fetcher
  // );
  const { data: materi, error } = useSWR(`${process.env.NEXT_PUBLIC_API_PRO}/api/materi`, fetcher);

  if (error) return <div className='text-red-400 text-base'>kesalahan server, coba periksa koneksi internet anda..</div>;


  return (
    <div>


      <div className="px-2 py-2 border-b border-gray-300">
        <div className="flex gap-1 items-center text-blue-500">
          <FaRegPenToSquare size={24} />
          <p className="font-semibold ">Materi Siswa</p>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-1 md:px-6'>
        {/* CARD */}
        {
          materi?.map((m, i) => {
            // Fungsi untuk menghasilkan warna acak
            const randomColor = () => {
              const colors = [
                "bg-orange-400",
                "bg-green-400",
                "bg-blue-400",
                "bg-yellow-400",
                "bg-purple-400",
                "bg-pink-400",
              ];
              return colors[Math.floor(Math.random() * colors.length)];
            };

            return (
              <Link key={i} href={`/dashboard/materi-belajar/${m?._id}`} className="w-full group rounded-lg shadow-md pb-4">
                <div className={`${randomColor()} w-full flex gap-3 items-start p-2`}>
                  <Image alt="message-icon" src="/message.png" width={60} height={60} priority={true} />
                  <div className="flex flex-col items-start">
                    <p className="text-lg text-gray-50 font-bold">{m?.title}</p>
                    <p className="text-sm text-gray-50">Guru : {m?.teacher}</p>
                  </div>
                </div>
                <p className="relative top-2 scale-95 group-hover:scale-105 text-center text-sm group-hover:text-gray-800 text-gray-400 py-2 transition-all duration-200 ">{m?.desc}</p>
              </Link>
            );
          })
        }
      </div>

    </div>
  )
}

export default MateriBelajar