"use client"


import useSWR from "swr";
import { useEffect, useState } from "react";

const DaftarMurid = () => {
    const [users, setUsers] = useState([]);

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_PRO}/api/user`, fetcher);

    useEffect(() => {
        // if (data) {
        //     // Mengurutkan data hanya jika data ada
        //     const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        //     setUsers(sortedData);
        //     mutate(); // Update data
        // }

        console.log(data);

    }, [data, mutate]);

    return (
        <div>DaftarMurid</div>
    )
}

export default DaftarMurid