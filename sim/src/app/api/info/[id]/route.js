import Info from "@/models/Information";
import connect from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest, { params: { id } }) {
  await connect();

  try {
    const info = await Info.findById(id);

    return new NextResponse(JSON.stringify(info), { status: 200 });
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

    const updateInfo = await Info.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );

    return new NextResponse(JSON.stringify(updateInfo), { status: 201 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error!" }),
      {
        status: 500,
      }
    );
  }
}
