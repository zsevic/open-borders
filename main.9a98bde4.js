parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"a1XM":[function(require,module,exports) {
var global = arguments[3];

var t=arguments[3],e=200,r="__lodash_hash_undefined__",n=1,o=2,i=9007199254740991,u="[object Arguments]",a="[object Array]",c="[object AsyncFunction]",s="[object Boolean]",f="[object Date]",l="[object Error]",_="[object Function]",h="[object GeneratorFunction]",p="[object Map]",v="[object Number]",y="[object Null]",b="[object Object]",d="[object Promise]",g="[object Proxy]",j="[object RegExp]",w="[object Set]",m="[object String]",z="[object Symbol]",A="[object Undefined]",O="[object WeakMap]",S="[object ArrayBuffer]",x="[object DataView]",k="[object Float32Array]",E="[object Float64Array]",F="[object Int8Array]",P="[object Int16Array]",$="[object Int32Array]",U="[object Uint8Array]",B="[object Uint8ClampedArray]",I="[object Uint16Array]",L="[object Uint32Array]",T=/[\\^$.*+?()[\]{}|]/g,M=/^\[object .+?Constructor\]$/,D=/^(?:0|[1-9]\d*)$/,R={};R[k]=R[E]=R[F]=R[P]=R[$]=R[U]=R[B]=R[I]=R[L]=!0,R[u]=R[a]=R[S]=R[s]=R[x]=R[f]=R[l]=R[_]=R[p]=R[v]=R[b]=R[j]=R[w]=R[m]=R[O]=!1;var C="object"==typeof t&&t&&t.Object===Object&&t,N="object"==typeof self&&self&&self.Object===Object&&self,V=C||N||Function("return this")(),W="object"==typeof exports&&exports&&!exports.nodeType&&exports,G=W&&"object"==typeof module&&module&&!module.nodeType&&module,q=G&&G.exports===W,H=q&&C.process,J=function(){try{return H&&H.binding&&H.binding("util")}catch(t){}}(),K=J&&J.isTypedArray;function Q(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i}function X(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}function Y(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function Z(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function tt(t){return function(e){return t(e)}}function et(t,e){return t.has(e)}function rt(t,e){return null==t?void 0:t[e]}function nt(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function ot(t,e){return function(r){return t(e(r))}}function it(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var ut=Array.prototype,at=Function.prototype,ct=Object.prototype,st=V["__core-js_shared__"],ft=at.toString,lt=ct.hasOwnProperty,_t=function(){var t=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ht=ct.toString,pt=RegExp("^"+ft.call(lt).replace(T,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vt=q?V.Buffer:void 0,yt=V.Symbol,bt=V.Uint8Array,dt=ct.propertyIsEnumerable,gt=ut.splice,jt=yt?yt.toStringTag:void 0,wt=Object.getOwnPropertySymbols,mt=vt?vt.isBuffer:void 0,zt=ot(Object.keys,Object),At=Oe(V,"DataView"),Ot=Oe(V,"Map"),St=Oe(V,"Promise"),xt=Oe(V,"Set"),kt=Oe(V,"WeakMap"),Et=Oe(Object,"create"),Ft=Be(At),Pt=Be(Ot),$t=Be(St),Ut=Be(xt),Bt=Be(kt),It=yt?yt.prototype:void 0,Lt=It?It.valueOf:void 0;function Tt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(){this.__data__=Et?Et(null):{},this.size=0}function Dt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Rt(t){var e=this.__data__;if(Et){var n=e[t];return n===r?void 0:n}return lt.call(e,t)?e[t]:void 0}function Ct(t){var e=this.__data__;return Et?void 0!==e[t]:lt.call(e,t)}function Nt(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Et&&void 0===e?r:e,this}function Vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Wt(){this.__data__=[],this.size=0}function Gt(t){var e=this.__data__,r=le(e,t);return!(r<0)&&(r==e.length-1?e.pop():gt.call(e,r,1),--this.size,!0)}function qt(t){var e=this.__data__,r=le(e,t);return r<0?void 0:e[r][1]}function Ht(t){return le(this.__data__,t)>-1}function Jt(t,e){var r=this.__data__,n=le(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function Kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Qt(){this.size=0,this.__data__={hash:new Tt,map:new(Ot||Vt),string:new Tt}}function Xt(t){var e=Ae(this,t).delete(t);return this.size-=e?1:0,e}function Yt(t){return Ae(this,t).get(t)}function Zt(t){return Ae(this,t).has(t)}function te(t,e){var r=Ae(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function ee(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new Kt;++e<r;)this.add(t[e])}function re(t){return this.__data__.set(t,r),this}function ne(t){return this.__data__.has(t)}function oe(t){var e=this.__data__=new Vt(t);this.size=e.size}function ie(){this.__data__=new Vt,this.size=0}function ue(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function ae(t){return this.__data__.get(t)}function ce(t){return this.__data__.has(t)}function se(t,r){var n=this.__data__;if(n instanceof Vt){var o=n.__data__;if(!Ot||o.length<e-1)return o.push([t,r]),this.size=++n.size,this;n=this.__data__=new Kt(o)}return n.set(t,r),this.size=n.size,this}function fe(t,e){var r=Te(t),n=!r&&Le(t),o=!r&&!n&&De(t),i=!r&&!n&&!o&&Ge(t),u=r||n||o||i,a=u?Z(t.length,String):[],c=a.length;for(var s in t)!e&&!lt.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ee(s,c))||a.push(s);return a}function le(t,e){for(var r=t.length;r--;)if(Ie(t[r][0],e))return r;return-1}function _e(t,e,r){var n=e(t);return Te(t)?n:X(n,r(t))}function he(t){return null==t?void 0===t?A:y:jt&&jt in Object(t)?Se(t):Ue(t)}function pe(t){return We(t)&&he(t)==u}function ve(t,e,r,n,o){return t===e||(null==t||null==e||!We(t)&&!We(e)?t!=t&&e!=e:ye(t,e,r,n,ve,o))}function ye(t,e,r,o,i,c){var s=Te(t),f=Te(e),l=s?a:ke(t),_=f?a:ke(e),h=(l=l==u?b:l)==b,p=(_=_==u?b:_)==b,v=l==_;if(v&&De(t)){if(!De(e))return!1;s=!0,h=!1}if(v&&!h)return c||(c=new oe),s||Ge(t)?je(t,e,r,o,i,c):we(t,e,l,r,o,i,c);if(!(r&n)){var y=h&&lt.call(t,"__wrapped__"),d=p&&lt.call(e,"__wrapped__");if(y||d){var g=y?t.value():t,j=d?e.value():e;return c||(c=new oe),i(g,j,r,o,c)}}return!!v&&(c||(c=new oe),me(t,e,r,o,i,c))}function be(t){return!(!Ve(t)||Pe(t))&&(Ce(t)?pt:M).test(Be(t))}function de(t){return We(t)&&Ne(t.length)&&!!R[he(t)]}function ge(t){if(!$e(t))return zt(t);var e=[];for(var r in Object(t))lt.call(t,r)&&"constructor"!=r&&e.push(r);return e}function je(t,e,r,i,u,a){var c=r&n,s=t.length,f=e.length;if(s!=f&&!(c&&f>s))return!1;var l=a.get(t);if(l&&a.get(e))return l==e;var _=-1,h=!0,p=r&o?new ee:void 0;for(a.set(t,e),a.set(e,t);++_<s;){var v=t[_],y=e[_];if(i)var b=c?i(y,v,_,e,t,a):i(v,y,_,t,e,a);if(void 0!==b){if(b)continue;h=!1;break}if(p){if(!Y(e,function(t,e){if(!et(p,e)&&(v===t||u(v,t,r,i,a)))return p.push(e)})){h=!1;break}}else if(v!==y&&!u(v,y,r,i,a)){h=!1;break}}return a.delete(t),a.delete(e),h}function we(t,e,r,i,u,a,c){switch(r){case x:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case S:return!(t.byteLength!=e.byteLength||!a(new bt(t),new bt(e)));case s:case f:case v:return Ie(+t,+e);case l:return t.name==e.name&&t.message==e.message;case j:case m:return t==e+"";case p:var _=nt;case w:var h=i&n;if(_||(_=it),t.size!=e.size&&!h)return!1;var y=c.get(t);if(y)return y==e;i|=o,c.set(t,e);var b=je(_(t),_(e),i,u,a,c);return c.delete(t),b;case z:if(Lt)return Lt.call(t)==Lt.call(e)}return!1}function me(t,e,r,o,i,u){var a=r&n,c=ze(t),s=c.length;if(s!=ze(e).length&&!a)return!1;for(var f=s;f--;){var l=c[f];if(!(a?l in e:lt.call(e,l)))return!1}var _=u.get(t);if(_&&u.get(e))return _==e;var h=!0;u.set(t,e),u.set(e,t);for(var p=a;++f<s;){var v=t[l=c[f]],y=e[l];if(o)var b=a?o(y,v,l,e,t,u):o(v,y,l,t,e,u);if(!(void 0===b?v===y||i(v,y,r,o,u):b)){h=!1;break}p||(p="constructor"==l)}if(h&&!p){var d=t.constructor,g=e.constructor;d!=g&&"constructor"in t&&"constructor"in e&&!("function"==typeof d&&d instanceof d&&"function"==typeof g&&g instanceof g)&&(h=!1)}return u.delete(t),u.delete(e),h}function ze(t){return _e(t,qe,xe)}function Ae(t,e){var r=t.__data__;return Fe(e)?r["string"==typeof e?"string":"hash"]:r.map}function Oe(t,e){var r=rt(t,e);return be(r)?r:void 0}function Se(t){var e=lt.call(t,jt),r=t[jt];try{t[jt]=void 0;var n=!0}catch(i){}var o=ht.call(t);return n&&(e?t[jt]=r:delete t[jt]),o}Tt.prototype.clear=Mt,Tt.prototype.delete=Dt,Tt.prototype.get=Rt,Tt.prototype.has=Ct,Tt.prototype.set=Nt,Vt.prototype.clear=Wt,Vt.prototype.delete=Gt,Vt.prototype.get=qt,Vt.prototype.has=Ht,Vt.prototype.set=Jt,Kt.prototype.clear=Qt,Kt.prototype.delete=Xt,Kt.prototype.get=Yt,Kt.prototype.has=Zt,Kt.prototype.set=te,ee.prototype.add=ee.prototype.push=re,ee.prototype.has=ne,oe.prototype.clear=ie,oe.prototype.delete=ue,oe.prototype.get=ae,oe.prototype.has=ce,oe.prototype.set=se;var xe=wt?function(t){return null==t?[]:(t=Object(t),Q(wt(t),function(e){return dt.call(t,e)}))}:He,ke=he;function Ee(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||D.test(t))&&t>-1&&t%1==0&&t<e}function Fe(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Pe(t){return!!_t&&_t in t}function $e(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ct)}function Ue(t){return ht.call(t)}function Be(t){if(null!=t){try{return ft.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function Ie(t,e){return t===e||t!=t&&e!=e}(At&&ke(new At(new ArrayBuffer(1)))!=x||Ot&&ke(new Ot)!=p||St&&ke(St.resolve())!=d||xt&&ke(new xt)!=w||kt&&ke(new kt)!=O)&&(ke=function(t){var e=he(t),r=e==b?t.constructor:void 0,n=r?Be(r):"";if(n)switch(n){case Ft:return x;case Pt:return p;case $t:return d;case Ut:return w;case Bt:return O}return e});var Le=pe(function(){return arguments}())?pe:function(t){return We(t)&&lt.call(t,"callee")&&!dt.call(t,"callee")},Te=Array.isArray;function Me(t){return null!=t&&Ne(t.length)&&!Ce(t)}var De=mt||Je;function Re(t,e){return ve(t,e)}function Ce(t){if(!Ve(t))return!1;var e=he(t);return e==_||e==h||e==c||e==g}function Ne(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function Ve(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function We(t){return null!=t&&"object"==typeof t}var Ge=K?tt(K):de;function qe(t){return Me(t)?fe(t):ge(t)}function He(){return[]}function Je(){return!1}module.exports=Re;
},{}],"oCke":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.r=v,exports.w=I,exports.u=exports.i=exports.a=void 0;const e=(e,t)=>t.some(t=>e instanceof t);let t,r;function n(){return t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o(){return r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}exports.i=e;const s=new WeakMap,i=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;function p(e){const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(I(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&s.set(t,e)}).catch(()=>{}),u.set(t,e),t}function f(e){if(i.has(e))return;const t=new Promise((t,r)=>{const n=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});i.set(e,t)}exports.a=u;let d={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return i.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return I(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function v(e){d=e(d)}function D(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?o().includes(e)?function(...t){return e.apply(B(this),t),I(s.get(this))}:function(...t){return I(e.apply(B(this),t))}:function(t,...r){const n=e.call(B(this),t,...r);return a.set(n,t.sort?t.sort():[t]),I(n)}}function m(t){return"function"==typeof t?D(t):(t instanceof IDBTransaction&&f(t),e(t,n())?new Proxy(t,d):t)}function I(e){if(e instanceof IDBRequest)return p(e);if(c.has(e))return c.get(e);const t=m(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const B=e=>u.get(e);exports.u=B;
},{}],"yvr6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteDB=n,exports.openDB=t,Object.defineProperty(exports,"unwrap",{enumerable:!0,get:function(){return e.u}}),Object.defineProperty(exports,"wrap",{enumerable:!0,get:function(){return e.w}});var e=require("./wrap-idb-value.js");function t(t,n,{blocked:r,upgrade:o,blocking:d,terminated:a}={}){const i=indexedDB.open(t,n),s=(0,e.w)(i);return o&&i.addEventListener("upgradeneeded",t=>{o((0,e.w)(i.result),t.oldVersion,t.newVersion,(0,e.w)(i.transaction))}),r&&i.addEventListener("blocked",()=>r()),s.then(e=>{a&&e.addEventListener("close",()=>a()),d&&e.addEventListener("versionchange",()=>d())}).catch(()=>{}),s}function n(t,{blocked:n}={}){const r=indexedDB.deleteDatabase(t);return n&&r.addEventListener("blocked",()=>n()),(0,e.w)(r).then(()=>void 0)}const r=["get","getKey","getAll","getAllKeys","count"],o=["put","add","delete","clear"],d=new Map;function a(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(d.get(t))return d.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,i=o.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!i&&!r.includes(n))return;const s=async function(e,...t){const r=this.transaction(e,i?"readwrite":"readonly");let o=r.store;a&&(o=o.index(t.shift()));const d=await o[n](...t);return i&&await r.done,d};return d.set(t,s),s}(0,e.r)(e=>({...e,get:(t,n,r)=>a(t,n)||e.get(t,n,r),has:(t,n)=>!!a(t,n)||e.has(t,n)}));
},{"./wrap-idb-value.js":"oCke"}],"XGi3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.IDB_DATABASE_NAME=exports.OBJECT_STORE=exports.COUNTRY_TYPES=void 0;const E="CLOSED_BORDER",e="NEGATIVE_TEST_REQUIRED",o="NO_TEST_REQUIRED",t="QUARANTINE_REQUIRED",T=[E,e,o,t];exports.COUNTRY_TYPES=T;const _="otvorene-granice";exports.OBJECT_STORE=_;const s="".concat(_,"-store");exports.IDB_DATABASE_NAME=s;
},{}],"nimY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.idbRepository=void 0;var e=require("idb"),t=require("./constants");const r=(0,e.openDB)(t.IDB_DATABASE_NAME,1,{upgrade(e){e.createObjectStore(t.OBJECT_STORE)}}),o={get:async e=>(await r).get(t.OBJECT_STORE,e),set:async(e,o)=>(await r).put(t.OBJECT_STORE,o,e)};exports.idbRepository=o;
},{"idb":"yvr6","./constants":"XGi3"}],"IOwx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.searchHandler=exports.resetCountriesHtml=exports.loadCountriesHtml=exports.adaptCSSFbBrowser=exports.hideLoader=void 0;var e=require("./constants");const t=e=>e.split(" ").map(e=>"I"===e?e.toLowerCase():"SAD"===e?e:e.charAt(0)+e.substring(1).toLowerCase()).join(" "),n=()=>{document.getElementById("loader").innerHTML=""};exports.hideLoader=n;const o=()=>{const e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1},s=()=>{o()&&$(".group-tabs").css("font-size","12px")};exports.adaptCSSFbBrowser=s;const r=o=>{if(0===o.length)return;n();const s=o.reduce((e,t)=>(e[t.status]?e[t.status].push(t):e[t.status]=[t],e),{});e.COUNTRY_TYPES.forEach(e=>{var n;const o=document.getElementById(e),r=document.getElementById("".concat(e,"_BADGE")),l=document.getElementById("".concat(e,"_INFO")),c=document.getElementById("".concat(e,"_TAB")),a=document.getElementById("".concat(e,"_TAB_BADGE")),d=document.getElementById("".concat(e,"_TAB_INFO"));null===(n=s[e])||void 0===n||n.forEach(e=>{let{name:n,info:s,flag:r}=e;const l='<div class="list-group-item list-group-item-action flex-column align-items-start">\n      <div class="d-flex w-100 justify-content-between">\n        <h5 class="mb-1 text-info country">'.concat(r," ").concat(t(n),'</h5>\n        </div>\n        <p class="mb-1 text-muted" style="word-wrap:break-word">').concat(s,"</p></div>");o.innerHTML+=l,c.innerHTML+=l});const{length:i}=s[e],m=i>0?"none":"";l.style.display=m,d.style.display=m,r.innerHTML=i,a.innerHTML=i})};exports.loadCountriesHtml=r;const l=()=>{e.COUNTRY_TYPES.forEach(e=>{const t=document.getElementById(e),n=document.getElementById("".concat(e,"_TAB"));t.innerHTML="",n.innerHTML=""})};exports.resetCountriesHtml=l;const c=()=>{for(let t=0;t<e.COUNTRY_TYPES.length;t+=1){const n=e.COUNTRY_TYPES[t],o=[].filter.call(document.getElementById("".concat(n,"_TAB")).children,e=>"none"!==e.style.display).length;if(0!==o&&document.getElementById("".concat(n,"_TAB_LINK")).classList.contains("active"))return;if(0!==o)return document.getElementById("".concat(n,"_TAB_LINK")).click()}},a=()=>{e.COUNTRY_TYPES.forEach(e=>{const[t,...n]=[].filter.call(document.getElementById("".concat(e,"_TAB")).children,e=>"none"!==e.style.display),[o,...s]=[].filter.call(document.getElementById(e).children,e=>"none"!==e.style.display);o&&t&&(t.classList.add("border-top"),o.classList.add("border-top"),[...s,...n].forEach(e=>{e.classList.remove("border-top")}))})},d=()=>{e.COUNTRY_TYPES.forEach(e=>{const t=[].filter.call(document.getElementById(e).children,e=>"none"!==e.style.display).length,n=document.getElementById("".concat(e,"_BADGE")),o=document.getElementById("".concat(e,"_TAB_BADGE")),s=document.getElementById("".concat(e,"_INFO")),r=document.getElementById("".concat(e,"_TAB_INFO")),l=t>0?"none":"";s.style.display=l,r.style.display=l,n.innerHTML=t,o.innerHTML=t})},i=e=>{const t=Object.fromEntries(Array.from(e).map((e,t)=>{const[n]=e.split(" (");return[n,t+1]}));$("#input-search").autocomplete({dropdownClass:"dropdown-menu w-100",highlightClass:"text-info",maximumItems:5,onSelectItem:m,source:t,treshold:1})},m=e=>{var t;const n=(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)||(null==e?void 0:e.label),o=document.querySelectorAll(".country");if(!n)return o.forEach(e=>{e.parentElement.parentElement.style.display=""}),d(),void a();const s=new Set;o.forEach(e=>{const[,...t]=e.innerHTML.split(" "),o=t.join(" ");o.toLowerCase().startsWith(n.toLowerCase().trim())?(e.parentElement.parentElement.style.display="",s.add(o)):e.parentElement.parentElement.style.display="none"}),i(s),c(),d(),a()};exports.searchHandler=m;
},{"./constants":"XGi3"}],"KIzB":[function(require,module,exports) {
"use strict";var e=o(require("lodash.isequal")),t=require("./database"),r=require("./utils");function o(e){return e&&e.__esModule?e:{default:e}}document.getElementById("input-search").addEventListener("input",r.searchHandler),(0,r.adaptCSSFbBrowser)(),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(()=>{console.log("Service worker is registered!")})}),t.idbRepository.get("countries").then(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 0===e.length?e:((0,r.hideLoader)(),await(0,r.loadCountriesHtml)(e),e)}).then(async o=>{const n=await fetch("".concat("https://open-borders.herokuapp.com","/api/countries")).then(e=>e.json());if(0!==n.length)return(0,e.default)(n,o)?void 0:((0,r.resetCountriesHtml)(),(0,r.loadCountriesHtml)(n),t.idbRepository.set("countries",n).then(()=>console.log("IndexedDB data is updated")))}).catch(e=>{console.error(e),(0,r.hideLoader)()});
},{"lodash.isequal":"a1XM","./database":"nimY","./utils":"IOwx","/home/runner/work/open-borders/open-borders/src/service-worker.js":[["service-worker.js","AaGI"],"service-worker.js.map","AaGI"]}]},{},["KIzB"], null)
//# sourceMappingURL=/main.9a98bde4.js.map