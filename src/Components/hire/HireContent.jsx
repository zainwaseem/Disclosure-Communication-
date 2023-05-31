import React from "react";

const HireContent = ({ imgg, headText, desc, orderr }) => {
  return (
    <div
      className={`container ${!orderr && "bg-secondary-100"} my-2 px-12 py-5`}
    >
      <div className="flex justify-between  items-center  flex-wrap lg:-mx-2">
        <div
          className={`w-full  flex justify-center ${
            orderr ? "lg:order-2" : "order-1"
          } items-center my-12 md:w-1/2 lg:my-8 lg:px-2 lg:w-1/2`}
        >
          <div className="shadow-md  p-5  bg-white m-0 lg:ms-12">
            <img src={imgg} alt="" />
          </div>
        </div>
        <div
          className={`my-3 flex  ${
            orderr ? "lg:order-1" : "order-2"
          } items-center  lg:items-start justify-center flex-col md:w-1/2 lg:my-8 lg:w-1/2`}
        >
          <h1 className="py-1 text-2xl font-extrabold text-primary-100">
            {headText}
          </h1>
          <h1 className="text-lg lg:pr-12 text-justify font-medium">{desc}</h1>
        </div>
      </div>
    </div>
  );
};

export default HireContent;
