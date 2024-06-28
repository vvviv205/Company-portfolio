import React, { useEffect } from "react";
import { RxMobile } from "react-icons/rx";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
export default function Features() {
  return (
    <div
      className="flex flex-col bg-white w-full px-10 sm:px-20 py-28 gap-y-6"
      id="about"
    >
      <h1
        className="text-xl text-blue-600 font-semibold"
        data-aos="fade-up"
        data-aos-duraion="500"
      >
        Features
      </h1>
      <h1
        className="text-5xl text-neutral-800 font-semibold"
        data-aos="fade-up"
        data-aos-duraion="500"
      >
        Main Features Of Play
      </h1>

      <h1
        className="text-gray-500 text-2xl mt-2 w-full sm:w-[50%]"
        data-aos="fade-up"
        data-aos-duraion="500"
      >
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </h1>

      <div
        class="max-w-[85rem] p-0 sm:px-4 py-6 lg:px-4 lg:py-14 mx-auto"
        data-aos="fade-up"
        data-aos-duraion="500"
      >
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2 ">
          <a
            class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <RxMobile className="text-2xl bg-blue-600 text-white h-14 w-14 p-2 rounded-lg" />
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Responsive
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Responsive, and mobile-first project on the web
              </p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          <a
            class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <RxMobile className="text-2xl bg-blue-600 text-white h-14 w-14 p-2 rounded-lg" />
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Customizable
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Components are easily customized and extendable
              </p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          <a
            class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <RxMobile className="text-2xl bg-blue-600 text-white h-14 w-14 p-2 rounded-lg" />
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                Documentation
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Every component and plugin is well documented
              </p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
          <a
            class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800"
            href="#"
          >
            <RxMobile className="text-2xl bg-blue-600 text-white h-14 w-14 p-2 rounded-lg" />
            <div class="mt-5">
              <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
                24/7 Support
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Contact us 24 hours a day, 7 days a week
              </p>
              <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
