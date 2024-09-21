"use client";
import { motion } from "framer-motion";

const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded shadow-lg"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default AnimatedImage;
