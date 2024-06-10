import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-xl font-bold text-gray-900">E-Comm.</div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
