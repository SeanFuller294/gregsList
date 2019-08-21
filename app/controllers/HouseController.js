import HouseService from "../services/HouseService.js";


let _houseService = new HouseService()

function _draw() {
  let template = ""
  let houses = _houseService.Houses

  houses.forEach((house, index) => {
    template += house.Template
    template += `<button class="btn btn-danger" onclick="app.controllers.houseController.deleteHouse(${index})">Delete</button></div>`

  })
  document.querySelector("#houses").innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("from house controller")
    _draw()
  }

  deleteHouse(index) {
    _houseService.deleteHouse(index)
    _draw()
  }

  addHouse(event) {
    console.log("adding house")
    let form = event.target
    let newHouse = {
      squareFeet: form.squareFeet.value,
      bathrooms: form.bathrooms.value,
      bedrooms: form.bedrooms.value,
      stories: form.stories.value,
      price: form.price.value,
      description: form.description.value,
      address: form.address.value,
      imgUrl: form.imgUrl.value,
      yearBuilt: form.yearBuilt.value
    }
    _houseService.addHouse(newHouse)
    _draw()
    //this will make the page not refresh?
    event.preventDefault()
  }
}