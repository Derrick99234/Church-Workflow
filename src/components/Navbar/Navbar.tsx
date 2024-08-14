import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-white fixed top-[20px] rounded-[2rem] w-[85%] mx-auto h-[70px] py-3 shadow-lg flex justify-between items-center px-8">
      <Image
        src={"/images/logo.png"}
        alt="church logo"
        height={50}
        width={150}
        className="h-[90%]"
      />
      <button className="text-white py-2 px-4 h-full rounded-md bg-[#00CFFF] text-sm">
        Join the waitlist
      </button>
    </nav>
  );
}
