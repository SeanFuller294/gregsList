export default class House {
  constructor(data) {
    this.squareFeet = data.squareFeet
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.stories = data.stories
    this.price = data.price
    this.description = data.description
    this.address = data.address
    this.imgUrl = data.imgUrl
    this.yearBuilt = data.yearBuilt
  }
  get Template() {
    return `
    <div class="col-4 border">
    <h1>${this.description}</h1>
    <h2>Address: ${this.address}</h2>
  <h3>${this.squareFeet} feet^2</h3>
  <img src="${this.imgUrl}" alt="no picture">
  <h4>$${this.price} /mo.</h4>
  <p>Bedrooms: ${this.bedrooms}</p>
  <p>Bathrooms: ${this.bathrooms}</p>
  <p>Stories: ${this.stories}</p>
  <p>Year Built: ${this.yearBuilt}</p>
  `
  }
}