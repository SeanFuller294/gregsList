import JobService from "../services/JobService.js";

let _jobService = new JobService()

function _draw() {
  let template = ""
  let jobs = _jobService.Jobs

  jobs.forEach((job, index) => {
    template += job.Template
    template += `<button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${index})">Delete</button></div>`

  })
  document.querySelector("#jobs").innerHTML = template
}

export default class JobController {
  constructor() {
    console.log("from job controller")
    _draw()
  }

  deleteJob(index) {
    _jobService.deleteJob(index)
    _draw()
  }

  addJob(event) {
    console.log("adding job")
    let form = event.target
    let newJob = {
      company: form.company.value,
      description: form.description.value,
      pay: form.pay.value,
      duties: form.duties.value
    }
    _jobService.addJob(newJob)
    _draw()
    //this will make the page not refresh?
    event.preventDefault()
  }
}