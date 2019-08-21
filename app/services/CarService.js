import Car from "../models/Car.js";

let _state = {
  cars: [new Car({
    make: "Ford",
    model: "Mustang",
    year: 2001,
    price: 5000,
    imgUrl: "https://i.ytimg.com/vi/ePYbnMXCbfM/maxresdefault.jpg",
    description: "Black"
  })]
}
//state is the collection of all the variables in one object. Each service will have it's own state

export default class CarService {
  constructor() {
  }

  deleteCar(index) {
    _state.cars.splice(index, 1)
  }

  addCar(newCar) {
    _state.cars.push(new Car(newCar))
  }

  get Cars() {
    //map is returning a new array of the new copies of objects from the original
    //map using maps iterator to access an individual car
    //car is the current car in the array. we are making a new object that is a copy to break reference
    // return _state.cars.map(function (car) {})
    return _state.cars.map(car => new Car(car))

  }
}