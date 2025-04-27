"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import ProjectPic from "../assets/images/Avatar.jpeg";
import Testimonials from "./Testimonials";
import Modal from "@/components/Modal";

const projects = [
  {
    id: 1,
    title: "Project 1",
    imagePath: ProjectPic,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.          Delectus amet, fugit dolor eveniet molestias reiciendis!                      Maxime fugiat dolorem officia iure, laboriosam blanditiis                      animi sunt consequatur ex? Eos ea temporibus ad.                      Reiciendis cupiditate eum quisquam, ducimus placeat                      possimus similique ut aperiam officia cum dolor quaerat                      obcaecati odit reprehenderit iure illum amet!",
    link: "",
    tech: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "Project 2",
    imagePath: ProjectPic,
    link: "",
    tech: ["JavaScript"],
  },
  {
    id: 3,
    title: "Project 3",
    imagePath: ProjectPic,
    link: "",
    tech: ["CSS"],
  },
];

const projectButtons = [
  "All",
  "Web Design",
  "UX/UI Design",
  "Graphic Design",
  "HTML",
  "CSS",
  "JavaScript",
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonRef = useRef([]);

  // Open modal with selected project
  const openModal = (project: any) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section className="section" id="projects">
      <div className="container pt-[6em] pb-[5em]">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-[25px]">
            <h3 className="text-3xl font-bold mb-2 text-blue-600">Projects</h3>
            <p>My Creative Works</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4 mb-20">
            {projectButtons.map((text, i) => (
              <button
                key={i}
                ref={(el) => buttonRef.current.push(el)}
                onClick={() => {
                  setTech(text);
                  setIndex(i);
                }}
                className={`flex justify-center items-center gap-x-1 font-medium text-sm py-3 rounded-3xl cursor-pointer duration-[0.3s] ${
                  index === i ? "py-3 px-4 bg-blue-600 text-white" : ""
                }`}
              >
                {text}
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center gap-x-[75px]">
            <div className="grid place-items-center grid-cols-3 gap-x-12 gap-y-14">
              {projects
                .filter((project) => {
                  return project.tech.some((item) =>
                    tech === "All" ? true : item === tech
                  );
                })
                .map((project, i) => (
                  <div
                    key={`project.id-${i}`}
                    onClick={() => openModal(project)}
                  >
                    <div className="relative w-[350px] rounded-lg cursor-pointer overflow-hidden group border">
                      <div className="w-[350px] h-[250px]">
                        <Image
                          src={project.imagePath}
                          alt=""
                          width={350}
                          height={250}
                          className="w-full h-[250px]"
                        />
                      </div>
                      <div className="relative py-3 px-5">
                        <span className="uppercase font-normal text-sm">
                          {project.title}
                        </span>
                        <h4 className="text-base font-medium mt-1">Dynamic</h4>
                        <RiArrowRightUpLine className="absolute right-0 bottom-0 text-2xl m-4 scale-0 group-hover:scale-100 duration-[0.3s]" />
                      </div>
                    </div>
                  </div>
                ))}

              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={currentProject?.title || ""}
                description={currentProject?.description || ""}
                imagePath={currentProject?.imagePath || ""}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
