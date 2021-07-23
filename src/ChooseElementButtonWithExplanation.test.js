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

it("renders Fire button + explanation", () => {

  act(() => {
    render(<ChooseElementButtonWithExplanation 
      buttonText="Fire" 
      explanation="Earth"
      buttonColor="firebrick" 
      explanationColor="darkolivegreen"
    />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Fire");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Earth.");
  expect(container.querySelector("button").style.background).toBe("firebrick");
  expect(container.querySelector("span").style.color).toBe("darkolivegreen");

});

it("renders Earth button + explanation", () => {

  act(() => {
    render(<ChooseElementButtonWithExplanation 
      buttonText="Earth" 
      explanation="Air"
      buttonColor="darkolivegreen" 
      explanationColor="darkorange" 
    />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Earth");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Air.");
  expect(container.querySelector("button").style.background).toBe("darkolivegreen");
  expect(container.querySelector("span").style.color).toBe("darkorange");

});

it("renders Air button + explanation", () => {

  act(() => {
    render(<ChooseElementButtonWithExplanation 
      buttonText="Air" 
      explanation="Water"
      buttonColor="darkorange" 
      explanationColor="royalblue" 
    />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Air");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Water.");
  expect(container.querySelector("button").style.background).toBe("darkorange");
  expect(container.querySelector("span").style.color).toBe("royalblue");

});

it("renders Water button + explanation", () => {

  act(() => {
    render(<ChooseElementButtonWithExplanation 
      buttonText="Water" 
      explanation="Fire"
      buttonColor="royalblue" 
      explanationColor="firebrick" 
    />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Water");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Fire.");
  expect(container.querySelector("button").style.background).toBe("royalblue");
  expect(container.querySelector("span").style.color).toBe("firebrick");

});

it("renders Light button + explanation", () => {

  act(() => {
    render(<ChooseElementButtonWithExplanation 
      buttonText="Light" 
      explanation="Dark"
      buttonColor="gold" 
      explanationColor="rebeccapurple" 
    />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Light");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Dark.");
  expect(container.querySelector("button").style.background).toBe("gold");
  expect(container.querySelector("span").style.color).toBe("rebeccapurple");

});

it("renders Dark button + explanation", () => {

  act(() => {
    render(<ChooseElementButtonWithExplanation 
      buttonText="Dark" 
      explanation="Light"
      buttonColor="rebeccapurple" 
      explanationColor="gold" 
    />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Dark");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Light.");
  expect(container.querySelector("button").style.background).toBe("rebeccapurple");
  expect(container.querySelector("span").style.color).toBe("gold");

});