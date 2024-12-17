"use client"

import AddInformation from "@/component/AddInformation";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr"



const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TABLE_HEAD = [
  "No",
  "TITLE",
  "SUBDESC",
  "DESC",
  "DATE",
  "ACTION",

];

const ListInfo = () => {

  const [showModal, setShowModal] = useState(false);

  const { data: info, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_PRO}/api/info`, fetcher);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  }


  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/info/${id}`, {
        'method': "DELETE",
      });

      if (res.status === 200) {
        toast.success("Kelas berhasil dihapus");
      }
    } catch (error) {
      toast.error("Maaf sepertinya ada kesalahan pada server.", error);
    }
    mutate();
  };


  return (
    <>
      {showModal && (
        <div className="w-full h-full fixed left-0 top-0 bg-black/30">
          <div className="w-1/2 relative top-20 mx-auto">
            <AddInformation setShowModal={setShowModal} mutate={mutate} />
          </div>
        </div>

      )}

      <div className='w-full flex flex-wrap gap-4 md:gap-8 px-1 md:px-8'>
        {/* LEFT CONTENT */}

        <div className='w-full flex-1 bg-gray-50 rounded-lg shadow-md pb-8 '>
          <div className="px-2 py-2 border-b border-gray-300 mb-4 flex justify-between">
            <div className="flex gap-1 items-center text-blue-900/80">
              <p className="font-semibold text-lg capitalize">Data Informasi untuk umum</p>
            </div>
            <button onClick={() => handleModal()} className="px-3 py-2 rounded-lg bg-indigo-300 text-white" >Add Info</button>
          </div>

          <div className='px-4'>
            <table className="w-full table-auto text-left rtl:text-right overflow-auto">
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
                {info?.map((i, index) => (
                  <tr key={index}>
                    <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                      {index + 1}
                    </td>
                    <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                      {i?.title}
                    </td>
                    <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                      {i?.subDesc}
                    </td>
                    <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                      {i?.desc}
                    </td>
                    <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                      {moment(i?.createdAt).format("LLL")}
                    </td>
                    <td className="px-2 py-2 flex gap-1 items-center capitalize antialiased leading-relaxed">
                      <Link href={`/dashboard/ad,in/informasi/edit-info/${i?._id}`} >Edit</Link>
                      <button onClick={() => handleDelete(i?._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </>
  )
}

export default ListInfo