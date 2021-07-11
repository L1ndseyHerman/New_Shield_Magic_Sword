import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TurnResultsText from "./TurnResultsText";

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
    render(<TurnResultsText playerOneChoice="Magic" 
        playerOneElementalBonusText="(+1 bonus elemental damage)"
        computerChoice="Shield" computerElementalBonusText=""
        winLooseTieText="Player1 wins!" />, container);
  });
  
  expect(container.querySelector("p").textContent).toBe("Player1 chose Magic " +
   "(+1 bonus elemental damage) and Computer chose Shield . Player1 wins!");

});