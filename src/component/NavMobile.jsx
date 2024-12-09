"use client"

import { menuLink } from "@/utils/menuLink"
import { useSession } from "next-auth/react";
import Link from "next/link"
import { IoMdLogOut } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md"


const NavMobile = ({ setActive, handleButtonMenu }) => {


  const { data: session } = useSession();


  return (
    <div className='w-full flex flex-col gap-4 px-2'>
      {
        session?.user?.role === "admin" && (
          <Link onClick={() => handleButtonMenu(setActive(false))} className='px-4 flex gap-2 items-center text-blue-500 hover:text-gray-600' href="/dashboard/admin">
            <span><MdAdminPanelSettings size={24} /></span>
            <p className='text-sm '>Admin Panel</p>
          </Link>
        )
      }

      {
        menuLink.map((item, i) => (
          <Link onClick={() => handleButtonMenu(setActive(false))} key={i} href={item.link} className='px-4 flex gap-2 items-center text-blue-500 hover:text-gray-600'>
            <span>{item.icon}</span>
            <p className='text-sm '>{item.title}</p>
          </Link>
        ))
      }

      <button className='px-4 text-sm flex gap-2 items-center text-blue-500 hover:text-gray-600'>
        <IoMdLogOut size={22} />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default NavMobile