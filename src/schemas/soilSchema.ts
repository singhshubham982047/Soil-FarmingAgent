import { z } from "zod";

export const SoilSchema = z.object({
  soilType: z.string(),
  crops: z.string(),
  description: z.string(),
  characteristics: z.string(),
  chemicalProperties: z.string(),
  locations: z.string(),
});
