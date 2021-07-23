import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NewGameButton from "./NewGameButton";

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

it("renders visible NewGameButton", () => {

  act(() => {
    render(<NewGameButton newGameButtonDisplay="block" />, container);
  });
  
  expect(container.querySelector("div").style.display).toBe("block");

});

it("renders invisible NewGameButton", () => {

    act(() => {
      render(<NewGameButton newGameButtonDisplay="none" />, container);
    });
    
    expect(container.querySelector("div").style.display).toBe("none");
  
  });