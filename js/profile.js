const card_num = document.querySelector('.account-card-value');
const card_num_display = document.querySelector('.account-card-value-display');
const edit = document.querySelector('.edit');
const cancel = document.querySelector('.cancel');
const details = document.querySelectorAll('.details');
const hide = document.querySelectorAll('.hide');
const alert_profile = document.querySelectorAll('.alert-profile');

const owner_value = document.querySelector('.account-owner-value');
const edit_name = document.querySelector('.edit-name');
const expire_value = document.querySelector('.account-expire-value');
const edit_expire = document.querySelector('.edit-date');
const pin_value = document.querySelector('.account-pin-value');
const edit_pin = document.querySelector('.edit-pin');
const card_value = document.querySelector('.account-card-value');
const card_value_display = document.querySelector(
  '.account-card-value-display'
);
const edit_card = document.querySelector('.edit-card');

card_num.textContent = 'XXX-' + card_num.textContent.slice(-3);

function edit_payment() {
  // Edit btn
  edit.addEventListener('click', function (e) {
    if (this.textContent == 'Edit Your Payment') {
      // change the btn value
      this.textContent = 'Save';
      // show cancel btn
      cancel.classList.remove('hidden');
      // Show the card detalis
      card_num.classList.add('hidden');
      card_num_display.classList.remove('hidden');
      edit_card.classList.remove('hidden');
      details.forEach(e => {
        e.classList.remove('hidden');
      });
    } else {
      // change the btn value
      edit.textContent = 'Edit Your Payment';
      // Hide the card detalis
      edit_card.classList.add('hidden');
      card_num.classList.remove('hidden');
      card_num_display.classList.add('hidden');
      // Hide cancel btn
      cancel.classList.add('hidden');
      // Update the values if not empty field
      if (edit_name.value != '') {
        owner_value.textContent = edit_name.value;
      }
      if (edit_expire.value != '') {
        expire_value.textContent = edit_expire.value;
      }
      if (edit_card.value != '') {
        card_value.textContent = edit_card.value;
        // add '-' for card numbers
        card_value_display.textContent =
          edit_card.value.slice(0, 4) +
          '-' +
          edit_card.value.slice(4, 8) +
          '-' +
          edit_card.value.slice(8, 12) +
          '-' +
          edit_card.value.slice(12, 16);
        card_num.textContent = 'XXX-' + edit_card.value.slice(-3);
      }
      if (edit_pin.value != '') {
        pin_value.textContent = edit_pin.value;
      }
      // Clear the filed of inputs
      edit_name.value = '';
      edit_expire.value = '';
      edit_pin.value = '';
      edit_card.value = '';

      // Hides the field
      hide.forEach(e => {
        e.classList.add('hidden');
      });
      // Hides the alert field
      alert_profile.forEach(e => {
        e.classList.add('hidden');
      });
    }
  });
}
edit_payment();

function cancel_btn() {
  cancel.addEventListener('click', function () {
    // change the btn value
    edit.textContent = 'Edit Your Payment';
    // Hide the card detalis
    edit_card.classList.add('hidden');
    card_num.classList.remove('hidden');
    card_num_display.classList.add('hidden');
    // Hides the field
    hide.forEach(e => {
      e.classList.add('hidden');
    });
    // Hides the alert field
    alert_profile.forEach(e => {
      e.classList.add('hidden');
    });

    // Hide cancel btn
    cancel.classList.add('hidden');

    // show edit btn
    edit.classList.remove('hidden');
  });
}
cancel_btn();

// Jquery Validition
$(document).ready(function () {
  // Name valid
  $('.edit-name').focusout(function () {
    var alNumRegex = /^([a-zA-Z\s]+)$/; //only letters and space

    if (!alNumRegex.test($('.edit-name').val())) {
      $('.alert-name').removeClass('hidden');
      $('.edit').addClass('hidden');
    } else {
      $('.alert-name').addClass('hidden');
      show_save();
    }
  });

  // Card number valid
  $('.edit-card').focusout(function () {
    var alNumRegex = /^([0-9]+)$/; //only numbers
    if (
      !alNumRegex.test($('.edit-card').val()) ||
      $('.edit-card').val().length != 16
    ) {
      $('.alert-card').removeClass('hidden');
      $('.edit').addClass('hidden');
    } else {
      $('.alert-card').addClass('hidden');
      show_save();
    }
  });

  /////////////////////////////////////////////////////////
  // Card date add '/' after 2 char
  $('.edit-date').on('keyup', function (e) {
    if (e.which && this.value.length === 2) {
      this.value += '/';
    }
    if (e.keyCode == 8) {
      this.value = '';
    }
  });
  // Card date valid
  $('.edit-date').focusout(function () {
    var alNumRegex = /^([0-9\/]+)$/; //only numbers
    if (
      !alNumRegex.test($('.edit-date').val()) ||
      $('.edit-date').val().length != 5
    ) {
      $('.alert-date').removeClass('hidden');
      $('.edit').addClass('hidden');
    } else {
      $('.alert-date').addClass('hidden');
      show_save();
    }
  });

  /////////////////////////////////////////////////////////
  // Card pin valid
  $('.edit-pin').focusout(function () {
    var alNumRegex = /^([0-9]+)$/; //only numbers
    if (
      !alNumRegex.test($('.edit-pin').val()) ||
      $('.edit-pin').val().length != 3
    ) {
      $('.alert-pin').removeClass('hidden');
      $('.edit').addClass('hidden');
    } else {
      $('.alert-pin').addClass('hidden');
      show_save();
    }
  });

  // Check if we can return the save btn
  function show_save() {
    let count = 0;
    alert_profile.forEach(e => {
      if (e.classList.contains('hidden')) {
        count++;
      }
    });

    // if all the 4 alert are hidden, show the btn
    if (count === 4) {
      edit.classList.remove('hidden');
    }
  }
});
