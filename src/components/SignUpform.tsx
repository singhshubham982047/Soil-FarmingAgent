"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { SignUpSchema } from "@/schemas/signUpSchema";
import { motion } from "framer-motion";

type SignUpData = z.infer<typeof SignUpSchema>;
type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
};
const SignUpform = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signupHandler = async (data: SignUpData) => {
    const response = await axios.post("/api/auth/signup", data);
    return response.data;
  };

  const { mutate: signupMutation } = useMutation({
    mutationFn: signupHandler,
    onSuccess: (data) => {
      if (data?.success) {
        toast.success("Signup successful!");
        router.push("/sign-in");
      }
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(
        error?.response?.data.response?.data?.message ||
          "An error occurred during signup"
      );
    },
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const result = SignUpSchema.safeParse({ name, email, password });

    if (!result.success) {
      return result.error.errors.forEach((err) => toast.error(err.message));
    }

    signupMutation(result.data);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 gap-4">
          <motion.div variants={itemVariants}>
            <Input
              id="name"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 w-full"
              >
                Signup
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.form>
  );
};

export default SignUpform;
