"use strict";

// Burger
var menuBtnOpen = document.querySelector('.header-inner .menu'),
    menuInner = document.querySelector('.menu-burger');

var addActive = function addActive() {
  for (var _len = arguments.length, elems = new Array(_len), _key = 0; _key < _len; _key++) {
    elems[_key] = arguments[_key];
  }

  return elems.forEach(function (elem) {
    return elem.classList.add('active');
  });
};

var removeActive = function removeActive() {
  for (var _len2 = arguments.length, elems = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    elems[_key2] = arguments[_key2];
  }

  return elems.forEach(function (elem) {
    return elem.classList.remove('active');
  });
};

menuBtnOpen.addEventListener('click', function () {
  menuInner.classList.contains('active') ? removeActive(menuBtnOpen, menuInner, document.body, document.documentElement) : addActive(menuBtnOpen, menuInner, document.body, document.documentElement);
});
var btnOpenForm = document.querySelectorAll('.btn-form'),
    popupForm = document.querySelector('.popup-form'),
    popupFormClose = document.querySelector('.popup-form .close'),
    popupCloseImg = document.querySelector('.popup-form > img');
btnOpenForm.forEach(function (elem) {
  return elem.addEventListener('click', function () {
    return addActive(document.body, document.documentElement, popupForm);
  });
});
popupCloseImg.addEventListener('click', function () {
  return removeActive(menuBtnOpen, menuInner, document.body, document.documentElement, popupForm);
});
popupFormClose.addEventListener('click', function () {
  return removeActive(menuBtnOpen, menuInner, document.body, document.documentElement, popupForm);
});