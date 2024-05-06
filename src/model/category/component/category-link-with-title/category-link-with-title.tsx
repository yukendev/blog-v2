import { bm_hannna_font } from "@/common/fonts";
import { CategoryBadge } from "@/model/category/component/category-badge";
import { categoryColors } from "@/model/category/const";
import type { Category } from "@/model/category/type";
import { Stack, Text } from "@mantine/core";
import Link from "next/link";

type Props = {
  category: Category;
};

export const CategoryLinkWithTitle = ({ category }: Props) => (
  <Stack gap={2} align="center">
    <Link href={`/categories/${category}`} className="no-underline">
      <CategoryBadge
        category={category}
        size={60}
        radius={30}
        className="cursor-pointer hover:-translate-y-1 hover:scale-110 duration-100"
      />
      <Text
        ta="center"
        className={bm_hannna_font.className}
        c={categoryColors[category]}
        fw={700}
      >
        {category}
      </Text>
    </Link>
  </Stack>
);
