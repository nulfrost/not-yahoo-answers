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
      <nav className="px-5 py-4">
        <div className="flex items-center justify-between max-w-6xl gap-3 mx-auto">
          <Link href="/">
            <a className="text-3xl font-bold text-purple-700">NYA</a>
          </Link>
          <ul className="flex justify-end items-center space-x-3 font-semibold">
            {session ? (
              <>
		<Link href="/new"><a className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-7 duration-150 text-sm font-bold rounded-md uppercase focus:outline-none focus:ring-4 ring-purple-300">ASK</a></Link>
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
                <ul
                  className={`absolute top-[60px] bg-gray-100 shadow-md border border-purple-700 z-10 rounded ${
                    showDropdown ? "block" : "hidden"
                  }`}
                >
                  <li
                    className="px-2 py-3 duration-150 cursor-pointer hover:bg-gray-300"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </li>
                </ul>
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
          className="relative flex flex-col items-center !w-3/4 xl:max-w-md rounded"
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
