import React from "react";
import RegisterForm from "../components/client/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Register() {
  let session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  }
  return (
    <div>
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default Register;
