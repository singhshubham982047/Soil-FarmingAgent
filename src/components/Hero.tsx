"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex mx-auto items-center justify-center min-h-screen bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-6 p-6 bg-center rounded-md shadow-md relative overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/farmer.svg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/dynamic-farmer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col text-center gap-4 md:gap-6 font-bold"
          >
            <motion.h1
              initial={{ letterSpacing: "-0.1em", opacity: 0, y: -50 }}
              animate={{ letterSpacing: "normal", opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-display text-center text-3xl font-bold text-[#e0c31c]  sm:text-5xl md:text-6xl md:leading-[5rem]"
            >
              Revolutionize Your Farm
            </motion.h1>
            <motion.h1
              initial={{ letterSpacing: "-0.1em", opacity: 0 }}
              animate={{ letterSpacing: "normal", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-display text-center text-3xl font-bold text-[#269a3b]  sm:text-5xl md:text-5xl md:leading-[5rem]"
            >
              with
            </motion.h1>
            <motion.h1
              initial={{ letterSpacing: "-0.1em", opacity: 0 }}
              animate={{ letterSpacing: "normal", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-display text-center text-3xl font-bold text-[#269a3b]  sm:text-5xl md:text-6xl md:leading-[5rem]"
            >
              Soil-Farming-Agent
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col justify-center items-center gap-4 mt-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link
                href={"/services"}
                className="p-4 border-2 text-green-900 bg-white/70 hover:bg-white/90 transition-colors duration-300 border-green-700 text-xl font-bold"
              >
                Get Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
