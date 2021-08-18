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
  constructor(make, model) {
    this.make = make
    this.model = model
    this.odometer = 0
  }
}

module.exports = {
  badCar,
  Car,
}
