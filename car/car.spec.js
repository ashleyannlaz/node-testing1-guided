const { badCar } = require('./car')

test('that it werkz', () => { // this is a test
  // empty test is a FALSE POSITIVE
  expect({}).toEqual({}) // this is an assertion
  expect(true).not.toBe(false) // this is another assertion
})

describe('badCar', () => { // describe (just for organizing)
  it('returns a toyota', () => { // test
    const actualValue = badCar()
    const expectedValue = { make: 'toyota', model: 'prius' }

    // comparing expected against actual
    expect(actualValue).toEqual(expectedValue) // same shape
    expect(actualValue).toEqual(expectedValue) // same shape

  })
})
