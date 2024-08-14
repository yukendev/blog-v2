import type { Meta, StoryObj } from "@storybook/react";
import { ToggleMenu } from "./toggle-menu";

const meta: Meta<typeof ToggleMenu> = {
  component: ToggleMenu,
};

export default meta;
type Story = StoryObj<typeof ToggleMenu>;

export const Default: Story = {};
