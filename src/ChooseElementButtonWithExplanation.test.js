const example = jest.createMockFromModule('./ChooseElementButtonWithExplanation' );

// This gets undefined, bec there is no playerOneElementColor.
test('Make sure the color is not wheat still', () => {
  expect(example.playerOneElementColor).toBe("wheat");
});