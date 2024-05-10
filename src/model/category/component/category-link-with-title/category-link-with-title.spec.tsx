import { categories } from "@/model/category/const";
import { render } from "@/test/render";
import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CategoryLinkWithTitle } from "./category-link-with-title";

describe("<CategoryLinkWithTitle/>", () => {
  afterEach(() => cleanup());
  it.each(categories)(
    "should be rendered with right href and icon",
    (category) => {
      render(<CategoryLinkWithTitle category={category} />);

      const categoryLinkWithTitle = screen.getByRole("link");
      const categoryIcon = screen.getByLabelText(
        `${category}カテゴリーのアイコン`,
      );

      expect(categoryLinkWithTitle).toHaveAttribute(
        "href",
        `/categories/${category}`,
      );
      expect(categoryIcon).toBeInTheDocument();
    },
  );
});
