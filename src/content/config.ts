import { z, defineCollection } from "astro:content";

const denCollection = defineCollection({
  type: "content",
  schema: z.object({
    dayName: z.string(),
    date: z.string().date(),
    author: z.string(),
    authorDetails: z.string(),
  }),
});

export const collections = {
  den: denCollection,
};