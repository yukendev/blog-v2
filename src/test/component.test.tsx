/// <reference types="vite/client" />

import { type Meta, type StoryFn, composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";

// 参考: https://zenn.dev/yumemi_inc/articles/run-all-stories-as-test-with-vitest-jsdom

const stories = await Promise.all(
  Object.entries(
    import.meta.glob<{
      default: Meta;
      [name: string]: StoryFn | Meta;
    }>("../**/*.(stories|story).@(js|jsx|mjs|ts|tsx)", {
      eager: true,
    }),
  ).map(async ([path, exports]) => {
    const composedStories = composeStories(exports);
    return {
      path: path.replace(/^\.\.\//, "src/"),
      stories: Object.entries(composedStories).map(([name, Component]) => {
        const runStory = async () => {
          const screen = render(<Component />);

          if (Component.play) {
            await Component.play({ canvasElement: screen.container });
          }
        };

        return {
          name,
          runStory,
        };
      }),
    };
  }),
);

describe.each(stories)("$path", ({ stories }) => {
  test.each(stories)("$name", async ({ runStory }) => {
    runStory();
  });
});
