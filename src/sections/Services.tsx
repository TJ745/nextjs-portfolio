"use client";
// import Modal from "@/components/Modal";
import ServiceModal from "@/components/ServiceModal";
// import Link from "next/link";
import React, { useState } from "react";
import {
  RiAlignItemRightFill,
  RiArrowRightUpFill,
  // RiCheckboxCircleFill,
  // RiCloseLine,
  RiImageEditLine,
  RiPencilRuler2Fill,
} from "react-icons/ri";

interface Service {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

const services: Service[] = [
  {
    icon: <RiPencilRuler2Fill className="text-7xl" />,
    title: "Web Design",
    description:
      "With 07 years of experience in web design, I can                          create a website that meets your needs and exceeds                          your expectations. i have a passion for creating                          visually stunning and user-friendly websites that are                          easy to navigate and easy to use.",
  },
  {
    icon: <RiImageEditLine className="text-7xl" />,
    title: "Graphic Design",
    description:
      "Creative visual solutions for digital and print with 5+ years of experience in branding, logos, and layouts.",
  },
  {
    icon: <RiAlignItemRightFill className="text-7xl" />,
    title: "UI/UX Design",
    description:
      "User-focused interface design tailored to modern usability standards and accessibility.",
  },
];

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  // Open modal with selected project
  const openModal = (service: any) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
  };

  return (
    <section className="section" id="resume">
      <div className="container pt-[6em] pb-[5em]">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-[25px]">
            <h3 className="text-3xl font-bold mb-2 text-blue-600">Services</h3>
            <p>What I Provide</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8 mb-10">
            <div className="grid place-items-center grid-cols-3 gap-x-8 gap-y-9">
              {/* card-with-modal */}
              {services.map((item, index) => (
                <div key={index} onClick={() => openModal(item)}>
                  <div className="relative bg-slate-600 w-[275px] h-[285px] flex justify-center items-center flex-col py-12 border-b-4 rounded-lg cursor-pointer overflow-hidden">
                    {/* service-info */}
                    <div>
                      {item.icon}
                      <h4 className="font-semibold whitespace-nowrap max-w-[150px] mt-5 mb-6 text-2xl">
                        {item.title}
                      </h4>
                      <button className="text-base cursor-pointer duration-[0.3s] flex justify-center items-center gap-x-2 hover:text-blue-600 group">
                        See more
                        <RiArrowRightUpFill className="text-lg duration-[0.3s] group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <ServiceModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={currentService?.title || ""}
                description={currentService?.description || ""}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
