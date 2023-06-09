import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="containerr text-[#1A3551] flex justify-center items-center">
      <div className="loginbox bg-[#d4b6b8] p-12 w-96 text-center">
        <h1 className="text-3xl font-bold ">login</h1>
        <p>Welcome back! Please login to continue..</p>
        <input
          type="text"
          placeholder="Your Email Address"
          className="py-3 px-1 my-2 border outline-none w-full text-start"
        />
        <br />
        <button className="uppercase bg-darkblue w-full p-3  text-white">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Login;
