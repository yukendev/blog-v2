"use client";
import { Header } from "@/common/header";
import { BlogCard } from "@/model/blog-article/components/blog-card/blog-card";
import type { BlogArticle } from "@/model/blog-article/type";
import { CategoryLinkWithTitle } from "@/model/category/component/category-link-with-title";
import { Container, Grid, Group } from "@mantine/core";

const blogList: BlogArticle[] = [
  {
    title: "Google Calendarから予定を取得してLINEで自動でリマインドする",
    date: "2024-01-11",
    slug: "tips-google-calendar-line-reminder",
    category: "tech",
    tags: ["JavaScript", "Node.js"],
    body: "毎週月曜日の朝に、今週の予定をGoogle Calendarから取得して、下の画像のようにLINEにメッセージを送信したい。",
    description:
      "毎週月曜日の朝に、今週の予定をGoogle Calendarから取得して、下の画像のようにLINEにメッセージを送信したい。",
  },
  {
    title: "『Clean Architecture』を読んだ",
    date: "2022-10-30",
    slug: "book-clean-architecture",
    category: "book",
    tags: ["技術書"],
    body: "この本の伝えたいことの概要は理解したような気になってますが、詳細を説明しろと言われると黙り込んでしまう程度の理解です。",
    description:
      "この本の伝えたいことの概要は理解したような気になってますが、詳細を説明しろと言われると黙り込んでしまう程度の理解です。",
  },
  {
    title: "大阪大学を1年間休学して東京でエンジニアインターンをしてきた",
    date: "2023-03-26",
    slug: "note-intern-in-tokyo",
    category: "note",
    tags: ["インターン"],
    body: "どうもこんにちは、てずかです。この記事では、1 年間休学して遠く離れた土地でエンジニアの修行を積んできた学生の経験を雑に紹介します。",
    description:
      "どうもこんにちは、てずかです。この記事では、1 年間休学して遠く離れた土地でエンジニアの修行を積んできた学生の経験を雑に紹介します。",
  },
  {
    title: "Google Calendarから予定を取得してLINEで自動でリマインドする",
    date: "2024-01-11",
    slug: "tips-google-calendar-line-reminder",
    category: "tech",
    tags: ["JavaScript", "Node.js"],
    body: "毎週月曜日の朝に、今週の予定をGoogle Calendarから取得して、下の画像のようにLINEにメッセージを送信したい。",
    description:
      "毎週月曜日の朝に、今週の予定をGoogle Calendarから取得して、下の画像のようにLINEにメッセージを送信したい。",
  },
];

export default function ArticleListPage() {
  return (
    <>
      <Header />
      <Container>
        <Group my={50}>
          <CategoryLinkWithTitle category="tech" />
          <CategoryLinkWithTitle category="book" />
          <CategoryLinkWithTitle category="note" />
        </Group>
        <Grid>
          {blogList.map((blog) => (
            <Grid.Col key={blog.slug} span={{ base: 12, xs: 6 }}>
              <BlogCard
                title={blog.title}
                category={blog.category}
                date={blog.date}
                tags={blog.tags}
                slug={blog.slug}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
