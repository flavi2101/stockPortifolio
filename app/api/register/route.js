import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashpassword = await bcrypt.hash(password, 10);

    const prisma = new PrismaClient();

    await prisma.users.create({
      data: {
        name,
        email,
        password: hashpassword,
      },
    });
    prisma.$disconnect()
    return NextResponse.json({ message: "use registerd" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
