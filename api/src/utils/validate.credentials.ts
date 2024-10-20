import { z } from "zod";

export const validateCredentials = (identifier: unknown) =>
  z.string().min(3).max(50).parse(identifier);
