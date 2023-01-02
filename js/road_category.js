'use strict';

//////////////////////////////////////////////////////////////////////
///////// Vairables
const road_cat = document.querySelectorAll('.road-a');
const road_title = document.querySelector('.road_stories-title');
const items = document.querySelectorAll('.road_stories-item');
const world = document.querySelector('.click-world');
const israel = document.querySelector('.click-israel');
const all = document.querySelector('.click-all');
const favorite = document.querySelector('.click-favorite');
const nav_road = document.querySelector('.road-navbar');
const nav_home3 = document.querySelector('.nav-home');
const add_to_favorite = document.querySelectorAll('.add-to-favorite');

///////////////////////////////////////
// Hover between sales category items
road_cat.forEach(function (e) {
  e.addEventListener('click', function (e) {
    road_cat.forEach(function (e) {
      e.classList.remove('active-text');
    });
    this.classList.add('active-text');
  });
});

///////////////////////////////////////
// Add to favorite story
add_to_favorite.forEach(function (e) {
  e.addEventListener('click', function (e) {
    if (this.classList.contains('favorite')) {
      this.classList.remove('favorite');
      this.textContent = 'Add to ❤️';
    } else {
      this.classList.add('favorite');
      this.textContent = 'Added to ❤️';
    }
  });
});

///////////////////////////////////////
// Switch between sales category privew

// All
all.addEventListener('click', function (e) {
  items.forEach(function (e) {
    e.classList.remove('hidden');
    road_title.textContent = '🗺️ All Stories';
  });
});

// world
world.addEventListener('click', function (e) {
  road_title.textContent = '🌍 World Stories';
  items.forEach(function (e) {
    e.classList.remove('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('israel')) {
      e.classList.add('hidden');
    }
  });
});

// Israel
israel.addEventListener('click', function (e) {
  road_title.textContent = '🇮🇱 Israel Stories';
  items.forEach(function (e) {
    e.classList.remove('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('world')) {
      e.classList.add('hidden');
    }
  });
});

// favorite
favorite.addEventListener('click', function (e) {
  road_title.textContent = '❤️ Favorite Stories - empty!';
  items.forEach(function (e) {
    e.classList.remove('hidden');
  });
  items.forEach(function (e) {
    if (!e.children[0].classList.contains('favorite')) {
      e.classList.add('hidden');
    } else {
      road_title.textContent = '❤️ Favorite Stories';
    }
  });
});

///////////////////////////////////////
// hamburger click - navbar
hamburger.addEventListener('click', function (e) {
  if (!nav_home3.classList.contains('hidden')) {
    nav_a_user.forEach(function (e) {
      nav_road.classList.add('hidden');
    });
  } else {
    nav_road.classList.remove('hidden');
  }
});
