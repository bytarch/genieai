(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6237],{"(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fbytarch%2FDocuments%2Fprojects%2Fgenie%2Fapp%2Fc%2Frag%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!":(e,t,n)=>{Promise.resolve().then(n.bind(n,"(app-pages-browser)/./app/c/rag/page.tsx"))},"(app-pages-browser)/./app/c/rag/page.tsx":(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.r(t),n.d(t,{default:()=>_});var r=n("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=n("(app-pages-browser)/./lib/rag.ts"),s=n("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),l=e([o]);function _(){let[e,t]=(0,s.useState)(""),[n,i]=(0,s.useState)([]),[l,_]=(0,s.useState)([]),[a,d]=(0,s.useState)(0);return(0,r.jsxs)("div",{style:{padding:"20px",maxWidth:"800px",margin:"0 auto"},children:[(0,r.jsx)("h1",{children:"RAG System"}),(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault();let{relevantDocuments:i,totalTokens:r}=(0,o.P)(e,n,1e3);_(i),d(r)},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"query",children:"Query:"}),(0,r.jsx)("input",{id:"query",type:"text",value:e,onChange:e=>t(e.target.value),required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px"}})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"documents",children:"Documents (one per line):"}),(0,r.jsx)("textarea",{id:"documents",value:n.join("\n"),onChange:e=>i(e.target.value.split("\n")),required:!0,style:{width:"100%",padding:"10px",marginBottom:"10px",height:"150px"}})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"file-upload",children:"Upload Documents:"}),(0,r.jsx)("input",{id:"file-upload",type:"file",multiple:!0,onChange:e=>{let t=e.target.files;if(!t)return;let n=Array.from(t).map(e=>{let t=new FileReader;return new Promise(n=>{t.onload=e=>{var t;n(null===(t=e.target)||void 0===t?void 0:t.result)},t.readAsText(e)})});Promise.all(n).then(e=>{i(t=>[...t,...e])})},style:{marginBottom:"10px"}})]}),(0,r.jsx)("button",{type:"submit",style:{padding:"10px 20px"},children:"Retrieve Documents"})]}),l.length>0&&(0,r.jsxs)("div",{style:{marginTop:"20px"},children:[(0,r.jsx)("h2",{children:"Relevant Documents:"}),(0,r.jsx)("ul",{children:l.map((e,t)=>(0,r.jsx)("li",{style:{marginBottom:"10px"},children:e},t))}),(0,r.jsxs)("p",{children:["Total Tokens: ",a]})]})]})}o=(l.then?(await l)():l)[0],i()}catch(e){i(e)}})},"(app-pages-browser)/./lib/rag.ts":(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{P:()=>d});var r=n("(app-pages-browser)/./node_modules/tiktoken/tiktoken.js"),o=n("(app-pages-browser)/./node_modules/stemmer/index.js"),s=e([r]);r=(s.then?(await s)():s)[0];let l=e=>e.split("\n").filter(e=>""!==e.trim()),_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=e.split(/[.!?]/).filter(Boolean),i=[],r="";for(let e of n)r.length+e.length<=t?r+=e+". ":(i.push(r.trim()),r=e+". ");return r.trim()&&i.push(r.trim()),i},a=e=>e.split(" ").map(e=>(0,o.I)(e.toLowerCase())).join(" "),d=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,i=e.toLowerCase().split(/[.!?]/).filter(Boolean).map(e=>a(e)),o=(0,r.cI)("gpt-4"),s=0,d=[],p=[];for(let e of t)for(let t of l(e)){let e=_(t);p.push({paragraph:t,chunks:e})}for(let{paragraph:e,chunks:t}of p){let r=!1;for(let e of t){let t=a(e);if(i.some(e=>t.includes(e))){r=!0;break}}if(r){let t=o.encode(e).length;if(s+t<=n)d.push(e),s+=t;else break}}if(0===d.length)for(let{paragraph:e}of p){let t=o.encode(e).length;if(s+t<=n)d.push(e),s+=t;else break}return o.free(),{relevantDocuments:d,totalTokens:s}};i()}catch(e){i(e)}})},"(app-pages-browser)/./node_modules/tiktoken/tiktoken.js":(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{cI:()=>o.cI});var r=n("(app-pages-browser)/./node_modules/tiktoken/tiktoken_bg.wasm"),o=n("(app-pages-browser)/./node_modules/tiktoken/tiktoken_bg.js"),s=e([r]);r=(s.then?(await s)():s)[0],(0,o.lI)(r),i()}catch(e){i(e)}})},"(app-pages-browser)/./node_modules/tiktoken/tiktoken_bg.js":(e,t,n)=>{"use strict";let i;function r(e){i=e}n.d(t,{Qn:()=>R,Rj:()=>A,bg:()=>E,bk:()=>D,cI:()=>j,lI:()=>r,qN:()=>$,vU:()=>S,yh:()=>F}),e=n.hmd(e);let o=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let s=null;function l(){return(null===s||0===s.byteLength)&&(s=new Uint8Array(i.memory.buffer)),s}function _(e,t){return e>>>=0,o.decode(l().subarray(e,e+t))}let a=Array(128).fill(void 0);a.push(void 0,null,!0,!1);let d=a.length;function p(e){d===a.length&&a.push(a.length+1);let t=d;return d=a[t],a[t]=e,t}function u(e,t){try{return e.apply(this,t)}catch(e){i.__wbindgen_export_0(p(e))}}function g(e){let t=a[e];return e<132||(a[e]=d,d=e),t}let c=0,b=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),f="function"==typeof b.encodeInto?function(e,t){return b.encodeInto(e,t)}:function(e,t){let n=b.encode(e);return t.set(n),{read:e.length,written:n.length}};function h(e,t,n){if(void 0===n){let n=b.encode(e),i=t(n.length,1)>>>0;return l().subarray(i,i+n.length).set(n),c=n.length,i}let i=e.length,r=t(i,1)>>>0,o=l(),s=0;for(;s<i;s++){let t=e.charCodeAt(s);if(t>127)break;o[r+s]=t}if(s!==i){0!==s&&(e=e.slice(s)),r=n(r,i,i=s+3*e.length,1)>>>0;let t=f(e,l().subarray(r+s,r+i));s+=t.written,r=n(r,i,s,1)>>>0}return c=s,r}let w=null;function k(){return(null===w||!0===w.buffer.detached||void 0===w.buffer.detached&&w.buffer!==i.memory.buffer)&&(w=new DataView(i.memory.buffer)),w}let y=null;function x(){return(null===y||0===y.byteLength)&&(y=new Uint32Array(i.memory.buffer)),y}function m(e,t){return e>>>=0,x().subarray(e/4,e/4+t)}function v(e,t){return e>>>=0,l().subarray(e/1,e/1+t)}function j(e,t){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");try{let o=i.__wbindgen_add_to_stack_pointer(-16),s=h(e,i.__wbindgen_export_1,i.__wbindgen_export_2),l=c;i.encoding_for_model(o,s,l,p(t));var n=k().getInt32(o+0,!0),r=k().getInt32(o+4,!0);if(k().getInt32(o+8,!0))throw g(r);return z.__wrap(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}let I="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>i.__wbg_tiktoken_free(e>>>0,1));class z{static __wrap(e){e>>>=0;let t=Object.create(z.prototype);return t.__wbg_ptr=e,I.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,I.unregister(this),e}free(){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");let e=this.__destroy_into_raw();i.__wbg_tiktoken_free(e,0)}constructor(e,t,n){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");let r=h(e,i.__wbindgen_export_1,i.__wbindgen_export_2),o=c,s=h(n,i.__wbindgen_export_1,i.__wbindgen_export_2),l=c,_=i.tiktoken_new(r,o,p(t),s,l);return this.__wbg_ptr=_>>>0,I.register(this,this.__wbg_ptr,this),this}get name(){try{let n;let r=i.__wbindgen_add_to_stack_pointer(-16);i.tiktoken_name(r,this.__wbg_ptr);var e=k().getInt32(r+0,!0),t=k().getInt32(r+4,!0);return 0!==e&&(n=_(e,t).slice(),i.__wbindgen_export_3(e,1*t,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}encode(e,t,n){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");try{let _=i.__wbindgen_add_to_stack_pointer(-16),a=h(e,i.__wbindgen_export_1,i.__wbindgen_export_2),d=c;i.tiktoken_encode(_,this.__wbg_ptr,a,d,p(t),p(n));var r=k().getInt32(_+0,!0),o=k().getInt32(_+4,!0),s=k().getInt32(_+8,!0);if(k().getInt32(_+12,!0))throw g(s);var l=m(r,o).slice();return i.__wbindgen_export_3(r,4*o,4),l}finally{i.__wbindgen_add_to_stack_pointer(16)}}encode_ordinary(e){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");try{let o=i.__wbindgen_add_to_stack_pointer(-16),s=h(e,i.__wbindgen_export_1,i.__wbindgen_export_2),l=c;i.tiktoken_encode_ordinary(o,this.__wbg_ptr,s,l);var t=k().getInt32(o+0,!0),n=k().getInt32(o+4,!0),r=m(t,n).slice();return i.__wbindgen_export_3(t,4*n,4),r}finally{i.__wbindgen_add_to_stack_pointer(16)}}encode_with_unstable(e,t,n){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");try{let s=i.__wbindgen_add_to_stack_pointer(-16),l=h(e,i.__wbindgen_export_1,i.__wbindgen_export_2),_=c;i.tiktoken_encode_with_unstable(s,this.__wbg_ptr,l,_,p(t),p(n));var r=k().getInt32(s+0,!0),o=k().getInt32(s+4,!0);if(k().getInt32(s+8,!0))throw g(o);return g(r)}finally{i.__wbindgen_add_to_stack_pointer(16)}}encode_single_token(e){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");let t=function(e,t){let n=t(1*e.length,1)>>>0;return l().set(e,n/1),c=e.length,n}(e,i.__wbindgen_export_1),n=c;return i.tiktoken_encode_single_token(this.__wbg_ptr,t,n)>>>0}decode(e){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");try{let o=i.__wbindgen_add_to_stack_pointer(-16),s=function(e,t){let n=t(4*e.length,4)>>>0;return x().set(e,n/4),c=e.length,n}(e,i.__wbindgen_export_1),l=c;i.tiktoken_decode(o,this.__wbg_ptr,s,l);var t=k().getInt32(o+0,!0),n=k().getInt32(o+4,!0),r=v(t,n).slice();return i.__wbindgen_export_3(t,1*n,1),r}finally{i.__wbindgen_add_to_stack_pointer(16)}}decode_single_token_bytes(e){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");try{let o=i.__wbindgen_add_to_stack_pointer(-16);i.tiktoken_decode_single_token_bytes(o,this.__wbg_ptr,e);var t=k().getInt32(o+0,!0),n=k().getInt32(o+4,!0),r=v(t,n).slice();return i.__wbindgen_export_3(t,1*n,1),r}finally{i.__wbindgen_add_to_stack_pointer(16)}}token_byte_values(){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");return g(i.tiktoken_token_byte_values(this.__wbg_ptr))}}function E(){return u(function(e,t){return p(JSON.parse(_(e,t)))},arguments)}function F(){return u(function(e){return p(JSON.stringify(a[e]))},arguments)}function A(e,t){return p(Error(_(e,t)))}function S(e){return void 0===a[e]}function D(e){g(e)}function $(e,t){if(null==i)throw Error("tiktoken: WASM binary has not been propery initialized.");let n=a[t],r="string"==typeof n?n:void 0;var o=null==r?0:h(r,i.__wbindgen_export_1,i.__wbindgen_export_2),s=c;k().setInt32(e+4,s,!0),k().setInt32(e+0,o,!0)}function R(e,t){throw Error(_(e,t))}},"(app-pages-browser)/./node_modules/stemmer/index.js":(e,t,n)=>{"use strict";n.d(t,{I:()=>z});let i={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},r={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},o="[aeiouy]",s="([^aeiou][^aeiouy]*)",l="("+o+"[aeiou]*)",_=RegExp("^"+s+"?"+l+s),a=RegExp("^"+s+"?"+l+s+l+"?$"),d=RegExp("^"+s+"?("+l+s+"){2,}"),p=RegExp("^"+s+"?"+o),u=RegExp("^"+s+o+"[^aeiouwxy]$"),g=/ll$/,c=/^(.+?)e$/,b=/^(.+?)y$/,f=/^(.+?(s|t))(ion)$/,h=/^(.+?)(ed|ing)$/,w=/(at|bl|iz)$/,k=/^(.+?)eed$/,y=/^.+?[^s]s$/,x=/^.+?(ss|i)es$/,m=/([^aeiouylsz])\1$/,v=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,j=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,I=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;function z(e){let t,n=String(e).toLowerCase();if(n.length<3)return n;let o=!1;return 121===n.codePointAt(0)&&(o=!0,n="Y"+n.slice(1)),x.test(n)?n=n.slice(0,-2):y.test(n)&&(n=n.slice(0,-1)),(t=k.exec(n))?_.test(t[1])&&(n=n.slice(0,-1)):(t=h.exec(n))&&p.test(t[1])&&(n=t[1],w.test(n)?n+="e":m.test(n)?n=n.slice(0,-1):u.test(n)&&(n+="e")),(t=b.exec(n))&&p.test(t[1])&&(n=t[1]+"i"),(t=v.exec(n))&&_.test(t[1])&&(n=t[1]+i[t[2]]),(t=j.exec(n))&&_.test(t[1])&&(n=t[1]+r[t[2]]),(t=I.exec(n))?d.test(t[1])&&(n=t[1]):(t=f.exec(n))&&d.test(t[1])&&(n=t[1]),(t=c.exec(n))&&(d.test(t[1])||a.test(t[1])&&!u.test(t[1]))&&(n=t[1]),g.test(n)&&d.test(n)&&(n=n.slice(0,-1)),o&&(n="y"+n.slice(1)),n}},"(app-pages-browser)/./node_modules/tiktoken/tiktoken_bg.wasm":(e,t,n)=>{"use strict";var i=n("(app-pages-browser)/./node_modules/tiktoken/tiktoken_bg.js");e.exports=n.v(t,e.id,"c6d89b43855565f8",{"./tiktoken_bg.js":{__wbindgen_object_drop_ref:i.bk,__wbindgen_is_undefined:i.vU,__wbg_stringify_f4f701bc34ceda61:i.yh,__wbindgen_string_get:i.qN,__wbindgen_error_new:i.Rj,__wbg_parse_161c68378e086ae1:i.bg,__wbindgen_throw:i.Qn}})}},e=>{var t=t=>e(e.s=t);e.O(0,[8441,1517,7358],()=>t("(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fbytarch%2FDocuments%2Fprojects%2Fgenie%2Fapp%2Fc%2Frag%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!")),_N_E=e.O()}]);