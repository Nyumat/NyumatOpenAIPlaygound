import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap px-4 w-full h-16 bg-gradient-to-r from-purple-700 via-purple-400 to-violet-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Miscellaneous Open AI Chat Room
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
