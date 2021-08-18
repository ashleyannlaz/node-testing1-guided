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
    this.make = model
    this.model = make
  }
}

module.exports = {
  badCar,
  Car,
}
