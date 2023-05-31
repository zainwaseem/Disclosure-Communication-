import { Link } from "react-router-dom";
import "./CompanySlider.scss";
import { BsArrowRightShort } from "react-icons/bs"

const CompanySlider = () => {
  return (
    <>
      <div className="container px-12 headtext w-full py-12 ">
        <div className="clients flex justify-between px-12">
          <h1 className="font-medium text-2xl text-greenish">OUR CLIENTS</h1>
          <Link to="#" className="flex items-center uppercase hover:text-greenish">
            View ALl Clients
            <BsArrowRightShort />
          </Link>
        </div>
        <p className="text-3xl px-12 text-gray font-extralight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laborum aperiam laboriosam illo ipsum eveniet nulla quae magni doloribus ratione.
        </p>
        {/* <Button btnText= /> */}
      </div>
      <div class="slider w-72 container px-12 ">
        <div class="slide-track w-72 container-fluid px-12">
          <div class="slide flex justify-center items-center ">
            <img
              src="https://assets-us-01.kc-usercontent.com/7beb5311-75a4-0049-50f5-8f58fd55aba7/d5fff3f1-5cb9-49f6-8dfc-b1617ed9ea3e/trilogy.png?fm=jpg&auto=format&w=130&h=65&fit=clip"
              height="100"
              className="grayscale hover:grayscale-0"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              className="grayscale hover:grayscale-0"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              className="grayscale hover:grayscale-0"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              className="grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
              height="100"
              width="250"
              className="grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              className="grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              className="grayscale hover:grayscale-0"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              className="grayscale hover:grayscale-0"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              className="grayscale hover:grayscale-0"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
              className="grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanySlider;
