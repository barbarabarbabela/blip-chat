import { z } from "zod";

const id = (data: unknown) =>
  z
    .object({
      contactId: z.string(),
    })
    .parse(data);

export default {
  id,
};
