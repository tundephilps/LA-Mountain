import React, { useEffect, useState } from "react";
import Drop from "./Drop";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function setLogo() {
    if (scrollY > 70) {
      return "#000000";
    } else {
      return "";
    }
  }

  function setNavbarBackground() {
    if (scrollY > 70) {
      return "#fff";
    } else {
      return "";
    }
  }

  return (
    <header
      className="px-[15%] bg-transparent "
      style={{
        background: setNavbarBackground(),
        position: "fixed",
        width: "100%",
        height: "10%",
        top: 0,
        zIndex: "9",
      }}
    >
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex flex-row items-center gap-2">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/ice-mountain-17910.jpg"
              className="h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex flex-col -space-y-2 font-bold">
            <h1 className="text-gray-700">LOSANGELES</h1>
            <h1 className="text-blue-900"> MOUNTAINS</h1>
          </div>
        </div>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#history"
              className="flex items-center px-4 border-spacing-y-4  hover:border-t-4 border-b-4 border-gray-700 "
            >
              01. HISTORY
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#team"
              className="flex items-center px-4   border-b-4 border-gray-700"
            >
              02. TEAM
            </a>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <Drop />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
