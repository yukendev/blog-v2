import type { Tag } from "@/model/tag/type";
import { Badge, Text } from "@mantine/core";
import Link from "next/link";

type Props = {
  tag: Tag;
  color: string;
  className?: string;
};

export const TagLinkBadge = ({ tag, color, className }: Props) => (
  <Badge
    color={color}
    component={Link}
    href={`/tags/${tag}`}
    tt="none"
    className={`cursor-pointer ${className}`}
  >
    <Text fw={700} size="sm">
      {tag}
    </Text>
  </Badge>
);
