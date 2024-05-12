"use client";
import { BlogCard } from "@/model/blog-article/components/blog-card";
import type { BlogArticle } from "@/model/blog-article/type";
import { Grid } from "@mantine/core";

type Props = {
  blogList: BlogArticle[];
};

export const BlogCardList = ({ blogList }: Props) => (
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
);
