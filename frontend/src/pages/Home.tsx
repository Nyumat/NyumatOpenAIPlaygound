import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 700]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-6"
        initial={{ y: -100, x: -700, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <h1 className="text-4xl text-white font-bold">
          Welcome To Nyumat's OpenAI Playground!
        </h1>
        <motion.p
          className="text-2xl text-white font-bold max-w-[50rem] text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "linear", delay: 2 }}
        >
          This is a playground for users to experiment with OpenAI's GPT-3 API
          and its many different features.
        </motion.p>

        <motion.button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          // spin 360 degrees and opacity 0 to 1 and linear
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 2, type: "linear", delay: 4 }}
          onClick={() => navigate("/login")}
        >
          Log In Now!
        </motion.button>

        <motion.p
          className="text-2xl text-white font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "linear", delay: 6 }}
        >
          Don't have an account?
        </motion.p>

        <motion.button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          // spin 360 degrees and opacity 0 to 1 and linear
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 1080, opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ duration: 2, type: "linear", delay: 8 }}
          onClick={() => navigate("/intro")}
        >
          Sign Up!
        </motion.button>
      </motion.div>
    </>
  );
};

// <button
//   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//   onClick={() => navigate("/intro")}
// >
//   Go to User Home
// </button>

export default Home;
