"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="/vercel.svg"
        alt="Loading Light/Dark Toggle"
        width={36}
        height={36}
        sizes="36x36"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <HiSun
        onClick={() => setTheme("light")}
        className="text-2xl cursor-pointer hover:rotate-12"
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <HiMoon
        onClick={() => setTheme("dark")}
        className="text-2xl cursor-pointer hover:rotate-12"
      />
    );
  }
}
