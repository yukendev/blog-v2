import type { Meta, StoryObj } from "@storybook/react";
import { GithubLinkIcon } from "./github-link-icon";

const meta: Meta<typeof GithubLinkIcon> = {
  component: GithubLinkIcon,
};

export default meta;
type Story = StoryObj<typeof GithubLinkIcon>;

export const Default: Story = {
  args: {
    size: 100,
    color: "black",
  },
};
