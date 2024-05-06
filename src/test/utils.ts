import { tags } from "@/model/tag/const";
import { faker } from "@faker-js/faker";
import { DEFAULT_THEME } from "@mantine/core";

// タグをランダムに1つ取得
export const getRandomTag = () => {
  return faker.helpers.arrayElement(tags);
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
