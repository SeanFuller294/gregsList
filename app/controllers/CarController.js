import CarService from "../services/CarService.js";

let _carService = new CarService()

//draw all the cars
//get cars from the service
//the element to inject the cars template into
function _draw() {
  let template = ""
  let cars = _carService.Cars

  cars.forEach((car, index) => {
    template += car.Template
    template += `<button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${index})">Delete</button></div>`

  })
  //same as above
  //for (let i = 0; i < cars.length; i++) {
  //const car = cars[i];
  //}
  document.querySelector("#cars").innerHTML = template

}

export default class CarController {
  constructor() {
    console.log("from CarController.js")
    _draw()
  }
  deleteCar(index) {
    _carService.deleteCar(index)
    _draw()
  }
  addCar(event) {
    console.log("adding car")
    let form = event.target

    let newCar = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value,
      year: form.year.value,
      price: form.price.value,
    }
    _carService.addCar(newCar)
    _draw()
    //this will make the page not refresh?
    event.preventDefault()
  }
}