import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/Logo1.png";
import Menu from "../Menu";
import MiniBar from "../MiniBar";
import Footer from "../Footer";

const AppLayout = ({ children }) => {
  // Navbar menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const collapseMenuRef = useRef(null);

  // Profile dropdown toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownMenuRef = useRef(null);
  const dropdownToggleRef = useRef(null);

  // Close menu on outside click (for dropdown)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownOpen &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target) &&
        dropdownToggleRef.current &&
        !dropdownToggleRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  // Prevent scrolling when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="flex [box-shadow:rgba(0,0,0,0.1)_-4px_9px_25px_-6px] py-2 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide sticky top-0 z-50">
        <div className="w-full flex flex-wrap items-center lg:gap-y-4 gap-y-6 gap-x-4 relative">
          <a href="/">
            <img src={Logo} alt="logo" className="w-12 h-12" />
          </a>

          <Menu
            collapseMenuRef={collapseMenuRef}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          <div className="flex items-center ml-auto">
            <MiniBar
              dropdownMenuRef={dropdownMenuRef}
              setDropdownOpen={setDropdownOpen}
              dropdownToggleRef={dropdownToggleRef}
              dropdownOpen={dropdownOpen}
            />

            <button
              id="toggleOpen"
              className="lg:hidden ml-6 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="w-8 h-8"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <>{children}</>
      <Footer/>
    </>
  );
};

export default AppLayout;
