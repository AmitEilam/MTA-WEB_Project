'use strict';

//////////////////////////////////////////////////////////////////////
/// Vairables
const addTo = document.querySelectorAll('.add-To');
const modal_add = document.querySelector('.cart_items');
const cart = document.querySelector('.cart');
const empty = document.querySelector('.empty');
const modal_heder = document.querySelector('.modal__header');
const modal_remove = document.querySelectorAll('.sales-item-title');
const cart_btn = document.querySelectorAll('.purchase-btn');
const final_price = document.querySelector('.final-price');
const final_price_title = document.querySelector('.final-price-title');
const tooltip = document.querySelector('.tooltip-popup');
const tooltiptext = document.querySelector('.tooltiptext-popup');

///////////////////////////////////////
// Add to cart click
let count = 0;
addTo.forEach(function (e) {
  e.addEventListener('click', function (e) {
    if (this.textContent == 'Add to cart') {
      // Show added pop up
      show_add_popup();

      // count item amount cart
      count++;

      // Change to added
      this.style.backgroundColor = '#eb7b3a';
      this.style.color = 'white';
      this.textContent = 'Added';

      // Save only the size that choosen (not on sale)
      if (this.parentElement.children[3].value != undefined) {
        let html =
          '<div class="sales-item">' + this.parentElement.innerHTML + '</div>';
        html = html.replaceAll('<option>', `<option hidden>`);
        html = html.replace(
          '<option hidden>Size 38</option>',
          `<option>${this.parentElement.children[3].value}</option>`
        );
        modal_add.innerHTML += html;

        // Update the cart title
        cart.textContent = `🛒 Cart (${count})`;

        // Calc final price
        final_price_title.classList.remove('hidden');
        let tmp = +final_price.textContent.slice(0, -1);
        final_price.textContent =
          +this.parentElement.children[2].textContent.slice(0, -1) + tmp + '$';

        // Save only the size that choosen (on sale)
      } else {
        let html =
          '<div class="sales-item">' + this.parentElement.innerHTML + '</div>';
        html = html.replaceAll('<option>', `<option hidden>`);
        html = html.replace(
          '<option hidden>Size 38</option>',
          `<option>${this.parentElement.children[4].value}</option>`
        );
        modal_add.innerHTML += html;

        // Update the cart title
        cart.textContent = `🛒 Cart (${count})`;

        // Calc final price
        final_price_title.classList.remove('hidden');
        let tmp = +final_price.textContent.slice(0, -1);
        final_price.textContent =
          +this.parentElement.children[2].textContent
            .replaceAll(' ', '')
            .slice(0, -2) +
          tmp +
          '$';
      }

      // Change the title if the cart is not empty
      modal_heder.textContent = 'Your cart is ready!';
      cart_btn.forEach(function (e) {
        e.classList.remove('hidden');
      });
    }
  });
});

// show add to cart pop up function
function show_add_popup() {
  tooltip.style.visibility = 'visible';
  tooltiptext.style.visibility = 'visible';
  setTimeout(() => {
    tooltiptext.style.visibility = 'hidden';
  }, 1500);
}

// Empty the cart click
empty.addEventListener('click', function () {
  // Reset the count
  count = 0;
  // Reset the item
  modal_add.innerHTML = '';
  // Update the titles
  modal_heder.textContent = 'Your cart is empty!';
  cart.textContent = `🛒 Cart`;
  // Update the 'add to cart' button
  addTo.forEach(function (e) {
    e.style.backgroundColor = 'white';
    e.style.color = '#eb7b3a';
    e.textContent = 'Add to cart';
  });
  // Remove the cart button when empty
  cart_btn.forEach(function (e) {
    e.classList.add('hidden');
  });
  // Remove the cart final price
  final_price_title.classList.add('hidden');
  final_price.textContent = '';
});
