

import Materi from "@/models/Materi";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { jurusan } = params;

  try {
    await connect();

    const materi = await Materi.find({
      $or: [{ jurusan: "umum" }, { jurusan }],
    }).sort({ tanggal: -1 }); // Urutkan berdasarkan tanggal terbaru

    return new NextResponse(JSON.stringify(materi), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Gagal mengambil materi" }),
      { status: 500 }
    );
  }
}