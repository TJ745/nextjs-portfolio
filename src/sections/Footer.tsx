import Link from "next/link";
import React from "react";

const links = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Resume",
    link: "/about",
  },
  {
    title: "Services",
    link: "/about",
  },
  {
    title: "Portfolio",
    link: "/about",
  },
];

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-dark-secondary pt-[100px] pb-[100px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-y-10">
          <div className="text-4xl font-semibold -tracking-wider duration-[0.3s]">
            <Link href="">
              <span>TJ</span>
            </Link>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-5">
            {links.map((link, index) => (
              <div
                key={index}
                className="font-medium uppercase py-1 px-3 rounded-2xl duration-[0.3s] text-xs"
              >
                <Link href={link.link}>{link.title}</Link>
              </div>
            ))}
          </div>

          <p className="text-sm mt-2">
            Copyright &copy; {year}. All rights reserved by TJ | Made with ❤
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
