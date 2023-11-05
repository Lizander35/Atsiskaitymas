import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

const Navigation = ({ links }) => {
  let [open, setOpen] = useState(false);

  const styles = {
    container: clsx("shadow-md w-full fixed top-0 left-0 z-50"),
  };

  return (
    <div className={styles.container}>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center gap-1"
        >
          <ComputerDesktopIcon className="w-7 h-7 text-blue-600" />
          <span>Leon</span>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {links.map((link, index) => (
            <li  key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
