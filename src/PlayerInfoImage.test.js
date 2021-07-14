import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PlayerInfoImage from "./PlayerInfoImage";

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

it("renders correct image", () => {

  act(() => {
    render(<PlayerInfoImage choice="Sword"
        floatDirection="left" />, container);
  });
  
  //    toBe checks for exact equality, toContain more like RegEx.
  //expect(container.querySelector("img").src).toBe('./SmolLeftSword.png');
  expect(container.querySelector("img").src).toContain('SmolLeftSword.png');

});