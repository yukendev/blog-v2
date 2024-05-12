import type { BlogArticle } from "@/model/blog-article/type";
import { categories } from "@/model/category/const";
import { tags } from "@/model/tag/const";
import { faker } from "@faker-js/faker";
import { DEFAULT_THEME } from "@mantine/core";

// タグをランダムに1つ取得
export const getRandomTag = () => {
  return faker.helpers.arrayElement(tags);
};

// カテゴリーをランダムに1つ取得
export const getRandomCategory = () => {
  return faker.helpers.arrayElement(categories);
};

// タグをランダムに複数取得
export const getRandomTags = (min: number, max: number) => {
  return faker.helpers.arrayElements(tags, { min, max });
};

// Mantine UIの色をデフォルトのテーマから一つ取得
export const getRandomMantineColor = () => {
  const colorKeys = Object.keys(DEFAULT_THEME.colors);
  return faker.helpers.arrayElement(colorKeys);
};

// YYYY-MM-DDのフォーマットでランダムな日付をStringで返す
export const getRandomDateString = () => {
  const date = faker.date.anytime();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// ランダムなブログを作成
export const getRandomBlogArticle = (): BlogArticle => {
  return {
    title: faker.string.alphanumeric({
      length: { min: 1, max: faker.number.int({ min: 2, max: 50 }) },
    }),
    date: getRandomDateString(),
    slug: faker.string.alphanumeric({
      length: { min: 1, max: faker.number.int({ min: 2, max: 50 }) },
    }),
    category: getRandomCategory(),
    tags: getRandomTags(1, 5),
    body: faker.lorem.sentences({ min: 1, max: 100 }),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
  };
};
