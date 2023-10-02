"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();
  return (
    <>

    <header className="text-gray-600 body-font shadow-xl mt-5">
  <div className="container mx-auto justify-between flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <Link className="font-bold text-lg text-blue-400" href={"/"}>
        Google User Authentication
      </Link>

    {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Sign In
        </button>
      )}
   
  </div>
</header>
    </>
  );
}
