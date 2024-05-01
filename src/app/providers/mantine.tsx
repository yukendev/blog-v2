import {
  MantineProvider as MantineProviderPrimitive,
  createTheme,
} from "@mantine/core";
import type { FC, PropsWithChildren } from "react";

export const theme = createTheme({
  /** Your theme override here */
});

export const MantineProvider: FC<PropsWithChildren> = ({ children }) => (
  <MantineProviderPrimitive theme={theme}>{children}</MantineProviderPrimitive>
);
