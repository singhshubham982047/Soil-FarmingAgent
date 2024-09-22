"use client";
import { loginHandler } from "@/actions/login";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const LoginForm = () => {
  const router = useRouter();
  return (
    <motion.form
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      action={async (formData) => {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password)
          return toast.error("Please Provide all fields");

        const toastId = toast.loading("logging in...");
        const error = await loginHandler(email, password);

        if (!error) {
          toast.success("login successful", { id: toastId });
          router.refresh();
        } else toast.error(`${error}`, { id: toastId });
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Input id="name" name="email" placeholder="Email" required />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-600 w-full"
        >
          Login
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default LoginForm;
