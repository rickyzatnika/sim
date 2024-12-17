"use client"

import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MateriDetail() {
    const router = useRouter();
    const { id } = router.query;

    const { data: materi, error } = useSWR(
        id ? `/api/materi/detail/${id}` : null,
        fetcher
    );

    if (error) return <div>Gagal memuat detail materi</div>;
    if (!materi) return <div>Loading...</div>;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">{materi.title}</h1>
            <p className="mt-2">Guru: {materi.guru}</p>
            <p className="mt-2">Deskripsi: {materi.desc}</p>
            <p className="mt-2">
                Tanggal: {new Date(materi.tanggal).toLocaleString()}
            </p>

            <div className="mt-4">
                <a
                    href={materi.contentUrl}
                    download
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Download Materi PDF
                </a>
            </div>
        </div>
    );
}