import Users from "@/models/Users";
import connect from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req = NextRequest) => {
  

//   await connect();
//   try {
//     // Mengambil semua pengguna dan menghubungkan data profilnya
//     const users = await Users.find({});

//     if (!users || users.length === 0) {
//       return new NextResponse(
//         JSON.stringify({ message: "No users found" }),
//         { status: 404 }
//       );
//     }


//     return new NextResponse(JSON.stringify(users), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(JSON.stringify(error.message), { status: 500 });
//   }
// };




export const GET = async (req = NextRequest) => {
  await connect();

  try {
    const users = await Users.find({});

    if (!users) {
      return new NextResponse({ message: "users not found" }, { status: 404 });
    }

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "internal server error" }),
      { status: 500 }
    );
  }
};