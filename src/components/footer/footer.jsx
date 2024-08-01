import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <Link href="/" className="text-gold hover:text-yellow-300">
            Golden Shoes
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <p className="text-white mb-2">Email: support@goldenshoes.com</p>
          <p className="text-white">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-gold text-center py-4 mt-6">
        <p>
          &copy; {new Date().getFullYear()} Golden Shoes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
