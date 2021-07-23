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

it("renders enabled Shield button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="darkolivegreen" 
      buttonText="Shield" 
      explanation="Blocks two physical damage." 
      isDisabled={false} 
    />, container);
  });

  expect(container.querySelector("button").style.background).toBe("darkolivegreen");
  expect(container.querySelector("button").textContent).toBe("Shield");
  expect(container.querySelector("p").textContent).toBe("Blocks two physical damage.");
  expect(container.querySelector("button").disabled).toBe(false);

});

it("renders disabled Shield button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="darkolivegreen" 
      buttonText="Shield" 
      explanation="Blocks two physical damage." 
      isDisabled={true} 
    />, container);
  });

  expect(container.querySelector("button").style.background).toBe("darkolivegreen");
  expect(container.querySelector("button").textContent).toBe("Shield");
  expect(container.querySelector("p").textContent).toBe("Blocks two physical damage.");
  expect(container.querySelector("button").disabled).toBe(true);

});

it("renders enabled Magic button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="royalblue" 
      buttonText="Magic" 
      explanation="Deals one magic damage." 
      isDisabled={false} 
    />, container);
  });

  expect(container.querySelector("button").style.background).toBe("royalblue");
  expect(container.querySelector("button").textContent).toBe("Magic");
  expect(container.querySelector("p").textContent).toBe("Deals one magic damage.");
  expect(container.querySelector("button").disabled).toBe(false);

});

it("renders disabled Magic button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="royalblue" 
      buttonText="Magic" 
      explanation="Deals one magic damage." 
      isDisabled={true} 
    />, container);
  });

  expect(container.querySelector("button").style.background).toBe("royalblue");
  expect(container.querySelector("button").textContent).toBe("Magic");
  expect(container.querySelector("p").textContent).toBe("Deals one magic damage.");
  expect(container.querySelector("button").disabled).toBe(true);

});

it("renders enabled Sword button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="firebrick" 
      buttonText="Sword" 
      explanation="Deals two physical damage." 
      isDisabled={false} 
    />, container);
  });

  expect(container.querySelector("button").style.background).toBe("firebrick");
  expect(container.querySelector("button").textContent).toBe("Sword");
  expect(container.querySelector("p").textContent).toBe("Deals two physical damage.");
  expect(container.querySelector("button").disabled).toBe(false);

});

it("renders disabled Sword button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="firebrick" 
      buttonText="Sword" 
      explanation="Deals two physical damage." 
      isDisabled={true} 
    />, container);
  });

  expect(container.querySelector("button").style.background).toBe("firebrick");
  expect(container.querySelector("button").textContent).toBe("Sword");
  expect(container.querySelector("p").textContent).toBe("Deals two physical damage.");
  expect(container.querySelector("button").disabled).toBe(true);

});