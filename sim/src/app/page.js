"use client"

import { useEffect, useState } from "react";
import { TbEyeClosed } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from 'next/image'
import { FaUserCircle } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [ password, setPassword] = useState("");


  
  const handlePasswordVisible = () => {
    setPasswordVisible(prev => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    

    try {
      if (username === "" || password === "") {
        toast.error("Field required!");
        return;
      }

      if (password.length < 5) {
        toast.error("Password must be at least 5 characters");
        return;
      }

      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      const error = await res.json();

      if (res.status === 200) {
        const timeOutId = setTimeout(() => {
          setLoading(false);
          signIn("credentials", {
            username: username,
            password: password,
          });
        }, 3000)

        return () => clearTimeout(timeOutId);
      } else {
        toast.error(error.message);
        setLoading(false);
      }

    } catch (error) {
      toast.error(error.message);
    }

  };

  useEffect(() => {
    if(session || status === "authenticated"){
      router.push("/dashboard")
    } else {
      return
    }
  }, [router, session])

  return (
    <>

      <div className='w-full  bg-blue-400 px-4 md:px-20 py-6'>
        <div className=' flex'>
          <Image alt="logo-icb" src="/icb-putih.png" width={100} height={50} style={{width: "auto", height: "auto"}} priority={true} />
          <div className='flex flex-col gap-1 text-white'>
            <h1 className='font-medium uppercase'>Sistem Informasi Manajemen</h1>
            <h3 className='font-semibold'>SMK ICB CINTA NIAGA</h3>
          </div>
        </div>
      </div>

      <div className="w-full px-4">
        <div className='max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-14 relative top-0 md:-top-8'>
          <div className="mb-6">
            <p className="font-bold text-base text-gray-800">Selamat Datang</p>
            <p className="text-xs text-gray-700">Silakan login dengan menggunakan username dan password yang anda miliki</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <div className="flex gap-2 items-center">
              <FaUserCircle className="text-gray-600" size={20} />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-transparent w-full px-4 py-3 text-gray-600 placeholder-gray-300 focus:dark:placeholder-transparent  border-b-2 border-gray-300 outline-none focus:ring-0 focus:border-green-400 dark:text-gray-300"
              />
            </div>
            <div className="relative flex items-center gap-2">

              <IoMdLock className="text-gray-600" size={22} />
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 text-gray-600 placeholder-gray-300 focus:dark:placeholder-transparent bg-transparent border-b-2 border-gray-300 focus:ring-0 outline-none focus:border-green-400 dark:text-gray-300"
              />

              <div className="absolute right-3 cursor-pointer">
                {!passwordVisible ? <TbEyeClosed size={18} className="text-gray-400/80" onClick={() => handlePasswordVisible()} /> : <MdOutlineRemoveRedEye size={18} className="text-green-400" onClick={handlePasswordVisible} />}
              </div>
            </div>
            <button type="submit" className="px-6 py-3 text-white uppercase transition-all duration-150 ease-linear bg-gradient-to-tr from-green-500 to-lime-400 rounded-full hover:bg-green-500">
              {loading ? <div className="flex items-center justify-center gap-2"><span>Loading...</span><span className="loader"></span></div> : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage