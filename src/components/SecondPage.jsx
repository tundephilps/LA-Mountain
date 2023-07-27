import React from "react";

const SecondPage = () => {
  return (
    <>
      <div className="bg-white h-full py-4  flex items-center justify-center lg:px-[20%] px-[10%]">
        <div className="flex items-center lg:gap-20 gap-5 py-4 ">
          <div className="flex items-center lg:relative">
            <h1 class="  lg:text-9xl font-extrabold tracking-tight leading-none text-gray-400 text-5xl">
              02.
            </h1>
            <p className="lg:absolute left-[80%] font-extrabold text-gray-600 text-3xl">
              CLIMB
            </p>
          </div>
          <p>
            VS Code will then add the {/* */} around the selected code,
            effectively commenting it out. This is a handy feature for
            temporarily disabling or commenting out sections of code while you
            work on other parts of your project.A popular professional image
            editing software that supports
          </p>
        </div>
      </div>
      <div className="bg-gray-500 gap-4 h-[5vh] font-medium lg:flex items-center justify-start px-[20%] hidden">
        <div className="hover:bg-slate-300 font-mono h-full text-2xl  hover:text-slate-600 text-gray-400 hover:underline">
          <a>MOUNTAIN 1</a>
        </div>
        <div className="hover:bg-gray-300  font-mono h-full text-2xl hover:text-slate-600 text-gray-400 hover:underline">
          <a>MOUNTAIN 2</a>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
