import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { type BlogArticle, blogArticleSchema } from "../type";

const contentsDirectory = path.join(process.cwd(), "contents");
const regExpForDir = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
const regExpForMd = /[0-9]{4}-[0-9]{2}-[0-9]{2}.md/;

// ファイルシステムから読み込んでブログを全権取得
export const getAllBlogArticles = (): BlogArticle[] => {
  const contentsDirList = fs
    .readdirSync(contentsDirectory)
    .filter((dirName) => regExpForDir.test(dirName));

  const contentsList = [];

  for (const dir of contentsDirList) {
    const fullPathForContent = path.join(contentsDirectory, dir);
    const fileNames = fs.readdirSync(fullPathForContent);
    const mdFile = fileNames.find((file) => regExpForMd.test(file));
    const fullPathForMd = path.join(fullPathForContent, mdFile ?? "");
    const fileContents = fs.readFileSync(fullPathForMd, "utf8");

    // gray-matterを使用してメタデータ取得
    const matterResult = matter(fileContents);
    const meta = matterResult.data;
    const content = matterResult.content;

    // TODO: parse markdown tp HTML here

    const blogArticle = {
      ...meta,
      body: content,
    };

    const parsedContent = blogArticleSchema.parse(blogArticle);

    contentsList.push(parsedContent);
  }

  return contentsList.reverse();
};
