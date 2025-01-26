function Xd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ic={exports:{}},ho={},oc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),s0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),_a=Symbol.iterator;function c0(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sc=Object.assign,ac={};function Un(e,t,n){this.props=e,this.context=t,this.refs=ac,this.updater=n||lc}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uc(){}uc.prototype=Un.prototype;function ks(e,t,n){this.props=e,this.context=t,this.refs=ac,this.updater=n||lc}var Ss=ks.prototype=new uc;Ss.constructor=ks;sc(Ss,Un.prototype);Ss.isPureReactComponent=!0;var za=Array.isArray,cc=Object.prototype.hasOwnProperty,js={current:null},dc={key:!0,ref:!0,__self:!0,__source:!0};function fc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)cc.call(t,r)&&!dc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qr,type:e,key:o,ref:l,props:i,_owner:js.current}}function d0(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Es(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function f0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Na=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f0(""+e.key):t.toString(36)}function wi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case e0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Vo(l,0):r,za(i)?(n="",e!=null&&(n=e.replace(Na,"$&/")+"/"),wi(i,t,n,"",function(c){return c})):i!=null&&(Es(i)&&(i=d0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Na,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",za(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Vo(o,a);l+=wi(o,t,n,u,i)}else if(u=c0(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Vo(o,a++),l+=wi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ti(e,t,n){if(e==null)return e;var r=[],i=0;return wi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function p0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Ci={transition:null},h0={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:js};function pc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ti,forEach:function(e,t,n){ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ti(e,function(){t++}),t},toArray:function(e){return ti(e,function(t){return t})||[]},only:function(e){if(!Es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Un;F.Fragment=t0;F.Profiler=r0;F.PureComponent=ks;F.StrictMode=n0;F.Suspense=s0;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;F.act=pc;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=js.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)cc.call(t,u)&&!dc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:o0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i0,_context:e},e.Consumer=e};F.createElement=fc;F.createFactory=function(e){var t=fc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:l0,render:e}};F.isValidElement=Es;F.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:p0}};F.memo=function(e,t){return{$$typeof:a0,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};F.unstable_act=pc;F.useCallback=function(e,t){return ve.current.useCallback(e,t)};F.useContext=function(e){return ve.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};F.useEffect=function(e,t){return ve.current.useEffect(e,t)};F.useId=function(){return ve.current.useId()};F.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ve.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};F.useRef=function(e){return ve.current.useRef(e)};F.useState=function(e){return ve.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ve.current.useTransition()};F.version="18.3.1";oc.exports=F;var S=oc.exports;const Je=Jd(S),m0=Xd({__proto__:null,default:Je},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=S,v0=Symbol.for("react.element"),x0=Symbol.for("react.fragment"),y0=Object.prototype.hasOwnProperty,w0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C0={key:!0,ref:!0,__self:!0,__source:!0};function hc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)y0.call(t,r)&&!C0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:v0,type:e,key:o,ref:l,props:i,_owner:w0.current}}ho.Fragment=x0;ho.jsx=hc;ho.jsxs=hc;ic.exports=ho;var s=ic.exports,mc={exports:{}},be={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,b){var M=z.length;z.push(b);e:for(;0<M;){var A=M-1>>>1,V=z[A];if(0<i(V,b))z[A]=b,z[M]=V,M=A;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var b=z[0],M=z.pop();if(M!==b){z[0]=M;e:for(var A=0,V=z.length,Qt=V>>>1;A<Qt;){var Ve=2*(A+1)-1,mt=z[Ve],Ee=Ve+1,nt=z[Ee];if(0>i(mt,M))Ee<V&&0>i(nt,mt)?(z[A]=nt,z[Ee]=M,A=Ee):(z[A]=mt,z[Ve]=M,A=Ve);else if(Ee<V&&0>i(nt,M))z[A]=nt,z[Ee]=M,A=Ee;else break e}}return b}function i(z,b){var M=z.sortIndex-b.sortIndex;return M!==0?M:z.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],m=1,f=null,g=3,v=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var b=n(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=z)r(c),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(c)}}function x(z){if(w=!1,h(z),!y)if(n(u)!==null)y=!0,qn(E);else{var b=n(c);b!==null&&Wt(x,b.startTime-z)}}function E(z,b){y=!1,w&&(w=!1,p(P),P=-1),v=!0;var M=g;try{for(h(b),f=n(u);f!==null&&(!(f.expirationTime>b)||z&&!je());){var A=f.callback;if(typeof A=="function"){f.callback=null,g=f.priorityLevel;var V=A(f.expirationTime<=b);b=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(u)&&r(u),h(b)}else r(u);f=n(u)}if(f!==null)var Qt=!0;else{var Ve=n(c);Ve!==null&&Wt(x,Ve.startTime-b),Qt=!1}return Qt}finally{f=null,g=M,v=!1}}var L=!1,k=null,P=-1,D=5,T=-1;function je(){return!(e.unstable_now()-T<D)}function Bt(){if(k!==null){var z=e.unstable_now();T=z;var b=!0;try{b=k(!0,z)}finally{b?Ut():(L=!1,k=null)}}else L=!1}var Ut;if(typeof d=="function")Ut=function(){d(Bt)};else if(typeof MessageChannel<"u"){var Jr=new MessageChannel,Oo=Jr.port2;Jr.port1.onmessage=Bt,Ut=function(){Oo.postMessage(null)}}else Ut=function(){_(Bt,0)};function qn(z){k=z,L||(L=!0,Ut())}function Wt(z,b){P=_(function(){z(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,qn(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var M=g;g=b;try{return z()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,b){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var M=g;g=z;try{return b()}finally{g=M}},e.unstable_scheduleCallback=function(z,b,M){var A=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?A+M:A):M=A,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=M+V,z={id:m++,callback:b,priorityLevel:z,startTime:M,expirationTime:V,sortIndex:-1},M>A?(z.sortIndex=M,t(c,z),n(u)===null&&z===n(c)&&(w?(p(P),P=-1):w=!0,Wt(x,M-A))):(z.sortIndex=V,t(u,z),y||v||(y=!0,qn(E))),z},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(z){var b=g;return function(){var M=g;g=b;try{return z.apply(this,arguments)}finally{g=M}}}})(vc);gc.exports=vc;var k0=gc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=S,Pe=k0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xc=new Set,Er={};function un(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(Er[e]=t,e=0;e<t.length;e++)xc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,j0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pa={},ba={};function E0(e){return xl.call(ba,e)?!0:xl.call(Pa,e)?!1:j0.test(e)?ba[e]=!0:(Pa[e]=!0,!1)}function L0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _0(e,t,n,r){if(t===null||typeof t>"u"||L0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function _s(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,_s);ue[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,_s);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,_s);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zs(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_0(t,n,i,r)&&(n=null),r||i===null?E0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),pn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Ns=Symbol.for("react.strict_mode"),yl=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),Ps=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),bs=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Cc=Symbol.for("react.offscreen"),Ma=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Do;function cr(e){if(Do===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||""}return`
`+Do+e}var Ho=!1;function Bo(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function z0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case pn:return"Portal";case yl:return"Profiler";case Ns:return"StrictMode";case wl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wc:return(e.displayName||"Context")+".Consumer";case yc:return(e._context.displayName||"Context")+".Provider";case Ps:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bs:return t=e.displayName||null,t!==null?t:kl(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return kl(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kl(t);case 8:return t===Ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P0(e){var t=kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=P0(e))}function Sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jc(e,t){t=t.checked,t!=null&&zs(e,"checked",t,!1)}function jl(e,t){jc(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?El(e,t.type,n):t.hasOwnProperty("defaultValue")&&El(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ta(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function El(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(dr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function Ec(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b0=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){b0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function zc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Nc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var M0=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(M0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pl=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bl=null,_n=null,zn=null;function $a(e){if(e=Gr(e)){if(typeof bl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=yo(t),bl(e.stateNode,e.type,t))}}function Pc(e){_n?zn?zn.push(e):zn=[e]:_n=e}function bc(){if(_n){var e=_n,t=zn;if(zn=_n=null,$a(e),t)for(e=0;e<t.length;e++)$a(t[e])}}function Mc(e,t){return e(t)}function Rc(){}var Uo=!1;function Tc(e,t,n){if(Uo)return e(t,n);Uo=!0;try{return Mc(e,t,n)}finally{Uo=!1,(_n!==null||zn!==null)&&(Rc(),bc())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ml=!1;if(ct)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Ml=!1}function R0(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var gr=!1,Oi=null,Ai=!1,Rl=null,T0={onError:function(e){gr=!0,Oi=e}};function F0(e,t,n,r,i,o,l,a,u){gr=!1,Oi=null,R0.apply(T0,arguments)}function I0(e,t,n,r,i,o,l,a,u){if(F0.apply(this,arguments),gr){if(gr){var c=Oi;gr=!1,Oi=null}else throw Error(j(198));Ai||(Ai=!0,Rl=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oa(e){if(cn(e)!==e)throw Error(j(188))}function $0(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Oa(i),e;if(o===r)return Oa(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Ic(e){return e=$0(e),e!==null?$c(e):null}function $c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$c(e);if(t!==null)return t;e=e.sibling}return null}var Oc=Pe.unstable_scheduleCallback,Aa=Pe.unstable_cancelCallback,O0=Pe.unstable_shouldYield,A0=Pe.unstable_requestPaint,Y=Pe.unstable_now,V0=Pe.unstable_getCurrentPriorityLevel,Rs=Pe.unstable_ImmediatePriority,Ac=Pe.unstable_UserBlockingPriority,Vi=Pe.unstable_NormalPriority,D0=Pe.unstable_LowPriority,Vc=Pe.unstable_IdlePriority,mo=null,et=null;function H0(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:W0,B0=Math.log,U0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(B0(e)/U0|0)|0}var oi=64,li=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=fr(a):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function Q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-We(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=Q0(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Tl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function Wo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function K0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var O=0;function Hc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bc,Fs,Uc,Wc,Qc,Fl=!1,si=[],Lt=null,_t=null,zt=null,zr=new Map,Nr=new Map,Ct=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function er(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gr(t),t!==null&&Fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function q0(e,t,n,r,i){switch(t){case"focusin":return Lt=er(Lt,e,t,n,r,i),!0;case"dragenter":return _t=er(_t,e,t,n,r,i),!0;case"mouseover":return zt=er(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,er(zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,er(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function Zc(e){var t=qt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fc(n),t!==null){e.blockedOn=t,Qc(e.priority,function(){Uc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pl=r,n.target.dispatchEvent(r),Pl=null}else return t=Gr(n),t!==null&&Fs(t),e.blockedOn=n,!1;t.shift()}return!0}function Da(e,t,n){ki(e)&&n.delete(t)}function Y0(){Fl=!1,Lt!==null&&ki(Lt)&&(Lt=null),_t!==null&&ki(_t)&&(_t=null),zt!==null&&ki(zt)&&(zt=null),zr.forEach(Da),Nr.forEach(Da)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Fl||(Fl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Y0)))}function Pr(e){function t(i){return tr(i,e)}if(0<si.length){tr(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&tr(Lt,e),_t!==null&&tr(_t,e),zt!==null&&tr(zt,e),zr.forEach(t),Nr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)Zc(n),n.blockedOn===null&&Ct.shift()}var Nn=ht.ReactCurrentBatchConfig,Hi=!0;function X0(e,t,n,r){var i=O,o=Nn.transition;Nn.transition=null;try{O=1,Is(e,t,n,r)}finally{O=i,Nn.transition=o}}function J0(e,t,n,r){var i=O,o=Nn.transition;Nn.transition=null;try{O=4,Is(e,t,n,r)}finally{O=i,Nn.transition=o}}function Is(e,t,n,r){if(Hi){var i=Il(e,t,n,r);if(i===null)tl(e,t,r,Bi,n),Va(e,r);else if(q0(i,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<G0.indexOf(e)){for(;i!==null;){var o=Gr(i);if(o!==null&&Bc(o),o=Il(e,t,n,r),o===null&&tl(e,t,r,Bi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var Bi=null;function Il(e,t,n,r){if(Bi=null,e=Ms(r),e=qt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V0()){case Rs:return 1;case Ac:return 4;case Vi:case D0:return 16;case Vc:return 536870912;default:return 16}default:return 16}}var St=null,$s=null,Si=null;function Gc(){if(Si)return Si;var e,t=$s,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Si=i.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Ha(){return!1}function Me(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ai:Ha,this.isPropagationStopped=Ha,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Me(Wn),Kr=G({},Wn,{view:0,detail:0}),ef=Me(Kr),Qo,Zo,nr,go=G({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Qo=e.screenX-nr.screenX,Zo=e.screenY-nr.screenY):Zo=Qo=0,nr=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Ba=Me(go),tf=G({},go,{dataTransfer:0}),nf=Me(tf),rf=G({},Kr,{relatedTarget:0}),Ko=Me(rf),of=G({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=Me(of),sf=G({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),af=Me(sf),uf=G({},Wn,{data:0}),Ua=Me(uf),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function As(){return pf}var hf=G({},Kr,{key:function(e){if(e.key){var t=cf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=Me(hf),gf=G({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wa=Me(gf),vf=G({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),xf=Me(vf),yf=G({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=Me(yf),Cf=G({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=Me(Cf),Sf=[9,13,27,32],Vs=ct&&"CompositionEvent"in window,vr=null;ct&&"documentMode"in document&&(vr=document.documentMode);var jf=ct&&"TextEvent"in window&&!vr,qc=ct&&(!Vs||vr&&8<vr&&11>=vr),Qa=" ",Za=!1;function Yc(e,t){switch(e){case"keyup":return Sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Ef(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Za=!0,Qa);case"textInput":return e=t.data,e===Qa&&Za?null:e;default:return null}}function Lf(e,t){if(mn)return e==="compositionend"||!Vs&&Yc(e,t)?(e=Gc(),Si=$s=St=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qc&&t.locale!=="ko"?null:t.data;default:return null}}var _f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_f[e.type]:t==="textarea"}function Jc(e,t,n,r){Pc(r),t=Ui(t,"onChange"),0<t.length&&(n=new Os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,br=null;function zf(e){c1(e,0)}function vo(e){var t=xn(e);if(Sc(t))return e}function Nf(e,t){if(e==="change")return t}var e1=!1;if(ct){var Go;if(ct){var qo="oninput"in document;if(!qo){var Ga=document.createElement("div");Ga.setAttribute("oninput","return;"),qo=typeof Ga.oninput=="function"}Go=qo}else Go=!1;e1=Go&&(!document.documentMode||9<document.documentMode)}function qa(){xr&&(xr.detachEvent("onpropertychange",t1),br=xr=null)}function t1(e){if(e.propertyName==="value"&&vo(br)){var t=[];Jc(t,br,e,Ms(e)),Tc(zf,t)}}function Pf(e,t,n){e==="focusin"?(qa(),xr=t,br=n,xr.attachEvent("onpropertychange",t1)):e==="focusout"&&qa()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(br)}function Mf(e,t){if(e==="click")return vo(t)}function Rf(e,t){if(e==="input"||e==="change")return vo(t)}function Tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Tf;function Mr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xa(e,t){var n=Ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ya(n)}}function n1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?n1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r1(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=r1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&n1(n.ownerDocument.documentElement,n)){if(r!==null&&Ds(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Xa(n,o);var l=Xa(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var If=ct&&"documentMode"in document&&11>=document.documentMode,gn=null,$l=null,yr=null,Ol=!1;function Ja(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||gn==null||gn!==$i(r)||(r=gn,"selectionStart"in r&&Ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Mr(yr,r)||(yr=r,r=Ui($l,"onSelect"),0<r.length&&(t=new Os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Yo={},i1={};ct&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function xo(e){if(Yo[e])return Yo[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in i1)return Yo[e]=t[n];return e}var o1=xo("animationend"),l1=xo("animationiteration"),s1=xo("animationstart"),a1=xo("transitionend"),u1=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ot(e,t){u1.set(e,t),un(t,[e])}for(var Xo=0;Xo<eu.length;Xo++){var Jo=eu[Xo],$f=Jo.toLowerCase(),Of=Jo[0].toUpperCase()+Jo.slice(1);Ot($f,"on"+Of)}Ot(o1,"onAnimationEnd");Ot(l1,"onAnimationIteration");Ot(s1,"onAnimationStart");Ot("dblclick","onDoubleClick");Ot("focusin","onFocus");Ot("focusout","onBlur");Ot(a1,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I0(r,t,void 0,e),e.currentTarget=null}function c1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;tu(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;tu(i,a,c),o=u}}}if(Ai)throw e=Rl,Ai=!1,Rl=null,e}function B(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var r=e+"__bubble";n.has(r)||(d1(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),d1(n,e,r,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[ci]){e[ci]=!0,xc.forEach(function(n){n!=="selectionchange"&&(Af.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,el("selectionchange",!1,t))}}function d1(e,t,n,r){switch(Kc(t)){case 1:var i=X0;break;case 4:i=J0;break;default:i=Is}n=i.bind(null,t,n,e),i=void 0,!Ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=qt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Tc(function(){var c=o,m=Ms(n),f=[];e:{var g=u1.get(e);if(g!==void 0){var v=Os,y=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":v=mf;break;case"focusin":y="focus",v=Ko;break;case"focusout":y="blur",v=Ko;break;case"beforeblur":case"afterblur":v=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xf;break;case o1:case l1:case s1:v=lf;break;case a1:v=wf;break;case"scroll":v=ef;break;case"wheel":v=kf;break;case"copy":case"cut":case"paste":v=af;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Wa}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=_r(d,p),x!=null&&w.push(Tr(d,x,h)))),_)break;d=d.return}0<w.length&&(g=new v(g,y,null,n,m),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Pl&&(y=n.relatedTarget||n.fromElement)&&(qt(y)||y[dt]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?qt(y):null,y!==null&&(_=cn(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=Ba,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Wa,x="onPointerLeave",p="onPointerEnter",d="pointer"),_=v==null?g:xn(v),h=y==null?g:xn(y),g=new w(x,d+"leave",v,n,m),g.target=_,g.relatedTarget=h,x=null,qt(m)===c&&(w=new w(p,d+"enter",y,n,m),w.target=h,w.relatedTarget=_,x=w),_=x,v&&y)t:{for(w=v,p=y,d=0,h=w;h;h=dn(h))d++;for(h=0,x=p;x;x=dn(x))h++;for(;0<d-h;)w=dn(w),d--;for(;0<h-d;)p=dn(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=dn(w),p=dn(p)}w=null}else w=null;v!==null&&nu(f,g,v,w,!1),y!==null&&_!==null&&nu(f,_,y,w,!0)}}e:{if(g=c?xn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var E=Nf;else if(Ka(g))if(e1)E=Rf;else{E=bf;var L=Pf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Mf);if(E&&(E=E(e,c))){Jc(f,E,n,m);break e}L&&L(e,g,c),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&El(g,"number",g.value)}switch(L=c?xn(c):window,e){case"focusin":(Ka(L)||L.contentEditable==="true")&&(gn=L,$l=c,yr=null);break;case"focusout":yr=$l=gn=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Ja(f,n,m);break;case"selectionchange":if(If)break;case"keydown":case"keyup":Ja(f,n,m)}var k;if(Vs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else mn?Yc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(qc&&n.locale!=="ko"&&(mn||P!=="onCompositionStart"?P==="onCompositionEnd"&&mn&&(k=Gc()):(St=m,$s="value"in St?St.value:St.textContent,mn=!0)),L=Ui(c,P),0<L.length&&(P=new Ua(P,e,null,n,m),f.push({event:P,listeners:L}),k?P.data=k:(k=Xc(n),k!==null&&(P.data=k)))),(k=jf?Ef(e,n):Lf(e,n))&&(c=Ui(c,"onBeforeInput"),0<c.length&&(m=new Ua("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:c}),m.data=k))}c1(f,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_r(e,n),o!=null&&r.unshift(Tr(e,o,i)),o=_r(e,t),o!=null&&r.push(Tr(e,o,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=_r(n,o),u!=null&&l.unshift(Tr(n,u,a))):i||(u=_r(n,o),u!=null&&l.push(Tr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Vf=/\r\n?/g,Df=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(Vf,`
`).replace(Df,"")}function di(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(j(425))}function Wi(){}var Al=null,Vl=null;function Dl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(Uf)}:Hl;function Uf(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ou(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Qn,Fr="__reactProps$"+Qn,dt="__reactContainer$"+Qn,Bl="__reactEvents$"+Qn,Wf="__reactListeners$"+Qn,Qf="__reactHandles$"+Qn;function qt(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ou(e);e!==null;){if(n=e[Xe])return n;e=ou(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[Xe]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function yo(e){return e[Fr]||null}var Ul=[],yn=-1;function At(e){return{current:e}}function W(e){0>yn||(e.current=Ul[yn],Ul[yn]=null,yn--)}function H(e,t){yn++,Ul[yn]=e.current,e.current=t}var $t={},he=At($t),Ce=At(!1),rn=$t;function Rn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Qi(){W(Ce),W(he)}function lu(e,t,n){if(he.current!==$t)throw Error(j(168));H(he,t),H(Ce,n)}function f1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,N0(e)||"Unknown",i));return G({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,rn=he.current,H(he,e),H(Ce,Ce.current),!0}function su(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=f1(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(he),H(he,e)):W(Ce),H(Ce,n)}var lt=null,wo=!1,rl=!1;function p1(e){lt===null?lt=[e]:lt.push(e)}function Zf(e){wo=!0,p1(e)}function Vt(){if(!rl&&lt!==null){rl=!0;var e=0,t=O;try{var n=lt;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,wo=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),Oc(Rs,Vt),i}finally{O=t,rl=!1}}return null}var wn=[],Cn=0,Ki=null,Gi=0,Re=[],Te=0,on=null,st=1,at="";function Kt(e,t){wn[Cn++]=Gi,wn[Cn++]=Ki,Ki=e,Gi=t}function h1(e,t,n){Re[Te++]=st,Re[Te++]=at,Re[Te++]=on,on=e;var r=st;e=at;var i=32-We(r)-1;r&=~(1<<i),n+=1;var o=32-We(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-We(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function Hs(e){e.return!==null&&(Kt(e,1),h1(e,1,0))}function Bs(e){for(;e===Ki;)Ki=wn[--Cn],wn[Cn]=null,Gi=wn[--Cn],wn[Cn]=null;for(;e===on;)on=Re[--Te],Re[Te]=null,at=Re[--Te],Re[Te]=null,st=Re[--Te],Re[Te]=null}var Ne=null,ze=null,Q=!1,Ue=null;function m1(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function au(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ze=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ze=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ql(e){if(Q){var t=ze;if(t){var n=t;if(!au(e,t)){if(Wl(e))throw Error(j(418));t=Nt(n.nextSibling);var r=Ne;t&&au(e,t)?m1(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Wl(e))throw Error(j(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function fi(e){if(e!==Ne)return!1;if(!Q)return uu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Dl(e.type,e.memoizedProps)),t&&(t=ze)){if(Wl(e))throw g1(),Error(j(418));for(;t;)m1(e,t),t=Nt(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ne?Nt(e.stateNode.nextSibling):null;return!0}function g1(){for(var e=ze;e;)e=Nt(e.nextSibling)}function Tn(){ze=Ne=null,Q=!1}function Us(e){Ue===null?Ue=[e]:Ue.push(e)}var Kf=ht.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cu(e){var t=e._init;return t(e._payload)}function v1(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Rt(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,x){return d===null||d.tag!==6?(d=cl(h,p.mode,x),d.return=p,d):(d=i(d,h),d.return=p,d)}function u(p,d,h,x){var E=h.type;return E===hn?m(p,d,h.props.children,x,h.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&cu(E)===d.type)?(x=i(d,h.props),x.ref=rr(p,d,h),x.return=p,x):(x=bi(h.type,h.key,h.props,null,p.mode,x),x.ref=rr(p,d,h),x.return=p,x)}function c(p,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=dl(h,p.mode,x),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function m(p,d,h,x,E){return d===null||d.tag!==7?(d=tn(h,p.mode,x,E),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=cl(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:return h=bi(d.type,d.key,d.props,null,p.mode,h),h.ref=rr(p,null,d),h.return=p,h;case pn:return d=dl(d,p.mode,h),d.return=p,d;case yt:var x=d._init;return f(p,x(d._payload),h)}if(dr(d)||Xn(d))return d=tn(d,p.mode,h,null),d.return=p,d;pi(p,d)}return null}function g(p,d,h,x){var E=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(p,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ni:return h.key===E?u(p,d,h,x):null;case pn:return h.key===E?c(p,d,h,x):null;case yt:return E=h._init,g(p,d,E(h._payload),x)}if(dr(h)||Xn(h))return E!==null?null:m(p,d,h,x,null);pi(p,h)}return null}function v(p,d,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,a(d,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ni:return p=p.get(x.key===null?h:x.key)||null,u(d,p,x,E);case pn:return p=p.get(x.key===null?h:x.key)||null,c(d,p,x,E);case yt:var L=x._init;return v(p,d,h,L(x._payload),E)}if(dr(x)||Xn(x))return p=p.get(h)||null,m(d,p,x,E,null);pi(d,x)}return null}function y(p,d,h,x){for(var E=null,L=null,k=d,P=d=0,D=null;k!==null&&P<h.length;P++){k.index>P?(D=k,k=null):D=k.sibling;var T=g(p,k,h[P],x);if(T===null){k===null&&(k=D);break}e&&k&&T.alternate===null&&t(p,k),d=o(T,d,P),L===null?E=T:L.sibling=T,L=T,k=D}if(P===h.length)return n(p,k),Q&&Kt(p,P),E;if(k===null){for(;P<h.length;P++)k=f(p,h[P],x),k!==null&&(d=o(k,d,P),L===null?E=k:L.sibling=k,L=k);return Q&&Kt(p,P),E}for(k=r(p,k);P<h.length;P++)D=v(k,p,P,h[P],x),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?P:D.key),d=o(D,d,P),L===null?E=D:L.sibling=D,L=D);return e&&k.forEach(function(je){return t(p,je)}),Q&&Kt(p,P),E}function w(p,d,h,x){var E=Xn(h);if(typeof E!="function")throw Error(j(150));if(h=E.call(h),h==null)throw Error(j(151));for(var L=E=null,k=d,P=d=0,D=null,T=h.next();k!==null&&!T.done;P++,T=h.next()){k.index>P?(D=k,k=null):D=k.sibling;var je=g(p,k,T.value,x);if(je===null){k===null&&(k=D);break}e&&k&&je.alternate===null&&t(p,k),d=o(je,d,P),L===null?E=je:L.sibling=je,L=je,k=D}if(T.done)return n(p,k),Q&&Kt(p,P),E;if(k===null){for(;!T.done;P++,T=h.next())T=f(p,T.value,x),T!==null&&(d=o(T,d,P),L===null?E=T:L.sibling=T,L=T);return Q&&Kt(p,P),E}for(k=r(p,k);!T.done;P++,T=h.next())T=v(k,p,P,T.value,x),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?P:T.key),d=o(T,d,P),L===null?E=T:L.sibling=T,L=T);return e&&k.forEach(function(Bt){return t(p,Bt)}),Q&&Kt(p,P),E}function _(p,d,h,x){if(typeof h=="object"&&h!==null&&h.type===hn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ni:e:{for(var E=h.key,L=d;L!==null;){if(L.key===E){if(E=h.type,E===hn){if(L.tag===7){n(p,L.sibling),d=i(L,h.props.children),d.return=p,p=d;break e}}else if(L.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===yt&&cu(E)===L.type){n(p,L.sibling),d=i(L,h.props),d.ref=rr(p,L,h),d.return=p,p=d;break e}n(p,L);break}else t(p,L);L=L.sibling}h.type===hn?(d=tn(h.props.children,p.mode,x,h.key),d.return=p,p=d):(x=bi(h.type,h.key,h.props,null,p.mode,x),x.ref=rr(p,d,h),x.return=p,p=x)}return l(p);case pn:e:{for(L=h.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=dl(h,p.mode,x),d.return=p,p=d}return l(p);case yt:return L=h._init,_(p,d,L(h._payload),x)}if(dr(h))return y(p,d,h,x);if(Xn(h))return w(p,d,h,x);pi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=cl(h,p.mode,x),d.return=p,p=d),l(p)):n(p,d)}return _}var Fn=v1(!0),x1=v1(!1),qi=At(null),Yi=null,kn=null,Ws=null;function Qs(){Ws=kn=Yi=null}function Zs(e){var t=qi.current;W(qi),e._currentValue=t}function Zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Yi=e,Ws=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(Ws!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Yi===null)throw Error(j(308));kn=e,Yi.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Yt=null;function Ks(e){Yt===null?Yt=[e]:Yt.push(e)}function y1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ks(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Ks(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;l=0,m=c=u=null,a=o;do{var g=a.lane,v=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(v,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,f,g):y,g==null)break e;f=G({},f,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=v,u=f):m=m.next=v,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=l,e.lanes=l,e.memoizedState=f}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var qr={},tt=At(qr),Ir=At(qr),$r=At(qr);function Xt(e){if(e===qr)throw Error(j(174));return e}function qs(e,t){switch(H($r,t),H(Ir,e),H(tt,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_l(t,e)}W(tt),H(tt,t)}function In(){W(tt),W(Ir),W($r)}function C1(e){Xt($r.current);var t=Xt(tt.current),n=_l(t,e.type);t!==n&&(H(Ir,e),H(tt,n))}function Ys(e){Ir.current===e&&(W(tt),W(Ir))}var Z=At(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Xs(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var Li=ht.ReactCurrentDispatcher,ol=ht.ReactCurrentBatchConfig,ln=0,K=null,te=null,ie=null,eo=!1,wr=!1,Or=0,Gf=0;function ce(){throw Error(j(321))}function Js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ea(e,t,n,r,i,o){if(ln=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?Jf:ep,e=n(r,i),wr){o=0;do{if(wr=!1,Or=0,25<=o)throw Error(j(301));o+=1,ie=te=null,t.updateQueue=null,Li.current=tp,e=n(r,i)}while(wr)}if(Li.current=to,t=te!==null&&te.next!==null,ln=0,ie=te=K=null,eo=!1,t)throw Error(j(300));return e}function ta(){var e=Or!==0;return Or=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function Oe(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(j(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Ar(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Oe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var m=c.lane;if((ln&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,l=r):u=u.next=f,K.lanes|=m,sn|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Ke(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function k1(){}function S1(e,t){var n=K,r=Oe(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,na(L1.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Vr(9,E1.bind(null,n,r,i,t),void 0,null),le===null)throw Error(j(349));ln&30||j1(n,t,i)}return i}function j1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function E1(e,t,n,r){t.value=n,t.getSnapshot=r,_1(t)&&z1(e)}function L1(e,t,n){return n(function(){_1(t)&&z1(e)})}function _1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function z1(e){var t=ft(e,1);t!==null&&Qe(t,e,1,-1)}function pu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=Xf.bind(null,K,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function N1(){return Oe().memoizedState}function _i(e,t,n,r){var i=qe();K.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&Js(r,l.deps)){i.memoizedState=Vr(t,n,o,r);return}}K.flags|=e,i.memoizedState=Vr(1|t,n,o,r)}function hu(e,t){return _i(8390656,8,e,t)}function na(e,t){return Co(2048,8,e,t)}function P1(e,t){return Co(4,2,e,t)}function b1(e,t){return Co(4,4,e,t)}function M1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function R1(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,M1.bind(null,t,e),n)}function ra(){}function T1(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function F1(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function I1(e,t,n){return ln&21?(Ke(n,t)||(n=Dc(),K.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function qf(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ol.transition;ol.transition={};try{e(!1),t()}finally{O=n,ol.transition=r}}function $1(){return Oe().memoizedState}function Yf(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},O1(e))A1(t,n);else if(n=y1(e,t,n,r),n!==null){var i=ge();Qe(n,e,r,i),V1(n,t,r)}}function Xf(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(O1(e))A1(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,l)){var u=t.interleaved;u===null?(i.next=i,Ks(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=y1(e,t,i,r),n!==null&&(i=ge(),Qe(n,e,r,i),V1(n,t,r))}}function O1(e){var t=e.alternate;return e===K||t!==null&&t===K}function A1(e,t){wr=eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function V1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var to={readContext:$e,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Jf={readContext:$e,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,M1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:pu,useDebugValue:ra,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=pu(!1),t=e[0];return e=qf.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=qe();if(Q){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),le===null)throw Error(j(349));ln&30||j1(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hu(L1.bind(null,r,o,e),[e]),r.flags|=2048,Vr(9,E1.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=le.identifierPrefix;if(Q){var n=at,r=st;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ep={readContext:$e,useCallback:T1,useContext:$e,useEffect:na,useImperativeHandle:R1,useInsertionEffect:P1,useLayoutEffect:b1,useMemo:F1,useReducer:ll,useRef:N1,useState:function(){return ll(Ar)},useDebugValue:ra,useDeferredValue:function(e){var t=Oe();return I1(t,te.memoizedState,e)},useTransition:function(){var e=ll(Ar)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:k1,useSyncExternalStore:S1,useId:$1,unstable_isNewReconciler:!1},tp={readContext:$e,useCallback:T1,useContext:$e,useEffect:na,useImperativeHandle:R1,useInsertionEffect:P1,useLayoutEffect:b1,useMemo:F1,useReducer:sl,useRef:N1,useState:function(){return sl(Ar)},useDebugValue:ra,useDeferredValue:function(e){var t=Oe();return te===null?t.memoizedState=e:I1(t,te.memoizedState,e)},useTransition:function(){var e=sl(Ar)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:k1,useSyncExternalStore:S1,useId:$1,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Mt(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(Qe(t,e,i,r),Ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Mt(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(Qe(t,e,i,r),Ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Mt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,r),t!==null&&(Qe(t,e,r,n),Ei(t,e,r))}};function mu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,o):!0}function D1(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=$e(o):(i=ke(t)?rn:he.current,r=t.contextTypes,o=(r=r!=null)?Rn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Gl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Gs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$e(o):(o=ke(t)?rn:he.current,i.context=Rn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Kl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ko.enqueueReplaceState(i,i.state,null),Xi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=z0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function H1(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ro||(ro=!0,ls=r),ql(e,t)},n}function B1(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ql(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new np;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var rp=ht.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?x1(t,null,n,r):Fn(t,e.child,n,r)}function wu(e,t,n,r,i){n=n.render;var o=t.ref;return Pn(t,i),r=ea(e,t,n,r,o,i),n=ta(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Q&&n&&Hs(t),t.flags|=1,me(e,t,r,i),t.child)}function Cu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!da(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,U1(e,t,o,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(l,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Rt(o,r),e.ref=t.ref,e.return=t,t.child=e}function U1(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,pt(e,t,i)}return Yl(e,t,n,r,i)}function W1(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(jn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(jn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(jn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(jn,_e),_e|=r;return me(e,t,i,n),t.child}function Q1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,i){var o=ke(n)?rn:he.current;return o=Rn(t,o),Pn(t,i),n=ea(e,t,n,r,o,i),r=ta(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Q&&r&&Hs(t),t.flags|=1,me(e,t,n,i),t.child)}function ku(e,t,n,r,i){if(ke(n)){var o=!0;Zi(t)}else o=!1;if(Pn(t,i),t.stateNode===null)zi(e,t),D1(t,n,r),Gl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=$e(c):(c=ke(n)?rn:he.current,c=Rn(t,c));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&gu(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,Xi(t,r,l,i),u=t.memoizedState,a!==r||g!==u||Ce.current||wt?(typeof m=="function"&&(Kl(t,n,m,r),u=t.memoizedState),(a=wt||mu(t,n,a,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,w1(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=$e(u):(u=ke(n)?rn:he.current,u=Rn(t,u));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==u)&&gu(t,l,r,u),wt=!1,g=t.memoizedState,l.state=g,Xi(t,r,l,i);var y=t.memoizedState;a!==f||g!==y||Ce.current||wt?(typeof v=="function"&&(Kl(t,n,v,r),y=t.memoizedState),(c=wt||mu(t,n,c,r,g,y,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xl(e,t,n,r,o,i)}function Xl(e,t,n,r,i,o){Q1(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&su(t,n,!1),pt(e,t,o);r=t.stateNode,rp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fn(t,e.child,null,o),t.child=Fn(t,null,a,o)):me(e,t,a,o),t.memoizedState=r.state,i&&su(t,n,!0),t.child}function Z1(e){var t=e.stateNode;t.pendingContext?lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lu(e,t.context,!1),qs(e,t.containerInfo)}function Su(e,t,n,r,i){return Tn(),Us(i),t.flags|=256,me(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function K1(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Z,i&1),e===null)return Ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Eo(l,r,0,null),e=tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=es(n),t.memoizedState=Jl,e):ia(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ip(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Rt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Rt(a,o):(o=tn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?es(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return o=e.child,e=o.sibling,r=Rt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ia(e,t){return t=Eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,n,r){return r!==null&&Us(r),Fn(t,e.child,null,n),e=ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=al(Error(j(422))),hi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Eo({mode:"visible",children:r.children},i,0,null),o=tn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Fn(t,e.child,null,l),t.child.memoizedState=es(l),t.memoizedState=Jl,o);if(!(t.mode&1))return hi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(j(419)),r=al(o,r,void 0),hi(e,t,l,r)}if(a=(l&e.childLanes)!==0,we||a){if(r=le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),Qe(r,e,i,-1))}return ca(),r=al(Error(j(421))),hi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Nt(i.nextSibling),Ne=t,Q=!0,Ue=null,e!==null&&(Re[Te++]=st,Re[Te++]=at,Re[Te++]=on,st=e.id,at=e.overflow,on=t),t=ia(t,r.children),t.flags|=4096,t)}function ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zl(e.return,t,n)}function ul(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function G1(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,o);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function op(e,t,n){switch(t.tag){case 3:Z1(t),Tn();break;case 5:C1(t);break;case 1:ke(t.type)&&Zi(t);break;case 4:qs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?K1(e,t,n):(H(Z,Z.current&1),e=pt(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return G1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,W1(e,t,n)}return pt(e,t,n)}var q1,ts,Y1,X1;q1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ts=function(){};Y1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(tt.current);var o=null;switch(n){case"input":i=Sl(e,i),r=Sl(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Ll(e,i),r=Ll(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wi)}zl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Er.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&B("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};X1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lp(e,t,n){var r=t.pendingProps;switch(Bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Qi(),de(t),null;case 3:return r=t.stateNode,In(),W(Ce),W(he),Xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(us(Ue),Ue=null))),ts(e,t),de(t),null;case 5:Ys(t);var i=Xt($r.current);if(n=t.type,e!==null&&t.stateNode!=null)Y1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return de(t),null}if(e=Xt(tt.current),fi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xe]=t,r[Fr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)B(pr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ra(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Fa(r,o),B("invalid",r)}zl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",""+a]):Er.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":ri(r),Ta(r,o,!0);break;case"textarea":ri(r),Ia(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xe]=t,e[Fr]=r,q1(e,t,!1,!1),t.stateNode=e;e:{switch(l=Nl(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)B(pr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Ra(e,r),i=Sl(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Fa(e,r),i=Ll(e,r),B("invalid",e);break;default:i=r}zl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Nc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_c(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lr(e,u):typeof u=="number"&&Lr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Er.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&zs(e,o,u,l))}switch(n){case"input":ri(e),Ta(e,r,!1);break;case"textarea":ri(e),Ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)X1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Xt($r.current),Xt(tt.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return de(t),null;case 13:if(W(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))g1(),Tn(),t.flags|=98560,o=!1;else if(o=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Xe]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Ue!==null&&(us(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?re===0&&(re=3):ca())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return In(),ts(e,t),e===null&&Rr(t.stateNode.containerInfo),de(t),null;case 10:return Zs(t.type._context),de(t),null;case 17:return ke(t.type)&&Qi(),de(t),null;case 19:if(W(Z),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)ir(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ji(e),l!==null){for(t.flags|=128,ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>On&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ji(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return de(t),null}else 2*Y()-o.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return ua(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function sp(e,t){switch(Bs(t),t.tag){case 1:return ke(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),W(Ce),W(he),Xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ys(t),null;case 13:if(W(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Z),null;case 4:return In(),null;case 10:return Zs(t.type._context),null;case 22:case 23:return ua(),null;case 24:return null;default:return null}}var mi=!1,fe=!1,ap=typeof WeakSet=="function"?WeakSet:Set,N=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function ns(e,t,n){try{n()}catch(r){q(e,t,r)}}var Eu=!1;function up(e,t){if(Al=Hi,e=r1(),Ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++m===r&&(u=l),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:e,selectionRange:n},Hi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:He(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=Eu,Eu=!1,y}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ns(t,n,o)}i=i.next}while(i!==r)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function J1(e){var t=e.alternate;t!==null&&(e.alternate=null,J1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[Fr],delete t[Bl],delete t[Wf],delete t[Qf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ed(e){return e.tag===5||e.tag===3||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wi));else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}var se=null,Be=!1;function vt(e,t,n){for(n=n.child;n!==null;)td(e,t,n),n=n.sibling}function td(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:fe||Sn(n,t);case 6:var r=se,i=Be;se=null,vt(e,t,n),se=r,Be=i,se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),Pr(e)):nl(se,n.stateNode));break;case 4:r=se,i=Be,se=n.stateNode.containerInfo,Be=!0,vt(e,t,n),se=r,Be=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ns(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!fe&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,vt(e,t,n),fe=r):vt(e,t,n);break;default:vt(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ap),t.forEach(function(r){var i=xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Be=!1;break e;case 3:se=a.stateNode.containerInfo,Be=!0;break e;case 4:se=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(se===null)throw Error(j(160));td(o,l,i),se=null,Be=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}function nd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ge(e),r&4){try{Cr(3,e,e.return),So(3,e)}catch(w){q(e,e.return,w)}try{Cr(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:De(t,e),Ge(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(De(t,e),Ge(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jc(i,o),Nl(a,l);var c=Nl(a,o);for(l=0;l<u.length;l+=2){var m=u[l],f=u[l+1];m==="style"?Nc(i,f):m==="dangerouslySetInnerHTML"?_c(i,f):m==="children"?Lr(i,f):zs(i,m,f,c)}switch(a){case"input":jl(i,o);break;case"textarea":Ec(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ln(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fr]=o}catch(w){q(e,e.return,w)}}break;case 6:if(De(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){q(e,e.return,w)}}break;case 3:if(De(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:De(t,e),Ge(e);break;case 13:De(t,e),Ge(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sa=Y())),r&4&&_u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||m,De(t,e),fe=c):De(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(f=N=m;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:Cr(4,g,g.return);break;case 1:Sn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:Sn(g,g.return);break;case 22:if(g.memoizedState!==null){Nu(f);continue}}v!==null?(v.return=g,N=v):Nu(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=zc("display",l))}catch(w){q(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:De(t,e),Ge(e),r&4&&_u(e);break;case 21:break;default:De(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ed(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lr(i,""),r.flags&=-33);var o=Lu(e);os(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Lu(e);is(e,a,l);break;default:throw Error(j(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cp(e,t,n){N=e,rd(e)}function rd(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||mi;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||fe;a=mi;var c=fe;if(mi=l,(fe=u)&&!c)for(N=i;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?Pu(i):u!==null?(u.return=l,N=u):Pu(i);for(;o!==null;)N=o,rd(o),o=o.sibling;N=i,mi=a,fe=c}zu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):zu(e)}}function zu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||So(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Pr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}fe||t.flags&512&&rs(t)}catch(g){q(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Nu(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Pu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{So(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){q(t,i,u)}}var o=t.return;try{rs(t)}catch(u){q(t,o,u)}break;case 5:var l=t.return;try{rs(t)}catch(u){q(t,l,u)}}}catch(u){q(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var dp=Math.ceil,no=ht.ReactCurrentDispatcher,oa=ht.ReactCurrentOwner,Ie=ht.ReactCurrentBatchConfig,I=0,le=null,ee=null,ae=0,_e=0,jn=At(0),re=0,Dr=null,sn=0,jo=0,la=0,kr=null,ye=null,sa=0,On=1/0,it=null,ro=!1,ls=null,bt=null,gi=!1,jt=null,io=0,Sr=0,ss=null,Ni=-1,Pi=0;function ge(){return I&6?Y():Ni!==-1?Ni:Ni=Y()}function Mt(e){return e.mode&1?I&2&&ae!==0?ae&-ae:Kf.transition!==null?(Pi===0&&(Pi=Dc()),Pi):(e=O,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e):1}function Qe(e,t,n,r){if(50<Sr)throw Sr=0,ss=null,Error(j(185));Zr(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(jo|=n),re===4&&kt(e,ae)),Se(e,r),n===1&&I===0&&!(t.mode&1)&&(On=Y()+500,wo&&Vt()))}function Se(e,t){var n=e.callbackNode;Z0(e,t);var r=Di(e,e===le?ae:0);if(r===0)n!==null&&Aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Aa(n),t===1)e.tag===0?Zf(bu.bind(null,e)):p1(bu.bind(null,e)),Bf(function(){!(I&6)&&Vt()}),n=null;else{switch(Hc(r)){case 1:n=Rs;break;case 4:n=Ac;break;case 16:n=Vi;break;case 536870912:n=Vc;break;default:n=Vi}n=dd(n,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function id(e,t){if(Ni=-1,Pi=0,I&6)throw Error(j(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=Di(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=I;I|=2;var o=ld();(le!==e||ae!==t)&&(it=null,On=Y()+500,en(e,t));do try{hp();break}catch(a){od(e,a)}while(!0);Qs(),no.current=o,I=i,ee!==null?t=0:(le=null,ae=0,t=re)}if(t!==0){if(t===2&&(i=Tl(e),i!==0&&(r=i,t=as(e,i))),t===1)throw n=Dr,en(e,0),kt(e,r),Se(e,Y()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fp(i)&&(t=oo(e,r),t===2&&(o=Tl(e),o!==0&&(r=o,t=as(e,o))),t===1))throw n=Dr,en(e,0),kt(e,r),Se(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Gt(e,ye,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=sa+500-Y(),10<t)){if(Di(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hl(Gt.bind(null,e,ye,it),t);break}Gt(e,ye,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-We(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dp(r/1960))-r,10<r){e.timeoutHandle=Hl(Gt.bind(null,e,ye,it),r);break}Gt(e,ye,it);break;case 5:Gt(e,ye,it);break;default:throw Error(j(329))}}}return Se(e,Y()),e.callbackNode===n?id.bind(null,e):null}function as(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=oo(e,t),e!==2&&(t=ye,ye=n,t!==null&&us(t)),e}function us(e){ye===null?ye=e:ye.push.apply(ye,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~la,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function bu(e){if(I&6)throw Error(j(327));bn();var t=Di(e,0);if(!(t&1))return Se(e,Y()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=Tl(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=Dr,en(e,0),kt(e,t),Se(e,Y()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,ye,it),Se(e,Y()),null}function aa(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(On=Y()+500,wo&&Vt())}}function an(e){jt!==null&&jt.tag===0&&!(I&6)&&bn();var t=I;I|=1;var n=Ie.transition,r=O;try{if(Ie.transition=null,O=1,e)return e()}finally{O=r,Ie.transition=n,I=t,!(I&6)&&Vt()}}function ua(){_e=jn.current,W(jn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:In(),W(Ce),W(he),Xs();break;case 5:Ys(r);break;case 4:In();break;case 13:W(Z);break;case 19:W(Z);break;case 10:Zs(r.type._context);break;case 22:case 23:ua()}n=n.return}if(le=e,ee=e=Rt(e.current,null),ae=_e=t,re=0,Dr=null,la=jo=sn=0,ye=kr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function od(e,t){do{var n=ee;try{if(Qs(),Li.current=to,eo){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eo=!1}if(ln=0,ie=te=K=null,wr=!1,Or=0,oa.current=null,n===null||n.return===null){re=1,Dr=t,ee=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=ae,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=xu(l);if(v!==null){v.flags&=-257,yu(v,l,a,o,t),v.mode&1&&vu(o,c,t),t=v,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){vu(o,c,t),ca();break e}u=Error(j(426))}}else if(Q&&a.mode&1){var _=xu(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),yu(_,l,a,o,t),Us($n(u,a));break e}}o=u=$n(u,a),re!==4&&(re=2),kr===null?kr=[o]:kr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=H1(o,u,t);du(o,p);break e;case 1:a=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(bt===null||!bt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=B1(o,a,t);du(o,x);break e}}o=o.return}while(o!==null)}ad(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function ld(){var e=no.current;return no.current=to,e===null?to:e}function ca(){(re===0||re===3||re===2)&&(re=4),le===null||!(sn&268435455)&&!(jo&268435455)||kt(le,ae)}function oo(e,t){var n=I;I|=2;var r=ld();(le!==e||ae!==t)&&(it=null,en(e,t));do try{pp();break}catch(i){od(e,i)}while(!0);if(Qs(),I=n,no.current=r,ee!==null)throw Error(j(261));return le=null,ae=0,re}function pp(){for(;ee!==null;)sd(ee)}function hp(){for(;ee!==null&&!O0();)sd(ee)}function sd(e){var t=cd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?ad(e):ee=t,oa.current=null}function ad(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=lp(n,t,_e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Gt(e,t,n){var r=O,i=Ie.transition;try{Ie.transition=null,O=1,mp(e,t,n,r)}finally{Ie.transition=i,O=r}return null}function mp(e,t,n,r){do bn();while(jt!==null);if(I&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(K0(e,o),e===le&&(ee=le=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,dd(Vi,function(){return bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=O;O=1;var a=I;I|=4,oa.current=null,up(e,n),nd(n,e),Ff(Vl),Hi=!!Al,Vl=Al=null,e.current=n,cp(n),A0(),I=a,O=l,Ie.transition=o}else e.current=n;if(gi&&(gi=!1,jt=e,io=i),o=e.pendingLanes,o===0&&(bt=null),H0(n.stateNode),Se(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ro)throw ro=!1,e=ls,ls=null,e;return io&1&&e.tag!==0&&bn(),o=e.pendingLanes,o&1?e===ss?Sr++:(Sr=0,ss=e):Sr=0,Vt(),null}function bn(){if(jt!==null){var e=Hc(io),t=Ie.transition,n=O;try{if(Ie.transition=null,O=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,io=0,I&6)throw Error(j(331));var i=I;for(I|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(N=c;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Cr(8,m,o)}var f=m.child;if(f!==null)f.return=m,N=f;else for(;N!==null;){m=N;var g=m.sibling,v=m.return;if(J1(m),m===c){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,N=p;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,N=h;else e:for(l=d;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:So(9,a)}}catch(E){q(a,a.return,E)}if(a===l){N=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,N=x;break e}N=a.return}}if(I=i,Vt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{O=n,Ie.transition=t}}return!1}function Mu(e,t,n){t=$n(n,t),t=H1(e,t,1),e=Pt(e,t,1),t=ge(),e!==null&&(Zr(e,1,t),Se(e,t))}function q(e,t,n){if(e.tag===3)Mu(e,e,n);else for(;t!==null;){if(t.tag===3){Mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=$n(n,e),e=B1(t,e,1),t=Pt(t,e,1),e=ge(),t!==null&&(Zr(t,1,e),Se(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>Y()-sa?en(e,0):la|=n),Se(e,t)}function ud(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=ge();e=ft(e,t),e!==null&&(Zr(e,t,n),Se(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ud(e,n)}function xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),ud(e,n)}var cd;cd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,op(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&h1(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Rn(t,he.current);Pn(t,n),i=ea(null,t,r,e,i,n);var o=ta();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gs(t),i.updater=ko,t.stateNode=i,i._reactInternals=t,Gl(t,r,e,n),t=Xl(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Hs(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=wp(r),e=He(r,e),i){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=Cu(null,t,r,He(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),Yl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ku(e,t,r,i,n);case 3:e:{if(Z1(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,w1(e,t),Xi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$n(Error(j(423)),t),t=Su(e,t,r,n,i);break e}else if(r!==i){i=$n(Error(j(424)),t),t=Su(e,t,r,n,i);break e}else for(ze=Nt(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,Ue=null,n=x1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=pt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return C1(t),e===null&&Ql(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Dl(r,i)?l=null:o!==null&&Dl(r,o)&&(t.flags|=32),Q1(e,t),me(e,t,l,n),t.child;case 6:return e===null&&Ql(t),null;case 13:return K1(e,t,n);case 4:return qs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),wu(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,H(qi,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!Ce.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ut(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Zl(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Zl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=$e(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),Cu(e,t,r,i,n);case 15:return U1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),zi(e,t),t.tag=1,ke(r)?(e=!0,Zi(t)):e=!1,Pn(t,n),D1(t,r,i),Gl(t,r,i,n),Xl(null,t,r,!0,e,n);case 19:return G1(e,t,n);case 22:return W1(e,t,n)}throw Error(j(156,t.tag))};function dd(e,t){return Oc(e,t)}function yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new yp(e,t,n,r)}function da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wp(e){if(typeof e=="function")return da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ps)return 11;if(e===bs)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")da(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return tn(n.children,i,o,t);case Ns:l=8,i|=8;break;case yl:return e=Fe(12,n,t,i|2),e.elementType=yl,e.lanes=o,e;case wl:return e=Fe(13,n,t,i),e.elementType=wl,e.lanes=o,e;case Cl:return e=Fe(19,n,t,i),e.elementType=Cl,e.lanes=o,e;case Cc:return Eo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yc:l=10;break e;case wc:l=9;break e;case Ps:l=11;break e;case bs:l=14;break e;case yt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Eo(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=Cc,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wo(0),this.expirationTimes=Wo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fa(e,t,n,r,i,o,l,a,u){return e=new Cp(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gs(o),e}function kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fd(e){if(!e)return $t;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ke(n))return f1(e,n,t)}return t}function pd(e,t,n,r,i,o,l,a,u){return e=fa(n,r,!0,e,i,o,l,a,u),e.context=fd(null),n=e.current,r=ge(),i=Mt(n),o=ut(r,i),o.callback=t??null,Pt(n,o,i),e.current.lanes=i,Zr(e,i,r),Se(e,r),e}function Lo(e,t,n,r){var i=t.current,o=ge(),l=Mt(i);return n=fd(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(i,t,l),e!==null&&(Qe(e,i,l,o),Ei(e,i,l)),l}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pa(e,t){Ru(e,t),(e=e.alternate)&&Ru(e,t)}function Sp(){return null}var hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ha(e){this._internalRoot=e}_o.prototype.render=ha.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Lo(e,t,null,null)};_o.prototype.unmount=ha.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Lo(null,e,null,null)}),t[dt]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&Zc(e)}};function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function jp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=lo(l);o.call(c)}}var l=pd(t,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=l,e[dt]=l.current,Rr(e.nodeType===8?e.parentNode:e),an(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=lo(u);a.call(c)}}var u=fa(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=u,e[dt]=u.current,Rr(e.nodeType===8?e.parentNode:e),an(function(){Lo(t,u,n,r)}),u}function No(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=lo(l);a.call(u)}}Lo(t,l,e,i)}else l=jp(n,t,e,i,r);return lo(l)}Bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Ts(t,n|1),Se(t,Y()),!(I&6)&&(On=Y()+500,Vt()))}break;case 13:an(function(){var r=ft(e,1);if(r!==null){var i=ge();Qe(r,e,1,i)}}),pa(e,1)}};Fs=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ge();Qe(t,e,134217728,n)}pa(e,134217728)}};Uc=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var r=ge();Qe(n,e,t,r)}pa(e,t)}};Wc=function(){return O};Qc=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};bl=function(e,t,n){switch(t){case"input":if(jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=yo(r);if(!i)throw Error(j(90));Sc(r),jl(r,i)}}}break;case"textarea":Ec(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Mc=aa;Rc=an;var Ep={usingClientEntryPoint:!1,Events:[Gr,xn,yo,Pc,bc,aa]},or={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lp={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ic(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Sp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{mo=vi.inject(Lp),et=vi}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ep;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ma(t))throw Error(j(200));return kp(e,t,null,n)};be.createRoot=function(e,t){if(!ma(e))throw Error(j(299));var n=!1,r="",i=hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fa(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new ha(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Ic(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return an(e)};be.hydrate=function(e,t,n){if(!zo(t))throw Error(j(200));return No(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!ma(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=hd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=pd(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _o(t)};be.render=function(e,t,n){if(!zo(t))throw Error(j(200));return No(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!zo(e))throw Error(j(40));return e._reactRootContainer?(an(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};be.unstable_batchedUpdates=aa;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return No(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md)}catch(e){console.error(e)}}md(),mc.exports=be;var _p=mc.exports,gd,Fu=_p;gd=Fu.createRoot,Fu.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Iu="popstate";function zp(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return cs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:so(i)}return Pp(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Np(){return Math.random().toString(36).substr(2,8)}function $u(e,t){return{usr:e.state,key:e.key,idx:t}}function cs(e,t,n,r){return n===void 0&&(n=null),Hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||Np()})}function so(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pp(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Et.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(Hr({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function f(){a=Et.Pop;let _=m(),p=_==null?null:_-c;c=_,u&&u({action:a,location:w.location,delta:p})}function g(_,p){a=Et.Push;let d=cs(w.location,_,p);c=m()+1;let h=$u(d,c),x=w.createHref(d);try{l.pushState(h,"",x)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(x)}o&&u&&u({action:a,location:w.location,delta:1})}function v(_,p){a=Et.Replace;let d=cs(w.location,_,p);c=m();let h=$u(d,c),x=w.createHref(d);l.replaceState(h,"",x),o&&u&&u({action:a,location:w.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:so(_);return d=d.replace(/ $/,"%20"),X(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return e(i,l)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Iu,f),u=_,()=>{i.removeEventListener(Iu,f),u=null}},createHref(_){return t(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(_){return l.go(_)}};return w}var Ou;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ou||(Ou={}));function bp(e,t,n){return n===void 0&&(n="/"),Mp(e,t,n,!1)}function Mp(e,t,n,r){let i=typeof t=="string"?Zn(t):t,o=ga(i.pathname||"/",n);if(o==null)return null;let l=xd(e);Rp(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=Up(o);a=Hp(l[u],c,r)}return a}function xd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Tt([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xd(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Vp(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of yd(o.path))i(o,l,u)}),t}function yd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=yd(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Rp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Tp=/^:[\w-]+$/,Fp=3,Ip=2,$p=1,Op=10,Ap=-2,Au=e=>e==="*";function Vp(e,t){let n=e.split("/"),r=n.length;return n.some(Au)&&(r+=Ap),t&&(r+=Ip),n.filter(i=>!Au(i)).reduce((i,o)=>i+(Tp.test(o)?Fp:o===""?$p:Op),r)}function Dp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Hp(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",f=Vu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Vu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:Tt([o,f.pathname]),pathnameBase:Kp(Tt([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=Tt([o,f.pathnameBase]))}return l}function Vu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Bp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,m,f)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let w=a[f]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Bp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),vd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ga(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Wp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e;return{pathname:n?n.startsWith("/")?n:Qp(n,t):t,search:Gp(r),hash:qp(i)}}function Qp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function va(e,t){let n=Zp(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xa(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=Hr({},e),X(!i.pathname||!i.pathname.includes("?"),fl("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),fl("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),fl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=Wp(i,a),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),Kp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const wd=["post","put","patch","delete"];new Set(wd);const Xp=["get",...wd];new Set(Xp);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}const ya=S.createContext(null),Jp=S.createContext(null),Dt=S.createContext(null),Po=S.createContext(null),Ht=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Cd=S.createContext(null);function e2(e,t){let{relative:n}=t===void 0?{}:t;Kn()||X(!1);let{basename:r,navigator:i}=S.useContext(Dt),{hash:o,pathname:l,search:a}=Sd(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Tt([r,l])),i.createHref({pathname:u,search:a,hash:o})}function Kn(){return S.useContext(Po)!=null}function Yr(){return Kn()||X(!1),S.useContext(Po).location}function kd(e){S.useContext(Dt).static||S.useLayoutEffect(e)}function bo(){let{isDataRoute:e}=S.useContext(Ht);return e?p2():t2()}function t2(){Kn()||X(!1);let e=S.useContext(ya),{basename:t,future:n,navigator:r}=S.useContext(Dt),{matches:i}=S.useContext(Ht),{pathname:o}=Yr(),l=JSON.stringify(va(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return kd(()=>{a.current=!0}),S.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=xa(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Tt([t,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[t,r,l,o,e])}function Sd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Dt),{matches:i}=S.useContext(Ht),{pathname:o}=Yr(),l=JSON.stringify(va(i,r.v7_relativeSplatPath));return S.useMemo(()=>xa(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function n2(e,t){return r2(e,t)}function r2(e,t,n,r){Kn()||X(!1);let{navigator:i}=S.useContext(Dt),{matches:o}=S.useContext(Ht),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Yr(),m;if(t){var f;let _=typeof t=="string"?Zn(t):t;u==="/"||(f=_.pathname)!=null&&f.startsWith(u)||X(!1),m=_}else m=c;let g=m.pathname||"/",v=g;if(u!=="/"){let _=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=bp(e,{pathname:v}),w=a2(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Tt([u,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:Tt([u,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&w?S.createElement(Po.Provider,{value:{location:Br({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Et.Pop}},w):w}function i2(){let e=f2(),t=Yp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const o2=S.createElement(i2,null);class l2 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Ht.Provider,{value:this.props.routeContext},S.createElement(Cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s2(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ya);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ht.Provider,{value:t},r)}function a2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);m>=0||X(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let f=l[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=m),f.route.id){let{loaderData:g,errors:v}=n,y=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,f,g)=>{let v,y=!1,w=null,_=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||o2,u&&(c<0&&g===0?(y=!0,_=null):c===g&&(y=!0,_=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let h;return v?h=w:y?h=_:f.route.Component?h=S.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,S.createElement(s2,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?S.createElement(l2,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var jd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(jd||{}),ao=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ao||{});function u2(e){let t=S.useContext(ya);return t||X(!1),t}function c2(e){let t=S.useContext(Jp);return t||X(!1),t}function d2(e){let t=S.useContext(Ht);return t||X(!1),t}function Ed(e){let t=d2(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function f2(){var e;let t=S.useContext(Cd),n=c2(ao.UseRouteError),r=Ed(ao.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function p2(){let{router:e}=u2(jd.UseNavigateStable),t=Ed(ao.UseNavigateStable),n=S.useRef(!1);return kd(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Br({fromRouteId:t},o)))},[e,t])}function h2(e){let{to:t,replace:n,state:r,relative:i}=e;Kn()||X(!1);let{future:o,static:l}=S.useContext(Dt),{matches:a}=S.useContext(Ht),{pathname:u}=Yr(),c=bo(),m=xa(t,va(a,o.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(m);return S.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function rt(e){X(!1)}function m2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Et.Pop,navigator:o,static:l=!1,future:a}=e;Kn()&&X(!1);let u=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:o,static:l,future:Br({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=Zn(r));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:y="default"}=r,w=S.useMemo(()=>{let _=ga(m,u);return _==null?null:{location:{pathname:_,search:f,hash:g,state:v,key:y},navigationType:i}},[u,m,f,g,v,y,i]);return w==null?null:S.createElement(Dt.Provider,{value:c},S.createElement(Po.Provider,{children:n,value:w}))}function g2(e){let{children:t,location:n}=e;return n2(ds(t),n)}new Promise(()=>{});function ds(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,ds(r.props.children,o));return}r.type!==rt&&X(!1),!r.props.index||!r.props.children||X(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ds(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}function v2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function x2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function y2(e,t){return e.button===0&&(!t||t==="_self")&&!x2(e)}const w2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],C2="6";try{window.__reactRouterVersion=C2}catch{}const k2="startTransition",Du=m0[k2];function S2(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=zp({window:i,v5Compat:!0}));let l=o.current,[a,u]=S.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=S.useCallback(f=>{c&&Du?Du(()=>u(f)):u(f)},[u,c]);return S.useLayoutEffect(()=>l.listen(m),[l,m]),S.createElement(m2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const j2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",E2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:c,preventScrollReset:m,viewTransition:f}=t,g=v2(t,w2),{basename:v}=S.useContext(Dt),y,w=!1;if(typeof c=="string"&&E2.test(c)&&(y=c,j2))try{let h=new URL(window.location.href),x=c.startsWith("//")?new URL(h.protocol+c):new URL(c),E=ga(x.pathname,v);x.origin===h.origin&&E!=null?c=E+x.search+x.hash:w=!0}catch{}let _=e2(c,{relative:i}),p=L2(c,{replace:l,state:a,target:u,preventScrollReset:m,relative:i,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return S.createElement("a",fs({},g,{href:y||_,onClick:w||o?r:d,ref:n,target:u}))});var Hu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hu||(Hu={}));var Bu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bu||(Bu={}));function L2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,u=bo(),c=Yr(),m=Sd(e,{relative:l});return S.useCallback(f=>{if(y2(f,n)){f.preventDefault();let g=r!==void 0?r:so(c)===so(m);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[c,u,m,r,i,n,e,o,l,a])}var pe=function(){return pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pe.apply(this,arguments)};function Ur(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",jr="-moz-",$="-webkit-",Ld="comm",Mo="rule",wa="decl",_2="@import",_d="@keyframes",z2="@layer",zd=Math.abs,Ca=String.fromCharCode,ps=Object.assign;function N2(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Nd(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Mi(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function An(e,t,n){return e.slice(t,n)}function Ye(e){return e.length}function Pd(e){return e.length}function hr(e,t){return t.push(e),e}function P2(e,t){return e.map(t).join("")}function Uu(e,t){return e.filter(function(n){return!ot(n,t)})}var Ro=1,Vn=1,bd=0,Ae=0,J=0,Gn="";function To(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ro,column:Vn,length:l,return:"",siblings:a}}function xt(e,t){return ps(To("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fn(e){for(;e.root;)e=xt(e.root,{children:[e]});hr(e,e.siblings)}function b2(){return J}function M2(){return J=Ae>0?oe(Gn,--Ae):0,Vn--,J===10&&(Vn=1,Ro--),J}function Ze(){return J=Ae<bd?oe(Gn,Ae++):0,Vn++,J===10&&(Vn=1,Ro++),J}function nn(){return oe(Gn,Ae)}function Ri(){return Ae}function Fo(e,t){return An(Gn,e,t)}function hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R2(e){return Ro=Vn=1,bd=Ye(Gn=e),Ae=0,[]}function T2(e){return Gn="",e}function pl(e){return Nd(Fo(Ae-1,ms(e===91?e+2:e===40?e+1:e)))}function F2(e){for(;(J=nn())&&J<33;)Ze();return hs(e)>2||hs(J)>3?"":" "}function I2(e,t){for(;--t&&Ze()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Fo(e,Ri()+(t<6&&nn()==32&&Ze()==32))}function ms(e){for(;Ze();)switch(J){case e:return Ae;case 34:case 39:e!==34&&e!==39&&ms(J);break;case 40:e===41&&ms(e);break;case 92:Ze();break}return Ae}function $2(e,t){for(;Ze()&&e+J!==57;)if(e+J===84&&nn()===47)break;return"/*"+Fo(t,Ae-1)+"*"+Ca(e===47?e:Ze())}function O2(e){for(;!hs(nn());)Ze();return Fo(e,Ae)}function A2(e){return T2(Ti("",null,null,null,[""],e=R2(e),0,[0],e))}function Ti(e,t,n,r,i,o,l,a,u){for(var c=0,m=0,f=l,g=0,v=0,y=0,w=1,_=1,p=1,d=0,h="",x=i,E=o,L=r,k=h;_;)switch(y=d,d=Ze()){case 40:if(y!=108&&oe(k,f-1)==58){Mi(k+=R(pl(d),"&","&\f"),"&\f",zd(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=pl(d);break;case 9:case 10:case 13:case 32:k+=F2(y);break;case 92:k+=I2(Ri()-1,7);continue;case 47:switch(nn()){case 42:case 47:hr(V2($2(Ze(),Ri()),t,n,u),u);break;default:k+="/"}break;case 123*w:a[c++]=Ye(k)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:p==-1&&(k=R(k,/\f/g,"")),v>0&&Ye(k)-f&&hr(v>32?Qu(k+";",r,n,f-1,u):Qu(R(k," ","")+";",r,n,f-2,u),u);break;case 59:k+=";";default:if(hr(L=Wu(k,t,n,c,m,i,a,h,x=[],E=[],f,o),o),d===123)if(m===0)Ti(k,t,L,L,x,o,f,a,E);else switch(g===99&&oe(k,3)===110?100:g){case 100:case 108:case 109:case 115:Ti(e,L,L,r&&hr(Wu(e,L,L,0,0,i,a,h,i,x=[],f,E),E),i,E,f,a,r?x:E);break;default:Ti(k,L,L,L,[""],E,0,a,E)}}c=m=v=0,w=p=1,h=k="",f=l;break;case 58:f=1+Ye(k),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&M2()==125)continue}switch(k+=Ca(d),d*w){case 38:p=m>0?1:(k+="\f",-1);break;case 44:a[c++]=(Ye(k)-1)*p,p=1;break;case 64:nn()===45&&(k+=pl(Ze())),g=nn(),m=f=Ye(h=k+=O2(Ri())),d++;break;case 45:y===45&&Ye(k)==2&&(w=0)}}return o}function Wu(e,t,n,r,i,o,l,a,u,c,m,f){for(var g=i-1,v=i===0?o:[""],y=Pd(v),w=0,_=0,p=0;w<r;++w)for(var d=0,h=An(e,g+1,g=zd(_=l[w])),x=e;d<y;++d)(x=Nd(_>0?v[d]+" "+h:R(h,/&\f/g,v[d])))&&(u[p++]=x);return To(e,t,n,i===0?Mo:a,u,c,m,f)}function V2(e,t,n,r){return To(e,t,n,Ld,Ca(b2()),An(e,2,-2),0,r)}function Qu(e,t,n,r,i){return To(e,t,n,wa,An(e,0,r),An(e,r+1,-1),r,i)}function Md(e,t,n){switch(N2(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+jr+e+U+e+e;case 5936:switch(oe(e,t+11)){case 114:return $+e+U+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+U+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+U+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+U+e+e;case 6165:return $+e+U+"flex-"+e+e;case 5187:return $+e+R(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return $+e+U+"flex-item-"+R(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":U+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return $+e+U+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+U+R(e,"shrink","negative")+e;case 5292:return $+e+U+R(e,"basis","preferred-size")+e;case 6060:return $+"box-"+R(e,"-grow","")+$+e+U+R(e,"grow","positive")+e;case 4554:return $+R(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!ot(e,/flex-|baseline/))return U+"grid-column-align"+An(e,t)+e;break;case 2592:case 3360:return U+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ot(r.props,/grid-\w+-end/)})?~Mi(e+(n=n[t].value),"span",0)?e:U+R(e,"-start","")+e+U+"grid-row-span:"+(~Mi(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":U+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ot(r.props,/grid-\w+-start/)})?e:U+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+jr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mi(e,"stretch",0)?Md(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return U+i+":"+o+c+(l?U+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(oe(e,t+6)===121)return R(e,":",":"+$)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(oe(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+U+"$2box$3")+e;case 100:return R(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function uo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function D2(e,t,n,r){switch(e.type){case z2:if(e.children.length)break;case _2:case wa:return e.return=e.return||e.value;case Ld:return"";case _d:return e.return=e.value+"{"+uo(e.children,r)+"}";case Mo:if(!Ye(e.value=e.props.join(",")))return""}return Ye(n=uo(e.children,r))?e.return=e.value+"{"+n+"}":""}function H2(e){var t=Pd(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function B2(e){return function(t){t.root||(t=t.return)&&e(t)}}function U2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case wa:e.return=Md(e.value,e.length,n);return;case _d:return uo([xt(e,{value:R(e.value,"@","@"+$)})],r);case Mo:if(e.length)return P2(n=e.props,function(i){switch(ot(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fn(xt(e,{props:[R(i,/:(read-\w+)/,":"+jr+"$1")]})),fn(xt(e,{props:[i]})),ps(e,{props:Uu(n,r)});break;case"::placeholder":fn(xt(e,{props:[R(i,/:(plac\w+)/,":"+$+"input-$1")]})),fn(xt(e,{props:[R(i,/:(plac\w+)/,":"+jr+"$1")]})),fn(xt(e,{props:[R(i,/:(plac\w+)/,U+"input-$1")]})),fn(xt(e,{props:[i]})),ps(e,{props:Uu(n,r)});break}return""})}}var W2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Le={},Dn=typeof process<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",Rd="active",Td="data-styled-version",Io="6.1.13",ka=`/*!sc*/
`,co=typeof window<"u"&&"HTMLElement"in window,Q2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY),Z2={},$o=Object.freeze([]),Hn=Object.freeze({});function Fd(e,t,n){return n===void 0&&(n=Hn),e.theme!==n.theme&&e.theme||t||n.theme}var Id=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),K2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,G2=/(^-|-$)/g;function Zu(e){return e.replace(K2,"-").replace(G2,"")}var q2=/(a)(d)/gi,xi=52,Ku=function(e){return String.fromCharCode(e+(e>25?39:97))};function gs(e){var t,n="";for(t=Math.abs(e);t>xi;t=t/xi|0)n=Ku(t%xi)+n;return(Ku(t%xi)+n).replace(q2,"$1-$2")}var hl,$d=5381,En=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Od=function(e){return En($d,e)};function Ad(e){return gs(Od(e)>>>0)}function Y2(e){return e.displayName||e.name||"Component"}function ml(e){return typeof e=="string"&&!0}var Vd=typeof Symbol=="function"&&Symbol.for,Dd=Vd?Symbol.for("react.memo"):60115,X2=Vd?Symbol.for("react.forward_ref"):60112,J2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},th=((hl={})[X2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hl[Dd]=Hd,hl);function Gu(e){return("type"in(t=e)&&t.type.$$typeof)===Dd?Hd:"$$typeof"in e?th[e.$$typeof]:J2;var t}var nh=Object.defineProperty,rh=Object.getOwnPropertyNames,qu=Object.getOwnPropertySymbols,ih=Object.getOwnPropertyDescriptor,oh=Object.getPrototypeOf,Yu=Object.prototype;function Bd(e,t,n){if(typeof t!="string"){if(Yu){var r=oh(t);r&&r!==Yu&&Bd(e,r,n)}var i=rh(t);qu&&(i=i.concat(qu(t)));for(var o=Gu(e),l=Gu(t),a=0;a<i.length;++a){var u=i[a];if(!(u in eh||n&&n[u]||l&&u in l||o&&u in o)){var c=ih(t,u);try{nh(e,u,c)}catch{}}}}return e}function Bn(e){return typeof e=="function"}function Sa(e){return typeof e=="object"&&"styledComponentId"in e}function Jt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function vs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Wr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xs(e,t,n){if(n===void 0&&(n=!1),!n&&!Wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xs(e[r],t[r]);else if(Wr(t))for(var r in t)e[r]=xs(e[r],t[r]);return e}function ja(e,t){Object.defineProperty(e,"toString",{value:t})}function Xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var lh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Xr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(ka);return n},e}(),Fi=new Map,fo=new Map,Ii=1,yi=function(e){if(Fi.has(e))return Fi.get(e);for(;fo.has(Ii);)Ii++;var t=Ii++;return Fi.set(e,t),fo.set(t,e),t},sh=function(e,t){Ii=t+1,Fi.set(e,t),fo.set(t,e)},ah="style[".concat(Dn,"][").concat(Td,'="').concat(Io,'"]'),uh=new RegExp("^".concat(Dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ch=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},dh=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ka),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(uh);if(u){var c=0|parseInt(u[1],10),m=u[2];c!==0&&(sh(m,c),ch(e,m,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Xu=function(e){for(var t=document.querySelectorAll(ah),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Dn)!==Rd&&(dh(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function fh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ud=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Dn,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Dn,Rd),r.setAttribute(Td,Io);var l=fh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},ph=function(){function e(t){this.element=Ud(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Xr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hh=function(){function e(t){this.element=Ud(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ju=co,gh={isServer:!co,useCSSOMInjection:!Q2},po=function(){function e(t,n,r){t===void 0&&(t=Hn),n===void 0&&(n={});var i=this;this.options=pe(pe({},gh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&co&&Ju&&(Ju=!1,Xu(this)),ja(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(f){var g=function(p){return fo.get(p)}(f);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(f);if(v===void 0||!v.size||y.length===0)return"continue";var w="".concat(Dn,".g").concat(f,'[id="').concat(g,'"]'),_="";v!==void 0&&v.forEach(function(p){p.length>0&&(_+="".concat(p,","))}),u+="".concat(y).concat(w,'{content:"').concat(_,'"}').concat(ka)},m=0;m<a;m++)c(m);return u}(i)})}return e.registerId=function(t){return yi(t)},e.prototype.rehydrate=function(){!this.server&&co&&Xu(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pe(pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mh(i):r?new ph(i):new hh(i)}(this.options),new lh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(yi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(yi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(yi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vh=/&/g,xh=/^\s*\/\/.*$/gm;function Wd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wd(n.children,t)),n})}function yh(e){var t,n,r,i=Hn,o=i.options,l=o===void 0?Hn:o,a=i.plugins,u=a===void 0?$o:a,c=function(g,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},m=u.slice();m.push(function(g){g.type===Mo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(vh,n).replace(r,c))}),l.prefix&&m.push(U2),m.push(D2);var f=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace(xh,""),p=A2(y||v?"".concat(y," ").concat(v," { ").concat(_," }"):_);l.namespace&&(p=Wd(p,l.namespace));var d=[];return uo(p,H2(m.concat(B2(function(h){return d.push(h)})))),d};return f.hash=u.length?u.reduce(function(g,v){return v.name||Xr(15),En(g,v.name)},$d).toString():"",f}var wh=new po,ys=yh(),Qd=Je.createContext({shouldForwardProp:void 0,styleSheet:wh,stylis:ys});Qd.Consumer;Je.createContext(void 0);function ws(){return S.useContext(Qd)}var Ch=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ys);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ja(this,function(){throw Xr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ys),this.name+t.hash},e}(),kh=function(e){return e>="A"&&e<="Z"};function ec(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;kh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Zd=function(e){return e==null||e===!1||e===""},Kd=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Zd(o)&&(Array.isArray(o)&&o.isCss||Bn(o)?r.push("".concat(ec(i),":"),o,";"):Wr(o)?r.push.apply(r,Ur(Ur(["".concat(i," {")],Kd(o),!1),["}"],!1)):r.push("".concat(ec(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in W2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ft(e,t,n,r){if(Zd(e))return[];if(Sa(e))return[".".concat(e.styledComponentId)];if(Bn(e)){if(!Bn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ft(i,t,n,r)}var o;return e instanceof Ch?n?(e.inject(n,r),[e.getName(r)]):[e]:Wr(e)?Kd(e):Array.isArray(e)?Array.prototype.concat.apply($o,e.map(function(l){return Ft(l,t,n,r)})):[e.toString()]}function Gd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bn(n)&&!Sa(n))return!1}return!0}var Sh=Od(Io),jh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gd(t),this.componentId=n,this.baseHash=En(Sh,n),this.baseStyle=r,po.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Jt(i,this.staticRulesId);else{var o=vs(Ft(this.rules,t,n,r)),l=gs(En(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Jt(i,l),this.staticRulesId=l}else{for(var u=En(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var f=this.rules[m];if(typeof f=="string")c+=f;else if(f){var g=vs(Ft(f,t,n,r));u=En(u,g+m),c+=g}}if(c){var v=gs(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Jt(i,v)}}return i},e}(),Ea=Je.createContext(void 0);Ea.Consumer;var gl={};function Eh(e,t,n){var r=Sa(e),i=e,o=!ml(e),l=t.attrs,a=l===void 0?$o:l,u=t.componentId,c=u===void 0?function(x,E){var L=typeof x!="string"?"sc":Zu(x);gl[L]=(gl[L]||0)+1;var k="".concat(L,"-").concat(Ad(Io+L+gl[L]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):u,m=t.displayName,f=m===void 0?function(x){return ml(x)?"styled.".concat(x):"Styled(".concat(Y2(x),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Zu(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;y=function(x,E){return w(x,E)&&_(x,E)}}else y=w}var p=new jh(n,g,r?i.componentStyle:void 0);function d(x,E){return function(L,k,P){var D=L.attrs,T=L.componentStyle,je=L.defaultProps,Bt=L.foldedComponentIds,Ut=L.styledComponentId,Jr=L.target,Oo=Je.useContext(Ea),qn=ws(),Wt=L.shouldForwardProp||qn.shouldForwardProp,z=Fd(k,Oo,je)||Hn,b=function(mt,Ee,nt){for(var Yn,Zt=pe(pe({},Ee),{className:void 0,theme:nt}),Ao=0;Ao<mt.length;Ao+=1){var ei=Bn(Yn=mt[Ao])?Yn(Zt):Yn;for(var gt in ei)Zt[gt]=gt==="className"?Jt(Zt[gt],ei[gt]):gt==="style"?pe(pe({},Zt[gt]),ei[gt]):ei[gt]}return Ee.className&&(Zt.className=Jt(Zt.className,Ee.className)),Zt}(D,k,z),M=b.as||Jr,A={};for(var V in b)b[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&b.theme===z||(V==="forwardedAs"?A.as=b.forwardedAs:Wt&&!Wt(V,M)||(A[V]=b[V]));var Qt=function(mt,Ee){var nt=ws(),Yn=mt.generateAndInjectStyles(Ee,nt.styleSheet,nt.stylis);return Yn}(T,b),Ve=Jt(Bt,Ut);return Qt&&(Ve+=" "+Qt),b.className&&(Ve+=" "+b.className),A[ml(M)&&!Id.has(M)?"class":"className"]=Ve,A.ref=P,S.createElement(M,A)}(h,x,E)}d.displayName=f;var h=Je.forwardRef(d);return h.attrs=v,h.componentStyle=p,h.displayName=f,h.shouldForwardProp=y,h.foldedComponentIds=r?Jt(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var L=[],k=1;k<arguments.length;k++)L[k-1]=arguments[k];for(var P=0,D=L;P<D.length;P++)xs(E,D[P],!0);return E}({},i.defaultProps,x):x}}),ja(h,function(){return".".concat(h.styledComponentId)}),o&&Bd(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function tc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var nc=function(e){return Object.assign(e,{isCss:!0})};function qd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bn(e)||Wr(e))return nc(Ft(tc($o,Ur([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ft(r):nc(Ft(tc(r,t)))}function Cs(e,t,n){if(n===void 0&&(n=Hn),!t)throw Xr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,qd.apply(void 0,Ur([i],o,!1)))};return r.attrs=function(i){return Cs(e,t,pe(pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Cs(e,t,pe(pe({},n),i))},r}var Yd=function(e){return Cs(Eh,e)},C=Yd;Id.forEach(function(e){C[e]=Yd(e)});var Lh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gd(t),po.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(vs(Ft(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&po.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function _h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qd.apply(void 0,Ur([e],t,!1)),i="sc-global-".concat(Ad(JSON.stringify(r))),o=new Lh(r,i),l=function(u){var c=ws(),m=Je.useContext(Ea),f=Je.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,m,c.stylis),Je.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,m,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,m,c.stylis]),null};function a(u,c,m,f,g){if(o.isStatic)o.renderStyles(u,Z2,m,g);else{var v=pe(pe({},c),{theme:Fd(c,f,l.defaultProps)});o.renderStyles(u,v,m,g)}}return Je.memo(l)}const zh=_h`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root{
        --default-background-color: #000;
        --Header-height: 70px;
        --mobile-Header-height: 60px;
        --header-text-color-hover: #ae8aff;
        --header-background-color-hover: #9b65ff30;
        --header-hover-animation-duraction: 0.3s ease-in-out;
        --header-changing-positon-transition-duraction: 0.3s;
        --continueWatching-bar-color: #ae8aff;
        --Secundary-text-color: #A0A0A0;
        --Seriado-Age-color-16: #EC1D25;
        --Seriado-New: #ec241a;
        --Seriado-infos-extras: #141519;
        --Seriado-add-to-list-border-color: #ae8aff;
        --Go-to-series-about: #ae8aff;
        --submain-color: rgb(220, 220, 220);
        --description-font-color: #cecece;
        --Seriado-btn-season-list-hover-color: #ae8aff;
        --Star-color: #ae8aff;
        --default-hover-duraction: 0.3s;
        --modal-default-background-color: #141519;
        --Like-Button-transition: 0.2s;
        --background-text-modal: #9b65ff30;
        --sucess: #38cf5a;
        --changing_card_backgroundColor: #939595;
        --changing_card_span_color: #ae8aff;
        --home-cards-hover: 0.3s;
        --watch-button-background-color: #ae8aff;
    }

    html{
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar{
        width: 8px;
        height: 100%;
    }

    *::-webkit-scrollbar-track {
        background: #252835;
    }

    *::-webkit-scrollbar-thumb {
        background: #484d64;
        border-radius: 15px;
    }

    *::-webkit-scrollbar-thumb:hover{
        background: #747c9d;
    }

    *::-webkit-scrollbar-thumb:active{
        background: #626984;
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--default-background-color);
    }

    body::-webkit-scrollbar{
        width: 10px;
        height: 100%x;
    }

    body::-webkit-scrollbar-track {
        background: #252835;
    }

    body::-webkit-scrollbar-thumb {
        background: #484d64;
        border-radius: 15px;
    }

    body::-webkit-scrollbar-thumb:hover{
        background: #747c9d;
    }

    body::-webkit-scrollbar-thumb:active{
        background: #626984;
    }
`,Nh=()=>{const e=S.useRef(null),t={backBtn:S.useRef(null),nextBtn:S.useRef(null),cardsList:S.useRef(null),buttonsCardList:S.useRef(null)};function n(o){if(t.cardsList.current&&t.buttonsCardList.current){const l=t.cardsList.current.querySelectorAll("li"),a=t.buttonsCardList.current.querySelectorAll("li");if(o-1>l.length||o<0)return window.alert("Número de card maior/menor que a lista atual");if(l.item(o-1).classList.contains("active"))return;i();for(let u=0;u<l.length;u++)l.item(u).className="",a.item(u).className="";l.item(o-1).className="visible",a.item(o-1).className="active",r()}else window.alert("Erro ao mudar de card. Tente novamente.")}const r=()=>{e.current=setInterval(()=>{if(t.cardsList.current&&t.buttonsCardList.current){const o=t.cardsList.current.querySelectorAll("li"),l=t.buttonsCardList.current.querySelectorAll("li");let a=null;for(let u=0;u<o.length;u++)o.item(u).classList.contains("visible")&&(a=u);if(a==null)return;o.item(a).className="",l.item(a).className="",console.log(a),console.log(o.length),a>=o.length-1?(o.item(0).className="visible",l.item(0).className="active"):(o.item(a+1).className="visible",l.item(a+1).className="active")}},10100)},i=()=>{e.current&&(clearInterval(e.current),e.current=null)};return S.useEffect(()=>(r(),()=>i()),[]),S.useEffect(()=>()=>i(),[e]),s.jsxs(Ph,{children:[s.jsxs("ul",{className:"CardsView",ref:t.cardsList,children:[s.jsx("li",{className:"visible",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=960/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-LTR.png",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=420/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Tall-Cropped.png",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Logo.png",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(ne,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/G24H1N3MP-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/G24H1N3MP-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G24H1N3MP-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(ne,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/GW4HM7WK9-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/GW4HM7WK9-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GW4HM7WK9-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(ne,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/G0XHWM1EK-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/G0XHWM1EK-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G0XHWM1EK-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(ne,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/GZJH3D719-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/GZJH3D719-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GZJH3D719-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(ne,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})})]}),s.jsx(bh,{children:s.jsxs("ul",{ref:t.buttonsCardList,children:[s.jsx("li",{className:"active",children:s.jsx("button",{onClick:()=>n(1),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(2),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(3),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(4),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(5),children:s.jsx("span",{})})})]})})]})},Ph=C.div`
    position: relative;
    width: 100%;
    height: 75vh;
    min-height: 490px; //Evitar erros de estilo do componente quando o height for menor (Em casos de aparelhos mobile)
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul.CardsView{
        position: relative;
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul.CardsView li{
        position: absolute;
        width: 80%;
        height: 85%;
        border-radius: 20px;
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.15);
        transition: 0.6s;
        user-select: none;
        pointer-events: none;
    }

    ul.CardsView li .inside{
        width: 100%;
        height: 100%;
        background-color: rgb(23, 23, 23);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 20vw;
        color: var(--header-text-color-hover); */
        /* text-shadow: #9b65ff 0px 0 100px; */

        overflow: hidden; /* Evitar que a imagem saia e o efeito do border-radius fiquei ruim */
    }

    ul.CardsView li:not(.visible){
        opacity: 0;
        pointer-events: none;
    }

    ul.CardsView li.visible{
        pointer-events: auto;
    }

    button.changeCard{
        position: absolute;
        padding: 40px 2px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        /* margin: 0 1vw; */
        border-radius: 7px;

        display: none;
    }

    button.changeCard:nth-child(1){
        left: 6px;
    }

    button.changeCard:nth-child(2){
        right: 6px;
    }

    button.changeCard:hover{
        background-color: var(--header-background-color-hover);
    }

    button.changeCard svg{
        width: 70px;
        height: 70px;
        fill: #f0f0f0;
    }

    @media only screen and (max-width: 710px){
        height: 130vw;
        /* height: 750px; */

        ul.CardsView li{
            width: 100%;
            height: 100%;
            border-radius: 0px;
            padding: 0px;
        }

        ul.CardsView li .inside{
            border-radius: 0px;
            font-size: 80px;
            width: 100%;
            height: 100%;
            overflow: visible;
        }

        button.changeCard{
            border: 2px solid #fff;
            background-color: var(--header-background-color-hover);
        }
    }
`,lr=C.div`
    position: relative;
    width: 100%;
    height: 100%;

    img{
        position: absolute;
        object-fit: cover;
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    @media only screen and (max-width: 710px){
        display: none;
    }
`,sr=C.div`
    display: none;

    @media only screen and (max-width: 710px){
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    
        img{
            position: absolute;
            object-fit: cover;
            width: 100%;
            pointer-events: none;
            z-index: 0;
        }
    }

`,ar=C.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    padding: 0 0 30px 30px;

    img{
        width: 30vw;
        pointer-events: none;
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 5px;
    }

    div:nth-child(2) svg{
        height: 25px;
        width: 25px;
        fill: red;
    }

    span{
        font-size: 15px;
        width: 340px;
        color: #FFF;
        margin: 5px 0;
    }

    div:nth-child(4){ /* Botões de ação */
        display: flex;
        align-items: center;
        gap: 15px;
    }

    div:nth-child(4) a{
        display: flex;
        align-items: center;
        gap: 6px;
        background: #FF640A;
        padding: 10.5px 20px;
        font-size: 18px;
        font-weight: 600;
        color: #FFf;
        border: 2px solid rgba(255, 255, 255, 0.25);
        background: var(--watch-button-background-color);
        border-radius: 5px;
        text-decoration: none;
    }
    
    div:nth-child(4) a svg{
        height: 25px;
        width: 25px;
        fill: #Fff;
    }

    div:nth-child(4) button{
        padding: 3px 4.5px;
        border: 3px solid var(--header-text-color-hover);
        border-radius: 5px;
        background: transparent;
        cursor: pointer;
    }
    
    div:nth-child(4) button svg{
        height: 35px;
        width: 35px;
        fill: var(--header-text-color-hover);
    }

    @media only screen and (max-width: 710px){
        align-items: center;
        gap: 10px;
        padding: 30px 0px 50px;

        img{
            width: 50vw;
        }

        span{
            display: none;
        }
    }
`,ur=C.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`,bh=C.div`
    position: absolute;
    bottom: 0;
    z-index: 1;

    ul{
        list-style: none;
        display: flex;
        gap: 5px;
    }

    ul li button{
        transition: 0.5s;
        width: 20px;
        height: 12px;
        border-radius: 5px;
        background: #6c2e7c;
        display: flex;
        overflow: hidden;
        border: none;
        cursor: pointer;
    }

    ul li button span{
        border-radius: 5px;
        height: 100%;
        width: 0%;
        background: #ffce69;
    }

    @keyframes ChangingCardAnimation{
        from{
            width: 0%;
        }
        to{
            width: 100%;
        }
    }

    ul li.active button{
        width: 70px;
    }

    ul li.active button span{
        width: 100%;
        animation: 10s linear ChangingCardAnimation;
    }

    @media only screen and (max-width: 710px){
        ul li button{
            width: 30px;
            height: 15px;
        }

        ul li.active button{
            width: 90px;
        }
    }
`,Mh=({keyProp:e,link:t,img:n,animeName:r,DubLeg:i,NSeasons:o,NEpisodes:l,stars:a,starNumbers:u})=>s.jsx(Rh,{children:s.jsx(ne,{to:t,children:s.jsxs(Th,{children:[s.jsx(Fh,{children:s.jsxs(Ih,{children:[s.jsx("img",{src:n,alt:"Undefined"}),s.jsx("h4",{children:r}),s.jsx($h,{children:i?"Dub | Leg":"Legendado"})]})}),s.jsxs(Oh,{children:[s.jsx(Ah,{style:{backgroundImage:`url(${n})`,backgroundRepeat:"no-repeat",backgroundSize:"auto"}}),s.jsxs(Vh,{children:[s.jsx("h4",{children:r}),s.jsxs(Dh,{children:[s.jsxs(Hh,{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx("span",{children:a}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"})}),s.jsxs("span",{children:["(",u,")"]})]}),o>1?s.jsxs("p",{children:[o," Temporadas"]}):s.jsxs("p",{children:[o," Temporada"]}),l>1?s.jsxs("p",{children:[l," Episódios"]}):s.jsxs("p",{children:[l," Episódio"]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod exercitationem eos voluptas repellendus, illum reiciendis aut laborum eaque, architecto ratione dolores minima sed ipsa soluta possimus sapiente, vero autem!"})]})]})]})]})})},e),Rh=C.li`
    color: #Fff;
    font-size: 30px;

    a{
        text-decoration: none;
    }
`,Th=C.div`
    display: flex;
    flex-direction: column;
    position: relative;
`,Fh=C.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 5px;
    transition: var(--home-cards-hover);

    img{
        width: 16vw;
    }

    h4{
        font-size: 14px;
        color: #FFF;
        font-weight: 500;
    }

    @media only screen and (max-width: 950px){
        img{
            width: 18vw;
        }
    }

    @media only screen and (max-width: 800px){
        img{
            width: 22vw;
        }
    }

    @media only screen and (max-width: 710px){
        &:hover{
            background: rgba(19, 19, 19, 1);
        }
    }

    @media only screen and (max-width: 590px){
        img{
            width: 26vw;
            min-width: 150px;
        }
    }

    @media only screen and (max-width: 480px){
        img{
            width: 41vw;
            min-width: 150px;
        }
    }
`,Ih=C.div`
    padding: 8px;
`,$h=C.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 13px;
`,Oh=C.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Evitar vazamento do blur da img */
    transition: var(--home-cards-hover);
    opacity: 0;

    &:hover{
        opacity: 1;
    }

    @media only screen and (max-width: 710px){
        display: none;
    }
`,Ah=C.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px);
`,Vh=C.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(14, 14, 14, 0.9);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4{
        font-size: 16px;
        color: #FFF;
        font-weight: 500;
    }
`,Dh=C.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p{
        font-size: 15px;
        color: var(--submain-color);
    }

    span{
        margin-top: 8px;
        font-size: 13px;
        color: #fff;    
    }
`,Hh=C.div`
    display: flex;
    align-items: center;
    gap: 3px;

    svg{
        width: 25px;
        height: 25px;
        fill: red;
    }

    svg:nth-child(3){
        width: 18px;
        height: 18px;
        fill: var(--submain-color);
    }

    span{
        font-size: 15px;
        color: var(--submain-color);
    }
`,rc=({listName:e,CardsNumber:t,keyProp:n,link:r,img:i,animeName:o,DubLeg:l,NSeasons:a,NEpisodes:u,stars:c,starNumbers:m})=>s.jsxs(Bh,{children:[s.jsx("h2",{children:e}),s.jsx("ul",{children:Array.from({length:t},(f,g)=>s.jsx(Mh,{keyProp:g,link:r,img:i,animeName:o,DubLeg:l,NSeasons:a,NEpisodes:u,stars:c,starNumbers:m}))})]},n),Bh=C.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2{
        color: white;
        font-size: 30px;
    }

    ul{
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        overflow-x: auto;
        padding: 1vw 3vw 10px 2.4vw;
    }

    ul::-webkit-scrollbar{
        width: 100%;
        height: 10px;
    }

    ul::-webkit-scrollbar-track {
        background: #0f0f0f;
    }

    ul::-webkit-scrollbar-thumb {
        background: #282828;
    }

    ul::-webkit-scrollbar-thumb:active{
        background: #1b1b1b;
    }

    @media only screen and (max-width: 710px){
        ul{
            gap: 15px;
        }
    }

    @media only screen and (max-width: 590px){
        ul{
            gap: 0px;
            padding: 1vw 3vw 10px 1vw;
        }
    }
`,Uh=({keyProp:e})=>s.jsx(Wh,{children:s.jsx(ne,{to:"/watch",children:s.jsxs("div",{className:"BackCardWatching",children:[s.jsxs(Qh,{children:[s.jsx("img",{src:"https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ee4d1756-b3f8-48d6-9e2c-b9e5d9cba6eb/237ef83d-93f4-42e9-b7c7-fdb19e045eb2?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=2000",alt:"Serie Name photo"}),s.jsx(Zh,{children:s.jsx("div",{className:"bar"})})]}),s.jsxs(Kh,{className:"MoreInfos",children:[s.jsx(ne,{to:"/about",children:"Doutor House"}),s.jsxs("h3",{children:["T2 E",e+1," - O jogo"]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas accusamus quod sequi quidem incidunt vitae sunt?"}),s.jsxs("span",{children:["Continuar T2 E",e+1]})]})]})})},e),Wh=C.li`
    transition: 0.1s;

    &:hover{
        transform: scale(1.1);
    }

    a{
        text-decoration: none;
        user-select: none;
    }

    a .BackCardWatching{
        padding: 2px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 11px;
        position: relative;
        overflow: hidden;
    }

    a .BackCardWatching .MoreInfos{
        transition: 80ms;
        opacity: 0;
    }

    &:hover a .BackCardWatching .MoreInfos{
        opacity: 1;
    }
`,Qh=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;

    img{
        width: 22vw;
        pointer-events: none;
    }

    @media only screen and (max-width: 1000px){
        img{
            width: 32vw;
        }
    }

    @media only screen and (max-width: 900px){
        img{
            width: 37vw;
            min-width: 300px;
        }
    }

    @media only screen and (max-width: 780px){
        img{
            width: 43vw;
            min-width: 310px;
        }
    }

    @media only screen and (max-width: 710px){
        img{
            width: 40vw;
            min-width: 260px;
        }
    }

    @media only screen and (max-width: 590px){
        img{
            width: 43vw;
            min-width: 230px;
        }
    }
`,Zh=C.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    background-color: rgb(15, 15, 15);

    .bar{
        width: 50%;
        height: 100%;
        background: var(--continueWatching-bar-color);
    }
`,Kh=C.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(15, 15, 15);
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    a{
        font-size: 1vw;
        color: var(--Secundary-text-color);
    }

    a:hover{
        text-decoration: underline;
    }

    h3{
        color: #FFF;
        font-weight: 600;
        font-size: 1.5vw;
    }

    span:nth-child(3){
        color: #FFF;
        font-size: 0.95vw;
    }

    span:nth-child(4){
        position: absolute;
        bottom: 10px;
        color: var(--header-text-color-hover);
        font-weight: 600;
        font-size: 1.5vw;
    }

    @media only screen and (max-width: 1000px){
        a{
            font-size: 14px;
        }

        h3{
            font-size: 20px;
        }

        span:nth-child(3){
            font-size: 14px;
        }

        span:nth-child(4){
            font-size: 20px;
        }
    }

    @media only screen and (max-width: 740px){

    
        a{
            font-size: 12px;
        }

        h3{
            font-size: 18px;
        }

        span:nth-child(3){
            font-size: 12px;
        }

        span:nth-child(4){
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 580px){
        display: none;
    }
`,Gh=({listName:e,CardsNumber:t})=>s.jsxs(qh,{children:[s.jsx("h2",{children:e}),s.jsx("ul",{children:Array.from({length:t},(n,r)=>s.jsx(Uh,{keyProp:r}))})]}),qh=C.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    ul{
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 1vw 3vw 10px 3vw;
        overflow-x: auto;
    }

    ul::-webkit-scrollbar{
        width: 100%;
        height: 10px;
    }

    ul::-webkit-scrollbar-track {
        background: #0f0f0f;
    }

    ul::-webkit-scrollbar-thumb {
        background: #282828;
    }

    ul::-webkit-scrollbar-thumb:active{
        background: #1b1b1b;
    }
`,Yh=()=>s.jsxs(Xh,{children:[s.jsx(Gh,{listName:"Continuar assistindo",CardsNumber:12}),s.jsx(rc,{listName:"Filmes recém lançados",CardsNumber:12,keyProp:1,link:"/about",img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1024/catalog/crunchyroll/8a6279fc503fe64b451a0e63afc65828.jpg",animeName:"The Quintessential Quintuplets",DubLeg:!0,NSeasons:2,NEpisodes:12,stars:"4.8",starNumbers:"65.4K"}),s.jsx(rc,{listName:"Séries recém lançadas",CardsNumber:12,keyProp:1,link:"/about",img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1024/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg",animeName:"One Piece",DubLeg:!0,NSeasons:2,NEpisodes:12,stars:"4.8",starNumbers:"65.4K"})]}),Xh=C.div`
    position: relative;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 1;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,212,255,0) 100%);;

    h2{
        margin-left: 3vw;
        color: white;
        font-size: 30px;
    }
`,Jh=()=>s.jsxs(e4,{children:[s.jsx(Nh,{}),s.jsx(Yh,{})]}),e4=C.section`
`,t4=()=>{const[e,t]=S.useState(window.location.pathname),n=bo(),[r,i]=S.useState(!1);return S.useEffect(()=>{t(window.location.pathname)},[n]),s.jsx(r4,{children:s.jsxs(i4,{children:[s.jsxs(o4,{children:[s.jsx(a4,{className:r?"active":"",onClick:()=>i(!r),children:s.jsx("span",{})}),s.jsx(ne,{to:"/",children:s.jsx("img",{src:"https://raw.githubusercontent.com/Lullka/LK-Streaming/417243cadb867132308aa24fcb505d61f61b24f3/public/svg/lkLogo.svg",alt:"Logo do Luka"})})]}),s.jsx(l4,{className:r?"active":"",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(ne,{to:"/browse",className:e=="/browse"?"active":"",children:"Início"})}),s.jsx("li",{children:s.jsx(ne,{to:"/films",className:e=="/films"?"active":"",children:"Filmes"})}),s.jsx("li",{children:s.jsx(ne,{to:"/series",className:e=="/series"?"active":"",children:"Séries"})}),s.jsx("li",{children:s.jsx("a",{href:"https://github.com/Lullka",target:"_blank",className:e=="/portifolio"?"active":"",children:"Portifólio"})})]})}),s.jsxs(s4,{children:[s.jsx(ne,{to:"/search",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z",strokeWidth:"2",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx(n4,{})]})]})})},n4=()=>{const[e,t]=S.useState(!1);return s.jsxs(u4,{children:[s.jsxs(c4,{onClick:()=>t(!e),children:[s.jsx("img",{src:"https://github.com/Lullka/LK-Streaming/blob/main/public/imgs/perfilPhoto.jpg?raw=true",alt:"User Photo"})," "]}),s.jsxs(d4,{className:e?"active":"",children:[s.jsx(ne,{to:"/user",children:"Seu perfil"}),s.jsx("button",{children:"Deslogar"})]})]})},r4=C.nav`
    width: 100%;
    position: relative;
    height: var(--Header-height); /* Introduz o tamanho comun do header na parte superior da página */

    @media only screen and (max-width: 580px){
        height: var(--mobile-Header-height);
    }
`,i4=C.nav`
    z-index: 2;
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--header-hover-animation-duraction);
    height: var(--Header-height); //Introduz o tamanho comun do header na parte superior da página
    position: fixed;
    top: 0;
    background: linear-gradient(170deg, rgba(102, 16, 242, 0.2) 18%, rgba(60, 0, 136, 0) 40%), linear-gradient(336deg, rgba(111, 66, 193, .2) 8%, rgba(60, 0, 136, 0) 40.5%);

    &:active{ /* Introduz o estilo padrão na página inicial quando o usuário scroll suficiente */
        height: var(--Header-height); //Introduz o tamanho comun do header na parte superior da página
        position: fixed;
        top: 0;
        background: linear-gradient(170deg, rgba(102, 16, 242, 0.2) 18%, rgba(60, 0, 136, 0) 40%), linear-gradient(336deg, rgba(111, 66, 193, .2) 8%, rgba(60, 0, 136, 0) 40.5%);
    }

    img{
        width: 55px;
        height: 55px;
    }

    img:active{
        filter: grayscale(15%);
    }

    @media only screen and (max-width: 780px){
        padding: 0 30px 0 30px;
    }

    @media only screen and (max-width: 580px){
        height: var(--mobile-Header-height);

        img{
            width: 50px;
            height: 50px;
        }

        &:active{
            height: var(--mobile-Header-height);
        }
    }

    @media only screen and (max-width: 490px){
        padding: 0 20px;
    }
`,o4=C.div`
    display: flex;
    align-items: center;
    gap: 25px;

    img{
        pointer-events: none;
    }
`,l4=C.div`
    ul{
        display: flex;
        gap: 10px;
        list-style: none;
    }

    li a{
        text-decoration: none;
        font-size: 22px;
        font-weight: 400;
        padding: 9px 11px;
        border-radius: 4px;
        color: white;
        transition: var(--header-hover-animation-duraction);
    }

    li a:hover,
    li a.active{
        background-color: var(--header-background-color-hover);
        color: var(--header-text-color-hover);
    }

    @media only screen and (max-width: 780px){
        position: fixed;
        top: var(--Header-height);
        left: 0;
        background: rgba(23, 23, 23, 0.8);
        height: calc(100vh - var(--Header-height));
        width: 100%;
        z-index: 2;
        transition: 0.1s;

        ul{
            height: 100%;
            width: 100%;
            flex-direction: column;
            gap: 0px;
        }

        ul li{
            display: flex;
            height: 100%;
        }
        
        ul li a{
            width: 100%;
            height: 100%;
            display: flex;
            border-radius: 0px;
            align-items: center;
            justify-content: center;
        }

        ul li:nth-child(4) a{
            background: #9b65ff90;
            color: #e0e0e0;
        }

        ul li:nth-child(4) a:hover{
            background: var(--header-text-color-hover);
            color: #ffffff;
        }

        &:not(.active){
            opacity: 0;
            user-select: none;
            pointer-events: none;
        }
    }

    @media only screen and (max-width: 580px){
        top: var(--mobile-Header-height);
        height: calc(100vh - var(--mobile-Header-height));
    }
`,s4=C.div`
    display: flex;
    align-items: center;
    gap: 8px;

    a{
        padding: 7px 16px;
        border-radius: 6px;
        transition: var(--header-hover-animation-duraction);
    }

    a:hover{
        background-color: var(--header-background-color-hover);
    }

    a svg{
        width: 42px;
        height: 42px;
    }

    @media only screen and (max-width: 490px){
        gap: 2px;

        a{
            padding: 7px 12px;
        }    
    }
`,a4=C.button`
    position: relative;
    width: 42px;
    height: 36px;
    display: none;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    span{
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
        transition: 0.2s ease-in-out;
    }

    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
        top: 0;
        transition: 0.2s ease-in-out;
    }

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
        bottom: 0;
        transition: 0.2s ease-in-out;
    }

    &.active span{
        opacity: 0;
    }

    &.active:before{
        transform: rotate(45deg);
        top: 16px;
    }

    &.active:after{
        transform: rotate(-45deg);
        bottom: 15px;
        transition: 0.2s ease-in-out;

    }

    @media only screen and (max-width: 780px){
        display: flex;
    }

    @media only screen and (max-width: 580px){
        width: 35px;

        span{
            height: 3px;
        }

        &:before{
            height: 3px;
            top: 5px;
        }

        &:after{
            bottom: 5px;
            height: 3px;
        }
    }
`,u4=C.div`
    position: relative;
`,c4=C.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 7px 16px;
    border-radius: 6px;
    transition: var(--header-hover-animation-duraction);

    &:hover{
        background-color: var(--header-background-color-hover);
    }

    img{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }
`,d4=C.div`
    position: Absolute;
    background: rgb(23, 23, 23);
    border: 4px solid rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    width: 220px;
    left: -95px;
    top: 80px;
    transition: 0.1s;

    a,
    button{
        display: flex;
        justify-content: center;
        font-size: 17px;
        color: #FFF;
        text-decoration: none;
        font-weight: 600;
        border-radius: 0;
        padding: 10px;
        transition: 0.2s;
    }

    button{
        background: var(--header-text-color-hover);
        border: none;
        cursor: pointer;
    }

    button:hover{
        background: var(--header-background-color-hover);
        color: var(--Secundary-text-color);
    }

    a:hover{
        background-color: rgba(255, 255, 255, 0.15);
    }

    &:not(.active){
        user-select: none;
        pointer-events: none;
        opacity: 0;
    }
`,f4=()=>s.jsxs(p4,{children:[s.jsxs(h4,{children:[s.jsxs("div",{children:[" ",s.jsx("img",{src:"https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABapFTnXqUmqu4TUKmRoLY3srwHCqKTqQ8hM4fOSDPkLTpnYeN0aKCce265qJ1g0AyezKLizgL59-6Z6Om8JgEFyiSl_qV6a-XdzR.jpg?r=857",alt:"serieImg"})]}),s.jsxs("div",{children:[" ",s.jsx("img",{src:"https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABapFTnXqUmqu4TUKmRoLY3srwHCqKTqQ8hM4fOSDPkLTpnYeN0aKCce265qJ1g0AyezKLizgL59-6Z6Om8JgEFyiSl_qV6a-XdzR.jpg?r=857",alt:"serieImg"})]}),s.jsxs("div",{children:[" ",s.jsx("img",{src:"https://occ-0-404-1740.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUckOeRLLQGMwr0Jk0kSeOLnl6m5eerSm-ibbRR2YRJ46iLe5sjZAEq1-1p82MEKAkaq2Xr-RV1lAlBSZyQizPfWHRcXWbr24j22X62NbHe62kXVf4AC1dFzS4gitSSkpFlWJ65IvLhKTwBSpQnP47NoCcmb7ec7jvpWmavj3SddPgimiFc7.webp?r=32e",alt:"serie title"})]})]}),s.jsx(m4,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=840,height=1260/keyart/GW4HM7WK9-backdrop_tall",alt:"serieImg"})})]}),p4=C.div`
    position: relative;
    width: 100vw;
    height: 55vh;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 780px){
        height: 65vw;
    }
`,h4=C.div`
    width: 100%;
    height: 100%;

    div{
        pointer-events: none;
        user-select: none;
    }

    div:nth-child(1){
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    div:nth-child(1) img{
        width: 110%;
        object-fit: cover;
        /* filter: blur(10px); */
    }

    div:nth-child(2){
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;

        display: none;
    }

    div:nth-child(2) img{
        height: 100%;
    }

    div:nth-child(3){
        position: absolute;
        bottom: 5vw;
        left: 5vw;
    }

    div:nth-child(3) img{
        width: 25vw;
    }

    @media only screen and (max-width: 780px){
        display: none;
    }
`,m4=C.div`
    display: none;

    @media only screen and (max-width: 780px){
        display: flex;
        z-index: -1;
        
        img{
            z-index: -1;
            width: 100%;
            user-select: none;
            pointer-events: none;
        }
    }
`,g4=({setShowingModal:e})=>s.jsx(v4,{children:s.jsxs(y4,{children:[s.jsx("h1",{children:"Lançamentos na plataforma"}),s.jsx("span",{className:"bar"}),s.jsx(w4,{}),s.jsx(x4,{onClick:()=>e(!1)})]})}),v4=C.div`
    position: fixed;
    left: 0;
    top: var(--Header-height);
    width: 100%;
    height: calc(100% - var(--Header-height)); 
    z-index: 2;
    background: rgba(14, 14, 14, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: auto;
    transition: 0.2s;

    @media only screen and (max-width: 580px){
        top: var(--mobile-Header-height); 
        height: calc(100% - var(--mobile-Header-height)); 
    }
`,x4=C.button`
    position: absolute;
    right: -45px;
    top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: none;
    transition: 0.2s;

    &:before{
        content:'';
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #FFF;
        transform: rotate(45deg);
        border-radius: 5px;
    }

    &:after{
        content:'';
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #FFF;
        transform: rotate(-45deg);
        border-radius: 5px;
    }

    @media only screen and (max-width: 850px){
        top: auto;
        right: auto;
        bottom: 5px;
        width: 50px;
        height: 50px;
        z-index: 1;

        &:before{
            height: 4px;
        }

        &:after{
            height: 4px;
        }
    }
`,y4=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgb(20, 21, 25);
    padding: 30px 50px;
    border-radius: 10px;
    width: 700px;

    span.bar{
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
    }

    &:after{
        content:'';
        position: absolute;
        bottom: 10px;
        left: 0;
        content: '';
        width: 100%;
        height: 70px;
        background: linear-gradient(0deg, rgb(20, 21, 25) 45%, rgba(0,0,0,0) 100%);
    }

    @media only screen and (max-width: 920px){
        h1{
            font-size: 25px;
        }
    }

    @media only screen and (max-width: 850px){
        width: 100%;
        height: 100%;
        padding: 30px 50px 70px;
        border-radius: 0px;
        display: flex;
        align-items: center;

        h1{
            font-size: 23px;
            width: 100%;

        }

        &:after{
            bottom: 40px;
        }
    }

    @media only screen and (max-width: 580px){
        padding: 30px 20px;

        h1{
            font-size: 20px;
        }

        &:after{
            bottom: 10px;
        }
    }
`,w4=C.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 50vh;
    overflow: auto;
    margin-top: 5px;
    padding-bottom: 25px; /* Evitar efeito da sombra ficar sobre o card */

    li:hover{
        background: rgb(30, 32, 39);
    }

    @media only screen and (max-width: 850px){
        height: 100%;
        width: 100%;
    }
`,La=e=>{const[t,n]=S.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsxs(C4,{onClick:()=>n(!t),style:{width:e.width,height:e.height},children:[s.jsx("svg",{style:{width:e.SVGSize,height:e.SVGSize},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",children:s.jsx("path",{d:"M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10zM21 39h-2.553l-5.084-9.131V39H11V25h2.477l5.16 9.348V25H21v14zm14 0H25V25h9.75v2.367h-7.096v3.104h6.6v2.359h-6.6v3.808H35V39zm16.668 0H48.73l-2.729-10.467L43.279 39h-3.004L37 25h2.836l2.068 9.615L44.41 25h3.293l2.404 9.779L52.213 25H55l-3.332 14z"})}),s.jsx("span",{style:{fontSize:e.fontSize},children:"Lançamento na plataforma!"})]}),t?s.jsx(g4,{setShowingModal:n}):s.jsx(s.Fragment,{})]})},C4=C.div`
    width: 270px;
    height: 50px;
    background: var(--Seriado-infos-extras); /* #141519 #6a2bff */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    gap: 10px;
    user-select: none;
    cursor: pointer;

    svg{
        fill: var(--Seriado-New);
        width: 30px;
        height: 30px;
        border-radius: 4px;
        padding: -2px;
    }

    span{
        color: #fff;
        font-weight: 500;
    }
`,k4=()=>{const[e,t]=S.useState(!1),n={description:S.useRef(null)};return s.jsx(S4,{children:s.jsxs(j4,{children:[s.jsxs(E4,{children:[s.jsx("h1",{children:"O problema dos 3 corpos"}),s.jsxs(L4,{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(_4,{children:"Dublado | legendado"})]}),s.jsx(La,{width:"270px",height:"50px",SVGSize:"30px",fontSize:"16px"}),s.jsxs(z4,{children:[s.jsxs(ne,{to:"/watch",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","data-t":"play-svg","aria-labelledby":"play-svg","aria-hidden":"true",role:"img",children:[s.jsx("title",{id:"play-svg",children:"Reproduzir"}),s.jsx("path",{d:"M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"})]}),"Assistir"]}),s.jsxs("button",{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})}),"Adicionar à fila"]}),s.jsxs("button",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[s.jsx("title",{}),s.jsx("g",{id:"Complete",children:s.jsx("g",{"data-name":"add",id:"add-2",children:s.jsxs("g",{children:[s.jsx("line",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"12",x2:"12",y1:"19",y2:"5"}),s.jsx("line",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"5",x2:"19",y1:"12",y2:"12"})]})})})]}),"Adicionar à lista"]})]}),s.jsxs(P4,{children:[s.jsx(N4,{ref:n.description,className:e?"showing":"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur odit doloremque beatae, voluptatum quasi laboriosam? Facere odio rem doloribus, corporis alias nisi, necessitatibus aperiam, labore sequi eos magnam possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel dolore nihil natus accusantium, fugiat ullam quaerat repudiandae pariatur, ducimus aliquam maiores porro iste quidem nam quos debitis. Quos, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam culpa perferendis, quo magni qui eius similique mollitia commodi doloremque possimus harum voluptate sunt laboriosam, sapiente laudantium atque eligendi neque!"}),s.jsx("button",{onClick:()=>{t(!e)},children:e?"Mostrar menos":"Mostrar mais"})]}),s.jsx(b4,{})]}),s.jsxs(M4,{children:[s.jsx("h3",{children:"Assistir episódio 1"}),s.jsx(ne,{to:"/watch",children:s.jsxs(R4,{children:[s.jsx("img",{src:"https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240318-o-problema-dos-3-corpos-1-1024x576-1.jpg?resize=555%2C508&ssl=1",alt:"photoFilm"}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"})})]})})]})]})})},S4=C.div`
    padding: 30px 60px 0 60px;
    background: linear-gradient(0deg, var(--default-background-color) 0%, var(--default-background-color) 65%, rgba(0,212,255,0) 100%);

    @media only screen and (max-width: 1048px){
        padding: 30px 30px 0 30px;
    }   

    @media only screen and (max-width: 460px){
        padding: 15px 15px 0 15px;
    }
`,j4=C.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media only screen and (max-width: 780px){
        gap: 0px;
    }
`,E4=C.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (min-width: 890px){
        width: 56vw;
    }

    h1{
        text-transform: uppercase;
        color: #Fff;
        font-weight: 600;
    }
`,L4=C.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        fill: var(--Seriado-Age-color-16);
        width: 30px;
        height: 30px;
    }
`,_4=C.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`,z4=C.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;

    a,
    button{
        padding: 5px 20px;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 19px;
        font-weight: bold;
        color: #Fff;
        background: transparent;
        border: 3px solid var(--Seriado-add-to-list-border-color);
        cursor: pointer;
        user-select: none;
        border-radius: 5px;
        text-decoration: none;
    }

    a{
        width: 100%;
        display: none;
        background: var(--watch-button-background-color);
        border: 2px solid rgba(255, 255, 255, 0.25);
    }

    button:nth-child(2):hover,
    button:nth-child(2):hover svg{
        background: var(--Seriado-add-to-list-border-color);
        fill: #fff;
    }

    button:nth-child(3){
        color: #A0A0A0;
        border: 3px solid transparent;
    }

    button:nth-child(3):hover{
        background-color: #141519;
        border: 3px solid #141519;
    }

    a svg,
    button svg{
        fill: var(--Seriado-add-to-list-border-color);
        width: 35px;
        height: 35px;
    }

    button:nth-child(3) svg{
        stroke: #A0A0A0;
    }

    @media only screen and (max-width: 780px){
        flex-wrap: wrap;
        gap: 10px;

        a,
        button{
            justify-content: center;
            font-size: 19px;
        }

        a{
            display: flex;
        }

        button:nth-child(2),
        button:nth-child(3){
            width: 49.2%;
        }

        button:nth-child(3){
            color: #A0A0A0;
            border: 3px solid #A0A0A0;
        }
    }

    @media only screen and (max-width: 690px){
        gap: 5px;
    }

    @media only screen and (max-width: 540px){
        flex-direction: column;

        button:nth-child(2),
        button:nth-child(3){
            width: 100%;
        }
    }
`,N4=C.div`
    position: relative;
    text-align: justify;
    color: var(--description-font-color);
    overflow: hidden;

    &:not(.showing):before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background: linear-gradient(0deg, rgba(0,0,0,1) 30%, transparent 100%)
    }

    &:not(.showing){
        height: 100px;
    }
`,P4=C.div`
    button{
        font-size: 18px;
        border: none;
        padding: 5px 10px;
        margin-left: -10px;
        background-color: transparent;
        color: var(--Seriado-add-to-list-border-color);
        font-weight: 700;
        cursor: pointer;
    }
`,b4=C.div``,M4=C.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #ccb7ff;
    font-size: 30px;


    @media only screen and (min-width: 890px){
        margin-top: 10px;
    }

    @media only screen and (max-width: 780px){
        display: none;
    }
`,R4=C.div`
    position: relative;
    width: 360px;
    height: 220px;
    background: black;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: transparent 0 0 90px 20px;
    transition: 0.3s;
    
    &:hover{
        box-shadow: #9b65ff 0 0 50px 10px;
    }

    img{
        object-fit: cover;
        width: 100%;
        filter: blur(3px);
    }

    &:hover img{
        filter: blur(4px);
    }

    svg{ 
        position: absolute;
        width: 100px;
        height: 100px;
        transition: 0.2s;
        fill: #Fff;
    }

    &:hover svg{
        fill: #d3d3d3;
    }

    @media only screen and (max-width: 930px){
        width: 330px;
        height: 190px;
    }
`,T4=()=>{const[e,t]=S.useState(!1);return s.jsxs(F4,{children:[s.jsxs(I4,{children:[s.jsxs("button",{onClick:()=>t(!e),className:e?"seasonList desactive":"seasonList",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"arrow-ios-downward",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"})]})})}),s.jsx("h4",{children:"Temporada 1"})]}),s.jsxs($4,{className:e?"":"desactive",children:[s.jsxs("button",{className:"active",children:[s.jsx("span",{children:"Temporada 1"}),s.jsx("span",{children:"(7 episódios)"})]}),s.jsxs("button",{children:[s.jsx("span",{children:"Temporada 2"}),s.jsx("span",{children:"(10 episódios)"})]}),s.jsxs("button",{children:[s.jsx("span",{children:"Temporada 3"}),s.jsx("span",{children:"(9 episódios)"})]}),s.jsxs("button",{children:[s.jsx("span",{children:"Temporada 4"}),s.jsx("span",{children:"(8 episódios)"})]})]})]}),s.jsx(O4,{children:s.jsx("ul",{children:Array.from({length:12},(n,r)=>s.jsx("li",{children:s.jsx(ne,{to:"/",children:s.jsxs(A4,{children:[s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/33e6a8e90a15d3f7d1b619a03d663b31.jpg",alt:`Episode ${r+1}`}),s.jsxs("div",{children:[s.jsxs("h4",{children:["Episode ",r+1]}),s.jsx("span",{children:"Leg | Dub"})]})]})})},r))})})]})},F4=C.div`
    padding: 15px 60px 0 60px;
    background-color: var(--default-background-color);

    @media only screen and (max-width: 1024px){
        padding: 30px 30px 0 30px;
        margin-top: -10px; /* Temporario: Evitar que apareça o fundo da imagem */
    }  

    @media only screen and (max-width: 460px){
        padding: 15px 15px 0 15px;
    }
`,I4=C.div`
    position: relative;

    button.seasonList{
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: transparent;
        cursor: pointer;
        color: white;
        border: none;
        padding: 8px 4px;
        transition: var(--default-hover-duraction);
        width: 270px;
    }

    button.seasonList h4{
        font-size: 25px;
    }

    button.seasonList:hover{
        color: var(--Seriado-btn-season-list-hover-color);
    }
    
    button.seasonList:hover svg{
        fill: var(--Seriado-btn-season-list-hover-color);
    }

    button.seasonList.desactive{
        background-color: var(--modal-default-background-color);
    }

    button.seasonList.desactive svg{
        transform: rotate(180deg);
    }

    button svg{
        transition: var(--default-hover-duraction);
        width: 30px;
        height: 30px;
        fill: #fff;
    }
`,$4=C.div`
    position: absolute;
    width: 270px;
    background-color: var(--modal-default-background-color);
    display: flex;
    flex-direction: column;
    transition: var(--default-hover-duraction);
    padding: 0 0 8px 0;

    &.desactive{
        pointer-events: none;
        opacity: 0;
    }

    button{
        height: 35px;
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 10px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: var(--Secundary-text-color);
        font-weight: 600;
        font-size: 16px;
    }

    button:hover,
    button.active{
        background-color: #0d0d0f;
    }
`,O4=C.div`
    user-select: none;
    
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);/ /* repeat(4, 1fr) o 4 equivale a 4 cards mostrados */
        /* grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));  */
        /* grid-template-columns: repeat(auto-fit, 1fr); */ /* auto-fit significa que ele preencherá com a quantidade certa a depender do tamanho */
        gap: 15px;
    }
    
    ul a{
        text-decoration: none;
    }

    @media only screen and (max-width: 900px){
        ul{
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); 
            gap: 15px;
        }
    }
`,A4=C.div`
    padding: 0.4vw;
    display: flex;
    flex-direction: column;
    gap: 0.2vw;

    img{
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    h4{
        color: white;
    }
        
    span{
        color: var(--Secundary-text-color);
        font-weight: 600;
    }
    &:hover{
        background-color: rgba(255, 255, 255, 0.06);
    }

    @media only screen and (max-width: 515px){
        flex-direction: row;

        img{
            width: 30vw;
            min-width: 170px;
        }

        div{
            display: flex;
            flex-direction: column;
            padding: 12px 10px;
            gap: 5px;
        }
    }
`,V4=()=>{const e=()=>{window.scrollTo({top:0,behavior:"auto"})};return S.useEffect(()=>{e()},[]),s.jsxs(D4,{children:[s.jsx(f4,{}),s.jsx(k4,{}),s.jsx(T4,{})]})},D4=C.section``,vl=({index:e,svgSize:t,minutes:n,minutesSize:r})=>s.jsx(H4,{children:s.jsx(ne,{to:"/",children:s.jsxs(B4,{children:[s.jsxs(U4,{className:"controlImgCardSerie",children:[s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/d3ce283e1b948937c240d94ac1f5d8c9.jpg",alt:`Imagem do episódio ${e+1} da série Y`}),s.jsxs("svg",{style:{width:t,height:t},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","data-t":"rating-a14-svg","aria-labelledby":"rating-a14-svg","aria-hidden":"true",role:"img",children:[s.jsx("title",{id:"rating-a14-svg",children:"Não recomendado para menores de 14 anos"}),s.jsx("path",{d:"m62.37 4.31-.019-.035c-.363-1.252-1.451-2.322-2.74-2.685h-.035c-.345-.109-.762-.127-1.143-.127H5.604c-.326 0-.708.018-1.016.09h-.036c-1.67.345-3.012 1.96-3.084 3.647v22.186c0 10.195.018 20.734 0 31.11v.073c-.055.962.344 1.941 1.07 2.721.726.78 1.687 1.234 2.649 1.252h53.246c.29 0 .67-.018 1.016-.09 1.778-.418 3.174-2.177 3.084-3.919V6.977c-.018-.254 0-.507 0-.743.018-.69.036-1.36-.146-1.887l-.018-.036z",fill:"#F58220"}),s.jsx("path",{d:"M5.61 0c.327 0 .635.018.98.036h50.906l.943-.018c.544 0 1.07.036 1.597.2 1.76.49 3.247 1.923 3.737 3.682.326.98.2 2.05.217 3.084v51.501c.11 2.485-1.814 4.826-4.208 5.388-.436.109-.89.127-1.343.127-.381 0-.78-.018-1.161-.018H5.175c-2.83-.055-5.297-2.667-5.17-5.497.018-17.76 0-35.537 0-53.315C.077 2.794 1.909.617 4.232.127 4.685.018 5.157 0 5.61 0zM58.44 1.451H5.611c-.327 0-.708.018-1.016.09h-.037c-1.669.346-3.011 1.96-3.084 3.647v26.024c.004 8.99.016 18.194 0 27.273v.073c-.054.961.345 1.94 1.07 2.72.726.781 1.688 1.234 2.65 1.253h53.245c.29 0 .671-.019 1.016-.091 1.778-.417 3.175-2.177 3.084-3.919V6.966c-.018-.254 0-.508 0-.744.018-.69.036-1.36-.145-1.886l-.018-.037-.018-.036c-.363-1.252-1.452-2.322-2.74-2.685h-.036c-.345-.109-.762-.127-1.143-.127z",fill:"#FFF"}),s.jsx("path",{d:"m49.348 20.424-4.136 15.62h4.172l.363-15.638h-.399v.018zm-2.867-4.698H55.3v20.317h3.882v4.807h-3.882v7.057h-6.114V40.85h-8.726v-5.496l6.022-19.628zM30.862 15.726h5.46v32.181H30.1V23.98a10.249 10.249 0 0 1-1.76 1.45c-.635.4-1.324.745-2.068 1.017V20.66c1.106-.635 2.05-1.36 2.83-2.195a8.954 8.954 0 0 0 1.76-2.74M15.677 16.052H9.364l-4.427 32.09h8.853l.49-5.858h2.794l.49 5.859h8.853l-4.408-32.09h-6.332zm0 7.402 1.488 13.17h-2.976l1.488-13.17z",fill:"#FFF"})]}),s.jsx("span",{style:{fontSize:r},children:n})]}),s.jsxs(W4,{children:[s.jsxs("h5",{children:["Filme ",e+1]}),s.jsx(Q4,{children:"Dublado | legendado"})]})]})})},e),H4=C.li`
    display: flex;

    a{
        text-decoration: none;
        display: flex;
    }
`,B4=C.div`
    width: 100%;
    display: flex;
    transition: var(--default-hover-duraction);

    &:hover{
        opacity: 0.7
    }
`,U4=C.div`
    position: relative;

    img{
        width: 200px;
        height: 100%;
    }

    svg{
        width: 22px;
        height: 22px;
        position: absolute;
        top: 0;
        left: 0;
    }

    span{
        color: #fff;
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 15px;
        font-weight: 400;
        padding: 2px 4px;
        background-color: rgba(0, 0, 0, 0.5)
    }

    @media only screen and (max-width: 780px){
        img{
            width: 150px;
        }
    }
`,W4=C.div`
    padding: 10px 5px 2px 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    
    h5{
        color: #Fff;
        font-size: 16px;
    }
`,Q4=C.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;

    @media only screen and (max-width: 750px){
        font-size: 13px;
    }
`,Z4=({setShowingModal:e})=>{const[t,n]=S.useState(!1);return s.jsx(K4,{children:s.jsxs(q4,{children:[s.jsxs(Y4,{children:[s.jsxs("button",{className:t?"showing":"",onClick:()=>n(!t),children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"arrow-ios-downward",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"})]})})}),"T1 - O Vetor chegou"]}),t?s.jsxs(X4,{children:[s.jsx("li",{children:s.jsxs("button",{className:"active",children:[s.jsx("span",{children:"T1 - O Vetor chegou"}),s.jsx("span",{children:"7 episódios"})]})}),s.jsx("li",{children:s.jsxs("button",{children:[s.jsx("span",{children:"T2 - A camareia viu tudo"}),s.jsx("span",{}),"3 episódios"]})}),s.jsx("li",{children:s.jsxs("button",{children:[s.jsx("span",{children:"T3 - O fim do hotel?"}),s.jsx("span",{children:"10 episódios"})]})})]}):s.jsx(s.Fragment,{})]}),s.jsx(G4,{onClick:()=>e(!1)})]})})},K4=C.div`
    position: fixed;
    left: 0;
    top: var(--Header-height);
    width: 100%;
    height: calc(100% - var(--Header-height)); 
    z-index: 2;
    background: rgba(14, 14, 14, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: auto;
    transition: 0.2s;

    @media only screen and (max-width: 580px){
        top: var(--mobile-Header-height); 
        height: calc(100% - var(--mobile-Header-height)); 
    }
`,G4=C.button`
    position: absolute;
    right: -45px;
    top: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    border: none;
    transition: 0.2s;

    &:before{
        content:'';
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #FFF;
        transform: rotate(45deg);
        border-radius: 5px;
    }

    &:after{
        content:'';
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: #FFF;
        transform: rotate(-45deg);
        border-radius: 5px;
    }

    @media only screen and (max-width: 830px){
        top: auto;
        right: auto;
        bottom: 5px;
        width: 50px;
        height: 50px;

        &:before{
            height: 4px;
        }

        &:after{
            height: 4px;
        }
    }
`,q4=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgb(30, 32, 39);
    border-radius: 10px;

    width: 720px;
    height: 400px;

    span.bar{
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
    }

    /* &:after{
        content:'';
        position: absolute;
        bottom: 10px;
        left: 0;
        content: '';
        width: 100%;
        height: 70px;
        background: linear-gradient(0deg, rgba(14,14,14,1) 45%, rgba(0,0,0,0) 100%);
    } */

    @media only screen and (max-width: 920px){
        h1{
            font-size: 25px;
        }
    }

    @media only screen and (max-width: 830px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
        align-items: center;

        h1{
            font-size: 23px;
        }

        &:after{
            bottom: 40px;
        }
    }

    @media only screen and (max-width: 580px){

        h1{
            font-size: 20px;
        }

        &:after{
            bottom: 10px;
        }
    }
`,Y4=C.div`
    position: relative;
    padding: 20px 30px;
    width: 100%;
    background: rgb(39, 42, 48);
    border-radius: 9px 9px 0 0;
    
    svg{
        fill: #Fff;
        width: 25px;
        height: 25px;
        transition: var(--home-cards-hover);
    }

    button{
        transition: var(--home-cards-hover);
        font-size: 20px;
        cursor: pointer;
        background: transparent;
        border: none;
        font-weight: 600;
        color: #fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    button.showing{
        color: var(--Seriado-btn-season-list-hover-color);
    }

    button.showing svg{
        fill: var(--Seriado-btn-season-list-hover-color);
    }

    @media only screen and (max-width: 830px){
        border-radius: 0;
    }
`,X4=C.ul`
    position: absolute;
    list-style: none;
    display: flex;
    flex-direction: column;
    background: rgb(20, 21, 25);
    padding: 8px 0;
    max-width: 60%;

    li button{
        padding: 7px 10px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        font-size: 17px;
    }

    li button span:nth-child(1){
        max-width: 70%;
        white-space: nowrap;                  
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    li button:hover, 
    li button.active{
        background: rgb(30, 32, 39);
    }
`,J4=()=>{const[e,t]=S.useState(!1),[n,r]=S.useState({like:!1,dislike:!1,likes:416,dislikes:17}),[i,o]=S.useState(!1),[l,a]=S.useState(!1);function u(m){m=="like"&&(n.like?r(f=>({...f,like:!1})):r(f=>({...f,like:!0,dislike:!1}))),m=="dislike"&&(n.dislike?r(f=>({...f,dislike:!1})):r(f=>({...f,like:!1,dislike:!0})))}function c(){window.alert("Código já escrito, apenas não aplicado até o momento")}return s.jsxs(e5,{children:[s.jsxs(o5,{children:[s.jsxs(l5,{children:[s.jsxs(s5,{children:[s.jsx(ne,{to:"/about",children:s.jsx("h4",{children:"Serie Name"})}),s.jsxs("span",{children:["4.6",s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","data-t":"star-svg","aria-labelledby":"star-svg","aria-hidden":"false",role:"img",children:[s.jsx("title",{id:"star-svg",children:"Estrela de Avaliação"}),s.jsx("path",{d:"M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"})]}),"(46.8K)"]})]}),s.jsx(a5,{children:s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})})]}),s.jsxs(u5,{children:[s.jsx("h2",{children:"E4 - Um mundo cheio de apostas"}),s.jsxs(c5,{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(d5,{children:"Dublado | legendado"})]}),s.jsx(f5,{children:"Lançado em 10 de julho de 2025"}),s.jsxs(p5,{children:[s.jsxs(h5,{children:[s.jsxs("button",{onClick:()=>u("like"),className:n.like?"active":"",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[s.jsx("defs",{}),s.jsxs("g",{id:"Icons",children:[s.jsx("path",{className:"cls-1",d:"M12.992,20.912l3.5,1.838A2.131,2.131,0,0,0,19.58,20.5l-.667-3.893a2.129,2.129,0,0,1,.613-1.887l2.828-2.757a2.131,2.131,0,0,0-1.181-3.635l-3.909-.568a2.133,2.133,0,0,1-1.6-1.166L13.911,3.056a2.131,2.131,0,0,0-3.822,0L8.341,6.6a2.133,2.133,0,0,1-1.6,1.166l-3.909.568a2.131,2.131,0,0,0-1.181,3.635l2.828,2.757a2.129,2.129,0,0,1,.613,1.887L4.42,20.5A2.131,2.131,0,0,0,7.512,22.75l3.5-1.838A2.135,2.135,0,0,1,12.992,20.912Z"}),s.jsx("path",{className:"cls-2",d:"M16.49,22.75l-3.5-1.84a2.162,2.162,0,0,0-1.98,0l-3.5,1.84A2.132,2.132,0,0,1,4.42,20.5l.55-3.18a2.114,2.114,0,0,0,2.54.43l3.5-1.84a2.162,2.162,0,0,1,1.98,0l3.5,1.84a2.114,2.114,0,0,0,2.54-.43l.55,3.18A2.132,2.132,0,0,1,16.49,22.75Z"})]}),s.jsx("g",{"data-name":"Layer 4",id:"Layer_4",children:s.jsx("path",{className:"cls-3",d:"M23.053,12.683a3.132,3.132,0,0,0-1.737-5.341l-3.909-.568a1.13,1.13,0,0,1-.851-.619L14.808,2.614a3.131,3.131,0,0,0-5.616,0L7.444,6.155a1.13,1.13,0,0,1-.851.619l-3.909.568A3.132,3.132,0,0,0,.947,12.684L3.776,15.44a1.131,1.131,0,0,1,.326,1l-.667,3.892a3.131,3.131,0,0,0,4.542,3.3l3.5-1.838a1.125,1.125,0,0,1,1.052,0h0l3.5,1.838a3.11,3.11,0,0,0,3.3-.239,3.109,3.109,0,0,0,1.245-3.063L19.9,16.441a1.13,1.13,0,0,1,.326-1Zm-4.226,1.325a3.131,3.131,0,0,0-.9,2.772l.667,3.892a1.131,1.131,0,0,1-1.642,1.193l-3.5-1.838a3.134,3.134,0,0,0-2.914,0l-3.5,1.838a1.131,1.131,0,0,1-1.642-1.193l.667-3.891a3.132,3.132,0,0,0-.9-2.773L2.344,11.251a1.132,1.132,0,0,1,.627-1.93L6.88,8.753A3.128,3.128,0,0,0,9.237,7.04L10.985,3.5a1.165,1.165,0,0,1,2.03,0L14.763,7.04A3.128,3.128,0,0,0,17.12,8.753l3.909.568a1.132,1.132,0,0,1,.627,1.93Z"})})]}),s.jsx("span",{children:n.likes})]}),s.jsxs("button",{onClick:()=>u("dislike"),className:n.dislike?"active":"",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{className:"cls-1",d:"M10.75 6L11.9369 3.15144V3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144V3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931V9C20.9326 9 20.9523 9.04768 20.9244 9.07557L20.8931 9.10687L17.5 12.5",stroke:"#323232","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{className:"cls-2",d:"M9 9H3.13547V9C3.08548 9 3.06044 9.06044 3.09579 9.09579L3.13547 9.13547L7.16787 13.1679C7.68147 13.6815 7.87625 14.4331 7.67671 15.1315L6.06393 20.7762L6.0564 20.8026C6.03711 20.8701 6.1124 20.9251 6.17083 20.8861V20.8861L10.8906 17.7396C11.5624 17.2917 12.4376 17.2917 13.1094 17.7396L17.8186 20.879L17.837 20.8913C17.8928 20.9285 17.9646 20.8761 17.9462 20.8117V20.8117L16.8571 17",stroke:"#323232","stroke-width":"2","stroke-linejoin":"round"}),s.jsx("path",{className:"cls-3",d:"M3 3L21 21",stroke:"#323232","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),s.jsx("span",{children:n.dislikes})]})]}),s.jsx(m5,{onClick:()=>o(!0),children:s.jsx("button",{children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_15_72)",children:[s.jsx("rect",{width:"24",height:"24",fill:"none"}),s.jsx("circle",{className:"cls-1",cx:"7",cy:"12",r:"2",stroke:"#fff",strokeLinejoin:"round"}),s.jsx("circle",{className:"cls-2",cx:"17",cy:"6",r:"2",stroke:"#fff",strokeLinejoin:"round"}),s.jsx("path",{className:"cls-3",d:"M15 7L8.5 11",stroke:"#fff"}),s.jsx("circle",{className:"cls-4",cx:"17",cy:"18",r:"2",stroke:"#fff",strokeLinejoin:"round"}),s.jsx("path",{className:"cls-5",d:"M8.5 13.5L15 17",stroke:"#fff"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_15_72",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})})})]})]})]}),s.jsxs(g5,{children:[s.jsx("div",{className:"SpCard",children:e?s.jsx(s.Fragment,{children:s.jsxs(y5,{children:[s.jsx("span",{className:"ContainerVideoCard",children:"Mais episódios"}),Array.from({length:12},(m,f)=>s.jsx(vl,{index:f,minutes:"24m",svgSize:"22px",minutesSize:"15px"}))]})}):s.jsxs(s.Fragment,{children:[s.jsxs(v5,{children:[s.jsx("span",{className:"ContainerVideoCard",children:"Próximo episódio"}),s.jsx(vl,{index:1,minutes:"24m",svgSize:"22px",minutesSize:"15px"})]}),s.jsxs(x5,{children:[s.jsx("span",{className:"ContainerVideoCard",children:"Episódio anterior"}),s.jsx(vl,{index:1,minutes:"24m",svgSize:"22px",minutesSize:"15px"})]})]})}),s.jsxs("button",{className:"VDesktop",onClick:()=>{t(!e)},children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 1024 1024",children:s.jsx("path",{d:"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"})}),e?"Voltar":"Mostrar episódios"]}),s.jsxs("button",{className:"VMobile",onClick:()=>{a(!l)},children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 1024 1024",children:s.jsx("path",{d:"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"})}),e?"Voltar":"Mostrar episódios"]}),l?s.jsx(Z4,{setShowingModal:a}):s.jsx(s.Fragment,{})]}),s.jsx(t5,{className:i?"active":"",children:s.jsxs(n5,{children:[s.jsx(i5,{onClick:()=>o(!1)}),s.jsx("h1",{children:"Compartilhar"}),s.jsxs(r5,{children:[s.jsx("span",{children:"http://192.168.118.242:5173/watch"}),s.jsx("button",{onClick:()=>c(),children:"Copiar"})]})]})})]})},e5=C.div`
    width: 100%;
    display: flex;
    padding: 10px 50px;
    justify-content: space-between;

    @media only screen and (max-width: 970px){
        flex-direction: column;
        gap: 10px;
    }

    @media only screen and (max-width: 570px){
        padding: 10px 40px;
    }

    @media only screen and (max-width: 570px){
        padding: 10px 20px;
    }
`,t5=C.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0,0,0,0.3);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(.active){
        display: none;
    }
`,n5=C.div`
    width: 520px;
    background: var(--modal-default-background-color);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 25px 30px 50px;

    h1{
        color: #FFF;
    }
`,r5=C.div`
    padding: 15px 20px;
    width: 100%;
    background: var(--background-text-modal);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflox-x: auto;
    overflow-y: visible;

    span{
        font-size: 18px;
        font-weight: 500;
        color: #bcbcbc;
    }

    button{
        position: relative;
        padding: 5px 10px;
        border: 2px solid var(--description-font-color);
        color: var(--description-font-color);
        background: transparent;
        font-size: 17px;
        font-weight: 600;
        cursor: pointer;
    }

    button:active{
        border: 2px solid var(--sucess);
        color: var(--sucess);
    }

    button:after{
        content: "Copiado!";
        position: absolute;
        background: var(--sucess);
        padding: 5px 10px;
        top: -50px;
        left: -10px;
        pointer-events: none;
        color: #fff;
    }

    button:before{
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        background: var(--sucess);
        top: -40px;
        left: 24px;
        transform: rotate(45deg);
    }
`,i5=C.button`
    position: absolute;
    top: 0;
    right: -40px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 8px;
    cursor: pointer;

    &:before{
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 50px;
        background: #FFF;
        z-index: 3;
        transform: rotate(45deg);
    }

    &:after{
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        border-radius: 50px;
        background: #FFF;
        z-index: 3;
        transform: rotate(-45deg);
    }
`,o5=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    padding: 0 20px 0 0;
`,l5=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,s5=C.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    a{
        text-decoration: none;
    }

    a h4{
        font-size: 18px;
        color: var(--Go-to-series-about);
    }

    span{
        font-weight: 500;
        display: flex;
        color: var(--Secundary-text-color);
        cursor: pointer;
    }

    span svg{
        width: 17px;
        height: 17px;
        fill: var(--Star-color);
    }

    span:hover,
    a:hover{
        text-decoration: underline;
    }

    @media only screen and (max-width: 520px){
        a h4{
            font-size: 16px;
        }
    }
`,a5=C.div`
    button{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 2px;
    }

    button svg{
        width: 100%;
        height: 100%;
        fill: var(--Seriado-add-to-list-border-color);
    }
`,u5=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    
    h2{
        color: #FFF;
    }

    @media only screen and (max-width: 520px){
        h2{
            font-size: 22px;
        }
    }
`,c5=C.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        fill: var(--Seriado-Age-color-16);
        width: 27px;
        height: 27px;
    }

    @media only screen and (max-width: 520px){
        svg{
            width: 24px;
            height: 24px;
        }
    }
`,d5=C.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
    
    @media only screen and (max-width: 520px){
        font-size: 14px;
    }
`,f5=C.span`
    color: #FFF; 

    @media only screen and (max-width: 520px){
        font-size: 15px;
    }
`,p5=C.div`
    display: flex;
    justify-content: space-between;
`,h5=C.div`
    display: flex;
    gap: 10px;

    button{
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 17px;
        padding: 4px 10px 4px 0;
        border: none;
        background: transparent;
        color: #fff;
        cursor: pointer;
    }

    button svg{
        width: 35px;
        height: 35px;
    }

    /* -------------- Icone de like -------------------------------------------------------- */

    button:nth-child(1) .cls-1{
        fill: transparent;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(1) .cls-2{
        fill: transparent;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(1) .cls-3{
        fill: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(1):hover .cls-1{
        fill:#ffce69;
    }

    button:nth-child(1):hover .cls-2{
        fill:#f19b5f;
    }

    button:nth-child(1):hover .cls-3{
        fill:#6c2e7c;
    }

    button:nth-child(1).active .cls-1{
        fill:#ffce69;
    }

    button:nth-child(1).active .cls-2{
        fill:#f19b5f;
    }

    button:nth-child(1).active .cls-3{
        fill:#6c2e7c;
    }

    /* -------------- Icone de dislike -------------------------------------------------------- */

    button:nth-child(2) .cls-1{
        stroke: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(2) .cls-2{
        stroke: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(2) .cls-3{
        stroke: #Fff;
        transition: var(--Like-Button-transition);
    }

    button:nth-child(2):hover .cls-1{
        stroke:#ffce69;
    }

    button:nth-child(2):hover .cls-2{
        stroke:#f19b5f;
    }

    button:nth-child(2):hover .cls-3{
        stroke:#6c2e7c;
    }

    button:nth-child(2).active .cls-1{
        stroke:#ffce69;
    }

    button:nth-child(2).active .cls-2{
        stroke:#f19b5f;
    }

    button:nth-child(2).active .cls-3{
        stroke:#6c2e7c;
    }
`,m5=C.div`
    button{
        width: 55px;
        height: 55px;
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 3px;
    }

    button svg{
        width: 100%;
        height: 100%;
    }

    button svg .cls-1{
        transition: 0.2s;
    }

    button svg .cls-2{
        transition: 0.2s;
    }

    button svg .cls-3{
        transition: 0.2s;
    }

    button svg .cls-4{
        transition: 0.2s;
    }

    button svg .cls-5{
        transition: 0.2s;
    }

    button:hover svg .cls-1{
        stroke: #6c2e7c;
    }

    button:hover svg .cls-2{
        stroke: #f19b5f;
    }

    button:hover svg .cls-3{
        stroke: #ffce69;
    }

    button:hover svg .cls-4{
        stroke: #ffce69;
    }

    button:hover svg .cls-5{
        stroke: #f19b5f;
    }
`,g5=C.div`
    padding: 5px 0 0 0;
    min-width: 389px;/* evitar mudanças de posição quando o usuário interagir com mostrar mais episódios */

    span.ContainerVideoCard{
        font-size: 20px;
        color: #FFF;
        font-weight: 600;
    }

    button.VDesktop,
    button.VMobile{
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 17px;
        font-weight: 600;
        padding: 4px 12px;
        border: 2px solid var(--description-font-color);
        background-color: transparent;
        color: var(--description-font-color);
        cursor: pointer;
        transition: var(--default-hover-duraction);
    }

    button.VDesktop svg,
    button.VMobile svg{
        width: 30px;
        height: 30px;
        fill: var(--description-font-color);
        transition: var(--default-hover-duraction);
    }

    button.VMobile{
        display: none;
    }

    button.VDesktop:hover,
    button.VMobile:hover{
        color: #f19b5f;
        border: 2px solid #f19b5f;
    }
    
    button.VDesktop:hover,
    button.VMobile:hover svg{
        fill: #f19b5f;
    }

    @media only screen and (max-width: 970px){
        button.VDesktop{
            display: none;
        }

        button.VMobile{
            display: flex;
        }

        div.SpCard{
            display: flex;
            justify-content: space-between;
        }
    }

    @media only screen and (max-width: 850px){
        div.controlImgCardSerie img{
            width: 170px;
        }
    }

    @media only screen and (max-width: 790px){
        div.controlImgCardSerie img{
            width: 160px;
        }
    }

    @media only screen and (max-width: 680px){
        div.SpCard{
            flex-direction: column;
        }

        span.ContainerVideoCard{
            span{
                font-size: 18px;
            }
        }

        div.controlImgCardSerie img{
            width: 180px;
        }
    }
`,v5=C.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    a{
        text-decoration: none;
    }
`,x5=C.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;

    a{
        text-decoration: none;
    }
`,y5=C.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 306px;
    overflow-y: auto;
    overflow-x: hidden;

    a{
        text-decoration: none;
    }

    &::-webkit-scrollbar{
        width: 8px;
        height: 100%;
    }

    &::-webkit-scrollbar-track {
        background: #252835;
    }

    &::-webkit-scrollbar-thumb {
        background: #484d64;
        border-radius: 15px;
    }

    &::-webkit-scrollbar-thumb:hover{
        background: #747c9d;
    }

    &::-webkit-scrollbar-thumb:active{
        background: #626984;
    }
`,w5=()=>{const[e,t]=S.useState(!0),[n,r]=S.useState(!0),i={player:S.useRef(null)};function o(){i.player.current&&(i.player.current.paused?(t(!0),i.player.current.play()):(t(!1),i.player.current.pause()))}function l(){i.player.current&&(i.player.current.currentTime-=10)}function a(){i.player.current&&(i.player.current.currentTime+=10)}const u=bo();return s.jsx(C5,{children:s.jsxs(k5,{children:[s.jsxs(j5,{children:[s.jsx(E5,{children:s.jsx("video",{controls:!0,muted:!0,onWaiting:()=>r(!0),onPlaying:()=>r(!1),ref:i.player,src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",autoPlay:!0})}),s.jsxs(L5,{children:[s.jsxs(_5,{children:[s.jsx("button",{onClick:()=>u(-1),children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:[s.jsx("path",{d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"}),s.jsx("path",{d:"m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"})]})}),s.jsx(La,{width:"270px",height:"50px",SVGSize:"30px",fontSize:"16px"})]}),s.jsxs(z5,{children:[s.jsx("button",{onClick:()=>l(),children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",strokeWidth:"3",stroke:"#fff",fill:"none",children:[s.jsx("polyline",{points:"9.57 15.41 12.17 24.05 20.81 21.44",strokeLinecap:"round"}),s.jsx("path",{fill:"none",d:"M26.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78",strokeLinecap:"round"}),s.jsx("rect",{fill:"none",x:"32.19",y:"22.52",width:"11.41",height:"18.89",rx:"5.7"}),s.jsx("path",{fill:"none",d:"M12.14,23.94a21.91,21.91,0,1,1-.91,13.25",strokeLinecap:"round"})]})}),s.jsx("button",{className:n?"loading":"",onClick:()=>o(),children:n?s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M16 8.00023L18.3642 5.63609M5.63631 18.364L8.00026 16M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569M8.00023 8.00023L5.63609 5.63609M18.364 18.364L16 16",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e?s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"})}):s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"})})}),s.jsx("button",{onClick:()=>a(),children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:s.jsx("path",{d:"M24 4C12.972292 4 4 12.972292 4 24C4 35.027708 12.972292 44 24 44C35.027708 44 44 35.027708 44 24C44 23.829342 43.998541 23.658332 43.994141 23.488281 A 1.5004834 1.5004834 0 0 0 40.994141 23.564453C40.997849 23.708404 41 23.854658 41 24C41 33.406292 33.406292 41 24 41C14.593708 41 7 33.406292 7 24C7 14.593708 14.593708 7 24 7C29.380908 7 34.158525 9.4960454 37.271484 13.384766L35.964844 13.154297 A 1.5003693 1.5003693 0 0 0 35.443359 16.109375L40.367188 16.976562 A 1.50015 1.50015 0 0 0 42.105469 15.759766L42.972656 10.835938 A 1.50015 1.50015 0 0 0 41.439453 9.0566406 A 1.50015 1.50015 0 0 0 40.019531 10.316406L39.771484 11.720703C36.109299 7.0253275 30.404348 4 24 4 z M 27.5 17C25.019 17 23 19.019 23 21.5L23 26.5C23 28.981 25.019 31 27.5 31C29.981 31 32 28.981 32 26.5L32 21.5C32 19.019 29.981 17 27.5 17 z M 19.595703 17.001953C19.49775 17.010188 19.399938 17.0305 19.304688 17.0625L16.304688 18.0625C15.649688 18.2815 15.295672 18.989531 15.513672 19.644531C15.732672 20.298531 16.439703 20.651547 17.095703 20.435547L18.449219 19.984375L18.449219 29.75C18.449219 30.44 19.009219 31 19.699219 31C20.390219 31 20.949219 30.440047 20.949219 29.748047L20.949219 18.248047C20.949219 17.846047 20.757641 17.469375 20.431641 17.234375C20.187141 17.058125 19.889563 16.97725 19.595703 17.001953 z M 27.5 19.5C28.603 19.5 29.5 20.397 29.5 21.5L29.5 26.5C29.5 27.603 28.603 28.5 27.5 28.5C26.397 28.5 25.5 27.603 25.5 26.5L25.5 21.5C25.5 20.398 26.397 19.5 27.5 19.5 z"})})})]}),s.jsx(N5,{})]})]}),s.jsx(S5,{children:s.jsx("img",{src:"https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240318-o-problema-dos-3-corpos-1-1024x576-1.jpg?resize=555%2C508&ssl=1",alt:"poster"})})]})})},C5=C.div`
    width: 100%;
    height: 55.25vw;
`,k5=C.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #000;
`,S5=C.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    display: none; /* Player ainda em beta, portanto não está disponível sua customização */
`,j5=C.div`
    width: 100%;
    height: 100%;
    position: relative;
`,E5=C.div`
    width: 100%;
    height: 100%;

    video{
        width: 100%;
        height: 100%;
    }

    video::-internal-media-controls-download-button {
        display:none;
    }

    video::-webkit-media-controls-enclosure {
        overflow:hidden;
    }

    video::-webkit-media-controls-panel {
        width: calc(100% + 30px); /* Adjust as needed */
    }
`,L5=C.div`
    width: 100%;
    height: 100%;
    padding: 1vw;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;

    display: flex;
    justify-content: space-between;
    flex-direction: column;



    display: none; /* Player ainda em beta, portanto não está disponível sua customização */
`,_5=C.div`
    display: flex;
    gap: 15px;

    button{
        width: 50px;
        height: 50px;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    button svg{
        fill: #FFf;
    }
`,z5=C.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1vw;

    button{
        border: none;
        background: transparent;
        cursor: pointer;
    }

    button.loading{
        animation: 1s loading infinite ease-in-out;
    }

    @keyframes loading {
        to{
            transform: rotate(360deg)
        }
    }
    svg{
        width: 7vw;
        height: 7vw;
        fill: #fff;
    }

    svg:hover{
        fill: #fff;
    }
`,N5=C.div``,P5=()=>{const e=()=>{window.scrollTo({top:0,behavior:"auto"})};return S.useEffect(()=>{e()},[]),s.jsxs(s.Fragment,{children:[s.jsx(w5,{}),s.jsx(J4,{})]})},b5=()=>s.jsx(M5,{children:s.jsx(R5,{children:s.jsx("input",{placeholder:"Procurar...",type:"search",name:"search",id:"search",required:!0})})}),M5=C.section``,R5=C.div`
    width: 100%;
    height: 120px;
    background-color: #141519;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 80%;
        letter-spacing: 1px;
        font-size: 35px;
        padding: 9px 0 5px 0;
        border: 3px solid #484848;
        border-style: none none solid none;
        outline: none;
        background-color: transparent;
        color: #FFF;
        transition: 0.3s;
        font-weight: 500;
    }

    input::placeholder{
        color: #A0A0A0;
        font-weight: 500;
        margin-left: 2px;
    }

    input:focus,
    input:valid{
        border: 3px solid rgb(160, 0, 210) ;
        border-style: none none solid none;
    }

    @media only screen and (max-width: 730px){
        height: 100px;

        input{
            font-size: 25px;
            border: 2px solid #484848;
            border-style: none none solid none;
        }
    }
`,T5=()=>s.jsx(F5,{children:"Ainda em desenvolvimento"}),F5=C.section`
    color: #Fff;
    font-size: 30px;
`,I5=()=>s.jsx($5,{children:s.jsx(La,{width:"270px",height:"50px",SVGSize:"30px",fontSize:"16px"})}),$5=C.section`
    color: #Fff;
    font-size: 30px;
`,O5=()=>s.jsx(A5,{children:"Ainda em desenvolvimento"}),A5=C.section`
    color: #Fff;
    font-size: 30px;
`;function V5(){return s.jsxs(S2,{children:[s.jsx(zh,{}),s.jsx(t4,{}),s.jsxs(g2,{children:[s.jsx(rt,{path:"/browse",element:s.jsx(Jh,{})}),s.jsx(rt,{path:"/about",element:s.jsx(V4,{})}),s.jsx(rt,{path:"/watch",element:s.jsx(P5,{})}),s.jsx(rt,{path:"/search",element:s.jsx(b5,{})}),s.jsx(rt,{path:"/films",element:s.jsx(T5,{})}),s.jsx(rt,{path:"/series",element:s.jsx(I5,{})}),s.jsx(rt,{path:"/user",element:s.jsx(O5,{})}),s.jsx(rt,{path:"*",element:s.jsx(h2,{to:"/browse"})})]})]})}gd(document.getElementById("root")).render(s.jsx(S.StrictMode,{children:s.jsx(V5,{})}));
