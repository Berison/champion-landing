"use strict";

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

var preloader = document.querySelector('.preloader');
removeActive(preloader, document.body, document.documentElement);

(function (w, d) {
  w.HelpCrunch = function () {
    w.HelpCrunch.q.push(arguments);
  };

  w.HelpCrunch.q = [];

  function r() {
    var s = document.createElement('script');
    s.async = 1;
    s.type = 'text/javascript';
    s.src = 'https://widget.helpcrunch.com/';
    (d.body || d.head).appendChild(s);
  }

  if (w.attachEvent) {
    w.attachEvent('onload', r);
  } else {
    w.addEventListener('load', r, false);
  }
})(window, document);

HelpCrunch('init', 'champion', {
  applicationId: 1,
  applicationSecret: 'V0n1NaoVvfbaiXT/h0vnadFu4F9C80zYVn75b7nUvzE/Ks4I35Z3qWHGjtZhqxbdIXgEIf6ZFQQkndF6lqkDEA=='
}); // Burger

var menuBtnOpen = document.querySelector('.header-inner .menu'),
    menuInner = document.querySelector('.menu-burger');
menuBtnOpen.addEventListener('click', function () {
  menuInner.classList.contains('active') ? removeActive(menuBtnOpen, menuInner, document.body, document.documentElement) : addActive(menuBtnOpen, menuInner, document.body, document.documentElement);
}); // Logic login

var btnOpenForm = document.querySelectorAll('.btn-form'),
    popupForm = document.querySelector('.popup-form'),
    popupFormForm = popupForm.querySelector('form'),
    popupFormPhone = popupForm.querySelector('input[type="tel"]'),
    popupFormQu = document.querySelector('.popup-form-new'),
    overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function () {
  removeActive(popupForm, document.body, document.documentElement, menuInner, overlay, popupFormQu);
});

if (!localStorage.getItem('phone')) {
  addActive(popupForm, document.body, document.documentElement);
} else {
  HelpCrunch('showChatWidget');
}

if (localStorage.getItem('phone')) {
  var user = {
    phone: localStorage.getItem('phone')
  };
  HelpCrunch('updateUser', user);
}

popupFormForm.addEventListener('submit', function (e) {
  e.preventDefault();
  localStorage.setItem('phone', popupFormPhone.value);
  removeActive(popupForm, document.body, document.documentElement);
  HelpCrunch('showChatWidget');
});
var btnCode = document.querySelector('.popup-form-new .btn-yes'),
    btnNoCode = document.querySelector('.popup-form-new .btn-no'),
    linkCode = 'https://chcplay.net/';
btnCode.addEventListener('click', function () {
  window.open(linkCode, '_blank');
});
btnNoCode.addEventListener('click', function () {
  HelpCrunch('openChat');
  HelpCrunch('sendUserMessage', 'Хочу получить код');
  removeActive(popupFormQu, document.body, document.documentElement, overlay);
});
btnOpenForm.forEach(function (elem) {
  elem.addEventListener('click', function () {
    addActive(popupFormQu, document.body, document.documentElement, overlay);
  });
});
var btnOpenChatCode = document.querySelector('.actions-inner__left a'),
    btnOpenChatMoney = document.querySelector('.actions-inner__right a');
btnOpenChatCode.addEventListener('click', function (e) {
  e.preventDefault();
  HelpCrunch('openChat');
  HelpCrunch('sendUserMessage', 'Хочу получить код');
});
btnOpenChatMoney.addEventListener('click', function (e) {
  e.preventDefault();
  HelpCrunch('openChat');
  HelpCrunch('sendUserMessage', 'Хочу вывести деньги');
}); // Swiper

var swiper = new Swiper('.swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    996: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  },
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  }
});
var listInnerRand = document.createElement('div');
listInnerRand.classList.add('info-inner__list');
var listInnerhtml = document.querySelector('.info-inner__right');

var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (var i = 0; i < 4; i++) {
  var liInner = document.createElement('div');
  var first = random(1000, 20000);
  var last = random(first, 30000);
  var phoneLast = random(0, 99);
  liInner.innerHTML = "\n    <strong>+380*******".concat(phoneLast, "</strong>\n    <span>\u0432\u044B\u0438\u0433\u0440\u044B\u0448: ").concat(last, " \u0433\u0440\u043D</span>\n    <p>\u0432\u0432\u043E\u0434: ").concat(first, " \u0433\u0440\u043D</p>\n    ");
  listInnerRand.innerHTML += liInner.outerHTML;
}

listInnerhtml.innerHTML = "<span>\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u0438: </span> ".concat(listInnerRand.outerHTML);