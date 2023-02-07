import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
      <h1 className="text-4xl text-white font-bold">Home</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => navigate("/user")}
      >
        Go to User Home
      </button>
    </div>
  );
};

export default Home;
