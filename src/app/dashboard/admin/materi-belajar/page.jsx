"use client"


import React from 'react'
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
  const { data: materi, error } = useSWR(
    session?.user?.jurusan ? `/api/materi/${session.user.jurusan}` : null,
    fetcher
  );

  const { data } = useSWR(`/api/materi`, fetchAll);

  if (error) return <div>Gagal memuat materi</div>;


  return (
    <div className='w-full'>
      <div className="px-2 py-2 border-b border-gray-300 flex items-center justify-between mb-6">
        <div className="flex gap-1 items-center text-blue-500">
          <FaRegPenToSquare size={24} />
          <p className="font-semibold ">Daftar Semua Materi Siswa</p>
        </div>
        <Link href="/dashboard/admin/materi-belajar/add-materi">Buat Materi</Link>
      </div>


      <div className='w-full flex-1 bg-gray-50 rounded-lg  pb-8 '>

        <table className="w-full table-auto text-left rtl:text-right">
          <thead className="text-sm uppercase second bg-gray-300 text-gray-800">
            <tr className="">
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-6 py-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {
              data?.map((m, i) => (
                <tr key={i}>
                  <td className="border-b px-6 py-2 capitalize antialiased leading-relaxed">
                    {i + 1}.
                  </td>
                  <td className="border-b px-6 py-2 capitalize antialiased leading-relaxed">
                    {m?.title}
                  </td>
                  <td className="border-b px-6 py-2 capitalize antialiased leading-relaxed">
                    {m?.teacher}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default MateriBelajar