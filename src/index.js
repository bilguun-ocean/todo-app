import { format, compareAsc } from 'date-fns'
import './style.css'
import logo from './img/task.svg'
import UI from './modules/UI'

// IIFE for hamburger button

(function(){
  const sideBarButton = document.querySelector('.hamburger')

  sideBarButton.addEventListener("click", ()=> {
    document.querySelector('.wrapper').classList.toggle('active')
  })
})();


// IIFE for appending logo
(function(){
  const logoContainer = document.querySelector('.header')
  const imgContainer = document.createElement('img')
  imgContainer.setAttribute('src', logo)
  imgContainer.classList.add('logo-image')
  logoContainer.appendChild(imgContainer)
})();

// (function(){
//   const container = document.querySelector('.project-header')
// })

// IIFE for detecting outside click on mobile layouts
// (function(){
//   let screenWidth = window.matchMedia("(max-width: 700px)")
//   if (screenWidth)
  
// })()

// UI.loadHomepage()