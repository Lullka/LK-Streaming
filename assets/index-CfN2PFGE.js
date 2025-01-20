function t0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function n0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l1={exports:{}},mo={},s1={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),r0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),c0=Symbol.for("react.suspense"),d0=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),za=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var a1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u1=Object.assign,c1={};function Un(e,t,n){this.props=e,this.context=t,this.refs=c1,this.updater=n||a1}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function d1(){}d1.prototype=Un.prototype;function Es(e,t,n){this.props=e,this.context=t,this.refs=c1,this.updater=n||a1}var Ls=Es.prototype=new d1;Ls.constructor=Es;u1(Ls,Un.prototype);Ls.isPureReactComponent=!0;var Na=Array.isArray,f1=Object.prototype.hasOwnProperty,_s={current:null},p1={key:!0,ref:!0,__self:!0,__source:!0};function h1(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)f1.call(t,r)&&!p1.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qr,type:e,key:o,ref:l,props:i,_owner:_s.current}}function h0(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function m0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ra=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m0(""+e.key):t.toString(36)}function Ci(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case r0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Do(l,0):r,Na(i)?(n="",e!=null&&(n=e.replace(Ra,"$&/")+"/"),Ci(i,t,n,"",function(c){return c})):i!=null&&(Ps(i)&&(i=h0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ra,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Na(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Do(o,a);l+=Ci(o,t,n,u,i)}else if(u=p0(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Do(o,a++),l+=Ci(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ti(e,t,n){if(e==null)return e;var r=[],i=0;return Ci(e,r,"","",function(o){return t.call(n,o,i++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},ki={transition:null},v0={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:ki,ReactCurrentOwner:_s};function m1(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:ti,forEach:function(e,t,n){ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ti(e,function(){t++}),t},toArray:function(e){return ti(e,function(t){return t})||[]},only:function(e){if(!Ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Un;I.Fragment=i0;I.Profiler=l0;I.PureComponent=Es;I.StrictMode=o0;I.Suspense=c0;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;I.act=m1;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=u1({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=_s.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)f1.call(t,u)&&!p1.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:a0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s0,_context:e},e.Consumer=e};I.createElement=h1;I.createFactory=function(e){var t=h1.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:u0,render:e}};I.isValidElement=Ps;I.lazy=function(e){return{$$typeof:f0,_payload:{_status:-1,_result:e},_init:g0}};I.memo=function(e,t){return{$$typeof:d0,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};I.unstable_act=m1;I.useCallback=function(e,t){return ve.current.useCallback(e,t)};I.useContext=function(e){return ve.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};I.useEffect=function(e,t){return ve.current.useEffect(e,t)};I.useId=function(){return ve.current.useId()};I.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ve.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};I.useRef=function(e){return ve.current.useRef(e)};I.useState=function(e){return ve.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ve.current.useTransition()};I.version="18.3.1";s1.exports=I;var j=s1.exports;const Je=n0(j),x0=t0({__proto__:null,default:Je},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=j,w0=Symbol.for("react.element"),C0=Symbol.for("react.fragment"),k0=Object.prototype.hasOwnProperty,S0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function g1(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)k0.call(t,r)&&!j0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w0,type:e,key:o,ref:l,props:i,_owner:S0.current}}mo.Fragment=C0;mo.jsx=g1;mo.jsxs=g1;l1.exports=mo;var s=l1.exports,v1={exports:{}},Re={},x1={exports:{}},y1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var M=P.length;P.push(R);e:for(;0<M;){var V=M-1>>>1,b=P[V];if(0<i(b,R))P[V]=R,P[M]=b,M=V;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],M=P.pop();if(M!==R){P[0]=M;e:for(var V=0,b=P.length,Qt=b>>>1;V<Qt;){var be=2*(V+1)-1,mt=P[be],Ee=be+1,nt=P[Ee];if(0>i(mt,M))Ee<b&&0>i(nt,mt)?(P[V]=nt,P[Ee]=M,V=Ee):(P[V]=mt,P[be]=M,V=be);else if(Ee<b&&0>i(nt,M))P[V]=nt,P[Ee]=M,V=Ee;else break e}}return R}function i(P,R){var M=P.sortIndex-R.sortIndex;return M!==0?M:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],m=1,f=null,g=3,v=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=P)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function x(P){if(w=!1,h(P),!y)if(n(u)!==null)y=!0,qn(S);else{var R=n(c);R!==null&&Wt(x,R.startTime-P)}}function S(P,R){y=!1,w&&(w=!1,p(N),N=-1),v=!0;var M=g;try{for(h(R),f=n(u);f!==null&&(!(f.expirationTime>R)||P&&!je());){var V=f.callback;if(typeof V=="function"){f.callback=null,g=f.priorityLevel;var b=V(f.expirationTime<=R);R=e.unstable_now(),typeof b=="function"?f.callback=b:f===n(u)&&r(u),h(R)}else r(u);f=n(u)}if(f!==null)var Qt=!0;else{var be=n(c);be!==null&&Wt(x,be.startTime-R),Qt=!1}return Qt}finally{f=null,g=M,v=!1}}var L=!1,C=null,N=-1,D=5,F=-1;function je(){return!(e.unstable_now()-F<D)}function Bt(){if(C!==null){var P=e.unstable_now();F=P;var R=!0;try{R=C(!0,P)}finally{R?Ut():(L=!1,C=null)}}else L=!1}var Ut;if(typeof d=="function")Ut=function(){d(Bt)};else if(typeof MessageChannel<"u"){var Jr=new MessageChannel,Vo=Jr.port2;Jr.port1.onmessage=Bt,Ut=function(){Vo.postMessage(null)}}else Ut=function(){_(Bt,0)};function qn(P){C=P,L||(L=!0,Ut())}function Wt(P,R){N=_(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,qn(S))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var M=g;g=R;try{return P()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=g;g=P;try{return R()}finally{g=M}},e.unstable_scheduleCallback=function(P,R,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,P){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=M+b,P={id:m++,callback:R,priorityLevel:P,startTime:M,expirationTime:b,sortIndex:-1},M>V?(P.sortIndex=M,t(c,P),n(u)===null&&P===n(c)&&(w?(p(N),N=-1):w=!0,Wt(x,M-V))):(P.sortIndex=b,t(u,P),y||v||(y=!0,qn(S))),P},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(P){var R=g;return function(){var M=g;g=R;try{return P.apply(this,arguments)}finally{g=M}}}})(y1);x1.exports=y1;var E0=x1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=j,Ne=E0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w1=new Set,Er={};function un(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(Er[e]=t,e=0;e<t.length;e++)w1.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,_0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ma={},Ta={};function P0(e){return Cl.call(Ta,e)?!0:Cl.call(Ma,e)?!1:_0.test(e)?Ta[e]=!0:(Ma[e]=!0,!1)}function z0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N0(e,t,n,r){if(t===null||typeof t>"u"||z0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var zs=/[\-:]([a-z])/g;function Ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zs,Ns);ue[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zs,Ns);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zs,Ns);ue[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,n,r){var i=ue.hasOwnProperty(t)?ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N0(t,n,i,r)&&(n=null),r||i===null?P0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),pn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),k1=Symbol.for("react.context"),Ts=Symbol.for("react.forward_ref"),Sl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),S1=Symbol.for("react.offscreen"),Fa=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Ho;function cr(e){if(Ho===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var Bo=!1;function Uo(e,t){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function R0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case pn:return"Portal";case kl:return"Profiler";case Ms:return"StrictMode";case Sl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case k1:return(e.displayName||"Context")+".Consumer";case C1:return(e._context.displayName||"Context")+".Provider";case Ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function M0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function j1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=j1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=T0(e))}function E1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=j1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ia(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function L1(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function _l(e,t){L1(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pl(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pl(e,t,n){(t!=="number"||Ai(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(dr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function _1(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Aa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function P1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?P1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,z1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){F0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function N1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function R1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=N1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var I0=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rl(e,t){if(t){if(I0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,_n=null,Pn=null;function Va(e){if(e=Gr(e)){if(typeof Fl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=wo(t),Fl(e.stateNode,e.type,t))}}function M1(e){_n?Pn?Pn.push(e):Pn=[e]:_n=e}function T1(){if(_n){var e=_n,t=Pn;if(Pn=_n=null,Va(e),t)for(e=0;e<t.length;e++)Va(t[e])}}function F1(e,t){return e(t)}function I1(){}var Wo=!1;function $1(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return F1(e,t,n)}finally{Wo=!1,(_n!==null||Pn!==null)&&(I1(),T1())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Il=!1;if(ct)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Il=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Il=!1}function $0(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var gr=!1,Vi=null,bi=!1,$l=null,O0={onError:function(e){gr=!0,Vi=e}};function A0(e,t,n,r,i,o,l,a,u){gr=!1,Vi=null,$0.apply(O0,arguments)}function V0(e,t,n,r,i,o,l,a,u){if(A0.apply(this,arguments),gr){if(gr){var c=Vi;gr=!1,Vi=null}else throw Error(k(198));bi||(bi=!0,$l=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function O1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ba(e){if(cn(e)!==e)throw Error(k(188))}function b0(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ba(i),e;if(o===r)return ba(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function A1(e){return e=b0(e),e!==null?V1(e):null}function V1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=V1(e);if(t!==null)return t;e=e.sibling}return null}var b1=Ne.unstable_scheduleCallback,Da=Ne.unstable_cancelCallback,D0=Ne.unstable_shouldYield,H0=Ne.unstable_requestPaint,Y=Ne.unstable_now,B0=Ne.unstable_getCurrentPriorityLevel,$s=Ne.unstable_ImmediatePriority,D1=Ne.unstable_UserBlockingPriority,Di=Ne.unstable_NormalPriority,U0=Ne.unstable_LowPriority,H1=Ne.unstable_IdlePriority,go=null,et=null;function W0(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:K0,Q0=Math.log,Z0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(Q0(e)/Z0|0)|0}var oi=64,li=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=fr(a):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),i=1<<n,r|=e[n],t&=~i;return r}function G0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-We(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=G0(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function B1(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Y0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-We(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function U1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var W1,As,Q1,Z1,K1,Al=!1,si=[],Lt=null,_t=null,Pt=null,Pr=new Map,zr=new Map,Ct=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(t.pointerId)}}function er(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Gr(t),t!==null&&As(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J0(e,t,n,r,i){switch(t){case"focusin":return Lt=er(Lt,e,t,n,r,i),!0;case"dragenter":return _t=er(_t,e,t,n,r,i),!0;case"mouseover":return Pt=er(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pr.set(o,er(Pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,zr.set(o,er(zr.get(o)||null,e,t,n,r,i)),!0}return!1}function G1(e){var t=qt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=O1(n),t!==null){e.blockedOn=t,K1(e.priority,function(){Q1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Si(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=Gr(n),t!==null&&As(t),e.blockedOn=n,!1;t.shift()}return!0}function Ba(e,t,n){Si(e)&&n.delete(t)}function ef(){Al=!1,Lt!==null&&Si(Lt)&&(Lt=null),_t!==null&&Si(_t)&&(_t=null),Pt!==null&&Si(Pt)&&(Pt=null),Pr.forEach(Ba),zr.forEach(Ba)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,ef)))}function Nr(e){function t(i){return tr(i,e)}if(0<si.length){tr(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&tr(Lt,e),_t!==null&&tr(_t,e),Pt!==null&&tr(Pt,e),Pr.forEach(t),zr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)G1(n),n.blockedOn===null&&Ct.shift()}var zn=ht.ReactCurrentBatchConfig,Bi=!0;function tf(e,t,n,r){var i=A,o=zn.transition;zn.transition=null;try{A=1,Vs(e,t,n,r)}finally{A=i,zn.transition=o}}function nf(e,t,n,r){var i=A,o=zn.transition;zn.transition=null;try{A=4,Vs(e,t,n,r)}finally{A=i,zn.transition=o}}function Vs(e,t,n,r){if(Bi){var i=Vl(e,t,n,r);if(i===null)nl(e,t,r,Ui,n),Ha(e,r);else if(J0(i,e,t,n,r))r.stopPropagation();else if(Ha(e,r),t&4&&-1<X0.indexOf(e)){for(;i!==null;){var o=Gr(i);if(o!==null&&W1(o),o=Vl(e,t,n,r),o===null&&nl(e,t,r,Ui,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else nl(e,t,r,null,n)}}var Ui=null;function Vl(e,t,n,r){if(Ui=null,e=Is(r),e=qt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=O1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function q1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B0()){case $s:return 1;case D1:return 4;case Di:case U0:return 16;case H1:return 536870912;default:return 16}default:return 16}}var St=null,bs=null,ji=null;function Y1(){if(ji)return ji;var e,t=bs,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Ua(){return!1}function Me(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ai:Ua,this.isPropagationStopped=Ua,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=Me(Wn),Kr=G({},Wn,{view:0,detail:0}),rf=Me(Kr),Zo,Ko,nr,vo=G({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Zo=e.screenX-nr.screenX,Ko=e.screenY-nr.screenY):Ko=Zo=0,nr=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),Wa=Me(vo),of=G({},vo,{dataTransfer:0}),lf=Me(of),sf=G({},Kr,{relatedTarget:0}),Go=Me(sf),af=G({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Me(af),cf=G({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Me(cf),ff=G({},Wn,{data:0}),Qa=Me(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function Hs(){return gf}var vf=G({},Kr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xf=Me(vf),yf=G({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Za=Me(yf),wf=G({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),Cf=Me(wf),kf=G({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=Me(kf),jf=G({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ef=Me(jf),Lf=[9,13,27,32],Bs=ct&&"CompositionEvent"in window,vr=null;ct&&"documentMode"in document&&(vr=document.documentMode);var _f=ct&&"TextEvent"in window&&!vr,X1=ct&&(!Bs||vr&&8<vr&&11>=vr),Ka=" ",Ga=!1;function J1(e,t){switch(e){case"keyup":return Lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Pf(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(Ga=!0,Ka);case"textInput":return e=t.data,e===Ka&&Ga?null:e;default:return null}}function zf(e,t){if(mn)return e==="compositionend"||!Bs&&J1(e,t)?(e=Y1(),ji=bs=St=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return X1&&t.locale!=="ko"?null:t.data;default:return null}}var Nf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nf[e.type]:t==="textarea"}function tc(e,t,n,r){M1(r),t=Wi(t,"onChange"),0<t.length&&(n=new Ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Rr=null;function Rf(e){fc(e,0)}function xo(e){var t=xn(e);if(E1(t))return e}function Mf(e,t){if(e==="change")return t}var nc=!1;if(ct){var qo;if(ct){var Yo="oninput"in document;if(!Yo){var Ya=document.createElement("div");Ya.setAttribute("oninput","return;"),Yo=typeof Ya.oninput=="function"}qo=Yo}else qo=!1;nc=qo&&(!document.documentMode||9<document.documentMode)}function Xa(){xr&&(xr.detachEvent("onpropertychange",rc),Rr=xr=null)}function rc(e){if(e.propertyName==="value"&&xo(Rr)){var t=[];tc(t,Rr,e,Is(e)),$1(Rf,t)}}function Tf(e,t,n){e==="focusin"?(Xa(),xr=t,Rr=n,xr.attachEvent("onpropertychange",rc)):e==="focusout"&&Xa()}function Ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(Rr)}function If(e,t){if(e==="click")return xo(t)}function $f(e,t){if(e==="input"||e==="change")return xo(t)}function Of(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Of;function Mr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cl.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=Ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ja(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function oc(){for(var e=window,t=Ai();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ai(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=oc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ic(n.ownerDocument.documentElement,n)){if(r!==null&&Us(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=eu(n,o);var l=eu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vf=ct&&"documentMode"in document&&11>=document.documentMode,gn=null,bl=null,yr=null,Dl=!1;function tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||gn==null||gn!==Ai(r)||(r=gn,"selectionStart"in r&&Us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Mr(yr,r)||(yr=r,r=Wi(bl,"onSelect"),0<r.length&&(t=new Ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function ui(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:ui("Animation","AnimationEnd"),animationiteration:ui("Animation","AnimationIteration"),animationstart:ui("Animation","AnimationStart"),transitionend:ui("Transition","TransitionEnd")},Xo={},lc={};ct&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function yo(e){if(Xo[e])return Xo[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lc)return Xo[e]=t[n];return e}var sc=yo("animationend"),ac=yo("animationiteration"),uc=yo("animationstart"),cc=yo("transitionend"),dc=new Map,nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){dc.set(e,t),un(t,[e])}for(var Jo=0;Jo<nu.length;Jo++){var el=nu[Jo],bf=el.toLowerCase(),Df=el[0].toUpperCase()+el.slice(1);At(bf,"on"+Df)}At(sc,"onAnimationEnd");At(ac,"onAnimationIteration");At(uc,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(cc,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V0(r,t,void 0,e),e.currentTarget=null}function fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;ru(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;ru(i,a,c),o=u}}}if(bi)throw e=$l,bi=!1,$l=null,e}function B(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var r=e+"__bubble";n.has(r)||(pc(t,e,2,!1),n.add(r))}function tl(e,t,n){var r=0;t&&(r|=4),pc(n,e,r,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[ci]){e[ci]=!0,w1.forEach(function(n){n!=="selectionchange"&&(Hf.has(n)||tl(n,!1,e),tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,tl("selectionchange",!1,t))}}function pc(e,t,n,r){switch(q1(t)){case 1:var i=tf;break;case 4:i=nf;break;default:i=Vs}n=i.bind(null,t,n,e),i=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=qt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}$1(function(){var c=o,m=Is(n),f=[];e:{var g=dc.get(e);if(g!==void 0){var v=Ds,y=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":v=xf;break;case"focusin":y="focus",v=Go;break;case"focusout":y="blur",v=Go;break;case"beforeblur":case"afterblur":v=Go;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Wa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Cf;break;case sc:case ac:case uc:v=uf;break;case cc:v=Sf;break;case"scroll":v=rf;break;case"wheel":v=Ef;break;case"copy":case"cut":case"paste":v=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Za}var w=(t&4)!==0,_=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=_r(d,p),x!=null&&w.push(Fr(d,x,h)))),_)break;d=d.return}0<w.length&&(g=new v(g,y,null,n,m),f.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Tl&&(y=n.relatedTarget||n.fromElement)&&(qt(y)||y[dt]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?qt(y):null,y!==null&&(_=cn(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=Wa,x="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Za,x="onPointerLeave",p="onPointerEnter",d="pointer"),_=v==null?g:xn(v),h=y==null?g:xn(y),g=new w(x,d+"leave",v,n,m),g.target=_,g.relatedTarget=h,x=null,qt(m)===c&&(w=new w(p,d+"enter",y,n,m),w.target=h,w.relatedTarget=_,x=w),_=x,v&&y)t:{for(w=v,p=y,d=0,h=w;h;h=dn(h))d++;for(h=0,x=p;x;x=dn(x))h++;for(;0<d-h;)w=dn(w),d--;for(;0<h-d;)p=dn(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=dn(w),p=dn(p)}w=null}else w=null;v!==null&&iu(f,g,v,w,!1),y!==null&&_!==null&&iu(f,_,y,w,!0)}}e:{if(g=c?xn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=Mf;else if(qa(g))if(nc)S=$f;else{S=Ff;var L=Tf}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=If);if(S&&(S=S(e,c))){tc(f,S,n,m);break e}L&&L(e,g,c),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Pl(g,"number",g.value)}switch(L=c?xn(c):window,e){case"focusin":(qa(L)||L.contentEditable==="true")&&(gn=L,bl=c,yr=null);break;case"focusout":yr=bl=gn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,tu(f,n,m);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":tu(f,n,m)}var C;if(Bs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else mn?J1(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(X1&&n.locale!=="ko"&&(mn||N!=="onCompositionStart"?N==="onCompositionEnd"&&mn&&(C=Y1()):(St=m,bs="value"in St?St.value:St.textContent,mn=!0)),L=Wi(c,N),0<L.length&&(N=new Qa(N,e,null,n,m),f.push({event:N,listeners:L}),C?N.data=C:(C=ec(n),C!==null&&(N.data=C)))),(C=_f?Pf(e,n):zf(e,n))&&(c=Wi(c,"onBeforeInput"),0<c.length&&(m=new Qa("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:c}),m.data=C))}fc(f,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_r(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=_r(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=_r(n,o),u!=null&&l.unshift(Fr(n,u,a))):i||(u=_r(n,o),u!=null&&l.push(Fr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Bf=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(Bf,`
`).replace(Uf,"")}function di(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(k(425))}function Qi(){}var Hl=null,Bl=null;function Ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,lu=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof lu<"u"?function(e){return lu.resolve(null).then(e).catch(Zf)}:Wl;function Zf(e){setTimeout(function(){throw e})}function rl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Nr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Qn,Ir="__reactProps$"+Qn,dt="__reactContainer$"+Qn,Ql="__reactEvents$"+Qn,Kf="__reactListeners$"+Qn,Gf="__reactHandles$"+Qn;function qt(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[Xe])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[Xe]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function wo(e){return e[Ir]||null}var Zl=[],yn=-1;function Vt(e){return{current:e}}function W(e){0>yn||(e.current=Zl[yn],Zl[yn]=null,yn--)}function H(e,t){yn++,Zl[yn]=e.current,e.current=t}var Ot={},he=Vt(Ot),Ce=Vt(!1),rn=Ot;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Zi(){W(Ce),W(he)}function au(e,t,n){if(he.current!==Ot)throw Error(k(168));H(he,t),H(Ce,n)}function hc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,M0(e)||"Unknown",i));return G({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,rn=he.current,H(he,e),H(Ce,Ce.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=hc(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(he),H(he,e)):W(Ce),H(Ce,n)}var lt=null,Co=!1,il=!1;function mc(e){lt===null?lt=[e]:lt.push(e)}function qf(e){Co=!0,mc(e)}function bt(){if(!il&&lt!==null){il=!0;var e=0,t=A;try{var n=lt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Co=!1}catch(i){throw lt!==null&&(lt=lt.slice(e+1)),b1($s,bt),i}finally{A=t,il=!1}}return null}var wn=[],Cn=0,Gi=null,qi=0,Te=[],Fe=0,on=null,st=1,at="";function Kt(e,t){wn[Cn++]=qi,wn[Cn++]=Gi,Gi=e,qi=t}function gc(e,t,n){Te[Fe++]=st,Te[Fe++]=at,Te[Fe++]=on,on=e;var r=st;e=at;var i=32-We(r)-1;r&=~(1<<i),n+=1;var o=32-We(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-We(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function Ws(e){e.return!==null&&(Kt(e,1),gc(e,1,0))}function Qs(e){for(;e===Gi;)Gi=wn[--Cn],wn[Cn]=null,qi=wn[--Cn],wn[Cn]=null;for(;e===on;)on=Te[--Fe],Te[Fe]=null,at=Te[--Fe],Te[Fe]=null,st=Te[--Fe],Te[Fe]=null}var ze=null,Pe=null,Q=!1,Ue=null;function vc(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Pe=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Pe=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(Q){var t=Pe;if(t){var n=t;if(!cu(e,t)){if(Kl(e))throw Error(k(418));t=zt(n.nextSibling);var r=ze;t&&cu(e,t)?vc(r,n):(e.flags=e.flags&-4097|2,Q=!1,ze=e)}}else{if(Kl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,ze=e}}}function du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function fi(e){if(e!==ze)return!1;if(!Q)return du(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ul(e.type,e.memoizedProps)),t&&(t=Pe)){if(Kl(e))throw xc(),Error(k(418));for(;t;)vc(e,t),t=zt(t.nextSibling)}if(du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=ze?zt(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=Pe;e;)e=zt(e.nextSibling)}function Fn(){Pe=ze=null,Q=!1}function Zs(e){Ue===null?Ue=[e]:Ue.push(e)}var Yf=ht.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function yc(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Tt(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,x){return d===null||d.tag!==6?(d=dl(h,p.mode,x),d.return=p,d):(d=i(d,h),d.return=p,d)}function u(p,d,h,x){var S=h.type;return S===hn?m(p,d,h.props.children,x,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&fu(S)===d.type)?(x=i(d,h.props),x.ref=rr(p,d,h),x.return=p,x):(x=Mi(h.type,h.key,h.props,null,p.mode,x),x.ref=rr(p,d,h),x.return=p,x)}function c(p,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=fl(h,p.mode,x),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function m(p,d,h,x,S){return d===null||d.tag!==7?(d=tn(h,p.mode,x,S),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=dl(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:return h=Mi(d.type,d.key,d.props,null,p.mode,h),h.ref=rr(p,null,d),h.return=p,h;case pn:return d=fl(d,p.mode,h),d.return=p,d;case yt:var x=d._init;return f(p,x(d._payload),h)}if(dr(d)||Xn(d))return d=tn(d,p.mode,h,null),d.return=p,d;pi(p,d)}return null}function g(p,d,h,x){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(p,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ni:return h.key===S?u(p,d,h,x):null;case pn:return h.key===S?c(p,d,h,x):null;case yt:return S=h._init,g(p,d,S(h._payload),x)}if(dr(h)||Xn(h))return S!==null?null:m(p,d,h,x,null);pi(p,h)}return null}function v(p,d,h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,a(d,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ni:return p=p.get(x.key===null?h:x.key)||null,u(d,p,x,S);case pn:return p=p.get(x.key===null?h:x.key)||null,c(d,p,x,S);case yt:var L=x._init;return v(p,d,h,L(x._payload),S)}if(dr(x)||Xn(x))return p=p.get(h)||null,m(d,p,x,S,null);pi(d,x)}return null}function y(p,d,h,x){for(var S=null,L=null,C=d,N=d=0,D=null;C!==null&&N<h.length;N++){C.index>N?(D=C,C=null):D=C.sibling;var F=g(p,C,h[N],x);if(F===null){C===null&&(C=D);break}e&&C&&F.alternate===null&&t(p,C),d=o(F,d,N),L===null?S=F:L.sibling=F,L=F,C=D}if(N===h.length)return n(p,C),Q&&Kt(p,N),S;if(C===null){for(;N<h.length;N++)C=f(p,h[N],x),C!==null&&(d=o(C,d,N),L===null?S=C:L.sibling=C,L=C);return Q&&Kt(p,N),S}for(C=r(p,C);N<h.length;N++)D=v(C,p,N,h[N],x),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?N:D.key),d=o(D,d,N),L===null?S=D:L.sibling=D,L=D);return e&&C.forEach(function(je){return t(p,je)}),Q&&Kt(p,N),S}function w(p,d,h,x){var S=Xn(h);if(typeof S!="function")throw Error(k(150));if(h=S.call(h),h==null)throw Error(k(151));for(var L=S=null,C=d,N=d=0,D=null,F=h.next();C!==null&&!F.done;N++,F=h.next()){C.index>N?(D=C,C=null):D=C.sibling;var je=g(p,C,F.value,x);if(je===null){C===null&&(C=D);break}e&&C&&je.alternate===null&&t(p,C),d=o(je,d,N),L===null?S=je:L.sibling=je,L=je,C=D}if(F.done)return n(p,C),Q&&Kt(p,N),S;if(C===null){for(;!F.done;N++,F=h.next())F=f(p,F.value,x),F!==null&&(d=o(F,d,N),L===null?S=F:L.sibling=F,L=F);return Q&&Kt(p,N),S}for(C=r(p,C);!F.done;N++,F=h.next())F=v(C,p,N,F.value,x),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?N:F.key),d=o(F,d,N),L===null?S=F:L.sibling=F,L=F);return e&&C.forEach(function(Bt){return t(p,Bt)}),Q&&Kt(p,N),S}function _(p,d,h,x){if(typeof h=="object"&&h!==null&&h.type===hn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ni:e:{for(var S=h.key,L=d;L!==null;){if(L.key===S){if(S=h.type,S===hn){if(L.tag===7){n(p,L.sibling),d=i(L,h.props.children),d.return=p,p=d;break e}}else if(L.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===yt&&fu(S)===L.type){n(p,L.sibling),d=i(L,h.props),d.ref=rr(p,L,h),d.return=p,p=d;break e}n(p,L);break}else t(p,L);L=L.sibling}h.type===hn?(d=tn(h.props.children,p.mode,x,h.key),d.return=p,p=d):(x=Mi(h.type,h.key,h.props,null,p.mode,x),x.ref=rr(p,d,h),x.return=p,p=x)}return l(p);case pn:e:{for(L=h.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=fl(h,p.mode,x),d.return=p,p=d}return l(p);case yt:return L=h._init,_(p,d,L(h._payload),x)}if(dr(h))return y(p,d,h,x);if(Xn(h))return w(p,d,h,x);pi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=dl(h,p.mode,x),d.return=p,p=d),l(p)):n(p,d)}return _}var In=yc(!0),wc=yc(!1),Yi=Vt(null),Xi=null,kn=null,Ks=null;function Gs(){Ks=kn=Xi=null}function qs(e){var t=Yi.current;W(Yi),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){Xi=e,Ks=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Xi===null)throw Error(k(308));kn=e,Xi.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Yt=null;function Ys(e){Yt===null?Yt=[e]:Yt.push(e)}function Cc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ys(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,Ys(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Os(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ji(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;l=0,m=c=u=null,a=o;do{var g=a.lane,v=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(v,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,f,g):y,g==null)break e;f=G({},f,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=v,u=f):m=m.next=v,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=l,e.lanes=l,e.memoizedState=f}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var qr={},tt=Vt(qr),$r=Vt(qr),Or=Vt(qr);function Xt(e){if(e===qr)throw Error(k(174));return e}function Js(e,t){switch(H(Or,t),H($r,e),H(tt,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nl(t,e)}W(tt),H(tt,t)}function $n(){W(tt),W($r),W(Or)}function Sc(e){Xt(Or.current);var t=Xt(tt.current),n=Nl(t,e.type);t!==n&&(H($r,e),H(tt,n))}function ea(e){$r.current===e&&(W(tt),W($r))}var Z=Vt(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ol=[];function ta(){for(var e=0;e<ol.length;e++)ol[e]._workInProgressVersionPrimary=null;ol.length=0}var _i=ht.ReactCurrentDispatcher,ll=ht.ReactCurrentBatchConfig,ln=0,K=null,ne=null,ie=null,to=!1,wr=!1,Ar=0,Xf=0;function ce(){throw Error(k(321))}function na(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function ra(e,t,n,r,i,o){if(ln=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?np:rp,e=n(r,i),wr){o=0;do{if(wr=!1,Ar=0,25<=o)throw Error(k(301));o+=1,ie=ne=null,t.updateQueue=null,_i.current=ip,e=n(r,i)}while(wr)}if(_i.current=no,t=ne!==null&&ne.next!==null,ln=0,ie=ne=K=null,to=!1,t)throw Error(k(300));return e}function ia(){var e=Ar!==0;return Ar=0,e}function qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function Ae(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(k(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Vr(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var m=c.lane;if((ln&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,l=r):u=u.next=f,K.lanes|=m,sn|=m}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Ke(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function al(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jc(){}function Ec(e,t){var n=K,r=Ae(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,oa(Pc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,br(9,_c.bind(null,n,r,i,t),void 0,null),le===null)throw Error(k(349));ln&30||Lc(n,t,i)}return i}function Lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _c(e,t,n,r){t.value=n,t.getSnapshot=r,zc(t)&&Nc(e)}function Pc(e,t,n){return n(function(){zc(t)&&Nc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Nc(e){var t=ft(e,1);t!==null&&Qe(t,e,1,-1)}function mu(e){var t=qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=tp.bind(null,K,e),[t.memoizedState,e]}function br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rc(){return Ae().memoizedState}function Pi(e,t,n,r){var i=qe();K.flags|=e,i.memoizedState=br(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(ne!==null){var l=ne.memoizedState;if(o=l.destroy,r!==null&&na(r,l.deps)){i.memoizedState=br(t,n,o,r);return}}K.flags|=e,i.memoizedState=br(1|t,n,o,r)}function gu(e,t){return Pi(8390656,8,e,t)}function oa(e,t){return ko(2048,8,e,t)}function Mc(e,t){return ko(4,2,e,t)}function Tc(e,t){return ko(4,4,e,t)}function Fc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Fc.bind(null,t,e),n)}function la(){}function $c(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&na(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&na(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ac(e,t,n){return ln&21?(Ke(n,t)||(n=B1(),K.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Jf(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{A=n,ll.transition=r}}function Vc(){return Ae().memoizedState}function ep(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bc(e))Dc(t,n);else if(n=Cc(e,t,n,r),n!==null){var i=ge();Qe(n,e,r,i),Hc(n,t,r)}}function tp(e,t,n){var r=Mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Dc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ke(a,l)){var u=t.interleaved;u===null?(i.next=i,Ys(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Cc(e,t,i,r),n!==null&&(i=ge(),Qe(n,e,r,i),Hc(n,t,r))}}function bc(e){var t=e.alternate;return e===K||t!==null&&t===K}function Dc(e,t){wr=to=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Os(e,n)}}var no={readContext:Oe,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},np={readContext:Oe,useCallback:function(e,t){return qe().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4194308,4,Fc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pi(4,2,e,t)},useMemo:function(e,t){var n=qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ep.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=qe();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:la,useDeferredValue:function(e){return qe().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=Jf.bind(null,e[1]),qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=qe();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),le===null)throw Error(k(349));ln&30||Lc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gu(Pc.bind(null,r,o,e),[e]),r.flags|=2048,br(9,_c.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qe(),t=le.identifierPrefix;if(Q){var n=at,r=st;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rp={readContext:Oe,useCallback:$c,useContext:Oe,useEffect:oa,useImperativeHandle:Ic,useInsertionEffect:Mc,useLayoutEffect:Tc,useMemo:Oc,useReducer:sl,useRef:Rc,useState:function(){return sl(Vr)},useDebugValue:la,useDeferredValue:function(e){var t=Ae();return Ac(t,ne.memoizedState,e)},useTransition:function(){var e=sl(Vr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Ec,useId:Vc,unstable_isNewReconciler:!1},ip={readContext:Oe,useCallback:$c,useContext:Oe,useEffect:oa,useImperativeHandle:Ic,useInsertionEffect:Mc,useLayoutEffect:Tc,useMemo:Oc,useReducer:al,useRef:Rc,useState:function(){return al(Vr)},useDebugValue:la,useDeferredValue:function(e){var t=Ae();return ne===null?t.memoizedState=e:Ac(t,ne.memoizedState,e)},useTransition:function(){var e=al(Vr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Ec,useId:Vc,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Mt(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(Qe(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),i=Mt(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nt(e,o,i),t!==null&&(Qe(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Mt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Qe(t,e,r,n),Li(t,e,r))}};function vu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,o):!0}function Bc(e,t,n){var r=!1,i=Ot,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=ke(t)?rn:he.current,r=t.contextTypes,o=(r=r!=null)?Tn(e,i):Ot),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=ke(t)?rn:he.current,i.context=Tn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Yl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),Ji(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=R0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var op=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,us=r),Jl(e,t)},n}function Wc(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function yu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new op;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yp.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var lp=ht.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?wc(t,null,n,r):In(t,e.child,n,r)}function ku(e,t,n,r,i){n=n.render;var o=t.ref;return Nn(t,i),r=ra(e,t,n,r,o,i),n=ia(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Q&&n&&Ws(t),t.flags|=1,me(e,t,r,i),t.child)}function Su(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ha(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qc(e,t,o,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(l,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Mr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,pt(e,t,i)}return es(e,t,n,r,i)}function Zc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(jn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(jn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(jn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(jn,_e),_e|=r;return me(e,t,i,n),t.child}function Kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function es(e,t,n,r,i){var o=ke(n)?rn:he.current;return o=Tn(t,o),Nn(t,i),n=ra(e,t,n,r,o,i),r=ia(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(Q&&r&&Ws(t),t.flags|=1,me(e,t,n,i),t.child)}function ju(e,t,n,r,i){if(ke(n)){var o=!0;Ki(t)}else o=!1;if(Nn(t,i),t.stateNode===null)zi(e,t),Bc(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Oe(c):(c=ke(n)?rn:he.current,c=Tn(t,c));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&xu(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,Ji(t,r,l,i),u=t.memoizedState,a!==r||g!==u||Ce.current||wt?(typeof m=="function"&&(Yl(t,n,m,r),u=t.memoizedState),(a=wt||vu(t,n,a,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,kc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:He(t.type,a),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Oe(u):(u=ke(n)?rn:he.current,u=Tn(t,u));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==u)&&xu(t,l,r,u),wt=!1,g=t.memoizedState,l.state=g,Ji(t,r,l,i);var y=t.memoizedState;a!==f||g!==y||Ce.current||wt?(typeof v=="function"&&(Yl(t,n,v,r),y=t.memoizedState),(c=wt||vu(t,n,c,r,g,y,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ts(e,t,n,r,o,i)}function ts(e,t,n,r,i,o){Kc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&uu(t,n,!1),pt(e,t,o);r=t.stateNode,lp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=In(t,e.child,null,o),t.child=In(t,null,a,o)):me(e,t,a,o),t.memoizedState=r.state,i&&uu(t,n,!0),t.child}function Gc(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Js(e,t.containerInfo)}function Eu(e,t,n,r,i){return Fn(),Zs(i),t.flags|=256,me(e,t,n,r),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function qc(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Z,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Lo(l,r,0,null),e=tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=rs(n),t.memoizedState=ns,e):sa(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return sp(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tt(a,o):(o=tn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?rs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ns,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function sa(e,t){return t=Lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,n,r){return r!==null&&Zs(r),In(t,e.child,null,n),e=sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ul(Error(k(422))),hi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lo({mode:"visible",children:r.children},i,0,null),o=tn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&In(t,e.child,null,l),t.child.memoizedState=rs(l),t.memoizedState=ns,o);if(!(t.mode&1))return hi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=ul(o,r,void 0),hi(e,t,l,r)}if(a=(l&e.childLanes)!==0,we||a){if(r=le,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),Qe(r,e,i,-1))}return pa(),r=ul(Error(k(421))),hi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Pe=zt(i.nextSibling),ze=t,Q=!0,Ue=null,e!==null&&(Te[Fe++]=st,Te[Fe++]=at,Te[Fe++]=on,st=e.id,at=e.overflow,on=t),t=sa(t,r.children),t.flags|=4096,t)}function Lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function cl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Yc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,n,t);else if(e.tag===19)Lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cl(t,!0,n,null,o);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:Gc(t),Fn();break;case 5:Sc(t);break;case 1:ke(t.type)&&Ki(t);break;case 4:Js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Yi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?qc(e,t,n):(H(Z,Z.current&1),e=pt(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Zc(e,t,n)}return pt(e,t,n)}var Xc,is,Jc,ed;Xc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};is=function(){};Jc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(tt.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=zl(e,i),r=zl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}Rl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Er.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&B("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ed=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function up(e,t,n){var r=t.pendingProps;switch(Qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return ke(t.type)&&Zi(),de(t),null;case 3:return r=t.stateNode,$n(),W(Ce),W(he),ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(fs(Ue),Ue=null))),is(e,t),de(t),null;case 5:ea(t);var i=Xt(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)Jc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return de(t),null}if(e=Xt(tt.current),fi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xe]=t,r[Ir]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)B(pr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ia(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":Oa(r,o),B("invalid",r)}Rl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",""+a]):Er.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":ri(r),$a(r,o,!0);break;case"textarea":ri(r),Aa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=P1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xe]=t,e[Ir]=r,Xc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ml(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)B(pr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Ia(e,r),i=Ll(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),B("invalid",e);break;case"textarea":Oa(e,r),i=zl(e,r),B("invalid",e);break;default:i=r}Rl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?R1(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&z1(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lr(e,u):typeof u=="number"&&Lr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Er.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&Rs(e,o,u,l))}switch(n){case"input":ri(e),$a(e,r,!1);break;case"textarea":ri(e),Aa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)ed(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Xt(Or.current),Xt(tt.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return de(t),null;case 13:if(W(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Pe!==null&&t.mode&1&&!(t.flags&128))xc(),Fn(),t.flags|=98560,o=!1;else if(o=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Xe]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),o=!1}else Ue!==null&&(fs(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?re===0&&(re=3):pa())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return $n(),is(e,t),e===null&&Tr(t.stateNode.containerInfo),de(t),null;case 10:return qs(t.type._context),de(t),null;case 17:return ke(t.type)&&Zi(),de(t),null;case 19:if(W(Z),o=t.memoizedState,o===null)return de(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)ir(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=eo(e),l!==null){for(t.flags|=128,ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>An&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=eo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return de(t),null}else 2*Y()-o.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,r=!0,ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return fa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function cp(e,t){switch(Qs(t),t.tag){case 1:return ke(t.type)&&Zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),W(Ce),W(he),ta(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ea(t),null;case 13:if(W(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Z),null;case 4:return $n(),null;case 10:return qs(t.type._context),null;case 22:case 23:return fa(),null;case 24:return null;default:return null}}var mi=!1,fe=!1,dp=typeof WeakSet=="function"?WeakSet:Set,z=null;function Sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function os(e,t,n){try{n()}catch(r){q(e,t,r)}}var _u=!1;function fp(e,t){if(Hl=Bi,e=oc(),Us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,m=0,f=e,g=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++m===r&&(u=l),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},Bi=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:He(t.type,w),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=_u,_u=!1,y}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&os(t,n,o)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[Ir],delete t[Ql],delete t[Kf],delete t[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nd(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}var se=null,Be=!1;function vt(e,t,n){for(n=n.child;n!==null;)rd(e,t,n),n=n.sibling}function rd(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:fe||Sn(n,t);case 6:var r=se,i=Be;se=null,vt(e,t,n),se=r,Be=i,se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Be?(e=se,n=n.stateNode,e.nodeType===8?rl(e.parentNode,n):e.nodeType===1&&rl(e,n),Nr(e)):rl(se,n.stateNode));break;case 4:r=se,i=Be,se=n.stateNode.containerInfo,Be=!0,vt(e,t,n),se=r,Be=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&os(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!fe&&(Sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,vt(e,t,n),fe=r):vt(e,t,n);break;default:vt(e,t,n)}}function zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dp),t.forEach(function(r){var i=Cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:se=a.stateNode,Be=!1;break e;case 3:se=a.stateNode.containerInfo,Be=!0;break e;case 4:se=a.stateNode.containerInfo,Be=!0;break e}a=a.return}if(se===null)throw Error(k(160));rd(o,l,i),se=null,Be=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){q(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)id(t,e),t=t.sibling}function id(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Ge(e),r&4){try{Cr(3,e,e.return),jo(3,e)}catch(w){q(e,e.return,w)}try{Cr(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:De(t,e),Ge(e),r&512&&n!==null&&Sn(n,n.return);break;case 5:if(De(t,e),Ge(e),r&512&&n!==null&&Sn(n,n.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(w){q(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&L1(i,o),Ml(a,l);var c=Ml(a,o);for(l=0;l<u.length;l+=2){var m=u[l],f=u[l+1];m==="style"?R1(i,f):m==="dangerouslySetInnerHTML"?z1(i,f):m==="children"?Lr(i,f):Rs(i,m,f,c)}switch(a){case"input":_l(i,o);break;case"textarea":_1(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ln(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ir]=o}catch(w){q(e,e.return,w)}}break;case 6:if(De(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){q(e,e.return,w)}}break;case 3:if(De(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:De(t,e),Ge(e);break;case 13:De(t,e),Ge(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ca=Y())),r&4&&zu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||m,De(t,e),fe=c):De(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(f=z=m;z!==null;){switch(g=z,v=g.child,g.tag){case 0:case 11:case 14:case 15:Cr(4,g,g.return);break;case 1:Sn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){q(r,n,w)}}break;case 5:Sn(g,g.return);break;case 22:if(g.memoizedState!==null){Ru(f);continue}}v!==null?(v.return=g,z=v):Ru(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=N1("display",l))}catch(w){q(e,e.return,w)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){q(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:De(t,e),Ge(e),r&4&&zu(e);break;case 21:break;default:De(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lr(i,""),r.flags&=-33);var o=Pu(e);as(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Pu(e);ss(e,a,l);break;default:throw Error(k(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,n){z=e,od(e)}function od(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||mi;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||fe;a=mi;var c=fe;if(mi=l,(fe=u)&&!c)for(z=i;z!==null;)l=z,u=l.child,l.tag===22&&l.memoizedState!==null?Mu(i):u!==null?(u.return=l,z=u):Mu(i);for(;o!==null;)z=o,od(o),o=o.sibling;z=i,mi=a,fe=c}Nu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Nu(e)}}function Nu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Nr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}fe||t.flags&512&&ls(t)}catch(g){q(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Ru(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Mu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){q(t,i,u)}}var o=t.return;try{ls(t)}catch(u){q(t,o,u)}break;case 5:var l=t.return;try{ls(t)}catch(u){q(t,l,u)}}}catch(u){q(t,t.return,u)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var hp=Math.ceil,ro=ht.ReactCurrentDispatcher,aa=ht.ReactCurrentOwner,$e=ht.ReactCurrentBatchConfig,$=0,le=null,ee=null,ae=0,_e=0,jn=Vt(0),re=0,Dr=null,sn=0,Eo=0,ua=0,kr=null,ye=null,ca=0,An=1/0,it=null,io=!1,us=null,Rt=null,gi=!1,jt=null,oo=0,Sr=0,cs=null,Ni=-1,Ri=0;function ge(){return $&6?Y():Ni!==-1?Ni:Ni=Y()}function Mt(e){return e.mode&1?$&2&&ae!==0?ae&-ae:Yf.transition!==null?(Ri===0&&(Ri=B1()),Ri):(e=A,e!==0||(e=window.event,e=e===void 0?16:q1(e.type)),e):1}function Qe(e,t,n,r){if(50<Sr)throw Sr=0,cs=null,Error(k(185));Zr(e,n,r),(!($&2)||e!==le)&&(e===le&&(!($&2)&&(Eo|=n),re===4&&kt(e,ae)),Se(e,r),n===1&&$===0&&!(t.mode&1)&&(An=Y()+500,Co&&bt()))}function Se(e,t){var n=e.callbackNode;q0(e,t);var r=Hi(e,e===le?ae:0);if(r===0)n!==null&&Da(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Da(n),t===1)e.tag===0?qf(Tu.bind(null,e)):mc(Tu.bind(null,e)),Qf(function(){!($&6)&&bt()}),n=null;else{switch(U1(r)){case 1:n=$s;break;case 4:n=D1;break;case 16:n=Di;break;case 536870912:n=H1;break;default:n=Di}n=pd(n,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ld(e,t){if(Ni=-1,Ri=0,$&6)throw Error(k(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Hi(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=$;$|=2;var o=ad();(le!==e||ae!==t)&&(it=null,An=Y()+500,en(e,t));do try{vp();break}catch(a){sd(e,a)}while(!0);Gs(),ro.current=o,$=i,ee!==null?t=0:(le=null,ae=0,t=re)}if(t!==0){if(t===2&&(i=Ol(e),i!==0&&(r=i,t=ds(e,i))),t===1)throw n=Dr,en(e,0),kt(e,r),Se(e,Y()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!mp(i)&&(t=lo(e,r),t===2&&(o=Ol(e),o!==0&&(r=o,t=ds(e,o))),t===1))throw n=Dr,en(e,0),kt(e,r),Se(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Gt(e,ye,it);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=ca+500-Y(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wl(Gt.bind(null,e,ye,it),t);break}Gt(e,ye,it);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-We(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hp(r/1960))-r,10<r){e.timeoutHandle=Wl(Gt.bind(null,e,ye,it),r);break}Gt(e,ye,it);break;case 5:Gt(e,ye,it);break;default:throw Error(k(329))}}}return Se(e,Y()),e.callbackNode===n?ld.bind(null,e):null}function ds(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=lo(e,t),e!==2&&(t=ye,ye=n,t!==null&&fs(t)),e}function fs(e){ye===null?ye=e:ye.push.apply(ye,e)}function mp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~ua,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if($&6)throw Error(k(327));Rn();var t=Hi(e,0);if(!(t&1))return Se(e,Y()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=Ol(e);r!==0&&(t=r,n=ds(e,r))}if(n===1)throw n=Dr,en(e,0),kt(e,t),Se(e,Y()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,ye,it),Se(e,Y()),null}function da(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(An=Y()+500,Co&&bt())}}function an(e){jt!==null&&jt.tag===0&&!($&6)&&Rn();var t=$;$|=1;var n=$e.transition,r=A;try{if($e.transition=null,A=1,e)return e()}finally{A=r,$e.transition=n,$=t,!($&6)&&bt()}}function fa(){_e=jn.current,W(jn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zi();break;case 3:$n(),W(Ce),W(he),ta();break;case 5:ea(r);break;case 4:$n();break;case 13:W(Z);break;case 19:W(Z);break;case 10:qs(r.type._context);break;case 22:case 23:fa()}n=n.return}if(le=e,ee=e=Tt(e.current,null),ae=_e=t,re=0,Dr=null,ua=Eo=sn=0,ye=kr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function sd(e,t){do{var n=ee;try{if(Gs(),_i.current=no,to){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(ln=0,ie=ne=K=null,wr=!1,Ar=0,aa.current=null,n===null||n.return===null){re=1,Dr=t,ee=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=ae,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=a,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=wu(l);if(v!==null){v.flags&=-257,Cu(v,l,a,o,t),v.mode&1&&yu(o,c,t),t=v,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){yu(o,c,t),pa();break e}u=Error(k(426))}}else if(Q&&a.mode&1){var _=wu(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cu(_,l,a,o,t),Zs(On(u,a));break e}}o=u=On(u,a),re!==4&&(re=2),kr===null?kr=[o]:kr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Uc(o,u,t);pu(o,p);break e;case 1:a=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Rt===null||!Rt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Wc(o,a,t);pu(o,x);break e}}o=o.return}while(o!==null)}cd(n)}catch(S){t=S,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function ad(){var e=ro.current;return ro.current=no,e===null?no:e}function pa(){(re===0||re===3||re===2)&&(re=4),le===null||!(sn&268435455)&&!(Eo&268435455)||kt(le,ae)}function lo(e,t){var n=$;$|=2;var r=ad();(le!==e||ae!==t)&&(it=null,en(e,t));do try{gp();break}catch(i){sd(e,i)}while(!0);if(Gs(),$=n,ro.current=r,ee!==null)throw Error(k(261));return le=null,ae=0,re}function gp(){for(;ee!==null;)ud(ee)}function vp(){for(;ee!==null&&!D0();)ud(ee)}function ud(e){var t=fd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?cd(e):ee=t,aa.current=null}function cd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cp(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=up(n,t,_e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Gt(e,t,n){var r=A,i=$e.transition;try{$e.transition=null,A=1,xp(e,t,n,r)}finally{$e.transition=i,A=r}return null}function xp(e,t,n,r){do Rn();while(jt!==null);if($&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Y0(e,o),e===le&&(ee=le=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,pd(Di,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var l=A;A=1;var a=$;$|=4,aa.current=null,fp(e,n),id(n,e),Af(Bl),Bi=!!Hl,Bl=Hl=null,e.current=n,pp(n),H0(),$=a,A=l,$e.transition=o}else e.current=n;if(gi&&(gi=!1,jt=e,oo=i),o=e.pendingLanes,o===0&&(Rt=null),W0(n.stateNode),Se(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=us,us=null,e;return oo&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===cs?Sr++:(Sr=0,cs=e):Sr=0,bt(),null}function Rn(){if(jt!==null){var e=U1(oo),t=$e.transition,n=A;try{if($e.transition=null,A=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,oo=0,$&6)throw Error(k(331));var i=$;for($|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(z=c;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Cr(8,m,o)}var f=m.child;if(f!==null)f.return=m,z=f;else for(;z!==null;){m=z;var g=m.sibling,v=m.return;if(td(m),m===c){z=null;break}if(g!==null){g.return=v,z=g;break}z=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,z=p;break e}z=o.return}}var d=e.current;for(z=d;z!==null;){l=z;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,z=h;else e:for(l=d;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jo(9,a)}}catch(S){q(a,a.return,S)}if(a===l){z=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,z=x;break e}z=a.return}}if($=i,bt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{A=n,$e.transition=t}}return!1}function Fu(e,t,n){t=On(n,t),t=Uc(e,t,1),e=Nt(e,t,1),t=ge(),e!==null&&(Zr(e,1,t),Se(e,t))}function q(e,t,n){if(e.tag===3)Fu(e,e,n);else for(;t!==null;){if(t.tag===3){Fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){e=On(n,e),e=Wc(t,e,1),t=Nt(t,e,1),e=ge(),t!==null&&(Zr(t,1,e),Se(t,e));break}}t=t.return}}function yp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>Y()-ca?en(e,0):ua|=n),Se(e,t)}function dd(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=ge();e=ft(e,t),e!==null&&(Zr(e,t,n),Se(e,n))}function wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dd(e,n)}function Cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),dd(e,n)}var fd;fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,ap(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&gc(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zi(e,t),e=t.pendingProps;var i=Tn(t,he.current);Nn(t,n),i=ra(null,t,r,e,i,n);var o=ia();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xs(t),i.updater=So,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=ts(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Ws(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sp(r),e=He(r,e),i){case 0:t=es(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Su(null,t,r,He(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),es(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ju(e,t,r,i,n);case 3:e:{if(Gc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,kc(e,t),Ji(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=On(Error(k(423)),t),t=Eu(e,t,r,n,i);break e}else if(r!==i){i=On(Error(k(424)),t),t=Eu(e,t,r,n,i);break e}else for(Pe=zt(t.stateNode.containerInfo.firstChild),ze=t,Q=!0,Ue=null,n=wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===i){t=pt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Sc(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ul(r,i)?l=null:o!==null&&Ul(r,o)&&(t.flags|=32),Kc(e,t),me(e,t,l,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return qc(e,t,n);case 4:return Js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),ku(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,H(Yi,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!Ce.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ut(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ql(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ql(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nn(t,n),i=Oe(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=He(r,t.pendingProps),i=He(r.type,i),Su(e,t,r,i,n);case 15:return Qc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:He(r,i),zi(e,t),t.tag=1,ke(r)?(e=!0,Ki(t)):e=!1,Nn(t,n),Bc(t,r,i),Xl(t,r,i,n),ts(null,t,r,!0,e,n);case 19:return Yc(e,t,n);case 22:return Zc(e,t,n)}throw Error(k(156,t.tag))};function pd(e,t){return b1(e,t)}function kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new kp(e,t,n,r)}function ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sp(e){if(typeof e=="function")return ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ts)return 11;if(e===Fs)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ha(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return tn(n.children,i,o,t);case Ms:l=8,i|=8;break;case kl:return e=Ie(12,n,t,i|2),e.elementType=kl,e.lanes=o,e;case Sl:return e=Ie(13,n,t,i),e.elementType=Sl,e.lanes=o,e;case jl:return e=Ie(19,n,t,i),e.elementType=jl,e.lanes=o,e;case S1:return Lo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C1:l=10;break e;case k1:l=9;break e;case Ts:l=11;break e;case Fs:l=14;break e;case yt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ie(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tn(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Lo(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=S1,e.lanes=n,e.stateNode={isHidden:!1},e}function dl(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function fl(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ma(e,t,n,r,i,o,l,a,u){return e=new jp(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xs(o),e}function Ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return Ot;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return hc(e,n,t)}return t}function md(e,t,n,r,i,o,l,a,u){return e=ma(n,r,!0,e,i,o,l,a,u),e.context=hd(null),n=e.current,r=ge(),i=Mt(n),o=ut(r,i),o.callback=t??null,Nt(n,o,i),e.current.lanes=i,Zr(e,i,r),Se(e,r),e}function _o(e,t,n,r){var i=t.current,o=ge(),l=Mt(i);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,l),e!==null&&(Qe(e,i,l,o),Li(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ga(e,t){Iu(e,t),(e=e.alternate)&&Iu(e,t)}function Lp(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function va(e){this._internalRoot=e}Po.prototype.render=va.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_o(e,t,null,null)};Po.prototype.unmount=va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){_o(null,e,null,null)}),t[dt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Z1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&G1(e)}};function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function _p(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=so(l);o.call(c)}}var l=md(t,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=l,e[dt]=l.current,Tr(e.nodeType===8?e.parentNode:e),an(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=so(u);a.call(c)}}var u=ma(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=u,e[dt]=u.current,Tr(e.nodeType===8?e.parentNode:e),an(function(){_o(t,u,n,r)}),u}function No(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=so(l);a.call(u)}}_o(t,l,e,i)}else l=_p(n,t,e,i,r);return so(l)}W1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Os(t,n|1),Se(t,Y()),!($&6)&&(An=Y()+500,bt()))}break;case 13:an(function(){var r=ft(e,1);if(r!==null){var i=ge();Qe(r,e,1,i)}}),ga(e,1)}};As=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ge();Qe(t,e,134217728,n)}ga(e,134217728)}};Q1=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var r=ge();Qe(n,e,t,r)}ga(e,t)}};Z1=function(){return A};K1=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Fl=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(k(90));E1(r),_l(r,i)}}}break;case"textarea":_1(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};F1=da;I1=an;var Pp={usingClientEntryPoint:!1,Events:[Gr,xn,wo,M1,T1,da]},or={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=A1(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{go=vi.inject(zp),et=vi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xa(t))throw Error(k(200));return Ep(e,t,null,n)};Re.createRoot=function(e,t){if(!xa(e))throw Error(k(299));var n=!1,r="",i=gd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ma(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Tr(e.nodeType===8?e.parentNode:e),new va(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=A1(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return an(e)};Re.hydrate=function(e,t,n){if(!zo(t))throw Error(k(200));return No(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!xa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=gd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=md(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,Tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Po(t)};Re.render=function(e,t,n){if(!zo(t))throw Error(k(200));return No(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!zo(e))throw Error(k(40));return e._reactRootContainer?(an(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Re.unstable_batchedUpdates=da;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return No(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),v1.exports=Re;var Np=v1.exports,xd,Ou=Np;xd=Ou.createRoot,Ou.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hr.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Au="popstate";function Rp(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return ps("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ao(i)}return Tp(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mp(){return Math.random().toString(36).substr(2,8)}function Vu(e,t){return{usr:e.state,key:e.key,idx:t}}function ps(e,t,n,r){return n===void 0&&(n=null),Hr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||Mp()})}function ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Tp(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Et.Pop,u=null,c=m();c==null&&(c=0,l.replaceState(Hr({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function f(){a=Et.Pop;let _=m(),p=_==null?null:_-c;c=_,u&&u({action:a,location:w.location,delta:p})}function g(_,p){a=Et.Push;let d=ps(w.location,_,p);c=m()+1;let h=Vu(d,c),x=w.createHref(d);try{l.pushState(h,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}o&&u&&u({action:a,location:w.location,delta:1})}function v(_,p){a=Et.Replace;let d=ps(w.location,_,p);c=m();let h=Vu(d,c),x=w.createHref(d);l.replaceState(h,"",x),o&&u&&u({action:a,location:w.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:ao(_);return d=d.replace(/ $/,"%20"),X(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return e(i,l)},listen(_){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Au,f),u=_,()=>{i.removeEventListener(Au,f),u=null}},createHref(_){return t(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(_){return l.go(_)}};return w}var bu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bu||(bu={}));function Fp(e,t,n){return n===void 0&&(n="/"),Ip(e,t,n,!1)}function Ip(e,t,n,r){let i=typeof t=="string"?Zn(t):t,o=ya(i.pathname||"/",n);if(o==null)return null;let l=wd(e);$p(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=Zp(o);a=Wp(l[u],c,r)}return a}function wd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ft([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wd(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Bp(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of Cd(o.path))i(o,l,u)}),t}function Cd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Cd(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function $p(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Up(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Op=/^:[\w-]+$/,Ap=3,Vp=2,bp=1,Dp=10,Hp=-2,Du=e=>e==="*";function Bp(e,t){let n=e.split("/"),r=n.length;return n.some(Du)&&(r+=Hp),t&&(r+=Vp),n.filter(i=>!Du(i)).reduce((i,o)=>i+(Op.test(o)?Ap:o===""?bp:Dp),r)}function Up(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Wp(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",f=Hu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},m),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Hu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:Ft([o,f.pathname]),pathnameBase:Yp(Ft([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=Ft([o,f.pathnameBase]))}return l}function Hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,m,f)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let w=a[f]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[f];return v&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function Qp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Zp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ya(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Kp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e;return{pathname:n?n.startsWith("/")?n:Gp(n,t):t,search:Xp(r),hash:Jp(i)}}function Gp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wa(e,t){let n=qp(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ca(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=Hr({},e),X(!i.pathname||!i.pathname.includes("?"),pl("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),pl("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),pl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=Kp(i,a),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||m)&&(u.pathname+="/"),u}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),Yp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Xp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function e2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kd=["post","put","patch","delete"];new Set(kd);const t2=["get",...kd];new Set(t2);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Br.apply(this,arguments)}const ka=j.createContext(null),n2=j.createContext(null),Dt=j.createContext(null),Ro=j.createContext(null),Ht=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Sd=j.createContext(null);function r2(e,t){let{relative:n}=t===void 0?{}:t;Kn()||X(!1);let{basename:r,navigator:i}=j.useContext(Dt),{hash:o,pathname:l,search:a}=Ed(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ft([r,l])),i.createHref({pathname:u,search:a,hash:o})}function Kn(){return j.useContext(Ro)!=null}function Yr(){return Kn()||X(!1),j.useContext(Ro).location}function jd(e){j.useContext(Dt).static||j.useLayoutEffect(e)}function Mo(){let{isDataRoute:e}=j.useContext(Ht);return e?g2():i2()}function i2(){Kn()||X(!1);let e=j.useContext(ka),{basename:t,future:n,navigator:r}=j.useContext(Dt),{matches:i}=j.useContext(Ht),{pathname:o}=Yr(),l=JSON.stringify(wa(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return jd(()=>{a.current=!0}),j.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Ca(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ft([t,f.pathname])),(m.replace?r.replace:r.push)(f,m.state,m)},[t,r,l,o,e])}function Ed(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Dt),{matches:i}=j.useContext(Ht),{pathname:o}=Yr(),l=JSON.stringify(wa(i,r.v7_relativeSplatPath));return j.useMemo(()=>Ca(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function o2(e,t){return l2(e,t)}function l2(e,t,n,r){Kn()||X(!1);let{navigator:i}=j.useContext(Dt),{matches:o}=j.useContext(Ht),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Yr(),m;if(t){var f;let _=typeof t=="string"?Zn(t):t;u==="/"||(f=_.pathname)!=null&&f.startsWith(u)||X(!1),m=_}else m=c;let g=m.pathname||"/",v=g;if(u!=="/"){let _=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=Fp(e,{pathname:v}),w=d2(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Ft([u,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:Ft([u,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&w?j.createElement(Ro.Provider,{value:{location:Br({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Et.Pop}},w):w}function s2(){let e=m2(),t=e2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const a2=j.createElement(s2,null);class u2 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Ht.Provider,{value:this.props.routeContext},j.createElement(Sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c2(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(ka);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Ht.Provider,{value:t},r)}function d2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let m=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);m>=0||X(!1),l=l.slice(0,Math.min(l.length,m+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let f=l[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=m),f.route.id){let{loaderData:g,errors:v}=n,y=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,f,g)=>{let v,y=!1,w=null,_=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||a2,u&&(c<0&&g===0?(y=!0,_=null):c===g&&(y=!0,_=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let h;return v?h=w:y?h=_:f.route.Component?h=j.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=m,j.createElement(c2,{match:f,routeContext:{outlet:m,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?j.createElement(u2,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Ld=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ld||{}),uo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(uo||{});function f2(e){let t=j.useContext(ka);return t||X(!1),t}function p2(e){let t=j.useContext(n2);return t||X(!1),t}function h2(e){let t=j.useContext(Ht);return t||X(!1),t}function _d(e){let t=h2(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function m2(){var e;let t=j.useContext(Sd),n=p2(uo.UseRouteError),r=_d(uo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g2(){let{router:e}=f2(Ld.UseNavigateStable),t=_d(uo.UseNavigateStable),n=j.useRef(!1);return jd(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Br({fromRouteId:t},o)))},[e,t])}function v2(e){let{to:t,replace:n,state:r,relative:i}=e;Kn()||X(!1);let{future:o,static:l}=j.useContext(Dt),{matches:a}=j.useContext(Ht),{pathname:u}=Yr(),c=Mo(),m=Ca(t,wa(a,o.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(m);return j.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function rt(e){X(!1)}function x2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Et.Pop,navigator:o,static:l=!1,future:a}=e;Kn()&&X(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:o,static:l,future:Br({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=Zn(r));let{pathname:m="/",search:f="",hash:g="",state:v=null,key:y="default"}=r,w=j.useMemo(()=>{let _=ya(m,u);return _==null?null:{location:{pathname:_,search:f,hash:g,state:v,key:y},navigationType:i}},[u,m,f,g,v,y,i]);return w==null?null:j.createElement(Dt.Provider,{value:c},j.createElement(Ro.Provider,{children:n,value:w}))}function y2(e){let{children:t,location:n}=e;return o2(hs(t),n)}new Promise(()=>{});function hs(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let o=[...t,i];if(r.type===j.Fragment){n.push.apply(n,hs(r.props.children,o));return}r.type!==rt&&X(!1),!r.props.index||!r.props.children||X(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=hs(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}function w2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function C2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function k2(e,t){return e.button===0&&(!t||t==="_self")&&!C2(e)}const S2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],j2="6";try{window.__reactRouterVersion=j2}catch{}const E2="startTransition",Bu=x0[E2];function L2(e){let{basename:t,children:n,future:r,window:i}=e,o=j.useRef();o.current==null&&(o.current=Rp({window:i,v5Compat:!0}));let l=o.current,[a,u]=j.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=j.useCallback(f=>{c&&Bu?Bu(()=>u(f)):u(f)},[u,c]);return j.useLayoutEffect(()=>l.listen(m),[l,m]),j.createElement(x2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const _2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:c,preventScrollReset:m,viewTransition:f}=t,g=w2(t,S2),{basename:v}=j.useContext(Dt),y,w=!1;if(typeof c=="string"&&P2.test(c)&&(y=c,_2))try{let h=new URL(window.location.href),x=c.startsWith("//")?new URL(h.protocol+c):new URL(c),S=ya(x.pathname,v);x.origin===h.origin&&S!=null?c=S+x.search+x.hash:w=!0}catch{}let _=r2(c,{relative:i}),p=z2(c,{replace:l,state:a,target:u,preventScrollReset:m,relative:i,viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return j.createElement("a",ms({},g,{href:y||_,onClick:w||o?r:d,ref:n,target:u}))});var Uu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Uu||(Uu={}));var Wu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wu||(Wu={}));function z2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,u=Mo(),c=Yr(),m=Ed(e,{relative:l});return j.useCallback(f=>{if(k2(f,n)){f.preventDefault();let g=r!==void 0?r:ao(c)===ao(m);u(e,{replace:g,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[c,u,m,r,i,n,e,o,l,a])}var pe=function(){return pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pe.apply(this,arguments)};function Ur(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var U="-ms-",jr="-moz-",O="-webkit-",Pd="comm",To="rule",Sa="decl",N2="@import",zd="@keyframes",R2="@layer",Nd=Math.abs,ja=String.fromCharCode,gs=Object.assign;function M2(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Rd(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function T(e,t,n){return e.replace(t,n)}function Ti(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Vn(e,t,n){return e.slice(t,n)}function Ye(e){return e.length}function Md(e){return e.length}function hr(e,t){return t.push(e),e}function T2(e,t){return e.map(t).join("")}function Qu(e,t){return e.filter(function(n){return!ot(n,t)})}var Fo=1,bn=1,Td=0,Ve=0,J=0,Gn="";function Io(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Fo,column:bn,length:l,return:"",siblings:a}}function xt(e,t){return gs(Io("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fn(e){for(;e.root;)e=xt(e.root,{children:[e]});hr(e,e.siblings)}function F2(){return J}function I2(){return J=Ve>0?oe(Gn,--Ve):0,bn--,J===10&&(bn=1,Fo--),J}function Ze(){return J=Ve<Td?oe(Gn,Ve++):0,bn++,J===10&&(bn=1,Fo++),J}function nn(){return oe(Gn,Ve)}function Fi(){return Ve}function $o(e,t){return Vn(Gn,e,t)}function vs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $2(e){return Fo=bn=1,Td=Ye(Gn=e),Ve=0,[]}function O2(e){return Gn="",e}function hl(e){return Rd($o(Ve-1,xs(e===91?e+2:e===40?e+1:e)))}function A2(e){for(;(J=nn())&&J<33;)Ze();return vs(e)>2||vs(J)>3?"":" "}function V2(e,t){for(;--t&&Ze()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return $o(e,Fi()+(t<6&&nn()==32&&Ze()==32))}function xs(e){for(;Ze();)switch(J){case e:return Ve;case 34:case 39:e!==34&&e!==39&&xs(J);break;case 40:e===41&&xs(e);break;case 92:Ze();break}return Ve}function b2(e,t){for(;Ze()&&e+J!==57;)if(e+J===84&&nn()===47)break;return"/*"+$o(t,Ve-1)+"*"+ja(e===47?e:Ze())}function D2(e){for(;!vs(nn());)Ze();return $o(e,Ve)}function H2(e){return O2(Ii("",null,null,null,[""],e=$2(e),0,[0],e))}function Ii(e,t,n,r,i,o,l,a,u){for(var c=0,m=0,f=l,g=0,v=0,y=0,w=1,_=1,p=1,d=0,h="",x=i,S=o,L=r,C=h;_;)switch(y=d,d=Ze()){case 40:if(y!=108&&oe(C,f-1)==58){Ti(C+=T(hl(d),"&","&\f"),"&\f",Nd(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=hl(d);break;case 9:case 10:case 13:case 32:C+=A2(y);break;case 92:C+=V2(Fi()-1,7);continue;case 47:switch(nn()){case 42:case 47:hr(B2(b2(Ze(),Fi()),t,n,u),u);break;default:C+="/"}break;case 123*w:a[c++]=Ye(C)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:p==-1&&(C=T(C,/\f/g,"")),v>0&&Ye(C)-f&&hr(v>32?Ku(C+";",r,n,f-1,u):Ku(T(C," ","")+";",r,n,f-2,u),u);break;case 59:C+=";";default:if(hr(L=Zu(C,t,n,c,m,i,a,h,x=[],S=[],f,o),o),d===123)if(m===0)Ii(C,t,L,L,x,o,f,a,S);else switch(g===99&&oe(C,3)===110?100:g){case 100:case 108:case 109:case 115:Ii(e,L,L,r&&hr(Zu(e,L,L,0,0,i,a,h,i,x=[],f,S),S),i,S,f,a,r?x:S);break;default:Ii(C,L,L,L,[""],S,0,a,S)}}c=m=v=0,w=p=1,h=C="",f=l;break;case 58:f=1+Ye(C),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&I2()==125)continue}switch(C+=ja(d),d*w){case 38:p=m>0?1:(C+="\f",-1);break;case 44:a[c++]=(Ye(C)-1)*p,p=1;break;case 64:nn()===45&&(C+=hl(Ze())),g=nn(),m=f=Ye(h=C+=D2(Fi())),d++;break;case 45:y===45&&Ye(C)==2&&(w=0)}}return o}function Zu(e,t,n,r,i,o,l,a,u,c,m,f){for(var g=i-1,v=i===0?o:[""],y=Md(v),w=0,_=0,p=0;w<r;++w)for(var d=0,h=Vn(e,g+1,g=Nd(_=l[w])),x=e;d<y;++d)(x=Rd(_>0?v[d]+" "+h:T(h,/&\f/g,v[d])))&&(u[p++]=x);return Io(e,t,n,i===0?To:a,u,c,m,f)}function B2(e,t,n,r){return Io(e,t,n,Pd,ja(F2()),Vn(e,2,-2),0,r)}function Ku(e,t,n,r,i){return Io(e,t,n,Sa,Vn(e,0,r),Vn(e,r+1,-1),r,i)}function Fd(e,t,n){switch(M2(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+jr+e+U+e+e;case 5936:switch(oe(e,t+11)){case 114:return O+e+U+T(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+U+T(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+U+T(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+U+e+e;case 6165:return O+e+U+"flex-"+e+e;case 5187:return O+e+T(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+U+"flex-$1$2")+e;case 5443:return O+e+U+"flex-item-"+T(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":U+"grid-row-"+T(e,/flex-|-self/g,""))+e;case 4675:return O+e+U+"flex-line-pack"+T(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+U+T(e,"shrink","negative")+e;case 5292:return O+e+U+T(e,"basis","preferred-size")+e;case 6060:return O+"box-"+T(e,"-grow","")+O+e+U+T(e,"grow","positive")+e;case 4554:return O+T(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return T(T(T(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return T(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return T(T(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+U+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!ot(e,/flex-|baseline/))return U+"grid-column-align"+Vn(e,t)+e;break;case 2592:case 3360:return U+T(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ot(r.props,/grid-\w+-end/)})?~Ti(e+(n=n[t].value),"span",0)?e:U+T(e,"-start","")+e+U+"grid-row-span:"+(~Ti(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":U+T(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ot(r.props,/grid-\w+-start/)})?e:U+T(T(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return T(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ye(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return T(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+jr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ti(e,"stretch",0)?Fd(T(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return T(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return U+i+":"+o+c+(l?U+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(oe(e,t+6)===121)return T(e,":",":"+O)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return T(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(oe(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+U+"$2box$3")+e;case 100:return T(e,":",":"+U)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(e,"scroll-","scroll-snap-")+e}return e}function co(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function U2(e,t,n,r){switch(e.type){case R2:if(e.children.length)break;case N2:case Sa:return e.return=e.return||e.value;case Pd:return"";case zd:return e.return=e.value+"{"+co(e.children,r)+"}";case To:if(!Ye(e.value=e.props.join(",")))return""}return Ye(n=co(e.children,r))?e.return=e.value+"{"+n+"}":""}function W2(e){var t=Md(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Q2(e){return function(t){t.root||(t=t.return)&&e(t)}}function Z2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Sa:e.return=Fd(e.value,e.length,n);return;case zd:return co([xt(e,{value:T(e.value,"@","@"+O)})],r);case To:if(e.length)return T2(n=e.props,function(i){switch(ot(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fn(xt(e,{props:[T(i,/:(read-\w+)/,":"+jr+"$1")]})),fn(xt(e,{props:[i]})),gs(e,{props:Qu(n,r)});break;case"::placeholder":fn(xt(e,{props:[T(i,/:(plac\w+)/,":"+O+"input-$1")]})),fn(xt(e,{props:[T(i,/:(plac\w+)/,":"+jr+"$1")]})),fn(xt(e,{props:[T(i,/:(plac\w+)/,U+"input-$1")]})),fn(xt(e,{props:[i]})),gs(e,{props:Qu(n,r)});break}return""})}}var K2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Le={},Dn=typeof process<"u"&&Le!==void 0&&(Le.REACT_APP_SC_ATTR||Le.SC_ATTR)||"data-styled",Id="active",$d="data-styled-version",Oo="6.1.13",Ea=`/*!sc*/
`,fo=typeof window<"u"&&"HTMLElement"in window,G2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Le.REACT_APP_SC_DISABLE_SPEEDY!==""?Le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Le!==void 0&&Le.SC_DISABLE_SPEEDY!==void 0&&Le.SC_DISABLE_SPEEDY!==""&&Le.SC_DISABLE_SPEEDY!=="false"&&Le.SC_DISABLE_SPEEDY),q2={},Ao=Object.freeze([]),Hn=Object.freeze({});function Od(e,t,n){return n===void 0&&(n=Hn),e.theme!==n.theme&&e.theme||t||n.theme}var Ad=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Y2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X2=/(^-|-$)/g;function Gu(e){return e.replace(Y2,"-").replace(X2,"")}var J2=/(a)(d)/gi,xi=52,qu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ys(e){var t,n="";for(t=Math.abs(e);t>xi;t=t/xi|0)n=qu(t%xi)+n;return(qu(t%xi)+n).replace(J2,"$1-$2")}var ml,Vd=5381,En=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bd=function(e){return En(Vd,e)};function Dd(e){return ys(bd(e)>>>0)}function eh(e){return e.displayName||e.name||"Component"}function gl(e){return typeof e=="string"&&!0}var Hd=typeof Symbol=="function"&&Symbol.for,Bd=Hd?Symbol.for("react.memo"):60115,th=Hd?Symbol.for("react.forward_ref"):60112,nh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ud={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ih=((ml={})[th]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ml[Bd]=Ud,ml);function Yu(e){return("type"in(t=e)&&t.type.$$typeof)===Bd?Ud:"$$typeof"in e?ih[e.$$typeof]:nh;var t}var oh=Object.defineProperty,lh=Object.getOwnPropertyNames,Xu=Object.getOwnPropertySymbols,sh=Object.getOwnPropertyDescriptor,ah=Object.getPrototypeOf,Ju=Object.prototype;function Wd(e,t,n){if(typeof t!="string"){if(Ju){var r=ah(t);r&&r!==Ju&&Wd(e,r,n)}var i=lh(t);Xu&&(i=i.concat(Xu(t)));for(var o=Yu(e),l=Yu(t),a=0;a<i.length;++a){var u=i[a];if(!(u in rh||n&&n[u]||l&&u in l||o&&u in o)){var c=sh(t,u);try{oh(e,u,c)}catch{}}}}return e}function Bn(e){return typeof e=="function"}function La(e){return typeof e=="object"&&"styledComponentId"in e}function Jt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ws(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Wr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cs(e,t,n){if(n===void 0&&(n=!1),!n&&!Wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Cs(e[r],t[r]);else if(Wr(t))for(var r in t)e[r]=Cs(e[r],t[r]);return e}function _a(e,t){Object.defineProperty(e,"toString",{value:t})}function Xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var uh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Xr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Ea);return n},e}(),$i=new Map,po=new Map,Oi=1,yi=function(e){if($i.has(e))return $i.get(e);for(;po.has(Oi);)Oi++;var t=Oi++;return $i.set(e,t),po.set(t,e),t},ch=function(e,t){Oi=t+1,$i.set(e,t),po.set(t,e)},dh="style[".concat(Dn,"][").concat($d,'="').concat(Oo,'"]'),fh=new RegExp("^".concat(Dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ph=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},hh=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ea),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(fh);if(u){var c=0|parseInt(u[1],10),m=u[2];c!==0&&(ch(m,c),ph(e,m,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},e1=function(e){for(var t=document.querySelectorAll(dh),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Dn)!==Id&&(hh(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function mh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Dn,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Dn,Id),r.setAttribute($d,Oo);var l=mh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},gh=function(){function e(t){this.element=Qd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Xr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),vh=function(){function e(t){this.element=Qd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xh=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),t1=fo,yh={isServer:!fo,useCSSOMInjection:!G2},ho=function(){function e(t,n,r){t===void 0&&(t=Hn),n===void 0&&(n={});var i=this;this.options=pe(pe({},yh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&fo&&t1&&(t1=!1,e1(this)),_a(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(f){var g=function(p){return po.get(p)}(f);if(g===void 0)return"continue";var v=o.names.get(g),y=l.getGroup(f);if(v===void 0||!v.size||y.length===0)return"continue";var w="".concat(Dn,".g").concat(f,'[id="').concat(g,'"]'),_="";v!==void 0&&v.forEach(function(p){p.length>0&&(_+="".concat(p,","))}),u+="".concat(y).concat(w,'{content:"').concat(_,'"}').concat(Ea)},m=0;m<a;m++)c(m);return u}(i)})}return e.registerId=function(t){return yi(t)},e.prototype.rehydrate=function(){!this.server&&fo&&e1(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(pe(pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new xh(i):r?new gh(i):new vh(i)}(this.options),new uh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(yi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(yi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(yi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wh=/&/g,Ch=/^\s*\/\/.*$/gm;function Zd(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Zd(n.children,t)),n})}function kh(e){var t,n,r,i=Hn,o=i.options,l=o===void 0?Hn:o,a=i.plugins,u=a===void 0?Ao:a,c=function(g,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},m=u.slice();m.push(function(g){g.type===To&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(wh,n).replace(r,c))}),l.prefix&&m.push(Z2),m.push(U2);var f=function(g,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace(Ch,""),p=H2(y||v?"".concat(y," ").concat(v," { ").concat(_," }"):_);l.namespace&&(p=Zd(p,l.namespace));var d=[];return co(p,W2(m.concat(Q2(function(h){return d.push(h)})))),d};return f.hash=u.length?u.reduce(function(g,v){return v.name||Xr(15),En(g,v.name)},Vd).toString():"",f}var Sh=new ho,ks=kh(),Kd=Je.createContext({shouldForwardProp:void 0,styleSheet:Sh,stylis:ks});Kd.Consumer;Je.createContext(void 0);function Ss(){return j.useContext(Kd)}var jh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ks);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,_a(this,function(){throw Xr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ks),this.name+t.hash},e}(),Eh=function(e){return e>="A"&&e<="Z"};function n1(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Eh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gd=function(e){return e==null||e===!1||e===""},qd=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Gd(o)&&(Array.isArray(o)&&o.isCss||Bn(o)?r.push("".concat(n1(i),":"),o,";"):Wr(o)?r.push.apply(r,Ur(Ur(["".concat(i," {")],qd(o),!1),["}"],!1)):r.push("".concat(n1(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in K2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function It(e,t,n,r){if(Gd(e))return[];if(La(e))return[".".concat(e.styledComponentId)];if(Bn(e)){if(!Bn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return It(i,t,n,r)}var o;return e instanceof jh?n?(e.inject(n,r),[e.getName(r)]):[e]:Wr(e)?qd(e):Array.isArray(e)?Array.prototype.concat.apply(Ao,e.map(function(l){return It(l,t,n,r)})):[e.toString()]}function Yd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Bn(n)&&!La(n))return!1}return!0}var Lh=bd(Oo),_h=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Yd(t),this.componentId=n,this.baseHash=En(Lh,n),this.baseStyle=r,ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Jt(i,this.staticRulesId);else{var o=ws(It(this.rules,t,n,r)),l=ys(En(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Jt(i,l),this.staticRulesId=l}else{for(var u=En(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var f=this.rules[m];if(typeof f=="string")c+=f;else if(f){var g=ws(It(f,t,n,r));u=En(u,g+m),c+=g}}if(c){var v=ys(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Jt(i,v)}}return i},e}(),Pa=Je.createContext(void 0);Pa.Consumer;var vl={};function Ph(e,t,n){var r=La(e),i=e,o=!gl(e),l=t.attrs,a=l===void 0?Ao:l,u=t.componentId,c=u===void 0?function(x,S){var L=typeof x!="string"?"sc":Gu(x);vl[L]=(vl[L]||0)+1;var C="".concat(L,"-").concat(Dd(Oo+L+vl[L]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):u,m=t.displayName,f=m===void 0?function(x){return gl(x)?"styled.".concat(x):"Styled(".concat(eh(x),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Gu(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;y=function(x,S){return w(x,S)&&_(x,S)}}else y=w}var p=new _h(n,g,r?i.componentStyle:void 0);function d(x,S){return function(L,C,N){var D=L.attrs,F=L.componentStyle,je=L.defaultProps,Bt=L.foldedComponentIds,Ut=L.styledComponentId,Jr=L.target,Vo=Je.useContext(Pa),qn=Ss(),Wt=L.shouldForwardProp||qn.shouldForwardProp,P=Od(C,Vo,je)||Hn,R=function(mt,Ee,nt){for(var Yn,Zt=pe(pe({},Ee),{className:void 0,theme:nt}),bo=0;bo<mt.length;bo+=1){var ei=Bn(Yn=mt[bo])?Yn(Zt):Yn;for(var gt in ei)Zt[gt]=gt==="className"?Jt(Zt[gt],ei[gt]):gt==="style"?pe(pe({},Zt[gt]),ei[gt]):ei[gt]}return Ee.className&&(Zt.className=Jt(Zt.className,Ee.className)),Zt}(D,C,P),M=R.as||Jr,V={};for(var b in R)R[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&R.theme===P||(b==="forwardedAs"?V.as=R.forwardedAs:Wt&&!Wt(b,M)||(V[b]=R[b]));var Qt=function(mt,Ee){var nt=Ss(),Yn=mt.generateAndInjectStyles(Ee,nt.styleSheet,nt.stylis);return Yn}(F,R),be=Jt(Bt,Ut);return Qt&&(be+=" "+Qt),R.className&&(be+=" "+R.className),V[gl(M)&&!Ad.has(M)?"class":"className"]=be,V.ref=N,j.createElement(M,V)}(h,x,S)}d.displayName=f;var h=Je.forwardRef(d);return h.attrs=v,h.componentStyle=p,h.displayName=f,h.shouldForwardProp=y,h.foldedComponentIds=r?Jt(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(S){for(var L=[],C=1;C<arguments.length;C++)L[C-1]=arguments[C];for(var N=0,D=L;N<D.length;N++)Cs(S,D[N],!0);return S}({},i.defaultProps,x):x}}),_a(h,function(){return".".concat(h.styledComponentId)}),o&&Wd(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function r1(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var i1=function(e){return Object.assign(e,{isCss:!0})};function Xd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Bn(e)||Wr(e))return i1(It(r1(Ao,Ur([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?It(r):i1(It(r1(r,t)))}function js(e,t,n){if(n===void 0&&(n=Hn),!t)throw Xr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Xd.apply(void 0,Ur([i],o,!1)))};return r.attrs=function(i){return js(e,t,pe(pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return js(e,t,pe(pe({},n),i))},r}var Jd=function(e){return js(Ph,e)},E=Jd;Ad.forEach(function(e){E[e]=Jd(e)});var zh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Yd(t),ho.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ws(It(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ho.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Nh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xd.apply(void 0,Ur([e],t,!1)),i="sc-global-".concat(Dd(JSON.stringify(r))),o=new zh(r,i),l=function(u){var c=Ss(),m=Je.useContext(Pa),f=Je.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,m,c.stylis),Je.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,m,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,m,c.stylis]),null};function a(u,c,m,f,g){if(o.isStatic)o.renderStyles(u,q2,m,g);else{var v=pe(pe({},c),{theme:Od(c,f,l.defaultProps)});o.renderStyles(u,v,m,g)}}return Je.memo(l)}const Rh=Nh`
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
    }

    html{
        scroll-behavior: smooth;
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
`,Mh=()=>{const e=j.useRef(null),t={backBtn:j.useRef(null),nextBtn:j.useRef(null),cardsList:j.useRef(null),buttonsCardList:j.useRef(null)};function n(o){if(t.cardsList.current&&t.buttonsCardList.current){const l=t.cardsList.current.querySelectorAll("li"),a=t.buttonsCardList.current.querySelectorAll("li");if(o-1>l.length||o<0)return window.alert("Número de card maior/menor que a lista atual");if(l.item(o-1).classList.contains("active"))return;i();for(let u=0;u<l.length;u++)l.item(u).className="",a.item(u).className="";l.item(o-1).className="visible",a.item(o-1).className="active",r()}else window.alert("Erro ao mudar de card. Tente novamente.")}const r=()=>{e.current=setInterval(()=>{if(t.cardsList.current&&t.buttonsCardList.current){const o=t.cardsList.current.querySelectorAll("li"),l=t.buttonsCardList.current.querySelectorAll("li");let a=null;for(let u=0;u<o.length;u++)o.item(u).classList.contains("visible")&&(a=u);if(a==null)return;o.item(a).className="",l.item(a).className="",console.log(a),console.log(o.length),a>=o.length-1?(o.item(0).className="visible",l.item(0).className="active"):(o.item(a+1).className="visible",l.item(a+1).className="active")}},10100)},i=()=>{e.current&&(clearInterval(e.current),e.current=null)};return j.useEffect(()=>(r(),()=>i()),[]),j.useEffect(()=>()=>i(),[e]),s.jsxs(Th,{children:[s.jsxs("ul",{className:"CardsView",ref:t.cardsList,children:[s.jsx("li",{className:"visible",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=960/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-LTR.png",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=420/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Tall-Cropped.png",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/CurationAssets/Solo%20Leveling/SEASON%202/ULTRA-WIDE/SoloLeveling-S2-KV1-UW-Logo.png",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(te,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/G24H1N3MP-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/G24H1N3MP-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G24H1N3MP-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(te,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/GW4HM7WK9-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/GW4HM7WK9-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GW4HM7WK9-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(te,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/G0XHWM1EK-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/G0XHWM1EK-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/G0XHWM1EK-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(te,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})}),s.jsx("li",{className:"",children:s.jsxs("div",{className:"inside",children:[s.jsx(lr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=94,width=960/keyart/GZJH3D719-backdrop_wide",alt:"animephoto"})}),s.jsx(sr,{children:s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=94,width=840,height=1260/keyart/GZJH3D719-backdrop_tall",alt:"animephoto"})}),s.jsxs(ar,{children:[s.jsx("img",{className:"animeLogo",src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=600/keyart/GZJH3D719-title_logo-en-us",alt:"animeLogo"}),s.jsxs("div",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(ur,{children:"Dub | leg"})]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus rem eveniet, ipsum nemo ea beatae vel suscipit asperiores voluptas delectus? Illo delectus sit consectetur a ipsam? Alias, recusandae aut?"}),s.jsxs("div",{children:[s.jsxs(te,{to:"/",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z"})}),"Começar a assistir E1"]}),s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})]})]})]})})]}),s.jsx(Fh,{children:s.jsxs("ul",{ref:t.buttonsCardList,children:[s.jsx("li",{className:"active",children:s.jsx("button",{onClick:()=>n(1),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(2),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(3),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(4),children:s.jsx("span",{})})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>n(5),children:s.jsx("span",{})})})]})})]})},Th=E.div`
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
`,lr=E.div`
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
`,sr=E.div`
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

`,ar=E.div`
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
        background: var(--header-text-color-hover);
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
`,ur=E.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`,Fh=E.div`
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
`,Ih=({keyProp:e,link:t,img:n,animeName:r,DubLeg:i,NSeasons:o,NEpisodes:l,stars:a,starNumbers:u})=>s.jsx($h,{children:s.jsx(te,{to:t,children:s.jsxs(Oh,{children:[s.jsx(Ah,{children:s.jsxs(Vh,{children:[s.jsx("img",{src:n,alt:"Undefined"}),s.jsx("h4",{children:r}),s.jsx(bh,{children:i?"Dub | Leg":"Legendado"})]})}),s.jsxs(Dh,{children:[s.jsx(Hh,{style:{backgroundImage:`url(${n})`,backgroundRepeat:"no-repeat",backgroundSize:"auto"}}),s.jsxs(Bh,{children:[s.jsx("h4",{children:r}),s.jsxs(Uh,{children:[s.jsxs(Wh,{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx("span",{children:a}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"})}),s.jsxs("span",{children:["(",u,")"]})]}),o>1?s.jsxs("p",{children:[o," Temporadas"]}):s.jsxs("p",{children:[o," Temporada"]}),l>1?s.jsxs("p",{children:[l," Episódios"]}):s.jsxs("p",{children:[l," Episódio"]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quod exercitationem eos voluptas repellendus, illum reiciendis aut laborum eaque, architecto ratione dolores minima sed ipsa soluta possimus sapiente, vero autem!"})]})]})]})]})})},e),$h=E.li`
    color: #Fff;
    font-size: 30px;

    a{
        text-decoration: none;
    }
`,Oh=E.div`
    display: flex;
    flex-direction: column;
    position: relative;
`,Ah=E.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 5px;

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
`,Vh=E.div`
    padding: 8px;
`,bh=E.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 13px;
`,Dh=E.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Evitar vazamento do blur da img */
    transition: 0.3s;
    opacity: 0;

    &:hover{
        opacity: 1;
    }
`,Hh=E.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px);
`,Bh=E.div`
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
`,Uh=E.div`
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
`,Wh=E.div`
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
`,o1=({listName:e,CardsNumber:t,keyProp:n,link:r,img:i,animeName:o,DubLeg:l,NSeasons:a,NEpisodes:u,stars:c,starNumbers:m})=>s.jsxs(Qh,{children:[s.jsx("h2",{children:e}),s.jsx("ul",{children:Array.from({length:t},(f,g)=>s.jsx(Ih,{keyProp:g,link:r,img:i,animeName:o,DubLeg:l,NSeasons:a,NEpisodes:u,stars:c,starNumbers:m}))})]},n),Qh=E.div`
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

    @media only screen and (max-width: 590px){
        ul{
            gap: 0px;
            padding: 1vw 3vw 10px 1vw;
        }
    }
`,Zh=({keyProp:e})=>s.jsx(Kh,{children:s.jsx(te,{to:"/watch",children:s.jsxs("div",{className:"BackCardWatching",children:[s.jsxs(Gh,{children:[s.jsx("img",{src:"https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/ee4d1756-b3f8-48d6-9e2c-b9e5d9cba6eb/237ef83d-93f4-42e9-b7c7-fdb19e045eb2?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=2000",alt:"Serie Name photo"}),s.jsx(qh,{children:s.jsx("div",{className:"bar"})})]}),s.jsxs(Yh,{className:"MoreInfos",children:[s.jsx(te,{to:"/about",children:"Doutor House"}),s.jsxs("h3",{children:["T2 E",e+1," - O jogo"]}),s.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas accusamus quod sequi quidem incidunt vitae sunt?"}),s.jsxs("span",{children:["Continuar T2 E",e+1]})]})]})})},e),Kh=E.li`
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
`,Gh=E.div`
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
`,qh=E.div`
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
`,Yh=E.div`
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
        a{
            font-size: 10px;
        }

        h3{
            font-size: 16px;
        }

        span:nth-child(3){
            font-size: 10px;
        }

        span:nth-child(4){
            font-size: 16px;
        }
    }
`,Xh=({listName:e,CardsNumber:t})=>s.jsxs(Jh,{children:[s.jsx("h2",{children:e}),s.jsx("ul",{children:Array.from({length:t},(n,r)=>s.jsx(Zh,{keyProp:r}))})]}),Jh=E.div`
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
`,e4=()=>s.jsxs(t4,{children:[s.jsx(Xh,{listName:"Continuar assistindo",CardsNumber:12}),s.jsx(o1,{listName:"Filmes recém lançados",CardsNumber:12,keyProp:1,link:"/about",img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1024/catalog/crunchyroll/8a6279fc503fe64b451a0e63afc65828.jpg",animeName:"The Quintessential Quintuplets",DubLeg:!0,NSeasons:2,NEpisodes:12,stars:"4.8",starNumbers:"65.4K"}),s.jsx(o1,{listName:"Séries recém lançados",CardsNumber:12,keyProp:1,link:"/about",img:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1024/catalog/crunchyroll/757bae5a21039bac6ebace5de9affcd8.jpg",animeName:"One Piece",DubLeg:!0,NSeasons:2,NEpisodes:12,stars:"4.8",starNumbers:"65.4K"})]}),t4=E.div`
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
`,n4=()=>s.jsxs(r4,{children:[s.jsx(Mh,{}),s.jsx(e4,{})]}),r4=E.section`
`,i4=()=>{const[e,t]=j.useState(window.location.pathname),n=Mo(),[r,i]=j.useState(!1);return j.useEffect(()=>{t(window.location.pathname)},[n]),s.jsx(l4,{children:s.jsxs(s4,{children:[s.jsxs(a4,{children:[s.jsx(d4,{className:r?"active":"",onClick:()=>i(!r),children:s.jsx("span",{})}),s.jsx(te,{to:"/",children:s.jsx("img",{src:"/svg/lkLogo.svg",alt:"Logo do Luka"})})]}),s.jsx(u4,{className:r?"active":"",children:s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(te,{to:"/browse",className:e=="/browse"?"active":"",children:"Início"})}),s.jsx("li",{children:s.jsx(te,{to:"/films",className:e=="/films"?"active":"",children:"Filmes"})}),s.jsx("li",{children:s.jsx(te,{to:"/series",className:e=="/series"?"active":"",children:"Séries"})}),s.jsx("li",{children:s.jsx("a",{href:"https://github.com/Lullka",target:"_blank",className:e=="/portifolio"?"active":"",children:"Portifólio"})})]})}),s.jsxs(c4,{children:[s.jsx(te,{to:"/search",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z",strokeWidth:"2",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round"})})}),s.jsx(o4,{})]})]})})},o4=()=>{const[e,t]=j.useState(!1);return s.jsxs(f4,{children:[s.jsxs(p4,{onClick:()=>t(!e),children:[s.jsx("img",{src:"/imgs/perfilPhoto.jpg",alt:"User Photo"})," "]}),s.jsxs(h4,{className:e?"active":"",children:[s.jsx(te,{to:"/user",children:"Seu perfil"}),s.jsx("button",{children:"Deslogar"})]})]})},l4=E.nav`
    width: 100%;
    position: relative;
    height: var(--Header-height); /* Introduz o tamanho comun do header na parte superior da página */

    @media only screen and (max-width: 580px){
        height: var(--mobile-Header-height);
    }
`,s4=E.nav`
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
`,a4=E.div`
    display: flex;
    align-items: center;
    gap: 25px;
`,u4=E.div`
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
`,c4=E.div`
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
`,d4=E.button`
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
`,f4=E.div`
    position: relative;
`,p4=E.button`
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
`,h4=E.div`
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
`,m4=()=>s.jsxs(g4,{children:[s.jsxs("div",{children:[" ",s.jsx("img",{src:"https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABapFTnXqUmqu4TUKmRoLY3srwHCqKTqQ8hM4fOSDPkLTpnYeN0aKCce265qJ1g0AyezKLizgL59-6Z6Om8JgEFyiSl_qV6a-XdzR.jpg?r=857",alt:"serieImg"})]}),s.jsxs("div",{children:[" ",s.jsx("img",{src:"https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABapFTnXqUmqu4TUKmRoLY3srwHCqKTqQ8hM4fOSDPkLTpnYeN0aKCce265qJ1g0AyezKLizgL59-6Z6Om8JgEFyiSl_qV6a-XdzR.jpg?r=857",alt:"serieImg"})]}),s.jsxs("div",{children:[" ",s.jsx("img",{src:"https://occ-0-404-1740.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUckOeRLLQGMwr0Jk0kSeOLnl6m5eerSm-ibbRR2YRJ46iLe5sjZAEq1-1p82MEKAkaq2Xr-RV1lAlBSZyQizPfWHRcXWbr24j22X62NbHe62kXVf4AC1dFzS4gitSSkpFlWJ65IvLhKTwBSpQnP47NoCcmb7ec7jvpWmavj3SddPgimiFc7.webp?r=32e",alt:"serie title"})]})]}),g4=E.div`
    position: relative;
    width: 100vw;
    height: 55vh;

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
        filter: blur(10px);
    }

    div:nth-child(2){
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
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
`,e0=e=>s.jsxs(v4,{style:{width:e.width,height:e.height},children:[s.jsx("svg",{style:{width:e.SVGSize,height:e.SVGSize},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",children:s.jsx("path",{d:"M52 2H12C6.477 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10zM21 39h-2.553l-5.084-9.131V39H11V25h2.477l5.16 9.348V25H21v14zm14 0H25V25h9.75v2.367h-7.096v3.104h6.6v2.359h-6.6v3.808H35V39zm16.668 0H48.73l-2.729-10.467L43.279 39h-3.004L37 25h2.836l2.068 9.615L44.41 25h3.293l2.404 9.779L52.213 25H55l-3.332 14z"})}),s.jsx("span",{style:{fontSize:e.fontSize},children:"Lançamento na plataforma!"})]}),v4=E.div`
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
`,x4=()=>{const[e,t]=j.useState(!1),n={description:j.useRef(null)};return s.jsx(y4,{children:s.jsxs(w4,{children:[s.jsxs(C4,{children:[s.jsx("h1",{children:"O problema dos 3 corpos"}),s.jsxs(k4,{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(S4,{children:"Dublado | legendado"})]}),s.jsx(e0,{width:"270px",height:"50px",SVGSize:"30px",fontSize:"16px"}),s.jsxs(j4,{children:[s.jsxs("button",{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})}),"Adicionar à fila"]}),s.jsxs("button",{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[s.jsx("title",{}),s.jsx("g",{id:"Complete",children:s.jsx("g",{"data-name":"add",id:"add-2",children:s.jsxs("g",{children:[s.jsx("line",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"12",x2:"12",y1:"19",y2:"5"}),s.jsx("line",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"5",x2:"19",y1:"12",y2:"12"})]})})})]}),"Adicionar à lista"]})]}),s.jsxs(L4,{children:[s.jsx(E4,{ref:n.description,className:e?"showing":"",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur odit doloremque beatae, voluptatum quasi laboriosam? Facere odio rem doloribus, corporis alias nisi, necessitatibus aperiam, labore sequi eos magnam possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel dolore nihil natus accusantium, fugiat ullam quaerat repudiandae pariatur, ducimus aliquam maiores porro iste quidem nam quos debitis. Quos, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam culpa perferendis, quo magni qui eius similique mollitia commodi doloremque possimus harum voluptate sunt laboriosam, sapiente laudantium atque eligendi neque!"}),s.jsx("button",{onClick:()=>{t(!e)},children:e?"Mostrar menos":"Mostrar mais"})]}),s.jsx(_4,{})]}),s.jsxs(P4,{children:[s.jsx("h3",{children:"Assistir episódio 1"}),s.jsx(te,{to:"/watch",children:s.jsxs(z4,{children:[s.jsx("img",{src:"https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240318-o-problema-dos-3-corpos-1-1024x576-1.jpg?resize=555%2C508&ssl=1",alt:"photoFilm"}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"})})]})})]})]})})},y4=E.div`
    padding: 30px 60px 0 60px;
`,w4=E.div`
    display: flex;
`,C4=E.div`
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
`,k4=E.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        fill: var(--Seriado-Age-color-16);
        width: 30px;
        height: 30px;
    }
`,S4=E.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`,j4=E.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;

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
    }

    button:nth-child(2){
        color: #A0A0A0;
        border: 3px solid transparent;
    }

    button:nth-child(2):hover{
        background-color: #141519;
        border: 3px solid #141519;
    }

    button svg{
        fill: var(--Seriado-add-to-list-border-color);
        width: 35px;
        height: 35px;
    }

    button:nth-child(2) svg{
        stroke: #A0A0A0;
    }
`,E4=E.div`
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
`,L4=E.div`
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
`,_4=E.div``,P4=E.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #ccb7ff;
    font-size: 30px;


    @media only screen and (min-width: 890px){
        margin-top: 10px;
        width: 44vw;
    }
`,z4=E.div`
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
`,N4=()=>{const[e,t]=j.useState(!1);return s.jsxs(R4,{children:[s.jsxs(M4,{children:[s.jsxs("button",{onClick:()=>t(!e),className:e?"seasonList desactive":"seasonList",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"arrow-ios-downward",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"})]})})}),s.jsx("h4",{children:"Temporada 1"})]}),s.jsxs(T4,{className:e?"":"desactive",children:[s.jsxs("button",{className:"active",children:[s.jsx("span",{children:"Temporada 1"}),s.jsx("span",{children:"(7 episódios)"})]}),s.jsxs("button",{children:[s.jsx("span",{children:"Temporada 2"}),s.jsx("span",{children:"(10 episódios)"})]}),s.jsxs("button",{children:[s.jsx("span",{children:"Temporada 3"}),s.jsx("span",{children:"(9 episódios)"})]}),s.jsxs("button",{children:[s.jsx("span",{children:"Temporada 4"}),s.jsx("span",{children:"(8 episódios)"})]})]})]}),s.jsx(F4,{children:s.jsx("ul",{children:Array.from({length:12},(n,r)=>s.jsx("li",{children:s.jsx(te,{to:"/",children:s.jsxs(I4,{children:[s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/33e6a8e90a15d3f7d1b619a03d663b31.jpg",alt:`Episode ${r+1}`}),s.jsxs("h4",{children:["Episode ",r+1]}),s.jsx("span",{children:"Leg | Dub"})]})})},r))})})]})},R4=E.div`
    padding: 15px 60px 0 60px;
`,M4=E.div`
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
`,T4=E.div`
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
`,F4=E.div`
    height: 300px;
    user-select: none;
    
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1vw;
    }
    
    ul a{
        text-decoration: none;
    }
`,I4=E.div`
    width: 21vw;
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
`,$4=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return j.useEffect(()=>{e()},[]),s.jsxs(O4,{children:[s.jsx(m4,{}),s.jsx(x4,{}),s.jsx(N4,{})]})},O4=E.div``,A4=()=>{const[e,t]=j.useState(!1),[n,r]=j.useState({like:!1,dislike:!1,likes:416,dislikes:17}),[i,o]=j.useState(!1);function l(u){u=="like"&&(n.like?r(c=>({...c,like:!1})):r(c=>({...c,like:!0,dislike:!1}))),u=="dislike"&&(n.dislike?r(c=>({...c,dislike:!1})):r(c=>({...c,like:!1,dislike:!0})))}function a(){window.alert("Código já escrito, apenas não aplicado até o momento")}return s.jsxs(V4,{children:[s.jsxs(U4,{children:[s.jsxs(W4,{children:[s.jsxs(Q4,{children:[s.jsx(te,{to:"",children:s.jsx("h4",{children:"Serie Name"})}),s.jsxs("span",{children:["4.6",s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","data-t":"star-svg","aria-labelledby":"star-svg","aria-hidden":"false",role:"img",children:[s.jsx("title",{id:"star-svg",children:"Estrela de Avaliação"}),s.jsx("path",{d:"M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"})]}),"(46.8K)"]})]}),s.jsx(Z4,{children:s.jsx("button",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:s.jsx("g",{"data-name":"Layer 2",children:s.jsxs("g",{"data-name":"bookmark",children:[s.jsx("rect",{width:"24",height:"24",opacity:"0"}),s.jsx("path",{d:"M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"})]})})})})})]}),s.jsxs(K4,{children:[s.jsx("h2",{children:"E4 - Um mundo cheio de apostas"}),s.jsxs(G4,{children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M20 1C20 0.447715 20.4477 0 21 0C21.5523 0 22 0.447715 22 1V2H23C23.5523 2 24 2.44772 24 3C24 3.55228 23.5523 4 23 4H22V5C22 5.55228 21.5523 6 21 6C20.4477 6 20 5.55228 20 5V4H19C18.4477 4 18 3.55228 18 3C18 2.44772 18.4477 2 19 2H20V1Z"}),s.jsx("path",{d:"M21.1936 8.07463C21.7016 7.85776 22.297 8.09138 22.4668 8.6169C23.145 10.7148 23.1792 12.9766 22.5523 15.1064C21.8308 17.5572 20.2788 19.6804 18.1626 21.1117C16.0464 22.5429 13.498 23.193 10.9548 22.9502C8.41165 22.7075 6.03225 21.5871 4.22503 19.7814C2.4178 17.9757 1.29545 15.5972 1.05062 13.0542C0.805783 10.5112 1.45373 7.96227 2.88325 5.84491C4.31277 3.72755 6.43471 2.17379 8.88488 1.4503C11.0142 0.821568 13.2759 0.853957 15.3744 1.53036C15.9001 1.69979 16.1342 2.29501 15.9178 2.80311C15.7013 3.31122 15.1136 3.54496 14.5846 3.38623C12.9184 2.88626 11.1353 2.8783 9.4532 3.37498C7.45004 3.96647 5.71522 5.23677 4.5465 6.96784C3.37778 8.69891 2.84804 10.7828 3.04821 12.8619C3.24838 14.9409 4.16596 16.8855 5.64348 18.3618C7.121 19.8381 9.06631 20.754 11.1455 20.9525C13.2247 21.1509 15.3082 20.6195 17.0383 19.4493C18.7684 18.2792 20.0373 16.5433 20.6271 14.5397C21.1224 12.8572 21.113 11.074 20.6116 9.40826C20.4525 8.87941 20.6857 8.29149 21.1936 8.07463Z"}),s.jsx("path",{d:"M7.71054 9.14472L7.29441 9.35279C6.69971 9.65014 5.99999 9.21769 5.99999 8.55279C5.99999 8.214 6.1914 7.9043 6.49441 7.75279L7.78884 7.10557C7.9277 7.03615 8.08081 7 8.23605 7H8.99999C9.55227 7 9.99999 7.44772 9.99999 8V16C9.99999 16.5523 9.55227 17 8.99999 17C8.4477 17 7.99999 16.5523 7.99999 16V9.32361C7.99999 9.17493 7.84352 9.07823 7.71054 9.14472Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 9C12 7.89543 12.8954 7 14 7H17C17.5523 7 18 7.44772 18 8C18 8.55229 17.5523 9 17 9H14.2C14.0895 9 14 9.08954 14 9.2V10.8C14 10.9105 14.0895 11 14.2 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H14C12.8954 17 12 16.1046 12 15V9ZM14 14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14Z"})]}),s.jsx(wi,{children:"Dublado | legendado"})]}),s.jsx(q4,{children:"Lançado em 10 de julho de 2025"}),s.jsxs(Y4,{children:[s.jsxs(X4,{children:[s.jsxs("button",{onClick:()=>l("like"),className:n.like?"active":"",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[s.jsx("defs",{}),s.jsxs("g",{id:"Icons",children:[s.jsx("path",{className:"cls-1",d:"M12.992,20.912l3.5,1.838A2.131,2.131,0,0,0,19.58,20.5l-.667-3.893a2.129,2.129,0,0,1,.613-1.887l2.828-2.757a2.131,2.131,0,0,0-1.181-3.635l-3.909-.568a2.133,2.133,0,0,1-1.6-1.166L13.911,3.056a2.131,2.131,0,0,0-3.822,0L8.341,6.6a2.133,2.133,0,0,1-1.6,1.166l-3.909.568a2.131,2.131,0,0,0-1.181,3.635l2.828,2.757a2.129,2.129,0,0,1,.613,1.887L4.42,20.5A2.131,2.131,0,0,0,7.512,22.75l3.5-1.838A2.135,2.135,0,0,1,12.992,20.912Z"}),s.jsx("path",{className:"cls-2",d:"M16.49,22.75l-3.5-1.84a2.162,2.162,0,0,0-1.98,0l-3.5,1.84A2.132,2.132,0,0,1,4.42,20.5l.55-3.18a2.114,2.114,0,0,0,2.54.43l3.5-1.84a2.162,2.162,0,0,1,1.98,0l3.5,1.84a2.114,2.114,0,0,0,2.54-.43l.55,3.18A2.132,2.132,0,0,1,16.49,22.75Z"})]}),s.jsx("g",{"data-name":"Layer 4",id:"Layer_4",children:s.jsx("path",{className:"cls-3",d:"M23.053,12.683a3.132,3.132,0,0,0-1.737-5.341l-3.909-.568a1.13,1.13,0,0,1-.851-.619L14.808,2.614a3.131,3.131,0,0,0-5.616,0L7.444,6.155a1.13,1.13,0,0,1-.851.619l-3.909.568A3.132,3.132,0,0,0,.947,12.684L3.776,15.44a1.131,1.131,0,0,1,.326,1l-.667,3.892a3.131,3.131,0,0,0,4.542,3.3l3.5-1.838a1.125,1.125,0,0,1,1.052,0h0l3.5,1.838a3.11,3.11,0,0,0,3.3-.239,3.109,3.109,0,0,0,1.245-3.063L19.9,16.441a1.13,1.13,0,0,1,.326-1Zm-4.226,1.325a3.131,3.131,0,0,0-.9,2.772l.667,3.892a1.131,1.131,0,0,1-1.642,1.193l-3.5-1.838a3.134,3.134,0,0,0-2.914,0l-3.5,1.838a1.131,1.131,0,0,1-1.642-1.193l.667-3.891a3.132,3.132,0,0,0-.9-2.773L2.344,11.251a1.132,1.132,0,0,1,.627-1.93L6.88,8.753A3.128,3.128,0,0,0,9.237,7.04L10.985,3.5a1.165,1.165,0,0,1,2.03,0L14.763,7.04A3.128,3.128,0,0,0,17.12,8.753l3.909.568a1.132,1.132,0,0,1,.627,1.93Z"})})]}),s.jsx("span",{children:n.likes})]}),s.jsxs("button",{onClick:()=>l("dislike"),className:n.dislike?"active":"",children:[s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{className:"cls-1",d:"M10.75 6L11.9369 3.15144V3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144V3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931V9C20.9326 9 20.9523 9.04768 20.9244 9.07557L20.8931 9.10687L17.5 12.5",stroke:"#323232","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),s.jsx("path",{className:"cls-2",d:"M9 9H3.13547V9C3.08548 9 3.06044 9.06044 3.09579 9.09579L3.13547 9.13547L7.16787 13.1679C7.68147 13.6815 7.87625 14.4331 7.67671 15.1315L6.06393 20.7762L6.0564 20.8026C6.03711 20.8701 6.1124 20.9251 6.17083 20.8861V20.8861L10.8906 17.7396C11.5624 17.2917 12.4376 17.2917 13.1094 17.7396L17.8186 20.879L17.837 20.8913C17.8928 20.9285 17.9646 20.8761 17.9462 20.8117V20.8117L16.8571 17",stroke:"#323232","stroke-width":"2","stroke-linejoin":"round"}),s.jsx("path",{className:"cls-3",d:"M3 3L21 21",stroke:"#323232","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),s.jsx("span",{children:n.dislikes})]})]}),s.jsx(J4,{onClick:()=>o(!0),children:s.jsx("button",{children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_15_72)",children:[s.jsx("rect",{width:"24",height:"24",fill:"none"}),s.jsx("circle",{className:"cls-1",cx:"7",cy:"12",r:"2",stroke:"#fff",strokeLinejoin:"round"}),s.jsx("circle",{className:"cls-2",cx:"17",cy:"6",r:"2",stroke:"#fff",strokeLinejoin:"round"}),s.jsx("path",{className:"cls-3",d:"M15 7L8.5 11",stroke:"#fff"}),s.jsx("circle",{className:"cls-4",cx:"17",cy:"18",r:"2",stroke:"#fff",strokeLinejoin:"round"}),s.jsx("path",{className:"cls-5",d:"M8.5 13.5L15 17",stroke:"#fff"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_15_72",children:s.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})})})]})]})]}),s.jsxs(e5,{children:[e?s.jsx(s.Fragment,{children:s.jsxs(r5,{children:[s.jsx("span",{children:"Mais episódios"}),Array.from({length:12},(u,c)=>s.jsx("li",{children:s.jsx(te,{to:"/",children:s.jsxs(xl,{children:[s.jsxs(yl,{children:[s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/d3ce283e1b948937c240d94ac1f5d8c9.jpg",alt:`Imagem do episódio ${c+1} da série Y`}),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","data-t":"rating-a14-svg","aria-labelledby":"rating-a14-svg","aria-hidden":"true",role:"img",children:[s.jsx("title",{id:"rating-a14-svg",children:"Não recomendado para menores de 14 anos"}),s.jsx("path",{d:"m62.37 4.31-.019-.035c-.363-1.252-1.451-2.322-2.74-2.685h-.035c-.345-.109-.762-.127-1.143-.127H5.604c-.326 0-.708.018-1.016.09h-.036c-1.67.345-3.012 1.96-3.084 3.647v22.186c0 10.195.018 20.734 0 31.11v.073c-.055.962.344 1.941 1.07 2.721.726.78 1.687 1.234 2.649 1.252h53.246c.29 0 .67-.018 1.016-.09 1.778-.418 3.174-2.177 3.084-3.919V6.977c-.018-.254 0-.507 0-.743.018-.69.036-1.36-.146-1.887l-.018-.036z",fill:"#F58220"}),s.jsx("path",{d:"M5.61 0c.327 0 .635.018.98.036h50.906l.943-.018c.544 0 1.07.036 1.597.2 1.76.49 3.247 1.923 3.737 3.682.326.98.2 2.05.217 3.084v51.501c.11 2.485-1.814 4.826-4.208 5.388-.436.109-.89.127-1.343.127-.381 0-.78-.018-1.161-.018H5.175c-2.83-.055-5.297-2.667-5.17-5.497.018-17.76 0-35.537 0-53.315C.077 2.794 1.909.617 4.232.127 4.685.018 5.157 0 5.61 0zM58.44 1.451H5.611c-.327 0-.708.018-1.016.09h-.037c-1.669.346-3.011 1.96-3.084 3.647v26.024c.004 8.99.016 18.194 0 27.273v.073c-.054.961.345 1.94 1.07 2.72.726.781 1.688 1.234 2.65 1.253h53.245c.29 0 .671-.019 1.016-.091 1.778-.417 3.175-2.177 3.084-3.919V6.966c-.018-.254 0-.508 0-.744.018-.69.036-1.36-.145-1.886l-.018-.037-.018-.036c-.363-1.252-1.452-2.322-2.74-2.685h-.036c-.345-.109-.762-.127-1.143-.127z",fill:"#FFF"}),s.jsx("path",{d:"m49.348 20.424-4.136 15.62h4.172l.363-15.638h-.399v.018zm-2.867-4.698H55.3v20.317h3.882v4.807h-3.882v7.057h-6.114V40.85h-8.726v-5.496l6.022-19.628zM30.862 15.726h5.46v32.181H30.1V23.98a10.249 10.249 0 0 1-1.76 1.45c-.635.4-1.324.745-2.068 1.017V20.66c1.106-.635 2.05-1.36 2.83-2.195a8.954 8.954 0 0 0 1.76-2.74M15.677 16.052H9.364l-4.427 32.09h8.853l.49-5.858h2.794l.49 5.859h8.853l-4.408-32.09h-6.332zm0 7.402 1.488 13.17h-2.976l1.488-13.17z",fill:"#FFF"})]}),s.jsx("span",{children:"24m"})]}),s.jsxs(wl,{children:[s.jsxs("h5",{children:["Episódio ",c+1]}),s.jsx(wi,{children:"Dublado | legendado"})]})]})})},c))]})}):s.jsxs(s.Fragment,{children:[s.jsxs(t5,{children:[s.jsx("span",{children:"Próximo episódio"}),s.jsx(te,{to:"",children:s.jsxs(xl,{children:[s.jsxs(yl,{children:[s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/d3ce283e1b948937c240d94ac1f5d8c9.jpg",alt:"Imagem do episódio X da série Y"}),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","data-t":"rating-a14-svg","aria-labelledby":"rating-a14-svg","aria-hidden":"true",role:"img",children:[s.jsx("title",{id:"rating-a14-svg",children:"Não recomendado para menores de 14 anos"}),s.jsx("path",{d:"m62.37 4.31-.019-.035c-.363-1.252-1.451-2.322-2.74-2.685h-.035c-.345-.109-.762-.127-1.143-.127H5.604c-.326 0-.708.018-1.016.09h-.036c-1.67.345-3.012 1.96-3.084 3.647v22.186c0 10.195.018 20.734 0 31.11v.073c-.055.962.344 1.941 1.07 2.721.726.78 1.687 1.234 2.649 1.252h53.246c.29 0 .67-.018 1.016-.09 1.778-.418 3.174-2.177 3.084-3.919V6.977c-.018-.254 0-.507 0-.743.018-.69.036-1.36-.146-1.887l-.018-.036z",fill:"#F58220"}),s.jsx("path",{d:"M5.61 0c.327 0 .635.018.98.036h50.906l.943-.018c.544 0 1.07.036 1.597.2 1.76.49 3.247 1.923 3.737 3.682.326.98.2 2.05.217 3.084v51.501c.11 2.485-1.814 4.826-4.208 5.388-.436.109-.89.127-1.343.127-.381 0-.78-.018-1.161-.018H5.175c-2.83-.055-5.297-2.667-5.17-5.497.018-17.76 0-35.537 0-53.315C.077 2.794 1.909.617 4.232.127 4.685.018 5.157 0 5.61 0zM58.44 1.451H5.611c-.327 0-.708.018-1.016.09h-.037c-1.669.346-3.011 1.96-3.084 3.647v26.024c.004 8.99.016 18.194 0 27.273v.073c-.054.961.345 1.94 1.07 2.72.726.781 1.688 1.234 2.65 1.253h53.245c.29 0 .671-.019 1.016-.091 1.778-.417 3.175-2.177 3.084-3.919V6.966c-.018-.254 0-.508 0-.744.018-.69.036-1.36-.145-1.886l-.018-.037-.018-.036c-.363-1.252-1.452-2.322-2.74-2.685h-.036c-.345-.109-.762-.127-1.143-.127z",fill:"#FFF"}),s.jsx("path",{d:"m49.348 20.424-4.136 15.62h4.172l.363-15.638h-.399v.018zm-2.867-4.698H55.3v20.317h3.882v4.807h-3.882v7.057h-6.114V40.85h-8.726v-5.496l6.022-19.628zM30.862 15.726h5.46v32.181H30.1V23.98a10.249 10.249 0 0 1-1.76 1.45c-.635.4-1.324.745-2.068 1.017V20.66c1.106-.635 2.05-1.36 2.83-2.195a8.954 8.954 0 0 0 1.76-2.74M15.677 16.052H9.364l-4.427 32.09h8.853l.49-5.858h2.794l.49 5.859h8.853l-4.408-32.09h-6.332zm0 7.402 1.488 13.17h-2.976l1.488-13.17z",fill:"#FFF"})]}),s.jsx("span",{children:"Assistido"})]}),s.jsxs(wl,{children:[s.jsx("h5",{children:"E3 - O voto"}),s.jsx(wi,{children:"Dublado | legendado"})]})]})})]}),s.jsxs(n5,{children:[s.jsx("span",{children:"Episódio anterior"}),s.jsx(te,{to:"",children:s.jsxs(xl,{children:[s.jsxs(yl,{children:[s.jsx("img",{src:"https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=320,height=180/catalog/crunchyroll/d3ce283e1b948937c240d94ac1f5d8c9.jpg",alt:"Imagem do episódio X da série Y"}),s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","data-t":"rating-a14-svg","aria-labelledby":"rating-a14-svg","aria-hidden":"true",role:"img",children:[s.jsx("title",{id:"rating-a14-svg",children:"Não recomendado para menores de 14 anos"}),s.jsx("path",{d:"m62.37 4.31-.019-.035c-.363-1.252-1.451-2.322-2.74-2.685h-.035c-.345-.109-.762-.127-1.143-.127H5.604c-.326 0-.708.018-1.016.09h-.036c-1.67.345-3.012 1.96-3.084 3.647v22.186c0 10.195.018 20.734 0 31.11v.073c-.055.962.344 1.941 1.07 2.721.726.78 1.687 1.234 2.649 1.252h53.246c.29 0 .67-.018 1.016-.09 1.778-.418 3.174-2.177 3.084-3.919V6.977c-.018-.254 0-.507 0-.743.018-.69.036-1.36-.146-1.887l-.018-.036z",fill:"#F58220"}),s.jsx("path",{d:"M5.61 0c.327 0 .635.018.98.036h50.906l.943-.018c.544 0 1.07.036 1.597.2 1.76.49 3.247 1.923 3.737 3.682.326.98.2 2.05.217 3.084v51.501c.11 2.485-1.814 4.826-4.208 5.388-.436.109-.89.127-1.343.127-.381 0-.78-.018-1.161-.018H5.175c-2.83-.055-5.297-2.667-5.17-5.497.018-17.76 0-35.537 0-53.315C.077 2.794 1.909.617 4.232.127 4.685.018 5.157 0 5.61 0zM58.44 1.451H5.611c-.327 0-.708.018-1.016.09h-.037c-1.669.346-3.011 1.96-3.084 3.647v26.024c.004 8.99.016 18.194 0 27.273v.073c-.054.961.345 1.94 1.07 2.72.726.781 1.688 1.234 2.65 1.253h53.245c.29 0 .671-.019 1.016-.091 1.778-.417 3.175-2.177 3.084-3.919V6.966c-.018-.254 0-.508 0-.744.018-.69.036-1.36-.145-1.886l-.018-.037-.018-.036c-.363-1.252-1.452-2.322-2.74-2.685h-.036c-.345-.109-.762-.127-1.143-.127z",fill:"#FFF"}),s.jsx("path",{d:"m49.348 20.424-4.136 15.62h4.172l.363-15.638h-.399v.018zm-2.867-4.698H55.3v20.317h3.882v4.807h-3.882v7.057h-6.114V40.85h-8.726v-5.496l6.022-19.628zM30.862 15.726h5.46v32.181H30.1V23.98a10.249 10.249 0 0 1-1.76 1.45c-.635.4-1.324.745-2.068 1.017V20.66c1.106-.635 2.05-1.36 2.83-2.195a8.954 8.954 0 0 0 1.76-2.74M15.677 16.052H9.364l-4.427 32.09h8.853l.49-5.858h2.794l.49 5.859h8.853l-4.408-32.09h-6.332zm0 7.402 1.488 13.17h-2.976l1.488-13.17z",fill:"#FFF"})]}),s.jsx("span",{children:"24m"})]}),s.jsxs(wl,{children:[s.jsx("h5",{children:"E5 - A prévia do futuro"}),s.jsx(wi,{children:"Dublado | legendado"})]})]})})]})]}),s.jsxs("button",{onClick:()=>{t(!e)},children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 1024 1024",children:s.jsx("path",{d:"M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"})}),e?"Voltar":"Mostrar episódios"]})]}),s.jsx(b4,{className:i?"active":"",children:s.jsxs(D4,{children:[s.jsx(B4,{onClick:()=>o(!1)}),s.jsx("h1",{children:"Compartilhar"}),s.jsxs(H4,{children:[s.jsx("span",{children:"http://192.168.118.242:5173/watch"}),s.jsx("button",{onClick:()=>a(),children:"Copiar"})]})]})})]})},V4=E.div`
    width: 100%;
    display: flex;
    padding: 10px 50px;
    justify-content: space-between;
`,b4=E.div`
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
`,D4=E.div`
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
`,H4=E.div`
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
`,B4=E.button`
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
`,U4=E.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    padding: 0 20px 0 0;
`,W4=E.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Q4=E.div`
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

    span:hover{
        text-decoration: underline;
    }
`,Z4=E.div`
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
`,K4=E.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    
    h2{
        color: #FFF;
    }
`,G4=E.div`
    display: flex;
    align-items: center;
    gap: 5px;

    svg{
        fill: var(--Seriado-Age-color-16);
        width: 27px;
        height: 27px;
    }
`,wi=E.div`
    color: var(--submain-color);
    user-select: none;
    font-size: 16px;
`,q4=E.span`
    color: #FFF; 
`,Y4=E.div`
    display: flex;
    justify-content: space-between;
`,X4=E.div`
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
`,J4=E.div`
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
`,e5=E.div`
    padding: 5px 0 0 0;
    min-width: 389px;/* evitar mudanças de posição quando o usuário interagir com mostrar mais episódios */

    span{
        font-size: 20px;
        color: #FFF;
        font-weight: 600;
    }

    button{
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

    button svg{
        width: 30px;
        height: 30px;
        fill: var(--description-font-color);
        transition: var(--default-hover-duraction);
    }

    button:hover{
        color: #f19b5f;
        border: 2px solid #f19b5f;
    }
    button:hover svg{
        fill: #f19b5f;
    }
`,t5=E.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    a{
        text-decoration: none;
    }
`,n5=E.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;

    a{
        text-decoration: none;
    }
`,xl=E.div`
    width: 30vw;
    display: flex;
    transition: var(--default-hover-duraction);

    &:hover{
        opacity: 0.7
    }
`,yl=E.div`
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
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 15px;
        font-weight: 400;
        padding: 2px 4px;
        background-color: rgba(0, 0, 0, 0.5)
    }
`,wl=E.div`
    padding: 10px 5px 2px 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    h5{
        color: #Fff;
        font-size: 16px;
    }
`,r5=E.ul`
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
`,i5=()=>{const[e,t]=j.useState(!0),[n,r]=j.useState(!0),i={player:j.useRef(null)};function o(){i.player.current&&(i.player.current.paused?(t(!0),i.player.current.play()):(t(!1),i.player.current.pause()))}function l(){i.player.current&&(i.player.current.currentTime-=10)}function a(){i.player.current&&(i.player.current.currentTime+=10)}const u=Mo();return j.useEffect(()=>{alert("O player personalizado ainda está em faze de estilização e alguns estudos sobre como melhorar seu desempenho. Enquanto isso, apenas o player padrão está disponível")},[]),s.jsx(o5,{children:s.jsxs(l5,{children:[s.jsxs(a5,{children:[s.jsx(u5,{children:s.jsx("video",{controls:!0,muted:!0,onWaiting:()=>r(!0),onPlaying:()=>r(!1),ref:i.player,src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",autoPlay:!0})}),s.jsxs(c5,{children:[s.jsxs(d5,{children:[s.jsx("button",{onClick:()=>u(-1),children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",children:[s.jsx("path",{d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"}),s.jsx("path",{d:"m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"})]})}),s.jsx(e0,{width:"270px",height:"50px",SVGSize:"30px",fontSize:"16px"})]}),s.jsxs(f5,{children:[s.jsx("button",{onClick:()=>l(),children:s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",strokeWidth:"3",stroke:"#fff",fill:"none",children:[s.jsx("polyline",{points:"9.57 15.41 12.17 24.05 20.81 21.44",strokeLinecap:"round"}),s.jsx("path",{fill:"none",d:"M26.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78",strokeLinecap:"round"}),s.jsx("rect",{fill:"none",x:"32.19",y:"22.52",width:"11.41",height:"18.89",rx:"5.7"}),s.jsx("path",{fill:"none",d:"M12.14,23.94a21.91,21.91,0,1,1-.91,13.25",strokeLinecap:"round"})]})}),s.jsx("button",{className:n?"loading":"",onClick:()=>o(),children:n?s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M16 8.00023L18.3642 5.63609M5.63631 18.364L8.00026 16M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569M8.00023 8.00023L5.63609 5.63609M18.364 18.364L16 16",stroke:"#fff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}):e?s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z"})}):s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"})})}),s.jsx("button",{onClick:()=>a(),children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",children:s.jsx("path",{d:"M24 4C12.972292 4 4 12.972292 4 24C4 35.027708 12.972292 44 24 44C35.027708 44 44 35.027708 44 24C44 23.829342 43.998541 23.658332 43.994141 23.488281 A 1.5004834 1.5004834 0 0 0 40.994141 23.564453C40.997849 23.708404 41 23.854658 41 24C41 33.406292 33.406292 41 24 41C14.593708 41 7 33.406292 7 24C7 14.593708 14.593708 7 24 7C29.380908 7 34.158525 9.4960454 37.271484 13.384766L35.964844 13.154297 A 1.5003693 1.5003693 0 0 0 35.443359 16.109375L40.367188 16.976562 A 1.50015 1.50015 0 0 0 42.105469 15.759766L42.972656 10.835938 A 1.50015 1.50015 0 0 0 41.439453 9.0566406 A 1.50015 1.50015 0 0 0 40.019531 10.316406L39.771484 11.720703C36.109299 7.0253275 30.404348 4 24 4 z M 27.5 17C25.019 17 23 19.019 23 21.5L23 26.5C23 28.981 25.019 31 27.5 31C29.981 31 32 28.981 32 26.5L32 21.5C32 19.019 29.981 17 27.5 17 z M 19.595703 17.001953C19.49775 17.010188 19.399938 17.0305 19.304688 17.0625L16.304688 18.0625C15.649688 18.2815 15.295672 18.989531 15.513672 19.644531C15.732672 20.298531 16.439703 20.651547 17.095703 20.435547L18.449219 19.984375L18.449219 29.75C18.449219 30.44 19.009219 31 19.699219 31C20.390219 31 20.949219 30.440047 20.949219 29.748047L20.949219 18.248047C20.949219 17.846047 20.757641 17.469375 20.431641 17.234375C20.187141 17.058125 19.889563 16.97725 19.595703 17.001953 z M 27.5 19.5C28.603 19.5 29.5 20.397 29.5 21.5L29.5 26.5C29.5 27.603 28.603 28.5 27.5 28.5C26.397 28.5 25.5 27.603 25.5 26.5L25.5 21.5C25.5 20.398 26.397 19.5 27.5 19.5 z"})})})]}),s.jsx(p5,{})]})]}),s.jsx(s5,{children:s.jsx("img",{src:"https://i0.wp.com/ovicio.com.br/wp-content/uploads/2024/03/20240318-o-problema-dos-3-corpos-1-1024x576-1.jpg?resize=555%2C508&ssl=1",alt:"poster"})})]})})},o5=E.div`
    width: 100%;
    height: 55.25vw;
`,l5=E.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: #000;
`,s5=E.div`
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
`,a5=E.div`
    width: 100%;
    height: 100%;
    position: relative;
`,u5=E.div`
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
`,c5=E.div`
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
`,d5=E.div`
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
`,f5=E.div`
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
`,p5=E.div``,h5=()=>s.jsxs(s.Fragment,{children:[s.jsx(i5,{}),s.jsx(A4,{})]}),m5=()=>s.jsx(g5,{children:s.jsx(v5,{children:s.jsx("input",{placeholder:"Procurar...",type:"search",name:"search",id:"search",required:!0})})}),g5=E.section``,v5=E.div`
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
`,x5=()=>s.jsx(y5,{children:"Ainda em desenvolvimento"}),y5=E.section`
    color: #Fff;
    font-size: 30px;
`,w5=()=>s.jsx(C5,{children:"Ainda em desenvolvimento"}),C5=E.section`
    color: #Fff;
    font-size: 30px;
`,k5=()=>s.jsx(S5,{children:"Ainda em desenvolvimento"}),S5=E.section`
    color: #Fff;
    font-size: 30px;
`;function j5(){return s.jsxs(L2,{children:[s.jsx(Rh,{}),s.jsx(i4,{}),s.jsxs(y2,{children:[s.jsx(rt,{path:"/browse",element:s.jsx(n4,{})}),s.jsx(rt,{path:"/about",element:s.jsx($4,{})}),s.jsx(rt,{path:"/watch",element:s.jsx(h5,{})}),s.jsx(rt,{path:"/search",element:s.jsx(m5,{})}),s.jsx(rt,{path:"/films",element:s.jsx(x5,{})}),s.jsx(rt,{path:"/series",element:s.jsx(w5,{})}),s.jsx(rt,{path:"/user",element:s.jsx(k5,{})}),s.jsx(rt,{path:"*",element:s.jsx(v2,{to:"/browse"})})]})]})}xd(document.getElementById("root")).render(s.jsx(j.StrictMode,{children:s.jsx(j5,{})}));
