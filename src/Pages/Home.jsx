import React from "react";
import Banner from "../Components/VideoBanner/Banner";
import Whatwedo from "../Components/Whatwedo";
import Whycrossover from "../Components/homecomponents/Whycrossover";
import Work from "../Components/homecomponents/Work";
import Worth from "../Components/Worth";
import CompanySlider from "../Components/CompanySlider";
import Footer from "../Components/Footer";
import HowitWorks from "../Components/homecomponents/HowitWorks";
// import Crossover from "../Crossover";

const Home = () => {
  return (
    <div>
      <Banner />
      <Whatwedo />
      <Whycrossover />
      <Work />
      <Worth />
      <CompanySlider />
      <HowitWorks />
      {/* <Crossover /> */}
      <Footer />
    </div>
  );
};

export default Home;
