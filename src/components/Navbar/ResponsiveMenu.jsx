import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div
            className={`${
                showMenu ? "left-0" : "-left-[100%]"
            } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gradient-to-b from-yellow-500 to-pink-500 text-white px-8 pb-6 pt-16 md:hidden rounded-r-xl shadow-lg transition-all duration-300 ease-in-out`}
        >
            <div>
                {/* User Info Section */}
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} className="text-white" />
                    <div>
                        <h1 className="text-lg font-semibold">Hello, User</h1>
                        <h1 className="text-sm text-gray-200">Premium User</h1>
                    </div>
                </div>

                {/* Navigation Section */}
                <nav className="mt-12">
                    <ul className="flex flex-col space-y-6 text-lg">
                        <Link to="/" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">Home</li>
                        </Link>
                        <Link to="/mens" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">Men</li>
                        </Link>
                        <Link to="/womens" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">Women</li>
                        </Link>
                        <Link to="/kids" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">Sweat-wears</li>
                        </Link>
                        <Link to="/womwen2" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">T-Shirts</li>
                        </Link>
                        <Link to="/Accessories" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">Accessories</li>
                        </Link>
                        <Link to="/hats" onClick={() => setShowMenu(false)}>
                            <li className="hover:text-yellow-300 transition-colors duration-200">Hats</li>
                        </Link>
                        <Link to="/login" onClick={() => setShowMenu(false)}>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-200">
                                Login
                            </button>
                        </Link>
                    </ul>
                </nav>
            </div>

            {/* Footer Section */}
            <div className="text-center text-sm text-gray-200">
                <h1>
                    Made with <span className="text-red-400">❤️</span> by Samuella
                </h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;
