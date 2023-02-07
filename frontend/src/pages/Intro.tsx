import { motion, useScroll, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Selector = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: -100, x: -700, opacity: 0, scale: 0.5 }}
      // bounce up and down and opacity 0 to 1 and spring
      animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <motion.select
        className="bg-purple-300 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded mt-4 w-[15rem] transition-all duration-300 ease-linear"
        // spin 360 degrees and opacity 0 to 1 and linear
        initial={{ rotate: 0, opacity: 0, scale: 0.5, x: -700, y: -100 }}
        animate={{ rotate: 360, opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, type: "linear" }}
      >
        <option value="1">Mood To Color</option>
      </motion.select>
    </motion.div>
  );
};

const Intro = () => {
  const scrollToRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const isInView = useInView(scrollToRef, { once: false });
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-full pt-24 gap-4">
      <div className="absolute top-16 left-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-300 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded mt-4 w-[7rem] transition-all duration-300 ease-linear"
        >
          Go Back
        </button>
      </div>
      <h1 className="text-4xl text-white font-bold">
        {" "}
        Hello! Welcome to the application.{" "}
      </h1>
      <p className="text-2xl text-white font-bold max-w-[50rem] text-center">
        Now that you're here, you can start using the application.
      </p>

      <h3 className="text-xl text-white font-bold max-w-[50rem] text-center">
        To begin, in the next screen you will see a selctor. The selector will
        look like this:
        <Selector />
      </h3>

      <h3 className="text-xl text-white font-bold max-w-[50rem] text-center">
        You can select the option that you want to use. For example, if you want
        to use the mood to color feature, you can select the option that says
        "Mood To Color". Then, you can click the "Next" button to go to
        corresponding feature.
      </h3>

      <h3 className="text-xl text-white font-bold max-w-[50rem] text-center">
        Let's try clicking the "Next" button now!
      </h3>

      <motion.button
        className="bg-purple-300 hover:bg-purple-300 text-white font-bold py-2 px-4 rounded mt-4 w-[15rem] transition-all duration-300 ease-linear"
        initial={{ y: 0 }}
        animate={{ y: 30, backgroundColor: "#f4baff", opacity: 1 }}
        transition={{
          duration: 2,
          type: "linear",
          repeat: Infinity,
          yoyo: 1,
          repeatType: "reverse",
        }}
        onClick={() =>
          scrollToRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        Next
      </motion.button>

      {/* position on bottom of screen */}
      <div ref={scrollToRef} className="absolute bottom-[-1000px] pb-96">
        &nbsp;
        {isInView && (
          <>
            <motion.h3
              className="text-2xl text-white font-bold max-w-[50rem] text-center "
              initial={{ opacity: 0, y: 100, x: 700 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 2, type: "spring" }}
            >
              You made it to the bottom!
            </motion.h3>

            {/* button layer around the center in a oval shape */}
            <motion.button
              className="bg-purple-300 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded mt-4 w-[15rem] transition-all duration-300 ease-linear"
              onClick={() => navigate("/selector")}
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, type: "bounce" }}
            >
              Next
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

export default Intro;
