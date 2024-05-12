import { Center, rem } from "@mantine/core";
import { IconBrandX } from "@tabler/icons-react";
import { x_link } from "../../const";

type Props = {
  size: number;
  color: string;
  className?: string;
};

export const XLinkIcon = ({ size, color, className }: Props) => (
  <a href={x_link} target="_blank" rel="noreferrer">
    <Center>
      <IconBrandX
        style={{ width: rem(size), height: rem(size) }}
        color={color}
        className={className}
      />
    </Center>
  </a>
);
