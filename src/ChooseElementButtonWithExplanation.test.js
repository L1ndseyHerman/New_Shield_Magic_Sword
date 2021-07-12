import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import renderer from 'react-test-renderer'

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
    render(<ChooseElementButtonWithExplanation buttonText="Fire" explanation="Earth" />, container);
  });
  
  expect(container.querySelector("button").textContent).toBe("Fire");
  expect(container.querySelector("p").textContent).toBe("+1 damage to Earth.");

});

//  This isn't working, didn't notice when I changed the button color from "wheat" 
//  to "firebrick" :(
test('Snapshot of above test AND CSS', () => {
  const tree = renderer.create(<ChooseElementButtonWithExplanation />).toJSON()
  expect(tree).toMatchSnapshot();
})

/*test('it works', () => {
  const tree = renderer.create(<ChooseElementButtonWithExplanation />).toJSON()
  expect(tree).toHaveStyleRule('color', 'red')
  expect(tree).toHaveStyleRule('color', 'green', {
    media: '(max-width: 640px)',
    modifier: ':hover',
  })
})*/

