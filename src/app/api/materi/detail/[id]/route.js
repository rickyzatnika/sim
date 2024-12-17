import Materi from "@/models/Materi";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connect();
    const materi = await Materi.findById(id);

    if (!materi) {
      return new NextResponse(
        JSON.stringify({ message: "Materi tidak ditemukan" }),
        { status: 404 }
      );
    }

    return new NextResponse(JSON.stringify(materi), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Gagal mengambil detail materi" }),
      { status: 500 }
    );
  }
}