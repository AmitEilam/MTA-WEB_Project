/////////////////////////////////////////////////////////
// JQuery

$(document).ready(function () {
  /////////////////////////////////////////////////////////
  // First name valid
  $('.form-name').focusout(function () {
    var alNumRegex = /^([a-zA-Z]+)$/; //only letters

    if (!alNumRegex.test($('.form-name').val())) {
      $('.name').removeClass('hidden');
    } else {
      $('.name').addClass('hidden');
    }
  });

  /////////////////////////////////////////////////////////
  // Last name valid
  $('.form-last').focusout(function () {
    var alNumRegex = /^([a-zA-Z]+)$/; //only letters

    if (!alNumRegex.test($('.form-last').val())) {
      $('.last').removeClass('hidden');
    } else {
      $('.last').addClass('hidden');
    }
  });

  /////////////////////////////////////////////////////////
  // City valid
  $('.form-city').focusout(function () {
    var alNumRegex = /^([a-zA-Z\s]+)$/; //only letters and space

    if (!alNumRegex.test($('.form-city').val())) {
      $('.city').removeClass('hidden');
    } else {
      $('.city').addClass('hidden');
    }
  });

  /////////////////////////////////////////////////////////
  // Address valid
  $('.form-address').focusout(function () {
    var alNumRegex = /^([a-zA-Z0-9\s]+)$/; //only letters & numbers

    if (!alNumRegex.test($('.form-address').val())) {
      $('.address').removeClass('hidden');
    } else {
      $('.address').addClass('hidden');
    }
  });

  /////////////////////////////////////////////////////////
  // Card number valid
  $('.form-card').focusout(function () {
    var alNumRegex = /^([0-9]+)$/; //only numbers
    if (
      !alNumRegex.test($('.form-card').val()) ||
      $('.form-card').val().length != 16
    ) {
      $('.card').removeClass('hidden');
    } else {
      $('.card').addClass('hidden');
    }
  });

  /////////////////////////////////////////////////////////
  // Card pin valid
  $('.form-pin').focusout(function () {
    var alNumRegex = /^([0-9]+)$/; //only numbers
    if (
      !alNumRegex.test($('.form-pin').val()) ||
      $('.form-pin').val().length != 3
    ) {
      $('.pin').removeClass('hidden');
    } else {
      $('.pin').addClass('hidden');
    }
  });
});

// Prevent Default
const buy = document.querySelector('.buy-btn');

buy.addEventListener('click', function (e) {
  e.preventDefault();
});
