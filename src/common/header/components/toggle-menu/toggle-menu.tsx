import { github_link, x_link } from "@/common/external-links/const";
import { Button, Menu, rem } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandX,
  IconCaretDown,
  IconHome,
  IconUserQuestion,
} from "@tabler/icons-react";
import Link from "next/link";

const ICON_SIZE = 14;
const ICON_COLOR = "black";

export const ToggleMenu = () => (
  <Menu>
    <Menu.Target>
      <Button size="compact-sm" bg="black">
        <IconCaretDown />
      </Button>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Item
        component={Link}
        href="/"
        leftSection={
          <IconHome
            style={{ width: rem(ICON_SIZE), height: rem(ICON_SIZE) }}
            color={ICON_COLOR}
          />
        }
      >
        Home
      </Menu.Item>
      <Menu.Item
        component={Link}
        href="/me"
        leftSection={
          <IconUserQuestion
            style={{ width: rem(ICON_SIZE), height: rem(ICON_SIZE) }}
            color={ICON_COLOR}
          />
        }
      >
        About Me
      </Menu.Item>
      <Menu.Item
        component="a"
        href={x_link}
        target="_blank"
        rel="noreferrer"
        leftSection={
          <IconBrandX
            style={{ width: rem(ICON_SIZE), height: rem(ICON_SIZE) }}
            color={ICON_COLOR}
          />
        }
      >
        X
      </Menu.Item>
      <Menu.Item
        component="a"
        href={github_link}
        target="_blank"
        rel="noreferrer"
        leftSection={
          <IconBrandGithub
            style={{ width: rem(ICON_SIZE), height: rem(ICON_SIZE) }}
            color={ICON_COLOR}
          />
        }
      >
        GitHub
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
);
