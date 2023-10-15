import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

describe("Page", () => {
  it("Load component", () => {
    render(<Page />);
  });
});
