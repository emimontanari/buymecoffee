import { Coffee, User } from "lucide-react";
import { signIn, signOut } from "../../auth";
import Link from "next/link";
import React from "react";
import { Session } from "next-auth";
import Image from "next/image";

interface HeaderProps {
  session?: Session | null;
}

export const Header = ({ session }: HeaderProps) => {
  const name = session?.user?.name || "";
  const firstName = name?.split(" ")[0];
  return (
    <header className="mb-8">
      <div className="flex justify-between max-w-2xl mx-auto border-4 px-4 py-4">
        <Link href="/" className="inline-flex gap-1 items-center">
          <Coffee className="w-8 h-8" />
          <span className="mt-2"> Buy me a coffee </span>
        </Link>
        <nav className="mt-2 flex gap-6 items-center">
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex gap-4">
            {session && (
              <div className="">
                <Link
                  href={"/profile"}
                  className="flex items-center gap-2 bg-yellow-300 rounded-full p-1 pr-4"
                >
                  <Image
                    src={session.user?.image as string}
                    alt="avatar"
                    width="36"
                    height="36"
                    className="rounded-full"
                  />
                  {firstName}
                </Link>
              </div>
            )}
            {!session && (
              <>
                <form
                  action={async () => {
                    "use server";
                    await signIn("google");
                  }}
                >
                  <button className="border-2 rounded-full px-4 py-2 ml-4">
                    Login
                  </button>
                </form>
                <button className="bg-yellow-300 rounded-full px-4 py-2 ">
                  Sign up
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
