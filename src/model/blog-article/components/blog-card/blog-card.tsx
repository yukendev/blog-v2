import type { BlogArticle } from "@/model/blog-article/type";
import { Badge, Card, Group, Space, Text } from "@mantine/core";
import Link from "next/link";

type Props = Pick<BlogArticle, "title" | "date" | "tags" | "category">;

export const BlogCard = ({ title, date, tags }: Props) => (
  <Card
    shadow="sm"
    w="100%"
    withBorder
    radius="md"
    padding="lg"
    component={Link}
    href=""
    target="_blank"
  >
    <Text size="sm">{date}</Text>
    <Space h="sm" />
    <Text fw={700} size="lg">
      {title}
    </Text>
    <Space h="md" />
    <Group>
      {tags.map((tag) => (
        <Badge
          key={tag}
          color="cyan"
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
