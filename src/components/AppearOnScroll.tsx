"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0.3,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
