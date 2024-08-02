import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartLogo from "../../../public/cart.png";

const Cart = () => {
  return (
    <Link
      href="/cart"
      className="flex items-center text-yellow-500 px-4 rounded-lg transition bg-yellow-500 hover:bg-yellow-700"
    >
      <div className="relative w-8 h-7">
        <Image
          src={CartLogo}
          alt="Cart Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Link>
  );
};

export default Cart;
