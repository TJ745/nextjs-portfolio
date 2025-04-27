import Link from "next/link";
import React from "react";
import { HiArrowDownLeft, HiHome } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="relative">
      <div className="fixed left-[50%] bottom-[25px] z-1100 translate-x-[-50%]">
        <div className="relative">
          <HiArrowDownLeft className="z-1100 text-2xl absolute top-[-5px] right-0 text-black bg-slate-600 px-[2px] rounded-[50%] cursor-pointer duration-[0.3s] hover:text-white pointer-events-none opacity-0" />
          <ul className="h-10 px-8 py-4 flex justify-center items-center gap-x-6 backdrop-blur-md bg-slate-800 border-b border-white border-l rounded-[50px] ">
            <li className="group">
              <Link
                href="#"
                className="flex flex-col justify-center items-center"
              >
                <HiHome className="text-3xl py-2 rounded-[50%] transition duration-[0.3s] hover:bg-white hover:text-black" />
                <span className="z-1000 absolute text-black bg-blue-600 font-medium px-[3px] py-[10px] translate-y-[-50px] rounded-[5px] text-base pointer-events-none before:content-[''] before:z-[-1] before:absolute before:bottom-[-6px] before:left-[50%] before:w-[10px] before:h-[10px] before:bg-blue-600 before:rotate-45 before:translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity">
                  Home
                </span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="#about"
                className="flex flex-col justify-center items-center"
              >
                <HiHome className="text-3xl px-2 rounded-[50%] transition duration-[.3s] hover:bg-white hover:text-black" />
                <span className="z-1000 absolute text-black bg-blue-600 font-medium px-[3px] py-[10px] translate-y-[-50px] rounded-[5px] text-base pointer-events-none before:content-[''] before:z-[-1] before:absolute before:bottom-[-6px] before:left-[50%] before:w-[10px] before:h-[10px] before:bg-blue-600 before:rotate-45 before:translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity">
                  About
                </span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="flex flex-col justify-center items-center"
              >
                <HiHome className="text-3xl px-2 rounded-[50%] transition duration-[.3s] hover:bg-white hover:text-black" />
                <span className="z-1000 absolute text-black bg-blue-600 font-medium px-[3px] py-[10px] translate-y-[-50px] rounded-[5px] text-base pointer-events-none before:content-[''] before:z-[-1] before:absolute before:bottom-[-6px] before:left-[50%] before:w-[10px] before:h-[10px] before:bg-blue-600 before:rotate-45 before:translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity">
                  Services
                </span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="flex flex-col justify-center items-center"
              >
                <HiHome className="text-3xl px-2 rounded-[50%] transition duration-[.3s] hover:bg-white hover:text-black " />
                <span className="z-1000 absolute text-black bg-blue-600 font-medium px-[3px] py-[10px] translate-y-[-50px] rounded-[5px] text-base pointer-events-none before:content-[''] before:z-[-1] before:absolute before:bottom-[-6px] before:left-[50%] before:w-[10px] before:h-[10px] before:bg-blue-600 before:rotate-45 before:translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity">
                  Projects
                </span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/"
                className="flex flex-col justify-center items-center"
              >
                <HiHome className="text-3xl px-2 rounded-[50%] transition duration-[.3s] hover:bg-white hover:text-black" />
                <span className="z-1000 absolute text-black bg-blue-600 font-medium px-[3px] py-[10px] translate-y-[-50px] rounded-[5px] text-base pointer-events-none before:content-[''] before:z-[-1] before:absolute before:bottom-[-6px] before:left-[50%] before:w-[10px] before:h-[10px] before:bg-blue-600 before:rotate-45 before:translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-opacity">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="z-1100 fixed bg-slate-600 backdrop-blur-sm w-[85px] h-[50px] border-b border-white border-l flex justify-center items-center flex-col gap-y-1 translate-x-[-50px] left-[50%] bottom-[-75px] rounded-[5px] cursor-pointer overflow-hidden  animate-wiggle opacity-0">
        <div className="w-[40px] h-[4px] bg-white duration-[0.15s] "></div>
        <div className="w-[40px] h-[4px] bg-white duration-[0.15s]"></div>
      </div>
    </div>
  );
}

export default Navbar;
