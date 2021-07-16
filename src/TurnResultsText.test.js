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

it("renders TurnResultsText example", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="darkolivegreen"
        playerOneChoice="Shield" 
        playerOneElementalBonusText=""
        computerChoice="Magic" computerElementalBonusText=""
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " +
   " and Computer chose Magic . ");

});

it("renders different playerOneElementColor", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="darkorange" computerElementColor="darkolivegreen"
        playerOneChoice="Shield" 
        playerOneElementalBonusText=""
        computerChoice="Magic" computerElementalBonusText=""
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("darkorange");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " +
   " and Computer chose Magic . ");

});

it("renders different computerElementColor", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="royalblue"
        playerOneChoice="Shield" 
        playerOneElementalBonusText=""
        computerChoice="Magic" computerElementalBonusText=""
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("royalblue");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " +
   " and Computer chose Magic . ");

});

it("renders different playerOneChoice", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="darkolivegreen"
        playerOneChoice="Sword" 
        playerOneElementalBonusText=""
        computerChoice="Magic" computerElementalBonusText=""
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Sword " +
   " and Computer chose Magic . ");

});

it("renders different computerChoice", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="darkolivegreen"
        playerOneChoice="Shield" 
        playerOneElementalBonusText=""
        computerChoice="Sword" computerElementalBonusText=""
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " +
   " and Computer chose Sword . ");

});

it("renders playerOneElementalBonusText", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="darkolivegreen"
        playerOneChoice="Shield" 
        playerOneElementalBonusText="(+1 bonus elemental damage)"
        computerChoice="Magic" computerElementalBonusText=""
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " + 
  "(+1 bonus elemental damage) and Computer chose Magic . ");

});

it("renders computerElementalBonusText", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="darkolivegreen"
        playerOneChoice="Shield" 
        playerOneElementalBonusText=""
        computerChoice="Magic" computerElementalBonusText="(+1 bonus elemental damage)"
        winLooseTieText="" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " +
   " and Computer chose Magic (+1 bonus elemental damage). ");

});

it("renders winText", () => {

  act(() => {
    render(<TurnResultsText playerOneElementColor="firebrick" computerElementColor="darkolivegreen"
        playerOneChoice="Shield" 
        playerOneElementalBonusText=""
        computerChoice="Magic" computerElementalBonusText=""
        winLooseTieText="Player1 wins!" />, container);
  });
  
  expect(container.querySelector("#testingSpan1").style.color).toBe("firebrick");
  expect(container.querySelector("#testingSpan2").style.color).toBe("darkolivegreen");
  expect(container.querySelector("p").textContent).toBe("Player1 chose Shield " +
   " and Computer chose Magic . Player1 wins!");

});

//  None of the other props matter if playerOneChoice === "First Turn", they won't show up.
it("renders the empty string, because Player1 has not taken a turn yet", () => {

  act(() => {
    render(<TurnResultsText playerOneChoice="First Turn" />, container);
  });

  expect(container.querySelector("p").textContent).toBe("");

});