import React from "react";

const Footer = () => {
  return (
    <footer className="px-[10%] lg:px-[20%] bg-gray-700">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex flex-row items-center gap-2">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/ice-mountain-17910.jpg"
              className="h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className=" flex-col -space-y-2 font-bold lg:block hidden">
            <h1 className="text-gray-400">LOSANGELES</h1>
            <h1 className="text-gray-400"> MOUNTAINS</h1>
          </div>
        </div>
        <div className="flex items-center text-gray-400 font-bold lg:text-base text-sm">
          COPYRIGHT. 2016 ALL RIGHT RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
