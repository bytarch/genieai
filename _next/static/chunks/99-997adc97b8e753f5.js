(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{76046:(e,t,n)=>{"use strict";var r=n(66658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},68571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return p}});let r=n(60306),a=n(29955),l=n(95155),s=r._(n(47650)),o=a._(n(12115)),i=n(81147),c=n(22815),u=n(68571),d=new Map,f=new Set,m=e=>{if(s.default.preinit){e.forEach(e=>{s.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:s="",strategy:o="afterInteractive",onError:i,stylesheets:u}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,i);return}let y=()=>{a&&a(),f.add(h)},p=document.createElement("script"),b=new Promise((e,t)=>{p.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),p.addEventListener("error",function(e){t(e)})}).catch(function(e){i&&i(e)});l?(p.innerHTML=l.__html||"",y()):s?(p.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",y()):t&&(p.src=t,d.set(t,b)),(0,c.setAttributesFromProps)(p,e),"worker"===o&&p.setAttribute("type","text/partytown"),p.setAttribute("data-nscript",o),u&&m(u),document.body.appendChild(p)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function p(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:m,...y}=e,{updateScripts:p,scripts:b,getIsSsr:g,appDir:_,nonce:v}=(0,o.useContext)(i.HeadManagerContext),w=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;w.current||(a&&e&&f.has(e)&&a(),w.current=!0)},[a,t,n]);let S=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!S.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),S.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(p?(b[c]=(b[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...y}]),p(b)):g&&g()?f.add(t||n):g&&!g()&&h(e)),_){if(m&&m.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(s.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin}),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===c&&n&&s.default.preload(n,y.integrity?{as:"script",integrity:y.integrity,nonce:v,crossOrigin:y.crossOrigin}:{as:"script",nonce:v,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},22815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,s]of Object.entries(t)){if(!t.hasOwnProperty(l)||r.includes(l)||void 0===s)continue;let o=n[l]||l.toLowerCase();"SCRIPT"===e.tagName&&a(o)?e[o]=!!s:e.setAttribute(o,String(s)),(!1===s||"SCRIPT"===e.tagName&&a(o)&&(!s||"false"===s))&&(e.setAttribute(o,""),e.removeAttribute(o))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},65688:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},39432:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},67113:(e,t,n)=>{"use strict";n.d(t,{D:()=>u,N:()=>d});var r=n(12115),a=(e,t,n,r,a,l,s,o)=>{let i=document.documentElement,c=["light","dark"];function u(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&l?a.map(e=>l[e]||e):a;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),o&&c.includes(t)&&(i.style.colorScheme=t)}if(r)u(r);else try{let e=localStorage.getItem(t)||n,r=s&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;u(r)}catch(e){}},l=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},u=()=>{var e;return null!=(e=r.useContext(i))?e:c},d=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,{...e}),f=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:u=f,defaultTheme:d=a?"system":"light",attribute:m="data-theme",value:g,children:_,nonce:v,scriptProps:w}=e,[S,C]=r.useState(()=>y(c,d)),[E,k]=r.useState(()=>y(c)),O=g?Object.values(g):u,I=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=b());let r=g?g[t]:t,s=n?p(v):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...O),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(m)?m.forEach(c):c(m),o){let e=l.includes(d)?d:null,n=l.includes(t)?t:e;i.style.colorScheme=n}null==s||s()},[v]),M=r.useCallback(e=>{let t="function"==typeof e?e(S):e;C(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),P=r.useCallback(e=>{k(b(e)),"system"===S&&a&&!t&&I("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?C(e.newValue):M(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),r.useEffect(()=>{I(null!=t?t:S)},[t,S]);let T=r.useMemo(()=>({theme:S,setTheme:M,forcedTheme:t,resolvedTheme:"system"===S?E:S,themes:a?[...u,"system"]:u,systemTheme:a?E:void 0}),[S,M,t,E,a,u]);return r.createElement(i.Provider,{value:T},r.createElement(h,{forcedTheme:t,storageKey:c,attribute:m,enableSystem:a,enableColorScheme:o,defaultTheme:d,value:g,themes:u,nonce:v,scriptProps:w}),_)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:s,enableColorScheme:o,defaultTheme:i,value:c,themes:u,nonce:d,scriptProps:f}=e,m=JSON.stringify([l,n,i,t,u,c,s,o]).slice(1,-1);return r.createElement("script",{...f,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(m,")")}})}),y=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}}]);