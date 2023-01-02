'use strict';

//////////////////////////////////////////////////////////////////////
///////// Vairables
const sale_cat = document.querySelectorAll('.sales-a');
const sale_title = document.querySelector('.sales-title');
const items = document.querySelectorAll('.sales-item');
const man = document.querySelector('.click-man');
const women = document.querySelector('.click-women');
const all = document.querySelector('.click-all');
const backpacks = document.querySelector('.click-backpacks');
const jackets = document.querySelector('.click-jackets');
const pants = document.querySelector('.click-pants');
const shoes = document.querySelector('.click-shoes');
const nav_sales = document.querySelector('.sales-navbar');
const nav_home2 = document.querySelector('.nav-home');

///////////////////////////////////////
// Hover between sales category items
sale_cat.forEach(function (e) {
  e.addEventListener('click', function (e) {
    sale_cat.forEach(function (e) {
      e.classList.remove('active-text');
    });
    this.classList.add('active-text');
  });
});

///////////////////////////////////////
// Switch between sales category privew

// All
all.addEventListener('click', function (e) {
  items.forEach(function (e) {
    e.classList.remove('hidden');
    sale_title.textContent = 'All Items';
  });
});

// Man
man.addEventListener('click', function (e) {
  sale_title.textContent = "Man's";
  items.forEach(function (e) {
    e.classList.remove('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('women')) {
      e.classList.add('hidden');
    }
  });
});

// Women
women.addEventListener('click', function (e) {
  sale_title.textContent = "Women's";
  items.forEach(function (e) {
    e.classList.remove('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('man')) {
      e.classList.add('hidden');
    }
  });
});

// Backpack
backpacks.addEventListener('click', function (e) {
  sale_title.textContent = 'Backpacks';
  items.forEach(function (e) {
    e.classList.add('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('backpacks')) {
      e.classList.remove('hidden');
    }
  });
});

// Jacket
jackets.addEventListener('click', function (e) {
  sale_title.textContent = 'Jackets';
  items.forEach(function (e) {
    e.classList.add('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('jackets')) {
      e.classList.remove('hidden');
    }
  });
});

// Pants
pants.addEventListener('click', function (e) {
  sale_title.textContent = 'Pans';
  items.forEach(function (e) {
    e.classList.add('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('pants')) {
      e.classList.remove('hidden');
    }
  });
});

// Shoes
shoes.addEventListener('click', function (e) {
  sale_title.textContent = 'Shoes';
  items.forEach(function (e) {
    e.classList.add('hidden');
  });
  items.forEach(function (e) {
    if (e.classList.contains('shoes')) {
      e.classList.remove('hidden');
    }
  });
});

///////////////////////////////////////
// hamburger click - navbar
hamburger.addEventListener('click', function (e) {
  if (!nav_home2.classList.contains('hidden')) {
    nav_a_user.forEach(function (e) {
      nav_sales.classList.add('hidden');
    });
  } else {
    nav_sales.classList.remove('hidden');
  }
});
