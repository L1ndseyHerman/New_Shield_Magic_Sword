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

//  I'm testing every combination for all 15 images here, because what if I accidentally delete 
//  one image? It's not just testing logic, it's testing to make sure all 15 .png's are there.
it("renders left-facing Fire Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="left" element="Fire" />, container);
  });
  
  //    toBe checks for exact equality, toContain more like RegEx.
  expect(container.querySelector("img").src).toContain('SmolLeftMagicColorfulFire.png');

});

it("renders right-facing Fire Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="right" element="Fire" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightMagicColorfulFire.png');

});

it("renders left-facing Earth Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="left" element="Earth" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolLeftMagicColorfulEarth.png');

});

it("renders right-facing Earth Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="right" element="Earth" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightMagicColorfulEarth.png');

});

it("renders left-facing Air Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="left" element="Air" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolLeftMagicColorfulAir.png');

});

it("renders right-facing Air Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="right" element="Air" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightMagicColorfulAir.png');

});

it("renders left-facing Water Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="left" element="Water" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolLeftMagicColorfulWater.png');

});

it("renders right-facing Water Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="right" element="Water" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightMagicColorfulWater.png');

});

it("renders left-facing Light Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="left" element="Light" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolLeftMagicColorfulLight.png');

});

it("renders right-facing Light Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="right" element="Light" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightMagicColorfulLight.png');

});

it("renders left-facing Dark Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="left" element="Dark" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolLeftMagicColorfulDark.png');

});

it("renders right-facing Dark Magic", () => {

  act(() => {
    render(<PlayerInfoImage choice="Magic"
        floatDirection="right" element="Dark" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightMagicColorfulDark.png');

});

//  I didn't pass in an element here, because it doesn't matter for Sword.
it("renders left-facing Sword", () => {

  act(() => {
    render(<PlayerInfoImage choice="Sword"
        floatDirection="left" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolLeftSword.png');

});

it("renders right-facing Sword", () => {

  act(() => {
    render(<PlayerInfoImage choice="Sword"
        floatDirection="right" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolRightSword.png');

});

//  Both direction and element don't matter for Shield.
it("renders Shield", () => {

  act(() => {
    render(<PlayerInfoImage choice="Shield" />, container);
  });
  
  expect(container.querySelector("img").src).toContain('SmolShield.png');

});