!function(o){function e(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return o[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=o,e.c=n,e.d=function(o,n,t){e.o(o,n)||Object.defineProperty(o,n,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(n,"a",n),n},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=11)}({11:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=n(12);n.n(t)},12:function(o,e){void 0===window.BlockBox&&(window.BlockBox={blocks:{}}),window.BlockBox.blocks.accordion={multiple:!0},function(o){o(".accordion__content").hide();var e=function(o,e){this.el=o||{},this.multiple=e||!1,this.el.find(".accordion__title").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};e.prototype.dropdown=function(e){var n=e.data.el,t=o(this),i=t.next();i.slideToggle(),t.parent().toggleClass("open"),e.data.multiple||n.find(".accordion__content").not(i).slideUp().parent().removeClass("open")},new e(o(".accordion.blockBox"),window.BlockBox.blocks.accordion.multiple)}(jQuery)}});