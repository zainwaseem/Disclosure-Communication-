import React from "react";
import crosoverlogo from "../assets/imgs/imglogo.jpeg";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import Button from "./Button";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer-1 text-white bg-[#1A3551] py-8 sm:py- 12">
        <div class="container mx-auto  px-2">
          {/*  */}
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
              <h5 class="text-2xl font-bold mb-6">Hirings Currently</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Account Management Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Channel Sales Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote DevOps Engineer Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Finance Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Java Developer Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Computer Programming Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Software Architecture Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Professional Services Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Javascript Developer Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-12 sm:mt-0">
              <ul class="list-none footer-links mt-7">
                <li class="mb-2">
                  <Link
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Angular Developer Jobs
                  </Link>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Customer Success Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Engineering Leadership Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Front-end Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote PHP Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Python Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Ruby on Rails Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Software Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote C# Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Front-end Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Front-end Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xs text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Front-end Developer Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-12 md:mt-0">
              {/* <h5 class="text-xl font-bold mb-6">About</h5> */}
              <ul class="list-none footer-links mt-7">
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Back-end developer Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Customer Support Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Engineering Management Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Full Stack Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Product Design Jobs
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Quality Assurance Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Sales Leadership Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Software Engineering Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Web Developer Jobs{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-12 md:mt-0">
              {/* <h5 class="text-xl font-bold mb-6">Help</h5> */}
              <ul class="list-none footer-links mt-7">
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote C++ developer Jobs{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Developer Jobs{" "}
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Inside Sales Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Product Management Jobs{" "}
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Executive Leadership Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote React JS Developer Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Services Leadership Jobs
                  </a>
                </li>{" "}
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Remote Strategy Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div class="sm:w-full px-4 md:w-1/3">
              <strong>© Disclosure Communication, 2023</strong>
            </div>
            <div class="flex px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
              <h6 class="mx-2 mb-2">Terms of Use</h6>
              <h6 class="mx-2 mb-2">Privacy Policy</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
