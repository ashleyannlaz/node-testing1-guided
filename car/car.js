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
  }
  drive(distance) {
    this.odometer+= distance
    return 10
  }
}

module.exports = {
  badCar,
  Car,
}
