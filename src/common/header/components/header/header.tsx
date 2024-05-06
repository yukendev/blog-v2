import { GithubLinkIcon } from "@/common/external-links/components/github-link-icon";
import { XLinkIcon } from "@/common/external-links/components/x-link-icon";
import { bm_hannna_font } from "@/common/fonts";
import { ToggleMenu } from "@/common/header/components/toggle-menu";
import { Box, Center, Container, Group, Text, rem } from "@mantine/core";
import { IconHome, IconUserQuestion } from "@tabler/icons-react";
import Link from "next/link";

const ICON_SIZE = 30;
const ICON_COLOR = "black";

export const Header = () => {
  return (
    <header>
      <Container py={20}>
        <Group justify="space-between">
          <Text
            fw={900}
            c="p-orange.4"
            className={bm_hannna_font.className}
            size={rem(36)}
          >
            yuken.dev
          </Text>

          {/* ページ幅がxs以上の場合 */}
          <Group visibleFrom="xs">
            {/* トップページの内部リンク */}
            <Link href="/">
              <Center>
                <IconHome
                  style={{ width: rem(ICON_SIZE), height: rem(ICON_SIZE) }}
                  color={ICON_COLOR}
                />
              </Center>
            </Link>

            {/* 自己紹介ページの内部リンク */}
            <Link href="/me">
              <Center>
                <IconUserQuestion
                  style={{ width: rem(ICON_SIZE), height: rem(ICON_SIZE) }}
                  color={ICON_COLOR}
                />
              </Center>
            </Link>

            {/* Xの外部リンク */}
            <XLinkIcon size={ICON_SIZE} color={ICON_COLOR} />

            {/* GitHubの外部リンク */}
            <GithubLinkIcon size={ICON_SIZE} color={ICON_COLOR} />
          </Group>

          {/* ページ幅がxs未満の場合 */}
          <Box hiddenFrom="xs">
            <ToggleMenu />
          </Box>
        </Group>
      </Container>
    </header>
  );
};
