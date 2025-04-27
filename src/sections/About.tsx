import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutPic from "../assets/images/Avatar.jpeg";
import { FaUserCheck } from "react-icons/fa6";
// import CV from "../assets/Talha-Jamil-CV.pdf";

function About() {
  return (
    <section className="section" id="about">
      <div className="container pt-[7em] pb-[5em]">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-[95px] ">
            <h3 className="text-3xl font-bold mb-2 text-blue-600">About Me</h3>
            <p>What I do</p>
          </div>
          <div className="flex justify-center items-center gap-x-[75px]">
            <div className="relative w-[35%] flex justify-center items-center pointer-events-none">
              <Image
                src={AboutPic}
                alt="AboutMe"
                className="w-full rounded-2xl h-[350px]"
              />
            </div>
            <div className="w-[65%] flex flex-col justify-center">
              <div>
                <h4 className="mb-[30px] font-semibold text-blue-600 text-xl">
                  I&apos;m a Web Designer & Developer
                </h4>
                <p className="leading-6">
                  I&apos;m a Web Designer & Developer with a passion for
                  creating visually appealing and user-friendly websites and web
                  applications. I specialize in HTML, CSS, JavaScript, and
                  React. I&apos;m always looking for new challenges and
                  opportunities to learn and grow.
                </p>
              </div>
              <div className="relative max-w-full grid gap-x-2 gap-y-3 grid-cols-3 my-8">
                <div className="flex justify-center items-center gap-x-2 py-8 px-6 text-left rounded-md bg-slate-500">
                  <span className="text-5xl font-bold">07</span>
                  <p className="max-w-full leading-5 text-md">
                    Years Of Experience
                  </p>
                </div>
                <div className="flex justify-center items-center gap-x-2 py-8 px-6 text-left rounded-md bg-slate-500">
                  <span className="text-5xl font-bold">1.2K</span>
                  <p className="max-w-full leading-5 text-md">
                    Complete Projects
                  </p>
                </div>
                <div className="flex justify-center items-center gap-x-2 py-8 px-6 text-left rounded-md bg-slate-500">
                  <span className="text-5xl font-bold">1K</span>
                  <p className="max-w-full leading-5 text-md">
                    Satisfied Clients
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-6">
                <div className="w-fit px-8 py-3 rounded-[35px] curson-pointer duration-[0.3s] hover:border-[2px] bg-blue-600 text-black hover:text-white">
                  <Link href="/contact" className="flex items-center gap-x-2">
                    Hire Me
                    <FaUserCheck />
                  </Link>
                </div>
                <div className="hidden md:block w-fit px-8 py-2.5 rounded-[35px] curson-pointer duration-[0.3s] border-[2px] hover:bg-blue-600">
                  <Link
                    href="/Talha-Jamil-CV.pdf"
                    download={true}
                    target="_blank"
                    className="flex items-center gap-x-2"
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
