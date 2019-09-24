/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)("a.scroll").click(function () {
    (0, _jquery2.default)("html, body").animate({
      scrollTop: (0, _jquery2.default)((0, _jquery2.default)(this).attr("href")).offset().top + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });

  // Input mask
  if ((0, _jquery2.default)('.phone').length > 0) {
    (0, _jquery2.default)(".phone").inputmask({
      mask: "8 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,
      onincomplete: function onincomplete() {
        (0, _jquery2.default)(this).closest("form").addClass('error-phone');
        (0, _jquery2.default)(this).addClass('error');
        (0, _jquery2.default)(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер');
      },
      oncomplete: function oncomplete() {
        (0, _jquery2.default)(this).closest("form").removeClass('error-phone');
        (0, _jquery2.default)(this).removeClass('error');
        (0, _jquery2.default)(this).siblings(".error_phone").removeClass('error').html('');
      }
    });
  }
  (0, _jquery2.default)('input.phone').on('keydown', function (event) {
    if (event.keyCode === 13 && !(0, _jquery2.default)(this).inputmask("isComplete")) {
      event.preventDefault();
      (0, _jquery2.default)(this).blur();
      return false;
    }
  });

  // Slider/
  if ((0, _jquery2.default)('.slider_logo').length > 0) {
    var $slickElementLogo = (0, _jquery2.default)('.slider.slider_logo');
    $slickElementLogo.slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
  if ((0, _jquery2.default)('.slider_review').length > 0) {
    var $slickElementReview = (0, _jquery2.default)('.slider.slider_review');
    $slickElementReview.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      infinite: true
    });
  }
  if ((0, _jquery2.default)('.slider_catalog').length > 0) {
    var $slickElementCatalog = (0, _jquery2.default)('.slider.slider_catalog');
    $slickElementCatalog.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      infinite: true
    });
  }

  // Task Tabs
  (0, _jquery2.default)(".task.task_tab").on("click", function () {
    if ((0, _jquery2.default)(this).hasClass("task--active")) {
      (0, _jquery2.default)(this).removeClass("task--active");
      (0, _jquery2.default)(this).find(".task__tab-content").slideUp();
    } else {
      if ((0, _jquery2.default)(".task.task_tab").hasClass("task--active")) {
        (0, _jquery2.default)(".task.task_tab.task--active .task__tab-content").slideUp();
        (0, _jquery2.default)(".task.task_tab.task--active").removeClass("task--active");
      }
      (0, _jquery2.default)(this).addClass("task--active");
      (0, _jquery2.default)(this).find(".task__tab-content").slideDown();
    }
  });

  // Mobile Navbar
  (0, _jquery2.default)(".navbar-toggle#nav").on("click", function () {
    if (!(0, _jquery2.default)(this).hasClass("navbar-toggle--active")) {
      (0, _jquery2.default)(this).addClass("navbar-toggle--active");
      (0, _jquery2.default)(".navbar-mobile").addClass("navbar-mobile--active");
      (0, _jquery2.default)(".navbar-mobile").slideDown();
    } else {
      (0, _jquery2.default)(this).removeClass("navbar-toggle--active");
      (0, _jquery2.default)(".navbar-mobile").removeClass("navbar-mobile--active");
      (0, _jquery2.default)(".navbar-mobile").slideUp();
    }
  });
  (0, _jquery2.default)(document).mouseup(function (e) {
    // событие клика по веб-документу
    var dropdownActive = (0, _jquery2.default)(".navbar-mobile.navbar-mobile--active"); // элемент

    if (!dropdownActive.is(e.target) // клик был не по блоку
    && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
    && !(0, _jquery2.default)(".navbar-toggle#nav").is(e.target)) {
      (0, _jquery2.default)(".navbar-toggle").removeClass("navbar-toggle--active");
      dropdownActive.removeClass("navbar-mobile--active");
      (0, _jquery2.default)(".navbar-mobile").slideUp();
    }
  });
  // Hide Navigation on Mobile
  (0, _jquery2.default)(window).resize(function () {
    if ((0, _jquery2.default)(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches) {
      (0, _jquery2.default)(".navbar-toggle").removeClass("navbar-toggle--active");
      (0, _jquery2.default)(".navbar-mobile.navbar-mobile--active").removeClass("navbar-mobile--active");
      (0, _jquery2.default)(".navbar-mobile").slideUp();
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);