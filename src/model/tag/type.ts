import { z } from "zod";
import { tags } from "./const";

export const tagSchema = z.enum(tags);

export type Tag = z.infer<typeof tagSchema>;
