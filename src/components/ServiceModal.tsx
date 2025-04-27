// import Image from "next/image";
import React from "react";
import { RiCheckboxCircleFill, RiCloseLine } from "react-icons/ri";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

function ServiceModal({ isOpen, onClose, title, description }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        isOpen ? "visible bg/20" : "invisible"
      }`}
    >
      {/* <div className="fixed backdrop-blur-sm top-0 left-0 w-full h-screen flex justify-center overflow-y-auto z-1110">
        <div className="relative max-w-[900px] h-fit my-20 mx-6 py-12 px-11 rounded-2xl bg-slate-600">
          <button
            onClick={onClose}
            className="absolute text-md top-0 right-0 m-3 cursor-pointer duration-[0.3s]"
          >
            <RiCloseLine />
          </button>
          <div className="flex justify-center flex-col gap-y-6">
            <div>
              <Image
                src={imagePath}
                alt={title}
                className="rounded-xl"
                width={150}
                height={150}
              />
            </div>
            <h4 className="font-semibold text-2xl">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div> */}

      <div className="z-1110 fixed bg-slate-500 backdrop-blur-sm top-0 left-0 w-full h-screen flex justify-center items-center overflow-y-auto">
        <div className="relative w-[825px] bg-slate-900 h-fit my-16 mx-6 pt-12 pb-6 pl-12 pr-11 rounded-2xl border-b-4 overflow-hidden">
          <button
            onClick={onClose}
            className="absolute text-md top-0 right-0 m-3 cursor-pointer duration-[0.3s]"
          >
            <RiCloseLine />
          </button>
          <div className="flex flex-col gap-y-6 max-h-[500px] mt-12 p-2 overflow-y-auto">
            <div className="max-w-[600px] text-center ml-auto mr-auto">
              <h3 className="font-bold text-4xl">{title}</h3>
              <p className="text-xl font-normal mt-8 mb-5">{description}</p>
            </div>
            <h4 className="font-semibold mb-4">What I Provide</h4>
            <ul>
              <li className="flex mb-6">
                <RiCheckboxCircleFill className="mr-2 text-2xl" />
                <p className="leading-6 text-base">
                  Design & Build Websites
                </p>{" "}
              </li>
              <li>
                <RiCheckboxCircleFill />
                <p>Responsive Website Design</p>{" "}
              </li>
              <li>
                <RiCheckboxCircleFill />
                <p>SEO</p>{" "}
              </li>
              <li>
                <RiCheckboxCircleFill />
                <p>Website Hosting</p>{" "}
              </li>
              <li>
                <RiCheckboxCircleFill />
                <p>Website Maintenance & Support</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
