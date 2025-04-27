"use client";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll position change
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Trigger the scroll effect when scrolled 50px
    } else {
      setIsScrolled(false);
    }
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-1100 fixed w-full top-0 left-0 p-4 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-white/20 shadow-md h-18" : "backdrop-blur-none bg-transparent h-18"}`}
    >
      <div className="container">
        <div className="flex justify-between items-center w-full">
          <div className="text-4xl font-semibold -tracking-wider duration-[0.3s]">
            <Link href="/">
              <span>TJ</span>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="hidden md:block w-fit px-8 py-2 rounded-[35px] curson-pointer duration-[0.3s] border-[2px] hover:bg-blue-600">
              <Link href="#contact">Let&apos;s Talk</Link>
            </div>
            <Link
              href="#contact"
              className="md:hidden text-2xl duration-[0.3s] hover:bg-blue-600"
            >
              <HiChatBubbleOvalLeftEllipsis />
            </Link>

            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
