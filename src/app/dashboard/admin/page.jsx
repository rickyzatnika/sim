import Link from 'next/link'
import React from 'react'

const AdminPage = () => {
    return (
        <>
            <Link href="/dashboard/admin/add-user" >Tambah User</Link>
            <Link href="/dashboard/admin/daftar-murid" >Daftar Murid</Link>
        </>
    )
}

export default AdminPage