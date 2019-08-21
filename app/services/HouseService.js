import House from "../models/House.js";



let _state = {
  houses: [new House({
    squareFeet: 1500,
    bathrooms: 2,
    bedrooms: 3,
    stories: 2,
    price: 1200,
    description: "Corner Lot Home With Bonus/Flex Space!",
    address: 123 + " S 4th st.",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSia1dL-eDgc-fzRtdv1dY-rOPJ5GK5UH5_Pv3xTm7H_gfvyG96bA",
    yearBuilt: 1301

  })]
}

export default class HouseService {
  constructor() {
  }

  deleteHouse(index) {
    _state.houses.splice(index, 1)
  }

  addHouse(newHouse) {
    _state.houses.push(new House(newHouse))
  }

  get Houses() {
    return _state.houses.map(house => new House(house))
  }
}