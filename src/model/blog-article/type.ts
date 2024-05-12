import { categorySchema } from "@/model/category/type";
import { tagSchema } from "@/model/tag/type";
import { z } from "zod";

export const blogArticleSchema = z.object({
  title: z.string(),
  date: z.string(),
  slug: z.string(),
  category: categorySchema,
  tags: z.array(tagSchema),
  body: z.string(),
  description: z.string(),
});

export type BlogArticle = z.infer<typeof blogArticleSchema>;
