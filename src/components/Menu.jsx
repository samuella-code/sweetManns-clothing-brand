import { X } from "lucide-react";
import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Menu = ({ collapseMenuRef, menuOpen, setMenuOpen }) => {
  return (
    <>
      <div
        id="collapseMenu"
        ref={collapseMenuRef}
        className={`${
          menuOpen ? "block" : "hidden"
        } max-lg:fixed max-lg:bg-white max-lg:w-2/4 max-lg:min-w-[200px] max-lg:top-0 max-lg:right-0 max-lg:px-8 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:!flex lg:items-center lg:flex-1 max-lg:before:fixed `}
      >
        {/* desktop menu */}
        <ul className="lg:ml-12 lg:flex lg:gap-x-8 max-lg:space-y-3 z-50">
          <li className="mb-6 hidden max-lg:block">
            <button
              id="toggleClose"
              className="lg:hidden  rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </button>
          </li>
          {/* ...rest of your menu items... */}

          <NavLink text="Men" link="/mens" />
          <NavLink text="Womens" link="/womens" />
          <NavLink text="kids" link="/kids" />
          <NavLink text="Accessories" link="/Accessories" isActive={true}/>
          <NavLink text="Beauty" link="Beauty" />
        </ul>

        {/* search */}
        <div className="lg:mx-8 max-xl:hidden flex items-center bg-gray-100 px-4 h-10 rounded-sm flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            className="cursor-pointer fill-gray-500 mr-4 inline-block w-[16px] h-16px"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search something..."
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
