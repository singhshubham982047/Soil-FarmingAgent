"use client";

import GradualSpacing from "./magicui/gradual-spacing";
import TypingAnimation from "./magicui/typing-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex mx-auto items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-10  p-8  bg-hero bg-center bg-cover rounded-md shadow-md">
        <div className="flex flex-col text-center gap-4 md:gap-8 font-bold ">
          <TypingAnimation
            className="text-3xl sm:text-6xl bg-gradient-to-r from-[#c51010ef] to-gray-400 text-transparent bg-clip-text"
            text="Revolutionize Your Farm"
          />
          <TypingAnimation
            className="text-3xl sm:text-6xl font-bold text-black/70 dark:text-white"
            text="with"
          />

          <GradualSpacing
            className="font-display text-center text-3xl font-bold tracking-[-0.1em]  text-black dark:text-white sm:text-5xl md:text-7xl md:leading-[5rem]"
            text="Soil-Farming-Agent"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 mt-8">
          <p className="text-xl text-center text-green-800 font-semibold">
            Unlock the full potential of your farm with our cutting-edge
            agricultural solutions. Boost productivity, optimize resources, and
            achieve sustainable growth.
          </p>
          <Link
            href={"/services"}
            className="p-4 border-2 text-white/75  border-green-700 text-xl  font-bold "
          >
            Get Services
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Hero;
