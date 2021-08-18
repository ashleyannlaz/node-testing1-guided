function badCar() {
  return {
    model: 'prius',
    make: 'toyota'
  }
}

/**
 * Car class
 */
class Car {
  constructor() {
    this.make = 'toyota'
  }
}

module.exports = {
  badCar,
  Car,
}
