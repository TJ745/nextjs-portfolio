"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import TesPic from "../assets/images/Avatar.jpeg";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
  RiStarHalfLine,
} from "react-icons/ri";
import { motion } from "motion/react";
import { animate } from "motion";

// const starIcons = {
//   full: <RiStarFill />,
//   half: <RiStarHalfLine />,
// };

// const arrowIcons = {
//   left: <RiArrowLeftSLine />,
//   right: <RiArrowRightSLine />,
// };

const getStarIcon = (value: number) =>
  value === 1 ? <RiStarFill /> : <RiStarHalfLine />;
const getArrowIcon = (dir: "left" | "right") =>
  dir === "left" ? <RiArrowLeftSLine /> : <RiArrowRightSLine />;

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  image: StaticImageData;
  stars: number[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sohail",
    comment:
      "Your work was outstanding! I was impressed with the quality of your work and the professionalism you showed throughout the project. I highly recommend you for any future projects.",
    image: TesPic,
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    id: 2,
    name: "Naveed",
    comment:
      "Very professional work and always delivered on time. Will definitely work again.",
    image: TesPic,
    stars: [1, 1, 1, 0.5],
  },
  {
    id: 3,
    name: "Qureshi",
    comment:
      "Excellent service and attention to detail. Highly skilled and easy to communicate with.",
    image: TesPic,
    stars: [1, 1, 1, 1, 1],
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef<(HTMLDivElement | null)[]>([]);

  // const leftClickHandler = () => {
  //   animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
  //   animate(slides.current[prevIndex.current]!, { x: "100%" });
  // };

  // const rightClickHandler = () => {
  //   animate(slides.current[index], { x: 0 }, { delay: 0.3 });
  //   animate(slides.current[prevIndex.current]!, {
  //     scale: index === 0 ? 1 : 0.4,
  //     rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
  //   });
  // };

  const leftClickHandler = () => {
    const currentSlide = slides.current[index];
    const prevSlide = slides.current[prevIndex.current];
    if (currentSlide && prevSlide) {
      animate(currentSlide, { scale: 1, rotate: 0 }, { delay: 0.2 });
      animate(prevSlide, { x: "100%" });
    }
  };

  const rightClickHandler = () => {
    const currentSlide = slides.current[index];
    const prevSlide = slides.current[prevIndex.current];
    if (currentSlide && prevSlide) {
      animate(currentSlide, { x: 0 }, { delay: 0.3 });
      animate(prevSlide, {
        scale: index === 0 ? 1 : 0.4,
        rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
      });
    }
  };

  // useEffect(() => {
  //   direction ? leftClickHandler() : rightClickHandler();
  //   prevIndex.current = index;
  // }, [index]);

  useEffect(() => {
    if (direction) {
      leftClickHandler(); // Call leftClickHandler when direction is true
    } else {
      rightClickHandler(); // Call rightClickHandler when direction is false
    }
    prevIndex.current = index; // Update prevIndex with the current index
  }, [index]);

  return (
    <section className="section" id="testimonials">
      <div className="container pt-[6em] pb-[5em]">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-[25px]">
            <h3 className="text-3xl font-bold mb-2 text-blue-600">
              Testimonials
            </h3>
            <p>Words from My Clients</p>
          </div>

          {/* Testimonial Card */}
          <div className="flex flex-col justify-center items-center ">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative flex justify-center items-center overflow-hidden w-[800px] h-[500px]"
            >
              {testimonials.map((item, i) => (
                <motion.div
                  initial={{ x: "100%" }}
                  key={item.id}
                  className="absolute inset-0 flex flex-col justify-center items-center gap-y-7 border bg-zinc-50 dark:bg-zinc-500 p-14 rounded-xl"
                  ref={(el) => {
                    slides.current[i] = el;
                  }}
                >
                  <Image
                    src={item.image}
                    alt={`Testimonial from ${item.name}`}
                    width={130}
                    height={130}
                    className="w-[130px] rounded-full aspect-square border p-4 object-contain"
                  />
                  <h1 className="font-semibold text-2xl tracking-wider">
                    {item.name}
                  </h1>
                  <p className="text-lg text-justify font-extralight tracking-wide first-letter:pl-2">
                    {item.comment}
                  </p>
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <span className="text-lg font-light mr-3">
                      {item.stars
                        .reduce((sum, item) => {
                          return (sum += item);
                        }, 0)
                        .toFixed(1)}
                    </span>
                    <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                      {item.stars.map((star, i) => (
                        <span key={`star-${item.id}-${i}`}>
                          {/* {star === 1 ? starIcons.full : starIcons.half} */}
                          {getStarIcon(star)}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Arrows */}
            <div
              className="flex gap-x-4
             text-4xl mt-5"
            >
              <button
                className={`${
                  index === 0
                    ? "opacity-30 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
                } hover:scale-150 transition-all`}
                onClick={() => {
                  // setDirection(true);
                  // setIndex(index - 1);
                  if (index > 0) {
                    setDirection(true);
                    setIndex(index - 1);
                  }
                }}
              >
                {getArrowIcon("left")}
              </button>
              <button
                className={`${
                  index === testimonials.length - 1
                    ? "opacity-30 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
                } hover:scale-150 transition-all`}
                onClick={() => {
                  // setDirection(false);
                  // setIndex(index + 1);
                  if (index < testimonials.length - 1) {
                    setDirection(false);
                    setIndex(index + 1);
                  }
                }}
              >
                {getArrowIcon("right")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
