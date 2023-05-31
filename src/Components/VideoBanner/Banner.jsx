// import "./Banner.css";
import { BsArrowRightShort } from "react-icons/bs";
import clip from "../../assets/videos/Disclosure Communication Homepage.webm";
// import prj from "../../img/prj.mp4";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="relative">
        <div
          className="header-banner gradient_overlay header-bottom-notch ng-star-inserted"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <video autoPlay loop  className="homepagevideo"> */}
          <video autoPlay loop muted>
            <source src={clip} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="text-white py-4 absolute top-36 left-20">
          <h1 className="text-8xl font-thin  ">
            Are
            <span className="font-bold"> You</span>
            <br />
            The Best?
          </h1>
          <span className="text-xl px-3">
            It’s 2023. The top people in the world can now <br />
            <span className="ps-3">
              get Silicon Valley pay—from anywhere. Ready to
            </span>
            <br />
            <span className="ps-3">prove you’ve got what it takes?</span>
          </span>
          <br />
          <Link to="jobs" className="flex ps-3 py-3 font-bold  items-center">
            FIND A REMOTE FULL-TIME JOB
            <BsArrowRightShort />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
