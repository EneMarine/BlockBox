!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1),n(4),n(7)},function(e,t,n){"use strict";var o=n(2),r=(n.n(o),n(3)),l=(n.n(r),wp.i18n.__),c=wp.blocks.registerBlockType,i=wp.editor,a=i.InnerBlocks,s=i.InspectorControls,u=i.PanelColorSettings;c("blockbox/section",{title:l("Section"),icon:"editor-table",category:"blockbox",keywords:[l("blockbox"),l("BlockBox")],supports:{anchor:!0,align:["wide","full"],html:!1},attributes:{align:{type:"string",default:"full"},bgColor:{type:"string"},txtColor:{type:"string"}},edit:function(e){var t={backgroundColor:e.attributes.bgColor,color:e.attributes.txtColor};return[wp.element.createElement(s,{key:e.clientId+"_inspector"},wp.element.createElement(u,{title:"Couleurs",colorSettings:[{value:e.attributes.bgColor,label:l("Background Color"),onChange:function(t){return e.setAttributes({bgColor:t})}},{value:e.attributes.txtColor,label:l("Text Color"),onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("section",{className:e.className,style:t,key:e.clientId+"_section"},"undefined"!==typeof e.insertBlocksAfter?wp.element.createElement(a,{renderAppender:function(){return wp.element.createElement(a.ButtonBlockAppender,null)}}):null)]},save:function(e){var t={backgroundColor:e.attributes.bgColor,color:e.attributes.txtColor};return wp.element.createElement("section",{className:e.className,style:t},wp.element.createElement("div",{className:"editorContent"},wp.element.createElement(a.Content,null)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(5),r=(n.n(o),n(6)),l=(n.n(r),wp.i18n.__),c=wp.blocks.registerBlockType,i=wp.editor.InnerBlocks;c("blockbox/intro",{title:l("Introduction"),icon:"megaphone",category:"blockbox",keywords:[l("blockbox"),l("BlockBox")],supports:{anchor:!0},edit:function(e){return wp.element.createElement("section",{className:e.className},"undefined"!==typeof e.insertBlocksAfter?wp.element.createElement(i,{allowedBlocks:"core/paragraph"}):null)},save:function(e){return wp.element.createElement("section",{className:e.className},wp.element.createElement(i.Content,null))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(8),r=(n.n(o),n(9)),l=(n.n(r),wp.i18n.__),c=wp.blocks.registerBlockType,i=wp.editor,a=i.InnerBlocks,s=i.RichText;c("blockbox/accordion",{title:l("Accord\xe9on"),icon:"editor-kitchensink",category:"blockbox",keywords:[l("blockbox"),l("BlockBox")],supports:{anchor:!0,align:["wide","full"],html:!1},attributes:{align:{type:"string"},title:{type:"string"}},edit:function(e){return wp.element.createElement("section",{className:e.className,key:e.clientId+"_section"},wp.element.createElement(s,{tagName:"h2",className:"accordion__title",value:e.attributes.title,onChange:function(t){return e.setAttributes({title:t})},placeholder:l("Entrer un titre","blockbox")}),wp.element.createElement("div",{className:"accordion__content"},wp.element.createElement("div",{className:"accordion__text"},"undefined"!==typeof e.insertBlocksAfter?wp.element.createElement(a,{renderAppender:function(){return wp.element.createElement(a.ButtonBlockAppender,null)}}):null)))},save:function(){return wp.element.createElement(a.Content,null)}})},function(e,t){},function(e,t){}]);