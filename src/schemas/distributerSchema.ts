import { z } from "zod";

export const DistributerSchema = z.object({
  name: z.string().min(2, "Name must be more than two characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Invalid Phone Number"),
  address: z.string(),
});
