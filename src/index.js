import './style.css'
import logo from './img/task.svg'

const sideBarButton = document.querySelector('.hamburger')

sideBarButton.addEventListener("click", ()=> {
  document.querySelector('.wrapper').classList.toggle('active')
})


// Adding SVG LOGO 


const logoContainer = document.querySelector('.header')

const imgContainer = document.createElement('img')
imgContainer.setAttribute('src', logo)
imgContainer.classList.add('logo-image')

logoContainer.appendChild(imgContainer)

