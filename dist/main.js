(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},426:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(667),c=t.n(s),d=new URL(t(462),t.b),l=new URL(t(850),t.b),u=new URL(t(137),t.b),p=a()(r()),h=c()(d),m=c()(l),f=c()(u);p.push([n.id,"@font-face {\n  font-family: 'Gemosh';\n  src: url("+h+");\n}\n@font-face {\n  font-family: 'Varela';\n  src: url("+m+");\n}\n:root {\n  --background-img: url("+f+");\n  --header-color: rgb(250, 255, 253, 0.8);\n  --secondary-header-color: rgb(231, 222, 205, 0.7);\n  --tab-background-color: rgb(215, 187, 168, 0.85);\n  --heading-font: 'Gemosh', sans-serif;\n  --content-font: 'Varela', sans-serif;\n  --tab-btn-border-color: rgb(107, 94, 98, 0.8);\n  --default-transition: all 0.2s ease-in-out;\n  --h1-color: #0e273c;\n}\nbody {\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  font-family: var(--content-font);\n\n  background: no-repeat var(--background-img);\n  background-size: cover;\n  background-attachment: fixed;\n\n  box-sizing: border-box;\n}\np {\n  margin: 0;\n}\nh1 {\n  margin: 0;\n  font-family: var(--heading-font);\n  color: var(--h1-color);\n}\nheader {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2rem;\n\n  background-color: var(--header-color);\n}\nheader > h1 {\n  font-size: 4rem;\n}\nheader button {\n  position: relative;\n  font-size: 1.5rem;\n  appearance: none;\n  border: none;\n  padding: 0.6rem 0;\n  width: 13rem;\n  background-color: inherit;\n  transition: var(--default-transition);\n}\nheader button:nth-child(2) {\n  border-right: 2px solid var(--tab-btn-border-color);\n  border-left: 2px solid var(--tab-btn-border-color);\n}\nheader button:hover {\n  padding-top: 0;\n  transition: var(--default-transition);\n}\nbutton:hover {\n  cursor: pointer;\n}\n.btn-container {\n  display: flex;\n  flex-flow: row wrap;\n  padding: 1rem;\n}\n#content {\n  flex: 1 0 auto;\n\n  display: flex;\n  justify-content: center;\n\n  padding: 2rem;\n}\n.tab-content {\n  height: fit-content;\n  background-color: var(--tab-background-color);\n  border-radius: 2rem;\n  font-size: 1.2rem;\n\n  width: max(40%, 30rem);\n  padding: 2rem 4rem;\n\n  display: none;\n  flex-flow: column;\n  align-items: center;\n  gap: 2rem;\n}\n.tab-content > h1 {\n  font-size: 3rem;\n}\n.active {\n  display: flex;\n}\n.dish-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n  gap: 3rem;\n}\n.dish {\n  /* height: 20rem; */\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n\n  gap: 2rem;\n}\n.dish > img {\n  height: 12rem;\n}\n.contacts > p {\n  align-self: flex-start;\n}",""]);const b=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var m=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},462:(n,e,t)=>{n.exports=t.p+"9d4f840abe192d9cb5da.ttf"},850:(n,e,t)=>{n.exports=t.p+"6b0ad79431843e696f58.ttf"},137:(n,e,t)=>{n.exports=t.p+"cb97403e06efa87ab60e.webp"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=function(n,e,t){const o=document.createElement("div"),r=document.createElement("img"),i=document.createElement("h1"),a=document.createElement("p");return o.classList.add("dish"),r.src=e,i.textContent=n,a.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur debitis pariatur deleniti, unde et.",o.appendChild(i),o.appendChild(r),o.appendChild(a),t.appendChild(o),o};function e(n){const e=document.querySelector(".btn-container"),t=document.createElement("button");return t.textContent=n,e.appendChild(t),t}function o(n,e){n.addEventListener("click",function(n){return function(){n.classList.contains("active")||(document.querySelectorAll(".tab-content").forEach((n=>n.classList.remove("active"))),n.classList.add("active"))}}(e))}var r=t(379),i=t.n(r),a=t(795),s=t.n(a),c=t(569),d=t.n(c),l=t(565),u=t.n(l),p=t(216),h=t.n(p),m=t(589),f=t.n(m),b=t(735),g={};g.styleTagTransform=f(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=h(),i()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var v=t(426),y={};y.styleTagTransform=f(),y.setAttributes=u(),y.insert=d().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),i()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.createElement("header"),e=document.createElement("h1");e.textContent="Sushi Sanshin",n.appendChild(e);const t=document.createElement("div");t.classList.add("btn-container"),n.appendChild(t);const o=document.createElement("div");o.setAttribute("id","content"),document.body.appendChild(n),document.body.appendChild(o)}();const x=document.getElementById("content"),w=e("Home"),C=e("Menu"),E=e("Contacts"),S=function(n){const e=document.createElement("div"),t=document.createElement("h1");return e.classList.add("tab-content"),e.classList.add("home"),e.classList.add("active"),t.textContent="About",e.appendChild(t),["At the top-class, lunchtime-only Sushi Sanshin not far from Osaka Castle, you can devour delicious sushi while soaking in the beauty of the natural light in a quaint traditional Japanese house. Sushi Sanshin has won the hearts of guests, sushi rice brokers, and producers through its delightful cuisine and positive, engaging style. Not afraid of effecting change in a deeply traditional facet of Japanese cuisine, the chef serves as a role model for up-and-coming sushi artisans around Japan.","The rising star of the Osaka sushi world, Sushi Sanshin, is found in a residential neighborhood away from the busy areas of Umeda and Minami. The sushi restaurant occupies one building in a traditional row house where a soba restaurant once stood. The tasteful exterior has a wabi-sabi feel and a fence of many fine tree branches. In spring, guests can enjoy the soft pink light created by sunshine and cherry blossoms at the adjacent park in an interior designed for the sunlight to spill in. Chef Ishibuchi had passed by the building in its days as a soba restaurant, thinking it would make a great location someday, only to find it available when his preparations for going independent began. He felt it was fate and signed a contract for the property immediately. These days, he also runs the tea room next door, welcoming guests to relax until their reservation time or for an after-lunch dessert."].forEach((n=>function(n,e){const t=document.createElement("p");t.textContent=n,e.appendChild(t)}(n,e))),n.appendChild(e),e}(x),k=function(e){const t=document.createElement("div"),o=document.createElement("div"),r=document.createElement("h1"),i=document.createElement("div");t.classList.add("tab-content"),t.classList.add("menu"),i.classList.add("dish-container"),r.textContent="Menu",o.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, odio soluta? Debitis magnam dolore quod eaque sapiente sint corporis facere?";for(let e=0;e<4;e+=1)n(`Dish ${e}`,`../img/sushi${e}.webp`,i);return t.appendChild(r),t.appendChild(o),t.appendChild(i),e.appendChild(t),t}(x),z=function(n){const e=document.createElement("div"),t=document.createElement("p"),o=document.createElement("h1"),r=document.createElement("p"),i=document.createElement("p"),a=document.createElement("p");return e.classList.add("tab-content"),e.classList.add("contacts"),o.textContent="Contacts",t.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, odio soluta? Debitis magnam dolore quod eaque sapiente sint corporis facere?",r.textContent="📞 (+84)091 5997703",a.textContent="📫 someramdomemail@something.com",i.textContent="🏠 Somewhere far from you",e.appendChild(o),e.appendChild(t),e.appendChild(r),e.appendChild(a),e.appendChild(i),n.appendChild(e),e}(x);o(w,S),o(C,k),o(E,z)})()})();