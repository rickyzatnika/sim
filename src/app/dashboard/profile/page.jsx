import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center gap-8 md:gap-8 items-start'>
            <div className='w-full flex-1 bg-white  rounded shadow-lg'>
                <p className='border-b mb-2 md:mb-8 py-4 px-4 text-xl font-semibold text-blue-900/80'>Murid Baik</p>
                <div className='w-full flex items-center justify-center md:mx-auto p-4 lg:p-12'>
                    <Image src="/siswi.png" width={270} height={270} objectFit='contain' priority={true} />
                </div>
            </div>

            <div className='w-full px-4 flex-1 bg-gray-50 p-14 shadow-lg rounded'>
                <form className="">
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Username</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Password</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Tempat Lahir</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Tanggal Lahir(contoh: 9 Mei 2004)</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Agama</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Alamat</label>
                        <input type="text" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="text-sm mb-1">Foto <span className='text-xs text-red-400'>(optional)</span></label>
                        <input type="file" className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500" />
                    </div>
                    <button className="flex items-center justify-center w-full py-2 bg-blue-300 rounded-full text-gray-50 mt-8 hover:bg-blue-400 hover:text-white transition-all duration-150" type="submit">Simpan</button>
                </form>
            </div>

        </div>
    )
}

export default Profile