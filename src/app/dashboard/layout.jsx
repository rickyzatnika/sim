"use client"

import { useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { menuLink } from '@/utils/menuLink'
import Link from 'next/link'
import { IoMdLogOut } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

export default function DashboardLayout({ children }) {

  const [active, setActive] = useState(false);

  const handleButtonMenu = () => {
    setActive(prev => !prev);
  }

  return (
    <div className="relative overflow-hidden">

      <div className='w-full flex '>
        {/* SIDEBAR MENU */}
        <div className={` flex-none bg-gray-50 h-screen min-h-full origin-center transition-all duration-300 ${active ? "w-0" : "w-48"}`}>
          <div className='flex border-t border-b-2 py-4 mb-6'>
            <BiSolidUserRectangle size={60} />
            <div className='flex flex-col gap-1'>
              <p className='text-sm'>Murid Baik</p>
              <div className='flex gap-1 items-center'>
                <div className='rounded-full w-3 h-3 bg-green-600' />
                <p className='text-xs'>online</p>
              </div>
              <div className='flex gap-1'>
                <span className='text-xs uppercase rounded-full px-2 bg-blue-400 text-white'>semua</span>
                <span className='text-xs uppercase rounded-full px-2 bg-green-400 text-white'>IX-B</span>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col gap-4 px-2'>
            {
              menuLink.map((item, i) => (
                <Link onClick={() => handleButtonMenu(setActive(false))} key={i} href={item.link} className='px-4 flex gap-2 items-center text-blue-500 hover:text-gray-600'>
                  <span className=''>{item.icon}</span>
                  <p className='text-sm '>{item.title}</p>
                </Link>
              ))
            }

            <button className='px-4 text-sm flex gap-2 items-center text-blue-500 hover:text-gray-600'>
              <IoMdLogOut size={22} />
              <span>Logout</span>
            </button>


          </div>
        </div>
        {/* CONTENT */}
        <div className='flex-initial w-full bg-gray-100 py-6'>
          {/* HAMBURGER MENU */}
          <div className="w-full flex items-center justify-between px-3 pb-[45px] border-b-2">
            <button type="button" onClick={() => handleButtonMenu()} >
              <GiHamburgerMenu size={24} />
            </button>
            <div className="flex gap-2">
              <p className="text-sm">Murid Baik</p>

              <FaUserCircle size={20} />
            </div>
          </div>
          <div className="mt-6 px-3 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}