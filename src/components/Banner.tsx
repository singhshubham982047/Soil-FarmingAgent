"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <motion.section
      id="banner"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 2xl:p-32">
        <motion.div
          className="flex flex-col text-center items-center justify-center border h-[300px] gap-4 rounded bg-orange-50 p-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1
            className="text-3xl sm:text-6xl font-bold text-black/35"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Take Your Farm to New Heights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover how Soil Farming Agent can transform your agricultural
            operations and unlock unprecedented growth.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/services"}
              className="p-4 border-2 border-green-700 text-xl font-bold"
            >
              Get Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Banner;
