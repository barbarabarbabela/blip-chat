import { z } from "zod";

const apiKey = (data: unknown) =>
  z
    .object({
      apiKey: z.string(),
    })
    .parse(data);

export default {
  apiKey,
};
