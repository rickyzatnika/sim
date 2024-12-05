"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";


const TugasSiswa = () => {
    return (
        <div className='w-full bg-gray-50 rounded-lg shadow-md '>
            <div className="px-2 py-2 border-b border-gray-300">
                <div className="flex gap-1 items-center text-blue-500">
                    <FaRegPenToSquare size={24} />
                    <p className="font-semibold ">Tugas Siswa</p>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-6'>
                {/* CARD */}
                <div className='w-full  rounded-lg shadow-md pb-4'>
                    <div className='bg-purple-400 w-full flex gap-1 items-start p-2'>
                        <Image src="/message.png" width={70} height={70} priority={true} />
                        <div className='flex flex-col items-start'>
                            <p className='text-lg text-gray-50 font-bold'>MTK</p>
                            <p className='text-sm text-gray-50'>Guru : Basuki Purnomo</p>
                        </div>
                    </div>
                    <p className='text-center text-xs text-blue-400 py-2'> Report Text About Places</p>
                    <div className='w-full flex items-center justify-between px-4 mb-4 border-t pt-4'>
                        <div className='flex items-center gap-1'>
                            <IoTimeSharp size={18} className='text-gray-700' />
                            <p className='text-sm text-gray-700'>Tugas Dimulai</p>
                        </div>
                        <span className='px-2 text-white rounded-full bg-green-600 text-xs'>
                            2024-11-21 13:00:00
                        </span>
                    </div>
                    <div className='w-full flex items-center justify-between px-4 mb-4 border-t pt-4'>
                        <div className='flex items-center gap-1'>
                            <IoTimeSharp size={18} className='text-gray-700' />
                            <p className='text-sm text-gray-700'>Tugas Ditutup</p>
                        </div>
                        <span className='px-2 text-white rounded-full bg-red-600 text-xs'>
                            2024-11-21 13:00:00
                        </span>
                    </div>
                    <div className='px-3 py-2 w-fit mx-auto rounded-lg shadow bg-blue-400 hover:bg-blue-500 transition-all duration-200 text-white text-center'>
                        <Link href="#"  >Lihat Tugas</Link>
                    </div>
                </div>
                {/* CARD */}
                <div className='w-full rounded-lg shadow-md pb-4'>
                    <div className='bg-cyan-400 w-full flex gap-1 items-start p-2'>
                        <Image src="/message.png" width={70} height={70} priority={true} />
                        <div className='flex flex-col items-start'>
                            <p className='text-lg text-gray-50 font-bold'>IPA</p>
                            <p className='text-sm text-gray-50'>Guru : Bu Marni</p>
                        </div>
                    </div>
                    <p className='text-center text-xs text-blue-400 py-2'> Report Text About Places</p>
                    <div className='w-full flex items-center justify-between px-4 mb-4 border-t pt-4'>
                        <div className='flex items-center gap-1'>
                            <IoTimeSharp size={18} className='text-gray-700' />
                            <p className='text-sm text-gray-700'>Tugas Dimulai</p>
                        </div>
                        <span className='px-2 text-white rounded-full bg-green-600 text-xs'>
                            2024-11-21 9:00:00
                        </span>
                    </div>
                    <div className='w-full flex items-center justify-between px-4 mb-4 border-t pt-4'>
                        <div className='flex items-center gap-1'>
                            <IoTimeSharp size={18} className='text-gray-700' />
                            <p className='text-sm text-gray-700'>Tugas Ditutup</p>
                        </div>
                        <span className='px-2 text-white rounded-full bg-red-600 text-xs'>
                            2024-11-22 9:00:00
                        </span>
                    </div>
                    <div className='px-3 py-2 w-fit mx-auto rounded-lg shadow bg-blue-400 hover:bg-blue-500 transition-all duration-200 text-white text-center'>
                        <Link href="#"  >Lihat Tugas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TugasSiswa