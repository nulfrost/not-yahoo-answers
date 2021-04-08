import Link from "next/link";

export const Navbar = () => (
  <nav className="bg-gray-100 py-4 shadow-md">
    <div className="max-w-5xl mx-auto flex justify-between items-center">
      <h1 className="font-bold text-3xl text-purple-700">NYA</h1>
      <ul className="flex space-x-3 font-semibold">
        <li className="opacity-75 text-purple-700 hover:opacity-100 duration-150">
          Sign In
        </li>
        <li className="opacity-75 text-purple-700 hover:opacity-100 duration-150">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
