import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import image from "../../../../public/imgs/image.png";
import dotted from "../../../../public/imgs/dotted.svg";
export default function Homepage() {
  return (
    <div className="relative flex flex-col justify-start items-center h-[70vh] sm:h-[100vh] bg-blue-600 text-white pt-40 w-full  gap-y-7">
      <h1
        className="text-3xl sm:text-6xl text-center font-bold"
        data-aos="fade-in"
      >
        WELCOME TO MoH
      </h1>
      <h2
        className="text-lg sm:text-lg text-center text-gray-200 w-[90%] sm:w-full"
        data-aos="fade-in"
      >
        BEST information technology ever make your future easier
      </h2>

      <div
        className="flex justify-center gap-x-6 text-gray-300 hover:text-white text-4xl sm:text-5xl"
        data-aos="fade-up"
        data-aos-duraion="500"
      >
        <SiJavascript />
        <SiReact />
        <SiTailwindcss />
        <SiHtml5 />
      </div>
      <div className=" absolute bottom-0  h-fit flex justify-center items-center gap-x-7 w-fit">
        <img
          src={image}
          alt=""
          className="z-10 object-cover h-36 w-[80%] sm:h-auto sm:w-full"
        />
        <img
          src={dotted}
          alt=""
          className="absolute left-3 sm:left-[-30px] z-0 bottom-[-10px] h-16 w-16 sm:h-28 sm:w-28"
        />
        <img
          src={dotted}
          alt=""
          className="absolute right-3 sm:right-[-30px] z-0 top-[-20px] h-16 w-16 sm:h-28 sm:w-28"
        />
      </div>
    </div>
  );
}
