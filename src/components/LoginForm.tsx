"use client";
import { loginHandler } from "@/actions/login";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const LoginForm = () => {
  const router = useRouter();
  return (
    <form
      className="flex flex-col gap-4"
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
      <Input id="name" name="email" placeholder="Email" required />
      <Input
        id="password"
        name="password"
        type="password"
        required
        placeholder="Password"
      />
      <Button type="submit" className="bg-green-500 hover:bg-green-600">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
