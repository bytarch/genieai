"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7606],{"(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-TMUBEWPD.mjs":(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs").K2)(r,"populateCommonDb")},"(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/diagram-QW4FP2JN.mjs":(t,e,a)=>{a.d(e,{diagram:()=>x});var r=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-TMUBEWPD.mjs"),o=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs"),l=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-EJ4ZWXGL.mjs"),s=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs"),i=a("(app-pages-browser)/./node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs"),c={packet:[]},d=structuredClone(c),n=s.UI.packet,p=(0,s.K2)(()=>{let t=(0,o.$t)({...n,...(0,s.zj)().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),m=(0,s.K2)(()=>d.packet,"getPacket"),k={pushWord:(0,s.K2)(t=>{t.length>0&&d.packet.push(t)},"pushWord"),getPacket:m,getConfig:p,clear:(0,s.K2)(()=>{(0,s.IU)(),d=structuredClone(c)},"clear"),setAccTitle:s.SV,getAccTitle:s.iN,setDiagramTitle:s.ke,getDiagramTitle:s.ab,getAccDescription:s.m7,setAccDescription:s.EI},b=(0,s.K2)(t=>{(0,r.S)(t,k);let e=-1,a=[],o=1,{bitsPerRow:l}=k.getConfig();for(let{start:r,end:i,label:c}of t.blocks){if(i&&i<r)throw Error(`Packet block ${r} - ${i} is invalid. End must be greater than start.`);if(r!==e+1)throw Error(`Packet block ${r} - ${i??r} is not contiguous. It should start from ${e+1}.`);for(e=i??r,s.Rm.debug(`Packet block ${r} - ${e} with label ${c}`);a.length<=l+1&&k.getPacket().length<1e4;){let[t,e]=u({start:r,end:i,label:c},o,l);if(a.push(t),t.end+1===o*l&&(k.pushWord(a),a=[],o++),!e)break;({start:r,end:i,label:c}=e)}}k.pushWord(a)},"populate"),u=(0,s.K2)((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),h={parse:(0,s.K2)(async t=>{let e=await (0,i.qg)("packet",t);s.Rm.debug(e),b(e)},"parse")},g=(0,s.K2)((t,e,a,r)=>{let o=r.db,i=o.getConfig(),{rowHeight:c,paddingY:d,bitWidth:n,bitsPerRow:p}=i,m=o.getPacket(),k=o.getDiagramTitle(),b=c+d,u=b*(m.length+1)-(k?0:c),h=n*p+2,g=(0,l.D)(e);for(let[t,e]of(g.attr("viewbox",`0 0 ${h} ${u}`),(0,s.a$)(g,u,h,i.useMaxWidth),m.entries()))f(g,e,t,i);g.append("text").text(k).attr("x",h/2).attr("y",u-b/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),f=(0,s.K2)((t,e,a,{rowHeight:r,paddingX:o,paddingY:l,bitWidth:s,bitsPerRow:i,showBits:c})=>{let d=t.append("g"),n=a*(r+l)+l;for(let t of e){let e=t.start%i*s+1,a=(t.end-t.start+1)*s-o;if(d.append("rect").attr("x",e).attr("y",n).attr("width",a).attr("height",r).attr("class","packetBlock"),d.append("text").attr("x",e+a/2).attr("y",n+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!c)continue;let l=t.end===t.start,p=n-2;d.append("text").attr("x",e+(l?a/2:0)).attr("y",p).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(t.start),l||d.append("text").attr("x",e+a).attr("y",p).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),$={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},x={parser:h,db:k,renderer:{draw:g},styles:(0,s.K2)(({packet:t}={})=>{let e=(0,o.$t)($,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);