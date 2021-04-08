import Link from "next/link";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { signIn, useSession, signOut } from "next-auth/client";

export const Navbar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const [session] = useSession();

  return (
    <header>
      <nav className="px-5 py-4 bg-gray-100">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
          <h1 className="text-3xl font-bold text-purple-700">NYA</h1>
          <ul className="flex space-x-3 font-semibold">
            {session ? (
              <>
                <button
                  type="button"
                  aria-expanded={showDropdown}
                  className="relative"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <img
                    src={session?.user?.image}
                    alt={`User avatar for ${session?.user?.name}`}
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                <div
                  className={`absolute top-[60px] right-[130px] bg-gray-100 shadow-md border border-purple-700 py-2 px-4 hover:bg-gray-300 duration-150 cursor-pointer ${
                    showDropdown ? "block" : "hidden"
                  }`}
                >
                  <p onClick={() => signOut()}>Sign Out</p>
                </div>
              </>
            ) : (
              <>
                <li
                  className="text-purple-700 duration-150 opacity-75 cursor-pointer hover:opacity-100"
                  onClick={open}
                >
                  Sign In
                </li>
                <li className="text-purple-700 duration-150 opacity-75 hover:opacity-100">
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Dialog
          isOpen={showDialog}
          onDismiss={close}
          className="relative flex flex-col items-center max-w-md rounded"
          aria-label="Sign in modal for Not Yahoo Answers"
        >
          <IoMdClose
            className="absolute top-[10px] right-[10px] cursor-pointer"
            onClick={close}
          />
          <p className="mb-5 text-2xl font-bold text-purple-700">NYA</p>
          <button
            className="px-4 py-3 font-bold text-white duration-150 bg-black rounded-md hover:bg-gray-700"
            onClick={() => signIn("github")}
          >
            Sign in with Github
          </button>
        </Dialog>
      </nav>
    </header>
  );
};
