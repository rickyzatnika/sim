import Users from "@/models/Users";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async (req) => {
  await connect();

  try {
    const user = await Users.find({});

    if (!user) {
      return new NextResponse({ message: "users not found" }, { status: 404 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "internal server error" }),
      { status: 500 }
    );
  }
};