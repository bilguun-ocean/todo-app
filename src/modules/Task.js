export default class task {
  constructor(title, dueDate = ""){
    //dueDate is no date if its not given 
    this.title = title
    this.dueDate = dueDate
  }
  
  getTitle() {
    return this.title
  }

  setTitle(name) {
    this.name = name
  }

  getDate() {
    return this.dueDate
  }

  setDate(dueDate) {
    this.dueDate = dueDate
  }
}