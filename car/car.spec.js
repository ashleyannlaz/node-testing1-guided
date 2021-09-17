const { badCar, Car } = require("./car");

function objectMaker() {
  return {};
}

test("Sanity Check", () => {
  // this is a test
  //false positive / this is an assertion
  expect(true).toBe(true);
  expect(true).not.toBe(false);
});

test("Object maker", () => {
  const whatItReturns = objectMaker();
  const whatWeExpect = {};
  expect(whatItReturns).toEqual(whatWeExpect);
});

describe("Car", () => {
    let prius 
    beforeEach(() => {
        prius = new Car('Toyota', 'Prius')
    })
  test("Car is defined", () => {
    expect(Car).toBeDefined();
  });
  test("Car creates instances of cars", () => {
    expect(prius.make).toBe("Toyota");
    expect(prius.model).toBe("Prius");
    expect(prius).toHaveProperty("make");
    expect(prius).toMatchObject({ make: "Toyota", model: "Prius" });
  });
  test('New cars have an odometer set at zero', () => {
      expect(prius.odometer).toBe(0)
  })
  test('Cars have a drive method', () => {
    expect(prius.drive).toBeDefined()
    expect(prius.drive).toBeInstanceOf(Function)
    expect(prius.drive).toBe(Car.prototype.drive)
  })
  test('Driving the car increases odometer by driven distance', () => {
    prius.drive(50)  
    expect(prius.odometer).toBe(50)
    prius.drive(50)
    expect(prius.odometer).toBe(100)
  })

  test('Driving the car returns the driven distance', () => {
      expect(prius.drive(50)).toBe(50)
  })

  test('driveAsync returns the driven distance asynchronously', async () => {
      const drivenDistance = await prius.driveAsync(50)
      expect(drivenDistance).toBe(50)
  }, 500)
});



