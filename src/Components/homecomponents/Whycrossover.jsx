import React from "react";
import "./Whycrossover.scss";
import benifits1 from "../../assets/imgs/benifits.jpeg";
import benifits2 from "../../assets/imgs/benifits2.jpeg";
import benifits3 from "../../assets/imgs/benifits3.jpeg";

import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Whycrossover = () => {
  return (
    <>
      <div className="contaier-fluid m-7">
        <div className="whycrossever bg-gray-100 w-100 py-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative lg:grid lg:grid-cols-1 lg:gap-8 lg:items-center">
              <div className="pb-8  lg:block">
                <div className="flex justify-between  items-center">
                  <h1 className="text-2xl font-bold">
                    Disclosure Communication
                  </h1>
                  <Link
                    to="#"
                    className="flex text-2xl font-bold justify-start items-center"
                  >
                    OUR MISSION
                    <BsArrowRightShort />
                  </Link>
                </div>
                <h1 className="text-3xl font-normal py-3 md:text-2xl">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
                {/*
                <p className="text-xl">
                  Enable the top few to access high-paying remote jobs from
                  anywhere.
                </p> */}
                {/* <div className="cardd">
                  <div className="crossovercard">
                    <h3>We only hire the top 1%</h3>
                    <p>
                      Our super high quality bar means it’s not easy to
                      qualify—but every single team member is a rockstar.
                    </p>
                  </div>{" "}
                  <div className="crossovercard">
                    <h3>Premium pay for premium talent</h3>
                    <p>
                      Over 50% of new hires double or triple their previous pay.
                      Why? Because that’s what the best person in the world is
                      worth.
                    </p>
                  </div>{" "}
                  <div className="crossovercard">
                    <h3>Shortlist by skills, not bias</h3>
                    <p>
                      We don’t care where you went to school, what color your
                      hair is, or whether we can pronounce your name. Just prove
                      you’ve got the skills.
                    </p>
                  </div>
                </div> */}
                <div class="container my-12 mx-auto px-4 md:px-12">
                  <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden rounded-lg ">
                        {/* <a href="#">
                           <img
                            alt="Placeholder"
                            class="block h-auto w-full"
                            // src="https://picsum.photos/600/400/?random"
                            src={benifits3}
                          /> 
                        </a> */}

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <p className="text-grey-darker text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam, iure unde. Quod a quia quibusdam
                            expedita necessitatibus laboriosam molestias? Omnis.
                          </p>
                        </header>
                      </article>
                    </div>
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden rounded-lg ">
                        {/* <a href="#">
                          <img
                            alt="Placeholder"
                            class="block h-auto w-full"
                            src={benifits2}
                          />
                        </a> */}

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <p class="text-grey-darker text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Explicabo aliquam voluptates quod corrupti
                            numquam, dicta porro? Quam dolores ipsam amet!
                          </p>
                        </header>
                      </article>
                    </div>
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <article class="overflow-hidden rounded-lg ">
                        {/* <a href="#">
                          <img
                            alt="Placeholder"
                            class="block h-auto w-full"
                            src={benifits1}
                          />
                        </a> */}

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <p class="text-grey-darker text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Labore cum pariatur totam necessitatibus quo
                            voluptas fugiat nesciunt neque saepe soluta?
                          </p>
                        </header>
                      </article>
                    </div>
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

export default Whycrossover;
