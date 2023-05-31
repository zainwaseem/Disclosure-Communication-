import React from "react";
// import Banner from "../Components/VideoBanner/Banner";
import Banner from "../Components/hire/Banner";
import Whatwedo from "../Components/Whatwedo";
import Work from "../Components/homecomponents/Work";
import Worth from "../Components/Worth";
import CompanySlider from "../Components/CompanySlider";
import Footer from "../Components/Footer";
import HowitWorks from "../Components/homecomponents/HowitWorks";
import Whycrossover from "../Components/homecomponents/Whycrossover"


const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <Banner />

      <Whatwedo />
      <Whycrossover />
      <Work />
      {/* <Worth /> */}
      <CompanySlider />
      <HowitWorks />
   
    </div>
  );
};

export default Home;
