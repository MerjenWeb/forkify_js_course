!function(){var t,r,e,n,i,o,a,u,s,c,f,h,l,v,p,d,g,y,m,b,w,S,E,x,A,O,_,T,R,j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function M(t){return t&&t.__esModule?t.default:t}var P={},I={},k=j.parcelRequire3a11;// Importing modules
function L(t,r,e,n,i,o,a){try{var u=t[o](a),s=u.value}catch(t){e(t);return}u.done?r(s):Promise.resolve(s).then(n,i)}function F(t){return function(){var r=this,e=arguments;return new Promise(function(n,i){var o=t.apply(r,e);function a(t){L(o,n,i,a,u,"next",t)}function u(t){L(o,n,i,a,u,"throw",t)}a(void 0)})}}/******************************************************************************
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
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */function N(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function U(t,r){var e,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(e)throw TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(e=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(t,a)}catch(t){u=[6,t],n=0}finally{e=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}null==k&&((k=function(t){if(t in P)return P[t].exports;if(t in I){var r=I[t];delete I[t];var e={id:t,exports:{}};return P[t]=e,r.call(e.exports,e,e.exports),e.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,r){I[t]=r},j.parcelRequire3a11=k),k.register("1BDrg",function(t,r){Object.defineProperty(t.exports,"getBundleURL",{get:function(){return e},set:function(t){return e=t},enumerable:!0,configurable:!0});var e,n={};e=function(t){var r=n[t];return r||(r=function(){try{throw Error()}catch(r){var t=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[t]=r),r}}),"function"==typeof SuppressedError&&SuppressedError;var C={},z={},B=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
z=B("object"==typeof globalThis&&globalThis)||B("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
B("object"==typeof self&&self)||B("object"==typeof j&&j)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||z||Function("return this")();var D={},q={};// Detect IE8's incomplete defineProperty implementation
D=!(q=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var H={},G={};G=!q(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var W=Function.prototype.call;H=G?W.bind(W):function(){return W.apply(W,arguments)};var V={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;aB=$&&!V.call({1:2},1)?function(t){var r=$(this,t);return!!r&&r.enumerable}:V;var Y={};Y=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var K={},J={},X={},Q=Function.prototype,Z=Q.call,tt=G&&Q.bind.bind(Z,Z),tr={},te=(X=G?tt:function(t){return function(){return Z.apply(t,arguments)}})({}.toString),tn=X("".slice);tr=function(t){return tn(te(t),8,-1)};var ti=Object,to=X("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
J=q(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!ti("z").propertyIsEnumerable(0)})?function(t){return"String"===tr(t)?to(t,""):ti(t)}:ti;var ta={},tu={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
tu=function(t){return null==t};var ts=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
ta=function(t){if(tu(t))throw new ts("Can't call method on "+t);return t},K=function(t){return J(ta(t))};var tc={},tf={},th={},tl={},tv={},tp="object"==typeof document&&document.all,tg=(tv={all:tp,IS_HTMLDDA:void 0===tp&&void 0!==tp}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
tl=tv.IS_HTMLDDA?function(t){return"function"==typeof t||t===tg}:function(t){return"function"==typeof t};var ty=tv.all;th=tv.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:tl(t)||t===ty}:function(t){return"object"==typeof t?null!==t:tl(t)};var tm={},tb={};tb=function(t,r){var e;return arguments.length<2?(e=z[t],tl(e)?e:void 0):z[t]&&z[t][r]};var tw={};tw=X({}.isPrototypeOf);var tS={},tE={},tx={},tA={};tA="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tO=z.process,t_=z.Deno,tT=tO&&tO.versions||t_&&t_.version,tR=tT&&tT.v8;tR&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(aq=(aD=tR.split("."))[0]>0&&aD[0]<4?1:+(aD[0]+aD[1])),!aq&&tA&&(!(aD=tA.match(/Edge\/(\d+)/))||aD[1]>=74)&&(aD=tA.match(/Chrome\/(\d+)/))&&(aq=+aD[1]),tx=aq;var tj=z.String;tS=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tE=!!Object.getOwnPropertySymbols&&!q(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tj(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tx&&tx<41}))&&!Symbol.sham&&"symbol"==N(Symbol.iterator);var tM=Object;tm=tS?function(t){return(void 0===t?"undefined":N(t))=="symbol"}:function(t){var r=tb("Symbol");return tl(r)&&tw(r.prototype,tM(t))};var tP={},tI={},tk={},tL=String;tk=function(t){try{return tL(t)}catch(t){return"Object"}};var tF=TypeError;// `Assert: IsCallable(argument) is true`
tI=function(t){if(tl(t))return t;throw new tF(tk(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tP=function(t,r){var e=t[r];return tu(e)?void 0:tI(e)};var tN={},tU=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tN=function(t,r){var e,n;if("string"===r&&tl(e=t.toString)&&!th(n=H(e,t))||tl(e=t.valueOf)&&!th(n=H(e,t))||"string"!==r&&tl(e=t.toString)&&!th(n=H(e,t)))return n;throw new tU("Can't convert object to primitive value")};var tC={},tz={},tB={};tB=!1;var tD={},tq={},tH=Object.defineProperty;tq=function(t,r){try{tH(z,t,{value:r,configurable:!0,writable:!0})}catch(e){z[t]=r}return r};var tG="__core-js_shared__";tD=z[tG]||tq(tG,{}),(tz=function(t,r){return tD[t]||(tD[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.33.0",mode:tB?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var tW={},tV={},t$=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tV=function(t){return t$(ta(t))};var tY=X({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tW=Object.hasOwn||function(t,r){return tY(tV(t),r)};var tK={},tJ=0,tX=Math.random(),tQ=X(1..toString);tK=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tQ(++tJ+tX,36)};var tZ=z.Symbol,t0=tz("wks"),t1=tS?tZ.for||tZ:tZ&&tZ.withoutSetter||tK,t2=TypeError,t5=(tC=function(t){return tW(t0,t)||(t0[t]=tE&&tW(tZ,t)?tZ[t]:t1("Symbol."+t)),t0[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
tf=function(t,r){if(!th(t)||tm(t))return t;var e,n=tP(t,t5);if(n){if(void 0===r&&(r="default"),e=H(n,t,r),!th(e)||tm(e))return e;throw new t2("Can't convert object to primitive value")}return void 0===r&&(r="number"),tN(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
tc=function(t){var r=tf(t,"string");return tm(r)?r:r+""};var t6={},t4={},t3=z.document,t8=th(t3)&&th(t3.createElement);t4=function(t){return t8?t3.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
t6=!D&&!q(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(t4("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var t7=Object.getOwnPropertyDescriptor,t9=az=D?t7:function(t,r){if(t=K(t),r=tc(r),t6)try{return t7(t,r)}catch(t){}if(tW(t,r))return Y(!H(aB,t,r),t[r])},rt={},rr={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
rr=D&&q(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var re={},rn=String,ri=TypeError;// `Assert: Type(argument) is Object`
re=function(t){if(th(t))return t;throw new ri(rn(t)+" is not an object")};var ro=TypeError,ra=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,rs="enumerable",rc="configurable",rf="writable";aH=D?rr?function(t,r,e){if(re(t),r=tc(r),re(e),"function"==typeof t&&"prototype"===r&&"value"in e&&rf in e&&!e[rf]){var n=ru(t,r);n&&n[rf]&&(t[r]=e.value,e={configurable:rc in e?e[rc]:n[rc],enumerable:rs in e?e[rs]:n[rs],writable:!1})}return ra(t,r,e)}:ra:function(t,r,e){if(re(t),r=tc(r),re(e),t6)try{return ra(t,r,e)}catch(t){}if("get"in e||"set"in e)throw new ro("Accessors not supported");return"value"in e&&(t[r]=e.value),t},rt=D?function(t,r,e){return aH(t,r,Y(1,e))}:function(t,r,e){return t[r]=e,t};var rh={},rl={},rv={},rp=Function.prototype,rd=D&&Object.getOwnPropertyDescriptor,rg=tW(rp,"name"),ry=rg&&(!D||D&&rd(rp,"name").configurable),rm=(rv={EXISTS:rg,PROPER:rg&&"something"===(function(){}).name,CONFIGURABLE:ry}).CONFIGURABLE,rb={},rw=X(Function.toString);tl(tD.inspectSource)||(tD.inspectSource=function(t){return rw(t)}),rb=tD.inspectSource;var rS={},rE={},rx=z.WeakMap;rE=tl(rx)&&/native code/.test(String(rx));var rA={},rO=tz("keys");rA=function(t){return rO[t]||(rO[t]=tK(t))};var r_={};r_={};var rT="Object already initialized",rR=z.TypeError,rj=z.WeakMap;if(rE||tD.state){var rM=tD.state||(tD.state=new rj);/* eslint-disable no-self-assign -- prototype methods protection */rM.get=rM.get,rM.has=rM.has,rM.set=rM.set,/* eslint-enable no-self-assign -- prototype methods protection */aG=function(t,r){if(rM.has(t))throw new rR(rT);return r.facade=t,rM.set(t,r),r},aW=function(t){return rM.get(t)||{}},aV=function(t){return rM.has(t)}}else{var rP=rA("state");r_[rP]=!0,aG=function(t,r){if(tW(t,rP))throw new rR(rT);return r.facade=t,rt(t,rP,r),r},aW=function(t){return tW(t,rP)?t[rP]:{}},aV=function(t){return tW(t,rP)}}var rI=(rS={set:aG,get:aW,has:aV,enforce:function(t){return aV(t)?aW(t):aG(t,{})},getterFor:function(t){return function(r){var e;if(!th(r)||(e=aW(r)).type!==t)throw new rR("Incompatible receiver, "+t+" required");return e}}}).enforce,rk=rS.get,rL=String,rF=Object.defineProperty,rN=X("".slice),rU=X("".replace),rC=X([].join),rz=D&&!q(function(){return 8!==rF(function(){},"length",{value:8}).length}),rB=String(String).split("String"),rD=rl=function(t,r,e){"Symbol("===rN(rL(r),0,7)&&(r="["+rU(rL(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!tW(t,"name")||rm&&t.name!==r)&&(D?rF(t,"name",{value:r,configurable:!0}):t.name=r),rz&&e&&tW(e,"arity")&&t.length!==e.arity&&rF(t,"length",{value:e.arity});try{e&&tW(e,"constructor")&&e.constructor?D&&rF(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=rI(t);return tW(n,"source")||(n.source=rC(rB,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=rD(function(){return tl(this)&&rk(this).source||rb(this)},"toString"),rh=function(t,r,e,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:r;if(tl(e)&&rl(e,o,n),n.global)i?t[r]=e:tq(r,e);else{try{n.unsafe?t[r]&&(i=!0):delete t[r]}catch(t){}i?t[r]=e:aH(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var rq={},rH={},rG={},rW={},rV={},r$={},rY={},rK=Math.ceil,rJ=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
rY=Math.trunc||function(t){var r=+t;return(r>0?rJ:rK)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
r$=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:rY(r)};var rX=Math.max,rQ=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rV=function(t,r){var e=r$(t);return e<0?rX(e+r,0):rQ(e,r)};var rZ={},r0={},r1=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
r0=function(t){return t>0?r1(r$(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
rZ=function(t){return r0(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var r2=function(t){return function(r,e,n){var i,o=K(r),a=rZ(o),u=rV(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&e!=e){for(;a>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[u++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>u;u++)if((t||u in o)&&o[u]===e)return t||u||0;return!t&&-1}},r5=(rW={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:r2(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:r2(!1)}).indexOf,r6=X([].push);rG=function(t,r){var e,n=K(t),i=0,o=[];for(e in n)!tW(r_,e)&&tW(n,e)&&r6(o,e);// Don't enum bug & hidden keys
for(;r.length>i;)tW(n,e=r[i++])&&(~r5(o,e)||r6(o,e));return o};var r4={},r3=// IE8- don't enum bug keys
(r4=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");a$=Object.getOwnPropertyNames||function(t){return rG(t,r3)},aY=Object.getOwnPropertySymbols;var r8=X([].concat);// all object keys, includes non-enumerable and symbols
rH=tb("Reflect","ownKeys")||function(t){var r=a$(re(t)),e=aY;return e?r8(r,e(t)):r},rq=function(t,r,e){for(var n=rH(r),i=aH,o=az,a=0;a<n.length;a++){var u=n[a];tW(t,u)||e&&tW(e,u)||i(t,u,o(r,u))}};var r7={},r9=/#|\.prototype\./,et=function(t,r){var e=ee[er(t)];return e===ei||e!==en&&(tl(r)?q(r):!!r)},er=et.normalize=function(t){return String(t).replace(r9,".").toLowerCase()},ee=et.data={},en=et.NATIVE="N",ei=et.POLYFILL="P";r7=et,/*
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
*/C=function(t,r){var e,n,i,o,a,u=t.target,s=t.global,c=t.stat;if(e=s?z:c?z[u]||tq(u,{}):(z[u]||{}).prototype)for(n in r){// contained in target
if(o=r[n],i=t.dontCallGetSet?(a=t9(e,n))&&a.value:e[n],!r7(s?n:u+(c?".":"#")+n,t.forced)&&void 0!==i){if((void 0===o?"undefined":N(o))==(void 0===i?"undefined":N(i)))continue;rq(o,i)}(t.sham||i&&i.sham)&&rt(o,"sham",!0),rh(e,n,o,t)}};var eo={},ea={},eu={},es=tC("toStringTag"),ec={};ec[es]="z",eu="[object z]"===String(ec);var ef=tC("toStringTag"),eh=Object,el="Arguments"===tr(function(){return arguments}()),ev=function(t,r){try{return t[r]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
ea=eu?tr:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=ev(r=eh(t),ef))?e:el?tr(r):"Object"===(n=tr(r))&&tl(r.callee)?"Arguments":n};var ep=String;eo=function(t){if("Symbol"===ea(t))throw TypeError("Cannot convert a Symbol value to a string");return ep(t)};var ed={},eg={};// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
eg=Object.keys||function(t){return rG(t,r4)},aK=D&&!rr?Object.defineProperties:function(t,r){re(t);for(var e,n=K(r),i=eg(r),o=i.length,a=0;o>a;)aH(t,e=i[a++],n[e]);return t};var ey={};ey=tb("document","documentElement");var em="prototype",eb="script",ew=rA("IE_PROTO"),eS=function(){},eE=function(t){return"<"+eb+">"+t+"</"+eb+">"},ex=function(t){t.write(eE("")),t.close();var r=t.parentWindow.Object;return t=null,r},eA=function(){// Thrash, waste and sodomy: IE GC bug
var t,r=t4("iframe");return r.style.display="none",ey.appendChild(r),// https://github.com/zloirock/core-js/issues/475
r.src=String("java"+eb+":"),(t=r.contentWindow.document).open(),t.write(eE("document.F=Object")),t.close(),t.F},eO=function(){try{aJ=new ActiveXObject("htmlfile")}catch(t){}eO="undefined"!=typeof document?document.domain&&aJ?ex(aJ)// old IE
:eA():ex(aJ);// WSH
for(var t=r4.length;t--;)delete eO[em][r4[t]];return eO()};r_[ew]=!0,// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
ed=Object.create||function(t,r){var e;return null!==t?(eS[em]=re(t),e=new eS,eS[em]=null,// add "__proto__" for Object.getPrototypeOf polyfill
e[ew]=t):e=eO(),void 0===r?e:aK(e,r)};var e_=a$,eT={},eR={};eR=function(t,r,e){var n=tc(r);n in t?aH(t,n,Y(0,e)):t[n]=e};var ej=Array,eM=Math.max;eT=function(t,r,e){for(var n=rZ(t),i=rV(r,n),o=rV(void 0===e?n:e,n),a=ej(eM(o-i,0)),u=0;i<o;i++,u++)eR(a,u,t[i]);return a.length=u,a};var eP="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],eI=function(t){try{return e_(t)}catch(t){return eT(eP)}};aX=function(t){return eP&&"Window"===tr(t)?eI(t):e_(K(t))};var ek={};ek=function(t,r,e){return e.get&&rl(e.get,r,{getter:!0}),e.set&&rl(e.set,r,{setter:!0}),aH(t,r,e)},aQ=tC;var eL={},eF={};eF=z;var eN=aH;eL=function(t){var r=eF.Symbol||(eF.Symbol={});tW(r,t)||eN(r,t,{value:aQ(t)})};var eU={};eU=function(){var t=tb("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,n=tC("toPrimitive");r&&!r[n]&&// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
// eslint-disable-next-line no-unused-vars -- required for .length
rh(r,n,function(t){return H(e,this)},{arity:1})};var eC={},ez=aH,eB=tC("toStringTag");eC=function(t,r,e){t&&!e&&(t=t.prototype),t&&!tW(t,eB)&&ez(t,eB,{configurable:!0,value:r})};var eD={},eq={},eH={},eG=(eH=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===tr(t))return X(t)})(eH.bind);// optional / simple context binding
eq=function(t,r){return tI(t),void 0===r?t:G?eG(t,r):function(){return t.apply(r,arguments)}};var eW={},eV={},e$={};// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
e$=Array.isArray||function(t){return"Array"===tr(t)};var eY={},eK=function(){},eJ=[],eX=tb("Reflect","construct"),eQ=/^\s*(?:class|function)\b/,eZ=X(eQ.exec),e0=!eQ.test(eK),e1=function(t){if(!tl(t))return!1;try{return eX(eK,eJ,t),!0}catch(t){return!1}},e2=function(t){if(!tl(t))return!1;switch(ea(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{// we can't check .prototype since constructors produced by .bind haven't it
// `Function#toString` throws on some built-it function in some legacy engines
// (for example, `DOMQuad` and similar in FF41-)
return e0||!!eZ(eQ,rb(t))}catch(t){return!0}};e2.sham=!0,// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
eY=!eX||q(function(){var t;return e1(e1.call)||!e1(Object)||!e1(function(){t=!0})||t})?e2:e1;var e5=tC("species"),e6=Array;// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eV=function(t){var r;return e$(t)&&(r=t.constructor,eY(r)&&(r===e6||e$(r.prototype))?r=void 0:th(r)&&null===(r=r[e5])&&(r=void 0)),void 0===r?e6:r},// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eW=function(t,r){return new(eV(t))(0===r?0:r)};var e4=X([].push),e3=function(t){var r=1===t,e=2===t,n=3===t,i=4===t,o=6===t,a=7===t,u=5===t||o;return function(s,c,f,h){for(var l,v,p=tV(s),d=J(p),g=eq(c,f),y=rZ(d),m=0,b=h||eW,w=r?b(s,y):e||a?b(s,0):void 0;y>m;m++)if((u||m in d)&&(v=g(l=d[m],m,p),t)){if(r)w[m]=v;// map
else if(v)switch(t){case 3:return!0;// some
case 5:return l;// find
case 6:return m;// findIndex
case 2:e4(w,l);// filter
}else switch(t){case 4:return!1;// every
case 7:e4(w,l);// filterReject
}}return o?-1:n||i?i:w}},e8=(eD={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:e3(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:e3(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:e3(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:e3(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:e3(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:e3(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:e3(6),// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
filterReject:e3(7)}).forEach,e7=rA("hidden"),e9="Symbol",nt="prototype",nr=rS.set,ne=rS.getterFor(e9),nn=Object[nt],ni=z.Symbol,no=ni&&ni[nt],na=z.RangeError,nu=z.TypeError,ns=z.QObject,nc=az,nf=aH,nh=aX,nl=aB,nv=X([].push),np=tz("symbols"),nd=tz("op-symbols"),ng=tz("wks"),ny=!ns||!ns[nt]||!ns[nt].findChild,nm=function(t,r,e){var n=nc(nn,r);n&&delete nn[r],nf(t,r,e),n&&t!==nn&&nf(nn,r,n)},nb=D&&q(function(){return 7!==ed(nf({},"a",{get:function(){return nf(this,"a",{value:7}).a}})).a})?nm:nf,nw=function(t,r){var e=np[t]=ed(no);return nr(e,{type:e9,tag:t,description:r}),D||(e.description=r),e},nS=function(t,r,e){t===nn&&nS(nd,r,e),re(t);var n=tc(r);return(re(e),tW(np,n))?(e.enumerable?(tW(t,e7)&&t[e7][n]&&(t[e7][n]=!1),e=ed(e,{enumerable:Y(0,!1)})):(tW(t,e7)||nf(t,e7,Y(1,{})),t[e7][n]=!0),nb(t,n,e)):nf(t,n,e)},nE=function(t,r){re(t);var e=K(r);return e8(eg(e).concat(n_(e)),function(r){(!D||H(nx,e,r))&&nS(t,r,e[r])}),t},nx=function(t){var r=tc(t),e=H(nl,this,r);return(!(this===nn&&tW(np,r))||!!tW(nd,r))&&(!(e||!tW(this,r)||!tW(np,r)||tW(this,e7)&&this[e7][r])||e)},nA=function(t,r){var e=K(t),n=tc(r);if(!(e===nn&&tW(np,n))||tW(nd,n)){var i=nc(e,n);return i&&tW(np,n)&&!(tW(e,e7)&&e[e7][n])&&(i.enumerable=!0),i}},nO=function(t){var r=nh(K(t)),e=[];return e8(r,function(t){tW(np,t)||tW(r_,t)||nv(e,t)}),e},n_=function(t){var r=t===nn,e=nh(r?nd:K(t)),n=[];return e8(e,function(t){tW(np,t)&&(!r||tW(nn,t))&&nv(n,np[t])}),n};tE||(no=(ni=function(){if(tw(no,this))throw new nu("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?eo(arguments[0]):void 0,r=tK(t),e=function(t){this===nn&&H(e,nd,t),tW(this,e7)&&tW(this[e7],r)&&(this[e7][r]=!1);var n=Y(1,t);try{nb(this,r,n)}catch(t){if(!(t instanceof na))throw t;nm(this,r,n)}};return D&&ny&&nb(nn,r,{configurable:!0,set:e}),nw(r,t)})[nt],rh(no,"toString",function(){return ne(this).tag}),rh(ni,"withoutSetter",function(t){return nw(tK(t),t)}),aB=nx,aH=nS,aK=nE,az=nA,a$=aX=nO,aY=n_,aQ=function(t){return nw(tC(t),t)},D&&(// https://github.com/tc39/proposal-Symbol-description
ek(no,"description",{configurable:!0,get:function(){return ne(this).description}}),tB||rh(nn,"propertyIsEnumerable",nx,{unsafe:!0}))),C({global:!0,constructor:!0,wrap:!0,forced:!tE,sham:!tE},{Symbol:ni}),e8(eg(ng),function(t){eL(t)}),C({target:e9,stat:!0,forced:!tE},{useSetter:function(){ny=!0},useSimple:function(){ny=!1}}),C({target:"Object",stat:!0,forced:!tE,sham:!D},{// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
create:function(t,r){return void 0===r?ed(t):nE(ed(t),r)},// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
defineProperty:nS,// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
defineProperties:nE,// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:nA}),C({target:"Object",stat:!0,forced:!tE},{// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:nO}),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eU(),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eC(ni,e9),r_[e7]=!0;var nT={};/* eslint-disable es/no-symbol -- safe */nT=tE&&!!Symbol.for&&!!Symbol.keyFor;var nR=tz("string-to-symbol-registry"),nj=tz("symbol-to-string-registry");// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
C({target:"Symbol",stat:!0,forced:!nT},{for:function(t){var r=eo(t);if(tW(nR,r))return nR[r];var e=tb("Symbol")(r);return nR[r]=e,nj[e]=r,e}});var nM=tz("symbol-to-string-registry");// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
C({target:"Symbol",stat:!0,forced:!nT},{keyFor:function(t){if(!tm(t))throw TypeError(tk(t)+" is not a symbol");if(tW(nM,t))return nM[t]}});var nP={},nI=Function.prototype,nk=nI.apply,nL=nI.call;// eslint-disable-next-line es/no-reflect -- safe
nP="object"==typeof Reflect&&Reflect.apply||(G?nL.bind(nk):function(){return nL.apply(nk,arguments)});var nF={};nF=X([].slice);var nN={},nU=X([].push);nN=function(t){if(tl(t))return t;if(e$(t)){for(var r=t.length,e=[],n=0;n<r;n++){var i=t[n];"string"==typeof i?nU(e,i):("number"==typeof i||"Number"===tr(i)||"String"===tr(i))&&nU(e,eo(i))}var o=e.length,a=!0;return function(t,r){if(a)return a=!1,r;if(e$(this))return r;for(var n=0;n<o;n++)if(e[n]===t)return r}}};var nC=String,nz=tb("JSON","stringify"),nB=X(/./.exec),nD=X("".charAt),nq=X("".charCodeAt),nH=X("".replace),nG=X(1..toString),nW=/[\uD800-\uDFFF]/g,nV=/^[\uD800-\uDBFF]$/,n$=/^[\uDC00-\uDFFF]$/,nY=!tE||q(function(){var t=tb("Symbol")("stringify detection");// MS Edge converts symbol values to JSON as {}
return"[null]"!==nz([t])||"{}"!==nz({a:t})||"{}"!==nz(Object(t))}),nK=q(function(){return'"\udf06\ud834"'!==nz("\uDF06\uD834")||'"\udead"'!==nz("\uDEAD")}),nJ=function(t,r){var e=nF(arguments),n=nN(r);if(!(!tl(n)&&(void 0===t||tm(t))))return e[1]=function(t,r){if(tl(n)&&(r=H(n,this,nC(t),r)),!tm(r))return r},nP(nz,null,e);// IE8 returns string on undefined
},nX=function(t,r,e){var n=nD(e,r-1),i=nD(e,r+1);return nB(nV,t)&&!nB(n$,i)||nB(n$,t)&&!nB(nV,n)?"\\u"+nG(nq(t,0),16):t};nz&&// https://tc39.es/ecma262/#sec-json.stringify
C({target:"JSON",stat:!0,arity:3,forced:nY||nK},{// eslint-disable-next-line no-unused-vars -- required for `.length`
stringify:function(t,r,e){var n=nF(arguments),i=nP(nY?nJ:nz,null,n);return nK&&"string"==typeof i?nH(i,nW,nX):i}});// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var nQ=!tE||q(function(){aY(1)});// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
C({target:"Object",stat:!0,forced:nQ},{getOwnPropertySymbols:function(t){var r=aY;return r?r(tV(t)):[]}});var nZ=z.Symbol,n0=nZ&&nZ.prototype;if(D&&tl(nZ)&&(!("description"in n0)||// Safari 12 bug
void 0!==nZ().description)){var n1={},n2=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:eo(arguments[0]),r=tw(n0,this)?new nZ(t):void 0===t?nZ():nZ(t);return""===t&&(n1[r]=!0),r};rq(n2,nZ),n2.prototype=n0,n0.constructor=n2;var n5="Symbol(description detection)"===String(nZ("description detection")),n6=X(n0.valueOf),n4=X(n0.toString),n3=/^Symbol\((.*)\)[^)]+$/,n8=X("".replace),n7=X("".slice);ek(n0,"description",{configurable:!0,get:function(){var t=n6(this);if(tW(n1,t))return"";var r=n4(t),e=n5?n7(r,7,-1):n8(r,n3,"$1");return""===e?void 0:e}}),C({global:!0,constructor:!0,forced:!0},{Symbol:n2})}// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
eL("asyncIterator"),// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
eL("hasInstance"),// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
eL("isConcatSpreadable"),// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
eL("iterator"),// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
eL("match"),// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
eL("replace"),// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
eL("search"),// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
eL("species"),// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
eL("split"),// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
eL("toPrimitive"),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eU(),// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
eL("toStringTag"),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eC(tb("Symbol"),"Symbol"),// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
eL("unscopables");var n9={},it=TypeError;n9=function(t){if(t>9007199254740991)throw it("Maximum allowed index exceeded");return t};var ir={},ie=tC("species");ir=function(t){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return tx>=51||!q(function(){var r=[];return(r.constructor={})[ie]=function(){return{foo:1}},1!==r[t](Boolean).foo})};var ii=tC("isConcatSpreadable"),io=tx>=51||!q(function(){var t=[];return t[ii]=!1,t.concat()[0]!==t}),ia=function(t){if(!th(t))return!1;var r=t[ii];return void 0!==r?!!r:e$(t)},iu=!io||!ir("concat");// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
C({target:"Array",proto:!0,arity:1,forced:iu},{// eslint-disable-next-line no-unused-vars -- required for `.length`
concat:function(t){var r,e,n,i,o,a=tV(this),u=eW(a,0),s=0;for(r=-1,n=arguments.length;r<n;r++)if(o=-1===r?a:arguments[r],ia(o))for(i=rZ(o),n9(s+i),e=0;e<i;e++,s++)e in o&&eR(u,s,o[e]);else n9(s+1),eR(u,s++,o);return u.length=s,u}});var is={},ic={},ih=TypeError;ic=function(t,r){if(!delete t[r])throw new ih("Cannot delete property "+tk(r)+" of "+tk(t))};var il=Math.min;// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
is=[].copyWithin||function(t/* = 0 */,r/* = 0, end = @length */){var e=tV(this),n=rZ(e),i=rV(t,n),o=rV(r,n),a=arguments.length>2?arguments[2]:void 0,u=il((void 0===a?n:rV(a,n))-o,n-i),s=1;for(o<i&&i<o+u&&(s=-1,o+=u-1,i+=u-1);u-- >0;)o in e?e[i]=e[o]:ic(e,i),i+=s,o+=s;return e};var iv={},ip=aH,id=tC("unscopables"),ig=Array.prototype;void 0===ig[id]&&ip(ig,id,{configurable:!0,value:ed(null)}),// add a key to Array.prototype[@@unscopables]
iv=function(t){ig[id][t]=!0},// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
C({target:"Array",proto:!0},{copyWithin:is}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv("copyWithin");var iy={};// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
C({target:"Array",proto:!0},{fill:// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
iy=function(t/* , start = 0, end = @length */){for(var r=tV(this),e=rZ(r),n=arguments.length,i=rV(n>1?arguments[1]:void 0,e),o=n>2?arguments[2]:void 0,a=void 0===o?e:rV(o,e);a>i;)r[i++]=t;return r}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv("fill");var im=eD.filter,ib=ir("filter");// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
C({target:"Array",proto:!0,forced:!ib},{filter:function(t/* , thisArg */){return im(this,t,arguments.length>1?arguments[1]:void 0)}});var iw=eD.find,iS="find",iE=!0;iS in[]&&[,][iS](function(){iE=!1}),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
C({target:"Array",proto:!0,forced:iE},{find:function(t/* , that = undefined */){return iw(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv(iS);var ix=eD.findIndex,iA="findIndex",iO=!0;iA in[]&&[,][iA](function(){iO=!1}),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
C({target:"Array",proto:!0,forced:iO},{findIndex:function(t/* , that = undefined */){return ix(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv(iA);var i_={},iT=function(t,r,e,n,i,o,a,u){for(var s,c,f=i,h=0,l=!!a&&eq(a,u);h<n;)h in e&&(s=l?l(e[h],h,r):e[h],o>0&&e$(s)?(c=rZ(s),f=iT(t,r,s,c,f,o-1)-1):(n9(f+1),t[f]=s),f++),h++;return f};i_=iT,// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
C({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=tV(this),e=rZ(r),n=eW(r,0);return n.length=i_(n,r,r,e,0,void 0===t?1:r$(t)),n}}),// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
C({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */){var r,e=tV(this),n=rZ(e);return tI(t),(r=eW(e,0)).length=i_(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}});var iR={},ij={},iM={};iM=function(t,r,e){var n,i;re(t);try{if(!(n=tP(t,"return"))){if("throw"===r)throw e;return e}n=H(n,t)}catch(t){i=!0,n=t}if("throw"===r)throw e;if(i)throw n;return re(n),e},// call something on iterator step with safe closing on error
ij=function(t,r,e,n){try{return n?r(re(e)[0],e[1]):r(e)}catch(r){iM(t,"throw",r)}};var iP={},iI={};iI={};var ik=tC("iterator"),iL=Array.prototype;// check on default Array iterator
iP=function(t){return void 0!==t&&(iI.Array===t||iL[ik]===t)};var iF={},iN={},iU=tC("iterator");iN=function(t){if(!tu(t))return tP(t,iU)||tP(t,"@@iterator")||iI[ea(t)]};var iC=TypeError;iF=function(t,r){var e=arguments.length<2?iN(t):r;if(tI(e))return re(H(e,t));throw new iC(tk(t)+" is not iterable")};var iz=Array;// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
iR=function(t/* , mapfn = undefined, thisArg = undefined */){var r,e,n,i,o,a,u=tV(t),s=eY(this),c=arguments.length,f=c>1?arguments[1]:void 0,h=void 0!==f;h&&(f=eq(f,c>2?arguments[2]:void 0));var l=iN(u),v=0;// if the target is not iterable or it's an array with the default iterator - use a simple case
if(l&&!(this===iz&&iP(l)))for(o=(i=iF(u,l)).next,e=s?new this:[];!(n=H(o,i)).done;v++)a=h?ij(i,f,[n.value,v],!0):n.value,eR(e,v,a);else for(r=rZ(u),e=s?new this(r):iz(r);r>v;v++)a=h?f(u[v],v):u[v],eR(e,v,a);return e.length=v,e};var iB={},iD=tC("iterator"),iq=!1;try{var iH=0,iG={next:function(){return{done:!!iH++}},return:function(){iq=!0}};iG[iD]=function(){return this},// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(iG,function(){throw 2})}catch(t){}var iW=!(iB=function(t,r){try{if(!r&&!iq)return!1}catch(t){return!1}// workaround of old WebKit + `eval` bug
var e=!1;try{var n={};n[iD]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e})(function(t){// eslint-disable-next-line es/no-array-from -- required for testing
Array.from(t)});// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
C({target:"Array",stat:!0,forced:iW},{from:iR});var iV=rW.includes,i$=q(function(){// eslint-disable-next-line es/no-array-prototype-includes -- detection
return![,].includes()});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
C({target:"Array",proto:!0,forced:i$},{includes:function(t/* , fromIndex = 0 */){return iV(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv("includes");var iY={},iK=aH,iJ={},iX={},iQ={},iZ={},i0={};i0=!q(function(){function t(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var i1=rA("IE_PROTO"),i2=Object,i5=i2.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
iZ=i0?i2.getPrototypeOf:function(t){var r=tV(t);if(tW(r,i1))return r[i1];var e=r.constructor;return tl(e)&&r instanceof e?e.prototype:r instanceof i2?i5:null};var i6=tC("iterator"),i4=!1;[].keys&&("next"in(a1=[].keys())?(a0=iZ(iZ(a1)))!==Object.prototype&&(aZ=a0):i4=!0),!th(aZ)||q(function(){var t={};// FF44- legacy iterators case
return aZ[i6].call(t)!==t})?aZ={}:tB&&(aZ=ed(aZ)),tl(aZ[i6])||rh(aZ,i6,function(){return this});var i3=(iQ={IteratorPrototype:aZ,BUGGY_SAFARI_ITERATORS:i4}).IteratorPrototype,i8=function(){return this};iX=function(t,r,e,n){var i=r+" Iterator";return t.prototype=ed(i3,{next:Y(+!n,e)}),eC(t,i,!1,!0),iI[i]=i8,t};var i7={},i9={};i9=function(t,r,e){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return X(tI(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}};var ot={},or=String,oe=TypeError;ot=function(t){if("object"==typeof t||tl(t))return t;throw new oe("Can't set "+or(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
i7=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=i9(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return re(e),ot(n),r?t(e,n):e.__proto__=n,e}}():void 0);var on=rv.PROPER,oi=rv.CONFIGURABLE,oo=iQ.IteratorPrototype,oa=iQ.BUGGY_SAFARI_ITERATORS,ou=tC("iterator"),os="keys",oc="values",of="entries",oh=function(){return this};iJ=function(t,r,e,n,i,o,a){iX(e,r,n);var u,s,c,f=function(t){if(t===i&&d)return d;if(!oa&&t&&t in v)return v[t];switch(t){case os:case oc:case of:return function(){return new e(this,t)}}return function(){return new e(this)}},h=r+" Iterator",l=!1,v=t.prototype,p=v[ou]||v["@@iterator"]||i&&v[i],d=!oa&&p||f(i),g="Array"===r&&v.entries||p;// export additional methods
if(g&&(u=iZ(g.call(new t)))!==Object.prototype&&u.next&&(tB||iZ(u)===oo||(i7?i7(u,oo):tl(u[ou])||rh(u,ou,oh)),// Set @@toStringTag to native iterators
eC(u,h,!0,!0),tB&&(iI[h]=oh)),on&&i===oc&&p&&p.name!==oc&&(!tB&&oi?rt(v,"name",oc):(l=!0,d=function(){return H(p,this)})),i){if(s={values:f(oc),keys:o?d:f(os),entries:f(of)},a)for(c in s)!oa&&!l&&c in v||rh(v,c,s[c]);else C({target:r,proto:!0,forced:oa||l},s)}return(!tB||a)&&v[ou]!==d&&rh(v,ou,d,{name:i}),iI[r]=d,s};var ol={};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
ol=function(t,r){return{value:t,done:r}};var ov="Array Iterator",op=rS.set,od=rS.getterFor(ov);// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
iY=iJ(Array,"Array",function(t,r){op(this,{type:ov,target:K(t),index:0,kind:r// kind
});// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=od(this),r=t.target,e=t.kind,n=t.index++;if(!r||n>=r.length)return t.target=void 0,ol(void 0,!0);switch(e){case"keys":return ol(n,!1);case"values":return ol(r[n],!1)}return ol([n,r[n]],!1)},"values");// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var og=iI.Arguments=iI.Array;// V8 ~ Chrome 45- bug
if(// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv("keys"),iv("values"),iv("entries"),!tB&&D&&"values"!==og.name)try{iK(og,"name",{value:"values"})}catch(t){}var oy={};oy=function(t,r){var e=[][t];return!!e&&q(function(){// eslint-disable-next-line no-useless-call -- required for testing
e.call(null,r||function(){return 1},1)})};var om=X([].join),ob=J!==Object||!oy("join",",");// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
C({target:"Array",proto:!0,forced:ob},{join:function(t){return om(K(this),void 0===t?",":t)}});var ow=eD.map,oS=ir("map");// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
C({target:"Array",proto:!0,forced:!oS},{map:function(t/* , thisArg */){return ow(this,t,arguments.length>1?arguments[1]:void 0)}});var oE=Array,ox=q(function(){function t(){}// eslint-disable-next-line es/no-array-of -- safe
return!(oE.of.call(t) instanceof t)});// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
C({target:"Array",stat:!0,forced:ox},{of:function(){for(var t=0,r=arguments.length,e=new(eY(this)?this:oE)(r);r>t;)eR(e,t,arguments[t++]);return e.length=r,e}});var oA=ir("slice"),oO=tC("species"),o_=Array,oT=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
C({target:"Array",proto:!0,forced:!oA},{slice:function(t,r){var e,n,i,o=K(this),a=rZ(o),u=rV(t,a),s=rV(void 0===r?a:r,a);if(e$(o)&&(e=o.constructor,eY(e)&&(e===o_||e$(e.prototype))?e=void 0:th(e)&&null===(e=e[oO])&&(e=void 0),e===o_||void 0===e))return nF(o,u,s);for(i=0,n=new(void 0===e?o_:e)(oT(s-u,0));u<s;u++,i++)u in o&&eR(n,i,o[u]);return n.length=i,n}});var oR={},oj=Math.floor,oM=function(t,r){var e=t.length,n=oj(e/2);return e<8?oP(t,r):oI(t,oM(eT(t,0,n),r),oM(eT(t,n),r),r)},oP=function(t,r){for(var e,n,i=t.length,o=1;o<i;){for(n=o,e=t[o];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==o++&&(t[n]=e)}return t},oI=function(t,r,e,n){for(var i=r.length,o=e.length,a=0,u=0;a<i||u<o;)t[a+u]=a<i&&u<o?0>=n(r[a],e[u])?r[a++]:e[u++]:a<i?r[a++]:e[u++];return t};oR=oM;var ok={},oL=tA.match(/firefox\/(\d+)/i);ok=!!oL&&+oL[1];var oF={};oF=/MSIE|Trident/.test(tA);var oN={},oU=tA.match(/AppleWebKit\/(\d+)\./);oN=!!oU&&+oU[1];var oC=[],oz=X(oC.sort),oB=X(oC.push),oD=q(function(){oC.sort(void 0)}),oq=q(function(){oC.sort(null)}),oH=oy("sort"),oG=!q(function(){// feature detection can be too slow, so check engines versions
if(tx)return tx<70;if(!ok||!(ok>3)){if(oF)return!0;if(oN)return oN<603;var t,r,e,n,i="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)oC.push({k:r+n,v:e})}for(oC.sort(function(t,r){return r.v-t.v}),n=0;n<oC.length;n++)r=oC[n].k.charAt(0),i.charAt(i.length-1)!==r&&(i+=r);return"DGBEFHACIJK"!==i}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
C({target:"Array",proto:!0,forced:oD||!oq||!oH||!oG},{sort:function(t){void 0!==t&&tI(t);var r,e,n=tV(this);if(oG)return void 0===t?oz(n):oz(n,t);var i=[],o=rZ(n);for(e=0;e<o;e++)e in n&&oB(i,n[e]);for(oR(i,function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:eo(r)>eo(e)?1:-1}),r=rZ(i),e=0;e<r;)n[e]=i[e++];for(;e<o;)ic(n,e++);return n}});var oW={},oV=tC("species");// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
(oW=function(t){var r=tb(t);D&&r&&!r[oV]&&ek(r,oV,{configurable:!0,get:function(){return this}})})("Array");var o$={},oY=TypeError,oK=Object.getOwnPropertyDescriptor;o$=D&&!function(){// makes no sense without proper strict mode support
if(void 0!==this)return!0;try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,r){if(e$(t)&&!oK(t,"length").writable)throw new oY("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r};var oJ=ir("splice"),oX=Math.max,oQ=Math.min;// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
C({target:"Array",proto:!0,forced:!oJ},{splice:function(t,r/* , ...items */){var e,n,i,o,a,u,s=tV(this),c=rZ(s),f=rV(t,c),h=arguments.length;for(0===h?e=n=0:1===h?(e=0,n=c-f):(e=h-2,n=oQ(oX(r$(r),0),c-f)),n9(c+e-n),i=eW(s,n),o=0;o<n;o++)(a=f+o)in s&&eR(i,o,s[a]);if(i.length=n,e<n){for(o=f;o<c-n;o++)a=o+n,u=o+e,a in s?s[u]=s[a]:ic(s,u);for(o=c;o>c-n+e;o--)ic(s,o-1)}else if(e>n)for(o=c-n;o>f;o--)a=o+n-1,u=o+e-1,a in s?s[u]=s[a]:ic(s,u);for(o=0;o<e;o++)s[o+f]=arguments[o+2];return o$(s,c-n+e),i}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv("flat"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
iv("flatMap");var oZ={},o0={};// eslint-disable-next-line es/no-typed-arrays -- safe
o0="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var o1={};o1=function(t,r,e){for(var n in r)rh(t,n,r[n],e);return t};var o2={},o5=TypeError;o2=function(t,r){if(tw(r,t))return t;throw new o5("Incorrect invocation")};var o6={},o4=RangeError;// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
o6=function(t){if(void 0===t)return 0;var r=r$(t),e=r0(r);if(r!==e)throw new o4("Wrong length or index");return e};var o3={},o8={},o7={};// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
o7=Math.sign||function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return 0===r||r!=r?r:r<0?-1:1};var o9=Math.abs;o8=function(t,r,e,n){var i=+t,o=o9(i),a=o7(i);if(o<n)return a*(o/n/r+4503599627370496-4503599627370496)*n*r;var u=(1+r/2220446049250313e-31)*o,s=u-(u-o);return(// eslint-disable-next-line no-self-compare -- NaN check
s>e||s!=s?a*(1/0):a*s)},// `Math.fround` method implementation
// https://tc39.es/ecma262/#sec-math.fround
// eslint-disable-next-line es/no-math-fround -- safe
o3=Math.fround||function(t){return o8(t,11920928955078125e-23,34028234663852886e22,11754943508222875e-54)};var at={},ar=Array,ae=Math.abs,an=Math.pow,ai=Math.floor,ao=Math.log,aa=Math.LN2;at={pack:function(t,r,e){var n,i,o,a=ar(e),u=8*e-r-1,s=(1<<u)-1,c=s>>1,f=23===r?an(2,-24)-an(2,-77):0,h=t<0||0===t&&1/t<0?1:0,l=0;for((t=ae(t))!=t||t===1/0?(// eslint-disable-next-line no-self-compare -- NaN check
i=t!=t?1:0,n=s):(o=an(2,-(n=ai(ao(t)/aa))),t*o<1&&(n--,o*=2),n+c>=1?t+=f/o:t+=f*an(2,1-c),t*o>=2&&(n++,o/=2),n+c>=s?(i=0,n=s):n+c>=1?(i=(t*o-1)*an(2,r),n+=c):(i=t*an(2,c-1)*an(2,r),n=0));r>=8;)a[l++]=255&i,i/=256,r-=8;for(n=n<<r|i,u+=r;u>0;)a[l++]=255&n,n/=256,u-=8;return a[--l]|=128*h,a},unpack:function(t,r){var e,n=t.length,i=8*n-r-1,o=(1<<i)-1,a=o>>1,u=i-7,s=n-1,c=t[s--],f=127&c;for(c>>=7;u>0;)f=256*f+t[s--],u-=8;for(e=f&(1<<-u)-1,f>>=-u,u+=r;u>0;)e=256*e+t[s--],u-=8;if(0===f)f=1-a;else{if(f===o)return e?NaN:c?-1/0:1/0;e+=an(2,r),f-=a}return(c?-1:1)*e*an(2,f-r)}};var au=a$,as=rv.PROPER,ac=rv.CONFIGURABLE,af="ArrayBuffer",ah="DataView",al="prototype",av="Wrong index",ap=rS.getterFor(af),ad=rS.getterFor(ah),ag=rS.set,ay=z[af],am=ay,ab=am&&am[al],aw=z[ah],aS=aw&&aw[al],aE=Object.prototype,ax=z.Array,aA=z.RangeError,aO=X(iy),a_=X([].reverse),aT=at.pack,aR=at.unpack,aj=function(t){return[255&t]},aM=function(t){return[255&t,t>>8&255]},aP=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},aI=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},ak=function(t){return aT(o3(t),23,4)},aL=function(t){return aT(t,52,8)},aF=function(t,r,e){ek(t[al],r,{configurable:!0,get:function(){return e(this)[r]}})},aN=function(t,r,e,n){var i=ad(t),o=o6(e);if(o+r>i.byteLength)throw new aA(av);var a=i.bytes,u=o+i.byteOffset,s=eT(a,u,u+r);return n?s:a_(s)},aU=function(t,r,e,n,i,o){var a=ad(t),u=o6(e),s=n(+i),c=!!o;if(u+r>a.byteLength)throw new aA(av);for(var f=a.bytes,h=u+a.byteOffset,l=0;l<r;l++)f[h+l]=s[c?l:r-l-1]};if(o0){var aC=as&&ay.name!==af;/* eslint-disable no-new -- required for testing */if(!q(function(){ay(1)})||!q(function(){new ay(-1)})||q(function(){return new ay,new ay(1.5),new ay(NaN),1!==ay.length||aC&&!ac})){/* eslint-enable no-new -- required for testing */(am=function(t){return o2(this,ab),new ay(o6(t))})[al]=ab;for(var az,aB,aD,aq,aH,aG,aW,aV,a$,aY,aK,aJ,aX,aQ,aZ,a0,a1,a2,a5=au(ay),a6=0;a5.length>a6;)(a2=a5[a6++])in am||rt(am,a2,ay[a2]);ab.constructor=am}else aC&&ac&&rt(ay,"name",af);i7&&iZ(aS)!==aE&&i7(aS,aE);// iOS Safari 7.x bug
var a4=new aw(new am(2)),a3=X(aS.setInt8);a4.setInt8(0,2147483648),a4.setInt8(1,2147483649),(a4.getInt8(0)||!a4.getInt8(1))&&o1(aS,{setInt8:function(t,r){a3(this,t,r<<24>>24)},setUint8:function(t,r){a3(this,t,r<<24>>24)}},{unsafe:!0})}else ab=(am=function(t){o2(this,ab);var r=o6(t);ag(this,{type:af,bytes:aO(ax(r),0),byteLength:r}),D||(this.byteLength=r,this.detached=!1)})[al],aS=(aw=function(t,r,e){o2(this,aS),o2(t,ab);var n=ap(t),i=n.byteLength,o=r$(r);if(o<0||o>i)throw new aA("Wrong offset");if(e=void 0===e?i-o:r0(e),o+e>i)throw new aA("Wrong length");ag(this,{type:ah,buffer:t,byteLength:e,byteOffset:o,bytes:n.bytes}),D||(this.buffer=t,this.byteLength=e,this.byteOffset=o)})[al],D&&(aF(am,"byteLength",ap),aF(aw,"buffer",ad),aF(aw,"byteLength",ad),aF(aw,"byteOffset",ad)),o1(aS,{getInt8:function(t){return aN(this,1,t)[0]<<24>>24},getUint8:function(t){return aN(this,1,t)[0]},getInt16:function(t/* , littleEndian */){var r=aN(this,2,t,arguments.length>1&&arguments[1]);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t/* , littleEndian */){var r=aN(this,2,t,arguments.length>1&&arguments[1]);return r[1]<<8|r[0]},getInt32:function(t/* , littleEndian */){return aI(aN(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t/* , littleEndian */){return aI(aN(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t/* , littleEndian */){return aR(aN(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t/* , littleEndian */){return aR(aN(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,r){aU(this,1,t,aj,r)},setUint8:function(t,r){aU(this,1,t,aj,r)},setInt16:function(t,r/* , littleEndian */){aU(this,2,t,aM,r,arguments.length>2&&arguments[2])},setUint16:function(t,r/* , littleEndian */){aU(this,2,t,aM,r,arguments.length>2&&arguments[2])},setInt32:function(t,r/* , littleEndian */){aU(this,4,t,aP,r,arguments.length>2&&arguments[2])},setUint32:function(t,r/* , littleEndian */){aU(this,4,t,aP,r,arguments.length>2&&arguments[2])},setFloat32:function(t,r/* , littleEndian */){aU(this,4,t,ak,r,arguments.length>2&&arguments[2])},setFloat64:function(t,r/* , littleEndian */){aU(this,8,t,aL,r,arguments.length>2&&arguments[2])}});eC(am,af),eC(aw,ah);var a8="ArrayBuffer",a7=(oZ={ArrayBuffer:am,DataView:aw})[a8],a9=z[a8];// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
C({global:!0,constructor:!0,forced:a9!==a7},{ArrayBuffer:a7}),oW(a8);var ut={},ur=TypeError;// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
ut=function(t){if(re(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw new ur("Incorrect hint");return tN(this,t)};var ue=tC("toPrimitive"),un=Date.prototype;tW(un,ue)||rh(un,ue,ut);var ui=tC("hasInstance"),uo=Function.prototype;ui in uo||aH(uo,ui,{value:rl(function(t){if(!tl(this)||!th(t))return!1;var r=this.prototype;if(!th(r))return t instanceof this;// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=iZ(t);)if(r===t)return!0;return!1},ui)});var ua=rv.EXISTS,uu=Function.prototype,us=X(uu.toString),uc=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,uf=X(uc.exec);D&&!ua&&ek(uu,"name",{configurable:!0,get:function(){try{return uf(uc,us(this))[1]}catch(t){return""}}}),// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
eC(z.JSON,"JSON",!0);var uh={},ul={},uv=aH,up={},ud={};ud=q(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}});// eslint-disable-next-line es/no-object-isextensible -- safe
var ug=Object.isExtensible;// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
up=q(function(){ug(1)})||ud?function(t){return!!th(t)&&(!ud||"ArrayBuffer"!==tr(t))&&(!ug||ug(t))}:ug;var uy={};uy=!q(function(){// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
return Object.isExtensible(Object.preventExtensions({}))});var um=!1,ub=tK("meta"),uw=0,uS=function(t){uv(t,ub,{value:{objectID:"O"+uw++,weakData:{}// weak collections IDs
}})},uE=ul={enable:function(){uE.enable=function(){},um=!0;var t=a$,r=X([].splice),e={};e[ub]=1,t(e).length&&(a$=function(e){for(var n=t(e),i=0,o=n.length;i<o;i++)if(n[i]===ub){r(n,i,1);break}return n},C({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:aX}))},fastKey:function(t,r){// return a primitive with prefix
if(!th(t))return(void 0===t?"undefined":N(t))=="symbol"?t:("string"==typeof t?"S":"P")+t;if(!tW(t,ub)){// can't set metadata to uncaught frozen object
if(!up(t))return"F";// not necessary to add metadata
if(!r)return"E";// add missing metadata
uS(t);// return object ID
}return t[ub].objectID},getWeakData:function(t,r){if(!tW(t,ub)){// can't set metadata to uncaught frozen object
if(!up(t))return!0;// not necessary to add metadata
if(!r)return!1;// add missing metadata
uS(t);// return the store of weak collections IDs
}return t[ub].weakData},onFreeze:function(t){return uy&&um&&up(t)&&!tW(t,ub)&&uS(t),t}};r_[ub]=!0;var ux={},uA=TypeError,uO=function(t,r){this.stopped=t,this.result=r},u_=uO.prototype;ux=function(t,r,e){var n,i,o,a,u,s,c,f=e&&e.that,h=!!(e&&e.AS_ENTRIES),l=!!(e&&e.IS_RECORD),v=!!(e&&e.IS_ITERATOR),p=!!(e&&e.INTERRUPTED),d=eq(r,f),g=function(t){return n&&iM(n,"normal",t),new uO(!0,t)},y=function(t){return h?(re(t),p?d(t[0],t[1],g):d(t[0],t[1])):p?d(t,g):d(t)};if(l)n=t.iterator;else if(v)n=t;else{if(!(i=iN(t)))throw new uA(tk(t)+" is not iterable");// optimisation for array iterators
if(iP(i)){for(o=0,a=rZ(t);a>o;o++)if((u=y(t[o]))&&tw(u_,u))return u;return new uO(!1)}n=iF(t,i)}for(s=l?t.next:n.next;!(c=H(s,n)).done;){try{u=y(c.value)}catch(t){iM(n,"throw",t)}if("object"==typeof u&&u&&tw(u_,u))return u}return new uO(!1)};var uT={};// makes subclassing work correct for wrapped built-ins
uT=function(t,r,e){var n,i;return i7&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
tl(n=r.constructor)&&n!==e&&th(i=n.prototype)&&i!==e.prototype&&i7(t,i),t},uh=function(t,r,e){var n=-1!==t.indexOf("Map"),i=-1!==t.indexOf("Weak"),o=n?"set":"add",a=z[t],u=a&&a.prototype,s=a,c={},f=function(t){var r=X(u[t]);rh(u,t,"add"===t?function(t){return r(this,0===t?0:t),this}:"delete"===t?function(t){return(!i||!!th(t))&&r(this,0===t?0:t)}:"get"===t?function(t){return i&&!th(t)?void 0:r(this,0===t?0:t)}:"has"===t?function(t){return(!i||!!th(t))&&r(this,0===t?0:t)}:function(t,e){return r(this,0===t?0:t,e),this})};if(r7(t,!tl(a)||!(i||u.forEach&&!q(function(){new a().entries().next()}))))// create collection constructor
s=e.getConstructor(r,t,n,o),ul.enable();else if(r7(t,!0)){var h=new s,l=h[o](i?{}:-0,1)!==h,v=q(function(){h.has(1)}),p=iB(function(t){new a(t)}),d=!i&&q(function(){for(// V8 ~ Chromium 42- fails only with 5+ elements
var t=new a,r=5;r--;)t[o](r,r);return!t.has(-0)});p||((s=r(function(t,r){o2(t,u);var e=uT(new a,t,s);return tu(r)||ux(r,e[o],{that:e,AS_ENTRIES:n}),e})).prototype=u,u.constructor=s),(v||d)&&(f("delete"),f("has"),n&&f("get")),(d||l)&&f(o),i&&u.clear&&delete u.clear}return c[t]=s,C({global:!0,constructor:!0,forced:s!==a},c),eC(s,t),i||e.setStrong(s,t,n),s};var uR={},uj=ul.fastKey,uM=rS.set,uP=rS.getterFor;// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
uh("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},uR={getConstructor:function(t,r,e,n){var i=t(function(t,i){o2(t,o),uM(t,{type:r,index:ed(null),first:void 0,last:void 0,size:0}),D||(t.size=0),tu(i)||ux(i,t[n],{that:t,AS_ENTRIES:e})}),o=i.prototype,a=uP(r),u=function(t,r,e){var n,i,o=a(t),u=s(t,r);return u?u.value=e:(o.last=u={index:i=uj(r,!0),key:r,value:e,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=u),n&&(n.next=u),D?o.size++:t.size++,"F"!==i&&(o.index[i]=u)),t},s=function(t,r){var e,n=a(t),i=uj(r);if("F"!==i)return n.index[i];// frozen object case
for(e=n.first;e;e=e.next)if(e.key===r)return e};return o1(o,{// `{ Map, Set }.prototype.clear()` methods
// https://tc39.es/ecma262/#sec-map.prototype.clear
// https://tc39.es/ecma262/#sec-set.prototype.clear
clear:function(){for(var t=a(this),r=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete r[e.index],e=e.next;t.first=t.last=void 0,D?t.size=0:this.size=0},// `{ Map, Set }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.delete
// https://tc39.es/ecma262/#sec-set.prototype.delete
delete:function(t){var r=a(this),e=s(this,t);if(e){var n=e.next,i=e.previous;delete r.index[e.index],e.removed=!0,i&&(i.next=n),n&&(n.previous=i),r.first===e&&(r.first=n),r.last===e&&(r.last=i),D?r.size--:this.size--}return!!e},// `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
// https://tc39.es/ecma262/#sec-map.prototype.foreach
// https://tc39.es/ecma262/#sec-set.prototype.foreach
forEach:function(t/* , that = undefined */){for(var r,e=a(this),n=eq(t,arguments.length>1?arguments[1]:void 0);r=r?r.next:e.first;)// revert to the last existing entry
for(n(r.value,r.key,this);r&&r.removed;)r=r.previous},// `{ Map, Set}.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.has
// https://tc39.es/ecma262/#sec-set.prototype.has
has:function(t){return!!s(this,t)}}),o1(o,e?{// `Map.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-map.prototype.get
get:function(t){var r=s(this,t);return r&&r.value},// `Map.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-map.prototype.set
set:function(t,r){return u(this,0===t?0:t,r)}}:{// `Set.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-set.prototype.add
add:function(t){return u(this,t=0===t?0:t,t)}}),D&&ek(o,"size",{configurable:!0,get:function(){return a(this).size}}),i},setStrong:function(t,r,e){var n=r+" Iterator",i=uP(r),o=uP(n);// `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
// https://tc39.es/ecma262/#sec-map.prototype.entries
// https://tc39.es/ecma262/#sec-map.prototype.keys
// https://tc39.es/ecma262/#sec-map.prototype.values
// https://tc39.es/ecma262/#sec-map.prototype-@@iterator
// https://tc39.es/ecma262/#sec-set.prototype.entries
// https://tc39.es/ecma262/#sec-set.prototype.keys
// https://tc39.es/ecma262/#sec-set.prototype.values
// https://tc39.es/ecma262/#sec-set.prototype-@@iterator
iJ(t,r,function(t,r){uM(this,{type:n,target:t,state:i(t),kind:r,last:void 0})},function(){// revert to the last existing entry
for(var t=o(this),r=t.kind,e=t.last;e&&e.removed;)e=e.previous;return(// get next entry
t.target&&(t.last=e=e?e.next:t.state.first)?"keys"===r?ol(e.key,!1):"values"===r?ol(e.value,!1):ol([e.key,e.value],!1):(// or finish the iteration
t.target=void 0,ol(void 0,!0)))},e?"entries":"values",!e,!0),// `{ Map, Set }.prototype[@@species]` accessors
// https://tc39.es/ecma262/#sec-get-map-@@species
// https://tc39.es/ecma262/#sec-get-set-@@species
oW(r)}});var uI={},uk=Math.log;// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
uI=Math.log1p||function(t){var r=+t;return r>-.00000001&&r<1e-8?r-r*r/2:uk(1+r)};// eslint-disable-next-line es/no-math-acosh -- required for testing
var uL=Math.acosh,uF=Math.log,uN=Math.sqrt,uU=Math.LN2,uC=!uL||710!==Math.floor(uL(Number.MAX_VALUE))||uL(1/0)!==1/0;// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
C({target:"Math",stat:!0,forced:uC},{acosh:function(t){var r=+t;return r<1?NaN:r>94906265.62425156?uF(r)+uU:uI(r-1+uN(r-1)*uN(r+1))}});// eslint-disable-next-line es/no-math-asinh -- required for testing
var uz=Math.asinh,uB=Math.log,uD=Math.sqrt,uq=!(uz&&1/uz(0)>0);// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
C({target:"Math",stat:!0,forced:uq},{asinh:function t(r){var e=+r;return isFinite(e)&&0!==e?e<0?-t(-e):uB(e+uD(e*e+1)):e}});// eslint-disable-next-line es/no-math-atanh -- required for testing
var uH=Math.atanh,uG=Math.log,uW=!(uH&&1/uH(-0)<0);// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
C({target:"Math",stat:!0,forced:uW},{atanh:function(t){var r=+t;return 0===r?r:uG((1+r)/(1-r))/2}});var uV=Math.abs,u$=Math.pow;// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
C({target:"Math",stat:!0},{cbrt:function(t){var r=+t;return o7(r)*u$(uV(r),1/3)}});var uY=Math.floor,uK=Math.log,uJ=Math.LOG2E;// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
C({target:"Math",stat:!0},{clz32:function(t){var r=t>>>0;return r?31-uY(uK(r+.5)*uJ):32}});var uX={},uQ=Math.expm1,uZ=Math.exp;// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
uX=!uQ||uQ(10)>22025.465794806718||22025.465794806718>uQ(10)||-.00000000000000002!==uQ(-.00000000000000002)?function(t){var r=+t;return 0===r?r:r>-.000001&&r<1e-6?r+r*r/2:uZ(r)-1}:uQ;// eslint-disable-next-line es/no-math-cosh -- required for testing
var u0=Math.cosh,u1=Math.abs,u2=Math.E,u5=!u0||u0(710)===1/0;// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
C({target:"Math",stat:!0,forced:u5},{cosh:function(t){var r=uX(u1(t)-1)+1;return(r+1/(r*u2*u2))*(u2/2)}}),// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
C({target:"Math",stat:!0,forced:uX!==Math.expm1},{expm1:uX}),// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
C({target:"Math",stat:!0},{fround:o3});// eslint-disable-next-line es/no-math-hypot -- required for testing
var u6=Math.hypot,u4=Math.abs,u3=Math.sqrt,u8=!!u6&&u6(1/0,NaN)!==1/0;// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
C({target:"Math",stat:!0,arity:2,forced:u8},{// eslint-disable-next-line no-unused-vars -- required for `.length`
hypot:function(t,r){for(var e,n,i=0,o=0,a=arguments.length,u=0;o<a;)e=u4(arguments[o++]),u<e?(i=i*(n=u/e)*n+1,u=e):e>0?i+=(n=e/u)*n:i+=e;return u===1/0?1/0:u*u3(i)}});// eslint-disable-next-line es/no-math-imul -- required for testing
var u7=Math.imul,u9=q(function(){return -5!==u7(4294967295,5)||2!==u7.length});// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
C({target:"Math",stat:!0,forced:u9},{imul:function(t,r){var e=+t,n=+r,i=65535&e,o=65535&n;return 0|i*o+((65535&e>>>16)*o+i*(65535&n>>>16)<<16>>>0)}});var st=Math.log,sr=Math.LOG10E;// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
C({target:"Math",stat:!0},{log10:Math.log10||function(t){return st(t)*sr}}),// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
C({target:"Math",stat:!0},{log1p:uI});var se=Math.log,sn=Math.LN2;// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
C({target:"Math",stat:!0},{log2:function(t){return se(t)/sn}}),// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
C({target:"Math",stat:!0},{sign:o7});var si=Math.abs,so=Math.exp,sa=Math.E,su=q(function(){// eslint-disable-next-line es/no-math-sinh -- required for testing
return -.00000000000000002!==Math.sinh(-.00000000000000002)});// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
C({target:"Math",stat:!0,forced:su},{sinh:function(t){var r=+t;return 1>si(r)?(uX(r)-uX(-r))/2:(so(r-1)-so(-r-1))*(sa/2)}});var ss=Math.exp;// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
C({target:"Math",stat:!0},{tanh:function(t){var r=+t,e=uX(r),n=uX(-r);return e===1/0?1:n===1/0?-1:(e-n)/(ss(r)+ss(-r))}}),// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
eC(Math,"Math",!0),// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
C({target:"Math",stat:!0},{trunc:rY});var sc=a$,sf=az,sh=aH,sl={};// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
sl=X(1..valueOf);var sv={},sp={};// a string of all valid unicode whitespaces
sp="	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";var sd=X("".replace),sg=RegExp("^["+sp+"]+"),sy=RegExp("(^|[^"+sp+"])["+sp+"]+$"),sm=function(t){return function(r){var e=eo(ta(r));return 1&t&&(e=sd(e,sg,"")),2&t&&(e=sd(e,sy,"$1")),e}},sb=(sv={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:sm(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:sm(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:sm(3)}).trim,sw="Number",sS=z[sw],sE=eF[sw],sx=sS.prototype,sA=z.TypeError,sO=X("".slice),s_=X("".charCodeAt),sT=function(t){var r=tf(t,"number");return(void 0===r?"undefined":N(r))=="bigint"?r:sR(r)},sR=function(t){var r,e,n,i,o,a,u,s,c=tf(t,"number");if(tm(c))throw new sA("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2){if(43===(r=s_(c=sb(c),0))||45===r){if(88===(e=s_(c,2))||120===e)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(48===r){switch(s_(c,1)){// fast equal of /^0b[01]+$/i
case 66:case 98:n=2,i=49;break;// fast equal of /^0o[0-7]+$/i
case 79:case 111:n=8,i=55;break;default:return+c}for(u=0,a=(o=sO(c,2)).length;u<a;u++)// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((s=s_(o,u))<48||s>i)return NaN;return parseInt(o,n)}}return+c},sj=r7(sw,!sS(" 0o1")||!sS("0b1")||sS("+0x1")),sM=function(t){var r,e=arguments.length<1?0:sS(sT(t));return(r=this,tw(sx,r)&&q(function(){sl(r)}))?uT(Object(e),this,sM):e};sM.prototype=sx,sj&&!tB&&(sx.constructor=sM),C({global:!0,constructor:!0,wrap:!0,forced:sj},{Number:sM});// Use `internal/copy-constructor-properties` helper in `core-js@4`
var sP=function(t,r){for(var e,n=D?sc(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;n.length>i;i++)tW(r,e=n[i])&&!tW(t,e)&&sh(t,e,sf(r,e))};tB&&sE&&sP(eF[sw],sE),(sj||tB)&&sP(eF[sw],sS),// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
C({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:2220446049250313e-31});var sI={},sk=z.isFinite;// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
sI=Number.isFinite||function(t){return"number"==typeof t&&sk(t)},// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
C({target:"Number",stat:!0},{isFinite:sI});var sL={},sF=Math.floor;// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
sL=Number.isInteger||function(t){return!th(t)&&isFinite(t)&&sF(t)===t},// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
C({target:"Number",stat:!0},{isInteger:sL}),// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
C({target:"Number",stat:!0},{isNaN:function(t){// eslint-disable-next-line no-self-compare -- NaN check
return t!=t}});var sN=Math.abs;// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
C({target:"Number",stat:!0},{isSafeInteger:function(t){return sL(t)&&9007199254740991>=sN(t)}}),// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
C({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991}),// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
C({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991});var sU={},sC=sv.trim,sz=X("".charAt),sB=z.parseFloat,sD=z.Symbol,sq=sD&&sD.iterator;// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
sU=1/sB(sp+"-0")!=-1/0||sq&&!q(function(){sB(Object(sq))})?function(t){var r=sC(eo(t)),e=sB(r);return 0===e&&"-"===sz(r,0)?-0:e}:sB,// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
C({target:"Number",stat:!0,forced:Number.parseFloat!==sU},{parseFloat:sU});var sH={},sG=sv.trim,sW=z.parseInt,sV=z.Symbol,s$=sV&&sV.iterator,sY=/^[+-]?0x/i,sK=X(sY.exec);// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
sH=8!==sW(sp+"08")||22!==sW(sp+"0x16")||s$&&!q(function(){sW(Object(s$))})?function(t,r){var e=sG(eo(t));return sW(e,r>>>0||(sK(sY,e)?16:10))}:sW,// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
C({target:"Number",stat:!0,forced:Number.parseInt!==sH},{parseInt:sH});var sJ={},sX=RangeError,sQ=RangeError,sZ=String,s0=Math.floor,s1=X(// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
sJ=function(t){var r=eo(ta(this)),e="",n=r$(t);if(n<0||n===1/0)throw new sX("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(r+=r))1&n&&(e+=r);return e}),s2=X("".slice),s5=X(1..toFixed),s6=function(t,r,e){return 0===r?e:r%2==1?s6(t,r-1,e*t):s6(t*t,r/2,e)},s4=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r},s3=function(t,r,e){for(var n=-1,i=e;++n<6;)i+=r*t[n],t[n]=i%1e7,i=s0(i/1e7)},s8=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=s0(n/r),n=n%r*1e7},s7=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=sZ(t[r]);e=""===e?n:e+s1("0",7-n.length)+n}return e},s9=q(function(){return"0.000"!==s5(8e-5,3)||"1"!==s5(.9,0)||"1.25"!==s5(1.255,2)||"1000000000000000128"!==s5(0xde0b6b3a7640080,0)})||!q(function(){// V8 ~ Android 4.3-
s5({})});// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
C({target:"Number",proto:!0,forced:s9},{toFixed:function(t){var r,e,n,i,o=sl(this),a=r$(t),u=[0,0,0,0,0,0],s="",c="0";// TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
if(a<0||a>20)throw new sQ("Incorrect fraction digits");// eslint-disable-next-line no-self-compare -- NaN check
if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return sZ(o);if(o<0&&(s="-",o=-o),o>1e-21){if(e=((r=s4(o*s6(2,69,1))-69)<0?o*s6(2,-r,1):o/s6(2,r,1))*4503599627370496,(r=52-r)>0){for(s3(u,0,e),n=a;n>=7;)s3(u,1e7,0),n-=7;for(s3(u,s6(10,n,1),0),n=r-1;n>=23;)s8(u,8388608),n-=23;s8(u,1<<n),s3(u,1,1),s8(u,2),c=s7(u)}else s3(u,0,e),s3(u,1<<-r,0),c=s7(u)+s1("0",a)}return a>0?s+((i=c.length)<=a?"0."+s1("0",a-i)+c:s2(c,0,i-a)+"."+s2(c,i-a)):s+c}});var ct={},cr=Object.assign,ce=Object.defineProperty,cn=X([].concat);// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
ct=!cr||q(function(){// should have correct order of operations (Edge bug)
if(D&&1!==cr({b:1},cr(ce({},"a",{enumerable:!0,get:function(){ce(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;// should work with symbols and should have deterministic property order (V8 bug)
var t={},r={},e=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[e]=7,n.split("").forEach(function(t){r[t]=t}),7!==cr({},t)[e]||eg(cr({},r)).join("")!==n})?function(t,r){for(var e=tV(t),n=arguments.length,i=1,o=aY,a=aB;n>i;)for(var u,s=J(arguments[i++]),c=o?cn(eg(s),o(s)):eg(s),f=c.length,h=0;f>h;)u=c[h++],(!D||H(a,s,u))&&(e[u]=s[u]);return e}:cr,// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
C({target:"Object",stat:!0,arity:2,forced:Object.assign!==ct},{assign:ct});var ci={};// Forced replacement object prototype accessors methods
ci=tB||!q(function(){// This feature detection crashes old WebKit
// https://github.com/zloirock/core-js/issues/232
if(!oN||!(oN<535)){var t=Math.random();// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
__defineSetter__.call(null,t,function(){}),delete z[t]}}),D&&C({target:"Object",proto:!0,forced:ci},{__defineGetter__:function(t,r){aH(tV(this),t,{get:tI(r),enumerable:!0,configurable:!0})}}),D&&C({target:"Object",proto:!0,forced:ci},{__defineSetter__:function(t,r){aH(tV(this),t,{set:tI(r),enumerable:!0,configurable:!0})}});var co={},ca=X(aB),cu=X([].push),cs=D&&q(function(){// eslint-disable-next-line es/no-object-create -- safe
var t=Object.create(null);return t[2]=2,!ca(t,2)}),cc=function(t){return function(r){for(var e,n=K(r),i=eg(n),o=cs&&null===iZ(n),a=i.length,u=0,s=[];a>u;)e=i[u++],(!D||(o?e in n:ca(n,e)))&&cu(s,t?[e,n[e]]:n[e]);return s}},cf=(co={// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
entries:cc(!0),// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
values:cc(!1)}).entries;// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
C({target:"Object",stat:!0},{entries:function(t){return cf(t)}});var ch=ul.onFreeze,cl=Object.freeze,cv=q(function(){cl(1)});// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
C({target:"Object",stat:!0,forced:cv,sham:!uy},{freeze:function(t){return cl&&th(t)?cl(ch(t)):t}}),// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
C({target:"Object",stat:!0},{fromEntries:function(t){var r={};return ux(t,function(t,e){eR(r,t,e)},{AS_ENTRIES:!0}),r}});var cp=az,cd=!D||q(function(){cp(1)});// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
C({target:"Object",stat:!0,forced:cd,sham:!D},{getOwnPropertyDescriptor:function(t,r){return cp(K(t),r)}}),// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
C({target:"Object",stat:!0,sham:!D},{getOwnPropertyDescriptors:function(t){for(var r,e,n=K(t),i=az,o=rH(n),a={},u=0;o.length>u;)void 0!==(e=i(n,r=o[u++]))&&eR(a,r,e);return a}});var cg=aX,cy=q(function(){return!Object.getOwnPropertyNames(1)});// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
C({target:"Object",stat:!0,forced:cy},{getOwnPropertyNames:cg});var cm=q(function(){iZ(1)});// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
C({target:"Object",stat:!0,forced:cm,sham:!i0},{getPrototypeOf:function(t){return iZ(tV(t))}});var cb={};// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
cb=Object.is||function(t,r){// eslint-disable-next-line no-self-compare -- NaN check
return t===r?0!==t||1/t==1/r:t!=t&&r!=r},// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
C({target:"Object",stat:!0},{is:cb}),// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
C({target:"Object",stat:!0,forced:Object.isExtensible!==up},{isExtensible:up});// eslint-disable-next-line es/no-object-isfrozen -- safe
var cw=Object.isFrozen,cS=ud||q(function(){cw(1)});// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
C({target:"Object",stat:!0,forced:cS},{isFrozen:function(t){return!th(t)||!!ud&&"ArrayBuffer"===tr(t)||!!cw&&cw(t)}});// eslint-disable-next-line es/no-object-issealed -- safe
var cE=Object.isSealed,cx=ud||q(function(){cE(1)});// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
C({target:"Object",stat:!0,forced:cx},{isSealed:function(t){return!th(t)||!!ud&&"ArrayBuffer"===tr(t)||!!cE&&cE(t)}});var cA=q(function(){eg(1)});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
C({target:"Object",stat:!0,forced:cA},{keys:function(t){return eg(tV(t))}});var cO=az;D&&C({target:"Object",proto:!0,forced:ci},{__lookupGetter__:function(t){var r,e=tV(this),n=tc(t);do if(r=cO(e,n))return r.get;while(e=iZ(e))}});var c_=az;D&&C({target:"Object",proto:!0,forced:ci},{__lookupSetter__:function(t){var r,e=tV(this),n=tc(t);do if(r=c_(e,n))return r.set;while(e=iZ(e))}});var cT=ul.onFreeze,cR=Object.preventExtensions,cj=q(function(){cR(1)});// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
C({target:"Object",stat:!0,forced:cj,sham:!uy},{preventExtensions:function(t){return cR&&th(t)?cR(cT(t)):t}});var cM=ul.onFreeze,cP=Object.seal,cI=q(function(){cP(1)});// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
C({target:"Object",stat:!0,forced:cI,sham:!uy},{seal:function(t){return cP&&th(t)?cP(cM(t)):t}});var ck={};// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
ck=eu?({}).toString:function(){return"[object "+ea(this)+"]"},eu||rh(Object.prototype,"toString",ck,{unsafe:!0});var cL=co.values;// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
C({target:"Object",stat:!0},{values:function(t){return cL(t)}});var cF={};cF="process"===tr(z.process);var cN={},cU={},cC=TypeError;// `Assert: IsConstructor(argument) is true`
cU=function(t){if(eY(t))return t;throw new cC(tk(t)+" is not a constructor")};var cz=tC("species");// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
cN=function(t,r){var e,n=re(t).constructor;return void 0===n||tu(e=re(n)[cz])?r:cU(e)};var cB={},cD={},cq=TypeError;cD=function(t,r){if(t<r)throw new cq("Not enough arguments");return t};var cH={};// eslint-disable-next-line redos/no-vulnerable -- safe
cH=/(?:ipad|iphone|ipod).*applewebkit/i.test(tA);var cG=z.setImmediate,cW=z.clearImmediate,cV=z.process,c$=z.Dispatch,cY=z.Function,cK=z.MessageChannel,cJ=z.String,cX=0,cQ={},cZ="onreadystatechange";q(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
c=z.location});var c0=function(t){if(tW(cQ,t)){var r=cQ[t];delete cQ[t],r()}},c1=function(t){return function(){c0(t)}},c2=function(t){c0(t.data)},c5=function(t){// old engines have not location.origin
z.postMessage(cJ(t),c.protocol+"//"+c.host)};cG&&cW||(cG=function(t){cD(arguments.length,1);var r=tl(t)?t:cY(t),e=nF(arguments,1);return cQ[++cX]=function(){nP(r,void 0,e)},f(cX),cX},cW=function(t){delete cQ[t]},cF?f=function(t){cV.nextTick(c1(t))}:c$&&c$.now?f=function(t){c$.now(c1(t))}:cK&&!cH?(l=(h=new cK).port2,h.port1.onmessage=c2,f=eq(l.postMessage,l)):z.addEventListener&&tl(z.postMessage)&&!z.importScripts&&c&&"file:"!==c.protocol&&!q(c5)?(f=c5,z.addEventListener("message",c2,!1)):f=cZ in t4("script")?function(t){ey.appendChild(t4("script"))[cZ]=function(){ey.removeChild(this),c0(t)}}:function(t){setTimeout(c1(t),0)});var c6=(cB={set:cG,clear:cW}).set,c4={},c3=az,c8=cB.set,c7={},c9=function(){this.head=null,this.tail=null};c9.prototype={add:function(t){var r={item:t,next:null},e=this.tail;e?e.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},c7=c9;var ft={};ft=/ipad|iphone|ipod/i.test(tA)&&"undefined"!=typeof Pebble;var fr={};fr=/web0s(?!.*chrome)/i.test(tA);var fe=z.MutationObserver||z.WebKitMutationObserver,fn=z.document,fi=z.process,fo=z.Promise,fa=c3(z,"queueMicrotask"),fu=fa&&fa.value;// modern engines have queueMicrotask method
if(!fu){var fs=new c7,fc=function(){var t,r;for(cF&&(t=fi.domain)&&t.exit();r=fs.get();)try{r()}catch(t){throw fs.head&&v(),t}t&&t.enter()};cH||cF||fr||!fe||!fn?!ft&&fo&&fo.resolve?(// workaround of WebKit ~ iOS Safari 10.1 bug
// Promise.resolve without an argument throws an error in LG WebOS 2
(g=fo.resolve(void 0)).constructor=fo,y=eq(g.then,g),v=function(){y(fc)}):cF?v=function(){fi.nextTick(fc)}:(// `webpack` dev server bug on IE global methods - use bind(fn, global)
c8=eq(c8,z),v=function(){c8(fc)}):(p=!0,d=fn.createTextNode(""),new fe(fc).observe(d,{characterData:!0}),v=function(){d.data=p=!p}),fu=function(t){fs.head||v(),fs.add(t)}}c4=fu;var ff={};ff=function(t,r){try{// eslint-disable-next-line no-console -- safe
1==arguments.length?console.error(t):console.error(t,r)}catch(t){}};var fh={};fh=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};var fl={};fl=z.Promise;var fv={},fp={},fd={};fp=!/* global Deno -- Deno case */(fd="object"==typeof Deno&&Deno&&"object"==typeof Deno.version)&&!cF&&"object"==typeof window&&"object"==typeof document;var fg=fl&&fl.prototype,fy=tC("species"),fm=!1,fb=tl(z.PromiseRejectionEvent);fv={CONSTRUCTOR:r7("Promise",function(){var t=rb(fl),r=t!==String(fl);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!r&&66===tx||tB&&!(fg.catch&&fg.finally))return!0;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(!tx||tx<51||!/native code/.test(t)){// Detect correctness of subclassing with @@species support
var e=new fl(function(t){t(1)}),n=function(t){t(function(){},function(){})};if((e.constructor={})[fy]=n,!(fm=e.then(function(){}) instanceof n))return!0;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
}return!r&&(fp||fd)&&!fb}),REJECTION_EVENT:fb,SUBCLASSING:fm};var fw=TypeError,fS=function(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw new fw("Bad Promise constructor");r=t,e=n}),this.resolve=tI(r),this.reject=tI(e)};m=function(t){return new fS(t)};var fE="Promise",fx=fv.CONSTRUCTOR,fA=fv.REJECTION_EVENT,fO=fv.SUBCLASSING,f_=rS.getterFor(fE),fT=rS.set,fR=fl&&fl.prototype,fj=fl,fM=fR,fP=z.TypeError,fI=z.document,fk=z.process,fL=m,fF=fL,fN=!!(fI&&fI.createEvent&&z.dispatchEvent),fU="unhandledrejection",fC=function(t){var r;return!!(th(t)&&tl(r=t.then))&&r},fz=function(t,r){var e,n,i,o=r.value,a=1===r.state,u=a?t.ok:t.fail,s=t.resolve,c=t.reject,f=t.domain;try{u?(a||(2===r.rejection&&fG(r),r.rejection=1),!0===u?e=o:(f&&f.enter(),e=u(o),f&&(f.exit(),i=!0)),e===t.promise?c(new fP("Promise-chain cycle")):(n=fC(e))?H(n,e,s,c):s(e)):c(o)}catch(t){f&&!i&&f.exit(),c(t)}},fB=function(t,r){t.notified||(t.notified=!0,c4(function(){for(var e,n=t.reactions;e=n.get();)fz(e,t);t.notified=!1,r&&!t.rejection&&fq(t)}))},fD=function(t,r,e){var n,i;fN?((n=fI.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),z.dispatchEvent(n)):n={promise:r,reason:e},!fA&&(i=z["on"+t])?i(n):t===fU&&ff("Unhandled promise rejection",e)},fq=function(t){H(c6,z,function(){var r,e=t.facade,n=t.value;if(fH(t)&&(r=fh(function(){cF?fk.emit("unhandledRejection",n,e):fD(fU,e,n)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t.rejection=cF||fH(t)?2:1,r.error))throw r.value})},fH=function(t){return 1!==t.rejection&&!t.parent},fG=function(t){H(c6,z,function(){var r=t.facade;cF?fk.emit("rejectionHandled",r):fD("rejectionhandled",r,t.value)})},fW=function(t,r,e){return function(n){t(r,n,e)}},fV=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,fB(t,!0))},f$=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw new fP("Promise can't be resolved itself");var n=fC(r);n?c4(function(){var e={done:!1};try{H(n,r,fW(f$,e,t),fW(fV,e,t))}catch(r){fV(e,r,t)}}):(t.value=r,t.state=1,fB(t,!1))}catch(r){fV({done:!1},r,t)}}};// constructor polyfill
if(fx&&(fM=// 25.4.3.1 Promise(executor)
(fj=function(t){o2(this,fM),tI(t),H(b,this);var r=f_(this);try{t(fW(f$,r),fW(fV,r))}catch(t){fV(r,t)}}).prototype,// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
// eslint-disable-next-line no-unused-vars -- required for `.length`
(b=function(t){fT(this,{type:fE,done:!1,notified:!1,parent:!1,reactions:new c7,rejection:!1,state:0,value:void 0})}).prototype=rh(fM,"then",function(t,r){var e=f_(this),n=fL(cN(this,fj));return e.parent=!0,n.ok=!tl(t)||t,n.fail=tl(r)&&r,n.domain=cF?fk.domain:void 0,0===e.state?e.reactions.add(n):c4(function(){fz(n,e)}),n.promise}),w=function(){var t=new b,r=f_(t);this.promise=t,this.resolve=fW(f$,r),this.reject=fW(fV,r)},m=fL=function(t){return t===fj||t===S?new w(t):fF(t)},!tB&&tl(fl)&&fR!==Object.prototype)){E=fR.then,fO||rh(fR,"then",function(t,r){var e=this;return new fj(function(t,r){H(E,e,t,r)}).then(t,r);// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0});// make `.constructor === Promise` work for native promise-based APIs
try{delete fR.constructor}catch(t){}i7&&i7(fR,fM)}C({global:!0,constructor:!0,wrap:!0,forced:fx},{Promise:fj}),eC(fj,fE,!1,!0),oW(fE);var fY={};fY=fv.CONSTRUCTOR||!iB(function(t){fl.all(t).then(void 0,function(){})}),// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
C({target:"Promise",stat:!0,forced:fY},{all:function(t){var r=this,e=m(r),n=e.resolve,i=e.reject,o=fh(function(){var e=tI(r.resolve),o=[],a=0,u=1;ux(t,function(t){var s=a++,c=!1;u++,H(e,r,t).then(function(t){!c&&(c=!0,o[s]=t,--u||n(o))},i)}),--u||n(o)});return o.error&&i(o.value),e.promise}});var fK=fv.CONSTRUCTOR,fJ=fl&&fl.prototype;// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if(// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
C({target:"Promise",proto:!0,forced:fK,real:!0},{catch:function(t){return this.then(void 0,t)}}),!tB&&tl(fl)){var fX=tb("Promise").prototype.catch;fJ.catch!==fX&&rh(fJ,"catch",fX,{unsafe:!0})}// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
C({target:"Promise",stat:!0,forced:fY},{race:function(t){var r=this,e=m(r),n=e.reject,i=fh(function(){var i=tI(r.resolve);ux(t,function(t){H(i,r,t).then(e.resolve,n)})});return i.error&&n(i.value),e.promise}});var fQ=fv.CONSTRUCTOR;// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
C({target:"Promise",stat:!0,forced:fQ},{reject:function(t){var r=m(this);return H(r.reject,void 0,t),r.promise}});var fZ=fv.CONSTRUCTOR,f0={};f0=function(t,r){if(re(t),th(r)&&r.constructor===t)return r;var e=m(t);return(0,e.resolve)(r),e.promise};var f1=tb("Promise"),f2=tB&&!fZ;// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
C({target:"Promise",stat:!0,forced:tB||fZ},{resolve:function(t){return f0(f2&&this===f1?fl:this,t)}});var f5=fl&&fl.prototype,f6=!!fl&&q(function(){// eslint-disable-next-line unicorn/no-thenable -- required for testing
f5.finally.call({then:function(){}},function(){})});// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if(// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
C({target:"Promise",proto:!0,real:!0,forced:f6},{finally:function(t){var r=cN(this,tb("Promise")),e=tl(t);return this.then(e?function(e){return f0(r,t()).then(function(){return e})}:t,e?function(e){return f0(r,t()).then(function(){throw e})}:t)}}),!tB&&tl(fl)){var f4=tb("Promise").prototype.finally;f5.finally!==f4&&rh(f5,"finally",f4,{unsafe:!0})}// MS Edge argumentsList argument is optional
var f3=!q(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.apply(function(){})});// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
C({target:"Reflect",stat:!0,forced:f3},{apply:function(t,r,e){return nP(tI(t),r,re(e))}});var f8={},f7=Function,f9=X([].concat),ht=X([].join),hr={},he=function(t,r,e){if(!tW(hr,r)){for(var n=[],i=0;i<r;i++)n[i]="a["+i+"]";hr[r]=f7("C,a","return new C("+ht(n,",")+")")}return hr[r](t,e)};// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
f8=G?f7.bind:function(t/* , ...args */){var r=tI(this),e=r.prototype,n=nF(arguments,1),i=function(){var e=f9(n,nF(arguments));return this instanceof i?he(r,e.length,e):r.apply(t,e)};return th(e)&&(i.prototype=e),i};var hn=tb("Reflect","construct"),hi=Object.prototype,ho=[].push,ha=q(function(){function t(){}return!(hn(function(){},[],t) instanceof t)}),hu=!q(function(){hn(function(){})}),hs=ha||hu;C({target:"Reflect",stat:!0,forced:hs,sham:hs},{construct:function(t,r/* , newTarget */){cU(t),re(r);var e=arguments.length<3?t:cU(arguments[2]);if(hu&&!ha)return hn(t,r,e);if(t===e){// w/o altered newTarget, optimization for 0-4 arguments
switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}// w/o altered newTarget, lot of arguments case
var n=[null];return nP(ho,n,r),new(nP(f8,t,n))}// with altered newTarget, not support built-in constructors
var i=e.prototype,o=ed(th(i)?i:hi),a=nP(t,o,r);return th(a)?a:o}});// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var hc=q(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.defineProperty(aH({},1,{value:1}),1,{value:2})});// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
C({target:"Reflect",stat:!0,forced:hc,sham:!D},{defineProperty:function(t,r,e){re(t);var n=tc(r);re(e);try{return aH(t,n,e),!0}catch(t){return!1}}});var hf=az;// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
C({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var e=hf(re(t),r);return(!e||!!e.configurable)&&delete t[r]}});var hh={};hh=function(t){return void 0!==t&&(tW(t,"value")||tW(t,"writable"))},C({target:"Reflect",stat:!0},{get:// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function t(r,e/* , receiver */){var n,i,o=arguments.length<3?r:arguments[2];return re(r)===o?r[e]:(n=az(r,e))?hh(n)?n.value:void 0===n.get?void 0:H(n.get,o):th(i=iZ(r))?t(i,e,o):void 0}}),// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
C({target:"Reflect",stat:!0,sham:!D},{getOwnPropertyDescriptor:function(t,r){return az(re(t),r)}}),// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
C({target:"Reflect",stat:!0,sham:!i0},{getPrototypeOf:function(t){return iZ(re(t))}}),// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
C({target:"Reflect",stat:!0},{has:function(t,r){return r in t}}),// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
C({target:"Reflect",stat:!0},{isExtensible:function(t){return re(t),up(t)}}),// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
C({target:"Reflect",stat:!0},{ownKeys:rH}),// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
C({target:"Reflect",stat:!0,sham:!uy},{preventExtensions:function(t){re(t);try{var r=tb("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}});// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var hl=q(function(){var t=function(){},r=aH(new t,"a",{configurable:!0});// eslint-disable-next-line es/no-reflect -- required for testing
return!1!==Reflect.set(t.prototype,"a",1,r)});C({target:"Reflect",stat:!0,forced:hl},{set:// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function t(r,e,n/* , receiver */){var i,o,a,u=arguments.length<4?r:arguments[3],s=az(re(r),e);if(!s){if(th(o=iZ(r)))return t(o,e,n,u);s=Y(0)}if(hh(s)){if(!1===s.writable||!th(u))return!1;if(i=az(u,e)){if(i.get||i.set||!1===i.writable)return!1;i.value=n,aH(u,e,i)}else aH(u,e,Y(0,n))}else{if(void 0===(a=s.set))return!1;H(a,u,n)}return!0}}),i7&&C({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){re(t),ot(r);try{return i7(t,r),!0}catch(t){return!1}}});var hv=a$,hp={},hd=tC("match");// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
hp=function(t){var r;return th(t)&&(void 0!==(r=t[hd])?!!r:"RegExp"===tr(t))};var hg={},hy={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
hy=function(){var t=re(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r};var hm=RegExp.prototype;hg=function(t){var r=t.flags;return void 0===r&&!("flags"in hm)&&!tW(t,"flags")&&tw(hm,t)?H(hy,t):r};var hb={},hw=z.RegExp,hS=q(function(){var t=hw("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),hE=hS||q(function(){return!hw("a","y").sticky});hb={BROKEN_CARET:hS||q(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var t=hw("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:hE,UNSUPPORTED_Y:hS};var hx={},hA=aH;hx=function(t,r,e){e in t||hA(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})};var hO=rS.enforce,h_={},hT=z.RegExp;h_=q(function(){var t=hT(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)});var hR={},hj=z.RegExp;hR=q(function(){var t=hj("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")});var hM=tC("match"),hP=z.RegExp,hI=hP.prototype,hk=z.SyntaxError,hL=X(hI.exec),hF=X("".charAt),hN=X("".replace),hU=X("".indexOf),hC=X("".slice),hz=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,hB=/a/g,hD=/a/g,hq=new hP(hB)!==hB,hH=hb.MISSED_STICKY,hG=hb.UNSUPPORTED_Y,hW=D&&(!hq||hH||h_||hR||q(function(){// RegExp constructor can alter flags and IsRegExp works correct with @@match
return hD[hM]=!1,hP(hB)!==hB||hP(hD)===hD||"/a/i"!==String(hP(hB,"i"))})),hV=function(t){for(var r,e=t.length,n=0,i="",o=!1;n<=e;n++){if("\\"===(r=hF(t,n))){i+=r+hF(t,++n);continue}o||"."!==r?("["===r?o=!0:"]"===r&&(o=!1),i+=r):i+="[\\s\\S]"}return i},h$=function(t){for(var r,e=t.length,n=0,i="",o=[],a={},u=!1,s=!1,c=0,f="";n<=e;n++){if("\\"===(r=hF(t,n)))r+=hF(t,++n);else if("]"===r)u=!1;else if(!u)switch(!0){case"["===r:u=!0;break;case"("===r:hL(hz,hC(t,n+1))&&(n+=2,s=!0),i+=r,c++;continue;case">"===r&&s:if(""===f||tW(a,f))throw new hk("Invalid capture group name");a[f]=!0,o[o.length]=[f,c],s=!1,f="";continue}s?f+=r:i+=r}return[i,o]};// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(r7("RegExp",hW)){for(var hY=function(t,r){var e,n,i,o,a,u,s=tw(hI,this),c=hp(t),f=void 0===r,h=[],l=t;if(!s&&c&&f&&t.constructor===hY)return t;if((c||tw(hI,t))&&(t=t.source,f&&(r=hg(l))),t=void 0===t?"":eo(t),r=void 0===r?"":eo(r),l=t,h_&&("dotAll"in hB)&&(n=!!r&&hU(r,"s")>-1)&&(r=hN(r,/s/g,"")),e=r,hH&&("sticky"in hB)&&(i=!!r&&hU(r,"y")>-1)&&hG&&(r=hN(r,/y/g,"")),hR&&(t=(o=h$(t))[0],h=o[1]),a=uT(hP(t,r),s?this:hI,hY),(n||i||h.length)&&(u=hO(a),n&&(u.dotAll=!0,u.raw=hY(hV(t),e)),i&&(u.sticky=!0),h.length&&(u.groups=h)),t!==l)try{// fails in old engines, but we have no alternatives for unsupported regex syntax
rt(a,"source",""===l?"(?:)":l)}catch(t){}return a},hK=hv(hP),hJ=0;hK.length>hJ;)hx(hY,hP,hK[hJ++]);hI.constructor=hY,hY.prototype=hI,rh(z,"RegExp",hY,{constructor:!0})}// https://tc39.es/ecma262/#sec-get-regexp-@@species
oW("RegExp");var hX={},hQ=rS.get,hZ=tz("native-string-replace",String.prototype.replace),h0=RegExp.prototype.exec,h1=h0,h2=X("".charAt),h5=X("".indexOf),h6=X("".replace),h4=X("".slice),h3=(r=/b*/g,H(h0,t=/a/,"a"),H(h0,r,"a"),0!==t.lastIndex||0!==r.lastIndex),h8=hb.BROKEN_CARET,h7=void 0!==/()??/.exec("")[1];(h3||h7||h8||h_||hR)&&(h1=function(t){var r,e,n,i,o,a,u,s=hQ(this),c=eo(t),f=s.raw;if(f)return f.lastIndex=this.lastIndex,r=H(h1,f,c),this.lastIndex=f.lastIndex,r;var h=s.groups,l=h8&&this.sticky,v=H(hy,this),p=this.source,d=0,g=c;if(l&&(-1===h5(v=h6(v,"y",""),"g")&&(v+="g"),g=h4(c,this.lastIndex),this.lastIndex>0&&(!this.multiline||this.multiline&&"\n"!==h2(c,this.lastIndex-1))&&(p="(?: "+p+")",g=" "+g,d++),// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
e=RegExp("^(?:"+p+")",v)),h7&&(e=RegExp("^"+p+"$(?!\\s)",v)),h3&&(n=this.lastIndex),i=H(h0,l?e:this,g),l?i?(i.input=h4(i.input,d),i[0]=h4(i[0],d),i.index=this.lastIndex,this.lastIndex+=i[0].length):this.lastIndex=0:h3&&i&&(this.lastIndex=this.global?i.index+i[0].length:n),h7&&i&&i.length>1&&// for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
H(hZ,i[0],e,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)}),i&&h)for(o=0,i.groups=a=ed(null);o<h.length;o++)a[(u=h[o])[0]]=i[u[1]];return i}),hX=h1,// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
C({target:"RegExp",proto:!0,forced:/./.exec!==hX},{exec:hX});// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var h9=z.RegExp,lt=h9.prototype;D&&q(function(){var t=!0;try{h9(".","d")}catch(r){t=!1}var r={},e="",n=t?"dgimsy":"gimsy",i=function(t,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(r,t,{get:function(){return e+=n,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(lt,"flags").get.call(r)!==n||e!==n})&&ek(lt,"flags",{configurable:!0,get:hy});var lr=rv.PROPER,le="toString",ln=RegExp.prototype[le],li=q(function(){return"/a/b"!==ln.call({source:"a",flags:"b"})}),lo=lr&&ln.name!==le;(li||lo)&&rh(RegExp.prototype,le,function(){var t=re(this);return"/"+eo(t.source)+"/"+eo(hg(t))},{unsafe:!0}),// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
uh("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},uR);var la={},lu=X("".charAt),ls=X("".charCodeAt),lc=X("".slice),lf=function(t){return function(r,e){var n,i,o=eo(ta(r)),a=r$(e),u=o.length;return a<0||a>=u?t?"":void 0:(n=ls(o,a))<55296||n>56319||a+1===u||(i=ls(o,a+1))<56320||i>57343?t?lu(o,a):n:t?lc(o,a,a+2):(n-55296<<10)+(i-56320)+65536}},lh=(la={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:lf(!1),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:lf(!0)}).codeAt;// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
C({target:"String",proto:!0},{codePointAt:function(t){return lh(this,t)}});var ll=az,lv={},lp=TypeError;lv=function(t){if(hp(t))throw new lp("The method doesn't accept regular expressions");return t};var ld={},lg=tC("match");ld=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[lg]=!1,"/./"[t](r)}catch(t){}}return!1};// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var ly=eH("".endsWith),lm=eH("".slice),lb=Math.min,lw=ld("endsWith"),lS=!tB&&!lw&&!!((e=ll(String.prototype,"endsWith"))&&!e.writable);// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
C({target:"String",proto:!0,forced:!lS&&!lw},{endsWith:function(t/* , endPosition = @length */){var r=eo(ta(this));lv(t);var e=arguments.length>1?arguments[1]:void 0,n=r.length,i=void 0===e?n:lb(r0(e),n),o=eo(t);return ly?ly(r,o,i):lm(r,i-o.length,i)===o}});var lE=RangeError,lx=String.fromCharCode,lA=String.fromCodePoint,lO=X([].join),l_=!!lA&&1!==lA.length;// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
C({target:"String",stat:!0,arity:1,forced:l_},{// eslint-disable-next-line no-unused-vars -- required for `.length`
fromCodePoint:function(t){for(var r,e=[],n=arguments.length,i=0;n>i;){if(r=+arguments[i++],rV(r,1114111)!==r)throw new lE(r+" is not a valid code point");e[i]=r<65536?lx(r):lx(((r-=65536)>>10)+55296,r%1024+56320)}return lO(e,"")}});var lT=X("".indexOf);// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
C({target:"String",proto:!0,forced:!ld("includes")},{includes:function(t/* , position = 0 */){return!!~lT(eo(ta(this)),eo(lv(t)),arguments.length>1?arguments[1]:void 0)}});var lR=la.charAt,lj="String Iterator",lM=rS.set,lP=rS.getterFor(lj);// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
iJ(String,"String",function(t){lM(this,{type:lj,string:eo(t),index:0});// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,r=lP(this),e=r.string,n=r.index;return n>=e.length?ol(void 0,!0):(t=lR(e,n),r.index+=t.length,ol(t,!1))});var lI={},lk=tC("species"),lL=RegExp.prototype;lI=function(t,r,e,n){var i=tC(t),o=!q(function(){// String methods call symbol-named RegEp methods
var r={};return r[i]=function(){return 7},7!==""[t](r)}),a=o&&!q(function(){// Symbol-named RegExp methods call .exec
var r=!1,e=/a/;return"split"===t&&(// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
(e={}).constructor={},e.constructor[lk]=function(){return e},e.flags="",e[i]=/./[i]),e.exec=function(){return r=!0,null},e[i](""),!r});if(!o||!a||e){var u=eH(/./[i]),s=r(i,""[t],function(t,r,e,n,i){var a=eH(t),s=r.exec;return s===hX||s===lL.exec?o&&!i?{done:!0,value:u(r,e,n)}:{done:!0,value:a(e,r,n)}:{done:!1}});rh(String.prototype,t,s[0]),rh(lL,i,s[1])}n&&rt(lL[i],"sham",!0)};var lF={},lN=la.charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
lF=function(t,r,e){return r+(e?lN(t,r).length:1)};var lU={},lC=TypeError;// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
lU=function(t,r){var e=t.exec;if(tl(e)){var n=H(e,t,r);return null!==n&&re(n),n}if("RegExp"===tr(t))return H(hX,t,r);throw new lC("RegExp#exec called on incompatible receiver")},// @@match logic
lI("match",function(t,r,e){return[// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function(r){var e=ta(this),n=tu(r)?void 0:tP(r,t);return n?H(n,r,e):new RegExp(r)[t](eo(e))},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(t){var n,i=re(this),o=eo(t),a=e(r,i,o);if(a.done)return a.value;if(!i.global)return lU(i,o);var u=i.unicode;i.lastIndex=0;for(var s=[],c=0;null!==(n=lU(i,o));){var f=eo(n[0]);s[c]=f,""===f&&(i.lastIndex=lF(o,r0(i.lastIndex),u)),c++}return 0===c?null:s}]});var lz={},lB=X(sJ),lD=X("".slice),lq=Math.ceil,lH=function(t){return function(r,e,n){var i,o,a=eo(ta(r)),u=r0(e),s=a.length,c=void 0===n?" ":eo(n);return u<=s||""===c?a:((o=lB(c,lq((i=u-s)/c.length))).length>i&&(o=lD(o,0,i)),t?a+o:o+a)}},lG=(lz={// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
start:lH(!1),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
end:lH(!0)}).end,lW={};lW=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(tA),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
C({target:"String",proto:!0,forced:lW},{padEnd:function(t/* , fillString = ' ' */){return lG(this,t,arguments.length>1?arguments[1]:void 0)}});var lV=lz.start;// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
C({target:"String",proto:!0,forced:lW},{padStart:function(t/* , fillString = ' ' */){return lV(this,t,arguments.length>1?arguments[1]:void 0)}});var l$=X([].push),lY=X([].join);// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
C({target:"String",stat:!0},{raw:function(t){var r=K(tV(t).raw),e=rZ(r);if(!e)return"";for(var n=arguments.length,i=[],o=0;;){if(l$(i,eo(r[o++])),o===e)return lY(i,"");o<n&&l$(i,eo(arguments[o]))}}}),// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
C({target:"String",proto:!0},{repeat:sJ});var lK={},lJ=Math.floor,lX=X("".charAt),lQ=X("".replace),lZ=X("".slice),l0=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l1=/\$([$&'`]|\d{1,2})/g;// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
lK=function(t,r,e,n,i,o){var a=e+t.length,u=n.length,s=l1;return void 0!==i&&(i=tV(i),s=l0),lQ(o,s,function(o,s){var c;switch(lX(s,0)){case"$":return"$";case"&":return t;case"`":return lZ(r,0,e);case"'":return lZ(r,a);case"<":c=i[lZ(s,1,-1)];break;default:var f=+s;if(0===f)return o;if(f>u){var h=lJ(f/10);if(0===h)return o;if(h<=u)return void 0===n[h-1]?lX(s,1):n[h-1]+lX(s,1);return o}c=n[f-1]}return void 0===c?"":c})};var l2=tC("replace"),l5=Math.max,l6=Math.min,l4=X([].concat),l3=X([].push),l8=X("".indexOf),l7=X("".slice),l9="$0"==="a".replace(/./,"$0"),vt=!!/./[l2]&&""===/./[l2]("a","$0");// @@replace logic
lI("replace",function(t,r,e){var n=vt?"$":"$0";return[// `String.prototype.replace` method
// https://tc39.es/ecma262/#sec-string.prototype.replace
function(t,e){var n=ta(this),i=tu(t)?void 0:tP(t,l2);return i?H(i,t,n,e):H(r,eo(n),t,e)},// `RegExp.prototype[@@replace]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
function(t,i){var o=re(this),a=eo(t);if("string"==typeof i&&-1===l8(i,n)&&-1===l8(i,"$<")){var u=e(r,o,a,i);if(u.done)return u.value}var s=tl(i);s||(i=eo(i));var c=o.global;c&&(d=o.unicode,o.lastIndex=0);for(var f=[];null!==(g=lU(o,a))&&(l3(f,g),c);)""===eo(g[0])&&(o.lastIndex=lF(a,r0(o.lastIndex),d));for(var h="",l=0,v=0;v<f.length;v++){g=f[v];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var p,d,g,y,m=eo(g[0]),b=l5(l6(r$(g.index),a.length),0),w=[],S=1;S<g.length;S++)l3(w,void 0===(p=g[S])?p:String(p));var E=g.groups;if(s){var x=l4([m],w,b,a);void 0!==E&&l3(x,E),y=eo(nP(i,void 0,x))}else y=lK(m,a,b,w,E,i);b>=l&&(h+=l7(a,l,b)+y,l=b+m.length)}return h+l7(a,l)}]},!!q(function(){var t=/./;// eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})||!l9||vt),// @@search logic
lI("search",function(t,r,e){return[// `String.prototype.search` method
// https://tc39.es/ecma262/#sec-string.prototype.search
function(r){var e=ta(this),n=tu(r)?void 0:tP(r,t);return n?H(n,r,e):new RegExp(r)[t](eo(e))},// `RegExp.prototype[@@search]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@search
function(t){var n=re(this),i=eo(t),o=e(r,n,i);if(o.done)return o.value;var a=n.lastIndex;cb(a,0)||(n.lastIndex=0);var u=lU(n,i);return cb(n.lastIndex,a)||(n.lastIndex=a),null===u?-1:u.index}]});var vr=hb.UNSUPPORTED_Y,ve=Math.min,vn=[].push,vi=X(/./.exec),vo=X(vn),va=X("".slice);// @@split logic
lI("split",function(t,r,e){var n;return n="c"==="abbc".split(/(b)*/)[1]||// eslint-disable-next-line regexp/no-empty-group -- required for testing
4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||// eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n,i,o,a=eo(ta(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[a];// If `separator` is not a regex, use native split
if(!hp(t))return H(r,a,t,u);for(var s=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=RegExp(t.source,c+"g");(n=H(hX,h,a))&&(!((i=h.lastIndex)>f)||(vo(s,va(a,f,n.index)),n.length>1&&n.index<a.length&&nP(vn,s,eT(n,1)),o=n[0].length,f=i,!(s.length>=u)));)h.lastIndex===n.index&&h.lastIndex++;// Avoid an infinite loop
return f===a.length?(o||!vi(h,""))&&vo(s,""):vo(s,va(a,f)),s.length>u?eT(s,0,u):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:H(r,this,t,e)}:r,[// `String.prototype.split` method
// https://tc39.es/ecma262/#sec-string.prototype.split
function(r,e){var i=ta(this),o=tu(r)?void 0:tP(r,t);return o?H(o,r,i,e):H(n,eo(i),r,e)},// `RegExp.prototype[@@split]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(t,i){var o=re(this),a=eo(t),u=e(n,o,a,i,n!==r);if(u.done)return u.value;var s=cN(o,RegExp),c=o.unicode,f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(vr?"g":"y"),h=new s(vr?"^(?:"+o.source+")":o,f),l=void 0===i?4294967295:i>>>0;if(0===l)return[];if(0===a.length)return null===lU(h,a)?[a]:[];for(var v=0,p=0,d=[];p<a.length;){h.lastIndex=vr?0:p;var g,y=lU(h,vr?va(a,p):a);if(null===y||(g=ve(r0(h.lastIndex+(vr?p:0)),a.length))===v)p=lF(a,p,c);else{if(vo(d,va(a,v,p)),d.length===l)return d;for(var m=1;m<=y.length-1;m++)if(vo(d,y[m]),d.length===l)return d;p=v=g}}return vo(d,va(a,v)),d}]},!!q(function(){// eslint-disable-next-line regexp/no-empty-group -- required for testing
var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),vr);var vu=az,vs=eH("".startsWith),vc=eH("".slice),vf=Math.min,vh=ld("startsWith"),vl=!tB&&!vh&&!!((n=vu(String.prototype,"startsWith"))&&!n.writable);// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
C({target:"String",proto:!0,forced:!vl&&!vh},{startsWith:function(t/* , position = 0 */){var r=eo(ta(this));lv(t);var e=r0(vf(arguments.length>1?arguments[1]:void 0,r.length)),n=eo(t);return vs?vs(r,n,e):vc(r,e,e+n.length)===n}});var vv=sv.trim,vp={},vd=rv.PROPER,vg="​\x85᠎";// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
C({target:"String",proto:!0,forced:// check that a method works with the correct list
// of whitespaces and has a correct name
(vp=function(t){return q(function(){return!!sp[t]()||vg[t]()!==vg||vd&&sp[t].name!==t})})("trim")},{trim:function(){return vv(this)}});var vy={},vm=sv.end;// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
vy=vp("trimEnd")?function(){return vm(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimEnd,// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
C({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==vy},{trimRight:vy}),// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
C({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==vy},{trimEnd:vy});var vb={},vw=sv.start;// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
vb=vp("trimStart")?function(){return vw(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimStart,// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
C({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==vb},{trimLeft:vb}),// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
C({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==vb},{trimStart:vb});var vS={},vE=/"/g,vx=X("".replace);// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
vS=function(t,r,e,n){var i=eo(ta(t)),o="<"+r;return""!==e&&(o+=" "+e+'="'+vx(eo(n),vE,"&quot;")+'"'),o+">"+i+"</"+r+">"};var vA={};// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
C({target:"String",proto:!0,forced:// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
(vA=function(t){return q(function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3})})("anchor")},{anchor:function(t){return vS(this,"a","name",t)}}),// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
C({target:"String",proto:!0,forced:vA("big")},{big:function(){return vS(this,"big","","")}}),// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
C({target:"String",proto:!0,forced:vA("blink")},{blink:function(){return vS(this,"blink","","")}}),// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
C({target:"String",proto:!0,forced:vA("bold")},{bold:function(){return vS(this,"b","","")}}),// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
C({target:"String",proto:!0,forced:vA("fixed")},{fixed:function(){return vS(this,"tt","","")}}),// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
C({target:"String",proto:!0,forced:vA("fontcolor")},{fontcolor:function(t){return vS(this,"font","color",t)}}),// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
C({target:"String",proto:!0,forced:vA("fontsize")},{fontsize:function(t){return vS(this,"font","size",t)}}),// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
C({target:"String",proto:!0,forced:vA("italics")},{italics:function(){return vS(this,"i","","")}}),// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
C({target:"String",proto:!0,forced:vA("link")},{link:function(t){return vS(this,"a","href",t)}}),// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
C({target:"String",proto:!0,forced:vA("small")},{small:function(){return vS(this,"small","","")}}),// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
C({target:"String",proto:!0,forced:vA("strike")},{strike:function(){return vS(this,"strike","","")}}),// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
C({target:"String",proto:!0,forced:vA("sub")},{sub:function(){return vS(this,"sub","","")}}),// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
C({target:"String",proto:!0,forced:vA("sup")},{sup:function(){return vS(this,"sup","","")}});var vO={},v_={},vT={},vR=rS.enforce,vj=rS.get,vM=z.Int8Array,vP=vM&&vM.prototype,vI=z.Uint8ClampedArray,vk=vI&&vI.prototype,vL=vM&&iZ(vM),vF=vP&&iZ(vP),vN=Object.prototype,vU=z.TypeError,vC=tC("toStringTag"),vz=tK("TYPED_ARRAY_TAG"),vB="TypedArrayConstructor",vD=o0&&!!i7&&"Opera"!==ea(z.opera),vq=!1,vH={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},vG={BigInt64Array:8,BigUint64Array:8},vW=function(t){var r=iZ(t);if(th(r)){var e=vj(r);return e&&tW(e,vB)?e[vB]:vW(r)}},vV=function(t){if(!th(t))return!1;var r=ea(t);return tW(vH,r)||tW(vG,r)};for(x in vH)(O=(A=z[x])&&A.prototype)?vR(O)[vB]=A:vD=!1;for(x in vG)(O=(A=z[x])&&A.prototype)&&(vR(O)[vB]=A);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!vD||!tl(vL)||vL===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
vL=function(){throw new vU("Incorrect invocation")},vD))for(x in vH)z[x]&&i7(z[x],vL);if((!vD||!vF||vF===vN)&&(vF=vL.prototype,vD))for(x in vH)z[x]&&i7(z[x].prototype,vF);if(vD&&iZ(vk)!==vF&&i7(vk,vF),D&&!tW(vF,vC))for(x in vq=!0,ek(vF,vC,{configurable:!0,get:function(){return th(this)?this[vz]:void 0}}),vH)z[x]&&rt(z[x],vz,x);var v$=(vT={NATIVE_ARRAY_BUFFER_VIEWS:vD,TYPED_ARRAY_TAG:vq&&vz,aTypedArray:function(t){if(vV(t))return t;throw new vU("Target is not a typed array")},aTypedArrayConstructor:function(t){if(tl(t)&&(!i7||tw(vL,t)))return t;throw new vU(tk(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(D){if(e)for(var i in vH){var o=z[i];if(o&&tW(o.prototype,t))try{delete o.prototype[t]}catch(e){// old WebKit bug - some methods are non-configurable
try{o.prototype[t]=r}catch(t){}}}(!vF[t]||e)&&rh(vF,t,e?r:vD&&vP[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,i;if(D){if(i7){if(e){for(n in vH)if((i=z[n])&&tW(i,t))try{delete i[t]}catch(t){}}if(vL[t]&&!e)return;try{return rh(vL,t,e?r:vD&&vL[t]||r)}catch(t){}}for(n in vH)(i=z[n])&&(!i[t]||e)&&rh(i,t,r)}},getTypedArrayConstructor:vW,isView:function(t){if(!th(t))return!1;var r=ea(t);return"DataView"===r||tW(vH,r)||tW(vG,r)},isTypedArray:vV,TypedArray:vL,TypedArrayPrototype:vF}).NATIVE_ARRAY_BUFFER_VIEWS,vY=z.ArrayBuffer,vK=z.Int8Array;v_=!v$||!q(function(){vK(1)})||!q(function(){new vK(-1)})||!iB(function(t){new vK,new vK(null),new vK(1.5),new vK(t)},!0)||q(function(){// Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
return 1!==new vK(new vY(2),1,void 0).length});var vJ={},vX={},vQ=RangeError;vX=function(t){var r=r$(t);if(r<0)throw new vQ("The argument can't be less than 0");return r};var vZ=RangeError;vJ=function(t,r){var e=vX(t);if(e%r)throw new vZ("Wrong offset");return e};var v0={},v1=Math.round;v0=function(t){var r=v1(t);return r<0?0:r>255?255:255&r};var v2=a$,v5={},v6={};v6=function(t){var r=ea(t);return"BigInt64Array"===r||"BigUint64Array"===r};var v4=vT.aTypedArrayConstructor,v3={},v8=TypeError;// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
v3=function(t){var r=tf(t,"number");if("number"==typeof r)throw new v8("Can't convert number to bigint");// eslint-disable-next-line es/no-bigint -- safe
return BigInt(r)},v5=function(t/* , mapfn, thisArg */){var r,e,n,i,o,a,u,s,c=cU(this),f=tV(t),h=arguments.length,l=h>1?arguments[1]:void 0,v=void 0!==l,p=iN(f);if(p&&!iP(p))for(s=(u=iF(f,p)).next,f=[];!(a=H(s,u)).done;)f.push(a.value);for(v&&h>2&&(l=eq(l,arguments[2])),e=rZ(f),n=new(v4(c))(e),i=v6(n),r=0;e>r;r++)o=v?l(f[r],r):f[r],// FF30- typed arrays doesn't properly convert objects to typed array values
n[r]=i?v3(o):+o;return n};var v7=eD.forEach,v9=rS.get,pt=rS.set,pr=rS.enforce,pe=aH,pn=az,pi=z.RangeError,po=oZ.ArrayBuffer,pa=po.prototype,pu=oZ.DataView,ps=vT.NATIVE_ARRAY_BUFFER_VIEWS,pc=vT.TYPED_ARRAY_TAG,pf=vT.TypedArray,ph=vT.TypedArrayPrototype,pl=vT.aTypedArrayConstructor,pv=vT.isTypedArray,pp="BYTES_PER_ELEMENT",pd="Wrong length",pg=function(t,r){pl(t);for(var e=0,n=r.length,i=new t(n);n>e;)i[e]=r[e++];return i},py=function(t,r){ek(t,r,{configurable:!0,get:function(){return v9(this)[r]}})},pm=function(t){var r;return tw(pa,t)||"ArrayBuffer"===(r=ea(t))||"SharedArrayBuffer"===r},pb=function(t,r){return pv(t)&&!tm(r)&&r in t&&sL(+r)&&r>=0},pw=function(t,r){return pb(t,r=tc(r))?Y(2,t[r]):pn(t,r)},pS=function(t,r,e){return pb(t,r=tc(r))&&th(e)&&tW(e,"value")&&!tW(e,"get")&&!tW(e,"set")&&!e.configurable&&(!tW(e,"writable")||e.writable)&&(!tW(e,"enumerable")||e.enumerable)?(t[r]=e.value,t):pe(t,r,e)};D?(ps||(az=pw,aH=pS,py(ph,"buffer"),py(ph,"byteOffset"),py(ph,"byteLength"),py(ph,"length")),C({target:"Object",stat:!0,forced:!ps},{getOwnPropertyDescriptor:pw,defineProperty:pS}),vO=function(t,r,e){var n=t.match(/\d+/)[0]/8,i=t+(e?"Clamped":"")+"Array",o="get"+t,a="set"+t,u=z[i],s=u,c=s&&s.prototype,f={},h=function(t,r){var e=v9(t);return e.view[o](r*n+e.byteOffset,!0)},l=function(t,r,i){var o=v9(t);o.view[a](r*n+o.byteOffset,e?v0(i):i,!0)},v=function(t,r){pe(t,r,{get:function(){return h(this,r)},set:function(t){return l(this,r,t)},enumerable:!0})};ps?v_&&(s=r(function(t,r,e,i){return o2(t,c),uT(th(r)?pm(r)?void 0!==i?new u(r,vJ(e,n),i):void 0!==e?new u(r,vJ(e,n)):new u(r):pv(r)?pg(s,r):H(v5,s,r):new u(o6(r)),t,s)}),i7&&i7(s,pf),v7(v2(u),function(t){t in s||rt(s,t,u[t])}),s.prototype=c):(s=r(function(t,r,e,i){o2(t,c);var o,a,u,f=0,h=0;if(th(r)){if(pm(r)){o=r,h=vJ(e,n);var l=r.byteLength;if(void 0===i){if(l%n||(a=l-h)<0)throw new pi(pd)}else if((a=r0(i)*n)+h>l)throw new pi(pd);u=a/n}else if(pv(r))return pg(s,r);else return H(v5,s,r)}else a=(u=o6(r))*n,o=new po(a);for(pt(t,{buffer:o,byteOffset:h,byteLength:a,length:u,view:new pu(o)});f<u;)v(t,f++)}),i7&&i7(s,pf),c=s.prototype=ed(ph)),c.constructor!==s&&rt(c,"constructor",s),pr(c).TypedArrayConstructor=s,pc&&rt(c,pc,i);var p=s!==u;f[i]=s,C({global:!0,constructor:!0,forced:p,sham:!ps},f),pp in s||rt(s,pp,n),pp in c||rt(c,pp,n),oW(i)}):vO=function(){},// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Float32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Float64",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Int8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Int16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Int32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}},!0),// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Uint16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vO("Uint32",function(t){return function(r,e,n){return t(this,r,e,n)}});var pE=X(is),px=vT.aTypedArray;// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
(0,vT.exportTypedArrayMethod)("copyWithin",function(t,r/* , end */){return pE(px(this),t,r,arguments.length>2?arguments[2]:void 0)});var pA=eD.every,pO=vT.aTypedArray;// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
(0,vT.exportTypedArrayMethod)("every",function(t/* , thisArg */){return pA(pO(this),t,arguments.length>1?arguments[1]:void 0)});var p_=vT.aTypedArray,pT=vT.exportTypedArrayMethod,pR=X("".slice);// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
pT("fill",function(t/* , start, end */){var r=arguments.length;p_(this);var e="Big"===pR(ea(this),0,3)?v3(t):+t;return H(iy,this,e,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)},q(function(){var t=0;return(// eslint-disable-next-line es/no-typed-arrays -- safe
new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t)}));var pj=eD.filter,pM={},pP={};pP=function(t,r){for(var e=0,n=rZ(r),i=new t(n);n>e;)i[e]=r[e++];return i};var pI={},pk=vT.aTypedArrayConstructor,pL=vT.getTypedArrayConstructor;// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
pI=function(t){return pk(cN(t,pL(t)))},pM=function(t,r){return pP(pI(t),r)};var pF=vT.aTypedArray;// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
(0,vT.exportTypedArrayMethod)("filter",function(t/* , thisArg */){var r=pj(pF(this),t,arguments.length>1?arguments[1]:void 0);return pM(this,r)});var pN=eD.find,pU=vT.aTypedArray;// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
(0,vT.exportTypedArrayMethod)("find",function(t/* , thisArg */){return pN(pU(this),t,arguments.length>1?arguments[1]:void 0)});var pC=eD.findIndex,pz=vT.aTypedArray;// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
(0,vT.exportTypedArrayMethod)("findIndex",function(t/* , thisArg */){return pC(pz(this),t,arguments.length>1?arguments[1]:void 0)});var pB=eD.forEach,pD=vT.aTypedArray;// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
(0,vT.exportTypedArrayMethod)("forEach",function(t/* , thisArg */){pB(pD(this),t,arguments.length>1?arguments[1]:void 0)}),// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
(0,vT.exportTypedArrayStaticMethod)("from",v5,v_);var pq=rW.includes,pH=vT.aTypedArray;// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
(0,vT.exportTypedArrayMethod)("includes",function(t/* , fromIndex */){return pq(pH(this),t,arguments.length>1?arguments[1]:void 0)});var pG=rW.indexOf,pW=vT.aTypedArray;// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
(0,vT.exportTypedArrayMethod)("indexOf",function(t/* , fromIndex */){return pG(pW(this),t,arguments.length>1?arguments[1]:void 0)});var pV=tC("iterator"),p$=z.Uint8Array,pY=X(iY.values),pK=X(iY.keys),pJ=X(iY.entries),pX=vT.aTypedArray,pQ=vT.exportTypedArrayMethod,pZ=p$&&p$.prototype,p0=!q(function(){pZ[pV].call([1])}),p1=!!pZ&&pZ.values&&pZ[pV]===pZ.values&&"values"===pZ.values.name,p2=function(){return pY(pX(this))};// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
pQ("entries",function(){return pJ(pX(this))},p0),// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
pQ("keys",function(){return pK(pX(this))},p0),// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
pQ("values",p2,p0||!p1,{name:"values"}),// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
pQ(pV,p2,p0||!p1,{name:"values"});var p5=vT.aTypedArray,p6=vT.exportTypedArrayMethod,p4=X([].join);// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
p6("join",function(t){return p4(p5(this),t)});var p3={},p8=Math.min,p7=[].lastIndexOf,p9=!!p7&&1/[1].lastIndexOf(1,-0)<0,dt=oy("lastIndexOf");// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
p3=p9||!dt?function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(p9)return nP(p7,this,arguments)||0;var r=K(this),e=rZ(r),n=e-1;for(arguments.length>1&&(n=p8(n,r$(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return -1}:p7;var dr=vT.aTypedArray;// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
(0,vT.exportTypedArrayMethod)("lastIndexOf",function(t/* , fromIndex */){var r=arguments.length;return nP(p3,dr(this),r>1?[t,arguments[1]]:[t])});var de=eD.map,dn=vT.aTypedArray;// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
(0,vT.exportTypedArrayMethod)("map",function(t/* , thisArg */){return de(dn(this),t,arguments.length>1?arguments[1]:void 0,function(t,r){return new(pI(t))(r)})});var di=vT.aTypedArrayConstructor;// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
(0,vT.exportTypedArrayStaticMethod)("of",function(){for(var t=0,r=arguments.length,e=new(di(this))(r);r>t;)e[t]=arguments[t++];return e},v_);var da={},du=TypeError,ds=function(t){return function(r,e,n,i){tI(e);var o=tV(r),a=J(o),u=rZ(o),s=t?u-1:0,c=t?-1:1;if(n<2)for(;;){if(s in a){i=a[s],s+=c;break}if(s+=c,t?s<0:u<=s)throw new du("Reduce of empty array with no initial value")}for(;t?s>=0:u>s;s+=c)s in a&&(i=e(i,a[s],s,o));return i}},dc=(da={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:ds(!1),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:ds(!0)}).left,df=vT.aTypedArray;// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
(0,vT.exportTypedArrayMethod)("reduce",function(t/* , initialValue */){var r=arguments.length;return dc(df(this),t,r,r>1?arguments[1]:void 0)});var dh=da.right,dl=vT.aTypedArray;// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
(0,vT.exportTypedArrayMethod)("reduceRight",function(t/* , initialValue */){var r=arguments.length;return dh(dl(this),t,r,r>1?arguments[1]:void 0)});var dv=vT.aTypedArray,dp=vT.exportTypedArrayMethod,dd=Math.floor;// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
dp("reverse",function(){for(var t,r=dv(this).length,e=dd(r/2),n=0;n<e;)t=this[n],this[n++]=this[--r],this[r]=t;return this});var dg=z.RangeError,dy=z.Int8Array,dm=dy&&dy.prototype,db=dm&&dm.set,dw=vT.aTypedArray,dS=vT.exportTypedArrayMethod,dE=!q(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var t=new Uint8ClampedArray(2);return H(db,t,{length:1,0:3},1),3!==t[1]}),dx=dE&&vT.NATIVE_ARRAY_BUFFER_VIEWS&&q(function(){var t=new dy(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
dS("set",function(t/* , offset */){dw(this);var r=vJ(arguments.length>1?arguments[1]:void 0,1),e=tV(t);if(dE)return H(db,this,e,r);var n=this.length,i=rZ(e),o=0;if(i+r>n)throw new dg("Wrong length");for(;o<i;)this[r+o]=e[o++]},!dE||dx);var dA=vT.aTypedArray;// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
(0,vT.exportTypedArrayMethod)("slice",function(t,r){for(var e=nF(dA(this),t,r),n=pI(this),i=0,o=e.length,a=new n(o);o>i;)a[i]=e[i++];return a},q(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
new Int8Array(1).slice()}));var dO=eD.some,d_=vT.aTypedArray;// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
(0,vT.exportTypedArrayMethod)("some",function(t/* , thisArg */){return dO(d_(this),t,arguments.length>1?arguments[1]:void 0)});var dT=vT.aTypedArray,dR=vT.exportTypedArrayMethod,dj=z.Uint16Array,dM=dj&&eH(dj.prototype.sort),dP=!!dM&&!(q(function(){dM(new dj(2),null)})&&q(function(){dM(new dj(2),{})})),dI=!!dM&&!q(function(){// feature detection can be too slow, so check engines versions
if(tx)return tx<74;if(ok)return ok<67;if(oF)return!0;if(oN)return oN<602;var t,r,e=new dj(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(dM(e,function(t,r){return(t/4|0)-(r/4|0)}),t=0;t<516;t++)if(e[t]!==n[t])return!0});// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
dR("sort",function(t){return(void 0!==t&&tI(t),dI)?dM(this,t):oR(dT(this),function(r,e){return void 0!==t?+t(r,e)||0:e!=e?-1:r!=r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e})},!dI||dP);var dk=vT.aTypedArray;// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
(0,vT.exportTypedArrayMethod)("subarray",function(t,r){var e=dk(this),n=e.length,i=rV(t,n);return new(pI(e))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,r0((void 0===r?n:rV(r,n))-i))});var dL=z.Int8Array,dF=vT.aTypedArray,dN=vT.exportTypedArrayMethod,dU=[].toLocaleString,dC=!!dL&&q(function(){dU.call(new dL(1))});// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
dN("toLocaleString",function(){return nP(dU,dC?nF(dF(this)):dF(this),nF(arguments))},q(function(){return[1,2].toLocaleString()!==new dL([1,2]).toLocaleString()})||!q(function(){dL.prototype.toLocaleString.call([1,2])}));var dz=vT.exportTypedArrayMethod,dB=z.Uint8Array,dD=dB&&dB.prototype||{},dq=[].toString,dH=X([].join);q(function(){dq.call({})})&&(dq=function(){return dH(this)});var dG=dD.toString!==dq;// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
dz("toString",dq,dG);var dW={},dV=ul.getWeakData,d$=rS.set,dY=rS.getterFor,dK=eD.find,dJ=eD.findIndex,dX=X([].splice),dQ=0,dZ=function(t){return t.frozen||(t.frozen=new d0)},d0=function(){this.entries=[]},d1=function(t,r){return dK(t.entries,function(t){return t[0]===r})};d0.prototype={get:function(t){var r=d1(this,t);if(r)return r[1]},has:function(t){return!!d1(this,t)},set:function(t,r){var e=d1(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=dJ(this.entries,function(r){return r[0]===t});return~r&&dX(this.entries,r,1),!!~r}},dW={getConstructor:function(t,r,e,n){var i=t(function(t,i){o2(t,o),d$(t,{type:r,id:dQ++,frozen:void 0}),tu(i)||ux(i,t[n],{that:t,AS_ENTRIES:e})}),o=i.prototype,a=dY(r),u=function(t,r,e){var n=a(t),i=dV(re(r),!0);return!0===i?dZ(n).set(r,e):i[n.id]=e,t};return o1(o,{// `{ WeakMap, WeakSet }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.delete
// https://tc39.es/ecma262/#sec-weakset.prototype.delete
delete:function(t){var r=a(this);if(!th(t))return!1;var e=dV(t);return!0===e?dZ(r).delete(t):e&&tW(e,r.id)&&delete e[r.id]},// `{ WeakMap, WeakSet }.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.has
// https://tc39.es/ecma262/#sec-weakset.prototype.has
has:function(t){var r=a(this);if(!th(t))return!1;var e=dV(t);return!0===e?dZ(r).has(t):e&&tW(e,r.id)}}),o1(o,e?{// `WeakMap.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.get
get:function(t){var r=a(this);if(th(t)){var e=dV(t);return!0===e?dZ(r).get(t):e?e[r.id]:void 0}},// `WeakMap.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.set
set:function(t,r){return u(this,t,r)}}:{// `WeakSet.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-weakset.prototype.add
add:function(t){return u(this,t,!0)}}),i}};var d2=rS.enforce,d5=Object,d6=Array.isArray,d4=d5.isExtensible,d3=d5.isFrozen,d8=d5.isSealed,d7=d5.freeze,d9=d5.seal,gt={},gr={},ge=!z.ActiveXObject&&"ActiveXObject"in z,gn=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},gi=uh("WeakMap",gn,dW),go=gi.prototype,ga=X(go.set);// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if(rE){if(ge){_=dW.getConstructor(gn,"WeakMap",!0),ul.enable();var gu=X(go.delete),gs=X(go.has),gc=X(go.get);o1(go,{delete:function(t){if(th(t)&&!d4(t)){var r=d2(this);return r.frozen||(r.frozen=new _),gu(this,t)||r.frozen.delete(t)}return gu(this,t)},has:function(t){if(th(t)&&!d4(t)){var r=d2(this);return r.frozen||(r.frozen=new _),gs(this,t)||r.frozen.has(t)}return gs(this,t)},get:function(t){if(th(t)&&!d4(t)){var r=d2(this);return r.frozen||(r.frozen=new _),gs(this,t)?gc(this,t):r.frozen.get(t)}return gc(this,t)},set:function(t,r){if(th(t)&&!d4(t)){var e=d2(this);e.frozen||(e.frozen=new _),gs(this,t)?ga(this,t,r):e.frozen.set(t,r)}else ga(this,t,r);return this}});// Chakra Edge frozen keys fix
}else uy&&q(function(){var t=d7([]);return ga(new gi,t,1),!d3(t)})&&o1(go,{set:function(t,r){var e;return d6(t)&&(d3(t)?e=gt:d8(t)&&(e=gr)),ga(this,t,r),e===gt&&d7(t),e===gr&&d9(t),this}})}// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
uh("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},dW);var gf={};// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
gf={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var gh={},gl=t4("span").classList,gv=gl&&gl.constructor&&gl.constructor.prototype;gh=gv===Object.prototype?void 0:gv;var gp={},gd=eD.forEach;// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
gp=oy("forEach")?[].forEach:function(t/* , thisArg */){return gd(this,t,arguments.length>1?arguments[1]:void 0);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
};var gg=function(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t&&t.forEach!==gp)try{rt(t,"forEach",gp)}catch(r){t.forEach=gp}};for(var gy in gf)gf[gy]&&gg(z[gy]&&z[gy].prototype);gg(gh);var gm=tC("iterator"),gb=tC("toStringTag"),gw=iY.values,gS=function(t,r){if(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t[gm]!==gw)try{rt(t,gm,gw)}catch(r){t[gm]=gw}if(t[gb]||rt(t,gb,r),gf[r]){for(var e in iY)// some Chrome versions have non-configurable methods on DOMTokenList
if(t[e]!==iY[e])try{rt(t,e,iY[e])}catch(r){t[e]=iY[e]}}}};for(var gE in gf)gS(z[gE]&&z[gE].prototype,gE);gS(gh,"DOMTokenList");var gx=z.process;// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
C({global:!0,enumerable:!0,dontCallGetSet:!0},{queueMicrotask:function(t){cD(arguments.length,1),tI(t);var r=cF&&gx.domain;c4(r?r.bind(t):t)}});var gA={},gO=tC("iterator");gA=!q(function(){// eslint-disable-next-line unicorn/relative-url-style -- required for testing
var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,e=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",r.forEach(function(t,e){r.delete("b"),n+=e+t}),e.delete("a",2),// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
e.delete("b",void 0),tB&&(!t.toJSON||!e.has("a",1)||e.has("a",2)||!e.has("a",void 0)||e.has("b"))||!r.size&&(tB||!D)||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[gO]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host});var g_=la.codeAt,gT={},gR=/[^\0-\u007E]/,gj=/[.\u3002\uFF0E\uFF61]/g,gM="Overflow: input needs wider integers to process",gP=RangeError,gI=X(gj.exec),gk=Math.floor,gL=String.fromCharCode,gF=X("".charCodeAt),gN=X([].join),gU=X([].push),gC=X("".replace),gz=X("".split),gB=X("".toLowerCase),gD=function(t){for(var r=[],e=0,n=t.length;e<n;){var i=gF(t,e++);if(i>=55296&&i<=56319&&e<n){// It's a high surrogate, and there is a next character.
var o=gF(t,e++);(64512&o)==56320?gU(r,((1023&i)<<10)+(1023&o)+65536):(// It's an unmatched surrogate; only append this code unit, in case the
// next code unit is the high surrogate of a surrogate pair.
gU(r,i),e--)}else gU(r,i)}return r},gq=function(t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)},gH=function(t,r,e){var n=0;for(t=e?gk(t/700):t>>1,t+=gk(t/r);t>455;)t=gk(t/35),n+=36;return gk(n+36*t/(t+38))},gG=function(t){var r,e,n=[],i=// Convert the input in UCS-2 to an array of Unicode code points.
(t=gD(t)).length,o=128,a=0,u=72;// Handle the basic code points.
for(r=0;r<t.length;r++)(e=t[r])<128&&gU(n,gL(e));var s=n.length,c=s;// number of basic code points.
// Main encoding loop:
for(s&&gU(n,"-");c<i;){// All non-basic code points < n have been handled already. Find the next larger one:
var f=2147483647;for(r=0;r<t.length;r++)(e=t[r])>=o&&e<f&&(f=e);// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
var h=c+1;if(f-o>gk((2147483647-a)/h))throw new gP(gM);for(a+=(f-o)*h,o=f,r=0;r<t.length;r++){if((e=t[r])<o&&++a>2147483647)throw new gP(gM);if(e===o){for(// Represent delta as a generalized variable-length integer.
var l=a,v=36;;){var p=v<=u?1:v>=u+26?26:v-u;if(l<p)break;var d=l-p,g=36-p;gU(n,gL(gq(p+d%g))),l=gk(d/g),v+=36}gU(n,gL(gq(l))),u=gH(a,h,c===s),a=0,c++}}a++,o++}return gN(n,"")};gT=function(t){var r,e,n=[],i=gz(gC(gB(t),gj,"."),".");for(r=0;r<i.length;r++)gU(n,gI(gR,e=i[r])?"xn--"+gG(e):e);return gN(n,".")};var gW={},gV=tC("iterator"),g$="URLSearchParams",gY=g$+"Iterator",gK=rS.set,gJ=rS.getterFor(g$),gX=rS.getterFor(gY),gQ=Object.getOwnPropertyDescriptor,gZ=function(t){if(!D)return z[t];var r=gQ(z,t);return r&&r.value},g0=gZ("fetch"),g1=gZ("Request"),g2=gZ("Headers"),g5=g1&&g1.prototype,g6=g2&&g2.prototype,g4=z.RegExp,g3=z.TypeError,g8=z.decodeURIComponent,g7=z.encodeURIComponent,g9=X("".charAt),yt=X([].join),yr=X([].push),ye=X("".replace),yn=X([].shift),yi=X([].splice),yo=X("".split),ya=X("".slice),yu=/\+/g,ys=[,,,,],yc=function(t){try{return g8(t)}catch(r){return t}},yf=function(t){var r,e=ye(t,yu," "),n=4;try{return g8(e)}catch(t){for(;n;)e=ye(e,ys[(r=n--)-1]||(ys[r-1]=g4("((?:%[\\da-f]{2}){"+r+"})","gi")),yc);return e}},yh=/[!'()~]|%20/g,yl={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},yv=function(t){return yl[t]},yp=function(t){return ye(g7(t),yh,yv)},yd=iX(function(t,r){gK(this,{type:gY,iterator:iF(gJ(t).entries),kind:r})},"Iterator",function(){var t=gX(this),r=t.kind,e=t.iterator.next(),n=e.value;return e.done||(e.value="keys"===r?n.key:"values"===r?n.value:[n.key,n.value]),e},!0),yg=function(t){this.entries=[],this.url=null,void 0!==t&&(th(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===g9(t,0)?ya(t,1):t:eo(t)))};yg.prototype={type:g$,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var r,e,n,i,o,a,u,s=iN(t);if(s)for(e=(r=iF(t,s)).next;!(n=H(e,r)).done;){if(o=(i=iF(re(n.value))).next,(a=H(o,i)).done||(u=H(o,i)).done||!H(o,i).done)throw new g3("Expected sequence with length 2");yr(this.entries,{key:eo(a.value),value:eo(u.value)})}else for(var c in t)tW(t,c)&&yr(this.entries,{key:c,value:eo(t[c])})},parseQuery:function(t){if(t)for(var r,e,n=yo(t,"&"),i=0;i<n.length;)(r=n[i++]).length&&(e=yo(r,"="),yr(this.entries,{key:yf(yn(e)),value:yf(yt(e,"="))}))},serialize:function(){for(var t,r=this.entries,e=[],n=0;n<r.length;)yr(e,yp((t=r[n++]).key)+"="+yp(t.value));return yt(e,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var yy=function(){o2(this,ym);var t=arguments.length>0?arguments[0]:void 0,r=gK(this,new yg(t));D||(this.size=r.entries.length)},ym=yy.prototype;// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if(o1(ym,{// `URLSearchParams.prototype.append` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-append
append:function(t,r){var e=gJ(this);cD(arguments.length,2),yr(e.entries,{key:eo(t),value:eo(r)}),!D&&this.length++,e.updateURL()},// `URLSearchParams.prototype.delete` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-delete
delete:function(t/* , value */){for(var r=gJ(this),e=cD(arguments.length,1),n=r.entries,i=eo(t),o=e<2?void 0:arguments[1],a=void 0===o?o:eo(o),u=0;u<n.length;){var s=n[u];if(s.key===i&&(void 0===a||s.value===a)){if(yi(n,u,1),void 0!==a)break}else u++}D||(this.size=n.length),r.updateURL()},// `URLSearchParams.prototype.get` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-get
get:function(t){var r=gJ(this).entries;cD(arguments.length,1);for(var e=eo(t),n=0;n<r.length;n++)if(r[n].key===e)return r[n].value;return null},// `URLSearchParams.prototype.getAll` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-getall
getAll:function(t){var r=gJ(this).entries;cD(arguments.length,1);for(var e=eo(t),n=[],i=0;i<r.length;i++)r[i].key===e&&yr(n,r[i].value);return n},// `URLSearchParams.prototype.has` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-has
has:function(t/* , value */){for(var r=gJ(this).entries,e=cD(arguments.length,1),n=eo(t),i=e<2?void 0:arguments[1],o=void 0===i?i:eo(i),a=0;a<r.length;){var u=r[a++];if(u.key===n&&(void 0===o||u.value===o))return!0}return!1},// `URLSearchParams.prototype.set` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-set
set:function(t,r){var e,n=gJ(this);cD(arguments.length,1);for(var i=n.entries,o=!1,a=eo(t),u=eo(r),s=0;s<i.length;s++)(e=i[s]).key===a&&(o?yi(i,s--,1):(o=!0,e.value=u));o||yr(i,{key:a,value:u}),D||(this.size=i.length),n.updateURL()},// `URLSearchParams.prototype.sort` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-sort
sort:function(){var t=gJ(this);oR(t.entries,function(t,r){return t.key>r.key?1:-1}),t.updateURL()},// `URLSearchParams.prototype.forEach` method
forEach:function(t/* , thisArg */){for(var r,e=gJ(this).entries,n=eq(t,arguments.length>1?arguments[1]:void 0),i=0;i<e.length;)n((r=e[i++]).value,r.key,this)},// `URLSearchParams.prototype.keys` method
keys:function(){return new yd(this,"keys")},// `URLSearchParams.prototype.values` method
values:function(){return new yd(this,"values")},// `URLSearchParams.prototype.entries` method
entries:function(){return new yd(this,"entries")}},{enumerable:!0}),// `URLSearchParams.prototype[@@iterator]` method
rh(ym,gV,ym.entries,{name:"entries"}),// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
rh(ym,"toString",function(){return gJ(this).serialize()},{enumerable:!0}),D&&ek(ym,"size",{get:function(){return gJ(this).entries.length},configurable:!0,enumerable:!0}),eC(yy,g$),C({global:!0,constructor:!0,forced:!gA},{URLSearchParams:yy}),!gA&&tl(g2)){var yb=X(g6.has),yw=X(g6.set),yS=function(t){if(th(t)){var r,e=t.body;if(ea(e)===g$)return yb(r=t.headers?new g2(t.headers):new g2,"content-type")||yw(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),ed(t,{body:Y(0,eo(e)),headers:Y(0,r)})}return t};if(tl(g0)&&C({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t/* , init */){return g0(t,arguments.length>1?yS(arguments[1]):{})}}),tl(g1)){var yE=function(t/* , init */){return o2(this,g5),new g1(t,arguments.length>1?yS(arguments[1]):{})};g5.constructor=yE,yE.prototype=g5,C({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:yE})}}gW={URLSearchParams:yy,getState:gJ};var yx=rS.set,yA=rS.getterFor("URL"),yO=gW.URLSearchParams,y_=gW.getState,yT=z.URL,yR=z.TypeError,yj=z.parseInt,yM=Math.floor,yP=Math.pow,yI=X("".charAt),yk=X(/./.exec),yL=X([].join),yF=X(1..toString),yN=X([].pop),yU=X([].push),yC=X("".replace),yz=X([].shift),yB=X("".split),yD=X("".slice),yq=X("".toLowerCase),yH=X([].unshift),yG="Invalid scheme",yW="Invalid host",yV="Invalid port",y$=/[a-z]/i,yY=/[\d+-.a-z]/i,yK=/\d/,yJ=/^0x/i,yX=/^[0-7]+$/,yQ=/^\d+$/,yZ=/^[\da-f]+$/i,y0=/[\0\t\n\r #%/:<>?@[\\\]^|]/,y1=/[\0\t\n\r #/:<>?@[\\\]^|]/,y2=/^[\u0000-\u0020]+/,y5=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,y6=/[\t\n\r]/g,y4=function(t){var r,e,n,i,o,a,u,s=yB(t,".");if(s.length&&""===s[s.length-1]&&s.length--,(r=s.length)>4)return t;for(n=0,e=[];n<r;n++){if(""===(i=s[n]))return t;if(o=10,i.length>1&&"0"===yI(i,0)&&(o=yk(yJ,i)?16:8,i=yD(i,8===o?1:2)),""===i)a=0;else{if(!yk(10===o?yQ:8===o?yX:yZ,i))return t;a=yj(i,o)}yU(e,a)}for(n=0;n<r;n++)if(a=e[n],n===r-1){if(a>=yP(256,5-r))return null}else if(a>255)return null;for(n=0,u=yN(e);n<e.length;n++)u+=e[n]*yP(256,3-n);return u},y3=function(t){var r,e,n,i,o,a,u,s=[0,0,0,0,0,0,0,0],c=0,f=null,h=0,l=function(){return yI(t,h)};if(":"===l()){if(":"!==yI(t,1))return;h+=2,f=++c}for(;l();){if(8===c)return;if(":"===l()){if(null!==f)return;h++,f=++c;continue}for(r=e=0;e<4&&yk(yZ,l());)r=16*r+yj(l(),16),h++,e++;if("."===l()){if(0===e||(h-=e,c>6))return;for(n=0;l();){if(i=null,n>0){if("."!==l()||!(n<4))return;h++}if(!yk(yK,l()))return;for(;yk(yK,l());){if(o=yj(l(),10),null===i)i=o;else{if(0===i)return;i=10*i+o}if(i>255)return;h++}s[c]=256*s[c]+i,(2==++n||4===n)&&c++}if(4!==n)return;break}if(":"===l()){if(h++,!l())return}else if(l())return;s[c++]=r}if(null!==f)for(a=c-f,c=7;0!==c&&a>0;)u=s[c],s[c--]=s[f+a-1],s[f+--a]=u;else if(8!==c)return;return s},y8=function(t){for(var r=null,e=1,n=null,i=0,o=0;o<8;o++)0!==t[o]?(i>e&&(r=n,e=i),n=null,i=0):(null===n&&(n=o),++i);return i>e&&(r=n,e=i),r},y7=function(t){var r,e,n,i;// ipv4
if("number"==typeof t){for(e=0,r=[];e<4;e++)yH(r,t%256),t=yM(t/256);return yL(r,".");// ipv6
}if("object"==typeof t){for(e=0,r="",n=y8(t);e<8;e++)(!i||0!==t[e])&&(i&&(i=!1),n===e?(r+=e?":":"::",i=!0):(r+=yF(t[e],16),e<7&&(r+=":")));return"["+r+"]"}return t},y9={},mt=ct({},y9,{" ":1,'"':1,"<":1,">":1,"`":1}),mr=ct({},mt,{"#":1,"?":1,"{":1,"}":1}),me=ct({},mr,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),mn=function(t,r){var e=g_(t,0);return e>32&&e<127&&!tW(r,t)?t:encodeURIComponent(t)},mi={ftp:21,file:null,http:80,https:443,ws:80,wss:443},mo=function(t,r){var e;return 2===t.length&&yk(y$,yI(t,0))&&(":"===(e=yI(t,1))||!r&&"|"===e)},ma=function(t){var r;return t.length>1&&mo(yD(t,0,2))&&(2===t.length||"/"===(r=yI(t,2))||"\\"===r||"?"===r||"#"===r)},mu={},ms={},mc={},mf={},mh={},ml={},mv={},mp={},md={},mg={},my={},mm={},mb={},mw={},mS={},mE={},mx={},mA={},mO={},m_={},mT={},mR=function(t,r,e){var n,i,o,a=eo(t);if(r){if(i=this.parse(a))throw new yR(i);this.searchParams=null}else{if(void 0!==e&&(n=new mR(e,!0)),i=this.parse(a,null,n))throw new yR(i);(o=y_(new yO)).bindURL(this),this.searchParams=o}};mR.prototype={type:"URL",// https://url.spec.whatwg.org/#url-parsing
// eslint-disable-next-line max-statements -- TODO
parse:function(t,r,e){var n=r||mu,i=0,o="",a=!1,u=!1,s=!1;for(t=eo(t),r||(this.scheme="",this.username="",this.password="",this.host=null,this.port=null,this.path=[],this.query=null,this.fragment=null,this.cannotBeABaseURL=!1,t=yC(t,y2,""),t=yC(t,y5,"$1")),t=yC(t,y6,""),c=iR(t);i<=c.length;){switch(f=c[i],n){case mu:if(f&&yk(y$,f))o+=yq(f),n=ms;else{if(r)return yG;n=mc;continue}break;case ms:if(f&&(yk(yY,f)||"+"===f||"-"===f||"."===f))o+=yq(f);else if(":"===f){if(r&&(this.isSpecial()!==tW(mi,o)||"file"===o&&(this.includesCredentials()||null!==this.port)||"file"===this.scheme&&!this.host))return;if(this.scheme=o,r){this.isSpecial()&&mi[this.scheme]===this.port&&(this.port=null);return}o="","file"===this.scheme?n=mw:this.isSpecial()&&e&&e.scheme===this.scheme?n=mf:this.isSpecial()?n=mp:"/"===c[i+1]?(n=mh,i++):(this.cannotBeABaseURL=!0,yU(this.path,""),n=mO)}else{if(r)return yG;o="",n=mc,i=0;continue}break;case mc:if(!e||e.cannotBeABaseURL&&"#"!==f)return yG;if(e.cannotBeABaseURL&&"#"===f){this.scheme=e.scheme,this.path=eT(e.path),this.query=e.query,this.fragment="",this.cannotBeABaseURL=!0,n=mT;break}n="file"===e.scheme?mw:ml;continue;case mf:if("/"===f&&"/"===c[i+1])n=md,i++;else{n=ml;continue}break;case mh:if("/"===f){n=mg;break}n=mA;continue;case ml:if(this.scheme=e.scheme,f===T)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eT(e.path),this.query=e.query;else if("/"===f||"\\"===f&&this.isSpecial())n=mv;else if("?"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eT(e.path),this.query="",n=m_;else if("#"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eT(e.path),this.query=e.query,this.fragment="",n=mT;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eT(e.path),this.path.length--,n=mA;continue}break;case mv:if(this.isSpecial()&&("/"===f||"\\"===f))n=md;else if("/"===f)n=mg;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,n=mA;continue}break;case mp:if(n=md,"/"!==f||"/"!==yI(o,i+1))continue;i++;break;case md:if("/"!==f&&"\\"!==f){n=mg;continue}break;case mg:if("@"===f){a&&(o="%40"+o),a=!0,h=iR(o);for(var c,f,h,l,v,p,d=0;d<h.length;d++){var g=h[d];if(":"===g&&!s){s=!0;continue}var y=mn(g,me);s?this.password+=y:this.username+=y}o=""}else if(f===T||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(a&&""===o)return"Invalid authority";i-=iR(o).length+1,o="",n=my}else o+=f;break;case my:case mm:if(r&&"file"===this.scheme){n=mE;continue}if(":"!==f||u){if(f===T||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(this.isSpecial()&&""===o)return yW;if(r&&""===o&&(this.includesCredentials()||null!==this.port))return;if(l=this.parseHost(o))return l;if(o="",n=mx,r)return;continue}"["===f?u=!0:"]"===f&&(u=!1),o+=f}else{if(""===o)return yW;if(l=this.parseHost(o))return l;if(o="",n=mb,r===mm)return}break;case mb:if(yk(yK,f))o+=f;else{if(!(f===T||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial())&&!r)return yV;if(""!==o){var m=yj(o,10);if(m>65535)return yV;this.port=this.isSpecial()&&m===mi[this.scheme]?null:m,o=""}if(r)return;n=mx;continue}break;case mw:if(this.scheme="file","/"===f||"\\"===f)n=mS;else if(e&&"file"===e.scheme)switch(f){case T:this.host=e.host,this.path=eT(e.path),this.query=e.query;break;case"?":this.host=e.host,this.path=eT(e.path),this.query="",n=m_;break;case"#":this.host=e.host,this.path=eT(e.path),this.query=e.query,this.fragment="",n=mT;break;default:ma(yL(eT(c,i),""))||(this.host=e.host,this.path=eT(e.path),this.shortenPath()),n=mA;continue}else{n=mA;continue}break;case mS:if("/"===f||"\\"===f){n=mE;break}e&&"file"===e.scheme&&!ma(yL(eT(c,i),""))&&(mo(e.path[0],!0)?yU(this.path,e.path[0]):this.host=e.host),n=mA;continue;case mE:if(f===T||"/"===f||"\\"===f||"?"===f||"#"===f){if(!r&&mo(o))n=mA;else if(""===o){if(this.host="",r)return;n=mx}else{if(l=this.parseHost(o))return l;if("localhost"===this.host&&(this.host=""),r)return;o="",n=mx}continue}o+=f;break;case mx:if(this.isSpecial()){if(n=mA,"/"!==f&&"\\"!==f)continue}else if(r||"?"!==f){if(r||"#"!==f){if(f!==T&&(n=mA,"/"!==f))continue}else this.fragment="",n=mT}else this.query="",n=m_;break;case mA:if(f===T||"/"===f||"\\"===f&&this.isSpecial()||!r&&("?"===f||"#"===f)){if(".."===(v=yq(v=o))||"%2e."===v||".%2e"===v||"%2e%2e"===v?(this.shortenPath(),"/"===f||"\\"===f&&this.isSpecial()||yU(this.path,"")):"."===(p=o)||"%2e"===yq(p)?"/"===f||"\\"===f&&this.isSpecial()||yU(this.path,""):("file"===this.scheme&&!this.path.length&&mo(o)&&(this.host&&(this.host=""),o=yI(o,0)+":"),yU(this.path,o)),o="","file"===this.scheme&&(f===T||"?"===f||"#"===f))for(;this.path.length>1&&""===this.path[0];)yz(this.path);"?"===f?(this.query="",n=m_):"#"===f&&(this.fragment="",n=mT)}else o+=mn(f,mr);break;case mO:"?"===f?(this.query="",n=m_):"#"===f?(this.fragment="",n=mT):f!==T&&(this.path[0]+=mn(f,y9));break;case m_:r||"#"!==f?f!==T&&("'"===f&&this.isSpecial()?this.query+="%27":"#"===f?this.query+="%23":this.query+=mn(f,y9)):(this.fragment="",n=mT);break;case mT:f!==T&&(this.fragment+=mn(f,mt))}i++}},// https://url.spec.whatwg.org/#host-parsing
parseHost:function(t){var r,e,n;if("["===yI(t,0)){if("]"!==yI(t,t.length-1)||!(r=y3(yD(t,1,-1))))return yW;this.host=r;// opaque host
}else if(this.isSpecial()){if(yk(y0,t=gT(t))||null===(r=y4(t)))return yW;this.host=r}else{if(yk(y1,t))return yW;for(n=0,r="",e=iR(t);n<e.length;n++)r+=mn(e[n],y9);this.host=r}},// https://url.spec.whatwg.org/#cannot-have-a-username-password-port
cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},// https://url.spec.whatwg.org/#include-credentials
includesCredentials:function(){return""!==this.username||""!==this.password},// https://url.spec.whatwg.org/#is-special
isSpecial:function(){return tW(mi,this.scheme)},// https://url.spec.whatwg.org/#shorten-a-urls-path
shortenPath:function(){var t=this.path,r=t.length;r&&("file"!==this.scheme||1!==r||!mo(t[0],!0))&&t.length--},// https://url.spec.whatwg.org/#concept-url-serializer
serialize:function(){var t=this.scheme,r=this.username,e=this.password,n=this.host,i=this.port,o=this.path,a=this.query,u=this.fragment,s=t+":";return null!==n?(s+="//",this.includesCredentials()&&(s+=r+(e?":"+e:"")+"@"),s+=y7(n),null!==i&&(s+=":"+i)):"file"===t&&(s+="//"),s+=this.cannotBeABaseURL?o[0]:o.length?"/"+yL(o,"/"):"",null!==a&&(s+="?"+a),null!==u&&(s+="#"+u),s},// https://url.spec.whatwg.org/#dom-url-href
setHref:function(t){var r=this.parse(t);if(r)throw new yR(r);this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-origin
getOrigin:function(){var t=this.scheme,r=this.port;if("blob"===t)try{return new mj(t.path[0]).origin}catch(t){return"null"}return"file"!==t&&this.isSpecial()?t+"://"+y7(this.host)+(null!==r?":"+r:""):"null"},// https://url.spec.whatwg.org/#dom-url-protocol
getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(eo(t)+":",mu)},// https://url.spec.whatwg.org/#dom-url-username
getUsername:function(){return this.username},setUsername:function(t){var r=iR(eo(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var e=0;e<r.length;e++)this.username+=mn(r[e],me)}},// https://url.spec.whatwg.org/#dom-url-password
getPassword:function(){return this.password},setPassword:function(t){var r=iR(eo(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var e=0;e<r.length;e++)this.password+=mn(r[e],me)}},// https://url.spec.whatwg.org/#dom-url-host
getHost:function(){var t=this.host,r=this.port;return null===t?"":null===r?y7(t):y7(t)+":"+r},setHost:function(t){this.cannotBeABaseURL||this.parse(t,my)},// https://url.spec.whatwg.org/#dom-url-hostname
getHostname:function(){var t=this.host;return null===t?"":y7(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,mm)},// https://url.spec.whatwg.org/#dom-url-port
getPort:function(){var t=this.port;return null===t?"":eo(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""===(t=eo(t))?this.port=null:this.parse(t,mb))},// https://url.spec.whatwg.org/#dom-url-pathname
getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+yL(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,mx))},// https://url.spec.whatwg.org/#dom-url-search
getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""===(t=eo(t))?this.query=null:("?"===yI(t,0)&&(t=yD(t,1)),this.query="",this.parse(t,m_)),this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-searchparams
getSearchParams:function(){return this.searchParams.facade},// https://url.spec.whatwg.org/#dom-url-hash
getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){if(""===(t=eo(t))){this.fragment=null;return}"#"===yI(t,0)&&(t=yD(t,1)),this.fragment="",this.parse(t,mT)},update:function(){this.query=this.searchParams.serialize()||null}};// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var mj=function(t/* , base */){var r=o2(this,mM),e=cD(arguments.length,1)>1?arguments[1]:void 0,n=yx(r,new mR(t,!1,e));D||(r.href=n.serialize(),r.origin=n.getOrigin(),r.protocol=n.getProtocol(),r.username=n.getUsername(),r.password=n.getPassword(),r.host=n.getHost(),r.hostname=n.getHostname(),r.port=n.getPort(),r.pathname=n.getPathname(),r.search=n.getSearch(),r.searchParams=n.getSearchParams(),r.hash=n.getHash())},mM=mj.prototype,mP=function(t,r){return{get:function(){return yA(this)[t]()},set:r&&function(t){return yA(this)[r](t)},configurable:!0,enumerable:!0}};if(D&&(// `URL.prototype.href` accessors pair
// https://url.spec.whatwg.org/#dom-url-href
ek(mM,"href",mP("serialize","setHref")),// `URL.prototype.origin` getter
// https://url.spec.whatwg.org/#dom-url-origin
ek(mM,"origin",mP("getOrigin")),// `URL.prototype.protocol` accessors pair
// https://url.spec.whatwg.org/#dom-url-protocol
ek(mM,"protocol",mP("getProtocol","setProtocol")),// `URL.prototype.username` accessors pair
// https://url.spec.whatwg.org/#dom-url-username
ek(mM,"username",mP("getUsername","setUsername")),// `URL.prototype.password` accessors pair
// https://url.spec.whatwg.org/#dom-url-password
ek(mM,"password",mP("getPassword","setPassword")),// `URL.prototype.host` accessors pair
// https://url.spec.whatwg.org/#dom-url-host
ek(mM,"host",mP("getHost","setHost")),// `URL.prototype.hostname` accessors pair
// https://url.spec.whatwg.org/#dom-url-hostname
ek(mM,"hostname",mP("getHostname","setHostname")),// `URL.prototype.port` accessors pair
// https://url.spec.whatwg.org/#dom-url-port
ek(mM,"port",mP("getPort","setPort")),// `URL.prototype.pathname` accessors pair
// https://url.spec.whatwg.org/#dom-url-pathname
ek(mM,"pathname",mP("getPathname","setPathname")),// `URL.prototype.search` accessors pair
// https://url.spec.whatwg.org/#dom-url-search
ek(mM,"search",mP("getSearch","setSearch")),// `URL.prototype.searchParams` getter
// https://url.spec.whatwg.org/#dom-url-searchparams
ek(mM,"searchParams",mP("getSearchParams")),// `URL.prototype.hash` accessors pair
// https://url.spec.whatwg.org/#dom-url-hash
ek(mM,"hash",mP("getHash","setHash"))),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
rh(mM,"toJSON",function(){return yA(this).serialize()},{enumerable:!0}),// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
rh(mM,"toString",function(){return yA(this).serialize()},{enumerable:!0}),yT){var mI=yT.createObjectURL,mk=yT.revokeObjectURL;mI&&rh(mj,"createObjectURL",eq(mI,yT)),mk&&rh(mj,"revokeObjectURL",eq(mk,yT))}eC(mj,"URL"),C({global:!0,constructor:!0,forced:!gA,sham:!D},{URL:mj}),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
C({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return H(URL.prototype.toString,this)}});var mL=(i=F(function(t){var r,e;return U(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,Promise.race([fetch(t),new Promise(function(t,r){setTimeout(function(){r(Error("Request took too long! Timeout after ".concat(10," second")))},1e4)})])];case 1:return[4,(r=n.sent()).json()];case 2:if(e=n.sent(),!r.ok)throw Error("".concat(e.message," (").concat(r.status,")"));return[2,e];case 3:throw n.sent();case 4:return[2]}})}),function(t){return i.apply(this,arguments)}),mF={recipe:{}},mN=(o=F(function(t){var r,e,n;return U(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,mL("".concat("https://forkify-api.herokuapp.com/api/v2/recipes","/").concat(t))];case 1:return console.log(r=i.sent()),e=r.data.recipe,mF.recipe={id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients},[3,3];case 2:return n=i.sent(),// Temp error handling
console.error("".concat(n,"!!!!!!!!!!!!!")),[3,3];case 3:return[2]}})}),function(t){return o.apply(this,arguments)});function mU(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function mC(t,r){if(!(t instanceof r))throw TypeError("Cannot call a class as a function")}function mz(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function mB(t,r,e){return r&&mz(t.prototype,r),e&&mz(t,e),t}function mD(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function mq(t,r){return(mq=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function mH(t){return(mH=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}// import icons from '../img/icons.svg'; - Parcel 1
var mG={};mG=k("1BDrg").getBundleURL("bVHal")+k("2okK5").resolve("3aSbc");var mW=/*#__PURE__*/function(){function t(){mC(this,t),mD(this,"_data",void 0)}return mB(t,[{key:"render",value:function(t){var r=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;var e=this._generateMarkup();if(!r)return e;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}},{key:"update",value:function(t){this._data=t;var r=this._generateMarkup(),e=Array.from(document.createRange().createContextualFragment(r).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));e.forEach(function(t,r){var e,i=n[r];t.isEqualNode(i)||(null===(e=t.firstChild)||void 0===e?void 0:e.nodeValue.trim())===""||(i.textContent=t.textContent),t.isEqualNode(i)||Array.from(t.attributes).forEach(function(t){return i.setAttribute(t.name,t.value)})})}},{key:"_clear",value:function(){this._parentElement.innerHTML=""}},{key:"renderSpinner",value:function(){var t='\n    <div class="spinner">\n      <svg>\n        <use href="'.concat(/*@__PURE__*/M(mG),'#icon-loader"></use>\n      </svg>\n    </div>\n  ');this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}},{key:"renderError",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._errorMessage,r='\n    <div class="error">\n     <div>\n       <svg>\n         <use href="'.concat(/*@__PURE__*/M(mG),'#icon-alert-triangle"></use>\n       </svg>\n     </div>\n     <p>').concat(t,"</p>\n   </div>");this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}},{key:"renderMessage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._message,r='\n    <div class="message">\n     <div>\n       <svg>\n         <use href="'.concat(/*@__PURE__*/M(mG),'#icon-smile"></use>\n       </svg>\n     </div>\n     <p>').concat(t,"</p>\n   </div>");this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}]),t}();(Fraction=function(t,r){/* double argument invocation */if(void 0!==t&&r)"number"==typeof t&&"number"==typeof r?(this.numerator=t,this.denominator=r):"string"==typeof t&&"string"==typeof r&&(// what are they?
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
 */Fraction.prototype.normalize=(a=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},u=function(t,r){if(!r)return Math.round(t);var e=Math.pow(10,r);return Math.round(t*e)/e},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(a(this.denominator)){var t=u(this.denominator,9),r=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),//this.numerator *= scaleup;
this.numerator*=r}if(a(this.numerator)){var t=u(this.numerator,9),r=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*r),//this.numerator *= scaleup;
this.denominator*=r}var e=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=e,this.denominator/=e,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,r){var e=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(r);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(t){var r=i.indexOf(t);r>=0&&(e.push(t),i.splice(r,1))}),0===e.length)?1:function(){var t,r=e[0];for(t=1;t<e.length;t++)r*=e[t];return r}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var r=Math.abs(t),e=[],n=2;n*n<=r;)r%n==0?(e.push(n),r/=n):n++;// and increment
return 1!=r&&e.push(r),e;// Return the prime factors
},R=Fraction;var mV=new/*#__PURE__*/(function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&mq(t,r)}(n,t);var r,e=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,i=mH(n);if(r){var o=mH(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return(t=e)&&("object"===N(t)||"function"==typeof t)?t:mU(this)});function n(){var t;return mC(this,n),t=e.apply(this,arguments),mD(mU(t),"_parentElement",document.querySelector(".recipe")),mD(mU(t),"_errorMessage","We could no tfind that recipe. Please try another one!"),mD(mU(t),"_message",""),t}return mB(n,[{// This method, which is publisher - needs to get access to the subscriber (controlRecipes) - this is in init fn in controller.js
key:"addHandlerRender",value:function(t){// Change the hash
window.addEventListener("hashchange",t),// Load the page
window.addEventListener("load",t);// To avoid duplicate code above, we use, but it is not working for me
// ['haschange', 'load'].forEach(ev => window.addEventListener(ev, handler));
}},{key:"addHandlerUpdateServings",value:function(t){// Event delegation
this._parentElement.addEventListener("click",function(r){var e=r.target.closest(".btn--update-servings");if(e){var n=+e.dataset.updateTo;n>0&&t(n)}})}},{key:"addHandlerAddBookmark",value:function(t){this._parentElement.addEventListener("click",function(r){r.target.closest(".btn--bookmark")&&t()})}},{key:"_generateMarkup",value:function(){return'\n    <figure class="recipe__fig">\n    <img src="'.concat(this._data.image,'" alt="').concat(this._data.title,'" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>').concat(this._data.title,'</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="').concat(/*@__PURE__*/M(mG),'#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">').concat(this._data.cookingTime,'</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="').concat(/*@__PURE__*/M(mG),'#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">').concat(this._data.servings,'</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--update-servings" data-update-to="').concat(this._data.servings-1,'">\n          <svg>\n            <use href="').concat(/*@__PURE__*/M(mG),'#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--update-servings" data-update-to="').concat(this._data.servings+1,'">\n          <svg>\n            <use href="').concat(/*@__PURE__*/M(mG),'#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated">\n    </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="').concat(/*@__PURE__*/M(mG),"#icon-bookmark").concat(!0===this._data.bookmarked?"-fill":"",'"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n\n    ').concat(this._data.ingredients.map(this._generateMarkupIngredient).join(""),'\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">').concat(this._data.publisher,'</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="').concat(this._data.sourceUrl,'"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="').concat(/*@__PURE__*/M(mG),'#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n    ')}},{key:"_generateMarkupIngredient",value:function(t){return' \n    <li class="recipe__ingredient">\n    <svg class="recipe__icon">\n      <use href="'.concat(/*@__PURE__*/M(mG),'#icon-check"></use>\n    </svg>\n    <div class="recipe__quantity">').concat(t.quantity?new R(t.quantity).toString():"",'</div>\n    <div class="recipe__description">\n      <span class="recipe__unit">').concat(t.unit,"</span>\n      ").concat(t.description,"\n    </div>\n  </li>\n    ")}}]),n}(mW)),m$=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function f(t,e,n,o){var a,u,s=Object.create((e&&e.prototype instanceof g?e:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(s,"_invoke",{value:(a=new T(o||[]),u=l,function(e,i){if(u===v)throw Error("Generator is already running");if(u===p){if("throw"===e)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:r,done:!0}}for(a.method=e,a.arg=i;;){var o=a.delegate;if(o){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(e,n){var i=n.method,o=e.iterator[i];if(o===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&e.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),d);var a=h(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var u=a.arg;return u?u.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[e.resultName]=u.value,// Resume execution at the desired location (see delegateYield).
n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,d):u:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(o,a);if(s){if(s===d)continue;return s}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===l)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=v;var c=h(t,n,a);if("normal"===c.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
u=a.done?p:"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(u=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=c.arg)}})}),s)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",v="executing",p="completed",d={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};c(b,a,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(R([])));S&&S!==e&&n.call(S,a)&&// of the polyfill.
(b=S);var E=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function x(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function A(t,r){var e;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new r(function(e,a){!function e(i,o,a,u){var s=h(t[i],t,o);if("throw"===s.type)u(s.arg);else{var c=s.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then(function(t){e("next",t,a,u)},function(t){e("throw",t,a,u)}):r.resolve(f).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
c.value=t,a(c)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return e("throw",t,a,u)})}}(i,o,e,a)})}return e=// all previous Promises have been resolved before calling invoke,
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
a):a()}})}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}throw TypeError((void 0===t?"undefined":N(t))+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},x(A.prototype),c(A.prototype,u,function(){return this}),t.AsyncIterator=A,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,e,n,i,o){void 0===o&&(o=Promise);var a=new A(f(r,e,n,i),o);return t.isGeneratorFunction(e)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
x(E),c(E,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
c(E,a,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=R,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return u.type="throw",u.arg=t,e.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(c){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=t,a.arg=r,o)?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;_(e)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),d}},t}({});try{regeneratorRuntime=m$}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=m$:Function("r","regeneratorRuntime = r")(m$)}document.querySelector(".recipe");// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
// main function responsible for loading and rendering recipes
var mY=(s=F(function(){var t;return U(this,function(r){switch(r.label){case 0:// Throws an error if there is no id, using guard close to handle the error
if(r.trys.push([0,2,,3]),console.log(t=window.location.hash.slice(1)),!t)return[2];// 1) Loading Recipe
// loadRecipe is an async function and therefore, it is going to return a promise, therefore we have to await that promise before we can move on in the next step in the execution of this async fucntion
return mV.renderSpinner(),[4,mN(t)];case 1:return r.sent(),mV.render(mF.recipe),[3,3];case 2:return r.sent(),mV.renderError(),[3,3];case 3:return[2]}})}),function(){return s.apply(this,arguments)});mV.addHandlerRender(mY)}();//# sourceMappingURL=index.9a5e305f.js.map

//# sourceMappingURL=index.9a5e305f.js.map
