import Users from "@/models/Users";
import connect from "@/utils/connect";
import { hash, genSalt } from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req = NextRequest) => {
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

export const POST = async (req = NextRequest) => {
  await connect();

  const {
    username,
    name,
    classes,
    major,
    kodePeserta,
    mataUjian,
    gender,
    tempatLahir,
    tanggalLahir,
    agama,
    alamat,
    password,
    role,
  } = await req.json();
  if (!username || !name || !major || !kodePeserta || !password) {
    return new NextResponse(JSON.stringify({ message: "Field Required!" }), {
      status: 400,
    });
  }

  const userExist = await Users.findOne({ username });
  if (userExist) {
    return new NextResponse(
      JSON.stringify({ message: "Username sudah terdaftar." }),
      { status: 409 }
    );
  }

  try {
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);

    const newUser = new Users({
      username,
      name,
      classes,
      kodePeserta,
      mataUjian,
      gender,
      major,
      tempatLahir,
      tanggalLahir,
      agama,
      alamat,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    return new NextResponse(
      JSON.stringify({ message: "Registered Successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
