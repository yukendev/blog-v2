import { CategoryIcon } from "@/model/category/component/category-icon";
import { categoryColors } from "@/model/category/const";
import type { Category } from "@/model/category/type";
import { Card, Center, type MantineRadius } from "@mantine/core";

type Props = {
  category: Category;
  size: number;
  radius: MantineRadius;
  className?: string;
};

export const CategoryBadge = ({ category, size, radius, className }: Props) => (
  <Card
    radius={radius}
    shadow="sm"
    padding={0}
    w={size}
    h={size}
    bg={categoryColors[category]}
    className={className}
    data-testid="Category Badge"
  >
    <Center w="100%" h="100%">
      <CategoryIcon category={category} size={size * 0.6} color="white" />
    </Center>
  </Card>
);
