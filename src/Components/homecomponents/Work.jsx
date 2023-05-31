import React from "react";

const Work = () => {
  return (
    <div class="flex items-center " style={{ fontFamily: "Muli" }}>
      <div class="container ml-auto mr-auto flex flex-wrap items-start">
        {/* <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
            Best Sellers
          </h1>
        </div> */}
        <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
          <div class=" rounded-lg m-h-64 p-2 transform hover:translate-y-2  transition duration-300">
            <h1 className="text-7xl text-center text-bluee text-bluee">
              TOP 1%
            </h1>
            <p className="text-center">OF GLOBAL TALENT</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
          <div class=" rounded-lg max-h-52 p-2 transform hover:translate-y-2  transition duration-300">
            <h1 className="text-7xl text-center text-bluee">530+</h1>
            <p className="text-center">COUNTRIES</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
          <div class=" rounded-lg m-h-64 p-2 transform hover:translate-y-2  transition duration-300">
            <h1 className="text-7xl text-center text-bluee">11M+</h1>
            <p className="text-center">ACCOUNTS CREATED</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
          <div class=" rounded-lg m-h-64 p-2 transform hover:translate-y-2  transition duration-300">
            <h1 className="text-7xl text-center font-light text-bluee">
              9,000+
            </h1>
            <p className="text-center">ROCKSTARS RECRUITED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
