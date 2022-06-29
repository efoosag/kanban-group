import './style.css';
import DisplayMovies from './modules/app.js';
import logo from './back-img-removebg.png';

window.addEventListener('DOMContentLoaded', () => {
  DisplayMovies.initialize();
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

var backImg= document.getElementById('head-img');
backImg.src = logo;
//document.body.appendChild(backImg);
