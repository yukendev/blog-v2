import type { Meta, StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import { BlogCard } from "./blog-card";

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    title: "【Swift】『static』キーワードの意味・便利な使い方",
    date: "2021-07-08",
    tags: ["Swift", "Next.js"],
  },
};
