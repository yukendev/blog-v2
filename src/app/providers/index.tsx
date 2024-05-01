import type { FC, PropsWithChildren } from "react";
import { MantineProvider } from "./mantine";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <MantineProvider>{children}</MantineProvider>
);
