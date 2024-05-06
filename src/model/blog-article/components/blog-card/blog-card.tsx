import type { BlogArticle } from "@/model/blog-article/type";
import { CategoryBadge } from "@/model/category/component/category-badge/category-badge";
import { categoryColors, categoryColorsCssVars } from "@/model/category/const";
import { TagLinkBadge } from "@/model/tag/components/tag-link-badge";
import { Card, Group, Space, Text } from "@mantine/core";
import Link from "next/link";

type Props = Pick<BlogArticle, "title" | "date" | "tags" | "category" | "slug">;

export const BlogCard = ({ title, date, tags, category, slug }: Props) => {
  const colorVariants = {
    tech: "decoration-category-tech",
    book: "decoration-category-book",
    note: "decoration-category-note",
  };
  return (
    <Card
      shadow="sm"
      withBorder
      radius="md"
      padding="lg"
      component="article"
      styles={{
        root: {
          borderLeft: `medium solid var(${categoryColorsCssVars[category]})`,
        },
      }}
      h="100%"
      className="hover:-translate-y-0.5 duration-100"
    >
      <Group>
        <CategoryBadge category={category} size={40} radius="md" />
        <Text size="sm">{date}</Text>
      </Group>
      <Space h="sm" />
      <Link
        href={`/blogs/${slug}`}
        target="_blank"
        className={`no-underline hover:underline ${colorVariants[category]} decoration-dashed decoration-4`}
      >
        <Text fw={700} size="lg" c="black">
          {title}
        </Text>
      </Link>
      <Space h="md" />
      <Group>
        {tags.map((tag) => (
          <TagLinkBadge
            tag={tag}
            color={categoryColors[category]}
            key={tag}
            className="hover:scale-110 duration-100"
          />
        ))}
      </Group>
    </Card>
  );
};
