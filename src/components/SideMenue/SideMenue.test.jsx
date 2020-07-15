import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SideMenue from "./SideMenue";

afterEach(cleanup);

describe("SideMenue component", () => {
  let props;

  beforeEach(() => {
    props = {
      test: "test",
    };
  });

  it("should render without crashing", () => {
    const { getByTestId } = render(<SideMenue {...props} />);
    const linkElement = getByTestId("SideMenue");
    expect(linkElement).toBeInTheDocument();
  });
});
