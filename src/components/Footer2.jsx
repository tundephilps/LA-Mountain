import React from "react";

const Footer2 = () => {
  return (
    <footer class="flex  h-25 lg:px-[20%] bg-gray-700 flex-col items-center justify-between px-4 py-5 mx-auto  md:flex-row">
      <div className="flex flex-row items-center gap-2 ">
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/ice-mountain-17910.jpg"
            className="h-8 w-8 rounded-full"
            alt=""
          />
        </div>
        <div className=" flex-col -space-y-2 font-bold ">
          <h1 className="text-gray-400">LOSANGELES</h1>
          <h1 className="text-gray-400"> MOUNTAINS</h1>
        </div>
      </div>

      <div class="flex items-center space-x-6">
        <div className=" text-gray-400 font-bold lg:text-base text-sm">
          COPYRIGHT. 2016 ALL RIGHT RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
