import { Center, rem } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { github_link } from "../../const";

type Props = {
  size: number;
  color: string;
  className?: string;
};

export const GithubLinkIcon = ({ size, color, className }: Props) => (
  <a href={github_link} target="_blank" rel="noreferrer">
    <Center>
      <IconBrandGithub
        style={{ width: rem(size), height: rem(size) }}
        color={color}
        className={className}
      />
    </Center>
  </a>
);
