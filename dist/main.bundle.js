!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";(function(e){var n,o,i;function c(e){return Object.prototype.toString.call(e).replace(/\[object\s|\]/g,"")}function u(e){return"Array"===c(e)}function a(e){return"Object"===c(e)}function l(e){return"String"===c(e)}function f(e){return a(e)&&"{}"!=JSON.stringify(e)}function d(e,t){f(e)&&Object.keys(e).forEach(t)}function s(e,t){e.length&&e.forEach(t)}function p(e,t,r){switch(t){case"style":e.style.cssText=r;break;case"value":var n=e.tagName||"";"input"===(n=n.toLowerCase())||"textarea"===n?e.value=r:e.setAttribute(t,r);break;default:e.setAttribute(t,r)}}function y(e){if(!e)return[];var t=[];return s(e,function(e){t.push(e)}),t}r.d(t,"b",function(){return u}),r.d(t,"d",function(){return a}),r.d(t,"e",function(){return l}),r.d(t,"c",function(){return f}),r.d(t,"f",function(){return d}),r.d(t,"a",function(){return s}),r.d(t,"g",function(){return p}),r.d(t,"h",function(){return y}),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(o.register(c,"type","C:/work/project/virtualdom-diff/src/util.js"),o.register(u,"isArray","C:/work/project/virtualdom-diff/src/util.js"),o.register(a,"isObject","C:/work/project/virtualdom-diff/src/util.js"),o.register(l,"isString","C:/work/project/virtualdom-diff/src/util.js"),o.register(f,"isNotEmptyObj","C:/work/project/virtualdom-diff/src/util.js"),o.register(d,"objForEach","C:/work/project/virtualdom-diff/src/util.js"),o.register(s,"aryForEach","C:/work/project/virtualdom-diff/src/util.js"),o.register(p,"setAttr","C:/work/project/virtualdom-diff/src/util.js"),o.register(y,"toArray","C:/work/project/virtualdom-diff/src/util.js")),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(4)(e))},function(e,t,r){"use strict";e.exports=r(9)},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return CreateElement});var _util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var Element=function(){function Element(e,t,r){var n=this;_classCallCheck(this,Element),this.tagName=e,this.props=Object(_util__WEBPACK_IMPORTED_MODULE_0__.d)(t)?t:{},this.children=r||!Object(_util__WEBPACK_IMPORTED_MODULE_0__.c)(this.props)&&(Object(_util__WEBPACK_IMPORTED_MODULE_0__.e)(t)&&[t]||Object(_util__WEBPACK_IMPORTED_MODULE_0__.b)(t)&&t)||[],this.key=t?t.key:void _common__WEBPACK_IMPORTED_MODULE_1__.a;var o=0;Object(_util__WEBPACK_IMPORTED_MODULE_0__.a)(this.children,function(e,t){e instanceof Element?o+=e.count:n.children[t]=""+e,o++}),this.count=o}return _createClass(Element,[{key:"render",value:function(){var e=this,t=document.createElement(this.tagName);return Object(_util__WEBPACK_IMPORTED_MODULE_0__.f)(this.props,function(r){return t.setAttribute(r,e.props[r])}),Object(_util__WEBPACK_IMPORTED_MODULE_0__.a)(this.children,function(e){var r=e instanceof Element?e.render():document.createTextNode(e);t.appendChild(r)}),t}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Element}(),reactHotLoader,leaveModule;function CreateElement(e,t,r){return new Element(e,t,r)}reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(Element,"Element","C:/work/project/virtualdom-diff/src/element.js"),reactHotLoader.register(CreateElement,"CreateElement","C:/work/project/virtualdom-diff/src/element.js")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(4)(module))},function(e,t,r){"use strict";(function(e){var n;r.d(t,"d",function(){return c}),r.d(t,"c",function(){return u}),r.d(t,"b",function(){return a}),r.d(t,"e",function(){return l}),r.d(t,"a",function(){return f}),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var o,i,c="replace",u="reorder",a="props",l="text",f="no_key";(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(o.register(c,"REPLACE","C:/work/project/virtualdom-diff/src/common.js"),o.register(u,"REORDER","C:/work/project/virtualdom-diff/src/common.js"),o.register(a,"PROPS","C:/work/project/virtualdom-diff/src/common.js"),o.register(l,"TEXT","C:/work/project/virtualdom-diff/src/common.js"),o.register(f,"NOKEY","C:/work/project/virtualdom-diff/src/common.js")),(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&i(e)}).call(this,r(4)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";(function(e){var n,o=r(0),i=r(3),c=r(6),u=r.n(c);function a(e,t){var r={};return l(e,t,0,r),r}function l(e,t,r,n){var c=[];if(null!==t){if(Object(o.e)(e)&&Object(o.e)(t))e!==t&&c.push({type:i.e,content:t});else if(e.tagName===t.tagName&&e.key===t.key){if(Object(o.c)(e.props)||Object(o.c)(t.props)){var u=d(e,t);u&&c.push({type:i.b,props:u})}!Object(o.c)(t.props)&&t.props.hasOwnProperty("ignore")||(e.children.length||t.children.length)&&f(e.children,t.children,r,n,c)}else c.push({type:i.d,node:t});c.length&&(n[r]=c)}}function f(e,t,r,n,c){var a=u()(e,t,"key");t=a.children,a.moves.length&&c.push({type:i.c,moves:a.moves});var f=null,d=r;Object(o.a)(e,function(e,r){var o=t[r];d=f&&f.count?d+f.count+1:d+1,e!==o&&l(e,o,d,n),f=e})}function d(e,t){var r=!1,n=e.props,i=t.props,c={};return Object(o.f)(n,function(e){i[e]===n[e]&&n.hasOwnProperty(e)||(!r&&(r=!0),c[e]=i[e])}),r?c:null}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var s,p,y=a;t.a=y,(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(s.register(a,"diff","C:/work/project/virtualdom-diff/src/diff.js"),s.register(l,"dfsWalk","C:/work/project/virtualdom-diff/src/diff.js"),s.register(f,"diffChildren","C:/work/project/virtualdom-diff/src/diff.js"),s.register(d,"diffProps","C:/work/project/virtualdom-diff/src/diff.js"),s.register(y,"default","C:/work/project/virtualdom-diff/src/diff.js")),(p=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&p(e)}).call(this,r(4)(e))},function(e,t,r){e.exports=r(13).diff},function(e,t,r){"use strict";(function(e){var n,o=r(0),i=r(3);function c(e,t){u(e,{index:0},t)}function u(e,t,r){var n=r[t.index];e.childNodes&&Object(o.a)(e.childNodes,function(e){t.index++,u(e,t,r)}),n&&a(e,n)}function a(e,t){Object(o.a)(t,function(t){switch(t.type){case i.d:var r=Object(o.e)(t.node)?document.createTextNode(t.node):t.node.render();e.parentNode.replaceChild(r,e);break;case i.c:f(e,t.moves);break;case i.b:l(e,t.props);break;case i.e:e.textContent?e.textContent=t.content:e.nodeValue=t.content;break;default:throw new Error("Unknown patch type "+t.type)}})}function l(e,t){Object(o.f)(t,function(r){t[r]===void i.a?e.removeAttribute(r):Object(o.g)(e,r,t[r])})}function f(e,t){var r=Object(o.h)(e.childNodes),n={};Object(o.a)(r,function(e){if(1===e.nodeType){var t=e.getAttribute("key");t&&(n[t]=e)}}),Object(o.a)(t,function(t){var i=t.index;if(0===t.type)r[i]===e.childNodes[i]&&e.removeChild(e.childNodes[i]),r.splice(i,1);else if(1===t.type){var c=void 0;n[t.item.key]?(c=e.removeChild(n[t.item.key]),r.splice(Array.prototype.indexOf.call(e.childNodes,n[t.item.key]),1)):c=Object(o.d)(t.item)?t.item.render():document.createTextNode(t.item),r.splice(i,0,c),e.insertBefore(c,e.childNodes[i]||null)}})}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&n(e);var d,s,p=c;t.a=p,(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(d.register(c,"patch","C:/work/project/virtualdom-diff/src/patch.js"),d.register(u,"dfsWalk","C:/work/project/virtualdom-diff/src/patch.js"),d.register(a,"applyPatches","C:/work/project/virtualdom-diff/src/patch.js"),d.register(l,"setProps","C:/work/project/virtualdom-diff/src/patch.js"),d.register(f,"reorderChildren","C:/work/project/virtualdom-diff/src/patch.js"),d.register(p,"default","C:/work/project/virtualdom-diff/src/patch.js")),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&s(e)}).call(this,r(4)(e))},function(e,t,r){"use strict";r.r(t),function(e){var t,n=r(2),o=r(5),i=r(7);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).enterModule)&&t(e);var c=Object(n.a)("div",{id:"root"},[Object(n.a)("h1",{style:"color: blue"},["Tittle1"]),Object(n.a)("p",["Hello, virtual-dom"]),Object(n.a)("ul",[Object(n.a)("li",{key:1},["li1"]),Object(n.a)("li",{key:2},["li2"]),Object(n.a)("li",{key:3},["li3"]),Object(n.a)("li",{key:4},["li4"])])]),u=c.render();console.log(c),document.body.appendChild(u);var a=Object(n.a)("div",{id:"container"},[Object(n.a)("h1",{style:"color: red"},["Title2"]),Object(n.a)("h3",["Hello, virtual-dom"]),Object(n.a)("ul",[Object(n.a)("li",{key:3},["li3"]),Object(n.a)("li",{key:1},["li1"]),Object(n.a)("li",{key:2},["li2"]),Object(n.a)("li",{key:5},["li5"])])]);console.log(a);var l,f,d=Object(o.a)(c,a);console.log(d),Object(i.a)(u,d),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).default)&&(l.register(c,"tree","C:/work/project/virtualdom-diff/src/index.js"),l.register(u,"root","C:/work/project/virtualdom-diff/src/index.js"),l.register(a,"newTree","C:/work/project/virtualdom-diff/src/index.js"),l.register(d,"patches","C:/work/project/virtualdom-diff/src/index.js")),(f=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(1)).leaveModule)&&f(e)}.call(this,r(4)(e))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(10))&&"object"==typeof n&&"default"in n?n.default:n;t.AppContainer=function(e){return o.Children.only(e.children)},t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},function(e,t,r){"use strict";e.exports=r(11)},function(e,t,r){"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(12),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,_=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,i,c,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,n,o,i,c,u],l=0;(e=Error(t.replace(/%s/g,function(){return a[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}function k(){}function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=O.prototype;var C=g.prototype=new k;C.constructor=g,n(C,O.prototype),C.isPureReactComponent=!0;var w={current:null},E={current:null},P=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n=void 0,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!L.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:u,props:o,_owner:E.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var H=/\/+/g,S=[];function G(e,t,r,n){if(S.length){var o=S.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>S.length&&S.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var a=!1;if(null===t)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case c:a=!0}}if(a)return n(o,t,""===r?"."+T(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=r+T(u=t[l],l);a+=e(u,f,n,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(u=t.next()).done;)a+=e(u=u.value,f=r+T(u,l++),n,o);else"object"===u&&m("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,n,r,function(e){return e}):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(H,"$&/")+"/")+r)),n.push(e))}function $(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(H,"$&/")+"/"),A(e,N,t=G(t,i,n,o)),R(t)}function I(){var e=w.current;return null===e&&m("321"),e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return $(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,D,t=G(null,null,t,r)),R(t)},count:function(e){return A(e,function(){return null},null)},toArray:function(e){var t=[];return $(e,t,null,function(e){return e}),t},only:function(e){return M(e)||m("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:g,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:_,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return I().useCallback(e,t)},useContext:function(e,t){return I().useContext(e,t)},useEffect:function(e,t){return I().useEffect(e,t)},useImperativeHandle:function(e,t,r){return I().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return I().useLayoutEffect(e,t)},useMemo:function(e,t){return I().useMemo(e,t)},useReducer:function(e,t,r){return I().useReducer(e,t,r)},useRef:function(e){return I().useRef(e)},useState:function(e){return I().useState(e)},Fragment:u,StrictMode:a,Suspense:y,createElement:x,cloneElement:function(e,t,r){null==e&&m("267",e);var o=void 0,c=n({},e.props),u=e.key,a=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,l=E.current),void 0!==t.key&&(u=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)P.call(t,o)&&!L.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))c.children=r;else if(1<o){f=Array(o);for(var d=0;d<o;d++)f[d]=arguments[d+2];c.children=f}return{$$typeof:i,type:e.type,key:u,ref:a,props:c,_owner:l}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:M,version:"16.8.6",unstable_ConcurrentMode:s,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentOwner:E,assign:n}},q={default:U},B=q&&U||q;e.exports=B.default||B},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in r=Object(arguments[a]))o.call(r,l)&&(u[l]=r[l]);if(n){c=n(r);for(var f=0;f<c.length;f++)i.call(r,c[f])&&(u[c[f]]=r[c[f]])}}return u}},function(e,t){function r(e,t){for(var r={},o=[],i=0,c=e.length;i<c;i++){var u=e[i],a=n(u,t);a?r[a]=i:o.push(u)}return{keyIndex:r,free:o}}function n(e,t){if(e&&t)return"string"==typeof t?e[t]:t(e)}t.makeKeyIndexAndFree=r,t.diff=function(e,t,o){for(var i,c,u=r(e,o),a=r(t,o),l=a.free,f=u.keyIndex,d=a.keyIndex,s=[],p=[],y=0,b=0;y<e.length;){if(c=n(i=e[y],o))if(d.hasOwnProperty(c)){var _=d[c];p.push(t[_])}else p.push(null);else{var v=l[b++];p.push(v||null)}y++}var m=p.slice(0);for(y=0;y<m.length;)null===m[y]?(k(y),C(y)):y++;for(var h=y=0;y<t.length;){c=n(i=t[y],o);var j=m[h],O=n(j,o);j?c===O?h++:f.hasOwnProperty(c)&&n(m[h+1],o)===c?(k(y),C(h),h++):g(y,i):g(y,i),y++}function k(e){var t={index:e,type:0};s.push(t)}function g(e,t){var r={index:e,item:t,type:1};s.push(r)}function C(e){m.splice(e,1)}return{moves:s,children:p}}}]);
//# sourceMappingURL=main.bundle.js.map