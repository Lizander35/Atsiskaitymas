import React from "react";
import { Link } from "react-router-dom";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center gap-1 mb-4 md:mb-0"
        >
          <ComputerDesktopIcon className="w-7 h-7 text-blue-600" />
          <Link to="/">Leon</Link>
        </Link>
        <div className="text-center md:text-right">
          <div className="mb-2 md:mb-0">2023 copyright | portfolio</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;