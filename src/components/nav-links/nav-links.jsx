// src/components/NavLinks.jsx
import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-6">
      <Link href="/" className="hover:text-gold">
        Home
      </Link>
      <Link href="/contact" className="hover:text-gold">
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
