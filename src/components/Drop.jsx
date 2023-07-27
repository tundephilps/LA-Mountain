import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Drop({ options }) {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className=""
        aria-label="toggle menu"
        data-nav-toggler
      >
        <FiMenu class="nav-toggle-btn " />
      </button>

      {showOptions && (
        <div
          class="absolute right-0 mt-[29px] w-[25rem] origin-top-right rounded-md bg-grey-500 font-primary bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              href="#history"
              class="text-gray-700 block px-4 py-2 text-[3rem] hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              History
            </a>
            <a
              href="#team"
              class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              Team
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drop;
