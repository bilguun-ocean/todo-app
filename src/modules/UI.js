// Make sidebar MODAL 
export default class UI {
  constructor() {
  }

  static loadHomepage() {
    UI.addHeader('HOME')
    UI.addTaskButton()
  }

  static addTaskButton() {
    const mainContainer = document.querySelector('.main-content')
    const buttonContainer = document.createElement('span')
    const icon = document.createElement('i')
    const text = document.createElement('span')
    text.textContent = "Add a task"
    icon.classList.add('fa-solid','fa-circle-plus')
    buttonContainer.appendChild(icon)
    buttonContainer.appendChild(text)
    buttonContainer.classList.add('add-task-button')
    mainContainer.appendChild(buttonContainer)
  }

  static addHeader(headerName){
    const mainContainer = document.querySelector('.main-content')
    const header = document.createElement('h3')
    header.textContent = headerName
    mainContainer.appendChild(header)
  }
}