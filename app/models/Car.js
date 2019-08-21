export default class Car {
  constructor(data) {
    this.id = data._id || Math.floor(Math.random() * 1000000)
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }
  get Template() {
    return `
    <div class="col-4 border">
    <h1>Make: ${this.make}</h1>
  <h3>Model: ${this.model}</h3>
  <img src="${this.imgUrl}" alt="no picture">
  <h3>$${this.price}</h3>
  <p>Year: ${this.year}</p>
  <p>${this.description}</p>

  `
  }
}