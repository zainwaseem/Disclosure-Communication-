// import React from "react";
// import product from "../assets/png/product-1 2.png";

const Whatwedo = () => {
  return (
    <>
      <div className="bg-gray-100 w-100 py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="border-r-2">
              <img
                src="https://assets-us-01.kc-usercontent.com/7beb5311-75a4-0049-50f5-8f58fd55aba7/4838741d-ea15-4c04-b838-bf45423a724a/what-we-do-remote-careers.jpg?w=700&h=700&fit=clip "
                className="object-contain mx-auto border-r-2"
                alt=""
              />
            </div>
            <div className="ps-8 pb-8 p-5 lg:block">
              <h1 className="text-2xl font-bold">
                Crossover matches the world’s most talented professionals with
                100% remote careers.
              </h1>
              <ul className="py-3">
                <li className="py-2">
                  Find the most talented professionals in the world.
                </li>
                <li className="py-2">Give them a way to prove their skills.</li>
                <li className="py-2">
                  Enable the top few to access high-paying remote jobs from
                  anywhere.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatwedo;
