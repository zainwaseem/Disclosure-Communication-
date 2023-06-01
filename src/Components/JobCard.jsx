import React, { useState } from "react";
import { CrossOverData } from "./Data";
function JobCard() {
  const [job, setjob] = useState();
  const jobs = [
    "L2 PROFESSIONAL SERVICES CONSULTANT, IGNITETECH",
    "SOFTWARE ENGINEER, TECHCORP",
    " STRATEGIC ANALYST, TRILOGY",
    " VP OF CUSTOMER SUPPORT, TRILOGY",
    "  REMOTE COACH, GT.SCHOOL",
  ];
  return (
    <div className="text-center">
      <label for="job">Choose a job :</label>

      <select
        name="job"
        id="cars"
        onChange={(e) => setjob(e.target.value)}
        style={{ border: "2px solid black" }}
        className="text-xs  text-blue-400"
      >
        {jobs.map((val) => {
          return <option value={val}>{val}</option>;
        })}
      </select>
      <div className="bg-white py-2 sm:py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {
            <>
              <span>
                <div className=" mt-3">
                  <span className="relative  z-10 text-[#90DED4] rounded-full  px-3 py-1.5 font-medium ">
                    {job}
                  </span>
                </div>
                <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3  hover:border-gray-400">
                  {CrossOverData.map((post) => (
                    <article
                      key={post.id}
                      className="flex border-e border-b border-gray-400 hover:border-blue-600 max-w-xl flex-col items-start justify-between"
                    >
                      <div className="h-[350px] w-[100%]  p-2  gap-x-4 text-xs">
                        <img
                          src={post.image}
                          alt=""
                          className="h-[100%] w-[100%] rounded-lg "
                        />
                      </div>
                      <div className="group relative mt-3">
                        <span className="relative z-10 text-[#90DED4] rounded-full  px-3 py-1.5 font-medium ">
                          {post.name}
                        </span>
                        <span> | </span>
                        <span className=" inset-0">{post.jobtitle}</span>
                        <br />
                        <span className="text-[20px] font-bold">
                          <i class="fa-solid fa-location-dot"></i>{" "}
                          <span>{post.city}</span>
                        </span>

                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">
                          {/* <a >
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a> */}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {post.body}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a>
                              <span className="absolute inset-0" />
                              Manager {post.name}
                            </a>
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </span>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default JobCard;
