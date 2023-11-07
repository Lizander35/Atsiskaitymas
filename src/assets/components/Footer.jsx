import React from "react";
import { Link } from "react-router-dom";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center gap-1 mb-4 md:mb-0"
        >
          <ComputerDesktopIcon className="w-7 h-7 text-blue-600" />
          <Link to="/" className="text-blue-500">Leon</Link>
        </Link>
        <div className="copyright">
          <div>2023 copyright | portfolio</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;