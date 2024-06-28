import React, { useEffect, useState } from "react";
import { Link as Scrolllink } from "react-scroll";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      class={`flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 fixed transition-all duration-300 ${
        scrollPosition > 0
          ? "bg-white opacity-80 "
          : "backdrop-blur-2xl sm:bg-none"
      }  bg-opacity-75`}
    >
      <nav
        class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4  md:px-8 mx-auto"
        aria-label="Global"
      >
        <div class="md:col-span-3">
          <a
            class={`flex-none rounded-xl ${
              scrollPosition > 0 ? "text-black" : "text-white"
            } cursor-pointer inline-block text-4xl font-semibold focus:outline-none focus:opacity-80`}
            href="/"
            aria-label="Preline"
          >
            MoH
          </a>
        </div>

        <div class="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <a
            href="https://github.com/vvviv205"
            target="_blank"
            type="button"
            class="py-2 px-3 flex justify-center gap-x-3 items-center cursor-pointer text-sm font-medium rounded-xl border border-transparent bg-blue-700 text-white  transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
          >
            My Github
            <FaGithub />
          </a>

          <div class="md:hidden">
            <button
              type="button"
              class={`hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-none ${
                scrollPosition > 0 ? "text-black " : "text-white"
              } disabled:opacity-50 disabled:pointer-events-none `}
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Scrolllink
                class={`relative inline-block cursor-pointer text-lg ${
                  scrollPosition > 0 ? "text-black" : "text-white"
                } before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 `}
                to="home"
                aria-current="page"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Scrolllink>
            </div>
            <div>
              <Scrolllink
                to="about"
                class={`inline-block ${
                  scrollPosition > 0 ? "text-black" : "text-white"
                } cursor-pointer text-lg hover:text-gray-600 dark:text-white dark:hover:text-neutral-300`}
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
              >
                About
              </Scrolllink>
            </div>
            <div>
              <Scrolllink
                to="pricing"
                class={`inline-block ${
                  scrollPosition > 0 ? "text-black" : "text-white"
                } cursor-pointer text-lg hover:text-gray-600 dark:text-white dark:hover:text-neutral-300`}
                spy={true}
                smooth={true}
                offset={50}
                duration={1100}
              >
                Pricing
              </Scrolllink>
            </div>
            <div>
              <Scrolllink
                to="team"
                class={`inline-block ${
                  scrollPosition > 0 ? "text-black" : "text-white"
                } cursor-pointer text-lg hover:text-gray-600 dark:text-white dark:hover:text-neutral-300`}
                spy={true}
                smooth={true}
                offset={50}
                duration={1300}
              >
                Team
              </Scrolllink>
            </div>
            <div>
              <Scrolllink
                to="contact"
                class={`inline-block ${
                  scrollPosition > 0 ? "text-black" : "text-white"
                } cursor-pointer text-lg hover:text-gray-600 dark:text-white dark:hover:text-neutral-300`}
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                Contact
              </Scrolllink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
