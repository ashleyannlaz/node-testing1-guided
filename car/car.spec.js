const { badCar } = require('./car')

test('that it werkz', () => { // this is a test
  // empty test is a FALSE POSITIVE
  expect({}).toEqual({}) // this is an assertion
  expect(true).not.toBe(false) // this is another assertion
})

describe('badCar', () => {
  
})
