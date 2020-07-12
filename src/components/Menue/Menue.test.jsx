import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Menue from "./Menue";

afterEach(cleanup);

describe("Menue component", () => {
  let props;

  beforeEach(() => {
    props = {
      test: "test",
    };
  });

  it("should render without crashing", () => {
    const { getByTestId } = render(<Menue {...props} />);
    const linkElement = getByTestId("Menue");
    expect(linkElement).toBeInTheDocument();
  });
});
