"use client";

import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCard = ({
  src,
  description,
  title,
  link,
}: {
  src: string;
  description: string;
  title: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="max-w-[350px] min-h-[400px] rounded-none cursor-pointer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardContent className="p-0 w-full">
              <motion.img
                src={src}
                className="max-h-[250px] w-[350px] object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center text-center">
              <CardTitle className="text-xl sm:text-2xl font-bold">
                {title}
              </CardTitle>
              <p className="text-[13px] text-muted-foreground">{description}</p>
            </CardFooter>
          </motion.div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;
