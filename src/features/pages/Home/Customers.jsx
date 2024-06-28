import React from "react";
import { IoStar } from "react-icons/io5";
import author from "../../../../public/imgs/author-01.png";
export default function Customers() {
  return (
    <div className="relative flex flex-col h-fit overflow-hidden justify-start items-center py-28 bg-gray-200 gap-y-4">
      <h1 className="text-blue-600 text-xl font-bold" data-aos="fade-up">
        Testimonials
      </h1>
      <h1 className="font-bold text-center text-5xl" data-aos="fade-up">
        What Our Customers Says
      </h1>
      <h1
        className="text-xl w-full sm:w-1/2 text-gray-600 text-center mt-3"
        data-aos="fade-up"
      >
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </h1>
      <br />
      <br />

      <div
        className="flex justify-center flex-wrap gap-y-7 gap-x-10 items-center"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-start w-[90%] sm:w-[400px] p-7 gap-y-5 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
          <div className="flex gap-x-1">
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
          </div>
          <h1 className="text-gray-400 ">
            “Our members are so impressed. It's intuitive. It's clean. It's
            distraction free. If you're building a community.
          </h1>
          <div>
            <div className="flex justify-start items-center">
              <img src={author} alt="" />
              <div className="flex flex-col">
                <h1>Sabo Masties</h1>
                <h1 className="text-xs text-gray-400">Founder @UIdeck</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[90%] sm:w-[400px] p-7 gap-y-5 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
          <div className="flex gap-x-1">
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
          </div>
          <h1 className="text-gray-400 ">
            “Our members are so impressed. It's intuitive. It's clean. It's
            distraction free. If you're building a community.
          </h1>
          <div>
            <div className="flex justify-start items-center">
              <img src={author} alt="" />
              <div className="flex flex-col">
                <h1>Sabo Masties</h1>
                <h1 className="text-xs text-gray-400">Founder @UIdeck</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[90%] sm:w-[400px] p-7 gap-y-5 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
          <div className="flex gap-x-1">
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
            <IoStar className="text-yellow-400" />
          </div>
          <h1 className="text-gray-400 ">
            “Our members are so impressed. It's intuitive. It's clean. It's
            distraction free. If you're building a community.
          </h1>
          <div>
            <div className="flex justify-start items-center">
              <img src={author} alt="" />
              <div className="flex flex-col">
                <h1>Sabo Masties</h1>
                <h1 className="text-xs text-gray-400">Founder @UIdeck</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
