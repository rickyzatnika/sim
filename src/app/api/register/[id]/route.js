import Users from "@/models/Users";
import connect from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest , { params: { id } })  {
  await connect();

  try {
    const user = await Users.findById(id);

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}


export async function PUT(req, { params: { id } }) {
  try {
    await connect();
    const body = await req.json();

    // Cek apakah nama sudah ada pada database
    const existingUser = await Users.findOne({
      name: body.name,
      _id: { $ne: id },
    });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
          message: "Nama sudah terdaftar",
        }),
        { status: 400 }
      );
    }

    const updateUser = await Users.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    return new NextResponse(JSON.stringify(updateUser), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}