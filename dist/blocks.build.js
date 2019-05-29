!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(n(1),n(4),n(7),n(10));n.n(o)},function(e,t,n){"use strict";var o=n(2),r=(n.n(o),n(3)),l=(n.n(r),wp.i18n.__),c=wp.blocks.registerBlockType,a=wp.editor,i=a.InnerBlocks,s=a.InspectorControls,u=a.PanelColorSettings;c("blockbox/section",{title:l("Section"),icon:"editor-table",category:"blockbox",keywords:[l("blockbox"),l("BlockBox")],supports:{anchor:!0,align:["wide","full"],html:!1},attributes:{align:{type:"string",default:"full"},bgColor:{type:"string"},txtColor:{type:"string"}},edit:function(e){var t={backgroundColor:e.attributes.bgColor,color:e.attributes.txtColor};return[wp.element.createElement(s,{key:e.clientId+"_inspector"},wp.element.createElement(u,{title:"Couleurs",colorSettings:[{value:e.attributes.bgColor,label:l("Background Color"),onChange:function(t){return e.setAttributes({bgColor:t})}},{value:e.attributes.txtColor,label:l("Text Color"),onChange:function(t){return e.setAttributes({txtColor:t})}}]})),wp.element.createElement("section",{className:e.className,style:t,key:e.clientId+"_section"},"undefined"!==typeof e.insertBlocksAfter?wp.element.createElement(i,{renderAppender:function(){return wp.element.createElement(i.ButtonBlockAppender,null)}}):null)]},save:function(e){var t={backgroundColor:e.attributes.bgColor,color:e.attributes.txtColor};return wp.element.createElement("section",{className:e.className,style:t},wp.element.createElement("div",{className:"editorContent"},wp.element.createElement(i.Content,null)))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(5),r=(n.n(o),n(6)),l=(n.n(r),wp.i18n.__),c=wp.blocks.registerBlockType,a=wp.editor.InnerBlocks;c("blockbox/intro",{title:l("Introduction"),icon:"megaphone",category:"blockbox",keywords:[l("blockbox"),l("BlockBox")],supports:{anchor:!0},edit:function(e){return wp.element.createElement("section",{className:e.className},"undefined"!==typeof e.insertBlocksAfter?wp.element.createElement(a,{allowedBlocks:"core/paragraph"}):null)},save:function(e){return wp.element.createElement("section",{className:e.className},wp.element.createElement(a.Content,null))}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(8),r=(n.n(o),n(9)),l=(n.n(r),wp.i18n.__),c=wp.blocks.registerBlockType,a=wp.editor,i=a.InnerBlocks,s=a.RichText;c("blockbox/accordion",{title:l("Accord\xe9on"),icon:"editor-kitchensink",category:"blockbox",keywords:[l("blockbox"),l("BlockBox")],supports:{anchor:!0,align:["wide","full"],html:!1},attributes:{align:{type:"string"},title:{type:"string"}},edit:function(e){return wp.element.createElement("section",{className:e.className,key:e.clientId+"_section"},wp.element.createElement(s,{tagName:"h2",className:"accordion__title",value:e.attributes.title,onChange:function(t){return e.setAttributes({title:t})},placeholder:l("Add a title","blockbox")}),wp.element.createElement("div",{className:"accordion__content"},wp.element.createElement("div",{className:"accordion__text"},"undefined"!==typeof e.insertBlocksAfter?wp.element.createElement(i,{renderAppender:function(){return wp.element.createElement(i.ButtonBlockAppender,null)}}):null)))},save:function(){return wp.element.createElement(i.Content,null)}})},function(e,t){},function(e,t){},function(e,t){var n=wp.i18n.__,o=window.wp.element,r=o.createElement,l=o.Fragment,c=window.wp.richText,a=c.registerFormatType,i=c.toggleFormat,s=c.applyFormat,u=c.removeFormat,p=c.getActiveFormat,m=window.wp.editor,b=m.RichTextToolbarButton,d=m.RichTextShortcut,f=m.InspectorControls,k=m.PanelColorSettings,g=[{name:"sup",title:n("Superscript","blockbox"),character:"."},{name:"sub",title:n("Subscript","blockbox"),character:","}],w=[{name:"color",title:n("Selection Text Color","blockbox")},{name:"background-color",title:n("Selection Background Color","blockbox")}];g.forEach(function(e){var t=e.name,n=e.title,o=e.character,c="blockbox/"+t;a(c,{title:n,tagName:t,className:null,edit:function(e){var a=e.isActive,s=e.value,u=e.onChange,p=function(){return u(i(s,{type:c}))};return r(l,null,r(d,{type:"primary",character:o,onUse:p}),r(b,{title:n,onClick:p,isActive:a,shortcutType:"primary",shortcutCharacter:o,className:"toolbar-button-with-text toolbar-button__blockbox-"+t}))}})}),w.forEach(function(e){var t=e.name,o=e.title,l="blockbox/"+t;a(l,{title:o,tagName:"span",className:t,attributes:{style:"style"},edit:function(e){var c=e.isActive,a=e.value,i=e.onChange,m=void 0;if(c){m=p(a,l).attributes.style.replace(new RegExp("^"+t+":\\s*"),"")}return r(f,null,r(k,{title:o,initialOpen:!0,colorSettings:[{value:m,onChange:function(e){if(e)return void i(s(a,{type:l,attributes:{style:t+":"+e}}));i(u(a,l))},label:n("Apply colour to the selected text.","blockbox")}]}))}})})}]);