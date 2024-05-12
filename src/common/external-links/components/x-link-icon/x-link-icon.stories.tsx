import type { Meta, StoryObj } from "@storybook/react";
import { XLinkIcon } from "./x-link-icon";

const meta: Meta<typeof XLinkIcon> = {
  component: XLinkIcon,
};

export default meta;
type Story = StoryObj<typeof XLinkIcon>;

export const Default: Story = {
  args: {
    size: 100,
    color: "black",
  },
};
