"use client";

import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex gap-3 items-center">
      <Link
        className="px-3 py-1 border rounded-md hover:bg-indigo-400 hover:text-white"
        href="/dashboard/admin/informasi"
      >
        INFORMASI
      </Link>

      <Link
        className="px-3 py-1 border rounded-md hover:bg-indigo-400 hover:text-white"
        href="/dashboard/admin/user"
      >
        USER
      </Link>
      <Link
        className="px-3 py-1 border rounded-md hover:bg-indigo-400 hover:text-white"
        href="/dashboard/admin/materi-belajar"
      >
        MATERI BELAJAR
      </Link>

    </div>
  );
};

export default AdminPage;
