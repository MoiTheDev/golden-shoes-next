import React from "react";
import Link from "next/link";
import Logo from "../logo/logo";
import NavLinks from "../nav-links/nav-links";
import Cart from "../cart/cart";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white shadow-md z-50 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Logo />
          </div>
        </Link>

        {/* Navigation Links and Cart */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Cart />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
