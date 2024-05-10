import { github_link } from "@/common/external-links/const";
import { render } from "@/test/render";
import { getRandomMantineColor } from "@/test/utils";
import { faker } from "@faker-js/faker";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GithubLinkIcon } from "./github-link-icon";

describe("<GithubLinkIcon/>", () => {
  it("should be rendered with github link", () => {
    const color = getRandomMantineColor();
    render(<GithubLinkIcon size={faker.number.int()} color={color} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", github_link);
  });
});
