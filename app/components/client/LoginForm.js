"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import session from "../../lib/session";

function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function loginHandler(e) {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
   

      if (res.error) {
        setError("invalid credentials");
        setTimeout(() => {
          setError("");
          setEmail("");
          setPassword("");
        }, 2000);
        return;
      }

       
      let userSession = await session()     
      router.replace(`/dashboard/user/${userSession.user.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form
          onSubmit={(e) => loginHandler(e)}
          id="login"
          className="flex flex-col gap-3"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            value={password}
          />
          <button
            type="submit"
            form="login"
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
          >
            login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-sm">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/register"}>
            {" "}
            Don`t have an account? <span className="underline"> Register</span>
          </Link>
          {/* //TODO: criar forma de reset password */}
          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
