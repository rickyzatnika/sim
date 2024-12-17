import Info from "@/models/Information";
import connect from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params; // Pastikan `id` ada
  if (!id) {
    return new NextResponse(JSON.stringify({ message: "ID is required" }), {
      status: 400,
    });
  }

  try {
    const info = await Info.findById(id);
    if (!info) {
      return new NextResponse(JSON.stringify({ message: "Info not found" }), {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(info), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
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
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}


export async function DELETE(req = NextRequest, { params: { id } }) {
  await connect();

  try {
    await Info.findByIdAndDelete(id);
    return new NextResponse(JSON.stringify("deleted Successfully"), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}