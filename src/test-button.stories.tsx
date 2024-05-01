import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { TestButton } from "./test-button";

const meta: Meta<typeof TestButton> = {
  component: TestButton,
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Default: Story = {
  args: {
    title: "hoge",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button"));

    await expect(args.onClick).toHaveBeenCalled();
  },
};
