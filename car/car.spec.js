test('that it werkz', () => { // this is a test
  // empty test is a FALSE POSITIVE
  expect({}).toEqual({})
  expect(true).not.toBe(true) // this is an assertion
})
