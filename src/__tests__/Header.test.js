import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(
    screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "hello from the Header!";
      const nodeHasText =
        hasText(element) ||
        (element.querySelector("*") &&
          Array.from(element.childNodes).some(hasText));
      return nodeHasText;
    })
  ).toBeInTheDocument();
});
``