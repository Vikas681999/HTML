(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=p,e=0;e<c.length;e++)if(d=d[c[e]],null==d){c=null;break a}c=d}a=c&&c[a];return null!=a?a:b};function ba(a){a=a.u;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function ca(a,b){return a.h?a.m.slice(0,a.h.index)+b+a.m.slice(a.h.index):a.m+b}function ea(a){let b="&act=1&ri=1";a.i&&a.u&&(b+=ba(a));return ca(a,b)}function fa(a,b){return a.i&&a.j||a.o?1==b?a.i?a.j:ca(a,"&dct=1"):2==b?ca(a,"&ri=2"):ca(a,"&ri=16"):a.m}
var ha=class{constructor({url:a,R:b}){this.m=a;this.u=b;b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){let c;try{c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}}};var q=class{constructor(a,b){this.h=b===ia?a:""}toString(){return this.h.toString()}};q.prototype.i=!0;var ka;try{new URL("s://g"),ka=!0}catch(a){ka=!1}var la=ka,ia={},ma=new q("about:invalid#zClosurez",ia);function na(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var oa=aa(610401301,!1),pa=aa(516931134,aa(1,!0));var r;const qa=p.navigator;r=qa?qa.userAgentData||null:null;function ra(a){return oa?r?r.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function t(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function w(){return oa?!!r&&0<r.brands.length:!1}function sa(){return w()?ra("Chromium"):(t("Chrome")||t("CriOS"))&&!(w()?0:t("Edge"))||t("Silk")};function ta(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function ua(a,b){if(!(b instanceof q||b instanceof q)){b="object"==typeof b&&b.i?b.h.toString():String(b);b:{var c=b;if(la){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(b="about:invalid#zClosurez");b=new q(b,ia)}a.href=b instanceof q&&b.constructor===q?b.h:"type_error:SafeUrl"};/*

 SPDX-License-Identifier: Apache-2.0
*/
class va{constructor(a){this.Z=a}}function x(a){return new va(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const wa=new va(a=>/^[^:]*([/?#]|$)/.test(a));var xa=x("http"),ya=x("https"),za=x("ftp"),Aa=x("mailto"),Ba=x("intent"),Ca=x("market"),Ea=x("itms"),Fa=x("itms-appss");const Ga=[x("data"),xa,ya,Aa,za,wa];function Ha(a,b=Ga){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof va&&d.Z(a))return new q(a,ia)}}function Ia(a,b=Ga){return Ha(a,b)||ma};function Ja(){return t("iPhone")&&!t("iPod")&&!t("iPad")};function Ka(a){Ka[" "](a);return a}Ka[" "]=function(){};var La=Ja(),Ma=t("iPad");var Na=Ja()||t("iPod"),Oa=t("iPad");!t("Android")||sa();sa();t("Safari")&&(sa()||(w()?0:t("Coast"))||(w()?0:t("Opera"))||(w()?0:t("Edge"))||(w()?ra("Microsoft Edge"):t("Edg/"))||w()&&ra("Opera"));var Pa={},Qa=null;const y=Symbol();function z(a,b){if(y)return a[y]|=b;if(void 0!==a.h)return a.h|=b;Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function Ra(a){y?a[y]&&(a[y]&=-17):void 0!==a.h&&(a.h&=-17)}function A(a){let b;y?b=a[y]:b=a.h;return null==b?0:b}function B(a,b){y?a[y]=b:void 0!==a.h?a.h=b:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}function Sa(a){z(a,1);return a}function D(a){return!!(A(a)&2)}
function E(a){z(a,18);return a}function Ta(a){z(a,16);return a}function Ua(a,b){B(b,(a|0)&-51)}function Va(a,b){B(b,(a|18)&-41)};var Wa={};function Xa(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let Ya;var F=Object.freeze(B([],23));class Za{constructor(a){this.L=0;this.K=a}next(){return this.L<this.K.length?{done:!1,value:this.K[this.L++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}}function $a(a){var b=a.length;(b=b?a[b-1]:void 0)&&Xa(b)?b.g=1:a.push({g:1})};const G=!pa;function ab(a,b,c,d){let e=!1;if(null!=a&&"object"===typeof a&&!(e=Array.isArray(a))&&a.B===Wa)return a;if(!e)return c?d&2?(a=b[bb])?b=a:(a=new b,E(a.l),b=b[bb]=a):b=new b:b=void 0,b;cb(a,d);return new b(a)}function cb(a,b){const c=A(a);let d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&B(a,d)}const bb=Symbol();function db(a){return a}function eb(a,b,c){return"string"===typeof a?a:c?"":void 0};function fb(a,b=lb){const c=Array.from(a.h.keys());for(let d=0;d<c.length;d++){const e=c[d],f=a.h.get(c[d]);c[d]=[b(e),b(f)]}return c}function nb(a,b=lb){const c=[];a=a.h.entries();for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
var H=class{constructor(a,b,c=db,d=db){let e=A(a);e|=32;B(a,e);this.j=e;this.i=b;this.m=c||db;this.o=this.i?ob:d||db;const f=new Map;this.h=f;for(let g=0;g<a.length;g++){const h=a[g],m=c(h[0],!1,!0);let k=h[1];b||(k=d(h[1],!1,!0,void 0,void 0,e));null!=m&&f.set(m,k)}this.size=f.size}entries(){const a=Array.from(this.h.keys());for(let b=0;b<a.length;b++){const c=a[b];a[b]=[c,this.get(c)]}return new Za(a)}keys(){return this.h.keys()}values(){const a=Array.from(this.h.keys());for(let b=0;b<a.length;b++)a[b]=
this.get(a[b]);return new Za(a)}forEach(a,b){this.h.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){if(this.j&2)throw Error("Cannot mutate an immutable Map");const c=this.h;a=this.m(a,!0,!1);if(null==a)return this;if(null==b)return c.delete(a),this;c.set(a,this.o(b,!0,!0,this.i,!1,this.j));this.size=c.size;return this}get(a){a=this.m(a,!1,!1);const b=this.h,c=b.get(a);if(void 0!==c){var d=this.j,e=this.i;return e?(Array.isArray(c)&&d&16&&Ta(c),d=this.o(c,!1,!0,e,this.u,d),d!==c&&b.set(a,d),
d):c}}has(a){return this.i?null!=this.get(a):this.h.has(a)}[Symbol.iterator](){return this.entries()}};function ob(a,b,c,d,e,f){a=ab(a,d,c,f);e&&(a=pb(a));return a}function lb(a){return a};function qb(a){const b=a.i+a.v;return a.s||(a.s=a.l[b]={})}function I(a,b,c){return-1===b?null:b>=a.i?a.s?a.s[b]:void 0:c&&a.s&&(c=a.s[b],null!=c)?c:a.l[b+a.v]}function J(a,b,c,d){if(A(a.l)&2)throw Error();return L(a,b,c,d)}function L(a,b,c,d){a.j&&(a.j=void 0);if(b>=a.i||d)return qb(a)[b]=c,a;a.l[b+a.v]=c;(c=a.s)&&b in c&&delete c[b];return a}
function rb(a,b,c,d){let e=I(a,b);Array.isArray(e)||(e=F);const f=A(e);f&1||Sa(e);if(d)f&2||E(e),c&1||Object.freeze(e);else{d=!(c&2);const g=f&2;c&1||!g?d&&f&16&&!g&&Ra(e):(e=Sa(Array.prototype.slice.call(e)),L(a,b,e))}return e}function M(a,b){a=I(a,b);return N(null==a?a:!!a,!1)}let sb;
function tb(a,b,c,d,e){const f=D(a.l);a:{var g=b;b=!1;if(null==g){if(f){a=sb||(sb=new H(E([])));break a}g=[]}else if(g.constructor===H){if(0==(g.j&2)||f){a=g;break a}g=nb(g)}else Array.isArray(g)?b=D(g):g=[];if(f){if(!g.length){a=sb||(sb=new H(E([])));break a}b||(b=!0,E(g))}else if(b){b=!1;g=Array.prototype.slice.call(g);for(let h=0;h<g.length;h++){const m=g[h]=Array.prototype.slice.call(g[h]);Array.isArray(m[1])&&(m[1]=E(m[1]))}}b||(A(g)&32?Ra(g):A(a.l)&16&&Ta(g));e=new H(g,d,eb,e);L(a,c,e,!1);a=
e}if(null==a)return a;!f&&d&&(a.u=!0);return a}function ub(a,b){return tb(a,I(a,b),b,void 0,eb)}function P(a,b,c){const d=I(a,c,!1);b=ab(d,b,!1,A(a.l));b!==d&&null!=b&&L(a,c,b,!1);return b}function R(a,b,c){b=P(a,b,c);if(null==b)return b;if(!D(a.l)){const d=pb(b);d!==b&&(b=d,L(a,c,b,!1))}return b}
function vb(a){var b=A(a.l),c=!!(b&2);var d=c?1:2;var e=wb,f=!!(b&2);G&&!a.h&&(a.h={});var g=G?a.h[7]:void 0,h=rb(a,7,1|(G?2:0),f);if(G?g:h!==F&&A(h)&4){if(3!==d&&!f)if(G)(f=Object.isFrozen(g),1!==d||f)?2===d&&f&&(g=Array.prototype.slice.call(g),a.h[7]=g):Object.freeze(g);else if(f=Object.isFrozen(h),1===d)f||Object.freeze(h);else{d=A(h);var m=d&-19;f&&(h=Array.prototype.slice.call(h),d=0,L(a,7,h));d!==m&&B(h,m)}d=G?g:h}else{var k=h;g=G?[]:void 0;h=!!(b&2);f=!!(A(k)&2);m=k;!h&&f&&(k=Array.prototype.slice.call(k));
var n=b|(f?2:0);b=f;let v=0,C=0;for(;v<k.length;v++){var l=k[v];if(G){var u=e;Array.isArray(l)?(cb(l,n),l=new u(l)):l=void 0}else l=ab(l,e,!1,n);void 0!==l&&(b||(b=!!(2&A(l.l))),G?g.push(l):k[C++]=l)}G?a.h[7]=g:C<v&&(k.length=C);n=A(k);e=n|1;e=G?e|32:e|4;e=b?e&-9:e|8;n!=e&&(b=k,Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),B(b,e),k=b);m!==k&&L(a,7,k);G&&(h||1===d&&f)&&E(g);(h||1===d)&&Object.freeze(G?g:k);d=G?g:k}a=G?rb(a,7,3,c):d;if(!(c||A(a)&8)){for(c=0;c<d.length;c++)g=d[c],h=pb(g),g!==
h&&(d[c]=h,G&&(a[c]=h.l));z(a,8)}return d}function xb(a,b,c,d){if(A(a.l)&2)throw Error();var e=null==c?F:G?Sa([]):c;if(null!=c){var f=!!c.length;for(var g=0;g<c.length;g++){const h=c[g];f=f&&!D(h.l);G&&(e[g]=h.l)}f=1|(f?8:0)|(G?0:4);g=A(e);(g&f)!==f&&(Object.isFrozen(e)&&(e=Array.prototype.slice.call(e)),B(e,g|f));G&&(a.h||(a.h={}),a.h[b]=c)}else G&&a.h&&(a.h[b]=void 0);return L(a,b,e,d)}
function yb(a,b){{const c=D(a.l);let d=rb(a,b,1,c),e=A(d);if(!(e&4)){Object.isFrozen(d)&&(d=Sa(d.slice()),L(a,b,d));let f=0,g=0;for(;f<d.length;f++){const h=d[f];null!=h&&(d[g++]=h)}g<f&&(d.length=g);e|=5;c&&(e|=18);B(d,e);e&2&&Object.freeze(d)}!c&&(e&2||Object.isFrozen(d))&&(d=Array.prototype.slice.call(d),z(d,5),L(a,b,d));a=d}return a}function N(a,b){return null==a?b:a}function S(a,b){return N(I(a,b),"")}function T(a,b,c=0){return N(I(a,b),c)};let zb;function Ab(a,b){return Bb(b)}function Bb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(A(a)&128))return a=Array.prototype.slice.call(a),$a(a),a}else{if(null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof H)return fb(a)}}return a};function Cb(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&A(a)&1?void 0:f&&A(a)&2?a:Db(a,b,c,void 0!==d,e,f);else if(Xa(a)){const g={};for(let h in a)g[h]=Cb(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}function Db(a,b,c,d,e,f){const g=A(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(let h=0;h<a.length;h++)a[h]=Cb(a[h],b,c,d,e,f);c(g,a);return a}function Eb(a){return Cb(a,Fb,Gb,void 0,!1,!1)}function Fb(a){return a.B===Wa?a.toJSON():a instanceof H?fb(a,Eb):Bb(a)}
function Gb(a,b){a&128&&$a(b)};function Hb(a,b,c=Va){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=A(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return B(a,d|18),a;a=Db(a,Hb,d&4?Va:c,!0,!1,!0);b=A(a);b&4&&b&2&&Object.freeze(a);return a}a.B===Wa?a=Ib(a):a instanceof H&&(b=E(nb(a,Hb)),a=new H(b,a.i,a.m,a.o));return a}}
function Jb(a,b,c,d,e,f,g){(a=G?a.h&&a.h[c]:void 0)?(d=A(a),d&2?d=a:(f=Array.prototype.map.call(a,Ib,void 0),Va(d,f),Object.freeze(f),d=f),xb(b,c,d,e)):J(b,c,Hb(d,f,g),e)}function Ib(a){if(D(a.l))return a;a=Kb(a,!0);E(a.l);return a}
function Kb(a,b){const c=a.l;var d=Ta([]),e=a.constructor.h;e&&d.push(e);e=a.s;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(A(c)&128)&&$a(d);b=b||D(a.l)?Va:Ua;f=a.constructor;zb=d;d=new f(d);zb=void 0;a.N&&(d.N=a.N.slice());f=!!(A(c)&16);const g=e?c.length-1:c.length;for(let h=0;h<g;h++)Jb(a,d,h-a.v,c[h],!1,f,b);if(e)for(const h in e)Jb(a,d,+h,e[h],!0,f,b);return d}function pb(a){if(!D(a.l))return a;const b=Kb(a,!1);b.j=a;return b};function Lb(a){Ya=!0;try{return JSON.stringify(a.toJSON(),Ab)}finally{Ya=!1}}
var U=class{constructor(a,b,c){null==a&&(a=zb);zb=void 0;var d=this.constructor.h;if(null==a){a=d?[d]:[];var e=!0;B(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var f=z(a,0)|32;e=0!==(16&f);if(128&f)throw Error();B(a,f)}this.v=d?0:-1;this.h=void 0;this.l=a;a:{f=this.l.length;d=f-1;if(f&&(f=this.l[d],Xa(f))){this.s=f;this.i=d-this.v;break a}void 0!==b&&-1<b?(this.i=Math.max(b,d+1-this.v),this.s=void 0):this.i=Number.MAX_VALUE}if(this.s&&"g"in this.s)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c){b=e&&!0;e=this.i;let h;for(d=0;d<c.length;d++)if(f=c[d],f<e){f+=this.v;var g=a[f];g?Mb(g,b):a[f]=F}else h||(h=qb(this)),(g=h[f])?Mb(g,b):h[f]=F}}toJSON(){const a=this.l;var b;Ya?b=a:b=Db(a,Fb,Gb,void 0,!1,!1);return b}};function Mb(a,b){if(Array.isArray(a)){var c=A(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&B(a,c|d)}}U.prototype.B=Wa;U.prototype.toString=function(){return this.l.toString()};var Nb=class extends U{constructor(){super()}};var Ob=class extends U{constructor(a){super(a)}};var Pb=class extends U{constructor(a){super(a)}};var wb=class extends U{constructor(a){super(a)}A(){return S(this,3)}P(a){J(this,5,a)}};var V=class extends U{constructor(a){super(a)}A(){return S(this,1)}P(a){J(this,2,a)}};var Qb=class extends U{constructor(a){super(a)}};var Sb=class extends U{constructor(a){super(a,-1,Rb)}},Rb=[6,7];var Ub=class extends U{constructor(a){super(a,-1,Tb)}},Tb=[17];var Vb=class extends U{constructor(a){super(a)}};var Wb=class extends U{constructor(){super()}};var Xb={capture:!0},Yb={passive:!0},Zb=ta(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});p.addEventListener("test",null,b)}catch(b){}return a});function $b(a){return a?a.passive&&Zb()?a:a.capture||!1:!1}function ac(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,$b(d))};var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}var dc=/#|$/;
function ec(a){var b=a.search(dc),c;a:{for(c=0;0<=(c=a.indexOf("ase",c))&&c<b;){var d=a.charCodeAt(c-1);if(38==d||63==d)if(d=a.charCodeAt(c+3),!d||61==d||38==d||35==d)break a;c+=4}c=-1}if(0>c)return null;d=a.indexOf("&",c);if(0>d||d>b)d=b;return decodeURIComponent(a.slice(c+4,-1!==d?d:0).replace(/\+/g," "))};function fc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var gc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let hc=[];const ic=()=>{const a=hc;hc=[];for(const b of a)try{b()}catch(c){}};
var jc=a=>{hc.push(a);1==hc.length&&(window.Promise?Promise.resolve().then(ic):window.setImmediate?setImmediate(ic):setTimeout(ic,0))},kc=a=>{var b=W;"complete"===b.readyState||"interactive"===b.readyState?jc(a):b.addEventListener("DOMContentLoaded",a)},lc=a=>{var b=window;"complete"===b.document.readyState?jc(a):b.addEventListener("load",a)};function qc(a=document){return a.createElement("img")};function rc(a,b,c=null,d=!1){sc(a,b,c,d)}function sc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=qc(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,e,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,$b());e.removeEventListener&&e.removeEventListener("error",f,$b())};ac(e,"load",f);ac(e,"error",f)}e.src=b;a.google_image_requests.push(e)}
function tc(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):rc(a,b,void 0,!1)};let uc=0;function vc(a){return(a=wc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function wc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function xc(a){if(!(.01<Math.random())){const b=wc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${vc(a)}&sample=${.01}`;tc(window,a)}};var W=document,X=window;const yc=[xa,ya,Aa,za,wa,Ca,Ea,Ba,Fa];function zc(a,b){if(a instanceof q)return a;const c=Ia(a,yc);c===ma&&b(a);return c}
var Ac=a=>{var b=`${"http:"===X.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)cc(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");0>c&&(c=b.length);d=b.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};var Bc=a=>{var b=W;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class Cc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const Dc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var Ec=class{constructor(a,b){this.h=a;this.i=b}},Fc=class{constructor(a,b){this.url=a;this.O=!!b;this.depth=null}};function Gc(a,b){const c={};c[a]=b;return[c]}function Hc(a,b,c,d,e){const f=[];fc(a,function(g,h){(g=Ic(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}
function Ic(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Ic(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Hc(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function Jc(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.j.length-1}
function Kc(a,b){let c="https://pagead2.googlesyndication.com"+b,d=Jc(a)-b.length;if(0>d)return"";a.h.sort(function(f,g){return f-g});b=null;let e="";for(let f=0;f<a.h.length;f++){const g=a.h[f],h=a.i[g];for(let m=0;m<h.length;m++){if(!d){b=null==b?g:b;break}let k=Hc(h[m],a.j,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;c+=k;e=a.j;break}b=null==b?g:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class Lc{constructor(){this.j="&";this.i={};this.m=0;this.h=[]}};function Mc(){var a=Nc,b=window.google_srt;0<=b&&1>=b&&(a.h=b)}function Oc(a,b,c,d=!1,e){if((d?a.h:Math.random())<(e||.01))try{let f;c instanceof Lc?f=c:(f=new Lc,fc(c,(h,m)=>{var k=f;const n=k.m++;h=Gc(m,h);k.h.push(n);k.i[n]=h}));const g=Kc(f,"/pagead/gen_204?id="+b+"&");g&&rc(p,g)}catch(f){}}class Pc{constructor(){this.h=Math.random()}};let Qc=null;function Rc(){const a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Sc(){const a=p.performance;return a&&a.now?a.now():null};class Tc{constructor(a,b){var c=Sc()||Rc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const Y=p.performance,Uc=!!(Y&&Y.mark&&Y.measure&&Y.clearMarks),Vc=ta(()=>{var a;if(a=Uc){var b;if(null===Qc){Qc="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Qc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Qc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Wc(a){a&&Y&&Vc()&&(Y.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),Y.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Xc{constructor(){var a=window;this.i=[];this.j=a||p;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.i=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=Vc()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new Tc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;Y&&Vc()&&Y.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(Sc()||Rc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;Y&&Vc()&&Y.mark(b);!this.h||
2048<this.i.length||this.i.push(a)}}};function Yc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function Zc(a,b,c){let d,e;try{a.h&&a.h.h?(e=a.h.start(b.toString(),3),d=c(),a.h.end(e)):d=c()}catch(f){c=!0;try{Wc(e),c=a.u(b,new Cc(f,{message:Yc(f)}),void 0,void 0)}catch(g){a.o(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function $c(a,b){var c=ad;return(...d)=>Zc(c,a,()=>b.apply(void 0,d))}
class bd{constructor(a=null){this.j=Nc;this.i=null;this.u=this.o;this.h=a;this.m=!1}pinger(){return this.j}o(a,b,c,d,e){e=e||"jserror";let f;try{const O=new Lc;var g=O;g.h.push(1);g.i[1]=Gc("context",a);b.error&&b.meta&&b.id||(b=new Cc(b,{message:Yc(b)}));if(b.msg){g=O;var h=b.msg.substring(0,512);g.h.push(2);g.i[2]=Gc("msg",h)}var m=b.meta||{};b=m;if(this.i)try{this.i(b)}catch(K){}if(d)try{d(b)}catch(K){}d=O;m=[m];d.h.push(3);d.i[3]=m;d=p;m=[];let Da;b=null;do{var k=d;try{var n;if(n=!!k&&null!=k.location.href)b:{try{Ka(k.foo);
n=!0;break b}catch(K){}n=!1}var l=n}catch(K){l=!1}l?(Da=k.location.href,b=k.document&&k.document.referrer||null):(Da=b,b=null);m.push(new Fc(Da||""));try{d=k.parent}catch(K){d=null}}while(d&&k!=d);for(let K=0,mc=m.length-1;K<=mc;++K)m[K].depth=mc-K;k=p;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==m.length-1)for(l=1;l<m.length;++l){var u=m[l];u.url||(u.url=k.location.ancestorOrigins[l-1]||"",u.O=!0)}var v=m;let gb=new Fc(p.location.href,!1);k=null;const ib=v.length-
1;for(u=ib;0<=u;--u){var C=v[u];!k&&Dc.test(C.url)&&(k=C);if(C.url&&!C.O){gb=C;break}}C=null;const ud=v.length&&v[ib].url;0!=gb.depth&&ud&&(C=v[ib]);f=new Ec(gb,C);if(f.i){v=O;var Q=f.i.url||"";v.h.push(4);v.i[4]=Gc("top",Q)}var jb={url:f.h.url||""};if(f.h.url){var kb=f.h.url.match(bc),da=kb[1],nc=kb[3],oc=kb[4];Q="";da&&(Q+=da+":");nc&&(Q+="//",Q+=nc,oc&&(Q+=":"+oc));var pc=Q}else pc="";da=O;jb=[jb,{url:pc}];da.h.push(5);da.i[5]=jb;Oc(this.j,e,O,this.m,c)}catch(O){try{Oc(this.j,e,{context:"ecmserr",
rctx:a,msg:Yc(O),url:f&&f.h.url},this.m,c)}catch(Da){}}return!0}};class cd{};let Nc,ad;const Z=new Xc;var dd=()=>{window.google_measure_js_timing||(Z.h=!1,Z.i!=Z.j.google_js_reporting_queue&&(Vc()&&Array.prototype.forEach.call(Z.i,Wc,void 0),Z.i.length=0))};(a=>{Nc=null!=a?a:new Pc;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Mc();ad=new bd(Z);ad.i=b=>{const c=uc;0!==c&&(b.jc=String(c),b.shv=vc(c))};ad.m=!0;"complete"==window.document.readyState?dd():Z.h&&ac(window,"load",()=>{dd()})})();
var ed=(a,b)=>$c(a,b),fd=a=>{var b=cd;var c="M";b.M&&b.hasOwnProperty(c)||(c=new b,b.M=c);b=[];!a.eid&&b.length&&(a.eid=b.toString());Oc(Nc,"gdn-asoch",a,!0)};function gd(a=window){return a};var hd=(a,b)=>{b=S(a,2)||b;if(!b)return"";if(M(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];ub(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},id=(a,b=[])=>{b=0<b.length?b:Bc("data-asoch-targets");a=tb(a,I(a,1),1,Sb);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let m of e)if(!a.has(m)){f=!1;break}if(f){f=
a.get(e[0]);for(d=1;d<e.length;++d){var g=a.get(e[d]);f=Kb(f,!1).toJSON();g=g.toJSON();const m=Math.max(f.length,g.length);for(let k=0;k<m;++k)null==f[k]&&(f[k]=g[k]);f=new Sb(f)}e=ub(f,4);null!=I(f,5)&&e.set("nb",T(f,5,0).toString());c.push({element:b[h],data:f})}else fd({type:1,data:d})}return c},ld=(a,b,c,d)=>{c=hd(b,c);if(0!==c.length){if("2"===ec(c)&&1087!==d){const f=609===d;let g;if(f)g=4;else{var e;g=(null==(e=W.featurePolicy)?0:e.allowedFeatures().includes("attribution-reporting"))?6:5}e=
"";jd(c)&&!f?e=kd(ea(new ha({url:c})),"nis",g.toString()):c=kd(c,"nis",g.toString());a.setAttribute("attributionsrc",e)}ua(a,zc(c,Ac(d)));a.target||(a.target=null!=I(b,11)?S(b,11):"_top")}},md=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!M(a,1)){const c=b.element;ld(c,a,c.href,609)}},jd=a=>!/[?&]dsh=1(&|$)/.test(a)&&/[?&]ae=1(&|$)/.test(a),nd=a=>{const b=p.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&void 0!==P(a,Qb,8)){const d=S(R(a,Qb,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,
S(R(a,Qb,8),6));break}}},od=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&void 0!==P(a,V,12)&&(d.push(R(a,V,12)),c.push(R(a,V,12).A()));e=(f,g)=>{if(g)for(const h of d)g[h.A()]&&h.P(!0)};a=p.oneAfmaInstance;for(const f of c){let g;null==(g=a)||g.canOpenAndroidApp(f,e,()=>{},b)}},qd=(a,b,c,d,e)=>{if(!b||void 0===P(b,Qb,8))return!1;const f=R(b,Qb,8);let g=S(f,2);ub(b,10).forEach((k,n)=>{var l=g;n=encodeURIComponent(n);const u=encodeURIComponent(k);k=new RegExp("[?&]"+n+"=([^&]+)");const v=
k.exec(l);console.log(v);n=n+"="+u;g=v?l.replace(k,v[0].charAt(0)+n):l.replace("?","?"+n+"&")});pd(b)&&M(b,15)&&!/[?&]label=/.test(c)&&(c=kd(c,"label","deep_link_fallback"));const h=k=>d.openStoreOverlay(k,void 0,S(f,6)),m=k=>tc(X,k);return d.redirectForStoreU2({clickUrl:c,trackingUrl:S(f,3),finalUrl:g,pingFunc:e?m:d.click,openFunc:(null==a?0:M(a,1))?h:d.openIntentOrNativeApp,isExternalClickUrl:M(b,13)})},sd=(a,b,c,d,e,f,g,h=!1)=>{e=M(e,15);const m=jd(f);!a||!b||e&&m||(f=h?rd(f):rd(f,g.click));f&&
f.startsWith("intent:")?g.openIntentOrNativeApp(f):c?d?g.openBrowser(f):g.openChromeCustomTab(f):g.openSystemBrowser(f,{useFirstPackage:!0,useRunningProcess:!0})},rd=(a,b=null)=>{if(null!==b){const c=new ha({url:a});if(c.i&&c.j||c.o)return b(ea(c)),fa(c,1)}else return{R:b}={},b=new ha({url:a,R:b}),b.i&&b.j||b.o?navigator.sendBeacon?navigator.sendBeacon(ea(b),"")?fa(b,1):fa(b,2):fa(b,0):a;return a},td=(a,b=!0)=>{b&&X.fetch?X.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||rc(X,a)}):
rc(X,a)},kd=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},pd=a=>{for(const b of vb(a))if(3===T(b,1,0)&&S(b,2))return!0;return!1};var vd=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&2==a.length?a[1]:"";var wd=class extends U{constructor(){super()}};function xd(a,b){return J(a,2,b)}function yd(a,b){return J(a,3,b)}function zd(a,b){return J(a,4,b)}function Ad(a,b){return J(a,5,b)}function Bd(a,b){return J(a,9,b)}function Cd(a,b){return xb(a,10,b)}function Dd(a,b){return J(a,11,b)}function Ed(a,b){return J(a,1,b)}function Fd(a,b){return J(a,7,b)}var Hd=class extends U{constructor(){super(void 0,-1,Gd)}},Gd=[10,6];const Id="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Jd(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function Kd(a){let b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Ld(){var a=window;if(!Kd(a))return null;const b=Jd(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Id).then(c=>{null!=b.uach||(b.uach=c);return c});return b.uach_promise=a}
function Md(a){let b;return Dd(Cd(Ad(xd(Ed(zd(Fd(Bd(yd(new Hd,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new wd;d=J(d,1,c.brand);return J(d,2,c.version)}))||[]),a.wow64||!1)}function Nd(){let a,b;return null!=(b=null==(a=Ld())?void 0:a.then(c=>Md(c)))?b:null};function Od(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==I(c,2)&&J(c,2,a.href)}}function Pd(a,b){return na(a,c=>c.element===b)}function Qd(a){kc(ed(556,()=>{new Rd(a||{})}))}
function Sd(a,b,c,d){if(!M(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(ua(c,zc(e[0],Ac(557)));!c.id;)if(f="asoch-id-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),!W.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,W.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===
typeof window.ja&&window.ja(f,d?T(d,5,0):0);"function"===typeof window.vti&&window.vti(f);a.j&&"function"===typeof window.ss&&(a.I?window.ss(f,1,a.j):window.ss(a.j,1));0<e.length&&(a=0<a.o.length&&(null==d||null==I(d,19))?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1],ua(c,zc(a,Ac(557))))}}
async function Td(a,b,c,d){let e="";var f=p.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.F)){if(a.U)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=kd(e,"nas",f.encodedNas)}}Ud(a,b,c,d,e)}
function Ud(a,b,c,d,e){const f=M(a.i,2),g=f&&300<Date.now()-a.H,h=p.oneAfmaInstance;h?(gc(b),(()=>{let m=M(d,13)?e:h.logScionEventAndAddParam(e);if(!a.u&&d&&void 0!==P(d,V,12)){var k=R(d,V,12).A();if(0<vb(d).length)for(const n of vb(d));M(R(d,V,12),2)?(h.click(m),h.openAndroidApp(k),k=!0):k=!1}else k=!1;k||qd(a.m,d,m,h,a.V)||sd(f,g,a.X,a.u,d,m,h,a.W)})()):(b=window,a.T&&b.pawsig&&"function"===typeof b.pawsig.clk?b.pawsig.clk(c):g&&(b="2"===ec(c.href)&&jd(c.href)?rd(c.href,()=>{}):rd(c.href),b!==c.href&&
ua(c,zc(b,Ac(599)))));g&&(a.H=Date.now());xc(a.G)}
var Rd=class{constructor(a){this.u=Na||La||Oa||Ma;var b=Bc("data-asoch-meta");if(1!==b.length)fd({type:2,data:b.length});else{this.G=70;this.i=new Ub(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.S=a["extra-meta"]?new Ub(JSON.parse(a["extra-meta"])):null;this.F="true"===a["is-fsn"];this.U="true"===a["is-tap-disabled-for-fsn"];this.m=a["ios-store-overlay-config"]?new Vb(JSON.parse(a["ios-store-overlay-config"])):null;this.X="true"===a["use-cct-over-browser"];this.V="true"===a["send-ac-click-ping-by-js"];
this.J="true"===a["correct-redirect-url-for-och-15-click"];this.W="true"===a["send-click-ping-by-js-in-och"];this.T="true"===a["enable-paw"];this.o="";b=Nd();null!=b&&b.then(d=>{var e=Lb(d);d=[];for(var f=0,g=0;g<e.length;g++){var h=e.charCodeAt(g);255<h&&(d[f++]=h&255,h>>=8);d[f++]=h}e=3;void 0===e&&(e=0);if(!Qa)for(Qa={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var m=f.concat(g[h].split(""));Pa[h]=m;for(var k=0;k<m.length;k++){var n=
m[k];void 0===Qa[n]&&(Qa[n]=k)}}e=Pa[e];f=Array(Math.floor(d.length/3));g=e[64]||"";for(h=m=0;m<d.length-2;m+=3){var l=d[m],u=d[m+1];n=d[m+2];k=e[l>>2];l=e[(l&3)<<4|u>>4];u=e[(u&15)<<2|n>>6];n=e[n&63];f[h++]=k+l+u+n}k=0;n=g;switch(d.length-m){case 2:k=d[m+1],n=e[(k&15)<<2]||g;case 1:d=d[m],f[h]=e[d>>2]+e[(d&3)<<4|k>>4]+n+g}this.o=f.join("")});this.h=id(this.i);this.Y=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.H=-Infinity;this.j=S(this.i,5)||"";this.I=M(this.i,11);this.S&&(this.I=
M(this.S,11));this.D=this.C=null;M(this.i,3)||(md(this.h),J(this.i,3,!0));Od(this.h);a=p.oneAfmaInstance;!this.u&&a&&od(this.h,this.Y);var c;if(a&&(null==(c=this.m)?0:M(c,2)))switch(c=()=>{const d=N(I(this.m,4),0);0<d?p.setTimeout(()=>{nd(this.h)},d):nd(this.h)},T(this.m,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:lc(c);break;default:nd(this.h)}ac(W,"click",ed(557,d=>{a:if(!d.defaultPrevented||this.C===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets"),
m=g.hasAttribute("data-asoch-fixed-value");if(!e)if(m)e=new Sb(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?id(this.i,[g]):this.h,h=Pd(h,g))e=h.data;g=g.parentElement}if(g=e&&!M(e,1)){if(d.defaultPrevented){var k=f,n=e;if(this.C===d&&this.D){f=new Pb(this.D);e=S(n,9);var l="";switch(T(f,4,1)){case 2:if(N(I(f,2),0))l="blocked_fast_click";else if(S(f,1)||S(f,7))l="blocked_border_click";break;case 3:l=W,l=
l.getElementById?l.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&l&&(n=Kb(n,!1),J(n,5,12),ub(n,4).set("nb",(12).toString()),(g=Pd(this.h,l))?g.data=n:this.h.push({element:l,data:n}),!this.J&&k&&(Sd(this,d,k,n),J(n,2,k.href)),window.copfcChm(d,hd(n,l.href),null,void 0!==P(f,Ob,10)?Lb(R(f,Ob,10)):null),this.J&&Sd(this,d,l,n)),l="onepointfiveclick_first_click"}e&&l&&td(e+"&label="+l,!1);xc(this.G)}break a}h=e;for(l of yb(h,6))td(l)}if(f&&g){e=g?e:null;(l=Pd(this.h,
f))?l=l.data:(l=new Sb,J(l,2,f.href),J(l,11,f.target||"_top"),this.h.push({element:f,data:l}));ld(f,e||l,S(l,2),557);Sd(this,d,f,e);for(n of yb(this.i,17))l=n,g=W.body,h={},"function"===typeof window.CustomEvent?m=new CustomEvent(l,h):(m=document.createEvent("CustomEvent"),m.initCustomEvent(l,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(m);if(null==e?0:null!=I(e,19)){n=new Nb;J(n,1,T(e,5,0));l=vd(f.href,"nx");""!=l&&J(n,2,+l);l=vd(f.href,"ny");""!=l&&J(n,3,+l);l=vd(f.href,"bg");""!=l&&J(n,
4,l);l=vd(f.href,"nm");""!=l&&J(n,5,+l);l=vd(f.href,"mb");""!=l&&J(n,6,+l);l=S(e,19);b:if(g=I(e,20),null!=g){switch(typeof g){case "string":g=+g;break b;case "number":break b}g=void 0}g=null!=g?N(I(e,20),0):null;n=Lb(n);h=this.o;m=gd(p);const u=new Wb;J(u,1,l);null!==g&&J(u,2,g);null!==h&&J(u,3,h);J(u,4,n);null==m||null==(k=m.fence)||k.reportEvent({eventType:"click",eventData:JSON.stringify(u),destination:["buyer"]})}M(this.i,16)||this.F?Td(this,d,f,e):(k="",(n=p.oneAfmaInstance)&&(k=n.appendClickSignals(f.href)),
Ud(this,d,f,e,k))}}}),Xb);this.j&&"function"===typeof window.ss&&ac(W.body,"mouseover",ed(626,()=>{window.ss(this.j,0)}),Yb);"function"===typeof window.ivti&&window.ivti(window);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&c.googqscp.registerCallback((d,e)=>{this.C=d;this.D=e})}}};var Vd=ed(555,a=>Qd(a));uc=70;const Wd=wc(70,document.currentScript);if(null==Wd)throw Error("JSC not found 70");const Xd={},Yd=Wd.attributes;for(let a=Yd.length-1;0<=a;a--){const b=Yd[a].name;0===b.indexOf("data-jcp-")&&(Xd[b.substring(9)]=Yd[a].value)}Vd(Xd);}).call(this);
