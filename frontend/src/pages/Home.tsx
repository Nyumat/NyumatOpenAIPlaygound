import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]"
      initial={{ y: -100, x: -700, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <h1 className="text-4xl text-white font-bold">Home</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => navigate("/user")}
      >
        Go to User Home
      </button>
    </motion.div>
  );
};

export default Home;
