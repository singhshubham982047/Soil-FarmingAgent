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

  return (
    <form onSubmit={submitHandler}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5 gap-4">
          <Input
            id="name"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            Signup
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpform;
