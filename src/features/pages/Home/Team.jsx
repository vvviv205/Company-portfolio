import React from "react";
import teamImg from "./../../../../public/imgs/team.png";
import fotted from "./../../../../public/imgs/dottedBlack.svg";
import shape from "./../../../../public/imgs/shape-2.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Team() {
  return (
    <div
      className="relative flex flex-col h-fit overflow-hidden justify-start items-center py-28 bg-white gap-y-4"
      id="team"
      data-aos="fade-up"
    >
      <h1
        className="text-blue-600 text-xl font-bold text-center"
        data-aos="fade-up"
      >
        Our Team
      </h1>
      <h1 className="font-bold text-5xl text-center" data-aos="fade-up">
        Meet The Team
      </h1>
      <h1
        className="text-xl w-full sm:w-1/2 text-gray-400 text-center mt-3"
        data-aos="fade-up"
      >
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </h1>
      <br />
      <br />
      <div className="flex justify-evenly flex-wrap gap-y-10 items-center w-full">
        <div
          className="flex flex-col justify-start items-center w-[300px] overflow-hidden"
          data-aos="fade-up"
        >
          <div>
            <div className="relative flex justify-center items-center p-1/2">
              <img src={teamImg} alt="" className="z-10" />
              <img src={fotted} alt="" className="absolute left-0 top-0 z-0" />
              <img src={shape} alt="" className="absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <h1 className="font-semibold text-xl">Mohammad Heitham</h1>
              <h1 className="text-gray-500">Front-end developer</h1>
            </div>
            <br />
            <div className="flex justify-center items-center gap-x-6 text-gray-600">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-start items-center w-[300px] overflow-hidden"
          data-aos="fade-up"
        >
          <div>
            <div className="relative flex justify-center items-center p-1/2">
              <img src={teamImg} alt="" className="z-10" />
              <img src={fotted} alt="" className="absolute left-0 top-0 z-0" />
              <img src={shape} alt="" className="absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <h1 className="font-semibold text-xl">Mohammad Heitham</h1>
              <h1 className="text-gray-500">Front-end developer</h1>
            </div>
            <br />
            <div className="flex justify-center items-center gap-x-6 text-gray-600">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-start items-center w-[300px] overflow-hidden"
          data-aos="fade-up"
        >
          <div>
            <div className="relative flex justify-center items-center p-1/2">
              <img src={teamImg} alt="" className="z-10" />
              <img src={fotted} alt="" className="absolute left-0 top-0 z-0" />
              <img src={shape} alt="" className="absolute right-0 bottom-0" />
            </div>
            <div className="flex flex-col mt-2 items-center justify-center">
              <h1 className="font-semibold text-xl">Mohammad Heitham</h1>
              <h1 className="text-gray-500">Front-end developer</h1>
            </div>
            <br />
            <div className="flex justify-center items-center gap-x-6 text-gray-600">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <BiLogoGmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
