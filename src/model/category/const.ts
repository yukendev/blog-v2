import type { Category } from "./type";

export const categories = ["tech", "book", "note"] as const;
export const categoryColors: { [K in Category]: string } = {
  tech: "green",
  book: "red",
  note: "blue",
};
