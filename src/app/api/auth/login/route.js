import { compare } from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import moment from "moment/moment";
import connect from "@/utils/connect";
import Users from "@/models/Users";

export const POST = async (req = NextRequest) => {
  await connect();
  const { username, password } = await req.json();

  try {
    const user = await Users.findOne({ username });
    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "Nama pengguna tidak terdaftar, silahkan registrasi.",
        }),
        { status: 404 }
      );
    }

    const match = await compare(password, user.password);
    if (!match) {
      return new NextResponse(
        JSON.stringify({ message: "Password atau username salah." }),
        { status: 400 }
      );
    }

    const newUser = {
      id: user?._id.toString(),
      username: user?.username,
      role: user?.role,
      createdAt: user?.createdAt ? moment(user.createdAt).format("LLLL") : "",
    };

    return new NextResponse(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    return new NextResponse({ status: 500, message: "Internal Server Error" });
  }
};