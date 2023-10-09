import { NextResponse } from "next/server";
import client from "@/app/lib/prisma_client";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    await client.users.create({
      data: {
        name,
        email,
        password,
        portfolio: {
          create: {},
        },
      },
      include: {
        portfolio: true,
      },
    });
    client.$disconnect();
    return NextResponse.json({ message: "use registerd" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
