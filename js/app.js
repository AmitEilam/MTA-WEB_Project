'use strict';

//////////////////////////////////////////////////////////////////////
/// Vairables
const nav = document.querySelectorAll('.nav-a');
const nav_a = document.querySelectorAll('.nav-a');
const nav_a_user = document.querySelectorAll('.nav-a-user');
const nav_li_user = document.querySelectorAll('.nav-li-user');
const nav_home = document.querySelector('.nav-home');
const nav_equipment = document.querySelector('.nav-equipment');
const nav_road_stories = document.querySelector('.nav-road_stories');
const nav_user = document.querySelector('.user');
const nav_cart = document.querySelector('.cart');
const search = document.querySelector('.search');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.logo-hamburger');

///////////////////////////////////////
// Logo click -> back home
logo.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

///////////////////////////////////////
// Hover between navber items
nav.forEach(function (e) {
  e.addEventListener('click', function (e) {
    nav.forEach(function (e) {
      e.classList.remove('active');
    });
    this.classList.add('active');
  });
});

///////////////////////////////////////
// hamburger click - navbar
hamburger.addEventListener('click', function (e) {
  if (nav_home.classList.contains('hidden')) {
    search.classList.remove('hidden');
    nav_a.forEach(function (e) {
      e.classList.remove('hidden');
    });
    nav_a_user.forEach(function (e) {
      e.classList.remove('hidden');
      nav_user.classList.remove('hidden');
    });
  } else {
    search.classList.add('hidden');
    nav_home.classList.add('hidden');
    nav_equipment.classList.add('hidden');
    nav_road_stories.classList.add('hidden');
    nav_user.classList.add('hidden');
    nav_cart.classList.add('hidden');
  }
});

///////////////////////////////////////
// Responsive Navbar
if (window.innerWidth <= 950) {
  nav_home.classList.add('hidden');
  nav_equipment.classList.add('hidden');
  nav_road_stories.classList.add('hidden');
  nav_user.classList.add('hidden');
  nav_cart.classList.add('hidden');
  search.classList.add('hidden');
}
window.addEventListener('resize', function () {
  if (window.innerWidth <= 950) {
    nav_home.classList.add('hidden');
    nav_equipment.classList.add('hidden');
    nav_road_stories.classList.add('hidden');
    nav_user.classList.add('hidden');
    nav_cart.classList.add('hidden');
    search.classList.add('hidden');
  } else {
    search.classList.remove('hidden');
    nav_a.forEach(function (e) {
      e.classList.remove('hidden');
    });
    nav_a_user.forEach(function (e) {
      e.classList.remove('hidden');
    });
  }
});
