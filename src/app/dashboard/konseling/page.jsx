import React from 'react'


const TABLE_HEAD = [

    "Tanggal",
    "Kategori",
    "Deskripsi",
    "Solusi",

];

const TABLE_KONS = [

    "Tanggal",
    "Keterangan",
    "Point",
];


const Konseling = () => {
    return (
        <div className='w-full flex flex-col gap-8 px-1 md:px-8'>
            {/* Konsultasi */}
            <div className='w-full flex-1 bg-gray-50 rounded-lg shadow-md pb-8 '>
                <div className="px-2 py-2 border-b border-gray-300">
                    <div className="flex gap-1 items-center text-blue-900/80">
                        <p className="font-semibold text-lg">Konsultasi</p>
                    </div>
                </div>
                <div className='px-4 mt-3'>
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
            {/* Konseling */}
            <div className='w-full flex-1 bg-gray-50 rounded-lg shadow-md pb-8 '>
                <div className="px-2 py-2 border-b border-gray-300">
                    <div className="flex gap-1 items-center text-blue-900/80">
                        <p className="font-semibold text-lg">Konseling</p>
                    </div>
                </div>
                <div className='px-4 mt-3'>
                    <table className="w-full table-auto text-left rtl:text-right">
                        <thead className="text-sm uppercase second bg-gray-300 text-gray-800">
                            <tr className="">
                                {TABLE_KONS.map((head) => (
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

export default Konseling