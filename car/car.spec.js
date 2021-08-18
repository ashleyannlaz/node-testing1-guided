const { badCar, Car } = require('./car')

test('that it werkz', () => { // this is a test
  // empty test is a FALSE POSITIVE
  expect({}).toEqual({}) // this is an assertion
  expect(true).not.toBe(false) // this is another assertion
})

describe('badCar', () => { // describe (just for organizing)
  it('returns a toyota', () => { // test
    const actualValue = badCar()
    const actualValue2 = actualValue
    const expectedValue = { make: 'toyota', model: 'prius' }

    // comparing expected against actual
    expect(actualValue).toEqual(expectedValue) // same shape
    expect(actualValue).toBe(actualValue2) // same thing
  })
})

describe('Car class', () => {
  it('exists', () => {
    // with TDD
    // 1- write the simplest test that will fail
    // 2- write the least amount of code that will pass the test
    // 3- reward yourself by refactoring the code
    expect(Car).toBeDefined()
  })
  it('can build instances of cars', () => {
    // make an instance of a car with our Car class
    
    // assert that it's an instance of Car
  })
})
