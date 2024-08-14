import {
  MantineProvider as MantineProviderPrimitive,
  createTheme,
} from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

export const theme = createTheme({
  /** Your theme override here */
  colors: {
    "p-orange": [
      "#ffede5",
      "#ffd9d0",
      "#fab3a1",
      "#f58a6e",
      "#f16844",
      "#ef5128",
      "#ef451a",
      "#d4360d",
      "#be2e08",
      "#a62303",
    ],
    "p-pale-green": [
      "#f7f9e9",
      "#ecefdd",
      "#d7debc",
      "#c1cc98",
      "#aebd7a",
      "#a3b367",
      "#9cae5b",
      "#87984b",
      "#77873f",
      "#657531",
    ],
    "p-navy": [
      "#eef5fb",
      "#dce6f1",
      "#b5cbe4",
      "#8aafd9",
      "#6896cf",
      "#5388ca",
      "#4781c8",
      "#386eb2",
      "#30629f",
      "#20548d",
    ],
    "p-yellow": [
      "#fff9e2",
      "#fcf2ce",
      "#f7e4a2",
      "#f0d571",
      "#ecc849",
      "#e9c02e",
      "#e8bc1d",
      "#cda50e",
      "#b79301",
      "#9e7e00",
    ],
    "p-green": [
      "#eefcf3",
      "#dcf7e5",
      "#b3edc7",
      "#87e5a7",
      "#64dd8c",
      "#4fd97b",
      "#44d772",
      "#36be60",
      "#2ca954",
      "#1b9246",
    ],
  },
});

export const MantineProvider: FC<PropsWithChildren> = ({ children }) => (
  <MantineProviderPrimitive theme={theme}>{children}</MantineProviderPrimitive>
);
