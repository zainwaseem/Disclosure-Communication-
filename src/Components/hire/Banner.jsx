// import React from "react";
import "./Banner.scss";
// import FeaturesBannerImg from "../../assets/img/FeaturesBannerImg.png";

const Banner = ({ titleText, BannerDesc }) => {
  return (
    <>
      <div className="Banner text-white">
        <div className=" text-4xl text-center h-full flex flex-col items-center justify-center">
          <h3 className="text-primary-100 uppercase font-semibold">
            {titleText}
          </h3>
          <h2 className="font-bold capitalize">{BannerDesc}</h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
