import type { Category } from "@/model/category/type";
import type { Tag } from "@/model/tag/type";

export type BlogArticle = {
  title: string;
  date: string;
  slug: string;
  category: Category;
  tags: Tag[];
  body: string;
  description: string;
};
