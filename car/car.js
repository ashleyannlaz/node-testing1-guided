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
    this.model = 'prius'
  }
}

module.exports = {
  badCar,
  Car,
}
