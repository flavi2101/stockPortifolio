import { NextResponse } from "next/server";
import client from "@/app/lib/prisma_client";


export async function GET() {
  try {
    let users = await client.users.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
      where: {
        NOT: {
          OR: [
            {
              role: "ADMIN",
            },
            {
              role: "MENTOR",
            },
          ],
        },
      },
    });
    return NextResponse.json(users, { status: 201 });
  } catch (error) {
    NextResponse.json(error.message, { status: 404 });
  }
}
