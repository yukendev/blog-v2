import { Providers } from "@/app/providers";
import { render as testingLibraryRender } from "@testing-library/react";

// 参考: https://mantine.dev/guides/vitest/
export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <Providers>{children}</Providers>
    ),
  });
}
