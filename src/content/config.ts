import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: (props: any) =>
    z.object({
      title: z.string(),
      // to hide blog item in home
      home: z.boolean().optional(),
      description: z.string(),
      image: props.image().refine((img: any) => img.width >= 500, {
        message: "Cover image must be at least 500 pixels wide!",
      }),
      imageAlt: z.string(),
      lastModified: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
