import { render } from "@/test/render";
import { getRandomBlogArticle } from "@/test/utils";
import { screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BlogCard } from "./blog-card";

const setup = () => {
  const blog = getRandomBlogArticle();
  render(
    <BlogCard
      title={blog.title}
      date={blog.date}
      tags={blog.tags}
      category={blog.category}
      slug={blog.slug}
    />,
  );

  const blogArticle = screen.getByRole("article");
  const date = within(blogArticle).getByRole("time");
  const titleLink = within(blogArticle).getByRole("link", { name: blog.title });
  const tagListContainer = screen.getByTestId("blogarticle-taglist-container");
  const tags = within(tagListContainer).getAllByRole("link");

  return {
    blog,
    blogArticle,
    date,
    titleLink,
    tags,
  };
};

describe("<BlogCard/>", () => {
  it("should render date within article", () => {
    const { blog, date } = setup();

    expect(date).toHaveAttribute("datetime", blog.date);
    expect(date).toHaveTextContent(blog.date);
  });

  it("should render title link within article", () => {
    const { blog, titleLink } = setup();

    expect(titleLink).toHaveAttribute("href", `/blogs/${blog.slug}`);
    expect(titleLink).toHaveTextContent(blog.title);
  });

  it("should render tag badge list within article", () => {
    const { blog, tags } = setup();

    expect(tags).toHaveLength(blog.tags.length);
  });
});
