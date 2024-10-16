import { z } from "zod";

export const createApiKeySchema = z.object({
  identifier: z.string(),
  accessKey: z.string(),
});

export type CreateApiKeySchema = z.infer<typeof createApiKeySchema>;
