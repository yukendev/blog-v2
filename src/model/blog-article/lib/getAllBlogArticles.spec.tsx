import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getAllBlogArticles } from "./getAllBlogArticles";

const contentsDirectory = path.join(process.cwd(), "contents");
const regExpForDir = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

describe("getAllBlogArticles", () => {
  it("should return an array with the same number of elements as the number of directories", () => {
    const blogList = getAllBlogArticles();
    const contentsDirList = fs
      .readdirSync(contentsDirectory)
      .filter((dirName) => regExpForDir.test(dirName));

    expect(blogList).toHaveLength(contentsDirList.length);
  });
});
