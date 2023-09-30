"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

 

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setTimeout(() => {
        setError("");
      }, 3000);
      setError("All fields are necessary");
      return;
    }
    try {
      let getuser = await fetch(`api/userexist?email=${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        
      })

      let { user } = await getuser.json();

      if (user) {
        setError("User alredy exist");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }

      let hashpassword = await bcrypt.hash(password,11)

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password: hashpassword
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push('/')

      } else {
        console.log("user registration failed");
      }
    } catch (error) {
      console.log("User registration failed.", error);
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form
          id="register"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
            value={name}
          />
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
            autoComplete="true"
            value={password}
          />
          <button
            type="submit"
            form="register"
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
          >
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline"> Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
