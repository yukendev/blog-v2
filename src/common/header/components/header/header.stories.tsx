import type { Meta, StoryObj } from "@storybook/react";
import {} from "@storybook/test";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
