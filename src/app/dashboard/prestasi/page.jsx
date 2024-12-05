"use client"

import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";


const Prestasi = () => {
    return (
        <div className='w-full flex flex-wrap gap-4 md:gap-8 px-1 md:px-8'>
            {/* LEFT CONTENT */}
            <div className='w-full flex-1 bg-white  rounded shadow-lg'>
                <p className='border-b mb-2 md:mb-8 py-4 px-4 text-xl font-semibold text-blue-900/80'>Murid Nakal</p>
                <div className='w-full flex items-center justify-center md:mx-auto p-4 lg:p-12'>
                    <Image src="/siswi.png" width={270} height={270} objectFit='contain' priority={true} />
                </div>
            </div>
            {/* RIGHT CONTENT */}
            <div className='w-full flex-1 bg-gray-50 p-4 rounded-lg shadow-md'>
                <div className="flex gap-2 items-center text-gray-800">
                    <IoStarSharp />
                    <p className="font-semibold ">Input Prestasi</p>
                </div>
                {/* FORM INPUT */}
                <form className="mt-6">
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Semester</label>
                        <input type="number" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Tahun Pelajaran</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Nama Kegiatan</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Tanggal Kegiatan</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Penyelenggara</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-2">Juara</label>
                        <select className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500">

                            <option value="" style={{ display: "none" }}></option>
                            <option value="Juara 1">Juara 1</option>
                            <option value="Juara 2">Juara 2</option>
                            <option value="Juara 3">Juara 3</option>
                            <option value="Harapan 1">Harapan 1</option>
                            <option value="Harapan 2">Harapan 2</option>
                            <option value="Harapan 3">Harapan 3</option>

                        </select>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Foto Piala/Piagam <span className='text-xs text-red-400'>(wajib)</span></label>
                        <input type="file" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <button className="flex items-center justify-center w-full py-2 bg-blue-300 rounded-full text-gray-50 mt-8 hover:bg-blue-400 hover:text-white transition-all duration-150" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Prestasi