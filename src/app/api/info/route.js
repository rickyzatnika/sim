import Info from "@/models/Information";
import connect from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req = NextRequest) => {
  await connect();
  try {
    const info = await Info.find({});

    if (!info) {
      return new NextResponse(
        { message: "information not found" },
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(info), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

export const POST = async (req = NextRequest) => {
  await connect();

  const { title, subDesc, desc } = await req.json();

  try {
    const newInfo = new Info({
      title,
      subDesc,
      desc,
    });
    await newInfo.save();
    return new NextResponse(
      JSON.stringify({ message: "Information Successfully Created." }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
