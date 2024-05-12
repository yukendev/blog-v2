import { render } from "@/test/render";
import { getRandomMantineColor, getRandomTag } from "@/test/utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TagLinkBadge } from "./tag-link-badge";

describe("<TagLinkBadge/>", () => {
  it("should be rendered with right href", () => {
    const tag = getRandomTag();
    const color = getRandomMantineColor();
    render(<TagLinkBadge tag={tag} color={color} />);

    const tagLinkBadge = screen.getByRole("link", { name: tag });

    expect(tagLinkBadge).toHaveAttribute("href", `/tags/${tag}`);
  });
});
