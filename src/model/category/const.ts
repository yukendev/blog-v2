import type { Category } from "./type";

export const categories = ["tech", "book", "note"] as const;
export const categoryColors: { [K in Category]: string } = {
  tech: "p-navy.9",
  book: "p-yellow.5",
  note: "p-green.9",
};

export const categoryColorsCssVars: { [K in Category]: string } = {
  tech: "--mantine-color-p-navy-9",
  book: "--mantine-color-p-yellow-5",
  note: "--mantine-color-p-green-9",
};
