import z from "zod";

const envSchema = z.object({
  IDENTIFIER: z.string(),
  ACCESS_KEY: z.string(),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
