import { render } from "@/test/render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ToggleMenu } from "./toggle-menu";

describe("<ToggleMenu/>", () => {
  it("should be changed attribute with dropdown button", async () => {
    const user = userEvent.setup();
    render(<ToggleMenu />);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
