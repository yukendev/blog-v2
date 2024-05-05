import { rem } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { github_link } from "../../const";

type Props = {
  size: number;
  color: string;
};

export const GithubLinkIcon = ({ size, color }: Props) => (
  <a href={github_link} target="_blank" rel="noreferrer">
    <IconBrandGithub
      style={{ width: rem(size), height: rem(size) }}
      color={color}
    />
  </a>
);
