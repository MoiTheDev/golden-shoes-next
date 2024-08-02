import React from "react";
import Image from "next/image";
import LogoImage from "../../../public/GSLOGO.png";

const Logo = () => {
  return (
    <div className="relative w-40 h-40">
      <Image
        src={LogoImage}
        alt="Golden Shoes Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Logo;
