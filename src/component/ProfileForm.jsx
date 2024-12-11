"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileForm = ({ users, mutate, setShowModal, showModal }) => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [classes, setClasses] = useState("");
  const [tempatLahir, setTmpatLahir] = useState("");
  const [tanggalLahir, setTglLahir] = useState("");
  const [agama, setAgama] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    if (users) {
      setName(users.name || "");
      setMajor(users.major || "");
      setClasses(users.classes || "");
      setTglLahir(users.tanggalLahir || "");
      setTmpatLahir(users.tempatLahir || "");
      setAgama(users.agama || "");
      setAlamat(users.alamat || "");
    }
  }, [users]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user?._id) {
      toast.error("User tidak valid!");
      return;
    }

    setLoading(true);
    try {
      const body = {
        name,
        major,
        classes,
        tempatLahir,
        tanggalLahir,
        agama,
        alamat,
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_PRO}/api/register/${session?.user?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(body),
        }
      );

      if (res.ok) {
        toast.success(`Data berhasil disimpan`);
        mutate();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Gagal memperbarui data");
      }
    } catch (error) {
      toast.error("Ups something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">Nama Lengkap</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">Jurusan</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">Kelas</label>
        <input
          type="text"
          value={classes}
          onChange={(e) => setClasses(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">Tempat Lahir</label>
        <input
          type="text"
          value={tempatLahir}
          onChange={(e) => setTmpatLahir(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">
          Tanggal Lahir(contoh: 9 Mei 2004)
        </label>
        <input
          type="text"
          value={tanggalLahir}
          onChange={(e) => setTglLahir(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">Agama</label>
        <input
          type="text"
          value={agama}
          onChange={(e) => setAgama(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">Alamat</label>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-sm mb-1">
          Foto <span className="text-xs text-red-400">(optional)</span>
        </label>
        <input
          type="file"
          className="p-2  outline-none focus:border-2 rounded-lg focus:border-blue-500"
        />
      </div>

      <button
        className="flex items-center justify-center w-full py-2 bg-blue-300 rounded-full text-gray-50 mt-8 hover:bg-blue-400 hover:text-white transition-all duration-150"
        type="submit"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <span>Loading...</span>
            <span className="loader"></span>
          </div>
        ) : (
          "Simpan"
        )}
      </button>
    </form>
  );
};

export default ProfileForm;
