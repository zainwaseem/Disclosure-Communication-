import React from "react";
import howitowrk from "../../assets/imgs/howitworks.jpeg";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const HowitWorks = () => {
  return (
    <>
      <div className="contaier-fluid m-7">
        <div className="whycrossever bg-gray-100 w-100 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
              <div className="ps-8 pb-8 p-5 lg:block">
                <div className="flex justify-between  items-center">
                  <h1 className="text-2xl font-bold">WHY CROSSOVER</h1>
                  <Link
                    to="#"
                    className="flex text-2xl font-bold justify-start items-center"
                  >
                    OUR VISION
                    <BsArrowRightShort />
                  </Link>
                </div>
                <h1 className="text-3xl font-normal py-3 ">
                  Applying for a role? Here’s what to expect.
                </h1>
                <p>
                  We’ve curated a series of steps that take the guesswork (and
                  cognitive bias) out of recruiting the best person.
                </p>

                <div class="container my-6 mx-auto md:px-12">
                  <div class="flex flex-wrap -mx-1 lg:-mx-1">
                    <img
                      alt="Placeholder"
                      class=" h-full w-full"
                      src={howitowrk}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowitWorks;
