(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{50477:()=>{},81891:(e,t,o)=>{"use strict";o.d(t,{n:()=>w});var a=o(12115),n=o(30814),r=o(74196),i=o(29602),s=o(76046),c=o(41748),l=o(82651);let d=async e=>{let t=(0,c.mj)(),o=await fetch("https://blacksourcellc.taile6b163.ts.net/v1/v2/ai/bylearn/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"auth.sessionToken ".concat(t)},body:JSON.stringify({model:"beta::meta-llama/Llama-3.3-70B-Instruct",messages:[{role:"user",content:"   You are a professional prompt engineer specializing in crafting precise, effective prompts.\n            Your task is to enhance prompts by making them more specific, actionable, and effective.\n\n            I want you to improve the user prompt that is wrapped in `<original_prompt>` tags.\n\n            For valid prompts:\n            - Make instructions explicit and unambiguous\n            - Add relevant context and constraints\n            - Remove redundant information\n            - Maintain the core intent\n            - Ensure the prompt is self-contained\n            - Use professional language\n\n            For invalid or unclear prompts:\n            - Respond with a clear, professional guidance message\n            - Keep responses concise and actionable\n            - Maintain a helpful, constructive tone\n            - Focus on what the user should provide\n            - Use a standard template for consistency\n\n            IMPORTANT: Your response must ONLY contain the enhanced prompt text.\n            Do not include any explanations, metadata, or wrapper tags.\n          \n          Advanced Prompt Engineering Framework: Keyword-Targeted Response Optimization\n        \n        Keyword Detection and Response Routing:\n        \n        1. Search & Navigation Keywords:\n           - Triggers: 'find', 'visit', 'go to', 'website', 'search', 'recent', 'current', 'latest'\n           - Focus: Precise information retrieval, web navigation, up-to-date content\n           - Optimization Strategy: \n             * Clarify specific search intent\n             * Specify desired information depth\n             * Provide context for search parameters\n        \n        2. Media & Entertainment Keywords:\n           - Triggers: 'IMDB', 'movie', 'film', 'youtube'\n           - Focus: Media-specific content discovery, recommendations\n           - Optimization Strategy:\n             * Extract genre, preference, or specific media criteria\n             * Define recommendation parameters\n             * Clarify user's content consumption goal\n             * The IMDB url should remain the same\n        \n        3. Image Generation Keywords:\n           - Triggers: \n             * Detailed Image Creation: 'product image', 'create a image', 'image of', 'generate'\n             * Quick Image Generation: 'product a image', 'create image'\n           - Focus: Visual content creation, precise image specifications\n           - Optimization Strategy:\n             * Define image characteristics\n             * Specify generation style/platform\n             * Provide detailed creative direction\n        \n        Prompt Enhancement Protocol:\n        - Retain original keyword triggers\n        - Expand contextual understanding\n        - Refine user's implicit intent\n        - Ensure precise, actionable output\n        \n        Output Requirement:\n        - Deliver enhanced, keyword-aligned prompt\n        - Maintain original communication essence\n        - Target specialized response pathway\n        \n        <original_prompt>\n        ".concat(e,"\n        </original_prompt>\n        ")}],stream:!1,max_tokens:150})});if(!o.ok)throw Error("Failed to fetch AI response");return(await o.json()).response},u=async(e,t)=>{let o=await (0,c.mj)();if(!o)throw Error("No session token found");if(!t)throw Error("No image found");let a=await fetch("https://blacksourcellc.taile6b163.ts.net/video",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"auth.sessionToken ".concat(o)},body:JSON.stringify({prompt:e,image:t,width:"512",height:"512",frames:57})});if(!a.ok)throw Error("Failed to generate video");let n=await a.json();return n.videoBase64||n.videoUrl||n.response},p=async(e,t)=>{let o=await (0,c.mj)();if(!o)throw Error("No session token found");let a=await fetch("https://blacksourcellc.taile6b163.ts.net/v1/v2/ai/bylearn/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"auth.sessionToken ".concat(o)},body:JSON.stringify({model:e,messages:t.map(e=>({role:e.role,content:e.content})),stream:!1,max_tokens:1600})});if(!a.ok)throw Error("Failed to fetch AI response");return(await a.json()).response},m=async(e,t)=>{let o=await (0,c.mj)();if(!o)throw Error("No session token found");let a=await fetch("https://blacksourcellc.taile6b163.ts.net/v1/v2/ai/bylearn/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"auth.sessionToken ".concat(o)},body:JSON.stringify({model:"501::searchgpt",messages:t.map(e=>({role:e.role,content:e.content})),stream:!1,max_tokens:1600})});if(!a.ok)throw Error("Failed to fetch AI response");return(await a.json()).response},h=async(e,t)=>{let o=await (0,c.mj)();if(!o)throw Error("No session token found");let a=t[t.length-1].content,n="",r=null,i=a.match(/https?:\/\/(?:www\.)?imdb\.com\/title\/tt\d+/i);if(i)n=i[0];else{let e=a.match(/https?:\/\/bzblackstream\.vercel\.app\/movies\/(\d+)/i);e&&(r=e[1])}try{if(r){var s;let e=await l.A.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=680c99274ddab12ffac27271d9445d45&append_to_response=external_ids")),t=null===(s=e.data.external_ids)||void 0===s?void 0:s.imdb_id;if(t)n="https://www.imdb.com/title/".concat(t);else throw Error("Could not find IMDb ID for the movie")}if(!n)throw Error("No valid movie URL found");return(await l.A.post("https://blacksourcellc.taile6b163.ts.net/api/suite/movie",{query:a,url:n},{headers:{"Content-Type":"application/json",Authorization:"auth.sessionToken ".concat(o)}})).data.response}catch(e){throw console.error("Error while fetching AI response:",e),Error("Failed to fetch AI response")}},f=async(e,t)=>{let o=await (0,c.mj)();if(!o)throw Error("No session token found");let a=t[t.length-1].content,n=function(e){for(let t of[/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([^&\n\s]+)/,/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\n\s]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n\s]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^&\n\s]+)/]){let o=e.match(t);if(o&&o[1])return o[1]}return null}(a);if(!n)throw Error("No valid YouTube URL found");try{return(await l.A.post("https://blacksourcellc.taile6b163.ts.net/api/suite/yt",{query:a,videoUrl:"https://www.youtube.com/watch?v=".concat(n)},{headers:{"Content-Type":"application/json",Authorization:"auth.sessionToken ".concat(o)}})).data.response}catch(e){throw console.error("Error while fetching AI response:",e),Error("Failed to fetch AI response")}};var g=o(95676);let w=()=>{let[e,t]=(0,a.useState)([]),[o,c]=(0,a.useState)(null),[l,w]=(0,a.useState)(!1),y=(0,s.useRouter)(),b=(0,a.useCallback)(async()=>{w(!0);try{let e=(await (0,r.fH)()).sort((e,t)=>parseInt(t.id)-parseInt(e.id));t(t=>t.length===e.length&&t.every((t,o)=>t.id===e[o].id)?t:e)}catch(e){}finally{w(!1)}},[]);(0,a.useEffect)(()=>{b()},[b]),(0,a.useEffect)(()=>{let e=e=>{if(e.key===r.AQ)try{let o=JSON.parse(e.newValue||"[]");t(e=>e.length===o.length&&e.every((e,t)=>e.id===o[t].id)?e:o)}catch(e){console.error("Error parsing storage event",e)}},o=new BroadcastChannel("chat-rooms-sync");return o.onmessage=e=>{"UPDATE_CHAT_ROOMS"===e.data.type&&b()},window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e),o.close()}},[b]);let v=e=>{e&&localStorage.setItem(r.AQ,JSON.stringify(e));let t=new BroadcastChannel("chat-rooms-sync");t.postMessage({type:"UPDATE_CHAT_ROOMS",timestamp:Date.now()}),t.close()},k=async o=>{let a={id:Date.now().toString(),name:"New Chat",messages:[],model:o};try{await (0,r.zX)(a);let o=[a,...e];t(e=>[a,...e]),c(a),y.push("/c?id=".concat(a.id)),v(o)}catch(e){n.oR.error("Failed to create new chat room",{description:e instanceof Error?e.message:"Unknown error"})}},S=async e=>{w(!0);let t=await d(e);return w(!1),t},C=async(a,i)=>{let s=localStorage.getItem("aiFeatures"),l=s?JSON.parse(s):{search:!0,movies:!0,youtube:!0,imageGeneration:!0,videoGeneration:!1},d=o;if(!d)try{let e={id:Date.now().toString(),name:"New Chat",messages:[],model:i};await (0,r.zX)(e),t(t=>[e,...t]),c(e),y.push("/c?id=".concat(e.id)),d=e,console.log("New chat room created",d)}catch(e){n.oR.error("Failed to create new chat room",{description:e instanceof Error?e.message:"Unknown error"});return}if(!a.trim())return;let b=sessionStorage.getItem("selectedFileId"),k=a;if(b){let e=(0,g.BO)(b);e&&(k="Context from file: ".concat(e.name," (").concat(e.extension,")\n  \n  File Content:\n  ```").concat(e.extension,"\n  ").concat(e.content,"\n  ```\n  \n  User Query: ").concat(a),sessionStorage.removeItem("selectedFileId"))}let S="New Chat"===d.name&&0===d.messages.length,C={id:Date.now().toString(),content:k,role:"user",timestamp:Date.now()},E=[...d.messages,C],x={...d,name:S?k.length>20?k.substring(0,20)+"...":k:d.name,messages:E};c(x),t(e=>e.map(e=>e.id===d.id?x:e));try{let o;await (0,r.zX)(x),w(!0);let n=l.search&&(a.toLowerCase().includes("find")||a.toLowerCase().includes("visit")||a.toLowerCase().includes("go to")||a.toLowerCase().includes("website")||a.toLowerCase().includes("search")||a.toLowerCase().includes("recent")||a.toLowerCase().includes("current")||a.toLowerCase().includes("latest")),s=l.movies&&(a.toLowerCase().includes("imdb.com")||a.toLowerCase().includes("bzblackstream.vercel.app/movies/")),g=l.youtube&&(a.toLowerCase().includes("youtube.com")||a.toLowerCase().includes("youtu.be")),y=l.imageGeneration&&(a.toLowerCase().includes("product a image")||a.toLowerCase().includes("create image")||a.toLowerCase().includes("product image")||a.toLowerCase().includes("product an image")||a.toLowerCase().includes("create a image")||a.toLowerCase().includes("image of")||a.toLowerCase().includes("generate image")),b=l.videoGeneration&&a.toLowerCase().includes("@video");if(n)o=await m(i,E);else if(s)o=await h(i,E);else if(g)(function(e){for(let t of[/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([^&\n\s]+)/,/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&\n\s]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n\s]+)/,/(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([^&\n\s]+)/]){let o=e.match(t);if(o&&o[1])return o[1]}return null})(a)&&(o=await f(i,E));else if(y)o=await p("502::flux",E);else if(b){console.log(a);let e=(e=>{for(let t=e.length-1;t>=0;t--){let o=e[t],a=/(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif|webp|bmp))/i,n=o.content.match(a);if(n)return n[0]}})(E);a=(a=a.replace(e,"")).replace("@video",""),o=await u(a.replace("undefined","").trim(),e)}else o=await p(i,E);let k={id:Date.now().toString(),content:o,role:"assistant",timestamp:Date.now()},S={...x,messages:[...x.messages,k]};c(S),t(e=>e.map(e=>e.id===d.id?S:e));let C=e.map(e=>e.id===S.id?S:e);v(C),await (0,r.zX)(S)}catch(e){n.oR.error("Failed to send message",{description:e instanceof Error?e.message:"Unable to process your message"})}finally{w(!1)}},E=async()=>{if(o&&window.confirm("Are you sure you want to delete this chat room?"))try{await (0,r.j2)(o.id);let a=e.filter(e=>e.id!==o.id);t(a),c(null),y.push("/c"),v(a),n.oR.success("Chat room deleted successfully")}catch(e){n.oR.error("Error deleting chat room",{description:e instanceof Error?e.message:"Unable to delete chat room"})}},x=async o=>{if(o&&window.confirm("Are you sure you want to delete this chat room?"))try{await (0,r.j2)(o.id);let a=e.filter(e=>e.id!==o.id);t(a),c(null),y.push("/c"),v(a),n.oR.success("Chat room deleted successfully")}catch(e){n.oR.error("Error deleting chat room",{description:e instanceof Error?e.message:"Unable to delete chat room"})}},T=async()=>{(0,g.EA)()};return{broadcastChatRoomsUpdate:v,deleteCurrentChatRoomSelect:x,setChatRooms:t,backUpChatSelect:async e=>{if(!e){n.oR.error("No chat room selected");return}let t=await (0,i.FH)();if(!t){n.oR.error("Authentication failed",{description:"Unable to verify user credentials"});return}let o=new Date,a=t&&t.expiration_date&&new Date(t.expiration_date)>o;try{if(!a){n.oR.error("Chat backup not permitted",{description:"Upgrade your plan to use this feature"});return}let o="".concat(e.name,"__").concat(e.id,".json"),r=await fetch("https://blacksourcellc.taile6b163.ts.net/chat/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:o,jsonData:e,folder:"".concat(t.created_at.toString(),"/")})});if(!r.ok)throw Error("Failed to upload chat");let i=await r.json();return n.oR.success("Chat has been successfully backed up.",{}),i}catch(e){console.error("Chat upload error:",e),n.oR.error("Failed to upload chat",{description:e instanceof Error?e.message:"Unknown error"})}},saveChatRoom:r.zX,chatRooms:e,currentChatRoom:o,isLoading:l,createNewChatRoom:k,sendMessage:C,clearChat:()=>{E()},deleteCurrentChatRoom:E,setCurrentChatRoom:c,sortChatRooms:()=>{t(e=>[...e].sort((e,t)=>parseInt(t.id)-parseInt(e.id)))},enhancePromptWithAI:S,uploadFile:T}}},41748:(e,t,o)=>{"use strict";o.d(t,{Ui:()=>c,WY:()=>d,mj:()=>l});var a=o(7478),n=o.n(a);let r="123slatt",i=e=>n().AES.encrypt(e,r).toString(),s=e=>n().AES.decrypt(e,r).toString(n().enc.Utf8),c=e=>{try{let t=i(e);localStorage.setItem("accessToken",t)}catch(e){console.error("Failed to store token",e)}},l=()=>{try{let e=localStorage.getItem("accessToken");return e?s(e):null}catch(e){return console.error("Failed to retrieve token",e),null}},d=()=>{localStorage.removeItem("accessToken")}},95676:(e,t,o)=>{"use strict";o.d(t,{AQ:()=>i,BO:()=>d,EA:()=>u,Y5:()=>l,_W:()=>c});var a=o(30814),n=o(41748),r=o(29602);let i="uploadedFiles",s=async()=>{try{let e=await (0,r.FH)();if(!e){a.oR.error("Authentication failed",{description:"Unable to verify user credentials"});return}let t=new Date;if(!(e&&e.expiration_date&&new Date(e.expiration_date)>t)){a.oR.error("This feature isn't available!",{description:"Upgrade your plan to access this feature."});return}let o=(0,n.mj)(),s=document.createElement("input");s.type="file",s.accept="*/*",s.onchange=async e=>{let t=e.target;if(t.files&&t.files.length>0){let n=t.files[0];if(!function(e){let t=e.name.toLowerCase(),o=e.type;if(e.webkitRelativePath&&""!==e.webkitRelativePath)return alert("Folder uploads are not allowed"),!1;let a=[".zip",".rar",".7z",".tar",".gz",".bz2",".deb",".rpm",".msi",".pkg",".exe",".app",".dmg",".iso",".bat",".cmd",".sh",".ps1",".apk",".ipa",".deb",".rpm",".dmg",".pkg",".msi",".exe",".cab",".vbs",".jar",".reg"].some(e=>t.endsWith(e)),n=["application/x-executable","application/x-msdownload","application/x-msi","application/x-apple-diskimage","application/vnd.debian.binary-package","application/x-rpm"].includes(o);return!a&&!n||(alert("FIle type is not permitted."),!1)}(n)){e.target.value="";return}let r=n.type.startsWith("image/"),s=n.type.startsWith("video/");try{let e;if(r||s){let t=new FileReader;t.readAsDataURL(n),e=await new Promise((e,i)=>{t.onload=async()=>{let c=t.result;try{let t,i;a.oR.info("Uploading ".concat(r?"image":"video","...")),r?(t={model:"69::google/learnlm-1.5-pro-experimental",messages:[{role:"system",content:"You are an expert visual information extractor with the following core capabilities:\n\n\uD83D\uDCCB Text Extraction Protocol:\n- Capture ALL visible text, regardless of orientation\n- Preserve exact formatting and layout\n- Transcribe text verbatim\n- Support multiple languages and scripts\n- Handle handwritten and printed text\n- Include text location and context\n\n\uD83D\uDD0D Image Information Extraction:\n- Describe image content comprehensively\n- Identify objects, people, and scenes\n- Analyze visual composition\n- Detect colors, textures, and patterns\n- Provide contextual insights\n\n\uD83D\uDCA1 Extraction Guidelines:\n1. Prioritize text readability\n2. Capture numerical and alphanumeric data\n3. Note text orientation and placement\n4. Describe text style (font, size, color)\n5. Provide linguistic and contextual analysis\n\n\uD83C\uDF10 Multilingual Support:\n- Recognize and transcribe text in multiple scripts\n- Provide translation hints if applicable\n- Detect language of text elements\n\n\uD83D\uDCCA Reporting Style:\n- Clear, concise markdown format\n- Use bullet points for structured information\n- Highlight key observations\n- Include confidence levels for extracted information"},{role:"user",content:[{type:"text",text:"Extract all text and provide comprehensive image analysis"},{type:"image_url",image_url:{url:c,detail:"high"}}]}],max_tokens:8e4,temperature:.3,top_p:.9},i="https://blacksourcellc.taile6b163.ts.net/v1/v2/ai/bylearn/completions"):s&&(t={base64:c.split(",")[1],type:n.type.split("/")[1],filename:n.name},i="https://blacksourcellc.taile6b163.ts.net/v1/v2/ai/tools/docs");let l=await fetch(i,{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json; charset=utf-8",Authorization:"auth.sessionToken "+o,Origin:"https://bytarch.sytes.net",Referer:"https://bytarch.sytes.net/","User-Agent":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36"},body:JSON.stringify(t)});if(!l.ok)throw Error("Failed to upload ".concat(r?"image":"video"));let d=await l.json();e({content:d.response||d})}catch(e){i(e)}},t.onerror=e=>i(e)})}else{let t=new FormData;t.append("file",n);let o=await fetch("https://blacksourcellc.taile6b163.ts.net/edit",{method:"POST",body:t});if(!o.ok)throw Error("Failed to upload file");e=await o.json()}let t=n.name.split(".").pop()||"",l={id:"file-".concat(Date.now(),"-").concat(Math.random().toString(36).substr(2,9)),name:n.name,type:n.type,extension:t,content:e.content,apiResponse:r||s?e.apiResponse:void 0,uploadedAt:Date.now()},d=c();d.push(l);let u=d.slice(-10);localStorage.setItem(i,JSON.stringify(u)),sessionStorage.setItem("selectedFileId",l.id),a.oR.success("".concat(r?"Image":"Video"," uploaded successfully"))}catch(t){let e=t instanceof Error?t.message:"Unable to upload file";a.oR.error("Error uploading ".concat(r?"image":"video"),{description:e})}}},s.click()}catch(e){a.oR.error("Error in file upload process",{description:e instanceof Error?e.message:"Unable to start file upload"})}},c=()=>{try{let e=localStorage.getItem(i);return(e?JSON.parse(e):[]).reverse()}catch(e){return console.error("Error loading uploaded files",e),[]}},l=e=>{try{let t=c().filter(t=>t.id!==e);localStorage.setItem(i,JSON.stringify(t))}catch(e){console.error("Error deleting uploaded file",e)}},d=e=>c().find(t=>t.id===e),u=async()=>s()},74196:(e,t,o)=>{"use strict";o.d(t,{AQ:()=>a,fH:()=>r,j2:()=>i,zX:()=>n});let a="chatRooms",n=e=>{try{let t=r().filter(t=>t.id!==e.id);t.push(e);let o=JSON.stringify(t),n=o.trim().startsWith("[")?o:"[".concat(o,"]");localStorage.setItem(a,n)}catch(e){console.error("Error saving chat room",e)}},r=()=>{try{let e=localStorage.getItem(a);if(!e)return[];let t=e.trim().startsWith("[")?e:"[".concat(e,"]");return JSON.parse(t)}catch(e){return console.error("Error loading chat rooms",e),[]}},i=e=>{try{let t=r().filter(t=>t.id!==e);localStorage.setItem(a,JSON.stringify(t))}catch(e){console.error("Error deleting chat room",e)}}},83102:(e,t,o)=>{"use strict";o.d(t,{BQ:()=>r,Kk:()=>n,Nx:()=>i,Oc:()=>c,qT:()=>a,y8:()=>s});let a={};async function n(){try{let e=await fetch("https://raw.githubusercontent.com/bytarch/bytarch.github.io/refs/heads/main/v2/assets/compiler/map.json",{});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));a=await e.json()}catch(e){return console.error("Failed to fetch compiler map:",e),[]}}let r={"free::sourceai":"SourceGPT (Free)"};async function i(){try{let e=await fetch("https://raw.githubusercontent.com/bytarch/bytarch.github.io/refs/heads/main/v2/assets/ai/genie-models.json");return r=await e.json()}catch(e){return console.error("Failed to update model names:",e),[]}}let s=[{title:"Movie Watcher",key:"movies",prompts:["What is this movie about? https://www.imdb.com/title/tt14948432/"],description:"Get detailed movie information and insights"},{title:"Image Generation",key:"imageGeneration",prompts:["Generate a realistic image of "],description:"Create AI-generated images with detailed prompts"},{title:"Internet Research",key:"search",prompts:["search the web for the latest news on in Belize"],description:"Perform comprehensive web searches"},{title:"YouTube Video Research",key:"youtube",prompts:["What is this youtube video about? https://www.youtube.com/watch?v=yGsVo0uIJVs"],description:"Analyze and get insights from YouTube videos"}],c={search:!0,movies:!0,youtube:!0,imageGeneration:!0,videoGeneration:!1}},29602:(e,t,o)=>{"use strict";o.d(t,{FH:()=>m,QM:()=>d,YS:()=>u,cn:()=>l,dE:()=>h,sr:()=>p});var a=o(43463),n=o(69795),r=o(68488),i=o.n(r),s=o(41748),c=o(30814);function l(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return(0,n.QP)((0,a.$)(t))}let d=e=>{let t=new Date,o=new Date(e),a=Math.floor((t.getTime()-o.getTime())/1e3);if(a<60)return"".concat(a," seconds ago");if(a<3600){let e=Math.floor(a/60);return"".concat(e," min").concat(e>1?"s":""," ago")}if(a<86400){let e=Math.floor(a/3600);return"".concat(e," hour").concat(e>1?"s":""," ago")}if(a<604800){let e=Math.floor(a/86400);return"".concat(e," day").concat(e>1?"s":""," ago")}if(a<2592e3){let e=Math.floor(a/604800);return"".concat(e," week").concat(e>1?"s":""," ago")}if(a<31536e3){let e=Math.floor(a/2592e3);return"".concat(e," month").concat(e>1?"s":""," ago")}{let e=Math.floor(a/31536e3);return"".concat(e," year").concat(e>1?"s":""," ago")}},u=e=>new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}),p=()=>{let e=[{light:"from-blue-200 via-blue-500 to-blue-200",dark:"from-blue-400 via-blue-500 to-blue-700"},{light:"from-green-200 via-emerald-500 to-green-200",dark:"from-green-400 via-emerald-500 to-green-700"},{light:"from-purple-200 via-violet-500 to-purple-200",dark:"from-purple-400 via-violet-500 to-purple-700"},{light:"from-teal-200 via-cyan-500 to-teal-200",dark:"from-teal-400 via-cyan-500 to-teal-700"},{light:"from-rose-200 via-pink-500 to-rose-200",dark:"from-rose-400 via-pink-500 to-rose-700"}];return e[Math.floor(Math.random()*e.length)]};async function m(){try{let e=(0,s.mj)();return e||console.error("Access Token not found!"),i().decode(e,"bytarch40269erin4l").userInfo}catch(e){return console.error("Error in verifyUser:",e),null}}function h(){c.oR.info("This feature is coming soon")}}}]);