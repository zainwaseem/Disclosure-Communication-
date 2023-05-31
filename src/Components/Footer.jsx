import React from "react";
import crosoverlogo from "../assets/imgs/crossoverlogodark.jpeg";
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
      <footer class="footer-1 text-white bg-black py-8 sm:py- 12">
        <div class="container mx-auto  px-2">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-3">
            <div class="px-4 sm:w-1/2 md:w-1/3 xl:w-1/3">
              <h5 class="text-xl font-bold mb-6">
                <img src={crosoverlogo} alt="" />
              </h5>
              <div class="Social-media flex m-3">
                {/* #007cc4 */}
                <a href="#">
                  <AiFillLinkedin size={24} />
                </a>
                <a href="#">
                  <AiFillFacebook size={24} />
                </a>
                <a href="#">
                  <AiOutlineInstagram size={24} />
                </a>
                <a href="#">
                  <AiFillTwitterCircle size={24} />
                </a>{" "}
                <a href="#">
                  <AiFillYoutube size={24} />
                </a>
              </div>
              <br />
              <div className="helpdeskhere ">
                <h1 className="text-2xl font-bold">We’re here to help</h1>
                <p>Find answers to common questions or contact us directly.</p>
                <Link
                  to="#"
                  className="flex text-2xl font-bold justify-start items-center"
                >
                  HELP AND FAQs
                  <BsArrowRightShort />
                </Link>
              </div>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/2 xl:w-1/6 mt-8 sm:mt-0">
              {/* <h5 class="text-xl font-bold mb-6">Resources</h5> */}
              <ul class="list-none footer-links">
                {/* <Button btnText="HIRE ON CROSSOVER" path="#" /> */}
                <button className="uppercase p-3 bg-greenish border-r-4 overflow-hidden text-white">
                  HIRE ON CROSSOVER
                </button>
                <li class="mb-2">
                  {/* <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Resource
                  </a> */}
                </li>
                <li class="mb-2 py-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Companies Hiring
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="  border-b border-solid border-transparent text-xshover:border-purple-800 hover:text-purple-800"
                  >
                    Blog
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    What is Crossover for Work
                  </a>
                </li>
              </ul>
            </div>
            {/* <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">About</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 class="text-xl font-bold mb-6">Help</h5>
              <ul class="list-none footer-links">
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class=" border-b border-solid border-transparent text-base hover:border-purple-800 hover:text-purple-800"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div> */}
            <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <button className="uppercase p-3 bg-greenish border-r-4 overflow-hidden text-white">
                HIRE ON CROSSOVER
              </button>
              <div class="flex flex-col sm:justify-start xl:justify-start">
                <a
                  href=""
                  class="text-center py-1 text-white-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                >
                  Reviews
                </a>
                <a
                  href=""
                  class="text-center py-1 ml-2 text-white-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                >
                  Selection Process
                </a>
              </div>
            </div>
          </div>

          {/*  */}
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
              <h5 class="text-2xl font-bold mb-6">Popular Job Roles</h5>
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
            <div class="sm:w-full px-4 md:w-1/6">
              <strong>© Crossover, 2023</strong>
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
