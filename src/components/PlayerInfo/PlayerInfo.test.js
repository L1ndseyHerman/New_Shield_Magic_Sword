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

//  I didn't test every possible combination here, but I think this is a good 
//  sample size/tests the general idea.
it("renders Player1 example", () => {

  act(() => {
    render(<PlayerInfo 
      floatDirection="left"
      constantHealthText="Player1 health: " 
      changingNumber="10" 
      constantElementText="Player1 element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div").style.float).toBe("left");
  expect(container.querySelector("#testingPar1").textContent).toBe("Player1 health: 10");
  expect(container.querySelector("#testingPar2").textContent).toBe("Player1 element: Fire");
  expect(container.querySelector("span").style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar3").textContent).toBe("Bodyguard");

});

it("renders Computer example", () => {

  act(() => {
    render(<PlayerInfo 
      floatDirection="right"
      constantHealthText="Computer health: " 
      changingNumber="10" 
      constantElementText="Computer element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div").style.float).toBe("right");
  expect(container.querySelector("#testingPar1").textContent).toBe("Computer health: 10");
  expect(container.querySelector("#testingPar2").textContent).toBe("Computer element: Fire");
  expect(container.querySelector("span").style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar3").textContent).toBe("Bodyguard");

});

it("renders Player1 different health", () => {

  act(() => {
    render(<PlayerInfo 
      floatDirection="left"
      constantHealthText="Player1 health: " 
      changingNumber="5"  
      constantElementText="Player1 element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div").style.float).toBe("left");
  expect(container.querySelector("#testingPar1").textContent).toBe("Player1 health: 5");
  expect(container.querySelector("#testingPar2").textContent).toBe("Player1 element: Fire");
  expect(container.querySelector("span").style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar3").textContent).toBe("Bodyguard");

});

it("renders Player1 different element", () => {

  act(() => {
    render(<PlayerInfo 
      floatDirection="left"
      constantHealthText="Player1 health: " 
      changingNumber="10"  
      constantElementText="Player1 element: " 
      element="Earth" 
      elementColor="darkolivegreen" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div").style.float).toBe("left");
  expect(container.querySelector("#testingPar1").textContent).toBe("Player1 health: 10");
  expect(container.querySelector("#testingPar2").textContent).toBe("Player1 element: Earth");
  expect(container.querySelector("span").style.color).toBe("darkolivegreen");
  expect(container.querySelector("#testingPar3").textContent).toBe("Bodyguard");

});

it("renders Player1 different characterType", () => {

  act(() => {
    render(<PlayerInfo 
      floatDirection="left"
      constantHealthText="Player1 health: " 
      changingNumber="10"  
      constantElementText="Player1 element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Mage" 
    />, container);
  });
  
  expect(container.querySelector("div").style.float).toBe("left");
  expect(container.querySelector("#testingPar1").textContent).toBe("Player1 health: 10");
  expect(container.querySelector("#testingPar2").textContent).toBe("Player1 element: Fire");
  expect(container.querySelector("span").style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar3").textContent).toBe("Mage");

});