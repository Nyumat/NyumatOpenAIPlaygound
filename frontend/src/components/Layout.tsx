import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col items-center justify-center h-150vh">
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
