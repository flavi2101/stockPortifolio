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
          ],
        },
      },
    });
    return NextResponse.json(users, { status: 201 });
  } catch (error) {
    NextResponse.json(error.message, { status: 404 });
  }
}

export async function PATCH(req) {
  var id = req.nextUrl.searchParams.get("id");
  var role = req.nextUrl.searchParams.get("role");
  try {
    await client.users.update({
      where: {
        id,
      },
      data: {
        role,
      },
    });

    return NextResponse.json(id, { status: 201 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 404 });
  }
}

export async function DELETE(req) {
  let id = req.nextUrl.searchParams.get("id");

  try {
    await client.users.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(id, { status: 201 });
  } catch (error) {
    return NextResponse.json(error.message, { status: 404 });
  }
}
