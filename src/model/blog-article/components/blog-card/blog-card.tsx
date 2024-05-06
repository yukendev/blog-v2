import type { BlogArticle } from "@/model/blog-article/type";
import { CategoryBadge } from "@/model/category/component/category-badge/category-badge";
import { categoryColors, categoryColorsCssVars } from "@/model/category/const";
import { Badge, Card, Group, Space, Text } from "@mantine/core";
import Link from "next/link";

type Props = Pick<BlogArticle, "title" | "date" | "tags" | "category">;

export const BlogCard = ({ title, date, tags, category }: Props) => (
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
  >
    <Group>
      <CategoryBadge category={category} size={40} radius="md" />
      <Text size="sm">{date}</Text>
    </Group>
    <Space h="sm" />
    <Link href="" target="_blank" className="no-underline">
      <Text fw={700} size="lg" c="black">
        {title}
      </Text>
    </Link>
    <Space h="md" />
    <Group>
      {tags.map((tag) => (
        <Badge
          key={tag}
          color={categoryColors[category]}
          component={Link}
          href="/hoge"
          target="_blank"
          tt="none"
        >
          <Text fw={700} size="sm">
            {tag}
          </Text>
        </Badge>
      ))}
    </Group>
  </Card>
);
