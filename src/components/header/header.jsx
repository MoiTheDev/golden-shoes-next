import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-gold shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-gold text-yellow-300 transition">
            Golden Shoes
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gold text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gold text-yellow-300 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-gold text-yellow-300 transition"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gold text-yellow-300 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div>
          <Link
            href="/cart"
            className="bg-gold text-black py-2 px-4 rounded-lg transition bg-yellow-500"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
