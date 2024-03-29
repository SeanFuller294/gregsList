import Job from "../models/Job.js";

let _state = {
  jobs: [new Job({
    company: "Example",
    description: "Example",
    duties: "Example",
    pay: 7.5
  })]
}

export default class JobService {
  constructor() {
  }

  deleteJob(index) {
    _state.jobs.splice(index, 1)
  }

  addJob(newJob) {
    _state.jobs.push(new Job(newJob))
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }
}