import { categories } from "@/model/category/const";
import { render } from "@/test/render";
import { faker } from "@faker-js/faker";
import { cleanup, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CategoryBadge } from "./category-badge";

describe("<CategoryBadge/>", () => {
  afterEach(() => cleanup());

  it.each(categories)("should be rendered with %s color", (category) => {
    render(
      <CategoryBadge
        category={category}
        size={faker.number.int()}
        radius={faker.number.int()}
      />,
    );

    const categoryBadge = screen.getByTestId("Category Badge");

    expect(categoryBadge).toBeInTheDocument();
  });
});
