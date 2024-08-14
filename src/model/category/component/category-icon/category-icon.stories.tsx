import type { Meta, StoryObj } from "@storybook/react";
import { CategoryIcon } from "./category-icon";

const meta: Meta<typeof CategoryIcon> = {
  component: CategoryIcon,
};

export default meta;
type Story = StoryObj<typeof CategoryIcon>;

export const Tech: Story = {
  args: {
    category: "tech",
    size: 50,
    color: "black",
  },
};

export const Book: Story = {
  args: {
    category: "book",
    size: 50,
    color: "black",
  },
};

export const Note: Story = {
  args: {
    category: "note",
    size: 50,
    color: "black",
  },
};
