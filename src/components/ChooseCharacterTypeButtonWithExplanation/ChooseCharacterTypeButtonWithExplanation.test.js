import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ChooseCharacterTypeButtonWithExplanation from "./ChooseCharacterTypeButtonWithExplanation";

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

it("renders Bodyguard button + explanation", () => {

  act(() => {
    render(<ChooseCharacterTypeButtonWithExplanation 
        buttonColor="darkolivegreen"
        buttonText="Bodyguard" 
        explanation="Block +1 Magic Damage when using Shield."
    />, container);
  });
  
  expect(container.querySelector("button").style.background).toBe("darkolivegreen");
  expect(container.querySelector("button").textContent).toBe("Bodyguard");
  expect(container.querySelector("p").textContent).toBe("Block +1 Magic Damage when using Shield.");

});

it("renders Mage button + explanation", () => {

    act(() => {
      render(<ChooseCharacterTypeButtonWithExplanation 
          buttonColor="royalblue"
          buttonText="Mage" 
          explanation="Deal +1 Magic Damage when using Magic." 
      />, container);
    });
    
    expect(container.querySelector("button").style.background).toBe("royalblue");
    expect(container.querySelector("button").textContent).toBe("Mage");
    expect(container.querySelector("p").textContent).toBe("Deal +1 Magic Damage when using Magic.");
  
  });

  it("renders Assassin button + explanation", () => {

    act(() => {
      render(<ChooseCharacterTypeButtonWithExplanation 
          buttonColor="firebrick"
          buttonText="Assassin" 
          explanation="Deal +1 Physical Damage when using Sword." 
      />, container);
    });
    
    expect(container.querySelector("button").style.background).toBe("firebrick");
    expect(container.querySelector("button").textContent).toBe("Assassin");
    expect(container.querySelector("p").textContent).toBe("Deal +1 Physical Damage when using Sword.");
  
  });