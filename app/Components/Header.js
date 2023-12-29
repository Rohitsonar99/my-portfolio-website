"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export const Header = () => {
  const [toogle, settoogle] = useState(false);

  return (
    <div className="bg-[#535c68] p-4">
      <div className="max-w-[1240px] py-[15] items-center flex justify-between">
        <div className="text-2xl font-bold text-white">My Portfolio</div>
        {toogle ? (
          <AiOutlineMenu
            onClick={() => settoogle(!toogle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => settoogle(!toogle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-5 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Education">Education</Link>
          <Link href="/Contact">Contact</Link>
        </ul>
        {/* responsive menu */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
                ${toogle ? "left-[0]" : "left-[-100%]"}
                `}
        >
          <li className="p-5">Home</li>

          <li className="p-5">About</li>

          <li className="p-5">Education</li>

          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};
