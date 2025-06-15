"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
      pathname === href
        ? "text-blue-600 font-semibold"
        : "text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
    }`;

  return (
    <nav className=" border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
            className="h-14 rounded-full"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Prince Bidhuri
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClass("/about")}>
                About
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
