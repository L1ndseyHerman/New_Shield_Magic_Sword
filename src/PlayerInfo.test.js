import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PlayerInfo from "./PlayerInfo";

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

  //  For all of these tests, just testing the first (left-most) component, since the 
  //  other five should do sim things.
  act(() => {
    render(<PlayerInfo constantHealthText="Player1 health: " 
        changingNumber="10" constantElementText="Player1 element: " 
        element="Fire" />, container);
  });
  
  expect(container.querySelector("#testingPar1").textContent).toBe("Player1 health: 10");
  expect(container.querySelector("#testingPar2").textContent).toBe("Player1 element: Fire");

});