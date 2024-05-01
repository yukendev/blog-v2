import type { Preview } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports:
import React from "react";
import { Providers } from "../src/app/providers";

// 1. mantine ui stylesheet
import "@mantine/core/styles.css";

// 2. tailwindcss stylesshieet
import "@/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
