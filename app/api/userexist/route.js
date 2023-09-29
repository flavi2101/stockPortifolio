import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const { email } = await req.json();

    let user = await prisma.users.findUnique({
      where:{
        email:email
      }
    })
    console.log("user", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log("error", error.message);
    NextResponse.error()
  }
}
