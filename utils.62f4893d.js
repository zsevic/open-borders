parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XGi3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IDB_DATABASE_NAME=exports.OBJECT_STORE=exports.COUNTRY_TYPES=void 0;const E="CLOSED_BORDER",e="NEGATIVE_TEST_REQUIRED",o="NO_TEST_REQUIRED",t="QUARANTINE_REQUIRED",T=[E,e,o,t];exports.COUNTRY_TYPES=T;const _="otvorene-granice";exports.OBJECT_STORE=_;const s="".concat(_,"-store");exports.IDB_DATABASE_NAME=s;
},{}],"IOwx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.searchHandler=exports.getAllCountries=exports.resetCountriesHtml=exports.loadCountriesHtml=exports.adaptCSSBrowser=exports.hideLoader=void 0;var e=require("./constants");const t=e=>e.split(" ").map(e=>"I"===e?e.toLowerCase():"SAD"===e?e:e.charAt(0)+e.substring(1).toLowerCase()).join(" "),n=()=>{document.getElementById("loader").innerHTML=""};exports.hideLoader=n;const o=()=>{const e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1},r=()=>navigator.userAgent.match(/instagram/i),s=()=>{(o()||r())&&$(".group-tabs").css("font-size","12px")};exports.adaptCSSBrowser=s;const l=o=>{if(0===o.length)return;n();const r=o.reduce((e,t)=>(e[t.status]?e[t.status].push(t):e[t.status]=[t],e),{});e.COUNTRY_TYPES.forEach(e=>{var n;const o=document.getElementById(e),s=document.getElementById("".concat(e,"_BADGE")),l=document.getElementById("".concat(e,"_INFO")),c=document.getElementById("".concat(e,"_TAB")),a=document.getElementById("".concat(e,"_TAB_BADGE")),d=document.getElementById("".concat(e,"_TAB_INFO"));null===(n=r[e])||void 0===n||n.forEach(e=>{let{name:n,info:r,flag:s}=e;const l='<div class="list-group-item list-group-item-action flex-column align-items-start">\n      <div class="d-flex w-100 justify-content-between">\n        <h5 class="mb-1 text-info country">'.concat(s," ").concat(t(n),'</h5>\n        </div>\n        <p class="mb-1 text-muted" style="word-wrap:break-word">').concat(r,"</p></div>");o.innerHTML+=l,c.innerHTML+=l});const{length:i}=r[e],m=i>0?"none":"";l.style.display=m,d.style.display=m,s.innerHTML=i,a.innerHTML=i})};exports.loadCountriesHtml=l;const c=()=>{e.COUNTRY_TYPES.forEach(e=>{const t=document.getElementById(e),n=document.getElementById("".concat(e,"_TAB"));t.innerHTML="",n.innerHTML=""})};exports.resetCountriesHtml=c;const a=()=>{for(let t=0;t<e.COUNTRY_TYPES.length;t+=1){const n=e.COUNTRY_TYPES[t],o=[].filter.call(document.getElementById("".concat(n,"_TAB")).children,e=>"none"!==e.style.display).length;if(0!==o&&document.getElementById("".concat(n,"_TAB_LINK")).classList.contains("active"))return;if(0!==o)return document.getElementById("".concat(n,"_TAB_LINK")).click()}},d=()=>{e.COUNTRY_TYPES.forEach(e=>{const[t,...n]=[].filter.call(document.getElementById("".concat(e,"_TAB")).children,e=>"none"!==e.style.display),[o,...r]=[].filter.call(document.getElementById(e).children,e=>"none"!==e.style.display);o&&t&&(t.classList.add("border-top"),o.classList.add("border-top"),[...r,...n].forEach(e=>{e.classList.remove("border-top")}))})},i=()=>{e.COUNTRY_TYPES.forEach(e=>{const t=[].filter.call(document.getElementById(e).children,e=>"none"!==e.style.display).length,n=document.getElementById("".concat(e,"_BADGE")),o=document.getElementById("".concat(e,"_TAB_BADGE")),r=document.getElementById("".concat(e,"_INFO")),s=document.getElementById("".concat(e,"_TAB_INFO")),l=t>0?"none":"";r.style.display=l,s.style.display=l,n.innerHTML=t,o.innerHTML=t})},m=e=>{const t=Object.fromEntries(Array.from(e).map((e,t)=>{const[n]=e.split(" (");return[n,t+1]}));$("#input-search").autocomplete({dropdownClass:"dropdown-menu w-100",highlightClass:"text-info",maximumItems:5,onSelectItem:p,source:t,treshold:1})},u=e=>{e.forEach(e=>{e.parentElement.parentElement.style.display=""}),i(),d(),$("#btn-clear").hide()};exports.getAllCountries=u;const p=e=>{var t;const n=null==e?void 0:e.label,o=(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)||n,r=document.querySelectorAll(".country");if(!o)return u(r);$("#btn-clear").show(),n&&gtag("event","click",{event_category:"country",event_label:n});const s=new Set;r.forEach(e=>{const[,...t]=e.innerHTML.split(" "),r=t.join(" ");r.toLowerCase().startsWith(o.toLowerCase().trim())?(n&&(e.parentElement.parentElement.style.display=""),s.add(r)):n&&(e.parentElement.parentElement.style.display="none")}),m(s),n&&a(),i(),d()};exports.searchHandler=p;
},{"./constants":"XGi3"}]},{},["IOwx"], null)
//# sourceMappingURL=/utils.62f4893d.js.map