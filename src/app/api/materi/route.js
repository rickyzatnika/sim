import Materi from "@/models/Materi";
import connect from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
  

  try {
    await connect();

    const materi = await Materi.find({}); // Urutkan berdasarkan tanggal terbaru

    return new NextResponse(JSON.stringify(materi), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Gagal mengambil materi" }),
      { status: 500 }
    );
  }
}



export const POST = async (req = NextRequest) => {
  await connect();

  const {title, teacher, desc, contentUrl} = await req.json();

  if (!title || !teacher || !desc || !contentUrl) {
    return new NextResponse(JSON.stringify({ message: "Field Required!" }), {
      status: 400,
    });
  }

  const materiExist = await Materi.findOne({ title });
  if (materiExist) {
    return new NextResponse(
      JSON.stringify({ message: "Materi sudah terdaftar." }),
      { status: 409 }
    );
  }

  try {

    const newMateri = new Materi({
        title,
        teacher,
        desc,
        contentUrl,
       
    });
    await newMateri.save();
    return new NextResponse(
      JSON.stringify({ message: "Materi berhasil ditambahkan" }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};