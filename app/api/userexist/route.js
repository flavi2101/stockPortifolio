import { NextResponse } from "next/server";
import client from "@/app/lib/prisma_client";
export async function GET(req) {
  try {
    const  email  = req.nextUrl.searchParams.get("email");
  
    let user = await client.users.findUnique({
      where: {
        email: email,
      },
    });
    client.$disconnect()
    return NextResponse.json({ user });
  } catch (error) {
    console.log("error", error.message);
    NextResponse.error();
  }
}
