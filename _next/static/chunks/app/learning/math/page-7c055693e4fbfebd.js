(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{"(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fbytarch%2FDocuments%2Fprojects%2Fgenie%2Fapp%2Flearning%2Fmath%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!":(e,s,t)=>{Promise.resolve().then(t.bind(t,"(app-pages-browser)/./app/learning/math/page.tsx"))},"(app-pages-browser)/./app/learning/math/page.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>u});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./node_modules/next/dist/api/navigation.js"),i=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-left.js"),l=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/smartphone.js"),d=t("(app-pages-browser)/./components/ui/button.tsx"),c=t("(app-pages-browser)/./components/features/math/view.tsx"),p=e([d,c]);[d,c]=p.then?(await p)():p;let u=()=>{let[e,s]=(0,o.useState)(!1),t=(0,n.useRouter)();(0,o.useEffect)(()=>{let e=()=>{s(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let a=()=>{t.push("/services")};return e?(0,r.jsx)("div",{className:"min-h-screen bg-black text-white flex items-center justify-center p-4",children:(0,r.jsxs)("div",{className:"text-center max-w-md relative",children:[(0,r.jsx)(d.$,{variant:"ghost",size:"icon",onClick:a,className:"absolute top-0 left-0 text-gray-300 hover:text-white hover:bg-red-900/30",children:(0,r.jsx)(i.A,{className:"h-6 w-6"})}),(0,r.jsx)(l.A,{className:"w-24 h-24 mx-auto mb-6 text-red-500"}),(0,r.jsx)("h1",{className:"text-2xl font-bold mb-4 text-red-500",children:"Mobile View Not Supported"}),(0,r.jsx)("p",{className:"text-gray-300 mb-6",children:"This application is optimized for larger screens. Please use a tablet, laptop, or desktop device to access the full functionality."}),(0,r.jsxs)("div",{className:"bg-red-900/20 border border-red-800/50 p-4 rounded-xl",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold text-red-400 mb-2",children:"Recommended Devices:"}),(0,r.jsxs)("ul",{className:"list-disc list-inside text-gray-300",children:[(0,r.jsx)("li",{children:"Tablets"}),(0,r.jsx)("li",{children:"Laptops"}),(0,r.jsx)("li",{children:"Desktop Computers"})]})]})]})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.$,{variant:"ghost",size:"icon",onClick:a,className:"absolute top-0 left-0 text-gray-300 hover:text-white hover:bg-red-900/30",children:(0,r.jsx)(i.A,{className:"h-6 w-6"})}),(0,r.jsx)(c.A,{})]})};a()}catch(e){a(e)}})},"(app-pages-browser)/./components/features/math/ScreenshotDialog.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{A:()=>j});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./components/ui/dialog.tsx"),i=t("(app-pages-browser)/./components/ui/button.tsx"),l=t("(app-pages-browser)/./components/ui/input.tsx"),d=t("(app-pages-browser)/./lib/api.ts"),c=t("(app-pages-browser)/./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs"),p=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js"),u=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js"),m=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js"),g=t("(app-pages-browser)/./node_modules/react-markdown/lib/react-markdown.js"),x=t("(app-pages-browser)/./node_modules/remark-math/lib/index.js"),b=t("(app-pages-browser)/./node_modules/rehype-katex/index.js");t("(app-pages-browser)/./node_modules/katex/dist/katex.min.css");var h=t("(app-pages-browser)/./components/ui/switch.tsx"),f=t("(app-pages-browser)/./components/ui/label.tsx"),w=t("(app-pages-browser)/./lib/utils.ts"),y=e([n,i,l,d,h,f,w]);[n,i,l,d,h,f,w]=y.then?(await y)():y;let j=e=>{let{isOpen:s,onOpenChange:t,screenshotUrl:a}=e,[y,j]=(0,o.useState)(""),[v,N]=(0,o.useState)([]),[k,_]=(0,o.useState)(!1),[C,D]=(0,o.useState)(!0),R=()=>Math.random().toString(36).substring(2,9),F=async()=>{if(y){if(C&&!a){alert("Screenshot is not available but toggle is on.");return}_(!0);try{let e={id:R(),role:"user",content:y,...C&&a?{data:{fileText:"FileName: MultipleFiles/null\nFile Content: null",imagesData:[{filePath:"calc.png",contents:a}]}}:{}};N(s=>[...s,e]);let s=[...v,e];j(""),await (0,d.Wd)("bytarch::deminji-scorpio",s,(e,s)=>{N(s=>{let t=s.length-1,a=s[t],r=(0,w.O5)(e);if(!a||"assistant"!==a.role)return[...s,{id:R(),role:"assistant",content:r}];{let e=[...s];return e[t]={...a,content:(a.content||"")+r},e}}),s&&_(!1)})}catch(e){console.error("Error:",e),N(e=>[...e,{id:R(),role:"assistant",content:"Sorry, there was an error processing your request."}]),_(!1)}}};return(0,r.jsx)(n.lG,{open:s,onOpenChange:t,children:(0,r.jsxs)(n.Cf,{className:" w-[98%]  // Increased from 95% max-w-6xl  // Significantly increased width rounded-xl   bg-black/40  backdrop-blur-sm  border-gray-800/50  flex  flex-col  max-h-[95vh]   p-0 overflow-hidden mx-auto   my-auto   md:w-[90%]  // Responsive width for medium screens lg:w-[85%]  // Responsive width for large screens xl:w-[80%]  // Responsive width for extra-large screens 2xl:w-[75%]  // Even wider for very large screens shadow-2xl  // Added shadow for depth border  border-gray-800/30  // Subtle border ",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-gray-800/50",children:[(0,r.jsx)("div",{className:"flex items-center space-x-4",children:(0,r.jsx)(n.L3,{className:"text-sm sm:text-base md:text-lg text-gray-200 font-semibold"})}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(h.d,{id:"screenshot-toggle",checked:C,onCheckedChange:D,disabled:!a,className:"scale-75 sm:scale-100"}),(0,r.jsx)(f.J,{htmlFor:"screenshot-toggle",className:"\n                  text-xs \n                  ".concat(a?"text-gray-300":"text-gray-500","\n                "),children:C?"I don't want to use Screenshot":"Use Screenshot"})]}),v.length>0&&(0,r.jsx)(i.$,{variant:"ghost",size:"sm",onClick:()=>N([]),className:"text-gray-300 hover:text-white hover:bg-red-900/30 scale-75 sm:scale-100",children:(0,r.jsx)(p.A,{className:"h-4 w-4"})}),(0,r.jsx)(n.HM,{asChild:!0,children:(0,r.jsx)(i.$,{variant:"ghost",size:"sm",className:"scale-75 sm:scale-100"})})]})]}),a&&C&&(0,r.jsx)("div",{className:" py-1  px-2  border-b  border-gray-800/50  flex  justify-center  items-center ",children:(0,r.jsx)("img",{src:a,alt:"Screenshot",className:" w-auto  max-w-[150px]  // Reduced width max-h-[100px]  // Reduced height rounded-md     // Slightly smaller radius border  border-gray-800/30  object-contain  shadow-sm      // Reduced shadow "})}),(0,r.jsxs)("div",{className:" flex-grow  overflow-y-auto  p-2 sm:p-4  space-y-2 sm:space-y-4 h-[300px]  // Fixed height max-h-[300px]  // Max height to prevent overflow relative  // For potential scroll styling ",children:[0===v.length&&(0,r.jsx)("div",{className:" absolute  inset-0  flex  items-center  justify-center  text-gray-500  text-sm  text-center ",children:"Start a conversation or analyze a screenshot"}),(0,r.jsx)("div",{className:"space-y-2 sm:space-y-4",children:v.map(e=>(0,r.jsx)(c.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"\n          max-w-[90%] \n          rounded-xl \n          p-2 sm:p-3 \n          relative \n          group\n          text-xs sm:text-sm\n          ".concat("user"===e.role?"bg-red-700/20 text-gray-200 self-end ml-auto":"bg-gray-800/50 text-gray-300 self-start","\n        "),children:(0,r.jsx)(g.$,{remarkPlugins:[x.A],rehypePlugins:[b.A],className:" w-full  prose  dark:prose-invert  prose-sm  max-w-full  break-words  text-pretty  overflow-x-auto  text-wrap  whitespace-normal [&>*]:text-gray-200 [&_code]:text-red-400 [&_pre]:bg-black/30 [&_blockquote]:border-l-red-500 ",components:{h1:e=>{let{node:s,...t}=e;return(0,r.jsx)("h1",{className:"scroll-m-20  text-lg  font-bold tracking-tight  text-white  border-b border-gray-700  pb-2 mb-4",...t})},h2:e=>{let{node:s,...t}=e;return(0,r.jsx)("h2",{className:"scroll-m-20  text-base  font-semibold tracking-tight  text-gray-200  border-b border-gray-700  pb-2 mt-6 mb-4",...t})},h3:e=>{let{node:s,...t}=e;return(0,r.jsx)("h3",{className:"scroll-m-20  text-sm  font-semibold  text-gray-300  mt-4 mb-2",...t})},code:e=>{let{node:s,...t}=e;return(0,r.jsx)("pre",{className:" break-words  overflow-x-auto  max-w-full  whitespace-pre-wrap  bg-gray-900  px-1  rounded text-wrap text-sm ",...t})},pre:e=>{let{node:s,...t}=e;return(0,r.jsx)("pre",{className:" overflow-x-auto  max-w-full  whitespace-pre-wrap  break-words  bg-gray-900  p-2  rounded text-wrap text-sm ",...t})},p:e=>{let{node:s,...t}=e;return(0,r.jsx)("p",{className:"text-lg  leading-relaxed  text-gray-300  [&:not(:first-child)]:mt-6",...t})},ul:e=>{let{node:s,...t}=e;return(0,r.jsx)("ul",{className:"my-6 ml-6  list-disc  text-lg  text-gray-300  [&>li]:mt-2",...t})},ol:e=>{let{node:s,...t}=e;return(0,r.jsx)("ol",{className:"my-6 ml-6  list-decimal  text-lg  text-gray-300  [&>li]:mt-2",...t})},li:e=>{let{node:s,...t}=e;return(0,r.jsx)("li",{className:"pl-2  text-lg  text-gray-300",...t})},a:e=>{let{node:s,...t}=e;return(0,r.jsx)("a",{className:"text-blue-400  hover:text-blue-300  underline  transition-colors  duration-200 text-sm",target:"_blank",rel:"noopener noreferrer",...t})},blockquote:e=>{let{node:s,...t}=e;return(0,r.jsx)("blockquote",{className:"border-l-4 border-gray-700  pl-4  italic  text-sm  text-gray-400  my-4",...t})}},children:e.content})},e.id))})]}),(0,r.jsx)("div",{className:"p-2 sm:p-4 border-t border-gray-800/50",children:(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsx)(l.p,{type:"text",value:y,onChange:e=>j(e.target.value),onKeyPress:e=>"Enter"===e.key&&F(),placeholder:"Analyze screenshot...",disabled:k,className:" w-full  bg-black/30  backdrop-blur-sm  border  border-gray-800/50  rounded-full  px-3 sm:px-4  py-2  text-xs sm:text-sm text-gray-200  focus:border-red-500  transition-colors  disabled:opacity-50 outline-none "}),(0,r.jsx)(i.$,{onClick:F,disabled:k||!y,className:" bg-red-600  hover:bg-red-700  text-white  rounded-full  p-2  transition-colors  disabled:opacity-50  flex  items-center  justify-center  w-10 h-10 sm:w-12 sm:h-12 ",children:k?(0,r.jsx)(u.A,{className:"h-4 w-4 sm:h-5 sm:w-5 animate-spin"}):(0,r.jsx)(m.A,{className:"h-4 w-4 sm:h-5 sm:w-5"})})]})})]})})};a()}catch(e){a(e)}})},"(app-pages-browser)/./components/features/math/view.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{A:()=>f});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs"),i=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js"),l=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/camera.js"),d=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/image.js"),c=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js"),p=t("(app-pages-browser)/./node_modules/react-dropzone/dist/es/index.js"),u=t("(app-pages-browser)/./node_modules/next/dist/api/navigation.js"),m=t("(app-pages-browser)/./components/ui/button.tsx"),g=t("(app-pages-browser)/./node_modules/sonner/dist/index.mjs"),x=t("(app-pages-browser)/./lib/utils.ts"),b=t("(app-pages-browser)/./components/features/math/ScreenshotDialog.tsx"),h=e([m,x,b]);[m,x,b]=h.then?(await h)():h;let f=()=>{let[e,s]=(0,o.useState)(null),[t,a]=(0,o.useState)(null),[h,f]=(0,o.useState)(!1),[w,y]=(0,o.useState)(!1),[j,v]=(0,o.useState)(null),[N,k]=(0,o.useState)(null),[_,C]=(0,o.useState)(!1);(0,u.useRouter)();let D=(0,o.useRef)(null),R=(0,o.useRef)(null),F=(0,o.useRef)(null),A=async e=>{let t=await (0,x.FH)();if(!t){g.toast.error("Error!",{description:"Unable to verify user credentials."});return}let r=new Date;if(!(t&&t.expiration_date&&new Date(t.expiration_date)>r)){g.toast.error("Premium Access Required!",{description:"Upgrade your plan to access this feature."});return}if(e&&["image/jpeg","image/png","image/gif","image/webp"].includes(e.type)){let t=URL.createObjectURL(e);s(e),a(t)}else g.toast.error("Invalid File",{description:"Please upload a valid image file (JPEG, PNG, GIF, WEBP)."})},S=(0,o.useCallback)(e=>{e.length>0&&A(e[0])},[]),{getRootProps:z,getInputProps:I,isDragActive:E}=(0,p.VB)({onDrop:S,accept:{"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"],"image/gif":[".gif"],"image/webp":[".webp"]}});return(0,r.jsxs)("div",{className:"min-h-screen bg-black text-white",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-black via-black to-blue-950/20 opacity-70 pointer-events-none"}),(0,r.jsx)("div",{className:"relative z-10 max-w-7xl mx-auto",children:(0,r.jsxs)("div",{className:"flex min-h-screen",children:[(0,r.jsx)("div",{className:"\n            ".concat(h?"w-2/3":"w-full"," \n            p-4 \n            bg-black/40 \n            backdrop-blur-sm \n            transition-all \n            duration-300 \n            ease-in-out\n            relative\n          "),children:t?(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-2",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex space-x-2",children:[(0,r.jsxs)(m.$,{variant:"ghost",size:"sm",onClick:()=>{s(null),a(null),f(!1),k(null),C(!1),D.current&&(D.current.value="")},className:"text-sm text-gray-300 hover:text-white hover:bg-blue-900/30",children:[(0,r.jsx)(i.A,{className:"mr-2 h-4 w-4"})," Close"]}),(0,r.jsxs)(m.$,{variant:"ghost",size:"sm",onClick:()=>{y(!w),v(null),k(null)},className:"text-sm ".concat(w?"bg-blue-900/50 text-white":"text-gray-300 hover:text-white hover:bg-blue-900/30"),children:[(0,r.jsx)(l.A,{className:"mr-2 h-4 w-4"}),w?"Cancel Screenshot":"Take Screenshot"]})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2 text-sm text-gray-400",children:[(0,r.jsx)(d.A,{className:"w-4 h-4 text-blue-500"}),(0,r.jsx)("span",{children:(null==e?void 0:e.name)?"".concat(e.name.slice(0,25),"..."):"Unknown Image"})]})]})}),(0,r.jsxs)("div",{ref:F,className:"max-w-full max-h-full rounded-lg overflow-hidden flex items-center justify-center relative bg-black",onMouseDown:e=>{var s;if(!w)return;let t=null===(s=F.current)||void 0===s?void 0:s.getBoundingClientRect();t&&v({startX:e.clientX-t.left,startY:e.clientY-t.top,endX:e.clientX-t.left,endY:e.clientY-t.top})},onMouseMove:e=>{var s;if(!w||!j)return;let t=null===(s=F.current)||void 0===s?void 0:s.getBoundingClientRect();if(t){let s=Math.max(0,Math.min(e.clientX-t.left,t.width)),a=Math.max(0,Math.min(e.clientY-t.top,t.height));v(e=>e?{...e,endX:s,endY:a}:null)}},onMouseUp:()=>{if(!w||!j||!F.current)return;let e=document.createElement("canvas"),s=new Image;s.src=t||"",s.onload=()=>{let t=F.current,a=null==t?void 0:t.querySelector("img");if(!a)return;let r=s.naturalWidth,o=s.naturalHeight,n=a.clientWidth,i=a.clientHeight,l=r/n,d=o/i,c=Math.min(j.startX,j.endX),p=Math.min(j.startY,j.endY),u=Math.abs(j.endX-j.startX),m=Math.abs(j.endY-j.startY),g=c*l;console.log(g);let x=u*l,b=m*d;e.width=x,e.height=b;let h=e.getContext("2d");if(h){h.drawImage(s,g,p*d,x,b,0,0,x,b);let t=e.toDataURL("image/png");k(t),y(!1),C(!0)}},v(null)},children:[(0,r.jsx)("img",{ref:R,src:t,alt:"Uploaded",className:"w-full h-full object-cover"}),w&&j&&(0,r.jsx)("div",{className:"absolute border-2 border-blue-500 bg-blue-500/20",style:{left:Math.min(j.startX,j.endX),top:Math.min(j.startY,j.endY),width:Math.abs(j.endX-j.startX),height:Math.abs(j.endY-j.startY)}})]})]}):(0,r.jsx)(n.P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},className:"flex items-center justify-center h-screen",children:(0,r.jsxs)("div",{...z(),className:"flex flex-col items-center p-8 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer ".concat(E?"bg-blue-900/20":"bg-transparent"),children:[(0,r.jsx)("input",{...I()}),(0,r.jsx)(c.A,{className:"w-16 h-16 text-gray-400 mb-4"}),(0,r.jsx)("span",{className:"text-gray-300 mb-4",children:E?"Drop the image here...":"Drag & Drop or Click to Upload Image"}),(0,r.jsx)(m.$,{onClick:()=>{var e;return null===(e=D.current)||void 0===e?void 0:e.click()},children:"Choose File"})]})})}),(0,r.jsx)(b.A,{isOpen:_,onOpenChange:C,screenshotUrl:N})]})})]})};a()}catch(e){a(e)}})},"(app-pages-browser)/./components/ui/button.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{$:()=>p});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./node_modules/@radix-ui/react-slot/dist/index.mjs"),i=t("(app-pages-browser)/./node_modules/class-variance-authority/dist/index.mjs"),l=t("(app-pages-browser)/./lib/utils.ts"),d=e([l]);l=(d.then?(await d)():d)[0];let c=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-gray-900 text-gray-50 shadow hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",destructive:"bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",outline:"border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",secondary:"bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",ghost:"hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",link:"text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=o.forwardRef((e,s)=>{let{className:t,variant:a,size:o,asChild:i=!1,...d}=e,p=i?n.DX:"button";return(0,r.jsx)(p,{className:(0,l.cn)(c({variant:a,size:o,className:t})),ref:s,...d})});p.displayName="Button",a()}catch(e){a(e)}})},"(app-pages-browser)/./components/ui/dialog.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{Cf:()=>x,Es:()=>h,HM:()=>m,L3:()=>f,c7:()=>b,lG:()=>c,rr:()=>w,zM:()=>p});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./node_modules/@radix-ui/react-dialog/dist/index.mjs"),i=t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js"),l=t("(app-pages-browser)/./lib/utils.ts"),d=e([l]);l=(d.then?(await d)():d)[0];let c=n.bL,p=n.l9,u=n.ZL,m=n.bm,g=o.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)(n.hJ,{ref:s,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...a})});g.displayName=n.hJ.displayName;let x=o.forwardRef((e,s)=>{let{className:t,children:a,...o}=e;return(0,r.jsxs)(u,{children:[(0,r.jsx)(g,{}),(0,r.jsxs)(n.UC,{ref:s,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...o,children:[a,(0,r.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(i.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=n.UC.displayName;let b=e=>{let{className:s,...t}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",s),...t})};b.displayName="DialogHeader";let h=e=>{let{className:s,...t}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",s),...t})};h.displayName="DialogFooter";let f=o.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)(n.hE,{ref:s,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",t),...a})});f.displayName=n.hE.displayName;let w=o.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)(n.VY,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",t),...a})});w.displayName=n.VY.displayName,a()}catch(e){a(e)}})},"(app-pages-browser)/./components/ui/input.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{p:()=>l});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./lib/utils.ts"),i=e([n]);n=(i.then?(await i)():i)[0];let l=o.forwardRef((e,s)=>{let{className:t,type:a,...o}=e;return(0,r.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:s,...o})});l.displayName="Input",a()}catch(e){a(e)}})},"(app-pages-browser)/./components/ui/label.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{J:()=>p});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs"),i=t("(app-pages-browser)/./node_modules/class-variance-authority/dist/index.mjs"),l=t("(app-pages-browser)/./lib/utils.ts"),d=e([l]);l=(d.then?(await d)():d)[0];let c=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),p=o.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)(n.b,{ref:s,className:(0,l.cn)(c(),t),...a})});p.displayName=n.b.displayName,a()}catch(e){a(e)}})},"(app-pages-browser)/./components/ui/switch.tsx":(e,s,t)=>{"use strict";t.a(e,async(e,a)=>{try{t.d(s,{d:()=>d});var r=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),o=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),n=t("(app-pages-browser)/./node_modules/@radix-ui/react-switch/dist/index.mjs"),i=t("(app-pages-browser)/./lib/utils.ts"),l=e([i]);i=(l.then?(await l)():l)[0];let d=o.forwardRef((e,s)=>{let{className:t,...a}=e;return(0,r.jsx)(n.bL,{className:(0,i.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...a,ref:s,children:(0,r.jsx)(n.zi,{className:(0,i.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});d.displayName=n.bL.displayName,a()}catch(e){a(e)}})},"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/camera.js":(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]])},"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/image.js":(e,s,t)=>{"use strict";t.d(s,{A:()=>a});let a=(0,t("(app-pages-browser)/./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]])},"(app-pages-browser)/./node_modules/@radix-ui/react-dialog/dist/index.mjs":(e,s,t)=>{"use strict";t.d(s,{UC:()=>es,VY:()=>ea,ZL:()=>Q,bL:()=>Z,bm:()=>er,hE:()=>et,hJ:()=>ee,l9:()=>K});var a=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),r=t("(app-pages-browser)/./node_modules/@radix-ui/primitive/dist/index.mjs"),o=t("(app-pages-browser)/./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),n=t("(app-pages-browser)/./node_modules/@radix-ui/react-context/dist/index.mjs"),i=t("(app-pages-browser)/./node_modules/@radix-ui/react-id/dist/index.mjs"),l=t("(app-pages-browser)/./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),d=t("(app-pages-browser)/./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs"),c=t("(app-pages-browser)/./node_modules/@radix-ui/react-focus-scope/dist/index.mjs"),p=t("(app-pages-browser)/./node_modules/@radix-ui/react-portal/dist/index.mjs"),u=t("(app-pages-browser)/./node_modules/@radix-ui/react-presence/dist/index.mjs"),m=t("(app-pages-browser)/./node_modules/@radix-ui/react-primitive/dist/index.mjs"),g=t("(app-pages-browser)/./node_modules/@radix-ui/react-focus-guards/dist/index.mjs"),x=t("(app-pages-browser)/./node_modules/react-remove-scroll/dist/es2015/Combination.js"),b=t("(app-pages-browser)/./node_modules/aria-hidden/dist/es2015/index.js"),h=t("(app-pages-browser)/./node_modules/@radix-ui/react-slot/dist/index.mjs"),f=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-runtime.js"),w="Dialog",[y,j]=(0,n.A)(w),[v,N]=y(w),k=e=>{let{__scopeDialog:s,children:t,open:r,defaultOpen:o,onOpenChange:n,modal:d=!0}=e,c=a.useRef(null),p=a.useRef(null),[u=!1,m]=(0,l.i)({prop:r,defaultProp:o,onChange:n});return(0,f.jsx)(v,{scope:s,triggerRef:c,contentRef:p,contentId:(0,i.B)(),titleId:(0,i.B)(),descriptionId:(0,i.B)(),open:u,onOpenChange:m,onOpenToggle:a.useCallback(()=>m(e=>!e),[m]),modal:d,children:t})};k.displayName=w;var _="DialogTrigger",C=a.forwardRef((e,s)=>{let{__scopeDialog:t,...a}=e,n=N(_,t),i=(0,o.s)(s,n.triggerRef);return(0,f.jsx)(m.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":G(n.open),...a,ref:i,onClick:(0,r.m)(e.onClick,n.onOpenToggle)})});C.displayName=_;var D="DialogPortal",[R,F]=y(D,{forceMount:void 0}),A=e=>{let{__scopeDialog:s,forceMount:t,children:r,container:o}=e,n=N(D,s);return(0,f.jsx)(R,{scope:s,forceMount:t,children:a.Children.map(r,e=>(0,f.jsx)(u.C,{present:t||n.open,children:(0,f.jsx)(p.Z,{asChild:!0,container:o,children:e})}))})};A.displayName=D;var S="DialogOverlay",z=a.forwardRef((e,s)=>{let t=F(S,e.__scopeDialog),{forceMount:a=t.forceMount,...r}=e,o=N(S,e.__scopeDialog);return o.modal?(0,f.jsx)(u.C,{present:a||o.open,children:(0,f.jsx)(I,{...r,ref:s})}):null});z.displayName=S;var I=a.forwardRef((e,s)=>{let{__scopeDialog:t,...a}=e,r=N(S,t);return(0,f.jsx)(x.A,{as:h.DX,allowPinchZoom:!0,shards:[r.contentRef],children:(0,f.jsx)(m.sG.div,{"data-state":G(r.open),...a,ref:s,style:{pointerEvents:"auto",...a.style}})})}),E="DialogContent",M=a.forwardRef((e,s)=>{let t=F(E,e.__scopeDialog),{forceMount:a=t.forceMount,...r}=e,o=N(E,e.__scopeDialog);return(0,f.jsx)(u.C,{present:a||o.open,children:o.modal?(0,f.jsx)(O,{...r,ref:s}):(0,f.jsx)(P,{...r,ref:s})})});M.displayName=E;var O=a.forwardRef((e,s)=>{let t=N(E,e.__scopeDialog),n=a.useRef(null),i=(0,o.s)(s,t.contentRef,n);return a.useEffect(()=>{let e=n.current;if(e)return(0,b.Eq)(e)},[]),(0,f.jsx)(L,{...e,ref:i,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.m)(e.onCloseAutoFocus,e=>{var s;e.preventDefault(),null===(s=t.triggerRef.current)||void 0===s||s.focus()}),onPointerDownOutside:(0,r.m)(e.onPointerDownOutside,e=>{let s=e.detail.originalEvent,t=0===s.button&&!0===s.ctrlKey;(2===s.button||t)&&e.preventDefault()}),onFocusOutside:(0,r.m)(e.onFocusOutside,e=>e.preventDefault())})}),P=a.forwardRef((e,s)=>{let t=N(E,e.__scopeDialog),r=a.useRef(!1),o=a.useRef(!1);return(0,f.jsx)(L,{...e,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var a,n;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,s),s.defaultPrevented||(r.current||null===(n=t.triggerRef.current)||void 0===n||n.focus(),s.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:s=>{var a,n;null===(a=e.onInteractOutside)||void 0===a||a.call(e,s),s.defaultPrevented||(r.current=!0,"pointerdown"!==s.detail.originalEvent.type||(o.current=!0));let i=s.target;(null===(n=t.triggerRef.current)||void 0===n?void 0:n.contains(i))&&s.preventDefault(),"focusin"===s.detail.originalEvent.type&&o.current&&s.preventDefault()}})}),L=a.forwardRef((e,s)=>{let{__scopeDialog:t,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:i,...l}=e,p=N(E,t),u=a.useRef(null),m=(0,o.s)(s,u);return(0,g.Oh)(),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.n,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:i,children:(0,f.jsx)(d.qW,{role:"dialog",id:p.contentId,"aria-describedby":p.descriptionId,"aria-labelledby":p.titleId,"data-state":G(p.open),...l,ref:m,onDismiss:()=>p.onOpenChange(!1)})}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(V,{titleId:p.titleId}),(0,f.jsx)(J,{contentRef:u,descriptionId:p.descriptionId})]})]})}),B="DialogTitle",X=a.forwardRef((e,s)=>{let{__scopeDialog:t,...a}=e,r=N(B,t);return(0,f.jsx)(m.sG.h2,{id:r.titleId,...a,ref:s})});X.displayName=B;var Y="DialogDescription",U=a.forwardRef((e,s)=>{let{__scopeDialog:t,...a}=e,r=N(Y,t);return(0,f.jsx)(m.sG.p,{id:r.descriptionId,...a,ref:s})});U.displayName=Y;var q="DialogClose",W=a.forwardRef((e,s)=>{let{__scopeDialog:t,...a}=e,o=N(q,t);return(0,f.jsx)(m.sG.button,{type:"button",...a,ref:s,onClick:(0,r.m)(e.onClick,()=>o.onOpenChange(!1))})});function G(e){return e?"open":"closed"}W.displayName=q;var H="DialogTitleWarning",[$,T]=(0,n.q)(H,{contentName:E,titleName:B,docsSlug:"dialog"}),V=e=>{let{titleId:s}=e,t=T(H),r="`".concat(t.contentName,"` requires a `").concat(t.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(t.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(t.docsSlug);return a.useEffect(()=>{s&&!document.getElementById(s)&&console.error(r)},[r,s]),null},J=e=>{let{contentRef:s,descriptionId:t}=e,r=T("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let a=null===(e=s.current)||void 0===e?void 0:e.getAttribute("aria-describedby");t&&a&&!document.getElementById(t)&&console.warn(o)},[o,s,t]),null},Z=k,K=C,Q=A,ee=z,es=M,et=X,ea=U,er=W},"(app-pages-browser)/./node_modules/@radix-ui/react-use-size/dist/index.mjs":(e,s,t)=>{"use strict";t.d(s,{X:()=>o});var a=t("(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js"),r=t("(app-pages-browser)/./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function o(e){let[s,t]=a.useState(void 0);return(0,r.N)(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let s=new ResizeObserver(s=>{let a,r;if(!Array.isArray(s)||!s.length)return;let o=s[0];if("borderBoxSize"in o){let e=o.borderBoxSize,s=Array.isArray(e)?e[0]:e;a=s.inlineSize,r=s.blockSize}else a=e.offsetWidth,r=e.offsetHeight;t({width:a,height:r})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}t(void 0)},[e]),s}}},e=>{var s=s=>e(e.s=s);e.O(0,[562,9268,7330,3171,6047,5745,1714,3015,2651,5907,9546,4879,8024,5407,8441,1517,7358],()=>s("(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fbytarch%2FDocuments%2Fprojects%2Fgenie%2Fapp%2Flearning%2Fmath%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=false!")),_N_E=e.O()}]);