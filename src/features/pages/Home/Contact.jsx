import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="relative bg-white" id="contact">
      <div className="absolute bg-gray-200 top-0 w-full h-[55%] z-0"></div>
      <div className="flex justify-between items-center flex-wrap z-20  gap-y-20 py-28 px-3 sm:px-16 ">
        <div className="z-10 flex flex-col justify-center gap-y-24 items-start ">
          <div>
            <h1 className="text-xl font-semibold">Contact</h1>
            <h1 className="text-5xl font-semibold">
              Let’s talk about <br />
              Love to hear from you!
            </h1>
          </div>
          <div className="flex justify-between items-center w-full flex-wrap gap-y-8">
            <div className="flex justify-center gap-x-2 items-center">
              <IoLocationOutline className="text-5xl text-blue-700" />
              <div className="flex flex-col justify-center items-start gap-y-1">
                <h1 className="text-lg">Our location</h1>
                <h1 className="text-sm text-gray-500">Najaf-Iraq</h1>
              </div>
            </div>
            <div className="flex justify-center gap-x-2 items-center">
              <IoMailOutline className="text-5xl text-blue-700" />
              <div className="flex flex-col justify-center items-start gap-y-1">
                <h1 className="text-lg">How can I help?</h1>
                <h1 className="text-sm text-gray-500">info@yourdomain.com</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center h-[650px] w-[400px] z-20 bg-white shadow-xl py-16 gap-y-10">
          <h1 className="text-3xl font-semibold">Send us message</h1>

          <div className="w-full px-3 sm:px-14">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Full name*
            </label>
            <input
              type="text"
              id="small-input"
              required
              placeholder="Mohammad Heitham"
              class="block w-full p-2 text-gray-900 border-0 border-b-[1px] border-gray-600 focus:border-b-2 focus:border-b-blue-700 rounded-lg  focus:outline-none focus:ring-0"
            />
          </div>
          <div className="w-full px-3 sm:px-14">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Phone number*
            </label>
            <input
              type="text"
              id="small-input"
              required
              placeholder="+964xxxxxxxxxxxxx"
              class="block w-full p-2 text-gray-900 border-0 border-b-[1px] border-gray-600 focus:border-b-2 focus:border-b-blue-700 rounded-lg  focus:outline-none focus:ring-0"
            />
          </div>
          <div className="w-full px-3 sm:px-14">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Email*
            </label>
            <input
              type="email"
              id="small-input"
              required
              placeholder="example@yourmail.com"
              class="block w-full p-2 text-gray-900 border-0 border-b-[1px] border-gray-600 focus:border-b-2 focus:border-b-blue-700 rounded-lg  focus:outline-none focus:ring-0"
            />
          </div>
          <div className="w-full px-3 sm:px-14">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Text message*
            </label>
            <input
              type="text"
              id="small-input"
              required
              placeholder="Type your message here"
              class="block w-full p-2 text-gray-900 border-0 border-b-[1px] border-gray-600 focus:border-b-2 focus:border-b-blue-700 rounded-lg  focus:outline-none focus:ring-0"
            />
          </div>
          <button className="py-3 px-7 bg-blue-700 text-white hover:bg-black rounded-xl">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
