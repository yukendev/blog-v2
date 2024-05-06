import type { Category } from "@/model/category/type";
import { rem } from "@mantine/core";
import { IconBook, IconDevicesPc, IconPencil } from "@tabler/icons-react";

type Props = {
  category: Category;
  size: number;
  color: string;
};

export const CategoryIcon = ({ category, size, color }: Props) => {
  if (category === "tech")
    return (
      <IconDevicesPc
        style={{ width: rem(size), height: rem(size) }}
        color={color}
        aria-label="techカテゴリーのアイコン"
      />
    );
  if (category === "book")
    return (
      <IconBook
        style={{ width: rem(size), height: rem(size) }}
        color={color}
        aria-label="bookカテゴリーのアイコン"
      />
    );
  if (category === "note")
    return (
      <IconPencil
        style={{ width: rem(size), height: rem(size) }}
        color={color}
        aria-label="noteカテゴリーのアイコン"
      />
    );
};
