import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaUserCheck,
} from "react-icons/fa6";
import { RiArrowDownSLine, RiMouseLine } from "react-icons/ri";
import Avatar from "../assets/images/Hero.png";

function Hero() {
  return (
    <section className="section" id="hero">
      <div className="container  h-[100vh] ">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="hidden md:block absolute left-0">
            <span className="absolute left-2 text-base whitespace-nowrap origin-left rotate-[-90deg]">
              Follow On
            </span>

            <div className="w-[1px] h-[100px] mt-9 mb-6 ml-2 bg-blue-600"></div>
            <ul className="flex flex-col gap-y-6">
              <li>
                <Link
                  href="https://www.facebook.com/share/19g3MseAJ9/?mibextid=wwXIfr"
                  className="text-xl duration-[0.3s] hover:text-blue-600"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/t_e_e.j_a_y?igsh=MTJvbHprOWV1OHpkbg%3D%3D&utm_source=qr"
                  className="text-xl duration-[0.3s] hover:text-blue-600"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/TJ745"
                  className="text-xl duration-[0.3s] hover:text-blue-600"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative flex justify-center items-center gap-x-6">
            {/* <div className="w-fit px-3 py-2 rounded-[35px] curson-pointer duration-[0.3s] hover:border-[2px] bg-blue-600 text-black hover:text-white hidden">
              <Link href="#" className="flex items-center gap-x-2">
                Hire Me
                <FaUserCheck />
              </Link>
            </div> */}
            <div className="relative flex  justify-center items-center w-[250px] h-[425px]">
              <Image
                src={Avatar}
                alt="avatar"
                className="absolute w-auto  rounded-3xl h-[500px]"
                width={500}
              />
            </div>
            <div className="relative">
              <div className="flex flex-col gap-y-2">
                <h4 className="text-xl font-semibold">Hello, I&apos;m</h4>
                <h1 className="text-5xl font-bold uppercase">Talha Jamil</h1>
                <p className="text-2xl font-semibold mb-8">
                  A Web Designer & Developer
                </p>
              </div>
              {/* Button */}
              <div className="w-fit px-3 py-2 rounded-[35px] curson-pointer duration-[0.3s] hover:border-[2px] bg-blue-600 text-black hover:text-white">
                <Link href="#" className="flex items-center gap-x-2">
                  Hire Me
                  <FaUserCheck />
                </Link>
              </div>
            </div>
          </div>
          {/* Scroll */}
          <Link
            href="#about"
            className=" md:block absolute  right-[-5px] grid gap-y-1 justify-center items-center hover:text-blue-600 animate-scrolldown transition-all duration-300 scroll-smooth"
          >
            <RiMouseLine className="text-2xl" />
            <div className="text-sm whitespace-nowrap rotate-180 mt-2 vertical-text">
              Scroll Down
            </div>
            <RiArrowDownSLine className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
