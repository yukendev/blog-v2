import type { Meta, StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import { TagLinkBadge } from "./tag-link-badge";

const meta: Meta<typeof TagLinkBadge> = {
  component: TagLinkBadge,
};

export default meta;
type Story = StoryObj<typeof TagLinkBadge>;

export const Tech: Story = {
  args: {
    tag: "AWS",
    color: "red",
  },
};
