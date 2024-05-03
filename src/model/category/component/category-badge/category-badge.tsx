import { CategoryIcon } from "@/model/category/component/category-icon/category-icon";
import { categoryColors } from "@/model/category/const";
import type { Category } from "@/model/category/type";
import { Card, Center, type MantineRadius } from "@mantine/core";
import {} from "@tabler/icons-react";

type Props = {
  category: Category;
  size: number;
  radius: MantineRadius;
};

export const CategoryBadge = ({ category, size, radius }: Props) => (
  <Card
    radius={radius}
    shadow="sm"
    padding={0}
    w={size}
    h={size}
    bg={categoryColors[category]}
  >
    <Center w="100%" h="100%">
      <CategoryIcon category={category} size={size * 0.6} color="white" />
    </Center>
  </Card>
);
