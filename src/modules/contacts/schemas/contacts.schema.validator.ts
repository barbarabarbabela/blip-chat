import { z } from "zod";

const id = (data: unknown) =>
  z
    .object({
      id: z.string(),
    })
    .parse(data);

export default {
  id,
};
