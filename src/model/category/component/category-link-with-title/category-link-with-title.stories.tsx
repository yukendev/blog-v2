import type { Meta, StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import { CategoryLinkWithTitle } from "./category-link-with-title";

const meta: Meta<typeof CategoryLinkWithTitle> = {
  component: CategoryLinkWithTitle,
};

export default meta;
type Story = StoryObj<typeof CategoryLinkWithTitle>;

export const Tech: Story = {
  args: {
    category: "tech",
  },
};

export const Book: Story = {
  args: {
    category: "book",
  },
};

export const Note: Story = {
  args: {
    category: "note",
  },
};
