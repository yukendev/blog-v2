import type { Meta, StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import { BlogCard } from "./blog-card";

const meta: Meta<typeof BlogCard> = {
  component: BlogCard,
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Tech: Story = {
  args: {
    title: "【Swift】『static』キーワードの意味・便利な使い方",
    date: "2021-07-08",
    tags: ["Swift", "Next.js"],
    category: "tech",
  },
};

export const Book: Story = {
  args: {
    title: "『Clean Architecture』を読んだ",
    date: "2022-10-30",
    tags: ["技術書"],
    category: "book",
  },
};

export const Note: Story = {
  args: {
    title: "ブログを新しく作り直した",
    date: "2022-07-10",
    tags: ["ブログ", "Next.js"],
    category: "note",
  },
};
