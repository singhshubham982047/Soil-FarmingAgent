import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, "Name is not less than two charaters"),
  email: z.string().email({ message: "invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 character" }),
});
