import CarController from "./controllers/CarController.js";
import HouseController from "./controllers/HouseController.js";
import JobController from "./controllers/JobController.js";

class App {
  constructor() {
    console.log("from main.js")
    this.controllers = {
      carController: new CarController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
  }
}

window["app"] = new App()