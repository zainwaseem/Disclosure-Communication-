import { CrossOverheading, CrossOverData } from "./Data";

export default function DataCard() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {CrossOverheading.map((val, index) => {
          return (
            <span key={index}>
              <div className=" py-6 my-2 ">
                {/* <span className="relative z-10 text-[#1A3551] rounded-full  px-3 py-1.5 font-medium ">
                  INSIGHTS ON
                </span> */}
                <h2 className="text-3xl font-bold tracking-tight text-[#1A3551] sm:text-4xl">
                  {val.topic}
                </h2>
                <p className=" text-lg leading-8 text-gray-600">
                  {val.discription}
                </p>
              </div>
              <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:mt-4 sm:pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3  hover:border-gray-400">
                {CrossOverData.map(
                  (post) =>
                    post.topic === val.topic && (
                      <article
                        key={post.id}
                        className="flex border-e border-b border-gray-400 hover:border-blue-600 max-w-xl flex-col items-start justify-between"
                      >
                        <div className="w-100  p-2 items-center gap-x-4 text-xs">
                          <img
                            src={post.image}
                            alt=""
                            className="w-[100%]  rounded-lg "
                          />
                        </div>
                        <div className="group relative mt-3">
                          <span className="relative z-10 text-[#1A3551] rounded-full  px-3 py-1.5 font-medium ">
                            {post.name}
                          </span>
                          <span> | </span>
                          <span className="inset-0 text-[#1A3551]">
                            {post.jobtitle}
                          </span>
                          <br />
                          <span className="text-[20px] font-bold">
                            <i class="fa-solid fa-location-dot"></i>{" "}
                            <span>{post.city}</span>
                          </span>

                          <h3 className="mt-3 text-lg font-semibold leading-6 text-blueish">
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
                                MEET {post.name}
                              </a>
                            </p>
                          </div>
                        </div>
                      </article>
                    )
                )}
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
}
