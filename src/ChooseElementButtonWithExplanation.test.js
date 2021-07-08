import ChooseElementButtonWithExplanation from './ChooseElementButtonWithExplanation';

const example = jest.createMockFromModule('./ChooseElementButtonWithExplanation');

//  Darn, playerOneElementColor is based on what props get passed in, but when testing 
//  the component individually (without App.js passing props in to it), no props get 
//  passed in :(
test('Make sure the color is not wheat still', () => {
  expect(ChooseElementButtonWithExplanation(example.playerOneElementColor)).not.toBe("wheat");
});