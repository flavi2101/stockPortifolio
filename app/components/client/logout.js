"use client";
import { signOut } from "next-auth/react";

export default function LogoutSession() {
  return (
    <li>
      <button onClick={() => signOut({ callbackUrl: process.env.BASE_URL })}>
        Sair
      </button>
    </li>
  );
}
