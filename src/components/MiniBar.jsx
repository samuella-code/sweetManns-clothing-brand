import React from "react";
import { Link } from "react-router-dom";
import useCart from "../hook/useCart";

const MiniBar = ({
  dropdownMenuRef,
  setDropdownOpen,
  dropdownToggleRef,
  dropdownOpen,
}) => {
   const { cartCount } = useCart();
  return (
    <>
      <ul className="flex space-x-4">
        <li
          id="profile-dropdown-toggle"
          ref={dropdownToggleRef}
          className="relative px-1 after:absolute after:bg-pink-500 after:w-full after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setDropdownOpen((open) => !open);
          }}
        >
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 512 512"
            >
              <path
                d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                data-original="#000000"
              />
            </svg>
            <span className="text-xs font-semibold mt-1">Profile</span>
          </div>
          <div
            id="profile-dropdown-menu"
            ref={dropdownMenuRef}
            className={`bg-white z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14 ${
              dropdownOpen ? "block" : "hidden"
            }`}
          >
            <h6 className="font-semibold text-sm">Welcome</h6>
            <p className="text-sm text-slate-500 mt-1">
              To access account and manage orders
            </p>
            <button
              type="button"
              className="bg-transparent border border-gray-300 hover:border-pink-500 px-4 py-2 mt-4 text-sm text-pink-500 font-semibold cursor-pointer"
            >
              LOGIN / SIGNUP
            </button>
            <hr className="border-b-0 my-4 border-gray-300" />
            <ul className="space-y-1.5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Order
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Wishlist
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <hr className="border-b-0 my-4 border-gray-300" />
            <ul className="space-y-1.5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Coupons
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Saved Credits
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-slate-500 hover:text-pink-500"
                >
                  Saved Addresses
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 64 64"
            >
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"
              ></path>
            </svg>
            <span className="text-xs font-semibold mt-1">Wishlist</span>
          </div>
        </li>
        <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
          <Link
            to="/cart"
            className="flex flex-col justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 489 489"
            >
              <path
                d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                data-original="#000000"
              />
            </svg>
            <div className="bg-red-500 size-4 text-xs absolute -top-2 right-3 flex items-center justify-center rounded-full text-white">
              {Number(cartCount)}
            </div>
            <span className="text-xs font-semibold mt-1">Bag</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MiniBar;
