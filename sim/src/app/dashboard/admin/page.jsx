import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link
        className="px-3 py-1 border rounded-md hover:bg-indigo-400 hover:text-white"
        href="/dashboard/admin/add-user"
      >
        Tambah User
      </Link>
      <Link
        className="px-3 py-1 border rounded-md hover:bg-indigo-400 hover:text-white"
        href="/dashboard/admin/add-info"
      >
        Buat Informasi
      </Link>
      <Link
        className="px-3 py-1 border rounded-md hover:bg-indigo-400 hover:text-white"
        href="/dashboard/admin/daftar-murid"
      >
        Daftar Murid
      </Link>
    </div>
  );
};

export default AdminPage;
