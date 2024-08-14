import type { Meta, StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import { CategoryBadge } from "./category-badge";

const meta: Meta<typeof CategoryBadge> = {
  component: CategoryBadge,
};

export default meta;
type Story = StoryObj<typeof CategoryBadge>;

export const Tech: Story = {
  args: {
    category: "tech",
    size: 80,
    radius: "lg",
  },
};

export const Book: Story = {
  args: {
    category: "book",
    size: 80,
    radius: "lg",
  },
};

export const Note: Story = {
  args: {
    category: "note",
    size: 80,
    radius: "lg",
  },
};
