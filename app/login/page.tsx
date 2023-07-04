"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import loginSvg from "../../public/login.svg";
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("sign-in");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // first checking if user exists
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);
    if (user === null) {
      console.log(user);
      setError("User already exists");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
      return;
    }
    setView("check-email");
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/dashboard/home");
    router.refresh();
  };

  return (
    <div className="grid flex-1 w-full h-screen grid-cols-2 gap-2 px-8 ">
      <Link
        href="/"
        className="absolute flex items-center px-4 py-2 text-sm no-underline rounded-md left-8 top-8 text-foreground bg-btn-background hover:bg-btn-background-hover group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1">
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <div className="flex flex-col items-center justify-center flex-1 gap-2 text-foreground">
        {view === "check-email" ? (
          <div className="flex flex-col justify-center w-full gap-2 text-center text-foreground">
            <h1 className="text-3xl font-bold">Email has been sent!</h1>
            <p className=" text-foreground">
              Check <span className="font-bold">{email}</span> inbox to continue
              signing up
            </p>
          </div>
        ) : (
          <>
            {" "}
            <h1 className="text-3xl font-bold">Welcome to AskWaai</h1>
            <form
              className="flex flex-col justify-center w-3/4 gap-2 p-6 mx-auto shadow-xl rounded-xl text-foreground"
              onSubmit={view === "sign-in" ? handleSignIn : handleSignUp}>
              <label className="text-md" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 py-2 mb-6 border rounded-md bg-inherit"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="you@example.com"
              />
              <div className="flex flex-row justify-between">
                <label className="text-md" htmlFor="password">
                  Password
                </label>
                <span className="text-red-500">{error}</span>
              </div>

              <input
                className={`px-4 py-2 mb-6 ${
                  error && " border-red-500"
                } border rounded-md bg-inherit`}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="••••••••"
              />

              {view === "sign-in" && (
                <>
                  <button className="px-4 py-2 mb-6 text-white rounded bg-violet-500">
                    Sign In
                  </button>
                  <p className="text-sm text-center">
                    Don't have an account?
                    <button
                      className="ml-1 underline"
                      onClick={() => setView("sign-up")}>
                      Sign Up Now
                    </button>
                  </p>
                </>
              )}
              {view === "sign-up" && (
                <>
                  <button className="px-4 py-2 mb-6 text-white rounded bg-violet-500">
                    Sign Up
                  </button>
                  <p className="text-sm text-center">
                    Already have an account?
                    <button
                      className="ml-1 underline"
                      onClick={() => setView("sign-in")}>
                      Sign In Now
                    </button>
                  </p>
                </>
              )}
            </form>
          </>
        )}
      </div>
      <div className="flex flex-col justify-center flex-1 w-full gap-2 text-foreground">
        <Image src={loginSvg} alt="Login" />
      </div>
    </div>
  );
}
