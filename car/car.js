

class Car {
  constructor(make, model) {
    this.make = make
    this.model = model
    this.odometer = 0
  } drive(mileage) {
    this.odometer += mileage
    return mileage
  } async driveAsync(mileage) {
    this.odometer += mileage
    return mileage
  }
}

module.exports = {
  Car,
};
