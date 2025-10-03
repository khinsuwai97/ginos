import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";
afterEach(cleanup);
test("alt text render on image", async () => {
  const name = "My favorite pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description={"super cool pizza"} image={src} />
  );

  const img = screen.getByRole("img") as HTMLImageElement;
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("ot have default image if none is provided", () => {
  const screen = render(
    <Pizza name={"Cool Pizza"} description={"super cool pizza"} />
  );
  const img = screen.getByRole("img") as HTMLImageElement;
  expect(img.src).not.toBe("");
});
