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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/*!***********************!*\
  !*** ./src/fronts.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_front_js__ = __webpack_require__(/*! ./accordion/front.js */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion_front_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__accordion_front_js__);\n/**\r\n * Gutenberg Blocks\r\n *\r\n * All blocks related JavaScript files should be imported here.\r\n * You can create a new block folder in this dir and include code\r\n * for that block here as well.\r\n *\r\n * All blocks should be included here since this is the file that\r\n * Webpack is compiling as the input file.\r\n */\n\n//import './block/front.js';\n// import './section/front.js';\n// import './intro/front.js';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnJvbnRzLmpzPzQ2OWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEd1dGVuYmVyZyBCbG9ja3NcclxuICpcclxuICogQWxsIGJsb2NrcyByZWxhdGVkIEphdmFTY3JpcHQgZmlsZXMgc2hvdWxkIGJlIGltcG9ydGVkIGhlcmUuXHJcbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXHJcbiAqIGZvciB0aGF0IGJsb2NrIGhlcmUgYXMgd2VsbC5cclxuICpcclxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcclxuICogV2VicGFjayBpcyBjb21waWxpbmcgYXMgdGhlIGlucHV0IGZpbGUuXHJcbiAqL1xuXG4vL2ltcG9ydCAnLi9ibG9jay9mcm9udC5qcyc7XG4vLyBpbXBvcnQgJy4vc2VjdGlvbi9mcm9udC5qcyc7XG4vLyBpbXBvcnQgJy4vaW50cm8vZnJvbnQuanMnO1xuaW1wb3J0ICcuL2FjY29yZGlvbi9mcm9udC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJvbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),

/***/ 14:
/*!********************************!*\
  !*** ./src/accordion/front.js ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("if (window.BlockBox === undefined) {\n\twindow.BlockBox = {\n\t\tblocks: {}\n\t};\n}\nwindow.BlockBox.blocks.accordion = {\n\tmultiple: true\n};\n\n(function ($) {\n\t$('.accordion__content').hide();\n\n\tvar Accordion = function Accordion(el, multiple) {\n\t\tthis.el = el || {};\n\t\tthis.multiple = multiple || false;\n\n\t\tvar links = this.el.find('.accordion__title');\n\t\tlinks.on('click', {\n\t\t\tel: this.el,\n\t\t\tmultiple: this.multiple\n\t\t}, this.dropdown);\n\t};\n\n\tAccordion.prototype.dropdown = function (e) {\n\t\tvar $el = e.data.el;\n\t\tvar $this = $(this);\n\t\tvar $next = $this.next();\n\n\t\t$next.slideToggle();\n\t\t$this.parent().toggleClass('open');\n\n\t\tif (!e.data.multiple) {\n\t\t\t$el.find('.accordion__content').not($next).slideUp().parent().removeClass('open');\n\t\t}\n\t};\n\n\tnew Accordion($('.accordion.blockBox'), window.BlockBox.blocks.accordion.multiple);\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3JkaW9uL2Zyb250LmpzPzFiMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaWYgKHdpbmRvdy5CbG9ja0JveCA9PT0gdW5kZWZpbmVkKSB7XG5cdHdpbmRvdy5CbG9ja0JveCA9IHtcblx0XHRibG9ja3M6IHt9XG5cdH07XG59XG53aW5kb3cuQmxvY2tCb3guYmxvY2tzLmFjY29yZGlvbiA9IHtcblx0bXVsdGlwbGU6IHRydWVcbn07XG5cbihmdW5jdGlvbiAoJCkge1xuXHQkKCcuYWNjb3JkaW9uX19jb250ZW50JykuaGlkZSgpO1xuXG5cdHZhciBBY2NvcmRpb24gPSBmdW5jdGlvbiBBY2NvcmRpb24oZWwsIG11bHRpcGxlKSB7XG5cdFx0dGhpcy5lbCA9IGVsIHx8IHt9O1xuXHRcdHRoaXMubXVsdGlwbGUgPSBtdWx0aXBsZSB8fCBmYWxzZTtcblxuXHRcdHZhciBsaW5rcyA9IHRoaXMuZWwuZmluZCgnLmFjY29yZGlvbl9fdGl0bGUnKTtcblx0XHRsaW5rcy5vbignY2xpY2snLCB7XG5cdFx0XHRlbDogdGhpcy5lbCxcblx0XHRcdG11bHRpcGxlOiB0aGlzLm11bHRpcGxlXG5cdFx0fSwgdGhpcy5kcm9wZG93bik7XG5cdH07XG5cblx0QWNjb3JkaW9uLnByb3RvdHlwZS5kcm9wZG93biA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyICRlbCA9IGUuZGF0YS5lbDtcblx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdHZhciAkbmV4dCA9ICR0aGlzLm5leHQoKTtcblxuXHRcdCRuZXh0LnNsaWRlVG9nZ2xlKCk7XG5cdFx0JHRoaXMucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuXHRcdGlmICghZS5kYXRhLm11bHRpcGxlKSB7XG5cdFx0XHQkZWwuZmluZCgnLmFjY29yZGlvbl9fY29udGVudCcpLm5vdCgkbmV4dCkuc2xpZGVVcCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0fVxuXHR9O1xuXG5cdG5ldyBBY2NvcmRpb24oJCgnLmFjY29yZGlvbi5ibG9ja0JveCcpLCB3aW5kb3cuQmxvY2tCb3guYmxvY2tzLmFjY29yZGlvbi5tdWx0aXBsZSk7XG59KShqUXVlcnkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjY29yZGlvbi9mcm9udC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ })

/******/ });