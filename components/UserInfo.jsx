"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="shadow-xl p-8 rounded-md flex  gap-3 ">
        <Image
          className="rounded-full"
          src={session?.user?.image}
          width={80}
          height={80}
        />
        <div className="leading-10">
        <div className="text-2xl">
         Name:  <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div className="text-2xl">
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
}
