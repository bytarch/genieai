"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5745],{"(app-pages-browser)/./node_modules/aria-hidden/dist/es2015/index.js":(e,t,n)=>{n.d(t,{Eq:()=>l});var r=new WeakMap,o=new WeakMap,a={},i=0,c=function(e){return e&&(e.host||c(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=c(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],s=[],f=new Set,p=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var v=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))v(e);else try{var t=e.getAttribute(u),a=null!==t&&"false"!==t,i=(r.get(e)||0)+1,c=(d.get(e)||0)+1;r.set(e,i),d.set(e,c),s.push(e),1===i&&a&&o.set(e,!0),1===c&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return v(t),f.clear(),i++,function(){s.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),u(o,a,n,"aria-hidden")):function(){return null}}},"(app-pages-browser)/./node_modules/react-remove-scroll/dist/es2015/Combination.js":(e,t,n)=>{n.d(t,{A:()=>H});var r,o,a=n("(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs"),i=n("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),c="right-scroll-bar-position",u="width-before-scroll-bar";function l(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var d="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,s=new WeakMap;function f(e){return e}var p=function(e){void 0===e&&(e={});var t,n,r,o=(void 0===t&&(t=f),n=[],r=!1,{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter(function(e){return e!==o})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return o.options=(0,a.Cl)({async:!0,ssr:!1},e),o}(),m=function(){},v=i.forwardRef(function(e,t){var n,r,o,c,u=i.useRef(null),f=i.useState({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:m}),v=f[0],h=f[1],g=e.forwardProps,b=e.children,y=e.className,E=e.removeScrollBar,w=e.enabled,C=e.shards,S=e.sideCar,x=e.noIsolation,k=e.inert,A=e.allowPinchZoom,M=e.as,N=e.gapMode,L=(0,a.Tt)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=(n=[u,t],r=function(e){return n.forEach(function(t){return l(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,c=o.facade,d(function(){var e=s.get(c);if(e){var t=new Set(e),r=new Set(n),o=c.current;t.forEach(function(e){r.has(e)||l(e,null)}),r.forEach(function(e){t.has(e)||l(e,o)})}s.set(c,n)},[n]),c),R=(0,a.Cl)((0,a.Cl)({},L),v);return i.createElement(i.Fragment,null,w&&i.createElement(S,{sideCar:p,removeScrollBar:E,shards:C,noIsolation:x,inert:k,setCallbacks:h,allowPinchZoom:!!A,lockRef:u,gapMode:N}),g?i.cloneElement(i.Children.only(b),(0,a.Cl)((0,a.Cl)({},R),{ref:T})):i.createElement(void 0===M?"div":M,(0,a.Cl)({},R,{className:y,ref:T}),b))});v.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},v.classNames={fullWidth:u,zeroRight:c};var h=function(e){var t=e.sideCar,n=(0,a.Tt)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,(0,a.Cl)({},n))};h.isSideCarExport=!0;var g=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},b=function(){var e=g();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},y=function(){var e=b();return function(t){return e(t.styles,t.dynamic),null}},E={left:0,top:0,right:0,gap:0},w=function(e){return parseInt(e||"",10)||0},C=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[w(n),w(r),w(o)]},S=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return E;var t=C(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},x=y(),k="data-scroll-locked",A=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(k,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(c," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(u," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(c," .").concat(c," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(u," .").concat(u," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(k,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},M=function(){var e=parseInt(document.body.getAttribute(k)||"0",10);return isFinite(e)?e:0},N=function(){i.useEffect(function(){return document.body.setAttribute(k,(M()+1).toString()),function(){var e=M()-1;e<=0?document.body.removeAttribute(k):document.body.setAttribute(k,e.toString())}},[])},L=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;N();var a=i.useMemo(function(){return S(o)},[o]);return i.createElement(x,{styles:A(a,!t,o,n?"":"!important")})},T=!1;if("undefined"!=typeof window)try{var R=Object.defineProperty({},"passive",{get:function(){return T=!0,!0}});window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch(e){T=!1}var _=!!T&&{passive:!1},j=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},I=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),P(e,r)){var o=W(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},P=function(e,t){return"v"===e?j(t,"overflowY"):j(t,"overflowX")},W=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},F=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,u=n.target,l=t.contains(u),d=!1,s=c>0,f=0,p=0;do{var m=W(e,u),v=m[0],h=m[1]-m[2]-i*v;(v||h)&&P(e,u)&&(f+=h,p+=v),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&1>Math.abs(f)||!o&&c>f)?d=!0:!s&&(o&&1>Math.abs(p)||!o&&-c>p)&&(d=!0),d},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},D=function(e){return[e.deltaX,e.deltaY]},K=function(e){return e&&"current"in e?e.current:e},X=0,O=[];let Y=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(X++)[0],c=i.useState(y)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,a.fX)([e.lockRef.current],(e.shards||[]).map(K),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=B(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],d=e.target,s=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=I(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=I(s,d)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var p=r.current||o;return F(p,t,e,"h"===p?c:l,!0)},[]),d=i.useCallback(function(e){if(O.length&&O[O.length-1]===c){var n="deltaY"in e?D(e):B(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(K).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),f=i.useCallback(function(e){n.current=B(e),r.current=void 0},[]),p=i.useCallback(function(t){s(t.type,D(t),t.target,l(t,e.lockRef.current))},[]),m=i.useCallback(function(t){s(t.type,B(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return O.push(c),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",d,_),document.addEventListener("touchmove",d,_),document.addEventListener("touchstart",f,_),function(){O=O.filter(function(e){return e!==c}),document.removeEventListener("wheel",d,_),document.removeEventListener("touchmove",d,_),document.removeEventListener("touchstart",f,_)}},[]);var v=e.removeScrollBar,h=e.inert;return i.createElement(i.Fragment,null,h?i.createElement(c,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?i.createElement(L,{gapMode:e.gapMode}):null)},p.useMedium(r),h);var q=i.forwardRef(function(e,t){return i.createElement(v,(0,a.Cl)({},e,{ref:t,sideCar:Y}))});q.classNames=v.classNames;let H=q},"(app-pages-browser)/./node_modules/@radix-ui/react-focus-guards/dist/index.mjs":(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},"(app-pages-browser)/./node_modules/@radix-ui/react-focus-scope/dist/index.mjs":(e,t,n)=>{n.d(t,{n:()=>s});var r=n("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),o=n("(app-pages-browser)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),a=n("(app-pages-browser)/./node_modules/@radix-ui/react-primitive/dist/index.mjs"),i=n("(app-pages-browser)/./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),c=n("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),u="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},s=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:s=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...b}=e,[y,E]=r.useState(null),w=(0,i.c)(h),C=(0,i.c)(g),S=r.useRef(null),x=(0,o.s)(t,e=>E(e)),k=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(s){let e=function(e){if(k.paused||!y)return;let t=e.target;y.contains(t)?S.current=t:m(S.current,{select:!0})},t=function(e){if(k.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||m(S.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(y)});return y&&n.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[s,y,k.paused]),r.useEffect(()=>{if(y){v.add(k);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(u,d);y.addEventListener(u,w),y.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(f(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(y))}return()=>{y.removeEventListener(u,w),setTimeout(()=>{let t=new CustomEvent(l,d);y.addEventListener(l,C),y.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),y.removeEventListener(l,C),v.remove(k)},0)}}},[y,w,C,k]);let A=r.useCallback(e=>{if(!n&&!s||k.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[p(t,e),p(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(o,{select:!0})):r===t&&e.preventDefault()}},[n,s,k.paused]);return(0,c.jsx)(a.sG.div,{tabIndex:-1,...b,ref:x,onKeyDown:A})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}s.displayName="FocusScope";var v=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=h(e,t)).unshift(t)},remove(t){var n;null===(n=(e=h(e,t))[0])||void 0===n||n.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}}}]);