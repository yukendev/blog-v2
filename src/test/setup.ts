import { setProjectAnnotations } from "@storybook/react";

import "@testing-library/jest-dom/vitest";

import preview from "@/../.storybook/preview";

import { vi } from "vitest";

// MantineUIのコンポーネントに対して、jsdomでテストを行うためにWebAPIをモック
// 参考: https://mantine.dev/guides/vitest/
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

// Storybookのstoryをvitestでテストするための設定
// 参考: https://storybook.js.org/docs/writing-tests/stories-in-unit-tests#configure
setProjectAnnotations(preview);
