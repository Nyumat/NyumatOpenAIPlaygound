import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const word = "Miscellaneous Open AI Playground";

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap px-4 w-full h-16 bg-gradient-to-r from-purple-700 via-purple-400 to-violet-500">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <motion.span
            className="font-semibold text-xl tracking-tight"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {word.split("").map((char, index) => {
              return (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
