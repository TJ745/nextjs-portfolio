import Image from "next/image";
import React from "react";
import { RiCloseLine } from "react-icons/ri";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imagePath: string;
}

function Modal({ isOpen, onClose, title, description, imagePath }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        isOpen ? "visible bg/20" : "invisible"
      }`}
    >
      <div className="fixed backdrop-blur-sm top-0 left-0 w-full h-screen flex justify-center overflow-y-auto z-1110">
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
      </div>
    </div>
  );
}

export default Modal;
