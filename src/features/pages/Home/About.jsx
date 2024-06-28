import React, { useEffect } from "react";
import aboutImage from "../../../../public/imgs/aboutImage.svg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div
      className="bg-gray-200 flex justify-center items-center"
      data-aos="fade-in"
    >
      <div className="w-full sm:w-[80vw] h-fit flex justify-between flex-col lg:flex-row bg-white my-20">
        <div className="py-20 px-4 sm:px-16 flex flex-col gap-y-4">
          <h1 className="py-1 px-4 w-fit bg-blue-700 text0whire font-semibold text-white">
            About us
          </h1>
          <h1 className="text-4xl font-bold sm:w-[70%]">
            Brilliant Toolkit to Build Nextgen Website Faster.
          </h1>
          <h1 className="pt-8 text-gray-400 sm:w-[75%]">
            The main ‘thrust’ is to focus on educating attendees on how to best
            protect highly vulnerable business applications with interactive
            panel discussions and roundtables led by subject matter experts.{" "}
            <br />
            <br /> The main ‘thrust’ is to focus on educating attendees on how
            to best protect highly vulnerable business applications with
            interactive panel.
          </h1>

          <h1 className="mt-10 py-3 px-5 bg-blue-700 text-white h-fit w-fit">
            Learn more
          </h1>
        </div>
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}
