import './style.css'

const sideBarButton = document.querySelector('#side-bar-button')

sideBarButton.addEventListener("click", ()=> {
  document.querySelector('.wrapper').classList.toggle('active')
})