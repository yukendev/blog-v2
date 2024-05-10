import { render } from "@/test/render";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./header";

describe("<Header/>", () => {
  it("should be rendered 4 links", async () => {
    render(<Header />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(5);
  });
});
