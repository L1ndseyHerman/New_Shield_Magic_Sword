import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GameButtonWithExplanation from "./GameButtonWithExplanation";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders explanation text", () => {
  
  act(() => {
    render(<GameButtonWithExplanation explanation="Blocks two physical damage." />, container);
  });
  expect(container.textContent).toBe("Blocks two physical damage.");

});