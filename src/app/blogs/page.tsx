import { Header } from "@/common/header";
import { BlogCardList } from "@/model/blog-article/components/blog-card-list";
import { getAllBlogArticles } from "@/model/blog-article/lib/getAllBlogArticles";
import { CategoryLinkWithTitle } from "@/model/category/component/category-link-with-title";
import { Container, Group } from "@mantine/core";

export default async function ArticleListPage() {
  const blogArticleList = await getAllBlogArticles();
  return (
    <>
      <Header />
      <Container>
        <Group my={50}>
          <CategoryLinkWithTitle category="tech" />
          <CategoryLinkWithTitle category="book" />
          <CategoryLinkWithTitle category="note" />
        </Group>
        <BlogCardList blogList={blogArticleList} />
      </Container>
    </>
  );
}
