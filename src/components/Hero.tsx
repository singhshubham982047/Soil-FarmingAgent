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
        className="mx-10 p-8 bg-center  rounded-md shadow-md bg-hero bg-no-repeat bg-cover"
      >
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
            className="font-display text-center text-3xl font-bold text-[#e0c31c] dark:text-white sm:text-5xl md:text-6xl md:leading-[5rem]"
          >
            Revolutionize Your Farm
          </motion.h1>
          <motion.h1
            initial={{ letterSpacing: "-0.1em", opacity: 0 }}
            animate={{ letterSpacing: "normal", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-display text-center text-3xl font-bold text-gold dark:text-white sm:text-5xl md:text-5xl md:leading-[5rem]"
          >
            with
          </motion.h1>
          <motion.h1
            initial={{ letterSpacing: "-0.1em", opacity: 0 }}
            animate={{ letterSpacing: "normal", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-display text-center text-3xl font-bold text-green-900 dark:text-white sm:text-5xl md:text-6xl md:leading-[5rem]"
          >
            Soil-Farming-Agent
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col justify-center items-center gap-4 mt-8"
        >
          <motion.p
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-2/3 text-xl text-center text-green-800 dark:text-white font-semibold"
          >
            Unlock the full potential of your farm with our cutting-edge
            agricultural solutions. Boost productivity, optimize resources, and
            achieve sustainable growth.
          </motion.p>
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
      </motion.div>
    </motion.div>
  );
};

export default Hero;
