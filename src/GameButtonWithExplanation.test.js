// hello.test.js

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
  //    This commented-out code doesn't work, but the code below does, 
  //    proving that this is how to test props! :D
  //expect(container.textContent).toBe("cfdf");
  expect(container.textContent).toBe("Blocks two physical damage.");
  act(() => {
    render(<GameButtonWithExplanation explanation="Deals one magic damage." />, container);
  });
  expect(container.textContent).toBe("Deals one magic damage.");

  act(() => {
    render(<GameButtonWithExplanation explanation="Deals two physical damage." />, container);
  });
  expect(container.textContent).toBe("Deals two physical damage.");
});