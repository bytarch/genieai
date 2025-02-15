"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6094],{"(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-TMUBEWPD.mjs":(e,t,a)=>{function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs").K2)(i,"populateCommonDb")},"(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/pieDiagram-YF2LJOPJ.mjs":(e,t,a)=>{a.d(t,{diagram:()=>y});var i=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-TMUBEWPD.mjs"),r=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs"),s=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-EJ4ZWXGL.mjs"),l=a("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs"),o=a("(app-pages-browser)/./node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs"),d=a("(app-pages-browser)/./node_modules/d3/src/index.js"),n=l.UI.pie,p={sections:new Map,showData:!1,config:n},c=p.sections,m=p.showData,u=structuredClone(n),g=(0,l.K2)(()=>structuredClone(u),"getConfig"),h=(0,l.K2)(()=>{c=new Map,m=p.showData,(0,l.IU)()},"clear"),w=(0,l.K2)(({label:e,value:t})=>{c.has(e)||(c.set(e,t),l.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),f=(0,l.K2)(()=>c,"getSections"),k=(0,l.K2)(e=>{m=e},"setShowData"),x=(0,l.K2)(()=>m,"getShowData"),D={getConfig:g,clear:h,setDiagramTitle:l.ke,getDiagramTitle:l.ab,setAccTitle:l.SV,getAccTitle:l.iN,setAccDescription:l.EI,getAccDescription:l.m7,addSection:w,getSections:f,setShowData:k,getShowData:x},S=(0,l.K2)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),T={parse:(0,l.K2)(async e=>{let t=await (0,o.qg)("pie",e);l.Rm.debug(t),S(t,D)},"parse")},$=(0,l.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),b=(0,l.K2)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,d.rLf)().value(e=>e.value)(t)},"createPieArcs"),y={parser:T,db:D,renderer:{draw:(0,l.K2)((e,t,a,i)=>{l.Rm.debug("rendering pie chart\n"+e);let o=i.db,n=(0,l.D7)(),p=(0,r.$t)(o.getConfig(),n.pie),c=(0,s.D)(t),m=c.append("g");m.attr("transform","translate(225,225)");let{themeVariables:u}=n,[g]=(0,r.I5)(u.pieOuterStrokeWidth);g??=2;let h=p.textPosition,w=(0,d.JLW)().innerRadius(0).outerRadius(185),f=(0,d.JLW)().innerRadius(185*h).outerRadius(185*h);m.append("circle").attr("cx",0).attr("cy",0).attr("r",185+g/2).attr("class","pieOuterCircle");let k=o.getSections(),x=b(k),D=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],S=(0,d.UMr)(D);m.selectAll("mySlices").data(x).enter().append("path").attr("d",w).attr("fill",e=>S(e.data.label)).attr("class","pieCircle");let T=0;k.forEach(e=>{T+=e}),m.selectAll("mySlices").data(x).enter().append("text").text(e=>(e.data.value/T*100).toFixed(0)+"%").attr("transform",e=>"translate("+f.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),m.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let $=m.selectAll(".legend").data(S.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*S.domain().length/2)+")");$.append("rect").attr("width",18).attr("height",18).style("fill",S).style("stroke",S),$.data(x).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return o.getShowData()?`${t} [${a}]`:t});let y=512+Math.max(...$.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));c.attr("viewBox",`0 0 ${y} 450`),(0,l.a$)(c,450,y,p.useMaxWidth)},"draw")},styles:$}}}]);