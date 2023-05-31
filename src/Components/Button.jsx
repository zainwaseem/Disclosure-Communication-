import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Button = ({ btnText, path }) => {
  return (
    <Link
      to={path}
      className="uppercase p-3 bg-greenish border-r-4 text-white "
    >
      {btnText} <BsArrowRightShort />
    </Link>
  );
};

export default Button;
