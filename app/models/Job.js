export default class Job {
  constructor(data) {
    this.company = data.company
    this.description = data.description
    this.pay = data.pay
    this.duties = data.duties

  }
  get Template() {
    return `
    <div class="col-4 border">
    <h1>${this.company}</h1>
    <h2>${this.description}</h2>
  <h3>Job duties: ${this.duties}</h3>
  <h4>$${this.pay}/hr.</h4>
  `
  }
}