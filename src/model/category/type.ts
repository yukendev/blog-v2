import { z } from "zod";
import { categories } from "./const";

export const categorySchema = z.enum(categories);

export type Category = z.infer<typeof categorySchema>;
