import { categories } from "@/model/category/const";
import { render } from "@/test/render";
import { getRandomMantineColor } from "@/test/utils";
import { faker } from "@faker-js/faker";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CategoryIcon } from "./category-icon";

describe("<CategoryIcon/>", () => {
  it.each(categories)("should be rendered with %s icon", (category) => {
    const color = getRandomMantineColor();
    render(
      <CategoryIcon
        category={category}
        size={faker.number.int()}
        color={color}
      />,
    );

    const categoryIcon = screen.getByLabelText(
      `${category}カテゴリーのアイコン`,
    );

    expect(categoryIcon).toBeInTheDocument();
  });
});
