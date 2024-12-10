import { IoIosHome } from "react-icons/io";
import { LuActivitySquare } from "react-icons/lu";
import { SiGoogledocs } from "react-icons/si";
import { FaRegPenToSquare } from "react-icons/fa6";

import { FaBellSlash } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import { FaUserCog } from "react-icons/fa";





export const menuLink = [
  {
    id: "1",
    title: "Dashboard",
    icon: <IoIosHome size={24} />,
    link: "/dashboard",
  },
  {
    id: "2",
    title: "Profilku",
    icon: <FaUserCog size={24} />,
    link: "/dashboard/profile",
  },
  {
    id: "3",
    title: "Nilai Ujian",
    icon: <SiGoogledocs  size={24} />,
    link: "/dashboard/nilai-ujian",
  },
  {
    id: "4",
    title: "Materi Belajar",
    icon: <SiReadthedocs size={24} />,
    link: "/dashboard/materi-belajar",
  },
  {
    id: "5",
    title: "Tugas Siswa",
    icon: <FaRegPenToSquare size={24} />,
    link: "/dashboard/tugas-siswa",
  },
  {
    id: "6",
    title: "Konseling",
    icon: <FaBellSlash  size={24} />,
    link: "/dashboard/konseling",
  },
  {
    id: "7",
    title: "Prestasi",
    icon: <MdOutlineStar size={24} />,
    link: "/dashboard/prestasi",
  },
];
