"use client";


import { toast } from "react-toastify";
import { TbEyeClosed } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormRegister = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const [password, setPassword] = useState("")
  const [confPassword, setConfpassword] = useState("")
  const [name, setName] = useState("")
  const [classes, setClasses] = useState("")
  const [kodePeserta, setKodePeserta] = useState("")
  const [major, setMajor] = useState("")
  const [mataUjian, setMataUjian] = useState("")
  const [gender, setGender] = useState("")
  const [tempatLahir, setTempatLahir] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [agama, setAgama] = useState("")
  const [alamat, setAlamat] = useState("")


  const handlePasswordVisible = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleConfirmVisible = () => {
    setConfirmVisible((prev) => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();


    if (!password || !confPassword) {
      toast.error("field required!");
      return;
    }

    if (password.length < 4) {
      toast.error("Password harus lebih dari 6 karakter");
      return;
    }
    if (password !== confPassword) {
      toast.error("Password dan Konfirmasi Password harus sama");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: kodePeserta,
          password,
          name,
          kodePeserta,
          major,
          classes,
          mataUjian,
          gender,
          tempatLahir,
          tanggalLahir,
          agama,
          alamat
        }),
      });

      const error = await res.json();

      if (res.status === 201) {
        const timeoutId = setTimeout(() => {
          setLoading(false);
          toast.success("Registrasi berhasil, Silahkan Login");
        }, 3000);
        router.push("/dashboard/admin")
        return () => clearTimeout(timeoutId);
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-gray-50 rounded shadow-md">
          <div className="mb-3 text-md ">
            <p className="bg-indigo-400 uppercase p-3 text-center text-white">Akses Login</p>
          </div>
          <div className="p-4 ">
            <input
              type="text"
              placeholder="Username"
              value={kodePeserta}
              disabled
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <div className="mb-3 flex items-center justify-between relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
              />
              <div className="absolute right-3 cursor-pointer">
                {!passwordVisible ? (
                  <TbEyeClosed
                    className="text-gray-400/80"
                    onClick={() => handlePasswordVisible()}
                  />
                ) : (
                  <MdOutlineRemoveRedEye
                    className="text-green-400"
                    onClick={handlePasswordVisible}
                  />
                )}
              </div>
            </div>
            <div className="mb-3 flex items-center justify-between relative">
              <input
                type={confirmVisible ? "text" : "password"}
                placeholder="Konfirmasi Password"
                value={confPassword}
                onChange={(e) => setConfpassword(e.target.value)}
                className="placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
              />
              <div className="absolute right-3 cursor-pointer">
                {!confirmVisible ? (
                  <TbEyeClosed
                    className="text-gray-400/80"
                    onClick={() => handleConfirmVisible()}
                  />
                ) : (
                  <MdOutlineRemoveRedEye
                    className="text-green-400"
                    onClick={handleConfirmVisible}
                  />
                )}
              </div>
            </div>
          </div>

        </div>
        {/* PROFILE MURID */}
        <div className="flex-1 bg-gray-50 rounded shadow-md">
          <div className="mb-3 text-md ">
            <p className="bg-orange-400 uppercase shadow-md p-3 text-center text-white">PROFIL MURID</p>
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Kode Peserta"
              value={kodePeserta}
              onChange={(e) => setKodePeserta(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Kelas"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Nama Jurusan"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Mata Ujian"
              value={mataUjian}
              onChange={(e) => setMataUjian(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <select
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mb-3  placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            >
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <input
              type="text"
              placeholder="Tempat Lahir"
              value={tempatLahir}
              onChange={(e) => setTempatLahir(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Tanggal Lahir (contoh : 21 Januari 2020)"
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Agama"
              value={agama}
              onChange={(e) => setAgama(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
            <input
              type="text"
              placeholder="Alamat Rumah"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="mb-3 placeholder:text-sm placeholder:text-gray-500/80 px-4 py-3 rounded  w-full border-gray-300 border-2 bg-transparent text-gray-800 dark:text-gray-100 outline-none  focus:outline-none focus:ring-0 focus:border-2   focus:border-green-400"
            />
          </div>
        </div>
      </div>

      <button
        className="px-4 py-3 mt-6 w-1/3 rounded uppercase transition-all duration-150 ease-linear bg-gradient-to-tr from-green-500 to-lime-400 text-slate-100 hover:bg-green-500 hover:text-white"
        type="submit"
      >
        {loading ? (
          <div className="flex gap-2 items-center justify-center">
            <span className=" text-white">Loading... </span>
            <span className="loader"></span>
          </div>
        ) : (
          "Submit"
        )}
      </button>

    </form>
  );
};

export default FormRegister;