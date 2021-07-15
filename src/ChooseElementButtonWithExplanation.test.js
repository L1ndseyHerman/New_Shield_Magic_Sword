import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ChooseElementButtonWithExplanation from "./ChooseElementButtonWithExplanation";

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
    render(<ChooseElementButtonWithExplanation buttonText="Fire" explanation="Earth"
      buttonColor="firebrick" explanationColor="darkolivegreen" />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Fire");
  expect(container.querySelector("button").style.background).toBe("firebrick");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Earth.");
  //  GOT COLORS WORKING THIS WAY!!! :D :D :D
  expect(container.querySelector("span").style.color).toBe("darkolivegreen");

});