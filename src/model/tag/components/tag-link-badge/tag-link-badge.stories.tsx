import { getRandomMantineColor, getRandomTag } from "@/test/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { TagLinkBadge } from "./tag-link-badge";

const meta: Meta<typeof TagLinkBadge> = {
  component: TagLinkBadge,
};

export default meta;
type Story = StoryObj<typeof TagLinkBadge>;

export const Default: Story = {
  args: {
    tag: getRandomTag(),
    color: getRandomMantineColor(),
  },
};
