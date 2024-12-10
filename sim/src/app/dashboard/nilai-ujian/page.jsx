"use client"


const TABLE_HEAD = [
    "No",
    "Kode Tes",
    "Ujian Selesai",
    "Status",
    "Jenis Soal",

];


const NilaiUjian = () => {
    return (
        <div className='w-full flex flex-wrap gap-4 md:gap-8 px-1 md:px-8'>
            {/* LEFT CONTENT */}
            <div className='w-full flex-1 bg-gray-50 rounded-lg shadow-md pb-8 '>
                <div className="px-2 py-2 border-b border-gray-300">
                    <div className="flex gap-1 items-center text-blue-900/80">
                        <p className="font-semibold text-lg">Data Nilai Ujian</p>
                    </div>
                </div>
                <div className='border-t-4 border-r-2 border-t-blue-400 w-fit px-2  mt-3'>
                    <p className='p-2 text-sm'>Hasil Ujian</p>
                </div>
                <div className='border-t'>
                    <p className='text-sm font-semibold p-7'>Daftar Ujian yang sudah dikerjakan</p>
                </div>
                <div className='px-4'>
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
                        {/* <tbody className='text-gray-700'>
                        <tr>
                            <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                                1
                            </td>
                            <td className="px-6 py-2 capitalize antialiased leading-relaxed">
                                kosong
                            </td>
                        </tr>
                    </tbody> */}
                    </table>
                </div>
            </div>

        </div>
    )
}

export default NilaiUjian