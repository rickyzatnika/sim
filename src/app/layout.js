import { Poppins } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/component/AuthProvider";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export const metadata = {
  title: "Sistem Informasi Manajemen SMK ICB CINTA NIAGA",
  description: "Sistem Informasi Manajemen SMK ICB CINTA NIAGA",
};



const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <ToastContainer theme="dark" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
