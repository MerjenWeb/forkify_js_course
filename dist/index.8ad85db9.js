var t,r,e,n,i,o,a,u,s,c,f,h,l,v,p,d,g,y,m,b,w,S,E,A,O,x,T,_,R,I,j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function M(t){return t&&t.__esModule?t.default:t}var P={},k={},L=j.parcelRequire3a11;// Importing modules
function F(t,r,e,n,i,o,a){try{var u=t[o](a),s=u.value}catch(t){e(t);return}u.done?r(s):Promise.resolve(s).then(n,i)}function N(t){return function(){var r=this,e=arguments;return new Promise(function(n,i){var o=t.apply(r,e);function a(t){F(o,n,i,a,u,"next",t)}function u(t){F(o,n,i,a,u,"throw",t)}a(void 0)})}}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */function U(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function C(t,r){var e,n,i,o,a=function(t){return function(r){return u([t,r])}},u=function(a){if(e)throw TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(e=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(t,s)}catch(t){a=[6,t],n=0}finally{e=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}},s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o}null==L&&((L=function(t){if(t in P)return P[t].exports;if(t in k){var r=k[t];delete k[t];var e={id:t,exports:{}};return P[t]=e,r.call(e.exports,e,e.exports),e.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,r){k[t]=r},j.parcelRequire3a11=L),L.register("iKXx1",function(t,r){Object.defineProperty(t.exports,"getBundleURL",{get:function(){return e},set:function(t){return e=t},enumerable:!0,configurable:!0});var e,n={};e=function(t){var r=n[t];return r||(r=function(){try{throw Error()}catch(r){var t=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[t]=r),r}}),"function"==typeof SuppressedError&&SuppressedError;var D={},B={},z=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
B=z("object"==typeof globalThis&&globalThis)||z("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
z("object"==typeof self&&self)||z("object"==typeof j&&j)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||B||Function("return this")();var q={},H={};// Detect IE8's incomplete defineProperty implementation
q=!(H=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var G={},W={};W=!H(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var V=Function.prototype.call;G=W?V.bind(V):function(){return V.apply(V,arguments)};var $={}.propertyIsEnumerable,Y=Object.getOwnPropertyDescriptor;ue=Y&&!$.call({1:2},1)?function(t){var r=Y(this,t);return!!r&&r.enumerable}:$;var J={};J=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var K={},X={},Q={},Z=Function.prototype,tt=Z.call,tr=W&&Z.bind.bind(tt,tt),te={},tn=(Q=W?tr:function(t){return function(){return tt.apply(t,arguments)}})({}.toString),ti=Q("".slice);te=function(t){return ti(tn(t),8,-1)};var to=Object,ta=Q("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
X=H(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!to("z").propertyIsEnumerable(0)})?function(t){return"String"===te(t)?ta(t,""):to(t)}:to;var tu={},ts={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
ts=function(t){return null==t};var tc=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
tu=function(t){if(ts(t))throw new tc("Can't call method on "+t);return t},K=function(t){return X(tu(t))};var tf={},th={},tl={},tv={},tp={},tg="object"==typeof document&&document.all,ty=(tp={all:tg,IS_HTMLDDA:void 0===tg&&void 0!==tg}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
tv=tp.IS_HTMLDDA?function(t){return"function"==typeof t||t===ty}:function(t){return"function"==typeof t};var tm=tp.all;tl=tp.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:tv(t)||t===tm}:function(t){return"object"==typeof t?null!==t:tv(t)};var tb={},tw={};tw=function(t,r){var e;return arguments.length<2?(e=B[t],tv(e)?e:void 0):B[t]&&B[t][r]};var tS={};tS=Q({}.isPrototypeOf);var tE={},tA={},tO={},tx={};tx="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tT=B.process,t_=B.Deno,tR=tT&&tT.versions||t_&&t_.version,tI=tR&&tR.v8;tI&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(ui=(un=tI.split("."))[0]>0&&un[0]<4?1:+(un[0]+un[1])),!ui&&tx&&(!(un=tx.match(/Edge\/(\d+)/))||un[1]>=74)&&(un=tx.match(/Chrome\/(\d+)/))&&(ui=+un[1]),tO=ui;var tj=B.String;tE=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tA=!!Object.getOwnPropertySymbols&&!H(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tj(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tO&&tO<41}))&&!Symbol.sham&&"symbol"==U(Symbol.iterator);var tM=Object;tb=tE?function(t){return(void 0===t?"undefined":U(t))=="symbol"}:function(t){var r=tw("Symbol");return tv(r)&&tS(r.prototype,tM(t))};var tP={},tk={},tL={},tF=String;tL=function(t){try{return tF(t)}catch(t){return"Object"}};var tN=TypeError;// `Assert: IsCallable(argument) is true`
tk=function(t){if(tv(t))return t;throw new tN(tL(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tP=function(t,r){var e=t[r];return ts(e)?void 0:tk(e)};var tU={},tC=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tU=function(t,r){var e,n;if("string"===r&&tv(e=t.toString)&&!tl(n=G(e,t))||tv(e=t.valueOf)&&!tl(n=G(e,t))||"string"!==r&&tv(e=t.toString)&&!tl(n=G(e,t)))return n;throw new tC("Can't convert object to primitive value")};var tD={},tB={},tz={};tz=!1;var tq={},tH={},tG=Object.defineProperty;tH=function(t,r){try{tG(B,t,{value:r,configurable:!0,writable:!0})}catch(e){B[t]=r}return r};var tW="__core-js_shared__";tq=B[tW]||tH(tW,{}),(tB=function(t,r){return tq[t]||(tq[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.33.0",mode:tz?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var tV={},t$={},tY=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
t$=function(t){return tY(tu(t))};var tJ=Q({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tV=Object.hasOwn||function(t,r){return tJ(t$(t),r)};var tK={},tX=0,tQ=Math.random(),tZ=Q(1..toString);tK=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tZ(++tX+tQ,36)};var t0=B.Symbol,t1=tB("wks"),t2=tE?t0.for||t0:t0&&t0.withoutSetter||tK,t5=TypeError,t3=(tD=function(t){return tV(t1,t)||(t1[t]=tA&&tV(t0,t)?t0[t]:t2("Symbol."+t)),t1[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
th=function(t,r){if(!tl(t)||tb(t))return t;var e,n=tP(t,t3);if(n){if(void 0===r&&(r="default"),e=G(n,t,r),!tl(e)||tb(e))return e;throw new t5("Can't convert object to primitive value")}return void 0===r&&(r="number"),tU(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
tf=function(t){var r=th(t,"string");return tb(r)?r:r+""};var t6={},t4={},t8=B.document,t7=tl(t8)&&tl(t8.createElement);t4=function(t){return t7?t8.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
t6=!q&&!H(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(t4("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var t9=Object.getOwnPropertyDescriptor,rt=ur=q?t9:function(t,r){if(t=K(t),r=tf(r),t6)try{return t9(t,r)}catch(t){}if(tV(t,r))return J(!G(ue,t,r),t[r])},rr={},re={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
re=q&&H(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var rn={},ri=String,ro=TypeError;// `Assert: Type(argument) is Object`
rn=function(t){if(tl(t))return t;throw new ro(ri(t)+" is not an object")};var ra=TypeError,ru=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,rc="enumerable",rf="configurable",rh="writable";uo=q?re?function(t,r,e){if(rn(t),r=tf(r),rn(e),"function"==typeof t&&"prototype"===r&&"value"in e&&rh in e&&!e[rh]){var n=rs(t,r);n&&n[rh]&&(t[r]=e.value,e={configurable:rf in e?e[rf]:n[rf],enumerable:rc in e?e[rc]:n[rc],writable:!1})}return ru(t,r,e)}:ru:function(t,r,e){if(rn(t),r=tf(r),rn(e),t6)try{return ru(t,r,e)}catch(t){}if("get"in e||"set"in e)throw new ra("Accessors not supported");return"value"in e&&(t[r]=e.value),t},rr=q?function(t,r,e){return uo(t,r,J(1,e))}:function(t,r,e){return t[r]=e,t};var rl={},rv={},rp={},rd=Function.prototype,rg=q&&Object.getOwnPropertyDescriptor,ry=tV(rd,"name"),rm=ry&&(!q||q&&rg(rd,"name").configurable),rb=(rp={EXISTS:ry,PROPER:ry&&"something"===(function(){}).name,CONFIGURABLE:rm}).CONFIGURABLE,rw={},rS=Q(Function.toString);tv(tq.inspectSource)||(tq.inspectSource=function(t){return rS(t)}),rw=tq.inspectSource;var rE={},rA={},rO=B.WeakMap;rA=tv(rO)&&/native code/.test(String(rO));var rx={},rT=tB("keys");rx=function(t){return rT[t]||(rT[t]=tK(t))};var r_={};r_={};var rR="Object already initialized",rI=B.TypeError,rj=B.WeakMap;if(rA||tq.state){var rM=tq.state||(tq.state=new rj);/* eslint-disable no-self-assign -- prototype methods protection */rM.get=rM.get,rM.has=rM.has,rM.set=rM.set,/* eslint-enable no-self-assign -- prototype methods protection */ua=function(t,r){if(rM.has(t))throw new rI(rR);return r.facade=t,rM.set(t,r),r},uu=function(t){return rM.get(t)||{}},us=function(t){return rM.has(t)}}else{var rP=rx("state");r_[rP]=!0,ua=function(t,r){if(tV(t,rP))throw new rI(rR);return r.facade=t,rr(t,rP,r),r},uu=function(t){return tV(t,rP)?t[rP]:{}},us=function(t){return tV(t,rP)}}var rk=(rE={set:ua,get:uu,has:us,enforce:function(t){return us(t)?uu(t):ua(t,{})},getterFor:function(t){return function(r){var e;if(!tl(r)||(e=uu(r)).type!==t)throw new rI("Incompatible receiver, "+t+" required");return e}}}).enforce,rL=rE.get,rF=String,rN=Object.defineProperty,rU=Q("".slice),rC=Q("".replace),rD=Q([].join),rB=q&&!H(function(){return 8!==rN(function(){},"length",{value:8}).length}),rz=String(String).split("String"),rq=rv=function(t,r,e){"Symbol("===rU(rF(r),0,7)&&(r="["+rC(rF(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!tV(t,"name")||rb&&t.name!==r)&&(q?rN(t,"name",{value:r,configurable:!0}):t.name=r),rB&&e&&tV(e,"arity")&&t.length!==e.arity&&rN(t,"length",{value:e.arity});try{e&&tV(e,"constructor")&&e.constructor?q&&rN(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=rk(t);return tV(n,"source")||(n.source=rD(rz,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=rq(function(){return tv(this)&&rL(this).source||rw(this)},"toString"),rl=function(t,r,e,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:r;if(tv(e)&&rv(e,o,n),n.global)i?t[r]=e:tH(r,e);else{try{n.unsafe?t[r]&&(i=!0):delete t[r]}catch(t){}i?t[r]=e:uo(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var rH={},rG={},rW={},rV={},r$={},rY={},rJ={},rK=Math.ceil,rX=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
rJ=Math.trunc||function(t){var r=+t;return(r>0?rX:rK)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
rY=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:rJ(r)};var rQ=Math.max,rZ=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
r$=function(t,r){var e=rY(t);return e<0?rQ(e+r,0):rZ(e,r)};var r0={},r1={},r2=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
r1=function(t){return t>0?r2(rY(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
r0=function(t){return r1(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var r5=function(t){return function(r,e,n){var i,o=K(r),a=r0(o),u=r$(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&e!=e){for(;a>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[u++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>u;u++)if((t||u in o)&&o[u]===e)return t||u||0;return!t&&-1}},r3=(rV={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:r5(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:r5(!1)}).indexOf,r6=Q([].push);rW=function(t,r){var e,n=K(t),i=0,o=[];for(e in n)!tV(r_,e)&&tV(n,e)&&r6(o,e);// Don't enum bug & hidden keys
for(;r.length>i;)tV(n,e=r[i++])&&(~r3(o,e)||r6(o,e));return o};var r4={},r8=// IE8- don't enum bug keys
(r4=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");uc=Object.getOwnPropertyNames||function(t){return rW(t,r8)},uf=Object.getOwnPropertySymbols;var r7=Q([].concat);// all object keys, includes non-enumerable and symbols
rG=tw("Reflect","ownKeys")||function(t){var r=uc(rn(t)),e=uf;return e?r7(r,e(t)):r},rH=function(t,r,e){for(var n=rG(r),i=uo,o=ur,a=0;a<n.length;a++){var u=n[a];tV(t,u)||e&&tV(e,u)||i(t,u,o(r,u))}};var r9={},et=/#|\.prototype\./,er=function(t,r){var e=en[ee(t)];return e===eo||e!==ei&&(tv(r)?H(r):!!r)},ee=er.normalize=function(t){return String(t).replace(et,".").toLowerCase()},en=er.data={},ei=er.NATIVE="N",eo=er.POLYFILL="P";r9=er,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/D=function(t,r){var e,n,i,o,a,u=t.target,s=t.global,c=t.stat;if(e=s?B:c?B[u]||tH(u,{}):(B[u]||{}).prototype)for(n in r){// contained in target
if(o=r[n],i=t.dontCallGetSet?(a=rt(e,n))&&a.value:e[n],!r9(s?n:u+(c?".":"#")+n,t.forced)&&void 0!==i){if((void 0===o?"undefined":U(o))==(void 0===i?"undefined":U(i)))continue;rH(o,i)}(t.sham||i&&i.sham)&&rr(o,"sham",!0),rl(e,n,o,t)}};var ea={},eu={},es={},ec=tD("toStringTag"),ef={};ef[ec]="z",es="[object z]"===String(ef);var eh=tD("toStringTag"),el=Object,ev="Arguments"===te(function(){return arguments}()),ep=function(t,r){try{return t[r]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
eu=es?te:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=ep(r=el(t),eh))?e:ev?te(r):"Object"===(n=te(r))&&tv(r.callee)?"Arguments":n};var ed=String;ea=function(t){if("Symbol"===eu(t))throw TypeError("Cannot convert a Symbol value to a string");return ed(t)};var eg={},ey={};// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
ey=Object.keys||function(t){return rW(t,r4)},uh=q&&!re?Object.defineProperties:function(t,r){rn(t);for(var e,n=K(r),i=ey(r),o=i.length,a=0;o>a;)uo(t,e=i[a++],n[e]);return t};var em={};em=tw("document","documentElement");var eb="prototype",ew="script",eS=rx("IE_PROTO"),eE=function(){},eA=function(t){return"<"+ew+">"+t+"</"+ew+">"},eO=function(t){t.write(eA("")),t.close();var r=t.parentWindow.Object;return t=null,r},ex=function(){// Thrash, waste and sodomy: IE GC bug
var t,r=t4("iframe");return r.style.display="none",em.appendChild(r),// https://github.com/zloirock/core-js/issues/475
r.src=String("java"+ew+":"),(t=r.contentWindow.document).open(),t.write(eA("document.F=Object")),t.close(),t.F},eT=function(){try{ul=new ActiveXObject("htmlfile")}catch(t){}eT="undefined"!=typeof document?document.domain&&ul?eO(ul)// old IE
:ex():eO(ul);// WSH
for(var t=r4.length;t--;)delete eT[eb][r4[t]];return eT()};r_[eS]=!0,// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
eg=Object.create||function(t,r){var e;return null!==t?(eE[eb]=rn(t),e=new eE,eE[eb]=null,// add "__proto__" for Object.getPrototypeOf polyfill
e[eS]=t):e=eT(),void 0===r?e:uh(e,r)};var e_=uc,eR={},eI={};eI=function(t,r,e){var n=tf(r);n in t?uo(t,n,J(0,e)):t[n]=e};var ej=Array,eM=Math.max;eR=function(t,r,e){for(var n=r0(t),i=r$(r,n),o=r$(void 0===e?n:e,n),a=ej(eM(o-i,0)),u=0;i<o;i++,u++)eI(a,u,t[i]);return a.length=u,a};var eP="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ek=function(t){try{return e_(t)}catch(t){return eR(eP)}};uv=function(t){return eP&&"Window"===te(t)?ek(t):e_(K(t))};var eL={};eL=function(t,r,e){return e.get&&rv(e.get,r,{getter:!0}),e.set&&rv(e.set,r,{setter:!0}),uo(t,r,e)},up=tD;var eF={},eN={};eN=B;var eU=uo;eF=function(t){var r=eN.Symbol||(eN.Symbol={});tV(r,t)||eU(r,t,{value:up(t)})};var eC={};eC=function(){var t=tw("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,n=tD("toPrimitive");r&&!r[n]&&// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
// eslint-disable-next-line no-unused-vars -- required for .length
rl(r,n,function(t){return G(e,this)},{arity:1})};var eD={},eB=uo,ez=tD("toStringTag");eD=function(t,r,e){t&&!e&&(t=t.prototype),t&&!tV(t,ez)&&eB(t,ez,{configurable:!0,value:r})};var eq={},eH={},eG={},eW=(eG=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===te(t))return Q(t)})(eG.bind);// optional / simple context binding
eH=function(t,r){return tk(t),void 0===r?t:W?eW(t,r):function(){return t.apply(r,arguments)}};var eV={},e$={},eY={};// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
eY=Array.isArray||function(t){return"Array"===te(t)};var eJ={},eK=function(){},eX=[],eQ=tw("Reflect","construct"),eZ=/^\s*(?:class|function)\b/,e0=Q(eZ.exec),e1=!eZ.test(eK),e2=function(t){if(!tv(t))return!1;try{return eQ(eK,eX,t),!0}catch(t){return!1}},e5=function(t){if(!tv(t))return!1;switch(eu(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{// we can't check .prototype since constructors produced by .bind haven't it
// `Function#toString` throws on some built-it function in some legacy engines
// (for example, `DOMQuad` and similar in FF41-)
return e1||!!e0(eZ,rw(t))}catch(t){return!0}};e5.sham=!0,// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
eJ=!eQ||H(function(){var t;return e2(e2.call)||!e2(Object)||!e2(function(){t=!0})||t})?e5:e2;var e3=tD("species"),e6=Array;// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
e$=function(t){var r;return eY(t)&&(r=t.constructor,eJ(r)&&(r===e6||eY(r.prototype))?r=void 0:tl(r)&&null===(r=r[e3])&&(r=void 0)),void 0===r?e6:r},// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eV=function(t,r){return new(e$(t))(0===r?0:r)};var e4=Q([].push),e8=function(t){var r=1===t,e=2===t,n=3===t,i=4===t,o=6===t,a=7===t,u=5===t||o;return function(s,c,f,h){for(var l,v,p=t$(s),d=X(p),g=eH(c,f),y=r0(d),m=0,b=h||eV,w=r?b(s,y):e||a?b(s,0):void 0;y>m;m++)if((u||m in d)&&(v=g(l=d[m],m,p),t)){if(r)w[m]=v;// map
else if(v)switch(t){case 3:return!0;// some
case 5:return l;// find
case 6:return m;// findIndex
case 2:e4(w,l);// filter
}else switch(t){case 4:return!1;// every
case 7:e4(w,l);// filterReject
}}return o?-1:n||i?i:w}},e7=(eq={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:e8(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:e8(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:e8(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:e8(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:e8(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:e8(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:e8(6),// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
filterReject:e8(7)}).forEach,e9=rx("hidden"),nt="Symbol",nr="prototype",ne=rE.set,nn=rE.getterFor(nt),ni=Object[nr],no=B.Symbol,na=no&&no[nr],nu=B.RangeError,ns=B.TypeError,nc=B.QObject,nf=ur,nh=uo,nl=uv,nv=ue,np=Q([].push),nd=tB("symbols"),ng=tB("op-symbols"),ny=tB("wks"),nm=!nc||!nc[nr]||!nc[nr].findChild,nb=function(t,r,e){var n=nf(ni,r);n&&delete ni[r],nh(t,r,e),n&&t!==ni&&nh(ni,r,n)},nw=q&&H(function(){return 7!==eg(nh({},"a",{get:function(){return nh(this,"a",{value:7}).a}})).a})?nb:nh,nS=function(t,r){var e=nd[t]=eg(na);return ne(e,{type:nt,tag:t,description:r}),q||(e.description=r),e},nE=function(t,r,e){t===ni&&nE(ng,r,e),rn(t);var n=tf(r);return(rn(e),tV(nd,n))?(e.enumerable?(tV(t,e9)&&t[e9][n]&&(t[e9][n]=!1),e=eg(e,{enumerable:J(0,!1)})):(tV(t,e9)||nh(t,e9,J(1,{})),t[e9][n]=!0),nw(t,n,e)):nh(t,n,e)},nA=function(t,r){rn(t);var e=K(r);return e7(ey(e).concat(n_(e)),function(r){(!q||G(nO,e,r))&&nE(t,r,e[r])}),t},nO=function(t){var r=tf(t),e=G(nv,this,r);return(!(this===ni&&tV(nd,r))||!!tV(ng,r))&&(!(e||!tV(this,r)||!tV(nd,r)||tV(this,e9)&&this[e9][r])||e)},nx=function(t,r){var e=K(t),n=tf(r);if(!(e===ni&&tV(nd,n))||tV(ng,n)){var i=nf(e,n);return i&&tV(nd,n)&&!(tV(e,e9)&&e[e9][n])&&(i.enumerable=!0),i}},nT=function(t){var r=nl(K(t)),e=[];return e7(r,function(t){tV(nd,t)||tV(r_,t)||np(e,t)}),e},n_=function(t){var r=t===ni,e=nl(r?ng:K(t)),n=[];return e7(e,function(t){tV(nd,t)&&(!r||tV(ni,t))&&np(n,nd[t])}),n};tA||(na=(no=function(){if(tS(na,this))throw new ns("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?ea(arguments[0]):void 0,r=tK(t),e=function(t){this===ni&&G(e,ng,t),tV(this,e9)&&tV(this[e9],r)&&(this[e9][r]=!1);var n=J(1,t);try{nw(this,r,n)}catch(t){if(!(t instanceof nu))throw t;nb(this,r,n)}};return q&&nm&&nw(ni,r,{configurable:!0,set:e}),nS(r,t)})[nr],rl(na,"toString",function(){return nn(this).tag}),rl(no,"withoutSetter",function(t){return nS(tK(t),t)}),ue=nO,uo=nE,uh=nA,ur=nx,uc=uv=nT,uf=n_,up=function(t){return nS(tD(t),t)},q&&(// https://github.com/tc39/proposal-Symbol-description
eL(na,"description",{configurable:!0,get:function(){return nn(this).description}}),tz||rl(ni,"propertyIsEnumerable",nO,{unsafe:!0}))),D({global:!0,constructor:!0,wrap:!0,forced:!tA,sham:!tA},{Symbol:no}),e7(ey(ny),function(t){eF(t)}),D({target:nt,stat:!0,forced:!tA},{useSetter:function(){nm=!0},useSimple:function(){nm=!1}}),D({target:"Object",stat:!0,forced:!tA,sham:!q},{// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
create:function(t,r){return void 0===r?eg(t):nA(eg(t),r)},// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
defineProperty:nE,// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
defineProperties:nA,// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:nx}),D({target:"Object",stat:!0,forced:!tA},{// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:nT}),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eC(),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eD(no,nt),r_[e9]=!0;var nR={};/* eslint-disable es/no-symbol -- safe */nR=tA&&!!Symbol.for&&!!Symbol.keyFor;var nI=tB("string-to-symbol-registry"),nj=tB("symbol-to-string-registry");// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
D({target:"Symbol",stat:!0,forced:!nR},{for:function(t){var r=ea(t);if(tV(nI,r))return nI[r];var e=tw("Symbol")(r);return nI[r]=e,nj[e]=r,e}});var nM=tB("symbol-to-string-registry");// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
D({target:"Symbol",stat:!0,forced:!nR},{keyFor:function(t){if(!tb(t))throw TypeError(tL(t)+" is not a symbol");if(tV(nM,t))return nM[t]}});var nP={},nk=Function.prototype,nL=nk.apply,nF=nk.call;// eslint-disable-next-line es/no-reflect -- safe
nP="object"==typeof Reflect&&Reflect.apply||(W?nF.bind(nL):function(){return nF.apply(nL,arguments)});var nN={};nN=Q([].slice);var nU={},nC=Q([].push);nU=function(t){if(tv(t))return t;if(eY(t)){for(var r=t.length,e=[],n=0;n<r;n++){var i=t[n];"string"==typeof i?nC(e,i):("number"==typeof i||"Number"===te(i)||"String"===te(i))&&nC(e,ea(i))}var o=e.length,a=!0;return function(t,r){if(a)return a=!1,r;if(eY(this))return r;for(var n=0;n<o;n++)if(e[n]===t)return r}}};var nD=String,nB=tw("JSON","stringify"),nz=Q(/./.exec),nq=Q("".charAt),nH=Q("".charCodeAt),nG=Q("".replace),nW=Q(1..toString),nV=/[\uD800-\uDFFF]/g,n$=/^[\uD800-\uDBFF]$/,nY=/^[\uDC00-\uDFFF]$/,nJ=!tA||H(function(){var t=tw("Symbol")("stringify detection");// MS Edge converts symbol values to JSON as {}
return"[null]"!==nB([t])||"{}"!==nB({a:t})||"{}"!==nB(Object(t))}),nK=H(function(){return'"\udf06\ud834"'!==nB("\uDF06\uD834")||'"\udead"'!==nB("\uDEAD")}),nX=function(t,r){var e=nN(arguments),n=nU(r);if(!(!tv(n)&&(void 0===t||tb(t))))return e[1]=function(t,r){if(tv(n)&&(r=G(n,this,nD(t),r)),!tb(r))return r},nP(nB,null,e);// IE8 returns string on undefined
},nQ=function(t,r,e){var n=nq(e,r-1),i=nq(e,r+1);return nz(n$,t)&&!nz(nY,i)||nz(nY,t)&&!nz(n$,n)?"\\u"+nW(nH(t,0),16):t};nB&&// https://tc39.es/ecma262/#sec-json.stringify
D({target:"JSON",stat:!0,arity:3,forced:nJ||nK},{// eslint-disable-next-line no-unused-vars -- required for `.length`
stringify:function(t,r,e){var n=nN(arguments),i=nP(nJ?nX:nB,null,n);return nK&&"string"==typeof i?nG(i,nV,nQ):i}});// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var nZ=!tA||H(function(){uf(1)});// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
D({target:"Object",stat:!0,forced:nZ},{getOwnPropertySymbols:function(t){var r=uf;return r?r(t$(t)):[]}});var n0=B.Symbol,n1=n0&&n0.prototype;if(q&&tv(n0)&&(!("description"in n1)||// Safari 12 bug
void 0!==n0().description)){var n2={},n5=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:ea(arguments[0]),r=tS(n1,this)?new n0(t):void 0===t?n0():n0(t);return""===t&&(n2[r]=!0),r};rH(n5,n0),n5.prototype=n1,n1.constructor=n5;var n3="Symbol(description detection)"===String(n0("description detection")),n6=Q(n1.valueOf),n4=Q(n1.toString),n8=/^Symbol\((.*)\)[^)]+$/,n7=Q("".replace),n9=Q("".slice);eL(n1,"description",{configurable:!0,get:function(){var t=n6(this);if(tV(n2,t))return"";var r=n4(t),e=n3?n9(r,7,-1):n7(r,n8,"$1");return""===e?void 0:e}}),D({global:!0,constructor:!0,forced:!0},{Symbol:n5})}// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
eF("asyncIterator"),// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
eF("hasInstance"),// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
eF("isConcatSpreadable"),// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
eF("iterator"),// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
eF("match"),// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
eF("replace"),// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
eF("search"),// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
eF("species"),// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
eF("split"),// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
eF("toPrimitive"),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eC(),// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
eF("toStringTag"),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eD(tw("Symbol"),"Symbol"),// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
eF("unscopables");var it={},ir=TypeError;it=function(t){if(t>9007199254740991)throw ir("Maximum allowed index exceeded");return t};var ie={},ii=tD("species");ie=function(t){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return tO>=51||!H(function(){var r=[];return(r.constructor={})[ii]=function(){return{foo:1}},1!==r[t](Boolean).foo})};var io=tD("isConcatSpreadable"),ia=tO>=51||!H(function(){var t=[];return t[io]=!1,t.concat()[0]!==t}),iu=function(t){if(!tl(t))return!1;var r=t[io];return void 0!==r?!!r:eY(t)},is=!ia||!ie("concat");// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
D({target:"Array",proto:!0,arity:1,forced:is},{// eslint-disable-next-line no-unused-vars -- required for `.length`
concat:function(t){var r,e,n,i,o,a=t$(this),u=eV(a,0),s=0;for(r=-1,n=arguments.length;r<n;r++)if(o=-1===r?a:arguments[r],iu(o))for(i=r0(o),it(s+i),e=0;e<i;e++,s++)e in o&&eI(u,s,o[e]);else it(s+1),eI(u,s++,o);return u.length=s,u}});var ic={},ih={},il=TypeError;ih=function(t,r){if(!delete t[r])throw new il("Cannot delete property "+tL(r)+" of "+tL(t))};var iv=Math.min;// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
ic=[].copyWithin||function(t/* = 0 */,r/* = 0, end = @length */){var e=t$(this),n=r0(e),i=r$(t,n),o=r$(r,n),a=arguments.length>2?arguments[2]:void 0,u=iv((void 0===a?n:r$(a,n))-o,n-i),s=1;for(o<i&&i<o+u&&(s=-1,o+=u-1,i+=u-1);u-- >0;)o in e?e[i]=e[o]:ih(e,i),i+=s,o+=s;return e};var ip={},id=uo,ig=tD("unscopables"),iy=Array.prototype;void 0===iy[ig]&&id(iy,ig,{configurable:!0,value:eg(null)}),// add a key to Array.prototype[@@unscopables]
ip=function(t){iy[ig][t]=!0},// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
D({target:"Array",proto:!0},{copyWithin:ic}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip("copyWithin");var im=eq.every,ib={},iw=(ib=function(t,r){var e=[][t];return!!e&&H(function(){// eslint-disable-next-line no-useless-call -- required for testing
e.call(null,r||function(){return 1},1)})})("every");// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
D({target:"Array",proto:!0,forced:!iw},{every:function(t/* , thisArg */){return im(this,t,arguments.length>1?arguments[1]:void 0)}});var iS={};// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
D({target:"Array",proto:!0},{fill:// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
iS=function(t/* , start = 0, end = @length */){for(var r=t$(this),e=r0(r),n=arguments.length,i=r$(n>1?arguments[1]:void 0,e),o=n>2?arguments[2]:void 0,a=void 0===o?e:r$(o,e);a>i;)r[i++]=t;return r}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip("fill");var iE=eq.filter,iA=ie("filter");// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
D({target:"Array",proto:!0,forced:!iA},{filter:function(t/* , thisArg */){return iE(this,t,arguments.length>1?arguments[1]:void 0)}});var iO=eq.find,ix="find",iT=!0;ix in[]&&[,][ix](function(){iT=!1}),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
D({target:"Array",proto:!0,forced:iT},{find:function(t/* , that = undefined */){return iO(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip(ix);var i_=eq.findIndex,iR="findIndex",iI=!0;iR in[]&&[,][iR](function(){iI=!1}),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
D({target:"Array",proto:!0,forced:iI},{findIndex:function(t/* , that = undefined */){return i_(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip(iR);var ij={},iM=function(t,r,e,n,i,o,a,u){for(var s,c,f=i,h=0,l=!!a&&eH(a,u);h<n;)h in e&&(s=l?l(e[h],h,r):e[h],o>0&&eY(s)?(c=r0(s),f=iM(t,r,s,c,f,o-1)-1):(it(f+1),t[f]=s),f++),h++;return f};ij=iM,// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
D({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=t$(this),e=r0(r),n=eV(r,0);return n.length=ij(n,r,r,e,0,void 0===t?1:rY(t)),n}}),// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
D({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */){var r,e=t$(this),n=r0(e);return tk(t),(r=eV(e,0)).length=ij(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}});var iP={},ik=eq.forEach;// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
iP=ib("forEach")?[].forEach:function(t/* , thisArg */){return ik(this,t,arguments.length>1?arguments[1]:void 0);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
},// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
D({target:"Array",proto:!0,forced:[].forEach!==iP},{forEach:iP});var iL={},iF={},iN={};iN=function(t,r,e){var n,i;rn(t);try{if(!(n=tP(t,"return"))){if("throw"===r)throw e;return e}n=G(n,t)}catch(t){i=!0,n=t}if("throw"===r)throw e;if(i)throw n;return rn(n),e},// call something on iterator step with safe closing on error
iF=function(t,r,e,n){try{return n?r(rn(e)[0],e[1]):r(e)}catch(r){iN(t,"throw",r)}};var iU={},iC={};iC={};var iD=tD("iterator"),iB=Array.prototype;// check on default Array iterator
iU=function(t){return void 0!==t&&(iC.Array===t||iB[iD]===t)};var iz={},iq={},iH=tD("iterator");iq=function(t){if(!ts(t))return tP(t,iH)||tP(t,"@@iterator")||iC[eu(t)]};var iG=TypeError;iz=function(t,r){var e=arguments.length<2?iq(t):r;if(tk(e))return rn(G(e,t));throw new iG(tL(t)+" is not iterable")};var iW=Array;// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
iL=function(t/* , mapfn = undefined, thisArg = undefined */){var r,e,n,i,o,a,u=t$(t),s=eJ(this),c=arguments.length,f=c>1?arguments[1]:void 0,h=void 0!==f;h&&(f=eH(f,c>2?arguments[2]:void 0));var l=iq(u),v=0;// if the target is not iterable or it's an array with the default iterator - use a simple case
if(l&&!(this===iW&&iU(l)))for(o=(i=iz(u,l)).next,e=s?new this:[];!(n=G(o,i)).done;v++)a=h?iF(i,f,[n.value,v],!0):n.value,eI(e,v,a);else for(r=r0(u),e=s?new this(r):iW(r);r>v;v++)a=h?f(u[v],v):u[v],eI(e,v,a);return e.length=v,e};var iV={},i$=tD("iterator"),iY=!1;try{var iJ=0,iK={next:function(){return{done:!!iJ++}},return:function(){iY=!0}};iK[i$]=function(){return this},// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(iK,function(){throw 2})}catch(t){}var iX=!(iV=function(t,r){try{if(!r&&!iY)return!1}catch(t){return!1}// workaround of old WebKit + `eval` bug
var e=!1;try{var n={};n[i$]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e})(function(t){// eslint-disable-next-line es/no-array-from -- required for testing
Array.from(t)});// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
D({target:"Array",stat:!0,forced:iX},{from:iL});var iQ=rV.includes,iZ=H(function(){// eslint-disable-next-line es/no-array-prototype-includes -- detection
return![,].includes()});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
D({target:"Array",proto:!0,forced:iZ},{includes:function(t/* , fromIndex = 0 */){return iQ(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip("includes");var i0=rV.indexOf,i1=eG([].indexOf),i2=!!i1&&1/i1([1],1,-0)<0,i5=i2||!ib("indexOf");// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
D({target:"Array",proto:!0,forced:i5},{indexOf:function(t/* , fromIndex = 0 */){var r=arguments.length>1?arguments[1]:void 0;return i2?i1(this,t,r)||0:i0(this,t,r)}}),// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
D({target:"Array",stat:!0},{isArray:eY});var i3={},i6=uo,i4={},i8={},i7={},i9={},ot={};ot=!H(function(){var t=function(){};// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var or=rx("IE_PROTO"),oe=Object,on=oe.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
i9=ot?oe.getPrototypeOf:function(t){var r=t$(t);if(tV(r,or))return r[or];var e=r.constructor;return tv(e)&&r instanceof e?e.prototype:r instanceof oe?on:null};var oi=tD("iterator"),oo=!1;[].keys&&("next"in(uy=[].keys())?(ug=i9(i9(uy)))!==Object.prototype&&(ud=ug):oo=!0),!tl(ud)||H(function(){var t={};// FF44- legacy iterators case
return ud[oi].call(t)!==t})?ud={}:tz&&(ud=eg(ud)),tv(ud[oi])||rl(ud,oi,function(){return this});var oa=(i7={IteratorPrototype:ud,BUGGY_SAFARI_ITERATORS:oo}).IteratorPrototype,ou=function(){return this};i8=function(t,r,e,n){var i=r+" Iterator";return t.prototype=eg(oa,{next:J(+!n,e)}),eD(t,i,!1,!0),iC[i]=ou,t};var os={},oc={};oc=function(t,r,e){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return Q(tk(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}};var of={},oh=String,ol=TypeError;of=function(t){if("object"==typeof t||tv(t))return t;throw new ol("Can't set "+oh(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
os=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=oc(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return rn(e),of(n),r?t(e,n):e.__proto__=n,e}}():void 0);var ov=rp.PROPER,op=rp.CONFIGURABLE,od=i7.IteratorPrototype,og=i7.BUGGY_SAFARI_ITERATORS,oy=tD("iterator"),om="keys",ob="values",ow="entries",oS=function(){return this};i4=function(t,r,e,n,i,o,a){i8(e,r,n);var u,s,c,f=function(t){if(t===i&&d)return d;if(!og&&t&&t in v)return v[t];switch(t){case om:case ob:case ow:return function(){return new e(this,t)}}return function(){return new e(this)}},h=r+" Iterator",l=!1,v=t.prototype,p=v[oy]||v["@@iterator"]||i&&v[i],d=!og&&p||f(i),g="Array"===r&&v.entries||p;// export additional methods
if(g&&(u=i9(g.call(new t)))!==Object.prototype&&u.next&&(tz||i9(u)===od||(os?os(u,od):tv(u[oy])||rl(u,oy,oS)),// Set @@toStringTag to native iterators
eD(u,h,!0,!0),tz&&(iC[h]=oS)),ov&&i===ob&&p&&p.name!==ob&&(!tz&&op?rr(v,"name",ob):(l=!0,d=function(){return G(p,this)})),i){if(s={values:f(ob),keys:o?d:f(om),entries:f(ow)},a)for(c in s)!og&&!l&&c in v||rl(v,c,s[c]);else D({target:r,proto:!0,forced:og||l},s)}return(!tz||a)&&v[oy]!==d&&rl(v,oy,d,{name:i}),iC[r]=d,s};var oE={};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
oE=function(t,r){return{value:t,done:r}};var oA="Array Iterator",oO=rE.set,ox=rE.getterFor(oA);// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
i3=i4(Array,"Array",function(t,r){oO(this,{type:oA,target:K(t),index:0,kind:r// kind
});// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=ox(this),r=t.target,e=t.kind,n=t.index++;if(!r||n>=r.length)return t.target=void 0,oE(void 0,!0);switch(e){case"keys":return oE(n,!1);case"values":return oE(r[n],!1)}return oE([n,r[n]],!1)},"values");// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var oT=iC.Arguments=iC.Array;// V8 ~ Chrome 45- bug
if(// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip("keys"),ip("values"),ip("entries"),!tz&&q&&"values"!==oT.name)try{i6(oT,"name",{value:"values"})}catch(t){}var o_=Q([].join),oR=X!==Object||!ib("join",",");// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
D({target:"Array",proto:!0,forced:oR},{join:function(t){return o_(K(this),void 0===t?",":t)}});var oI={},oj=Math.min,oM=[].lastIndexOf,oP=!!oM&&1/[1].lastIndexOf(1,-0)<0,ok=ib("lastIndexOf");// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
D({target:"Array",proto:!0,forced:// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
(oI=oP||!ok?function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(oP)return nP(oM,this,arguments)||0;var r=K(this),e=r0(r),n=e-1;for(arguments.length>1&&(n=oj(n,rY(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return -1}:oM)!==[].lastIndexOf},{lastIndexOf:oI});var oL=eq.map,oF=ie("map");// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
D({target:"Array",proto:!0,forced:!oF},{map:function(t/* , thisArg */){return oL(this,t,arguments.length>1?arguments[1]:void 0)}});var oN=Array,oU=H(function(){var t=function(){};// eslint-disable-next-line es/no-array-of -- safe
return!(oN.of.call(t) instanceof t)});// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
D({target:"Array",stat:!0,forced:oU},{of:function(){for(var t=0,r=arguments.length,e=new(eJ(this)?this:oN)(r);r>t;)eI(e,t,arguments[t++]);return e.length=r,e}});var oC={},oD=TypeError,oB=function(t){return function(r,e,n,i){tk(e);var o=t$(r),a=X(o),u=r0(o),s=t?u-1:0,c=t?-1:1;if(n<2)for(;;){if(s in a){i=a[s],s+=c;break}if(s+=c,t?s<0:u<=s)throw new oD("Reduce of empty array with no initial value")}for(;t?s>=0:u>s;s+=c)s in a&&(i=e(i,a[s],s,o));return i}},oz=(oC={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:oB(!1),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:oB(!0)}).left,oq={},oH=!(oq="process"===te(B.process))&&tO>79&&tO<83||!ib("reduce");// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
D({target:"Array",proto:!0,forced:oH},{reduce:function(t/* , initialValue */){var r=arguments.length;return oz(this,t,r,r>1?arguments[1]:void 0)}});var oG=oC.right,oW=!oq&&tO>79&&tO<83||!ib("reduceRight");// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
D({target:"Array",proto:!0,forced:oW},{reduceRight:function(t/* , initialValue */){return oG(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var oV=Q([].reverse),o$=[1,2];// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
D({target:"Array",proto:!0,forced:String(o$)===String(o$.reverse())},{reverse:function(){return eY(this)&&(this.length=this.length),oV(this)}});var oY=ie("slice"),oJ=tD("species"),oK=Array,oX=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
D({target:"Array",proto:!0,forced:!oY},{slice:function(t,r){var e,n,i,o=K(this),a=r0(o),u=r$(t,a),s=r$(void 0===r?a:r,a);if(eY(o)&&(e=o.constructor,eJ(e)&&(e===oK||eY(e.prototype))?e=void 0:tl(e)&&null===(e=e[oJ])&&(e=void 0),e===oK||void 0===e))return nN(o,u,s);for(i=0,n=new(void 0===e?oK:e)(oX(s-u,0));u<s;u++,i++)u in o&&eI(n,i,o[u]);return n.length=i,n}});var oQ=eq.some,oZ=ib("some");// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
D({target:"Array",proto:!0,forced:!oZ},{some:function(t/* , thisArg */){return oQ(this,t,arguments.length>1?arguments[1]:void 0)}});var o0={},o1=Math.floor,o2=function(t,r){var e=t.length,n=o1(e/2);return e<8?o5(t,r):o3(t,o2(eR(t,0,n),r),o2(eR(t,n),r),r)},o5=function(t,r){for(var e,n,i=t.length,o=1;o<i;){for(n=o,e=t[o];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==o++&&(t[n]=e)}return t},o3=function(t,r,e,n){for(var i=r.length,o=e.length,a=0,u=0;a<i||u<o;)t[a+u]=a<i&&u<o?0>=n(r[a],e[u])?r[a++]:e[u++]:a<i?r[a++]:e[u++];return t};o0=o2;var o6={},o4=tx.match(/firefox\/(\d+)/i);o6=!!o4&&+o4[1];var o8={};o8=/MSIE|Trident/.test(tx);var o7={},o9=tx.match(/AppleWebKit\/(\d+)\./);o7=!!o9&&+o9[1];var at=[],ar=Q(at.sort),ae=Q(at.push),an=H(function(){at.sort(void 0)}),ai=H(function(){at.sort(null)}),ao=ib("sort"),aa=!H(function(){// feature detection can be too slow, so check engines versions
if(tO)return tO<70;if(!o6||!(o6>3)){if(o8)return!0;if(o7)return o7<603;var t,r,e,n,i="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)at.push({k:r+n,v:e})}for(at.sort(function(t,r){return r.v-t.v}),n=0;n<at.length;n++)r=at[n].k.charAt(0),i.charAt(i.length-1)!==r&&(i+=r);return"DGBEFHACIJK"!==i}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
D({target:"Array",proto:!0,forced:an||!ai||!ao||!aa},{sort:function(t){void 0!==t&&tk(t);var r,e,n=t$(this);if(aa)return void 0===t?ar(n):ar(n,t);var i=[],o=r0(n);for(e=0;e<o;e++)e in n&&ae(i,n[e]);for(o0(i,function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:ea(r)>ea(e)?1:-1}),r=r0(i),e=0;e<r;)n[e]=i[e++];for(;e<o;)ih(n,e++);return n}});var au={},as=tD("species");// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
(au=function(t){var r=tw(t);q&&r&&!r[as]&&eL(r,as,{configurable:!0,get:function(){return this}})})("Array");var ac={},af=TypeError,ah=Object.getOwnPropertyDescriptor;ac=q&&!function(){// makes no sense without proper strict mode support
if(void 0!==this)return!0;try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,r){if(eY(t)&&!ah(t,"length").writable)throw new af("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r};var al=ie("splice"),av=Math.max,ap=Math.min;// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
D({target:"Array",proto:!0,forced:!al},{splice:function(t,r/* , ...items */){var e,n,i,o,a,u,s=t$(this),c=r0(s),f=r$(t,c),h=arguments.length;for(0===h?e=n=0:1===h?(e=0,n=c-f):(e=h-2,n=ap(av(rY(r),0),c-f)),it(c+e-n),i=eV(s,n),o=0;o<n;o++)(a=f+o)in s&&eI(i,o,s[a]);if(i.length=n,e<n){for(o=f;o<c-n;o++)a=o+n,u=o+e,a in s?s[u]=s[a]:ih(s,u);for(o=c;o>c-n+e;o--)ih(s,o-1)}else if(e>n)for(o=c-n;o>f;o--)a=o+n-1,u=o+e-1,a in s?s[u]=s[a]:ih(s,u);for(o=0;o<e;o++)s[o+f]=arguments[o+2];return ac(s,c-n+e),i}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip("flat"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
ip("flatMap");var ad={},ag={};// eslint-disable-next-line es/no-typed-arrays -- safe
ag="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var ay={};ay=function(t,r,e){for(var n in r)rl(t,n,r[n],e);return t};var am={},ab=TypeError;am=function(t,r){if(tS(r,t))return t;throw new ab("Incorrect invocation")};var aw={},aS=RangeError;// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
aw=function(t){if(void 0===t)return 0;var r=rY(t),e=r1(r);if(r!==e)throw new aS("Wrong length or index");return e};var aE={},aA={},aO={};// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
aO=Math.sign||function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return 0===r||r!=r?r:r<0?-1:1};var ax=Math.abs;aA=function(t,r,e,n){var i=+t,o=ax(i),a=aO(i);if(o<n)return a*(o/n/r+4503599627370496-4503599627370496)*n*r;var u=(1+r/2220446049250313e-31)*o,s=u-(u-o);return(// eslint-disable-next-line no-self-compare -- NaN check
s>e||s!=s?a*(1/0):a*s)},// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
aE=Math.fround||function(t){return aA(t,11920928955078125e-23,34028234663852886e22,11754943508222875e-54)};var aT={},a_=Array,aR=Math.abs,aI=Math.pow,aj=Math.floor,aM=Math.log,aP=Math.LN2;aT={pack:function(t,r,e){var n,i,o,a=a_(e),u=8*e-r-1,s=(1<<u)-1,c=s>>1,f=23===r?aI(2,-24)-aI(2,-77):0,h=t<0||0===t&&1/t<0?1:0,l=0;for((t=aR(t))!=t||t===1/0?(// eslint-disable-next-line no-self-compare -- NaN check
i=t!=t?1:0,n=s):(o=aI(2,-(n=aj(aM(t)/aP))),t*o<1&&(n--,o*=2),n+c>=1?t+=f/o:t+=f*aI(2,1-c),t*o>=2&&(n++,o/=2),n+c>=s?(i=0,n=s):n+c>=1?(i=(t*o-1)*aI(2,r),n+=c):(i=t*aI(2,c-1)*aI(2,r),n=0));r>=8;)a[l++]=255&i,i/=256,r-=8;for(n=n<<r|i,u+=r;u>0;)a[l++]=255&n,n/=256,u-=8;return a[--l]|=128*h,a},unpack:function(t,r){var e,n=t.length,i=8*n-r-1,o=(1<<i)-1,a=o>>1,u=i-7,s=n-1,c=t[s--],f=127&c;for(c>>=7;u>0;)f=256*f+t[s--],u-=8;for(e=f&(1<<-u)-1,f>>=-u,u+=r;u>0;)e=256*e+t[s--],u-=8;if(0===f)f=1-a;else{if(f===o)return e?NaN:c?-1/0:1/0;e+=aI(2,r),f-=a}return(c?-1:1)*e*aI(2,f-r)}};var ak=uc,aL=rp.PROPER,aF=rp.CONFIGURABLE,aN="ArrayBuffer",aU="DataView",aC="prototype",aD="Wrong index",aB=rE.getterFor(aN),az=rE.getterFor(aU),aq=rE.set,aH=B[aN],aG=aH,aW=aG&&aG[aC],aV=B[aU],a$=aV&&aV[aC],aY=Object.prototype,aJ=B.Array,aK=B.RangeError,aX=Q(iS),aQ=Q([].reverse),aZ=aT.pack,a0=aT.unpack,a1=function(t){return[255&t]},a2=function(t){return[255&t,t>>8&255]},a5=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},a3=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},a6=function(t){return aZ(aE(t),23,4)},a4=function(t){return aZ(t,52,8)},a8=function(t,r,e){eL(t[aC],r,{configurable:!0,get:function(){return e(this)[r]}})},a7=function(t,r,e,n){var i=az(t),o=aw(e);if(o+r>i.byteLength)throw new aK(aD);var a=i.bytes,u=o+i.byteOffset,s=eR(a,u,u+r);return n?s:aQ(s)},a9=function(t,r,e,n,i,o){var a=az(t),u=aw(e),s=n(+i),c=!!o;if(u+r>a.byteLength)throw new aK(aD);for(var f=a.bytes,h=u+a.byteOffset,l=0;l<r;l++)f[h+l]=s[c?l:r-l-1]};if(ag){var ut=aL&&aH.name!==aN;/* eslint-disable no-new -- required for testing */if(!H(function(){aH(1)})||!H(function(){new aH(-1)})||H(function(){return new aH,new aH(1.5),new aH(NaN),1!==aH.length||ut&&!aF})){/* eslint-enable no-new -- required for testing */(aG=function(t){return am(this,aW),new aH(aw(t))})[aC]=aW;for(var ur,ue,un,ui,uo,ua,uu,us,uc,uf,uh,ul,uv,up,ud,ug,uy,um,ub=ak(aH),uw=0;ub.length>uw;)(um=ub[uw++])in aG||rr(aG,um,aH[um]);aW.constructor=aG}else ut&&aF&&rr(aH,"name",aN);os&&i9(a$)!==aY&&os(a$,aY);// iOS Safari 7.x bug
var uS=new aV(new aG(2)),uE=Q(a$.setInt8);uS.setInt8(0,2147483648),uS.setInt8(1,2147483649),(uS.getInt8(0)||!uS.getInt8(1))&&ay(a$,{setInt8:function(t,r){uE(this,t,r<<24>>24)},setUint8:function(t,r){uE(this,t,r<<24>>24)}},{unsafe:!0})}else aW=(aG=function(t){am(this,aW);var r=aw(t);aq(this,{type:aN,bytes:aX(aJ(r),0),byteLength:r}),q||(this.byteLength=r,this.detached=!1)})[aC],a$=(aV=function(t,r,e){am(this,a$),am(t,aW);var n=aB(t),i=n.byteLength,o=rY(r);if(o<0||o>i)throw new aK("Wrong offset");if(e=void 0===e?i-o:r1(e),o+e>i)throw new aK("Wrong length");aq(this,{type:aU,buffer:t,byteLength:e,byteOffset:o,bytes:n.bytes}),q||(this.buffer=t,this.byteLength=e,this.byteOffset=o)})[aC],q&&(a8(aG,"byteLength",aB),a8(aV,"buffer",az),a8(aV,"byteLength",az),a8(aV,"byteOffset",az)),ay(a$,{getInt8:function(t){return a7(this,1,t)[0]<<24>>24},getUint8:function(t){return a7(this,1,t)[0]},getInt16:function(t/* , littleEndian */){var r=a7(this,2,t,arguments.length>1&&arguments[1]);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t/* , littleEndian */){var r=a7(this,2,t,arguments.length>1&&arguments[1]);return r[1]<<8|r[0]},getInt32:function(t/* , littleEndian */){return a3(a7(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t/* , littleEndian */){return a3(a7(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t/* , littleEndian */){return a0(a7(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t/* , littleEndian */){return a0(a7(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,r){a9(this,1,t,a1,r)},setUint8:function(t,r){a9(this,1,t,a1,r)},setInt16:function(t,r/* , littleEndian */){a9(this,2,t,a2,r,arguments.length>2&&arguments[2])},setUint16:function(t,r/* , littleEndian */){a9(this,2,t,a2,r,arguments.length>2&&arguments[2])},setInt32:function(t,r/* , littleEndian */){a9(this,4,t,a5,r,arguments.length>2&&arguments[2])},setUint32:function(t,r/* , littleEndian */){a9(this,4,t,a5,r,arguments.length>2&&arguments[2])},setFloat32:function(t,r/* , littleEndian */){a9(this,4,t,a6,r,arguments.length>2&&arguments[2])},setFloat64:function(t,r/* , littleEndian */){a9(this,8,t,a4,r,arguments.length>2&&arguments[2])}});eD(aG,aN),eD(aV,aU);var uA="ArrayBuffer",uO=(ad={ArrayBuffer:aG,DataView:aV})[uA],ux=B[uA];// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
D({global:!0,constructor:!0,forced:ux!==uO},{ArrayBuffer:uO}),au(uA);var uT={},u_=rE.enforce,uR=rE.get,uI=B.Int8Array,uj=uI&&uI.prototype,uM=B.Uint8ClampedArray,uP=uM&&uM.prototype,uk=uI&&i9(uI),uL=uj&&i9(uj),uF=Object.prototype,uN=B.TypeError,uU=tD("toStringTag"),uC=tK("TYPED_ARRAY_TAG"),uD="TypedArrayConstructor",uB=ag&&!!os&&"Opera"!==eu(B.opera),uz=!1,uq={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},uH={BigInt64Array:8,BigUint64Array:8},uG=function(t){var r=i9(t);if(tl(r)){var e=uR(r);return e&&tV(e,uD)?e[uD]:uG(r)}},uW=function(t){if(!tl(t))return!1;var r=eu(t);return tV(uq,r)||tV(uH,r)};for(f in uq)(l=(h=B[f])&&h.prototype)?u_(l)[uD]=h:uB=!1;for(f in uH)(l=(h=B[f])&&h.prototype)&&(u_(l)[uD]=h);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!uB||!tv(uk)||uk===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
uk=function(){throw new uN("Incorrect invocation")},uB))for(f in uq)B[f]&&os(B[f],uk);if((!uB||!uL||uL===uF)&&(uL=uk.prototype,uB))for(f in uq)B[f]&&os(B[f].prototype,uL);if(uB&&i9(uP)!==uL&&os(uP,uL),q&&!tV(uL,uU))for(f in uz=!0,eL(uL,uU,{configurable:!0,get:function(){return tl(this)?this[uC]:void 0}}),uq)B[f]&&rr(B[f],uC,f);var uV=(uT={NATIVE_ARRAY_BUFFER_VIEWS:uB,TYPED_ARRAY_TAG:uz&&uC,aTypedArray:function(t){if(uW(t))return t;throw new uN("Target is not a typed array")},aTypedArrayConstructor:function(t){if(tv(t)&&(!os||tS(uk,t)))return t;throw new uN(tL(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(q){if(e)for(var i in uq){var o=B[i];if(o&&tV(o.prototype,t))try{delete o.prototype[t]}catch(e){// old WebKit bug - some methods are non-configurable
try{o.prototype[t]=r}catch(t){}}}(!uL[t]||e)&&rl(uL,t,e?r:uB&&uj[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,i;if(q){if(os){if(e){for(n in uq)if((i=B[n])&&tV(i,t))try{delete i[t]}catch(t){}}if(uk[t]&&!e)return;try{return rl(uk,t,e?r:uB&&uk[t]||r)}catch(t){}}for(n in uq)(i=B[n])&&(!i[t]||e)&&rl(i,t,r)}},getTypedArrayConstructor:uG,isView:function(t){if(!tl(t))return!1;var r=eu(t);return"DataView"===r||tV(uq,r)||tV(uH,r)},isTypedArray:uW,TypedArray:uk,TypedArrayPrototype:uL}).NATIVE_ARRAY_BUFFER_VIEWS;// `ArrayBuffer.isView` method
// https://tc39.es/ecma262/#sec-arraybuffer.isview
D({target:"ArrayBuffer",stat:!0,forced:!uV},{isView:uT.isView});var u$={},uY={},uJ=TypeError;// `Assert: IsConstructor(argument) is true`
uY=function(t){if(eJ(t))return t;throw new uJ(tL(t)+" is not a constructor")};var uK=tD("species");// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
u$=function(t,r){var e,n=rn(t).constructor;return void 0===n||ts(e=rn(n)[uK])?r:uY(e)};var uX=ad.ArrayBuffer,uQ=ad.DataView,uZ=uQ.prototype,u0=eG(uX.prototype.slice),u1=eG(uZ.getUint8),u2=eG(uZ.setUint8),u5=H(function(){return!new uX(2).slice(1,void 0).byteLength});// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
D({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:u5},{slice:function(t,r){if(u0&&void 0===r)return u0(rn(this),t);// FF fix
for(var e=rn(this).byteLength,n=r$(t,e),i=r$(void 0===r?e:r,e),o=new(u$(this,uX))(r1(i-n)),a=new uQ(this),u=new uQ(o),s=0;n<i;)u2(u,s++,u1(a,n++));return o}}),// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
D({global:!0,constructor:!0,forced:!ag},{DataView:ad.DataView});var u3=Date,u6=Q(u3.prototype.getTime);// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
D({target:"Date",stat:!0},{now:function(){return u6(new u3)}});var u4={},u8={},u7={},u9=RangeError,st=Q(// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
u7=function(t){var r=ea(tu(this)),e="",n=rY(t);if(n<0||n===1/0)throw new u9("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(r+=r))1&n&&(e+=r);return e}),sr=Q("".slice),se=Math.ceil,sn=function(t){return function(r,e,n){var i,o,a=ea(tu(r)),u=r1(e),s=a.length,c=void 0===n?" ":ea(n);return u<=s||""===c?a:((o=st(c,se((i=u-s)/c.length))).length>i&&(o=sr(o,0,i)),t?a+o:o+a)}},si=(u8={// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
start:sn(!1),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
end:sn(!0)}).start,so=RangeError,sa=isFinite,su=Math.abs,ss=Date.prototype,sc=ss.toISOString,sf=Q(ss.getTime),sh=Q(ss.getUTCDate),sl=Q(ss.getUTCFullYear),sv=Q(ss.getUTCHours),sp=Q(ss.getUTCMilliseconds),sd=Q(ss.getUTCMinutes),sg=Q(ss.getUTCMonth),sy=Q(ss.getUTCSeconds);// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
u4=H(function(){return"0385-07-25T07:06:39.999Z"!==sc.call(new Date(-50000000000001))})||!H(function(){sc.call(new Date(NaN))})?function(){if(!sa(sf(this)))throw new so("Invalid time value");var t=sl(this),r=sp(this),e=t<0?"-":t>9999?"+":"";return e+si(su(t),e?6:4,0)+"-"+si(sg(this)+1,2,0)+"-"+si(sh(this),2,0)+"T"+si(sv(this),2,0)+":"+si(sd(this),2,0)+":"+si(sy(this),2,0)+"."+si(r,3,0)+"Z"}:sc,// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
D({target:"Date",proto:!0,forced:Date.prototype.toISOString!==u4},{toISOString:u4});var sm=H(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})});// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
D({target:"Date",proto:!0,arity:1,forced:sm},{// eslint-disable-next-line no-unused-vars -- required for `.length`
toJSON:function(t){var r=t$(this),e=th(r,"number");return"number"!=typeof e||isFinite(e)?r.toISOString():null}});var sb={},sw=TypeError;// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
sb=function(t){if(rn(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw new sw("Incorrect hint");return tU(this,t)};var sS=tD("toPrimitive"),sE=Date.prototype;tV(sE,sS)||rl(sE,sS,sb);var sA=Date.prototype,sO="Invalid Date",sx="toString",sT=Q(sA[sx]),s_=Q(sA.getTime);String(new Date(NaN))!==sO&&rl(sA,sx,function(){var t=s_(this);// eslint-disable-next-line no-self-compare -- NaN check
return t==t?sT(this):sO});var sR={},sI=Function,sj=Q([].concat),sM=Q([].join),sP={},sk=function(t,r,e){if(!tV(sP,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";sP[r]=sI("C,a","return new C("+sM(n,",")+")")}return sP[r](t,e)};// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
sR=W?sI.bind:function(t/* , ...args */){var r=tk(this),e=r.prototype,n=nN(arguments,1),i=function(){var e=sj(n,nN(arguments));return this instanceof i?sk(r,e.length,e):r.apply(t,e)};return tl(e)&&(i.prototype=e),i},// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
D({target:"Function",proto:!0,forced:Function.bind!==sR},{bind:sR});var sL=tD("hasInstance"),sF=Function.prototype;sL in sF||uo(sF,sL,{value:rv(function(t){if(!tv(this)||!tl(t))return!1;var r=this.prototype;if(!tl(r))return t instanceof this;// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=i9(t);)if(r===t)return!0;return!1},sL)});var sN=rp.EXISTS,sU=Function.prototype,sC=Q(sU.toString),sD=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,sB=Q(sD.exec);q&&!sN&&eL(sU,"name",{configurable:!0,get:function(){try{return sB(sD,sC(this))[1]}catch(t){return""}}}),// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
eD(B.JSON,"JSON",!0);var sz={},sq={},sH=uo,sG={},sW={};sW=H(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}});// eslint-disable-next-line es/no-object-isextensible -- safe
var sV=Object.isExtensible;// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
sG=H(function(){sV(1)})||sW?function(t){return!!tl(t)&&(!sW||"ArrayBuffer"!==te(t))&&(!sV||sV(t))}:sV;var s$={};s$=!H(function(){// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
return Object.isExtensible(Object.preventExtensions({}))});var sY=!1,sJ=tK("meta"),sK=0,sX=function(t){sH(t,sJ,{value:{objectID:"O"+sK++,weakData:{}// weak collections IDs
}})},sQ=sq={enable:function(){sQ.enable=function(){},sY=!0;var t=uc,r=Q([].splice),e={};e[sJ]=1,t(e).length&&(uc=function(e){for(var n=t(e),i=0,o=n.length;i<o;i++)if(n[i]===sJ){r(n,i,1);break}return n},D({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:uv}))},fastKey:function(t,r){// return a primitive with prefix
if(!tl(t))return(void 0===t?"undefined":U(t))=="symbol"?t:("string"==typeof t?"S":"P")+t;if(!tV(t,sJ)){// can't set metadata to uncaught frozen object
if(!sG(t))return"F";// not necessary to add metadata
if(!r)return"E";// add missing metadata
sX(t);// return object ID
}return t[sJ].objectID},getWeakData:function(t,r){if(!tV(t,sJ)){// can't set metadata to uncaught frozen object
if(!sG(t))return!0;// not necessary to add metadata
if(!r)return!1;// add missing metadata
sX(t);// return the store of weak collections IDs
}return t[sJ].weakData},onFreeze:function(t){return s$&&sY&&sG(t)&&!tV(t,sJ)&&sX(t),t}};r_[sJ]=!0;var sZ={},s0=TypeError,s1=function(t,r){this.stopped=t,this.result=r},s2=s1.prototype;sZ=function(t,r,e){var n,i,o,a,u,s,c,f=e&&e.that,h=!!(e&&e.AS_ENTRIES),l=!!(e&&e.IS_RECORD),v=!!(e&&e.IS_ITERATOR),p=!!(e&&e.INTERRUPTED),d=eH(r,f),g=function(t){return n&&iN(n,"normal",t),new s1(!0,t)},y=function(t){return h?(rn(t),p?d(t[0],t[1],g):d(t[0],t[1])):p?d(t,g):d(t)};if(l)n=t.iterator;else if(v)n=t;else{if(!(i=iq(t)))throw new s0(tL(t)+" is not iterable");// optimisation for array iterators
if(iU(i)){for(o=0,a=r0(t);a>o;o++)if((u=y(t[o]))&&tS(s2,u))return u;return new s1(!1)}n=iz(t,i)}for(s=l?t.next:n.next;!(c=G(s,n)).done;){try{u=y(c.value)}catch(t){iN(n,"throw",t)}if("object"==typeof u&&u&&tS(s2,u))return u}return new s1(!1)};var s5={};// makes subclassing work correct for wrapped built-ins
s5=function(t,r,e){var n,i;return os&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
tv(n=r.constructor)&&n!==e&&tl(i=n.prototype)&&i!==e.prototype&&os(t,i),t},sz=function(t,r,e){var n=-1!==t.indexOf("Map"),i=-1!==t.indexOf("Weak"),o=n?"set":"add",a=B[t],u=a&&a.prototype,s=a,c={},f=function(t){var r=Q(u[t]);rl(u,t,"add"===t?function(t){return r(this,0===t?0:t),this}:"delete"===t?function(t){return(!i||!!tl(t))&&r(this,0===t?0:t)}:"get"===t?function(t){return i&&!tl(t)?void 0:r(this,0===t?0:t)}:"has"===t?function(t){return(!i||!!tl(t))&&r(this,0===t?0:t)}:function(t,e){return r(this,0===t?0:t,e),this})};if(r9(t,!tv(a)||!(i||u.forEach&&!H(function(){new a().entries().next()}))))// create collection constructor
s=e.getConstructor(r,t,n,o),sq.enable();else if(r9(t,!0)){var h=new s,l=h[o](i?{}:-0,1)!==h,v=H(function(){h.has(1)}),p=iV(function(t){new a(t)}),d=!i&&H(function(){for(// V8 ~ Chromium 42- fails only with 5+ elements
var t=new a,r=5;r--;)t[o](r,r);return!t.has(-0)});p||((s=r(function(t,r){am(t,u);var e=s5(new a,t,s);return ts(r)||sZ(r,e[o],{that:e,AS_ENTRIES:n}),e})).prototype=u,u.constructor=s),(v||d)&&(f("delete"),f("has"),n&&f("get")),(d||l)&&f(o),i&&u.clear&&delete u.clear}return c[t]=s,D({global:!0,constructor:!0,forced:s!==a},c),eD(s,t),i||e.setStrong(s,t,n),s};var s3={},s6=sq.fastKey,s4=rE.set,s8=rE.getterFor;// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
sz("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},s3={getConstructor:function(t,r,e,n){var i=t(function(t,i){am(t,o),s4(t,{type:r,index:eg(null),first:void 0,last:void 0,size:0}),q||(t.size=0),ts(i)||sZ(i,t[n],{that:t,AS_ENTRIES:e})}),o=i.prototype,a=s8(r),u=function(t,r,e){var n,i,o=a(t),u=s(t,r);return u?u.value=e:(o.last=u={index:i=s6(r,!0),key:r,value:e,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=u),n&&(n.next=u),q?o.size++:t.size++,"F"!==i&&(o.index[i]=u)),t},s=function(t,r){var e,n=a(t),i=s6(r);if("F"!==i)return n.index[i];// frozen object case
for(e=n.first;e;e=e.next)if(e.key===r)return e};return ay(o,{// `{ Map, Set }.prototype.clear()` methods
// https://tc39.es/ecma262/#sec-map.prototype.clear
// https://tc39.es/ecma262/#sec-set.prototype.clear
clear:function(){for(var t=a(this),r=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete r[e.index],e=e.next;t.first=t.last=void 0,q?t.size=0:this.size=0},// `{ Map, Set }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.delete
// https://tc39.es/ecma262/#sec-set.prototype.delete
delete:function(t){var r=a(this),e=s(this,t);if(e){var n=e.next,i=e.previous;delete r.index[e.index],e.removed=!0,i&&(i.next=n),n&&(n.previous=i),r.first===e&&(r.first=n),r.last===e&&(r.last=i),q?r.size--:this.size--}return!!e},// `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
// https://tc39.es/ecma262/#sec-map.prototype.foreach
// https://tc39.es/ecma262/#sec-set.prototype.foreach
forEach:function(t/* , that = undefined */){for(var r,e=a(this),n=eH(t,arguments.length>1?arguments[1]:void 0);r=r?r.next:e.first;)// revert to the last existing entry
for(n(r.value,r.key,this);r&&r.removed;)r=r.previous},// `{ Map, Set}.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.has
// https://tc39.es/ecma262/#sec-set.prototype.has
has:function(t){return!!s(this,t)}}),ay(o,e?{// `Map.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-map.prototype.get
get:function(t){var r=s(this,t);return r&&r.value},// `Map.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-map.prototype.set
set:function(t,r){return u(this,0===t?0:t,r)}}:{// `Set.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-set.prototype.add
add:function(t){return u(this,t=0===t?0:t,t)}}),q&&eL(o,"size",{configurable:!0,get:function(){return a(this).size}}),i},setStrong:function(t,r,e){var n=r+" Iterator",i=s8(r),o=s8(n);// `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
// https://tc39.es/ecma262/#sec-map.prototype.entries
// https://tc39.es/ecma262/#sec-map.prototype.keys
// https://tc39.es/ecma262/#sec-map.prototype.values
// https://tc39.es/ecma262/#sec-map.prototype-@@iterator
// https://tc39.es/ecma262/#sec-set.prototype.entries
// https://tc39.es/ecma262/#sec-set.prototype.keys
// https://tc39.es/ecma262/#sec-set.prototype.values
// https://tc39.es/ecma262/#sec-set.prototype-@@iterator
i4(t,r,function(t,r){s4(this,{type:n,target:t,state:i(t),kind:r,last:void 0})},function(){// revert to the last existing entry
for(var t=o(this),r=t.kind,e=t.last;e&&e.removed;)e=e.previous;return(// get next entry
t.target&&(t.last=e=e?e.next:t.state.first)?"keys"===r?oE(e.key,!1):"values"===r?oE(e.value,!1):oE([e.key,e.value],!1):(// or finish the iteration
t.target=void 0,oE(void 0,!0)))},e?"entries":"values",!e,!0),// `{ Map, Set }.prototype[@@species]` accessors
// https://tc39.es/ecma262/#sec-get-map-@@species
// https://tc39.es/ecma262/#sec-get-set-@@species
au(r)}});var s7={},s9=Math.log;// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
s7=Math.log1p||function(t){var r=+t;return r>-.00000001&&r<1e-8?r-r*r/2:s9(1+r)};// eslint-disable-next-line es/no-math-acosh -- required for testing
var ct=Math.acosh,cr=Math.log,ce=Math.sqrt,cn=Math.LN2,ci=!ct||710!==Math.floor(ct(Number.MAX_VALUE))||ct(1/0)!==1/0;// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
D({target:"Math",stat:!0,forced:ci},{acosh:function(t){var r=+t;return r<1?NaN:r>94906265.62425156?cr(r)+cn:s7(r-1+ce(r-1)*ce(r+1))}});// eslint-disable-next-line es/no-math-asinh -- required for testing
var co=Math.asinh,ca=Math.log,cu=Math.sqrt,cs=!(co&&1/co(0)>0);// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
D({target:"Math",stat:!0,forced:cs},{asinh:function t(r){var e=+r;return isFinite(e)&&0!==e?e<0?-t(-e):ca(e+cu(e*e+1)):e}});// eslint-disable-next-line es/no-math-atanh -- required for testing
var cc=Math.atanh,cf=Math.log,ch=!(cc&&1/cc(-0)<0);// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
D({target:"Math",stat:!0,forced:ch},{atanh:function(t){var r=+t;return 0===r?r:cf((1+r)/(1-r))/2}});var cl=Math.abs,cv=Math.pow;// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
D({target:"Math",stat:!0},{cbrt:function(t){var r=+t;return aO(r)*cv(cl(r),1/3)}});var cp=Math.floor,cd=Math.log,cg=Math.LOG2E;// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
D({target:"Math",stat:!0},{clz32:function(t){var r=t>>>0;return r?31-cp(cd(r+.5)*cg):32}});var cy={},cm=Math.expm1,cb=Math.exp;// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
cy=!cm||cm(10)>22025.465794806718||22025.465794806718>cm(10)||-.00000000000000002!==cm(-.00000000000000002)?function(t){var r=+t;return 0===r?r:r>-.000001&&r<1e-6?r+r*r/2:cb(r)-1}:cm;// eslint-disable-next-line es/no-math-cosh -- required for testing
var cw=Math.cosh,cS=Math.abs,cE=Math.E,cA=!cw||cw(710)===1/0;// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
D({target:"Math",stat:!0,forced:cA},{cosh:function(t){var r=cy(cS(t)-1)+1;return(r+1/(r*cE*cE))*(cE/2)}}),// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
D({target:"Math",stat:!0,forced:cy!==Math.expm1},{expm1:cy}),// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
D({target:"Math",stat:!0},{fround:aE});// eslint-disable-next-line es/no-math-hypot -- required for testing
var cO=Math.hypot,cx=Math.abs,cT=Math.sqrt,c_=!!cO&&cO(1/0,NaN)!==1/0;// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
D({target:"Math",stat:!0,arity:2,forced:c_},{// eslint-disable-next-line no-unused-vars -- required for `.length`
hypot:function(t,r){for(var e,n,i=0,o=0,a=arguments.length,u=0;o<a;)e=cx(arguments[o++]),u<e?(i=i*(n=u/e)*n+1,u=e):e>0?i+=(n=e/u)*n:i+=e;return u===1/0?1/0:u*cT(i)}});// eslint-disable-next-line es/no-math-imul -- required for testing
var cR=Math.imul,cI=H(function(){return -5!==cR(4294967295,5)||2!==cR.length});// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
D({target:"Math",stat:!0,forced:cI},{imul:function(t,r){var e=+t,n=+r,i=65535&e,o=65535&n;return 0|i*o+((65535&e>>>16)*o+i*(65535&n>>>16)<<16>>>0)}});var cj=Math.log,cM=Math.LOG10E;// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
D({target:"Math",stat:!0},{log10:Math.log10||function(t){return cj(t)*cM}}),// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
D({target:"Math",stat:!0},{log1p:s7});var cP=Math.log,ck=Math.LN2;// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
D({target:"Math",stat:!0},{log2:function(t){return cP(t)/ck}}),// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
D({target:"Math",stat:!0},{sign:aO});var cL=Math.abs,cF=Math.exp,cN=Math.E,cU=H(function(){// eslint-disable-next-line es/no-math-sinh -- required for testing
return -.00000000000000002!==Math.sinh(-.00000000000000002)});// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
D({target:"Math",stat:!0,forced:cU},{sinh:function(t){var r=+t;return 1>cL(r)?(cy(r)-cy(-r))/2:(cF(r-1)-cF(-r-1))*(cN/2)}});var cC=Math.exp;// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
D({target:"Math",stat:!0},{tanh:function(t){var r=+t,e=cy(r),n=cy(-r);return e===1/0?1:n===1/0?-1:(e-n)/(cC(r)+cC(-r))}}),// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
eD(Math,"Math",!0),// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
D({target:"Math",stat:!0},{trunc:rJ});var cD=uc,cB=ur,cz=uo,cq={};// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
cq=Q(1..valueOf);var cH={},cG={};// a string of all valid unicode whitespaces
cG="	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";var cW=Q("".replace),cV=RegExp("^["+cG+"]+"),c$=RegExp("(^|[^"+cG+"])["+cG+"]+$"),cY=function(t){return function(r){var e=ea(tu(r));return 1&t&&(e=cW(e,cV,"")),2&t&&(e=cW(e,c$,"$1")),e}},cJ=(cH={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:cY(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:cY(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:cY(3)}).trim,cK="Number",cX=B[cK],cQ=eN[cK],cZ=cX.prototype,c0=B.TypeError,c1=Q("".slice),c2=Q("".charCodeAt),c5=function(t){var r=th(t,"number");return(void 0===r?"undefined":U(r))=="bigint"?r:c3(r)},c3=function(t){var r,e,n,i,o,a,u,s,c=th(t,"number");if(tb(c))throw new c0("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2){if(43===(r=c2(c=cJ(c),0))||45===r){if(88===(e=c2(c,2))||120===e)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(48===r){switch(c2(c,1)){// fast equal of /^0b[01]+$/i
case 66:case 98:n=2,i=49;break;// fast equal of /^0o[0-7]+$/i
case 79:case 111:n=8,i=55;break;default:return+c}for(u=0,a=(o=c1(c,2)).length;u<a;u++)// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((s=c2(o,u))<48||s>i)return NaN;return parseInt(o,n)}}return+c},c6=r9(cK,!cX(" 0o1")||!cX("0b1")||cX("+0x1")),c4=function(t){var r,e=arguments.length<1?0:cX(c5(t));return(r=this,tS(cZ,r)&&H(function(){cq(r)}))?s5(Object(e),this,c4):e};c4.prototype=cZ,c6&&!tz&&(cZ.constructor=c4),D({global:!0,constructor:!0,wrap:!0,forced:c6},{Number:c4});// Use `internal/copy-constructor-properties` helper in `core-js@4`
var c8=function(t,r){for(var e,n=q?cD(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;n.length>i;i++)tV(r,e=n[i])&&!tV(t,e)&&cz(t,e,cB(r,e))};tz&&cQ&&c8(eN[cK],cQ),(c6||tz)&&c8(eN[cK],cX),// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
D({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:2220446049250313e-31});var c7={},c9=B.isFinite;// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
c7=Number.isFinite||function(t){return"number"==typeof t&&c9(t)},// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
D({target:"Number",stat:!0},{isFinite:c7});var ft={},fr=Math.floor;// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
ft=Number.isInteger||function(t){return!tl(t)&&isFinite(t)&&fr(t)===t},// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
D({target:"Number",stat:!0},{isInteger:ft}),// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
D({target:"Number",stat:!0},{isNaN:function(t){// eslint-disable-next-line no-self-compare -- NaN check
return t!=t}});var fe=Math.abs;// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
D({target:"Number",stat:!0},{isSafeInteger:function(t){return ft(t)&&9007199254740991>=fe(t)}}),// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
D({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991}),// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
D({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991});var fn={},fi=cH.trim,fo=Q("".charAt),fa=B.parseFloat,fu=B.Symbol,fs=fu&&fu.iterator;// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
fn=1/fa(cG+"-0")!=-1/0||fs&&!H(function(){fa(Object(fs))})?function(t){var r=fi(ea(t)),e=fa(r);return 0===e&&"-"===fo(r,0)?-0:e}:fa,// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
D({target:"Number",stat:!0,forced:Number.parseFloat!==fn},{parseFloat:fn});var fc={},ff=cH.trim,fh=B.parseInt,fl=B.Symbol,fv=fl&&fl.iterator,fp=/^[+-]?0x/i,fd=Q(fp.exec);// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
fc=8!==fh(cG+"08")||22!==fh(cG+"0x16")||fv&&!H(function(){fh(Object(fv))})?function(t,r){var e=ff(ea(t));return fh(e,r>>>0||(fd(fp,e)?16:10))}:fh,// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
D({target:"Number",stat:!0,forced:Number.parseInt!==fc},{parseInt:fc});var fg=RangeError,fy=String,fm=Math.floor,fb=Q(u7),fw=Q("".slice),fS=Q(1..toFixed),fE=function(t,r,e){return 0===r?e:r%2==1?fE(t,r-1,e*t):fE(t*t,r/2,e)},fA=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r},fO=function(t,r,e){for(var n=-1,i=e;++n<6;)i+=r*t[n],t[n]=i%1e7,i=fm(i/1e7)},fx=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=fm(n/r),n=n%r*1e7},fT=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=fy(t[r]);e=""===e?n:e+fb("0",7-n.length)+n}return e},f_=H(function(){return"0.000"!==fS(8e-5,3)||"1"!==fS(.9,0)||"1.25"!==fS(1.255,2)||"1000000000000000128"!==fS(0xde0b6b3a7640080,0)})||!H(function(){// V8 ~ Android 4.3-
fS({})});// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
D({target:"Number",proto:!0,forced:f_},{toFixed:function(t){var r,e,n,i,o=cq(this),a=rY(t),u=[0,0,0,0,0,0],s="",c="0";// TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
if(a<0||a>20)throw new fg("Incorrect fraction digits");// eslint-disable-next-line no-self-compare -- NaN check
if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return fy(o);if(o<0&&(s="-",o=-o),o>1e-21){if(e=((r=fA(o*fE(2,69,1))-69)<0?o*fE(2,-r,1):o/fE(2,r,1))*4503599627370496,(r=52-r)>0){for(fO(u,0,e),n=a;n>=7;)fO(u,1e7,0),n-=7;for(fO(u,fE(10,n,1),0),n=r-1;n>=23;)fx(u,8388608),n-=23;fx(u,1<<n),fO(u,1,1),fx(u,2),c=fT(u)}else fO(u,0,e),fO(u,1<<-r,0),c=fT(u)+fb("0",a)}return a>0?s+((i=c.length)<=a?"0."+fb("0",a-i)+c:fw(c,0,i-a)+"."+fw(c,i-a)):s+c}});var fR=Q(1..toPrecision),fI=H(function(){// IE7-
return"1"!==fR(1,void 0)})||!H(function(){// V8 ~ Android 4.3-
fR({})});// `Number.prototype.toPrecision` method
// https://tc39.es/ecma262/#sec-number.prototype.toprecision
D({target:"Number",proto:!0,forced:fI},{toPrecision:function(t){return void 0===t?fR(cq(this)):fR(cq(this),t)}});var fj={},fM=Object.assign,fP=Object.defineProperty,fk=Q([].concat);// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
fj=!fM||H(function(){// should have correct order of operations (Edge bug)
if(q&&1!==fM({b:1},fM(fP({},"a",{enumerable:!0,get:function(){fP(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;// should work with symbols and should have deterministic property order (V8 bug)
var t={},r={},e=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[e]=7,n.split("").forEach(function(t){r[t]=t}),7!==fM({},t)[e]||ey(fM({},r)).join("")!==n})?function(t,r){for(var e=t$(t),n=arguments.length,i=1,o=uf,a=ue;n>i;)for(var u,s=X(arguments[i++]),c=o?fk(ey(s),o(s)):ey(s),f=c.length,h=0;f>h;)u=c[h++],(!q||G(a,s,u))&&(e[u]=s[u]);return e}:fM,// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
D({target:"Object",stat:!0,arity:2,forced:Object.assign!==fj},{assign:fj}),// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
D({target:"Object",stat:!0,sham:!q},{create:eg});var fL={};// Forced replacement object prototype accessors methods
fL=tz||!H(function(){// This feature detection crashes old WebKit
// https://github.com/zloirock/core-js/issues/232
if(!o7||!(o7<535)){var t=Math.random();// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
__defineSetter__.call(null,t,function(){}),delete B[t]}}),q&&D({target:"Object",proto:!0,forced:fL},{__defineGetter__:function(t,r){uo(t$(this),t,{get:tk(r),enumerable:!0,configurable:!0})}});var fF=uh;// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
D({target:"Object",stat:!0,forced:Object.defineProperties!==fF,sham:!q},{defineProperties:fF});var fN=uo;// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
D({target:"Object",stat:!0,forced:Object.defineProperty!==fN,sham:!q},{defineProperty:fN}),q&&D({target:"Object",proto:!0,forced:fL},{__defineSetter__:function(t,r){uo(t$(this),t,{set:tk(r),enumerable:!0,configurable:!0})}});var fU={},fC=Q(ue),fD=Q([].push),fB=q&&H(function(){// eslint-disable-next-line es/no-object-create -- safe
var t=Object.create(null);return t[2]=2,!fC(t,2)}),fz=function(t){return function(r){for(var e,n=K(r),i=ey(n),o=fB&&null===i9(n),a=i.length,u=0,s=[];a>u;)e=i[u++],(!q||(o?e in n:fC(n,e)))&&fD(s,t?[e,n[e]]:n[e]);return s}},fq=(fU={// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
entries:fz(!0),// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
values:fz(!1)}).entries;// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
D({target:"Object",stat:!0},{entries:function(t){return fq(t)}});var fH=sq.onFreeze,fG=Object.freeze,fW=H(function(){fG(1)});// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
D({target:"Object",stat:!0,forced:fW,sham:!s$},{freeze:function(t){return fG&&tl(t)?fG(fH(t)):t}}),// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
D({target:"Object",stat:!0},{fromEntries:function(t){var r={};return sZ(t,function(t,e){eI(r,t,e)},{AS_ENTRIES:!0}),r}});var fV=ur,f$=!q||H(function(){fV(1)});// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
D({target:"Object",stat:!0,forced:f$,sham:!q},{getOwnPropertyDescriptor:function(t,r){return fV(K(t),r)}}),// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
D({target:"Object",stat:!0,sham:!q},{getOwnPropertyDescriptors:function(t){for(var r,e,n=K(t),i=ur,o=rG(n),a={},u=0;o.length>u;)void 0!==(e=i(n,r=o[u++]))&&eI(a,r,e);return a}});var fY=uv,fJ=H(function(){return!Object.getOwnPropertyNames(1)});// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
D({target:"Object",stat:!0,forced:fJ},{getOwnPropertyNames:fY});var fK=H(function(){i9(1)});// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
D({target:"Object",stat:!0,forced:fK,sham:!ot},{getPrototypeOf:function(t){return i9(t$(t))}});var fX={};// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
fX=Object.is||function(t,r){// eslint-disable-next-line no-self-compare -- NaN check
return t===r?0!==t||1/t==1/r:t!=t&&r!=r},// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
D({target:"Object",stat:!0},{is:fX}),// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
D({target:"Object",stat:!0,forced:Object.isExtensible!==sG},{isExtensible:sG});// eslint-disable-next-line es/no-object-isfrozen -- safe
var fQ=Object.isFrozen,fZ=sW||H(function(){fQ(1)});// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
D({target:"Object",stat:!0,forced:fZ},{isFrozen:function(t){return!tl(t)||!!sW&&"ArrayBuffer"===te(t)||!!fQ&&fQ(t)}});// eslint-disable-next-line es/no-object-issealed -- safe
var f0=Object.isSealed,f1=sW||H(function(){f0(1)});// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
D({target:"Object",stat:!0,forced:f1},{isSealed:function(t){return!tl(t)||!!sW&&"ArrayBuffer"===te(t)||!!f0&&f0(t)}});var f2=H(function(){ey(1)});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
D({target:"Object",stat:!0,forced:f2},{keys:function(t){return ey(t$(t))}});var f5=ur;q&&D({target:"Object",proto:!0,forced:fL},{__lookupGetter__:function(t){var r,e=t$(this),n=tf(t);do if(r=f5(e,n))return r.get;while(e=i9(e))}});var f3=ur;q&&D({target:"Object",proto:!0,forced:fL},{__lookupSetter__:function(t){var r,e=t$(this),n=tf(t);do if(r=f3(e,n))return r.set;while(e=i9(e))}});var f6=sq.onFreeze,f4=Object.preventExtensions,f8=H(function(){f4(1)});// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
D({target:"Object",stat:!0,forced:f8,sham:!s$},{preventExtensions:function(t){return f4&&tl(t)?f4(f6(t)):t}});var f7=sq.onFreeze,f9=Object.seal,ht=H(function(){f9(1)});// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
D({target:"Object",stat:!0,forced:ht,sham:!s$},{seal:function(t){return f9&&tl(t)?f9(f7(t)):t}}),// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
D({target:"Object",stat:!0},{setPrototypeOf:os});var hr={};// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
hr=es?({}).toString:function(){return"[object "+eu(this)+"]"},es||rl(Object.prototype,"toString",hr,{unsafe:!0});var he=fU.values;// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
D({target:"Object",stat:!0},{values:function(t){return he(t)}}),// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
D({global:!0,forced:parseFloat!==fn},{parseFloat:fn}),// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
D({global:!0,forced:parseInt!==fc},{parseInt:fc});var hn={},hi={},ho=TypeError;hi=function(t,r){if(t<r)throw new ho("Not enough arguments");return t};var ha={};// eslint-disable-next-line redos/no-vulnerable -- safe
ha=/(?:ipad|iphone|ipod).*applewebkit/i.test(tx);var hu=B.setImmediate,hs=B.clearImmediate,hc=B.process,hf=B.Dispatch,hh=B.Function,hl=B.MessageChannel,hv=B.String,hp=0,hd={},hg="onreadystatechange";H(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
v=B.location});var hy=function(t){if(tV(hd,t)){var r=hd[t];delete hd[t],r()}},hm=function(t){return function(){hy(t)}},hb=function(t){hy(t.data)},hw=function(t){// old engines have not location.origin
B.postMessage(hv(t),v.protocol+"//"+v.host)};hu&&hs||(hu=function(t){hi(arguments.length,1);var r=tv(t)?t:hh(t),e=nN(arguments,1);return hd[++hp]=function(){nP(r,void 0,e)},p(hp),hp},hs=function(t){delete hd[t]},oq?p=function(t){hc.nextTick(hm(t))}:hf&&hf.now?p=function(t){hf.now(hm(t))}:hl&&!ha?(g=(d=new hl).port2,d.port1.onmessage=hb,p=eH(g.postMessage,g)):B.addEventListener&&tv(B.postMessage)&&!B.importScripts&&v&&"file:"!==v.protocol&&!H(hw)?(p=hw,B.addEventListener("message",hb,!1)):p=hg in t4("script")?function(t){em.appendChild(t4("script"))[hg]=function(){em.removeChild(this),hy(t)}}:function(t){setTimeout(hm(t),0)});var hS=(hn={set:hu,clear:hs}).set,hE={},hA=ur,hO=hn.set,hx={},hT=function(){this.head=null,this.tail=null};hT.prototype={add:function(t){var r={item:t,next:null},e=this.tail;e?e.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},hx=hT;var h_={};h_=/ipad|iphone|ipod/i.test(tx)&&"undefined"!=typeof Pebble;var hR={};hR=/web0s(?!.*chrome)/i.test(tx);var hI=B.MutationObserver||B.WebKitMutationObserver,hj=B.document,hM=B.process,hP=B.Promise,hk=hA(B,"queueMicrotask"),hL=hk&&hk.value;// modern engines have queueMicrotask method
if(!hL){var hF=new hx,hN=function(){var t,r;for(oq&&(t=hM.domain)&&t.exit();r=hF.get();)try{r()}catch(t){throw hF.head&&y(),t}t&&t.enter()};ha||oq||hR||!hI||!hj?!h_&&hP&&hP.resolve?(// workaround of WebKit ~ iOS Safari 10.1 bug
// Promise.resolve without an argument throws an error in LG WebOS 2
(w=hP.resolve(void 0)).constructor=hP,S=eH(w.then,w),y=function(){S(hN)}):oq?y=function(){hM.nextTick(hN)}:(// `webpack` dev server bug on IE global methods - use bind(fn, global)
hO=eH(hO,B),y=function(){hO(hN)}):(m=!0,b=hj.createTextNode(""),new hI(hN).observe(b,{characterData:!0}),y=function(){b.data=m=!m}),hL=function(t){hF.head||y(),hF.add(t)}}hE=hL;var hU={};hU=function(t,r){try{// eslint-disable-next-line no-console -- safe
1==arguments.length?console.error(t):console.error(t,r)}catch(t){}};var hC={};hC=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};var hD={};hD=B.Promise;var hB={},hz={},hq={};hz=!/* global Deno -- Deno case */(hq="object"==typeof Deno&&Deno&&"object"==typeof Deno.version)&&!oq&&"object"==typeof window&&"object"==typeof document;var hH=hD&&hD.prototype,hG=tD("species"),hW=!1,hV=tv(B.PromiseRejectionEvent);hB={CONSTRUCTOR:r9("Promise",function(){var t=rw(hD),r=t!==String(hD);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!r&&66===tO||tz&&!(hH.catch&&hH.finally))return!0;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(!tO||tO<51||!/native code/.test(t)){// Detect correctness of subclassing with @@species support
var e=new hD(function(t){t(1)}),n=function(t){t(function(){},function(){})};if((e.constructor={})[hG]=n,!(hW=e.then(function(){}) instanceof n))return!0;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
}return!r&&(hz||hq)&&!hV}),REJECTION_EVENT:hV,SUBCLASSING:hW};var h$=TypeError,hY=function(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw new h$("Bad Promise constructor");r=t,e=n}),this.resolve=tk(r),this.reject=tk(e)};E=function(t){return new hY(t)};var hJ="Promise",hK=hB.CONSTRUCTOR,hX=hB.REJECTION_EVENT,hQ=hB.SUBCLASSING,hZ=rE.getterFor(hJ),h0=rE.set,h1=hD&&hD.prototype,h2=hD,h5=h1,h3=B.TypeError,h6=B.document,h4=B.process,h8=E,h7=h8,h9=!!(h6&&h6.createEvent&&B.dispatchEvent),lt="unhandledrejection",lr=function(t){var r;return!!(tl(t)&&tv(r=t.then))&&r},le=function(t,r){var e,n,i,o=r.value,a=1===r.state,u=a?t.ok:t.fail,s=t.resolve,c=t.reject,f=t.domain;try{u?(a||(2===r.rejection&&lu(r),r.rejection=1),!0===u?e=o:(f&&f.enter(),e=u(o),f&&(f.exit(),i=!0)),e===t.promise?c(new h3("Promise-chain cycle")):(n=lr(e))?G(n,e,s,c):s(e)):c(o)}catch(t){f&&!i&&f.exit(),c(t)}},ln=function(t,r){t.notified||(t.notified=!0,hE(function(){for(var e,n=t.reactions;e=n.get();)le(e,t);t.notified=!1,r&&!t.rejection&&lo(t)}))},li=function(t,r,e){var n,i;h9?((n=h6.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),B.dispatchEvent(n)):n={promise:r,reason:e},!hX&&(i=B["on"+t])?i(n):t===lt&&hU("Unhandled promise rejection",e)},lo=function(t){G(hS,B,function(){var r,e=t.facade,n=t.value;if(la(t)&&(r=hC(function(){oq?h4.emit("unhandledRejection",n,e):li(lt,e,n)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t.rejection=oq||la(t)?2:1,r.error))throw r.value})},la=function(t){return 1!==t.rejection&&!t.parent},lu=function(t){G(hS,B,function(){var r=t.facade;oq?h4.emit("rejectionHandled",r):li("rejectionhandled",r,t.value)})},ls=function(t,r,e){return function(n){t(r,n,e)}},lc=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,ln(t,!0))},lf=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw new h3("Promise can't be resolved itself");var n=lr(r);n?hE(function(){var e={done:!1};try{G(n,r,ls(lf,e,t),ls(lc,e,t))}catch(r){lc(e,r,t)}}):(t.value=r,t.state=1,ln(t,!1))}catch(r){lc({done:!1},r,t)}}};// constructor polyfill
if(hK&&(h5=// 25.4.3.1 Promise(executor)
(h2=function(t){am(this,h5),tk(t),G(A,this);var r=hZ(this);try{t(ls(lf,r),ls(lc,r))}catch(t){lc(r,t)}}).prototype,// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
// eslint-disable-next-line no-unused-vars -- required for `.length`
(A=function(t){h0(this,{type:hJ,done:!1,notified:!1,parent:!1,reactions:new hx,rejection:!1,state:0,value:void 0})}).prototype=rl(h5,"then",function(t,r){var e=hZ(this),n=h8(u$(this,h2));return e.parent=!0,n.ok=!tv(t)||t,n.fail=tv(r)&&r,n.domain=oq?h4.domain:void 0,0===e.state?e.reactions.add(n):hE(function(){le(n,e)}),n.promise}),O=function(){var t=new A,r=hZ(t);this.promise=t,this.resolve=ls(lf,r),this.reject=ls(lc,r)},E=h8=function(t){return t===h2||t===x?new O(t):h7(t)},!tz&&tv(hD)&&h1!==Object.prototype)){T=h1.then,hQ||rl(h1,"then",function(t,r){var e=this;return new h2(function(t,r){G(T,e,t,r)}).then(t,r);// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0});// make `.constructor === Promise` work for native promise-based APIs
try{delete h1.constructor}catch(t){}os&&os(h1,h5)}D({global:!0,constructor:!0,wrap:!0,forced:hK},{Promise:h2}),eD(h2,hJ,!1,!0),au(hJ);var lh={};lh=hB.CONSTRUCTOR||!iV(function(t){hD.all(t).then(void 0,function(){})}),// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
D({target:"Promise",stat:!0,forced:lh},{all:function(t){var r=this,e=E(r),n=e.resolve,i=e.reject,o=hC(function(){var e=tk(r.resolve),o=[],a=0,u=1;sZ(t,function(t){var s=a++,c=!1;u++,G(e,r,t).then(function(t){!c&&(c=!0,o[s]=t,--u||n(o))},i)}),--u||n(o)});return o.error&&i(o.value),e.promise}});var ll=hB.CONSTRUCTOR,lv=hD&&hD.prototype;// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if(// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
D({target:"Promise",proto:!0,forced:ll,real:!0},{catch:function(t){return this.then(void 0,t)}}),!tz&&tv(hD)){var lp=tw("Promise").prototype.catch;lv.catch!==lp&&rl(lv,"catch",lp,{unsafe:!0})}// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
D({target:"Promise",stat:!0,forced:lh},{race:function(t){var r=this,e=E(r),n=e.reject,i=hC(function(){var i=tk(r.resolve);sZ(t,function(t){G(i,r,t).then(e.resolve,n)})});return i.error&&n(i.value),e.promise}});var ld=hB.CONSTRUCTOR;// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
D({target:"Promise",stat:!0,forced:ld},{reject:function(t){var r=E(this);return G(r.reject,void 0,t),r.promise}});var lg=hB.CONSTRUCTOR,ly={};ly=function(t,r){if(rn(t),tl(r)&&r.constructor===t)return r;var e=E(t);return(0,e.resolve)(r),e.promise};var lm=tw("Promise"),lb=tz&&!lg;// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
D({target:"Promise",stat:!0,forced:tz||lg},{resolve:function(t){return ly(lb&&this===lm?hD:this,t)}});var lw=hD&&hD.prototype,lS=!!hD&&H(function(){// eslint-disable-next-line unicorn/no-thenable -- required for testing
lw.finally.call({then:function(){}},function(){})});// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if(// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
D({target:"Promise",proto:!0,real:!0,forced:lS},{finally:function(t){var r=u$(this,tw("Promise")),e=tv(t);return this.then(e?function(e){return ly(r,t()).then(function(){return e})}:t,e?function(e){return ly(r,t()).then(function(){throw e})}:t)}}),!tz&&tv(hD)){var lE=tw("Promise").prototype.finally;lw.finally!==lE&&rl(lw,"finally",lE,{unsafe:!0})}// MS Edge argumentsList argument is optional
var lA=!H(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.apply(function(){})});// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
D({target:"Reflect",stat:!0,forced:lA},{apply:function(t,r,e){return nP(tk(t),r,rn(e))}});var lO=tw("Reflect","construct"),lx=Object.prototype,lT=[].push,l_=H(function(){var t=function(){};return!(lO(function(){},[],t) instanceof t)}),lR=!H(function(){lO(function(){})}),lI=l_||lR;D({target:"Reflect",stat:!0,forced:lI,sham:lI},{construct:function(t,r/* , newTarget */){uY(t),rn(r);var e=arguments.length<3?t:uY(arguments[2]);if(lR&&!l_)return lO(t,r,e);if(t===e){// w/o altered newTarget, optimization for 0-4 arguments
switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}// w/o altered newTarget, lot of arguments case
var n=[null];return nP(lT,n,r),new(nP(sR,t,n))}// with altered newTarget, not support built-in constructors
var i=e.prototype,o=eg(tl(i)?i:lx),a=nP(t,o,r);return tl(a)?a:o}});// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var lj=H(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.defineProperty(uo({},1,{value:1}),1,{value:2})});// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
D({target:"Reflect",stat:!0,forced:lj,sham:!q},{defineProperty:function(t,r,e){rn(t);var n=tf(r);rn(e);try{return uo(t,n,e),!0}catch(t){return!1}}});var lM=ur;// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
D({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var e=lM(rn(t),r);return(!e||!!e.configurable)&&delete t[r]}});var lP={};lP=function(t){return void 0!==t&&(tV(t,"value")||tV(t,"writable"))},D({target:"Reflect",stat:!0},{get:// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function t(r,e/* , receiver */){var n,i,o=arguments.length<3?r:arguments[2];return rn(r)===o?r[e]:(n=ur(r,e))?lP(n)?n.value:void 0===n.get?void 0:G(n.get,o):tl(i=i9(r))?t(i,e,o):void 0}}),// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
D({target:"Reflect",stat:!0,sham:!q},{getOwnPropertyDescriptor:function(t,r){return ur(rn(t),r)}}),// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
D({target:"Reflect",stat:!0,sham:!ot},{getPrototypeOf:function(t){return i9(rn(t))}}),// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
D({target:"Reflect",stat:!0},{has:function(t,r){return r in t}}),// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
D({target:"Reflect",stat:!0},{isExtensible:function(t){return rn(t),sG(t)}}),// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
D({target:"Reflect",stat:!0},{ownKeys:rG}),// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
D({target:"Reflect",stat:!0,sham:!s$},{preventExtensions:function(t){rn(t);try{var r=tw("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}});// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var lk=H(function(){var t=function(){},r=uo(new t,"a",{configurable:!0});// eslint-disable-next-line es/no-reflect -- required for testing
return!1!==Reflect.set(t.prototype,"a",1,r)});D({target:"Reflect",stat:!0,forced:lk},{set:// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function t(r,e,n/* , receiver */){var i,o,a,u=arguments.length<4?r:arguments[3],s=ur(rn(r),e);if(!s){if(tl(o=i9(r)))return t(o,e,n,u);s=J(0)}if(lP(s)){if(!1===s.writable||!tl(u))return!1;if(i=ur(u,e)){if(i.get||i.set||!1===i.writable)return!1;i.value=n,uo(u,e,i)}else uo(u,e,J(0,n))}else{if(void 0===(a=s.set))return!1;G(a,u,n)}return!0}}),os&&D({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){rn(t),of(r);try{return os(t,r),!0}catch(t){return!1}}});var lL=uc,lF={},lN=tD("match");// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
lF=function(t){var r;return tl(t)&&(void 0!==(r=t[lN])?!!r:"RegExp"===te(t))};var lU={},lC={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
lC=function(){var t=rn(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r};var lD=RegExp.prototype;lU=function(t){var r=t.flags;return void 0===r&&!("flags"in lD)&&!tV(t,"flags")&&tS(lD,t)?G(lC,t):r};var lB={},lz=B.RegExp,lq=H(function(){var t=lz("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),lH=lq||H(function(){return!lz("a","y").sticky});lB={BROKEN_CARET:lq||H(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var t=lz("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:lH,UNSUPPORTED_Y:lq};var lG={},lW=uo;lG=function(t,r,e){e in t||lW(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})};var lV=rE.enforce,l$={},lY=B.RegExp;l$=H(function(){var t=lY(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)});var lJ={},lK=B.RegExp;lJ=H(function(){var t=lK("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")});var lX=tD("match"),lQ=B.RegExp,lZ=lQ.prototype,l0=B.SyntaxError,l1=Q(lZ.exec),l2=Q("".charAt),l5=Q("".replace),l3=Q("".indexOf),l6=Q("".slice),l4=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,l8=/a/g,l7=/a/g,l9=new lQ(l8)!==l8,vt=lB.MISSED_STICKY,vr=lB.UNSUPPORTED_Y,ve=q&&(!l9||vt||l$||lJ||H(function(){// RegExp constructor can alter flags and IsRegExp works correct with @@match
return l7[lX]=!1,lQ(l8)!==l8||lQ(l7)===l7||"/a/i"!==String(lQ(l8,"i"))})),vn=function(t){for(var r,e=t.length,n=0,i="",o=!1;n<=e;n++){if("\\"===(r=l2(t,n))){i+=r+l2(t,++n);continue}o||"."!==r?("["===r?o=!0:"]"===r&&(o=!1),i+=r):i+="[\\s\\S]"}return i},vi=function(t){for(var r,e=t.length,n=0,i="",o=[],a={},u=!1,s=!1,c=0,f="";n<=e;n++){if("\\"===(r=l2(t,n)))r+=l2(t,++n);else if("]"===r)u=!1;else if(!u)switch(!0){case"["===r:u=!0;break;case"("===r:l1(l4,l6(t,n+1))&&(n+=2,s=!0),i+=r,c++;continue;case">"===r&&s:if(""===f||tV(a,f))throw new l0("Invalid capture group name");a[f]=!0,o[o.length]=[f,c],s=!1,f="";continue}s?f+=r:i+=r}return[i,o]};// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(r9("RegExp",ve)){for(var vo=function(t,r){var e,n,i,o,a,u,s=tS(lZ,this),c=lF(t),f=void 0===r,h=[],l=t;if(!s&&c&&f&&t.constructor===vo)return t;if((c||tS(lZ,t))&&(t=t.source,f&&(r=lU(l))),t=void 0===t?"":ea(t),r=void 0===r?"":ea(r),l=t,l$&&("dotAll"in l8)&&(n=!!r&&l3(r,"s")>-1)&&(r=l5(r,/s/g,"")),e=r,vt&&("sticky"in l8)&&(i=!!r&&l3(r,"y")>-1)&&vr&&(r=l5(r,/y/g,"")),lJ&&(t=(o=vi(t))[0],h=o[1]),a=s5(lQ(t,r),s?this:lZ,vo),(n||i||h.length)&&(u=lV(a),n&&(u.dotAll=!0,u.raw=vo(vn(t),e)),i&&(u.sticky=!0),h.length&&(u.groups=h)),t!==l)try{// fails in old engines, but we have no alternatives for unsupported regex syntax
rr(a,"source",""===l?"(?:)":l)}catch(t){}return a},va=lL(lQ),vu=0;va.length>vu;)lG(vo,lQ,va[vu++]);lZ.constructor=vo,vo.prototype=lZ,rl(B,"RegExp",vo,{constructor:!0})}// https://tc39.es/ecma262/#sec-get-regexp-@@species
au("RegExp");var vs={},vc=rE.get,vf=tB("native-string-replace",String.prototype.replace),vh=RegExp.prototype.exec,vl=vh,vv=Q("".charAt),vp=Q("".indexOf),vd=Q("".replace),vg=Q("".slice),vy=(r=/b*/g,G(vh,t=/a/,"a"),G(vh,r,"a"),0!==t.lastIndex||0!==r.lastIndex),vm=lB.BROKEN_CARET,vb=void 0!==/()??/.exec("")[1];(vy||vb||vm||l$||lJ)&&(vl=function(t){var r,e,n,i,o,a,u,s=vc(this),c=ea(t),f=s.raw;if(f)return f.lastIndex=this.lastIndex,r=G(vl,f,c),this.lastIndex=f.lastIndex,r;var h=s.groups,l=vm&&this.sticky,v=G(lC,this),p=this.source,d=0,g=c;if(l&&(-1===vp(v=vd(v,"y",""),"g")&&(v+="g"),g=vg(c,this.lastIndex),this.lastIndex>0&&(!this.multiline||this.multiline&&"\n"!==vv(c,this.lastIndex-1))&&(p="(?: "+p+")",g=" "+g,d++),// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
e=RegExp("^(?:"+p+")",v)),vb&&(e=RegExp("^"+p+"$(?!\\s)",v)),vy&&(n=this.lastIndex),i=G(vh,l?e:this,g),l?i?(i.input=vg(i.input,d),i[0]=vg(i[0],d),i.index=this.lastIndex,this.lastIndex+=i[0].length):this.lastIndex=0:vy&&i&&(this.lastIndex=this.global?i.index+i[0].length:n),vb&&i&&i.length>1&&// for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
G(vf,i[0],e,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)}),i&&h)for(o=0,i.groups=a=eg(null);o<h.length;o++)a[(u=h[o])[0]]=i[u[1]];return i}),vs=vl,// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
D({target:"RegExp",proto:!0,forced:/./.exec!==vs},{exec:vs});// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var vw=B.RegExp,vS=vw.prototype;q&&H(function(){var t=!0;try{vw(".","d")}catch(r){t=!1}var r={},e="",n=t?"dgimsy":"gimsy",i=function(t,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(r,t,{get:function(){return e+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(vS,"flags").get.call(r)!==n||e!==n})&&eL(vS,"flags",{configurable:!0,get:lC});var vE=rp.PROPER,vA="toString",vO=RegExp.prototype[vA],vx=H(function(){return"/a/b"!==vO.call({source:"a",flags:"b"})}),vT=vE&&vO.name!==vA;(vx||vT)&&rl(RegExp.prototype,vA,function(){var t=rn(this);return"/"+ea(t.source)+"/"+ea(lU(t))},{unsafe:!0}),// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
sz("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},s3);var v_={},vR=Q("".charAt),vI=Q("".charCodeAt),vj=Q("".slice),vM=function(t){return function(r,e){var n,i,o=ea(tu(r)),a=rY(e),u=o.length;return a<0||a>=u?t?"":void 0:(n=vI(o,a))<55296||n>56319||a+1===u||(i=vI(o,a+1))<56320||i>57343?t?vR(o,a):n:t?vj(o,a,a+2):(n-55296<<10)+(i-56320)+65536}},vP=(v_={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:vM(!1),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:vM(!0)}).codeAt;// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
D({target:"String",proto:!0},{codePointAt:function(t){return vP(this,t)}});var vk=ur,vL={},vF=TypeError;vL=function(t){if(lF(t))throw new vF("The method doesn't accept regular expressions");return t};var vN={},vU=tD("match");vN=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[vU]=!1,"/./"[t](r)}catch(t){}}return!1};// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var vC=eG("".endsWith),vD=eG("".slice),vB=Math.min,vz=vN("endsWith"),vq=!tz&&!vz&&!!((e=vk(String.prototype,"endsWith"))&&!e.writable);// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
D({target:"String",proto:!0,forced:!vq&&!vz},{endsWith:function(t/* , endPosition = @length */){var r=ea(tu(this));vL(t);var e=arguments.length>1?arguments[1]:void 0,n=r.length,i=void 0===e?n:vB(r1(e),n),o=ea(t);return vC?vC(r,o,i):vD(r,i-o.length,i)===o}});var vH=RangeError,vG=String.fromCharCode,vW=String.fromCodePoint,vV=Q([].join),v$=!!vW&&1!==vW.length;// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
D({target:"String",stat:!0,arity:1,forced:v$},{// eslint-disable-next-line no-unused-vars -- required for `.length`
fromCodePoint:function(t){for(var r,e=[],n=arguments.length,i=0;n>i;){if(r=+arguments[i++],r$(r,1114111)!==r)throw new vH(r+" is not a valid code point");e[i]=r<65536?vG(r):vG(((r-=65536)>>10)+55296,r%1024+56320)}return vV(e,"")}});var vY=Q("".indexOf);// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
D({target:"String",proto:!0,forced:!vN("includes")},{includes:function(t/* , position = 0 */){return!!~vY(ea(tu(this)),ea(vL(t)),arguments.length>1?arguments[1]:void 0)}});var vJ=v_.charAt,vK="String Iterator",vX=rE.set,vQ=rE.getterFor(vK);// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
i4(String,"String",function(t){vX(this,{type:vK,string:ea(t),index:0});// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,r=vQ(this),e=r.string,n=r.index;return n>=e.length?oE(void 0,!0):(t=vJ(e,n),r.index+=t.length,oE(t,!1))});var vZ={},v0=tD("species"),v1=RegExp.prototype;vZ=function(t,r,e,n){var i=tD(t),o=!H(function(){// String methods call symbol-named RegEp methods
var r={};return r[i]=function(){return 7},7!==""[t](r)}),a=o&&!H(function(){// Symbol-named RegExp methods call .exec
var r=!1,e=/a/;return"split"===t&&(// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
(e={}).constructor={},e.constructor[v0]=function(){return e},e.flags="",e[i]=/./[i]),e.exec=function(){return r=!0,null},e[i](""),!r});if(!o||!a||e){var u=eG(/./[i]),s=r(i,""[t],function(t,r,e,n,i){var a=eG(t),s=r.exec;return s===vs||s===v1.exec?o&&!i?{done:!0,value:u(r,e,n)}:{done:!0,value:a(e,r,n)}:{done:!1}});rl(String.prototype,t,s[0]),rl(v1,i,s[1])}n&&rr(v1[i],"sham",!0)};var v2={},v5=v_.charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
v2=function(t,r,e){return r+(e?v5(t,r).length:1)};var v3={},v6=TypeError;// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
v3=function(t,r){var e=t.exec;if(tv(e)){var n=G(e,t,r);return null!==n&&rn(n),n}if("RegExp"===te(t))return G(vs,t,r);throw new v6("RegExp#exec called on incompatible receiver")},// @@match logic
vZ("match",function(t,r,e){return[// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function(r){var e=tu(this),n=ts(r)?void 0:tP(r,t);return n?G(n,r,e):new RegExp(r)[t](ea(e))},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(t){var n,i=rn(this),o=ea(t),a=e(r,i,o);if(a.done)return a.value;if(!i.global)return v3(i,o);var u=i.unicode;i.lastIndex=0;for(var s=[],c=0;null!==(n=v3(i,o));){var f=ea(n[0]);s[c]=f,""===f&&(i.lastIndex=v2(o,r1(i.lastIndex),u)),c++}return 0===c?null:s}]});var v4=u8.end,v8={};v8=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(tx),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
D({target:"String",proto:!0,forced:v8},{padEnd:function(t/* , fillString = ' ' */){return v4(this,t,arguments.length>1?arguments[1]:void 0)}});var v7=u8.start;// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
D({target:"String",proto:!0,forced:v8},{padStart:function(t/* , fillString = ' ' */){return v7(this,t,arguments.length>1?arguments[1]:void 0)}});var v9=Q([].push),pt=Q([].join);// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
D({target:"String",stat:!0},{raw:function(t){var r=K(t$(t).raw),e=r0(r);if(!e)return"";for(var n=arguments.length,i=[],o=0;;){if(v9(i,ea(r[o++])),o===e)return pt(i,"");o<n&&v9(i,ea(arguments[o]))}}}),// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
D({target:"String",proto:!0},{repeat:u7});var pr={},pe=Math.floor,pn=Q("".charAt),pi=Q("".replace),po=Q("".slice),pa=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,pu=/\$([$&'`]|\d{1,2})/g;// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
pr=function(t,r,e,n,i,o){var a=e+t.length,u=n.length,s=pu;return void 0!==i&&(i=t$(i),s=pa),pi(o,s,function(o,s){var c;switch(pn(s,0)){case"$":return"$";case"&":return t;case"`":return po(r,0,e);case"'":return po(r,a);case"<":c=i[po(s,1,-1)];break;default:var f=+s;if(0===f)return o;if(f>u){var h=pe(f/10);if(0===h)return o;if(h<=u)return void 0===n[h-1]?pn(s,1):n[h-1]+pn(s,1);return o}c=n[f-1]}return void 0===c?"":c})};var ps=tD("replace"),pc=Math.max,pf=Math.min,ph=Q([].concat),pl=Q([].push),pv=Q("".indexOf),pp=Q("".slice),pd="$0"==="a".replace(/./,"$0"),pg=!!/./[ps]&&""===/./[ps]("a","$0");// @@replace logic
vZ("replace",function(t,r,e){var n=pg?"$":"$0";return[// `String.prototype.replace` method
// https://tc39.es/ecma262/#sec-string.prototype.replace
function(t,e){var n=tu(this),i=ts(t)?void 0:tP(t,ps);return i?G(i,t,n,e):G(r,ea(n),t,e)},// `RegExp.prototype[@@replace]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
function(t,i){var o=rn(this),a=ea(t);if("string"==typeof i&&-1===pv(i,n)&&-1===pv(i,"$<")){var u=e(r,o,a,i);if(u.done)return u.value}var s=tv(i);s||(i=ea(i));var c=o.global;c&&(d=o.unicode,o.lastIndex=0);for(var f=[];null!==(g=v3(o,a))&&(pl(f,g),c);)""===ea(g[0])&&(o.lastIndex=v2(a,r1(o.lastIndex),d));for(var h="",l=0,v=0;v<f.length;v++){g=f[v];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var p,d,g,y,m=ea(g[0]),b=pc(pf(rY(g.index),a.length),0),w=[],S=1;S<g.length;S++)pl(w,void 0===(p=g[S])?p:String(p));var E=g.groups;if(s){var A=ph([m],w,b,a);void 0!==E&&pl(A,E),y=ea(nP(i,void 0,A))}else y=pr(m,a,b,w,E,i);b>=l&&(h+=pp(a,l,b)+y,l=b+m.length)}return h+pp(a,l)}]},!!H(function(){var t=/./;// eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})||!pd||pg),// @@search logic
vZ("search",function(t,r,e){return[// `String.prototype.search` method
// https://tc39.es/ecma262/#sec-string.prototype.search
function(r){var e=tu(this),n=ts(r)?void 0:tP(r,t);return n?G(n,r,e):new RegExp(r)[t](ea(e))},// `RegExp.prototype[@@search]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@search
function(t){var n=rn(this),i=ea(t),o=e(r,n,i);if(o.done)return o.value;var a=n.lastIndex;fX(a,0)||(n.lastIndex=0);var u=v3(n,i);return fX(n.lastIndex,a)||(n.lastIndex=a),null===u?-1:u.index}]});var py=lB.UNSUPPORTED_Y,pm=Math.min,pb=[].push,pw=Q(/./.exec),pS=Q(pb),pE=Q("".slice);// @@split logic
vZ("split",function(t,r,e){var n;return n="c"==="abbc".split(/(b)*/)[1]||// eslint-disable-next-line regexp/no-empty-group -- required for testing
4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||// eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n,i,o,a=ea(tu(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[a];// If `separator` is not a regex, use native split
if(!lF(t))return G(r,a,t,u);for(var s=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=RegExp(t.source,c+"g");(n=G(vs,h,a))&&(!((i=h.lastIndex)>f)||(pS(s,pE(a,f,n.index)),n.length>1&&n.index<a.length&&nP(pb,s,eR(n,1)),o=n[0].length,f=i,!(s.length>=u)));)h.lastIndex===n.index&&h.lastIndex++;// Avoid an infinite loop
return f===a.length?(o||!pw(h,""))&&pS(s,""):pS(s,pE(a,f)),s.length>u?eR(s,0,u):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:G(r,this,t,e)}:r,[// `String.prototype.split` method
// https://tc39.es/ecma262/#sec-string.prototype.split
function(r,e){var i=tu(this),o=ts(r)?void 0:tP(r,t);return o?G(o,r,i,e):G(n,ea(i),r,e)},// `RegExp.prototype[@@split]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(t,i){var o=rn(this),a=ea(t),u=e(n,o,a,i,n!==r);if(u.done)return u.value;var s=u$(o,RegExp),c=o.unicode,f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(py?"g":"y"),h=new s(py?"^(?:"+o.source+")":o,f),l=void 0===i?4294967295:i>>>0;if(0===l)return[];if(0===a.length)return null===v3(h,a)?[a]:[];for(var v=0,p=0,d=[];p<a.length;){h.lastIndex=py?0:p;var g,y=v3(h,py?pE(a,p):a);if(null===y||(g=pm(r1(h.lastIndex+(py?p:0)),a.length))===v)p=v2(a,p,c);else{if(pS(d,pE(a,v,p)),d.length===l)return d;for(var m=1;m<=y.length-1;m++)if(pS(d,y[m]),d.length===l)return d;p=v=g}}return pS(d,pE(a,v)),d}]},!!H(function(){// eslint-disable-next-line regexp/no-empty-group -- required for testing
var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),py);var pA=ur,pO=eG("".startsWith),px=eG("".slice),pT=Math.min,p_=vN("startsWith"),pR=!tz&&!p_&&!!((n=pA(String.prototype,"startsWith"))&&!n.writable);// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
D({target:"String",proto:!0,forced:!pR&&!p_},{startsWith:function(t/* , position = 0 */){var r=ea(tu(this));vL(t);var e=r1(pT(arguments.length>1?arguments[1]:void 0,r.length)),n=ea(t);return pO?pO(r,n,e):px(r,e,e+n.length)===n}});var pI=cH.trim,pj={},pM=rp.PROPER,pP="​\x85᠎";// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
D({target:"String",proto:!0,forced:// check that a method works with the correct list
// of whitespaces and has a correct name
(pj=function(t){return H(function(){return!!cG[t]()||pP[t]()!==pP||pM&&cG[t].name!==t})})("trim")},{trim:function(){return pI(this)}});var pk={},pL=cH.end;// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
pk=pj("trimEnd")?function(){return pL(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimEnd,// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
D({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==pk},{trimRight:pk}),// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
D({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==pk},{trimEnd:pk});var pF={},pN=cH.start;// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
pF=pj("trimStart")?function(){return pN(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimStart,// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
D({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==pF},{trimLeft:pF}),// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
D({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==pF},{trimStart:pF});var pU={},pC=/"/g,pD=Q("".replace);// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
pU=function(t,r,e,n){var i=ea(tu(t)),o="<"+r;return""!==e&&(o+=" "+e+'="'+pD(ea(n),pC,"&quot;")+'"'),o+">"+i+"</"+r+">"};var pB={};// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
D({target:"String",proto:!0,forced:// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
(pB=function(t){return H(function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3})})("anchor")},{anchor:function(t){return pU(this,"a","name",t)}}),// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
D({target:"String",proto:!0,forced:pB("big")},{big:function(){return pU(this,"big","","")}}),// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
D({target:"String",proto:!0,forced:pB("blink")},{blink:function(){return pU(this,"blink","","")}}),// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
D({target:"String",proto:!0,forced:pB("bold")},{bold:function(){return pU(this,"b","","")}}),// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
D({target:"String",proto:!0,forced:pB("fixed")},{fixed:function(){return pU(this,"tt","","")}}),// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
D({target:"String",proto:!0,forced:pB("fontcolor")},{fontcolor:function(t){return pU(this,"font","color",t)}}),// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
D({target:"String",proto:!0,forced:pB("fontsize")},{fontsize:function(t){return pU(this,"font","size",t)}}),// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
D({target:"String",proto:!0,forced:pB("italics")},{italics:function(){return pU(this,"i","","")}}),// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
D({target:"String",proto:!0,forced:pB("link")},{link:function(t){return pU(this,"a","href",t)}}),// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
D({target:"String",proto:!0,forced:pB("small")},{small:function(){return pU(this,"small","","")}}),// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
D({target:"String",proto:!0,forced:pB("strike")},{strike:function(){return pU(this,"strike","","")}}),// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
D({target:"String",proto:!0,forced:pB("sub")},{sub:function(){return pU(this,"sub","","")}}),// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
D({target:"String",proto:!0,forced:pB("sup")},{sup:function(){return pU(this,"sup","","")}});var pz={},pq={},pH=uT.NATIVE_ARRAY_BUFFER_VIEWS,pG=B.ArrayBuffer,pW=B.Int8Array;pq=!pH||!H(function(){pW(1)})||!H(function(){new pW(-1)})||!iV(function(t){new pW,new pW(null),new pW(1.5),new pW(t)},!0)||H(function(){// Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
return 1!==new pW(new pG(2),1,void 0).length});var pV={},p$={},pY=RangeError;p$=function(t){var r=rY(t);if(r<0)throw new pY("The argument can't be less than 0");return r};var pJ=RangeError;pV=function(t,r){var e=p$(t);if(e%r)throw new pJ("Wrong offset");return e};var pK={},pX=Math.round;pK=function(t){var r=pX(t);return r<0?0:r>255?255:255&r};var pQ=uc,pZ={},p0={};p0=function(t){var r=eu(t);return"BigInt64Array"===r||"BigUint64Array"===r};var p1=uT.aTypedArrayConstructor,p2={},p5=TypeError;// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
p2=function(t){var r=th(t,"number");if("number"==typeof r)throw new p5("Can't convert number to bigint");// eslint-disable-next-line es/no-bigint -- safe
return BigInt(r)},pZ=function(t/* , mapfn, thisArg */){var r,e,n,i,o,a,u,s,c=uY(this),f=t$(t),h=arguments.length,l=h>1?arguments[1]:void 0,v=void 0!==l,p=iq(f);if(p&&!iU(p))for(s=(u=iz(f,p)).next,f=[];!(a=G(s,u)).done;)f.push(a.value);for(v&&h>2&&(l=eH(l,arguments[2])),e=r0(f),n=new(p1(c))(e),i=p0(n),r=0;e>r;r++)o=v?l(f[r],r):f[r],// FF30- typed arrays doesn't properly convert objects to typed array values
n[r]=i?p2(o):+o;return n};var p3=eq.forEach,p6=rE.get,p4=rE.set,p8=rE.enforce,p7=uo,p9=ur,dt=B.RangeError,dr=ad.ArrayBuffer,de=dr.prototype,dn=ad.DataView,di=uT.NATIVE_ARRAY_BUFFER_VIEWS,da=uT.TYPED_ARRAY_TAG,du=uT.TypedArray,ds=uT.TypedArrayPrototype,dc=uT.aTypedArrayConstructor,df=uT.isTypedArray,dh="BYTES_PER_ELEMENT",dl="Wrong length",dv=function(t,r){dc(t);for(var e=0,n=r.length,i=new t(n);n>e;)i[e]=r[e++];return i},dp=function(t,r){eL(t,r,{configurable:!0,get:function(){return p6(this)[r]}})},dd=function(t){var r;return tS(de,t)||"ArrayBuffer"===(r=eu(t))||"SharedArrayBuffer"===r},dg=function(t,r){return df(t)&&!tb(r)&&r in t&&ft(+r)&&r>=0},dy=function(t,r){return dg(t,r=tf(r))?J(2,t[r]):p9(t,r)},dm=function(t,r,e){return dg(t,r=tf(r))&&tl(e)&&tV(e,"value")&&!tV(e,"get")&&!tV(e,"set")&&!e.configurable&&(!tV(e,"writable")||e.writable)&&(!tV(e,"enumerable")||e.enumerable)?(t[r]=e.value,t):p7(t,r,e)};q?(di||(ur=dy,uo=dm,dp(ds,"buffer"),dp(ds,"byteOffset"),dp(ds,"byteLength"),dp(ds,"length")),D({target:"Object",stat:!0,forced:!di},{getOwnPropertyDescriptor:dy,defineProperty:dm}),pz=function(t,r,e){var n=t.match(/\d+/)[0]/8,i=t+(e?"Clamped":"")+"Array",o="get"+t,a="set"+t,u=B[i],s=u,c=s&&s.prototype,f={},h=function(t,r){var e=p6(t);return e.view[o](r*n+e.byteOffset,!0)},l=function(t,r,i){var o=p6(t);o.view[a](r*n+o.byteOffset,e?pK(i):i,!0)},v=function(t,r){p7(t,r,{get:function(){return h(this,r)},set:function(t){return l(this,r,t)},enumerable:!0})};di?pq&&(s=r(function(t,r,e,i){return am(t,c),s5(tl(r)?dd(r)?void 0!==i?new u(r,pV(e,n),i):void 0!==e?new u(r,pV(e,n)):new u(r):df(r)?dv(s,r):G(pZ,s,r):new u(aw(r)),t,s)}),os&&os(s,du),p3(pQ(u),function(t){t in s||rr(s,t,u[t])}),s.prototype=c):(s=r(function(t,r,e,i){am(t,c);var o,a,u,f=0,h=0;if(tl(r)){if(dd(r)){o=r,h=pV(e,n);var l=r.byteLength;if(void 0===i){if(l%n||(a=l-h)<0)throw new dt(dl)}else if((a=r1(i)*n)+h>l)throw new dt(dl);u=a/n}else if(df(r))return dv(s,r);else return G(pZ,s,r)}else a=(u=aw(r))*n,o=new dr(a);for(p4(t,{buffer:o,byteOffset:h,byteLength:a,length:u,view:new dn(o)});f<u;)v(t,f++)}),os&&os(s,du),c=s.prototype=eg(ds)),c.constructor!==s&&rr(c,"constructor",s),p8(c).TypedArrayConstructor=s,da&&rr(c,da,i);var p=s!==u;f[i]=s,D({global:!0,constructor:!0,forced:p,sham:!di},f),dh in s||rr(s,dh,n),dh in c||rr(c,dh,n),au(i)}):pz=function(){},// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Float32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Float64",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Int8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Int16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Int32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}},!0),// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Uint16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pz("Uint32",function(t){return function(r,e,n){return t(this,r,e,n)}});var db=Q(ic),dw=uT.aTypedArray;// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
(0,uT.exportTypedArrayMethod)("copyWithin",function(t,r/* , end */){return db(dw(this),t,r,arguments.length>2?arguments[2]:void 0)});var dS=eq.every,dE=uT.aTypedArray;// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
(0,uT.exportTypedArrayMethod)("every",function(t/* , thisArg */){return dS(dE(this),t,arguments.length>1?arguments[1]:void 0)});var dA=uT.aTypedArray,dO=uT.exportTypedArrayMethod,dx=Q("".slice);// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
dO("fill",function(t/* , start, end */){var r=arguments.length;dA(this);var e="Big"===dx(eu(this),0,3)?p2(t):+t;return G(iS,this,e,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)},H(function(){var t=0;return(// eslint-disable-next-line es/no-typed-arrays -- safe
new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t)}));var dT=eq.filter,d_={},dR={};dR=function(t,r){for(var e=0,n=r0(r),i=new t(n);n>e;)i[e]=r[e++];return i};var dI={},dj=uT.aTypedArrayConstructor,dM=uT.getTypedArrayConstructor;// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
dI=function(t){return dj(u$(t,dM(t)))},d_=function(t,r){return dR(dI(t),r)};var dP=uT.aTypedArray;// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
(0,uT.exportTypedArrayMethod)("filter",function(t/* , thisArg */){var r=dT(dP(this),t,arguments.length>1?arguments[1]:void 0);return d_(this,r)});var dk=eq.find,dL=uT.aTypedArray;// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
(0,uT.exportTypedArrayMethod)("find",function(t/* , thisArg */){return dk(dL(this),t,arguments.length>1?arguments[1]:void 0)});var dF=eq.findIndex,dN=uT.aTypedArray;// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
(0,uT.exportTypedArrayMethod)("findIndex",function(t/* , thisArg */){return dF(dN(this),t,arguments.length>1?arguments[1]:void 0)});var dU=eq.forEach,dC=uT.aTypedArray;// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
(0,uT.exportTypedArrayMethod)("forEach",function(t/* , thisArg */){dU(dC(this),t,arguments.length>1?arguments[1]:void 0)}),// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
(0,uT.exportTypedArrayStaticMethod)("from",pZ,pq);var dD=rV.includes,dB=uT.aTypedArray;// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
(0,uT.exportTypedArrayMethod)("includes",function(t/* , fromIndex */){return dD(dB(this),t,arguments.length>1?arguments[1]:void 0)});var dz=rV.indexOf,dq=uT.aTypedArray;// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
(0,uT.exportTypedArrayMethod)("indexOf",function(t/* , fromIndex */){return dz(dq(this),t,arguments.length>1?arguments[1]:void 0)});var dH=tD("iterator"),dG=B.Uint8Array,dW=Q(i3.values),dV=Q(i3.keys),d$=Q(i3.entries),dY=uT.aTypedArray,dJ=uT.exportTypedArrayMethod,dK=dG&&dG.prototype,dX=!H(function(){dK[dH].call([1])}),dQ=!!dK&&dK.values&&dK[dH]===dK.values&&"values"===dK.values.name,dZ=function(){return dW(dY(this))};// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
dJ("entries",function(){return d$(dY(this))},dX),// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
dJ("keys",function(){return dV(dY(this))},dX),// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
dJ("values",dZ,dX||!dQ,{name:"values"}),// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
dJ(dH,dZ,dX||!dQ,{name:"values"});var d0=uT.aTypedArray,d1=uT.exportTypedArrayMethod,d2=Q([].join);// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
d1("join",function(t){return d2(d0(this),t)});var d5=uT.aTypedArray;// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
(0,uT.exportTypedArrayMethod)("lastIndexOf",function(t/* , fromIndex */){var r=arguments.length;return nP(oI,d5(this),r>1?[t,arguments[1]]:[t])});var d3=eq.map,d6=uT.aTypedArray;// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
(0,uT.exportTypedArrayMethod)("map",function(t/* , thisArg */){return d3(d6(this),t,arguments.length>1?arguments[1]:void 0,function(t,r){return new(dI(t))(r)})});var d4=uT.aTypedArrayConstructor;// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
(0,uT.exportTypedArrayStaticMethod)("of",function(){for(var t=0,r=arguments.length,e=new(d4(this))(r);r>t;)e[t]=arguments[t++];return e},pq);var d8=oC.left,d7=uT.aTypedArray;// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
(0,uT.exportTypedArrayMethod)("reduce",function(t/* , initialValue */){var r=arguments.length;return d8(d7(this),t,r,r>1?arguments[1]:void 0)});var d9=oC.right,gt=uT.aTypedArray;// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
(0,uT.exportTypedArrayMethod)("reduceRight",function(t/* , initialValue */){var r=arguments.length;return d9(gt(this),t,r,r>1?arguments[1]:void 0)});var gr=uT.aTypedArray,ge=uT.exportTypedArrayMethod,gn=Math.floor;// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
ge("reverse",function(){for(var t,r=gr(this).length,e=gn(r/2),n=0;n<e;)t=this[n],this[n++]=this[--r],this[r]=t;return this});var gi=B.RangeError,go=B.Int8Array,ga=go&&go.prototype,gu=ga&&ga.set,gs=uT.aTypedArray,gc=uT.exportTypedArrayMethod,gf=!H(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var t=new Uint8ClampedArray(2);return G(gu,t,{length:1,0:3},1),3!==t[1]}),gh=gf&&uT.NATIVE_ARRAY_BUFFER_VIEWS&&H(function(){var t=new go(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
gc("set",function(t/* , offset */){gs(this);var r=pV(arguments.length>1?arguments[1]:void 0,1),e=t$(t);if(gf)return G(gu,this,e,r);var n=this.length,i=r0(e),o=0;if(i+r>n)throw new gi("Wrong length");for(;o<i;)this[r+o]=e[o++]},!gf||gh);var gl=uT.aTypedArray;// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
(0,uT.exportTypedArrayMethod)("slice",function(t,r){for(var e=nN(gl(this),t,r),n=dI(this),i=0,o=e.length,a=new n(o);o>i;)a[i]=e[i++];return a},H(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
new Int8Array(1).slice()}));var gv=eq.some,gp=uT.aTypedArray;// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
(0,uT.exportTypedArrayMethod)("some",function(t/* , thisArg */){return gv(gp(this),t,arguments.length>1?arguments[1]:void 0)});var gd=uT.aTypedArray,gg=uT.exportTypedArrayMethod,gy=B.Uint16Array,gm=gy&&eG(gy.prototype.sort),gb=!!gm&&!(H(function(){gm(new gy(2),null)})&&H(function(){gm(new gy(2),{})})),gw=!!gm&&!H(function(){// feature detection can be too slow, so check engines versions
if(tO)return tO<74;if(o6)return o6<67;if(o8)return!0;if(o7)return o7<602;var t,r,e=new gy(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(gm(e,function(t,r){return(t/4|0)-(r/4|0)}),t=0;t<516;t++)if(e[t]!==n[t])return!0});// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
gg("sort",function(t){return(void 0!==t&&tk(t),gw)?gm(this,t):o0(gd(this),function(r,e){return void 0!==t?+t(r,e)||0:e!=e?-1:r!=r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e})},!gw||gb);var gS=uT.aTypedArray;// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
(0,uT.exportTypedArrayMethod)("subarray",function(t,r){var e=gS(this),n=e.length,i=r$(t,n);return new(dI(e))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,r1((void 0===r?n:r$(r,n))-i))});var gE=B.Int8Array,gA=uT.aTypedArray,gO=uT.exportTypedArrayMethod,gx=[].toLocaleString,gT=!!gE&&H(function(){gx.call(new gE(1))});// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
gO("toLocaleString",function(){return nP(gx,gT?nN(gA(this)):gA(this),nN(arguments))},H(function(){return[1,2].toLocaleString()!==new gE([1,2]).toLocaleString()})||!H(function(){gE.prototype.toLocaleString.call([1,2])}));var g_=uT.exportTypedArrayMethod,gR=B.Uint8Array,gI=gR&&gR.prototype||{},gj=[].toString,gM=Q([].join);H(function(){gj.call({})})&&(gj=function(){return gM(this)});var gP=gI.toString!==gj;// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
g_("toString",gj,gP);var gk={},gL=sq.getWeakData,gF=rE.set,gN=rE.getterFor,gU=eq.find,gC=eq.findIndex,gD=Q([].splice),gB=0,gz=function(t){return t.frozen||(t.frozen=new gq)},gq=function(){this.entries=[]},gH=function(t,r){return gU(t.entries,function(t){return t[0]===r})};gq.prototype={get:function(t){var r=gH(this,t);if(r)return r[1]},has:function(t){return!!gH(this,t)},set:function(t,r){var e=gH(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=gC(this.entries,function(r){return r[0]===t});return~r&&gD(this.entries,r,1),!!~r}},gk={getConstructor:function(t,r,e,n){var i=t(function(t,i){am(t,o),gF(t,{type:r,id:gB++,frozen:void 0}),ts(i)||sZ(i,t[n],{that:t,AS_ENTRIES:e})}),o=i.prototype,a=gN(r),u=function(t,r,e){var n=a(t),i=gL(rn(r),!0);return!0===i?gz(n).set(r,e):i[n.id]=e,t};return ay(o,{// `{ WeakMap, WeakSet }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.delete
// https://tc39.es/ecma262/#sec-weakset.prototype.delete
delete:function(t){var r=a(this);if(!tl(t))return!1;var e=gL(t);return!0===e?gz(r).delete(t):e&&tV(e,r.id)&&delete e[r.id]},// `{ WeakMap, WeakSet }.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.has
// https://tc39.es/ecma262/#sec-weakset.prototype.has
has:function(t){var r=a(this);if(!tl(t))return!1;var e=gL(t);return!0===e?gz(r).has(t):e&&tV(e,r.id)}}),ay(o,e?{// `WeakMap.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.get
get:function(t){var r=a(this);if(tl(t)){var e=gL(t);return!0===e?gz(r).get(t):e?e[r.id]:void 0}},// `WeakMap.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.set
set:function(t,r){return u(this,t,r)}}:{// `WeakSet.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-weakset.prototype.add
add:function(t){return u(this,t,!0)}}),i}};var gG=rE.enforce,gW=Object,gV=Array.isArray,g$=gW.isExtensible,gY=gW.isFrozen,gJ=gW.isSealed,gK=gW.freeze,gX=gW.seal,gQ={},gZ={},g0=!B.ActiveXObject&&"ActiveXObject"in B,g1=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},g2=sz("WeakMap",g1,gk),g5=g2.prototype,g3=Q(g5.set);// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if(rA){if(g0){_=gk.getConstructor(g1,"WeakMap",!0),sq.enable();var g6=Q(g5.delete),g4=Q(g5.has),g8=Q(g5.get);ay(g5,{delete:function(t){if(tl(t)&&!g$(t)){var r=gG(this);return r.frozen||(r.frozen=new _),g6(this,t)||r.frozen.delete(t)}return g6(this,t)},has:function(t){if(tl(t)&&!g$(t)){var r=gG(this);return r.frozen||(r.frozen=new _),g4(this,t)||r.frozen.has(t)}return g4(this,t)},get:function(t){if(tl(t)&&!g$(t)){var r=gG(this);return r.frozen||(r.frozen=new _),g4(this,t)?g8(this,t):r.frozen.get(t)}return g8(this,t)},set:function(t,r){if(tl(t)&&!g$(t)){var e=gG(this);e.frozen||(e.frozen=new _),g4(this,t)?g3(this,t,r):e.frozen.set(t,r)}else g3(this,t,r);return this}});// Chakra Edge frozen keys fix
}else s$&&H(function(){var t=gK([]);return g3(new g2,t,1),!gY(t)})&&ay(g5,{set:function(t,r){var e;return gV(t)&&(gY(t)?e=gQ:gJ(t)&&(e=gZ)),g3(this,t,r),e===gQ&&gK(t),e===gZ&&gX(t),this}})}// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
sz("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},gk);var g7={};// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
g7={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var g9={},yt=t4("span").classList,yr=yt&&yt.constructor&&yt.constructor.prototype;g9=yr===Object.prototype?void 0:yr;var ye=function(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t&&t.forEach!==iP)try{rr(t,"forEach",iP)}catch(r){t.forEach=iP}};for(var yn in g7)g7[yn]&&ye(B[yn]&&B[yn].prototype);ye(g9);var yi=tD("iterator"),yo=tD("toStringTag"),ya=i3.values,yu=function(t,r){if(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t[yi]!==ya)try{rr(t,yi,ya)}catch(r){t[yi]=ya}if(t[yo]||rr(t,yo,r),g7[r]){for(var e in i3)// some Chrome versions have non-configurable methods on DOMTokenList
if(t[e]!==i3[e])try{rr(t,e,i3[e])}catch(r){t[e]=i3[e]}}}};for(var ys in g7)yu(B[ys]&&B[ys].prototype,ys);yu(g9,"DOMTokenList");var yc=hn.clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
D({global:!0,bind:!0,enumerable:!0,forced:B.clearImmediate!==yc},{clearImmediate:yc});var yf=hn.set,yh={},yl={};/* global Bun -- Deno case */yl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var yv=B.Function,yp=/MSIE .\./.test(tx)||yl&&((i=B.Bun.version.split(".")).length<3||"0"===i[0]&&(i[1]<3||"3"===i[1]&&"0"===i[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
yh=function(t,r){var e=r?2:1;return yp?function(n,i/* , ...arguments */){var o=hi(arguments.length,1)>e,a=tv(n)?n:yv(n),u=o?nN(arguments,e):[],s=o?function(){nP(a,this,u)}:a;return r?t(s,i):t(s)}:t};// https://github.com/oven-sh/bun/issues/1633
var yd=B.setImmediate?yh(yf,!1):yf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
D({global:!0,bind:!0,enumerable:!0,forced:B.setImmediate!==yd},{setImmediate:yd});var yg=B.process;// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
D({global:!0,enumerable:!0,dontCallGetSet:!0},{queueMicrotask:function(t){hi(arguments.length,1),tk(t);var r=oq&&yg.domain;hE(r?r.bind(t):t)}});var yy=yh(B.setInterval,!0);// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
D({global:!0,bind:!0,forced:B.setInterval!==yy},{setInterval:yy});var ym=yh(B.setTimeout,!0);// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
D({global:!0,bind:!0,forced:B.setTimeout!==ym},{setTimeout:ym});var yb={},yw=tD("iterator");yb=!H(function(){// eslint-disable-next-line unicorn/relative-url-style -- required for testing
var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,e=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",r.forEach(function(t,e){r.delete("b"),n+=e+t}),e.delete("a",2),// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
e.delete("b",void 0),tz&&(!t.toJSON||!e.has("a",1)||e.has("a",2)||!e.has("a",void 0)||e.has("b"))||!r.size&&(tz||!q)||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[yw]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host});var yS=v_.codeAt,yE={},yA=/[^\0-\u007E]/,yO=/[.\u3002\uFF0E\uFF61]/g,yx="Overflow: input needs wider integers to process",yT=RangeError,y_=Q(yO.exec),yR=Math.floor,yI=String.fromCharCode,yj=Q("".charCodeAt),yM=Q([].join),yP=Q([].push),yk=Q("".replace),yL=Q("".split),yF=Q("".toLowerCase),yN=function(t){for(var r=[],e=0,n=t.length;e<n;){var i=yj(t,e++);if(i>=55296&&i<=56319&&e<n){// It's a high surrogate, and there is a next character.
var o=yj(t,e++);(64512&o)==56320?yP(r,((1023&i)<<10)+(1023&o)+65536):(// It's an unmatched surrogate; only append this code unit, in case the
// next code unit is the high surrogate of a surrogate pair.
yP(r,i),e--)}else yP(r,i)}return r},yU=function(t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)},yC=function(t,r,e){var n=0;for(t=e?yR(t/700):t>>1,t+=yR(t/r);t>455;)t=yR(t/35),n+=36;return yR(n+36*t/(t+38))},yD=function(t){var r,e,n=[],i=// Convert the input in UCS-2 to an array of Unicode code points.
(t=yN(t)).length,o=128,a=0,u=72;// Handle the basic code points.
for(r=0;r<t.length;r++)(e=t[r])<128&&yP(n,yI(e));var s=n.length,c=s;// number of basic code points.
// Main encoding loop:
for(s&&yP(n,"-");c<i;){// All non-basic code points < n have been handled already. Find the next larger one:
var f=2147483647;for(r=0;r<t.length;r++)(e=t[r])>=o&&e<f&&(f=e);// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
var h=c+1;if(f-o>yR((2147483647-a)/h))throw new yT(yx);for(a+=(f-o)*h,o=f,r=0;r<t.length;r++){if((e=t[r])<o&&++a>2147483647)throw new yT(yx);if(e===o){for(// Represent delta as a generalized variable-length integer.
var l=a,v=36;;){var p=v<=u?1:v>=u+26?26:v-u;if(l<p)break;var d=l-p,g=36-p;yP(n,yI(yU(p+d%g))),l=yR(d/g),v+=36}yP(n,yI(yU(l))),u=yC(a,h,c===s),a=0,c++}}a++,o++}return yM(n,"")};yE=function(t){var r,e,n=[],i=yL(yk(yF(t),yO,"."),".");for(r=0;r<i.length;r++)yP(n,y_(yA,e=i[r])?"xn--"+yD(e):e);return yM(n,".")};var yB={},yz=tD("iterator"),yq="URLSearchParams",yH=yq+"Iterator",yG=rE.set,yW=rE.getterFor(yq),yV=rE.getterFor(yH),y$=Object.getOwnPropertyDescriptor,yY=function(t){if(!q)return B[t];var r=y$(B,t);return r&&r.value},yJ=yY("fetch"),yK=yY("Request"),yX=yY("Headers"),yQ=yK&&yK.prototype,yZ=yX&&yX.prototype,y0=B.RegExp,y1=B.TypeError,y2=B.decodeURIComponent,y5=B.encodeURIComponent,y3=Q("".charAt),y6=Q([].join),y4=Q([].push),y8=Q("".replace),y7=Q([].shift),y9=Q([].splice),mt=Q("".split),mr=Q("".slice),me=/\+/g,mn=[,,,,],mi=function(t){try{return y2(t)}catch(r){return t}},mo=function(t){var r,e=y8(t,me," "),n=4;try{return y2(e)}catch(t){for(;n;)e=y8(e,mn[(r=n--)-1]||(mn[r-1]=y0("((?:%[\\da-f]{2}){"+r+"})","gi")),mi);return e}},ma=/[!'()~]|%20/g,mu={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ms=function(t){return mu[t]},mc=function(t){return y8(y5(t),ma,ms)},mf=i8(function(t,r){yG(this,{type:yH,iterator:iz(yW(t).entries),kind:r})},"Iterator",function(){var t=yV(this),r=t.kind,e=t.iterator.next(),n=e.value;return e.done||(e.value="keys"===r?n.key:"values"===r?n.value:[n.key,n.value]),e},!0),mh=function(t){this.entries=[],this.url=null,void 0!==t&&(tl(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===y3(t,0)?mr(t,1):t:ea(t)))};mh.prototype={type:yq,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var r,e,n,i,o,a,u,s=iq(t);if(s)for(e=(r=iz(t,s)).next;!(n=G(e,r)).done;){if(o=(i=iz(rn(n.value))).next,(a=G(o,i)).done||(u=G(o,i)).done||!G(o,i).done)throw new y1("Expected sequence with length 2");y4(this.entries,{key:ea(a.value),value:ea(u.value)})}else for(var c in t)tV(t,c)&&y4(this.entries,{key:c,value:ea(t[c])})},parseQuery:function(t){if(t)for(var r,e,n=mt(t,"&"),i=0;i<n.length;)(r=n[i++]).length&&(e=mt(r,"="),y4(this.entries,{key:mo(y7(e)),value:mo(y6(e,"="))}))},serialize:function(){for(var t,r=this.entries,e=[],n=0;n<r.length;)y4(e,mc((t=r[n++]).key)+"="+mc(t.value));return y6(e,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var ml=function(){am(this,mv);var t=arguments.length>0?arguments[0]:void 0,r=yG(this,new mh(t));q||(this.size=r.entries.length)},mv=ml.prototype;// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if(ay(mv,{// `URLSearchParams.prototype.append` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-append
append:function(t,r){var e=yW(this);hi(arguments.length,2),y4(e.entries,{key:ea(t),value:ea(r)}),!q&&this.length++,e.updateURL()},// `URLSearchParams.prototype.delete` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-delete
delete:function(t/* , value */){for(var r=yW(this),e=hi(arguments.length,1),n=r.entries,i=ea(t),o=e<2?void 0:arguments[1],a=void 0===o?o:ea(o),u=0;u<n.length;){var s=n[u];if(s.key===i&&(void 0===a||s.value===a)){if(y9(n,u,1),void 0!==a)break}else u++}q||(this.size=n.length),r.updateURL()},// `URLSearchParams.prototype.get` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-get
get:function(t){var r=yW(this).entries;hi(arguments.length,1);for(var e=ea(t),n=0;n<r.length;n++)if(r[n].key===e)return r[n].value;return null},// `URLSearchParams.prototype.getAll` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-getall
getAll:function(t){var r=yW(this).entries;hi(arguments.length,1);for(var e=ea(t),n=[],i=0;i<r.length;i++)r[i].key===e&&y4(n,r[i].value);return n},// `URLSearchParams.prototype.has` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-has
has:function(t/* , value */){for(var r=yW(this).entries,e=hi(arguments.length,1),n=ea(t),i=e<2?void 0:arguments[1],o=void 0===i?i:ea(i),a=0;a<r.length;){var u=r[a++];if(u.key===n&&(void 0===o||u.value===o))return!0}return!1},// `URLSearchParams.prototype.set` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-set
set:function(t,r){var e,n=yW(this);hi(arguments.length,1);for(var i=n.entries,o=!1,a=ea(t),u=ea(r),s=0;s<i.length;s++)(e=i[s]).key===a&&(o?y9(i,s--,1):(o=!0,e.value=u));o||y4(i,{key:a,value:u}),q||(this.size=i.length),n.updateURL()},// `URLSearchParams.prototype.sort` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-sort
sort:function(){var t=yW(this);o0(t.entries,function(t,r){return t.key>r.key?1:-1}),t.updateURL()},// `URLSearchParams.prototype.forEach` method
forEach:function(t/* , thisArg */){for(var r,e=yW(this).entries,n=eH(t,arguments.length>1?arguments[1]:void 0),i=0;i<e.length;)n((r=e[i++]).value,r.key,this)},// `URLSearchParams.prototype.keys` method
keys:function(){return new mf(this,"keys")},// `URLSearchParams.prototype.values` method
values:function(){return new mf(this,"values")},// `URLSearchParams.prototype.entries` method
entries:function(){return new mf(this,"entries")}},{enumerable:!0}),// `URLSearchParams.prototype[@@iterator]` method
rl(mv,yz,mv.entries,{name:"entries"}),// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
rl(mv,"toString",function(){return yW(this).serialize()},{enumerable:!0}),q&&eL(mv,"size",{get:function(){return yW(this).entries.length},configurable:!0,enumerable:!0}),eD(ml,yq),D({global:!0,constructor:!0,forced:!yb},{URLSearchParams:ml}),!yb&&tv(yX)){var mp=Q(yZ.has),md=Q(yZ.set),mg=function(t){if(tl(t)){var r,e=t.body;if(eu(e)===yq)return mp(r=t.headers?new yX(t.headers):new yX,"content-type")||md(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),eg(t,{body:J(0,ea(e)),headers:J(0,r)})}return t};if(tv(yJ)&&D({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t/* , init */){return yJ(t,arguments.length>1?mg(arguments[1]):{})}}),tv(yK)){var my=function(t/* , init */){return am(this,yQ),new yK(t,arguments.length>1?mg(arguments[1]):{})};yQ.constructor=my,my.prototype=yQ,D({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:my})}}yB={URLSearchParams:ml,getState:yW};var mm=rE.set,mb=rE.getterFor("URL"),mw=yB.URLSearchParams,mS=yB.getState,mE=B.URL,mA=B.TypeError,mO=B.parseInt,mx=Math.floor,mT=Math.pow,m_=Q("".charAt),mR=Q(/./.exec),mI=Q([].join),mj=Q(1..toString),mM=Q([].pop),mP=Q([].push),mk=Q("".replace),mL=Q([].shift),mF=Q("".split),mN=Q("".slice),mU=Q("".toLowerCase),mC=Q([].unshift),mD="Invalid scheme",mB="Invalid host",mz="Invalid port",mq=/[a-z]/i,mH=/[\d+-.a-z]/i,mG=/\d/,mW=/^0x/i,mV=/^[0-7]+$/,m$=/^\d+$/,mY=/^[\da-f]+$/i,mJ=/[\0\t\n\r #%/:<>?@[\\\]^|]/,mK=/[\0\t\n\r #/:<>?@[\\\]^|]/,mX=/^[\u0000-\u0020]+/,mQ=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,mZ=/[\t\n\r]/g,m0=function(t){var r,e,n,i,o,a,u,s=mF(t,".");if(s.length&&""===s[s.length-1]&&s.length--,(r=s.length)>4)return t;for(n=0,e=[];n<r;n++){if(""===(i=s[n]))return t;if(o=10,i.length>1&&"0"===m_(i,0)&&(o=mR(mW,i)?16:8,i=mN(i,8===o?1:2)),""===i)a=0;else{if(!mR(10===o?m$:8===o?mV:mY,i))return t;a=mO(i,o)}mP(e,a)}for(n=0;n<r;n++)if(a=e[n],n===r-1){if(a>=mT(256,5-r))return null}else if(a>255)return null;for(n=0,u=mM(e);n<e.length;n++)u+=e[n]*mT(256,3-n);return u},m1=function(t){var r,e,n,i,o,a,u,s=[0,0,0,0,0,0,0,0],c=0,f=null,h=0,l=function(){return m_(t,h)};if(":"===l()){if(":"!==m_(t,1))return;h+=2,f=++c}for(;l();){if(8===c)return;if(":"===l()){if(null!==f)return;h++,f=++c;continue}for(r=e=0;e<4&&mR(mY,l());)r=16*r+mO(l(),16),h++,e++;if("."===l()){if(0===e||(h-=e,c>6))return;for(n=0;l();){if(i=null,n>0){if("."!==l()||!(n<4))return;h++}if(!mR(mG,l()))return;for(;mR(mG,l());){if(o=mO(l(),10),null===i)i=o;else{if(0===i)return;i=10*i+o}if(i>255)return;h++}s[c]=256*s[c]+i,(2==++n||4===n)&&c++}if(4!==n)return;break}if(":"===l()){if(h++,!l())return}else if(l())return;s[c++]=r}if(null!==f)for(a=c-f,c=7;0!==c&&a>0;)u=s[c],s[c--]=s[f+a-1],s[f+--a]=u;else if(8!==c)return;return s},m2=function(t){for(var r=null,e=1,n=null,i=0,o=0;o<8;o++)0!==t[o]?(i>e&&(r=n,e=i),n=null,i=0):(null===n&&(n=o),++i);return i>e&&(r=n,e=i),r},m5=function(t){var r,e,n,i;// ipv4
if("number"==typeof t){for(e=0,r=[];e<4;e++)mC(r,t%256),t=mx(t/256);return mI(r,".");// ipv6
}if("object"==typeof t){for(e=0,r="",n=m2(t);e<8;e++)(!i||0!==t[e])&&(i&&(i=!1),n===e?(r+=e?":":"::",i=!0):(r+=mj(t[e],16),e<7&&(r+=":")));return"["+r+"]"}return t},m3={},m6=fj({},m3,{" ":1,'"':1,"<":1,">":1,"`":1}),m4=fj({},m6,{"#":1,"?":1,"{":1,"}":1}),m8=fj({},m4,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),m7=function(t,r){var e=yS(t,0);return e>32&&e<127&&!tV(r,t)?t:encodeURIComponent(t)},m9={ftp:21,file:null,http:80,https:443,ws:80,wss:443},bt=function(t,r){var e;return 2===t.length&&mR(mq,m_(t,0))&&(":"===(e=m_(t,1))||!r&&"|"===e)},br=function(t){var r;return t.length>1&&bt(mN(t,0,2))&&(2===t.length||"/"===(r=m_(t,2))||"\\"===r||"?"===r||"#"===r)},be={},bn={},bi={},bo={},ba={},bu={},bs={},bc={},bf={},bh={},bl={},bv={},bp={},bd={},bg={},by={},bm={},bb={},bw={},bS={},bE={},bA=function(t,r,e){var n,i,o,a=ea(t);if(r){if(i=this.parse(a))throw new mA(i);this.searchParams=null}else{if(void 0!==e&&(n=new bA(e,!0)),i=this.parse(a,null,n))throw new mA(i);(o=mS(new mw)).bindURL(this),this.searchParams=o}};bA.prototype={type:"URL",// https://url.spec.whatwg.org/#url-parsing
// eslint-disable-next-line max-statements -- TODO
parse:function(t,r,e){var n=r||be,i=0,o="",a=!1,u=!1,s=!1;for(t=ea(t),r||(this.scheme="",this.username="",this.password="",this.host=null,this.port=null,this.path=[],this.query=null,this.fragment=null,this.cannotBeABaseURL=!1,t=mk(t,mX,""),t=mk(t,mQ,"$1")),t=mk(t,mZ,""),c=iL(t);i<=c.length;){switch(f=c[i],n){case be:if(f&&mR(mq,f))o+=mU(f),n=bn;else{if(r)return mD;n=bi;continue}break;case bn:if(f&&(mR(mH,f)||"+"===f||"-"===f||"."===f))o+=mU(f);else if(":"===f){if(r&&(this.isSpecial()!==tV(m9,o)||"file"===o&&(this.includesCredentials()||null!==this.port)||"file"===this.scheme&&!this.host))return;if(this.scheme=o,r){this.isSpecial()&&m9[this.scheme]===this.port&&(this.port=null);return}o="","file"===this.scheme?n=bd:this.isSpecial()&&e&&e.scheme===this.scheme?n=bo:this.isSpecial()?n=bc:"/"===c[i+1]?(n=ba,i++):(this.cannotBeABaseURL=!0,mP(this.path,""),n=bw)}else{if(r)return mD;o="",n=bi,i=0;continue}break;case bi:if(!e||e.cannotBeABaseURL&&"#"!==f)return mD;if(e.cannotBeABaseURL&&"#"===f){this.scheme=e.scheme,this.path=eR(e.path),this.query=e.query,this.fragment="",this.cannotBeABaseURL=!0,n=bE;break}n="file"===e.scheme?bd:bu;continue;case bo:if("/"===f&&"/"===c[i+1])n=bf,i++;else{n=bu;continue}break;case ba:if("/"===f){n=bh;break}n=bb;continue;case bu:if(this.scheme=e.scheme,f===R)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eR(e.path),this.query=e.query;else if("/"===f||"\\"===f&&this.isSpecial())n=bs;else if("?"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eR(e.path),this.query="",n=bS;else if("#"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eR(e.path),this.query=e.query,this.fragment="",n=bE;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eR(e.path),this.path.length--,n=bb;continue}break;case bs:if(this.isSpecial()&&("/"===f||"\\"===f))n=bf;else if("/"===f)n=bh;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,n=bb;continue}break;case bc:if(n=bf,"/"!==f||"/"!==m_(o,i+1))continue;i++;break;case bf:if("/"!==f&&"\\"!==f){n=bh;continue}break;case bh:if("@"===f){a&&(o="%40"+o),a=!0,h=iL(o);for(var c,f,h,l,v,p,d=0;d<h.length;d++){var g=h[d];if(":"===g&&!s){s=!0;continue}var y=m7(g,m8);s?this.password+=y:this.username+=y}o=""}else if(f===R||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(a&&""===o)return"Invalid authority";i-=iL(o).length+1,o="",n=bl}else o+=f;break;case bl:case bv:if(r&&"file"===this.scheme){n=by;continue}if(":"!==f||u){if(f===R||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(this.isSpecial()&&""===o)return mB;if(r&&""===o&&(this.includesCredentials()||null!==this.port))return;if(l=this.parseHost(o))return l;if(o="",n=bm,r)return;continue}"["===f?u=!0:"]"===f&&(u=!1),o+=f}else{if(""===o)return mB;if(l=this.parseHost(o))return l;if(o="",n=bp,r===bv)return}break;case bp:if(mR(mG,f))o+=f;else{if(!(f===R||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial())&&!r)return mz;if(""!==o){var m=mO(o,10);if(m>65535)return mz;this.port=this.isSpecial()&&m===m9[this.scheme]?null:m,o=""}if(r)return;n=bm;continue}break;case bd:if(this.scheme="file","/"===f||"\\"===f)n=bg;else if(e&&"file"===e.scheme)switch(f){case R:this.host=e.host,this.path=eR(e.path),this.query=e.query;break;case"?":this.host=e.host,this.path=eR(e.path),this.query="",n=bS;break;case"#":this.host=e.host,this.path=eR(e.path),this.query=e.query,this.fragment="",n=bE;break;default:br(mI(eR(c,i),""))||(this.host=e.host,this.path=eR(e.path),this.shortenPath()),n=bb;continue}else{n=bb;continue}break;case bg:if("/"===f||"\\"===f){n=by;break}e&&"file"===e.scheme&&!br(mI(eR(c,i),""))&&(bt(e.path[0],!0)?mP(this.path,e.path[0]):this.host=e.host),n=bb;continue;case by:if(f===R||"/"===f||"\\"===f||"?"===f||"#"===f){if(!r&&bt(o))n=bb;else if(""===o){if(this.host="",r)return;n=bm}else{if(l=this.parseHost(o))return l;if("localhost"===this.host&&(this.host=""),r)return;o="",n=bm}continue}o+=f;break;case bm:if(this.isSpecial()){if(n=bb,"/"!==f&&"\\"!==f)continue}else if(r||"?"!==f){if(r||"#"!==f){if(f!==R&&(n=bb,"/"!==f))continue}else this.fragment="",n=bE}else this.query="",n=bS;break;case bb:if(f===R||"/"===f||"\\"===f&&this.isSpecial()||!r&&("?"===f||"#"===f)){if(".."===(v=mU(v=o))||"%2e."===v||".%2e"===v||"%2e%2e"===v?(this.shortenPath(),"/"===f||"\\"===f&&this.isSpecial()||mP(this.path,"")):"."===(p=o)||"%2e"===mU(p)?"/"===f||"\\"===f&&this.isSpecial()||mP(this.path,""):("file"===this.scheme&&!this.path.length&&bt(o)&&(this.host&&(this.host=""),o=m_(o,0)+":"),mP(this.path,o)),o="","file"===this.scheme&&(f===R||"?"===f||"#"===f))for(;this.path.length>1&&""===this.path[0];)mL(this.path);"?"===f?(this.query="",n=bS):"#"===f&&(this.fragment="",n=bE)}else o+=m7(f,m4);break;case bw:"?"===f?(this.query="",n=bS):"#"===f?(this.fragment="",n=bE):f!==R&&(this.path[0]+=m7(f,m3));break;case bS:r||"#"!==f?f!==R&&("'"===f&&this.isSpecial()?this.query+="%27":"#"===f?this.query+="%23":this.query+=m7(f,m3)):(this.fragment="",n=bE);break;case bE:f!==R&&(this.fragment+=m7(f,m6))}i++}},// https://url.spec.whatwg.org/#host-parsing
parseHost:function(t){var r,e,n;if("["===m_(t,0)){if("]"!==m_(t,t.length-1)||!(r=m1(mN(t,1,-1))))return mB;this.host=r;// opaque host
}else if(this.isSpecial()){if(mR(mJ,t=yE(t))||null===(r=m0(t)))return mB;this.host=r}else{if(mR(mK,t))return mB;for(n=0,r="",e=iL(t);n<e.length;n++)r+=m7(e[n],m3);this.host=r}},// https://url.spec.whatwg.org/#cannot-have-a-username-password-port
cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},// https://url.spec.whatwg.org/#include-credentials
includesCredentials:function(){return""!==this.username||""!==this.password},// https://url.spec.whatwg.org/#is-special
isSpecial:function(){return tV(m9,this.scheme)},// https://url.spec.whatwg.org/#shorten-a-urls-path
shortenPath:function(){var t=this.path,r=t.length;r&&("file"!==this.scheme||1!==r||!bt(t[0],!0))&&t.length--},// https://url.spec.whatwg.org/#concept-url-serializer
serialize:function(){var t=this.scheme,r=this.username,e=this.password,n=this.host,i=this.port,o=this.path,a=this.query,u=this.fragment,s=t+":";return null!==n?(s+="//",this.includesCredentials()&&(s+=r+(e?":"+e:"")+"@"),s+=m5(n),null!==i&&(s+=":"+i)):"file"===t&&(s+="//"),s+=this.cannotBeABaseURL?o[0]:o.length?"/"+mI(o,"/"):"",null!==a&&(s+="?"+a),null!==u&&(s+="#"+u),s},// https://url.spec.whatwg.org/#dom-url-href
setHref:function(t){var r=this.parse(t);if(r)throw new mA(r);this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-origin
getOrigin:function(){var t=this.scheme,r=this.port;if("blob"===t)try{return new bO(t.path[0]).origin}catch(t){return"null"}return"file"!==t&&this.isSpecial()?t+"://"+m5(this.host)+(null!==r?":"+r:""):"null"},// https://url.spec.whatwg.org/#dom-url-protocol
getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(ea(t)+":",be)},// https://url.spec.whatwg.org/#dom-url-username
getUsername:function(){return this.username},setUsername:function(t){var r=iL(ea(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var e=0;e<r.length;e++)this.username+=m7(r[e],m8)}},// https://url.spec.whatwg.org/#dom-url-password
getPassword:function(){return this.password},setPassword:function(t){var r=iL(ea(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var e=0;e<r.length;e++)this.password+=m7(r[e],m8)}},// https://url.spec.whatwg.org/#dom-url-host
getHost:function(){var t=this.host,r=this.port;return null===t?"":null===r?m5(t):m5(t)+":"+r},setHost:function(t){this.cannotBeABaseURL||this.parse(t,bl)},// https://url.spec.whatwg.org/#dom-url-hostname
getHostname:function(){var t=this.host;return null===t?"":m5(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,bv)},// https://url.spec.whatwg.org/#dom-url-port
getPort:function(){var t=this.port;return null===t?"":ea(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""===(t=ea(t))?this.port=null:this.parse(t,bp))},// https://url.spec.whatwg.org/#dom-url-pathname
getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+mI(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,bm))},// https://url.spec.whatwg.org/#dom-url-search
getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""===(t=ea(t))?this.query=null:("?"===m_(t,0)&&(t=mN(t,1)),this.query="",this.parse(t,bS)),this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-searchparams
getSearchParams:function(){return this.searchParams.facade},// https://url.spec.whatwg.org/#dom-url-hash
getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){if(""===(t=ea(t))){this.fragment=null;return}"#"===m_(t,0)&&(t=mN(t,1)),this.fragment="",this.parse(t,bE)},update:function(){this.query=this.searchParams.serialize()||null}};// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var bO=function(t/* , base */){var r=am(this,bx),e=hi(arguments.length,1)>1?arguments[1]:void 0,n=mm(r,new bA(t,!1,e));q||(r.href=n.serialize(),r.origin=n.getOrigin(),r.protocol=n.getProtocol(),r.username=n.getUsername(),r.password=n.getPassword(),r.host=n.getHost(),r.hostname=n.getHostname(),r.port=n.getPort(),r.pathname=n.getPathname(),r.search=n.getSearch(),r.searchParams=n.getSearchParams(),r.hash=n.getHash())},bx=bO.prototype,bT=function(t,r){return{get:function(){return mb(this)[t]()},set:r&&function(t){return mb(this)[r](t)},configurable:!0,enumerable:!0}};if(q&&(// `URL.prototype.href` accessors pair
// https://url.spec.whatwg.org/#dom-url-href
eL(bx,"href",bT("serialize","setHref")),// `URL.prototype.origin` getter
// https://url.spec.whatwg.org/#dom-url-origin
eL(bx,"origin",bT("getOrigin")),// `URL.prototype.protocol` accessors pair
// https://url.spec.whatwg.org/#dom-url-protocol
eL(bx,"protocol",bT("getProtocol","setProtocol")),// `URL.prototype.username` accessors pair
// https://url.spec.whatwg.org/#dom-url-username
eL(bx,"username",bT("getUsername","setUsername")),// `URL.prototype.password` accessors pair
// https://url.spec.whatwg.org/#dom-url-password
eL(bx,"password",bT("getPassword","setPassword")),// `URL.prototype.host` accessors pair
// https://url.spec.whatwg.org/#dom-url-host
eL(bx,"host",bT("getHost","setHost")),// `URL.prototype.hostname` accessors pair
// https://url.spec.whatwg.org/#dom-url-hostname
eL(bx,"hostname",bT("getHostname","setHostname")),// `URL.prototype.port` accessors pair
// https://url.spec.whatwg.org/#dom-url-port
eL(bx,"port",bT("getPort","setPort")),// `URL.prototype.pathname` accessors pair
// https://url.spec.whatwg.org/#dom-url-pathname
eL(bx,"pathname",bT("getPathname","setPathname")),// `URL.prototype.search` accessors pair
// https://url.spec.whatwg.org/#dom-url-search
eL(bx,"search",bT("getSearch","setSearch")),// `URL.prototype.searchParams` getter
// https://url.spec.whatwg.org/#dom-url-searchparams
eL(bx,"searchParams",bT("getSearchParams")),// `URL.prototype.hash` accessors pair
// https://url.spec.whatwg.org/#dom-url-hash
eL(bx,"hash",bT("getHash","setHash"))),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
rl(bx,"toJSON",function(){return mb(this).serialize()},{enumerable:!0}),// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
rl(bx,"toString",function(){return mb(this).serialize()},{enumerable:!0}),mE){var b_=mE.createObjectURL,bR=mE.revokeObjectURL;b_&&rl(bO,"createObjectURL",eH(b_,mE)),bR&&rl(bO,"revokeObjectURL",eH(bR,mE))}eD(bO,"URL"),D({global:!0,constructor:!0,forced:!yb,sham:!q},{URL:bO}),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
D({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return G(URL.prototype.toString,this)}});var bI=(o=N(function(t){var r,e;return C(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,Promise.race([fetch(t),new Promise(function(t,r){setTimeout(function(){r(Error("Request took too long! Timeout after ".concat(10," second")))},1e4)})])];case 1:return[4,(r=n.sent()).json()];case 2:if(e=n.sent(),!r.ok)throw Error("".concat(e.message," (").concat(r.status,")"));return[2,e];case 3:throw n.sent();case 4:return[2]}})}),function(t){return o.apply(this,arguments)}),bj={recipe:{}},bM=(a=N(function(t){var r,e,n;return C(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,bI("".concat("https://forkify-api.herokuapp.com/api/v2/recipes","/").concat(t))];case 1:return console.log(r=i.sent()),e=r.data.recipe,bj.recipe={id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients},[3,3];case 2:return n=i.sent(),// Temp error handling
console.error("".concat(n,"!!!!!!!!!!!!!")),[3,3];case 3:return[2]}})}),function(t){return a.apply(this,arguments)});function bP(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function bk(t,r){if(!(t instanceof r))throw TypeError("Cannot call a class as a function")}function bL(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function bF(t,r,e){return r&&bL(t.prototype,r),e&&bL(t,e),t}function bN(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function bU(t,r){return(bU=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function bC(t){return(bC=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}// import icons from '../img/icons.svg'; - Parcel 1
var bD={};bD=L("iKXx1").getBundleURL("cXOp1")+L("hS6sa").resolve("j55cI");var bB=/*#__PURE__*/function(){function t(){bk(this,t),bN(this,"_data",void 0)}return bF(t,[{key:"render",value:function(t){var r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;var e=this._generateMarkup();if(!r)return e;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}},{key:"update",value:function(t){this._data=t;var r=this._generateMarkup(),e=Array.from(document.createRange().createContextualFragment(r).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));e.forEach(function(t,r){var e,i=n[r];t.isEqualNode(i)||(null===(e=t.firstChild)||void 0===e?void 0:e.nodeValue.trim())===""||(i.textContent=t.textContent),t.isEqualNode(i)||Array.from(t.attributes).forEach(function(t){return i.setAttribute(t.name,t.value)})})}},{key:"_clear",value:function(){this._parentElement.innerHTML=""}},{key:"renderSpinner",value:function(){var t='\n    <div class="spinner">\n      <svg>\n        <use href="'.concat(/*@__PURE__*/M(bD),'#icon-loader"></use>\n      </svg>\n    </div>\n  ');this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}},{key:"renderError",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._errorMessage,r='\n    <div class="error">\n     <div>\n       <svg>\n         <use href="'.concat(/*@__PURE__*/M(bD),'#icon-alert-triangle"></use>\n       </svg>\n     </div>\n     <p>').concat(t,"</p>\n   </div>");this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}},{key:"renderMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._message,r='\n    <div class="message">\n     <div>\n       <svg>\n         <use href="'.concat(/*@__PURE__*/M(bD),'#icon-smile"></use>\n       </svg>\n     </div>\n     <p>').concat(t,"</p>\n   </div>");this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}]),t}();(Fraction=function(t,r){/* double argument invocation */if(void 0!==t&&r)"number"==typeof t&&"number"==typeof r?(this.numerator=t,this.denominator=r):"string"==typeof t&&"string"==typeof r&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(t),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var e,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(e=i[0]),i[1]&&(n=i[1]),e%1==0&&n&&n.match("/"))return new Fraction(e).add(new Fraction(n));// could not parse
if(!e||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof e&&e.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=e.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof e&&e.match("."))return new Fraction(parseFloat(e));this.numerator=parseInt(e),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,e=this.denominator,n=[];return 0!=t&&n.push(t),0!=r&&n.push((0===t?r:Math.abs(r))+"/"+e),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var r=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=r.denominator,r.rescale(t.denominator),t.rescale(td),r.numerator+=t.numerator,r.normalize()},Fraction.prototype.subtract=function(t){var r=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=r.denominator,r.rescale(t.denominator),t.rescale(td),r.numerator-=t.numerator,r.normalize()},Fraction.prototype.multiply=function(t){var r=this.clone();if(t instanceof Fraction)r.numerator*=t.numerator,r.denominator*=t.denominator;else{if("number"!=typeof t)return r.multiply(new Fraction(t));r.numerator*=t}return r.normalize()},Fraction.prototype.divide=function(t){var r=this.clone();if(t instanceof Fraction)r.numerator*=t.denominator,r.denominator*=t.numerator;else{if("number"!=typeof t)return r.divide(new Fraction(t));r.denominator*=t}return r.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));// fractions that are equal should have equal normalized forms
var r=this.clone().normalize(),t=t.clone().normalize();return r.numerator===t.numerator&&r.denominator===t.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(u=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},s=function(t,r){if(!r)return Math.round(t);var e=Math.pow(10,r);return Math.round(t*e)/e},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(u(this.denominator)){var t=s(this.denominator,9),r=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),//this.numerator *= scaleup;
this.numerator*=r}if(u(this.numerator)){var t=s(this.numerator,9),r=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*r),//this.numerator *= scaleup;
this.denominator*=r}var e=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=e,this.denominator/=e,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,r){var e=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(r);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(t){var r=i.indexOf(t);r>=0&&(e.push(t),i.splice(r,1))}),0===e.length)?1:function(){var t,r=e[0];for(t=1;t<e.length;t++)r*=e[t];return r}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var r=Math.abs(t),e=[],n=2;n*n<=r;)r%n==0?(e.push(n),r/=n):n++;// and increment
return 1!=r&&e.push(r),e;// Return the prime factors
},I=Fraction;var bz=new/*#__PURE__*/(function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&bU(t,r)}(n,t);var r,e=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,i=bC(n);if(r){var o=bC(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return(t=e)&&("object"===U(t)||"function"==typeof t)?t:bP(this)});function n(){var t;return bk(this,n),t=e.apply(this,arguments),bN(bP(t),"_parentElement",document.querySelector(".recipe")),bN(bP(t),"_errorMessage","We could no tfind that recipe. Please try another one!"),bN(bP(t),"_message",""),t}return bF(n,[{// This method, which is publisher - needs to get access to the subscriber (controlRecipes) - this is in init fn in controller.js
key:"addHandlerRender",value:function(t){// Change the hash
window.addEventListener("hashchange",t),// Load the page
window.addEventListener("load",t);// To avoid duplicate code above, we use, but it is not working for me
// ['haschange', 'load'].forEach(ev => window.addEventListener(ev, handler));
}},{key:"addHandlerUpdateServings",value:function(t){// Event delegation
this._parentElement.addEventListener("click",function(r){var e=r.target.closest(".btn--update-servings");if(e){var n=+e.dataset.updateTo;n>0&&t(n)}})}},{key:"addHandlerAddBookmark",value:function(t){this._parentElement.addEventListener("click",function(r){r.target.closest(".btn--bookmark")&&t()})}},{key:"_generateMarkup",value:function(){return'\n    <figure class="recipe__fig">\n    <img src="'.concat(this._data.image,'" alt="').concat(this._data.title,'" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>').concat(this._data.title,'</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="').concat(/*@__PURE__*/M(bD),'#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">').concat(this._data.cookingTime,'</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="').concat(/*@__PURE__*/M(bD),'#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">').concat(this._data.servings,'</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--update-servings" data-update-to="').concat(this._data.servings-1,'">\n          <svg>\n            <use href="').concat(/*@__PURE__*/M(bD),'#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--update-servings" data-update-to="').concat(this._data.servings+1,'">\n          <svg>\n            <use href="').concat(/*@__PURE__*/M(bD),'#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated">\n    </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="').concat(/*@__PURE__*/M(bD),"#icon-bookmark").concat(!0===this._data.bookmarked?"-fill":"",'"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n\n    ').concat(this._data.ingredients.map(this._generateMarkupIngredient).join(""),'\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">').concat(this._data.publisher,'</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="').concat(this._data.sourceUrl,'"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="').concat(/*@__PURE__*/M(bD),'#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n    ')}},{key:"_generateMarkupIngredient",value:function(t){return' \n    <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="'.concat(/*@__PURE__*/M(bD),'#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">').concat(t.quantity?new I(t.quantity).toString():"",'</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">').concat(t.unit,"</span>\n      ").concat(t.description,"\n    </div>\n  </li>\n    ")}}]),n}(bB)),bq=function(t){var r,e=function(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]},n=function(t,r,e,n){var i=Object.create((r&&r.prototype instanceof o?r:o).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
m(i,"_invoke",{value:f(t,e,new v(n||[]))}),i)},i=// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}},o=// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function(){},a=function(){},u=function(){},s=// Iterator interface in terms of a single ._invoke method.
function(t){["next","throw","return"].forEach(function(r){e(t,r,function(t){return this._invoke(r,t)})})},c=function(t,r){var e;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
m(this,"_invoke",{value:function(n,o){function a(){return new r(function(e,a){!function e(n,o,a,u){var s=i(t[n],t,o);if("throw"===s.type)u(s.arg);else{var c=s.arg,f=c.value;return f&&"object"==typeof f&&y.call(f,"__await")?r.resolve(f.__await).then(function(t){e("next",t,a,u)},function(t){e("throw",t,a,u)}):r.resolve(f).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
c.value=t,a(c)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return e("throw",t,a,u)})}}(n,o,e,a)})}return e=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
e?e.then(a,// invocations of the iterator.
a):a()}})},f=function(t,e,n){var o=A;return function(a,u){if(o===x)throw Error("Generator is already running");if(o===T){if("throw"===a)throw u;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return d()}for(n.method=a,n.arg=u;;){var s=n.delegate;if(s){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(e,n){var o=n.method,a=e.iterator[o];if(a===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&e.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),_);var u=i(a,e.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,_;var s=u.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[e.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,_):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,_)}(s,n);if(c){if(c===_)continue;return c}}if("next"===n.method)// function.sent implementation.
n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===A)throw o=T,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=x;var f=i(t,e,n);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
o=n.done?T:O,f.arg===_)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=T,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
n.method="throw",n.arg=f.arg)}}},h=function(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)},l=function(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r},v=function(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)},p=function(t){if(t||""===t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw TypeError((void 0===t?"undefined":U(t))+" is not iterable")},d=function(){return{value:r,done:!0}},g=Object.prototype,y=g.hasOwnProperty,m=Object.defineProperty||function(t,r,e){t[r]=e.value},b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",S=b.asyncIterator||"@@asyncIterator",E=b.toStringTag||"@@toStringTag";try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
e({},"")}catch(t){e=function(t,r,e){return t[r]=e}}t.wrap=n;var A="suspendedStart",O="suspendedYield",x="executing",T="completed",_={},R={};e(R,w,function(){return this});var I=Object.getPrototypeOf,j=I&&I(I(p([])));j&&j!==g&&y.call(j,w)&&// of the polyfill.
(R=j);var M=u.prototype=o.prototype=Object.create(R);return a.prototype=u,m(M,"constructor",{value:u,configurable:!0}),m(u,"constructor",{value:a,configurable:!0}),a.displayName=e(u,E,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===a||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,e(t,E,"GeneratorFunction")),t.prototype=Object.create(M),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},s(c.prototype),e(c.prototype,S,function(){return this}),t.AsyncIterator=c,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,e,i,o,a){void 0===a&&(a=Promise);var u=new c(n(r,e,i,o),a);return t.isGeneratorFunction(e)?u// If outerFn is a generator, return the full iterator.
:u.next().then(function(t){return t.done?t.value:u.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
s(M),e(M,E,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
e(M,w,function(){return this}),e(M,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=p,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(l),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){var e=function(e,i){return a.type="throw",a.arg=t,n.next=e,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
n.method="next",n.arg=r),!!i};if(this.done)throw t;for(var n=this,i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return e("end");if(o.tryLoc<=this.prev){var u=y.call(o,"catchLoc"),s=y.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else if(s){if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var o=i?i.completion:{};return(o.type=t,o.arg=r,i)?(this.method="next",this.next=i.finallyLoc,_):this.complete(o)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),_},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),l(e),_}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;l(e)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),_}},t}({});try{regeneratorRuntime=bq}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=bq:Function("r","regeneratorRuntime = r")(bq)}document.querySelector(".recipe");// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// main function responsible for loading and rendering recipes
var bH=(c=N(function(){var t;return C(this,function(r){switch(r.label){case 0:// Throws an error if there is no id, using guard close to handle the error
if(r.trys.push([0,2,,3]),console.log(t=window.location.hash.slice(1)),!t)return[2];// 1) Loading Recipe
// loadRecipe is an async function and therefore, it is going to return a promise, therefore we have to await that promise before we can move on in the next step in the execution of this async fucntion
return bz.renderSpinner(),[4,bM(t)];case 1:return r.sent(),bz.render(bj.recipe),[3,3];case 2:return r.sent(),bz.renderError(),[3,3];case 3:return[2]}})}),function(){return c.apply(this,arguments)});bz.addHandlerRender(bH);//# sourceMappingURL=index.8ad85db9.js.map

//# sourceMappingURL=index.8ad85db9.js.map
