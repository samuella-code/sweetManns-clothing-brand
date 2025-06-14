import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ link, text, isActive = false }) => {
  return (
    <li
      className={`max-lg:border-b max-lg:border-gray-300 max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300 ${
        isActive &&
        "lg:after:absolute lg:after:bg-pink-500 lg:after:w-full lg:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300"
      } `}
    >
      <Link
        to={link ?? "#"}
        className="text-slate-900 block text-sm font-semibold"
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
