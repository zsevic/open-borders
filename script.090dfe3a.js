parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
const t="NEGATIVE_TEST_REQUIRED",s="OPEN_BORDER",e="QUARANTINE_REQUIRED",n=[s,t,e],o=t=>t.split(" ").map(t=>"I"===t?t.toLowerCase():t.charAt(0)+t.substring(1).toLowerCase()).join(" "),c=async()=>{try{const s="https://open-borders.herokuapp.com",e=(await fetch("".concat(s,"/api/countries")).then(t=>t.json())).reduce((t,s)=>(t[s.status]?t[s.status].push(s):t[s.status]=[s],t),{});n.forEach(t=>{const s=document.getElementById(t);e[t].forEach(t=>{let{name:e,info:n}=t;const c='<div class="list-group-item list-group-item-action flex-column align-items-start">\n        <div class="d-flex w-100 justify-content-between">\n          <h5 class="mb-1 text-info">'.concat(o(e),'</h5>\n          </div>\n          <p class="mb-1 text-muted">').concat(n,"</p></div>");s.innerHTML+=c})})}catch(t){console.error(t)}};c();
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/open-borders/script.090dfe3a.js.map