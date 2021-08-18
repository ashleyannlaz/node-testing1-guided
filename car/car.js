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
    this.odometer = 0
    this.model = model
    this.make = make
    this.drive = 7
  }
}

module.exports = {
  badCar,
  Car,
}
