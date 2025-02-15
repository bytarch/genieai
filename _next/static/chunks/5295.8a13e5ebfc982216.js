(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5295],{"(app-pages-browser)/./node_modules/dayjs/plugin/advancedFormat.js":function(t){var e;e=function(){return function(t,e){var i=e.prototype,s=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return s.bind(this)(t);var r=this.$utils(),n=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return s.bind(this)(n)}}},t.exports=e()},"(app-pages-browser)/./node_modules/dayjs/plugin/customParseFormat.js":function(t){var e;e=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,s=/\d\d/,r=/\d\d?/,n=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},c=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],d=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var i,s=a.meridiem;if(s){for(var r=1;r<=24;r+=1)if(t.indexOf(s(r,0,e))>-1){i=r>12;break}}else i=t===(e?"pm":"PM");return i},h={A:[n,function(t){this.afternoon=u(t,!1)}],a:[n,function(t){this.afternoon=u(t,!0)}],Q:[i,function(t){this.month=3*(t-1)+1}],S:[i,function(t){this.milliseconds=100*+t}],SS:[s,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,c("seconds")],ss:[r,c("seconds")],m:[r,c("minutes")],mm:[r,c("minutes")],H:[r,c("hours")],h:[r,c("hours")],HH:[r,c("hours")],hh:[r,c("hours")],D:[r,c("day")],DD:[s,c("day")],Do:[n,function(t){var e=a.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var s=1;s<=31;s+=1)e(s).replace(/\[|\]/g,"")===t&&(this.day=s)}],w:[r,c("week")],ww:[s,c("week")],M:[r,c("month")],MM:[s,c("month")],MMM:[n,function(t){var e=d("months"),i=(d("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[n,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,c("year")],YY:[s,function(t){this.year=o(t)}],YYYY:[/\d{4}/,c("year")],Z:l,ZZ:l};return function(i,s,r){r.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(o=i.parseTwoDigitYear);var n=s.prototype,c=n.parse;n.parse=function(i){var s=i.date,n=i.utc,o=i.args;this.$u=n;var l=o[1];if("string"==typeof l){var d=!0===o[2],u=!0===o[3],f=o[2];u&&(f=o[2]),a=this.$locale(),!d&&f&&(a=r.Ls[f]),this.$d=function(i,s,r,n){try{if(["x","X"].indexOf(s)>-1)return new Date(("X"===s?1e3:1)*i);var o=(function(i){var s,r;s=i,r=a&&a.formats;for(var n=(i=s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,i,s){var n=s&&s.toUpperCase();return i||r[s]||t[s]||r[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(e),o=n.length,c=0;c<o;c+=1){var l=n[c],d=h[l],u=d&&d[0],f=d&&d[1];n[c]=f?{regex:u,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,s=0;i<o;i+=1){var r=n[i];if("string"==typeof r)s+=r.length;else{var a=r.regex,c=r.parser,l=t.slice(s),d=a.exec(l)[0];c.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(s)(i),c=o.year,l=o.month,d=o.day,u=o.hours,f=o.minutes,m=o.seconds,y=o.milliseconds,k=o.zone,p=o.week,g=new Date,b=d||(c||l?1:g.getDate()),v=c||g.getFullYear(),T=0;c&&!l||(T=l>0?l-1:g.getMonth());var x,w=u||0,_=f||0,D=m||0,$=y||0;return k?new Date(Date.UTC(v,T,b,w,_,D,$+60*k.offset*1e3)):r?new Date(Date.UTC(v,T,b,w,_,D,$)):(x=new Date(v,T,b,w,_,D,$),p&&(x=n(x).week(p).toDate()),x)}catch(t){return new Date("")}}(s,l,n,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(d||u)&&s!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var m=l.length,y=1;y<=m;y+=1){o[1]=l[y-1];var k=r.apply(this,o);if(k.isValid()){this.$d=k.$d,this.$L=k.$L,this.init();break}y===m&&(this.$d=new Date(""))}else c.call(this,i)}}},t.exports=e()},"(app-pages-browser)/./node_modules/dayjs/plugin/isoWeek.js":function(t){var e;e=function(){return function(t,e,i){var s=function(t){return t.add(4-t.isoWeekday(),"day")},r=e.prototype;r.isoWeekYear=function(){return s(this).year()},r.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,r,n,a=s(this),o=(e=this.isoWeekYear(),n=4-(r=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(n+=7),r.add(n,"day"));return a.diff(o,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var n=r.startOf;r.startOf=function(t,e){var i=this.$utils(),s=!!i.u(e)||e;return"isoweek"===i.p(t)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(t,e)}}},t.exports=e()},"(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/ganttDiagram-NTVNEXSI.mjs":(t,e,i)=>{"use strict";i.d(e,{diagram:()=>tY});var s,r,n,a=i("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-7DKRZKHE.mjs"),o=i("(app-pages-browser)/./node_modules/mermaid/dist/chunks/mermaid.core/chunk-6DBFFHIP.mjs"),c=i("(app-pages-browser)/./node_modules/@braintree/sanitize-url/dist/index.js"),l=i("(app-pages-browser)/./node_modules/dayjs/dayjs.min.js"),d=i("(app-pages-browser)/./node_modules/dayjs/plugin/isoWeek.js"),u=i("(app-pages-browser)/./node_modules/dayjs/plugin/customParseFormat.js"),h=i("(app-pages-browser)/./node_modules/dayjs/plugin/advancedFormat.js"),f=i("(app-pages-browser)/./node_modules/d3/src/index.js"),m=function(){var t=(0,o.K2)(function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],r=[1,28],n=[1,29],a=[1,30],c=[1,31],l=[1,32],d=[1,33],u=[1,34],h=[1,9],f=[1,10],m=[1,11],y=[1,12],k=[1,13],p=[1,14],g=[1,15],b=[1,16],v=[1,19],T=[1,20],x=[1,21],w=[1,22],_=[1,23],D=[1,25],$=[1,35],C={trace:(0,o.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,o.K2)(function(t,e,i,s,r,n,a){var o=n.length-1;switch(r){case 1:return n[o-1];case 2:case 6:case 7:this.$=[];break;case 3:n[o-1].push(n[o]),this.$=n[o-1];break;case 4:case 5:this.$=n[o];break;case 8:s.setWeekday("monday");break;case 9:s.setWeekday("tuesday");break;case 10:s.setWeekday("wednesday");break;case 11:s.setWeekday("thursday");break;case 12:s.setWeekday("friday");break;case 13:s.setWeekday("saturday");break;case 14:s.setWeekday("sunday");break;case 15:s.setWeekend("friday");break;case 16:s.setWeekend("saturday");break;case 17:s.setDateFormat(n[o].substr(11)),this.$=n[o].substr(11);break;case 18:s.enableInclusiveEndDates(),this.$=n[o].substr(18);break;case 19:s.TopAxis(),this.$=n[o].substr(8);break;case 20:s.setAxisFormat(n[o].substr(11)),this.$=n[o].substr(11);break;case 21:s.setTickInterval(n[o].substr(13)),this.$=n[o].substr(13);break;case 22:s.setExcludes(n[o].substr(9)),this.$=n[o].substr(9);break;case 23:s.setIncludes(n[o].substr(9)),this.$=n[o].substr(9);break;case 24:s.setTodayMarker(n[o].substr(12)),this.$=n[o].substr(12);break;case 27:s.setDiagramTitle(n[o].substr(6)),this.$=n[o].substr(6);break;case 28:this.$=n[o].trim(),s.setAccTitle(this.$);break;case 29:case 30:this.$=n[o].trim(),s.setAccDescription(this.$);break;case 31:s.addSection(n[o].substr(8)),this.$=n[o].substr(8);break;case 33:s.addTask(n[o-1],n[o]),this.$="task";break;case 34:this.$=n[o-1],s.setClickEvent(n[o-1],n[o],null);break;case 35:this.$=n[o-2],s.setClickEvent(n[o-2],n[o-1],n[o]);break;case 36:this.$=n[o-2],s.setClickEvent(n[o-2],n[o-1],null),s.setLink(n[o-2],n[o]);break;case 37:this.$=n[o-3],s.setClickEvent(n[o-3],n[o-2],n[o-1]),s.setLink(n[o-3],n[o]);break;case 38:this.$=n[o-2],s.setClickEvent(n[o-2],n[o],null),s.setLink(n[o-2],n[o-1]);break;case 39:this.$=n[o-3],s.setClickEvent(n[o-3],n[o-1],n[o]),s.setLink(n[o-3],n[o-2]);break;case 40:this.$=n[o-1],s.setLink(n[o-1],n[o]);break;case 41:case 47:this.$=n[o-1]+" "+n[o];break;case 42:case 43:case 45:this.$=n[o-2]+" "+n[o-1]+" "+n[o];break;case 44:case 46:this.$=n[o-3]+" "+n[o-2]+" "+n[o-1]+" "+n[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:r,15:n,16:a,17:c,18:l,19:18,20:d,21:u,22:h,23:f,24:m,25:y,26:k,27:p,28:g,29:b,30:v,31:T,33:x,35:w,36:_,37:24,38:D,40:$},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:s,14:r,15:n,16:a,17:c,18:l,19:18,20:d,21:u,22:h,23:f,24:m,25:y,26:k,27:p,28:g,29:b,30:v,31:T,33:x,35:w,36:_,37:24,38:D,40:$},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,o.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,o.K2)(function(t){var e=this,i=[0],s=[],r=[null],n=[],a=this.table,c="",l=0,d=0,u=0,h=n.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(m.yy[y]=this.yy[y]);f.setInput(t,m.yy),m.yy.lexer=f,m.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var k=f.yylloc;n.push(k);var p=f.options&&f.options.ranges;function g(){var t;return"number"!=typeof(t=s.pop()||f.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.K2)(function(t){i.length=i.length-2*t,r.length=r.length-t,n.length=n.length-t},"popStack"),(0,o.K2)(g,"lex");for(var b,v,T,x,w,_,D,$,C,K={};;){if(T=i[i.length-1],this.defaultActions[T]?x=this.defaultActions[T]:(null==b&&(b=g()),x=a[T]&&a[T][b]),void 0===x||!x.length||!x[0]){var S="";for(_ in C=[],a[T])this.terminals_[_]&&_>2&&C.push("'"+this.terminals_[_]+"'");S=f.showPosition?"Parse error on line "+(l+1)+":\n"+f.showPosition()+"\nExpecting "+C.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(S,{text:f.match,token:this.terminals_[b]||b,line:f.yylineno,loc:k,expected:C})}if(x[0]instanceof Array&&x.length>1)throw Error("Parse Error: multiple actions possible at state: "+T+", token: "+b);switch(x[0]){case 1:i.push(b),r.push(f.yytext),n.push(f.yylloc),i.push(x[1]),b=null,v?(b=v,v=null):(d=f.yyleng,c=f.yytext,l=f.yylineno,k=f.yylloc,u>0&&u--);break;case 2:if(D=this.productions_[x[1]][1],K.$=r[r.length-D],K._$={first_line:n[n.length-(D||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(D||1)].first_column,last_column:n[n.length-1].last_column},p&&(K._$.range=[n[n.length-(D||1)].range[0],n[n.length-1].range[1]]),void 0!==(w=this.performAction.apply(K,[c,d,l,m.yy,x[1],r,n].concat(h))))return w;D&&(i=i.slice(0,-1*D*2),r=r.slice(0,-1*D),n=n.slice(0,-1*D)),i.push(this.productions_[x[1]][0]),r.push(K.$),n.push(K._$),$=a[i[i.length-2]][i[i.length-1]],i.push($);break;case 3:return!0}}return!0},"parse")},K={EOF:1,parseError:(0,o.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,o.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,o.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,o.K2)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,o.K2)(function(){return this._more=!0,this},"more"),reject:(0,o.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,o.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,o.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,o.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,o.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,o.K2)(function(t,e){var i,s,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var n in r)this[n]=r[n];return!1},"test_match"),next:(0,o.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,r=this._currentRules(),n=0;n<r.length;n++)if((i=this._input.match(this.rules[r[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[n])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,o.K2)(function(){return this.next()||this.lex()},"lex"),begin:(0,o.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,o.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,o.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,o.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,o.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,o.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.K2)(function(t,e,i,s){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};function S(){this.yy={}}return C.lexer=K,(0,o.K2)(S,"Parser"),S.prototype=C,C.Parser=S,new S}();m.parser=m,l.extend(d),l.extend(u),l.extend(h);var y={friday:5,saturday:6},k="",p="",g=void 0,b="",v=[],T=[],x=new Map,w=[],_=[],D="",$="",C=["active","done","crit","milestone"],K=[],S=!1,E=!1,M="sunday",A="saturday",Y=0,L=(0,o.K2)(function(){w=[],_=[],D="",K=[],th=0,s=void 0,r=void 0,tk=[],k="",p="",$="",g=void 0,b="",v=[],T=[],S=!1,E=!1,Y=0,x=new Map,(0,o.IU)(),M="sunday",A="saturday"},"clear"),I=(0,o.K2)(function(t){p=t},"setAxisFormat"),W=(0,o.K2)(function(){return p},"getAxisFormat"),F=(0,o.K2)(function(t){g=t},"setTickInterval"),O=(0,o.K2)(function(){return g},"getTickInterval"),P=(0,o.K2)(function(t){b=t},"setTodayMarker"),j=(0,o.K2)(function(){return b},"getTodayMarker"),B=(0,o.K2)(function(t){k=t},"setDateFormat"),z=(0,o.K2)(function(){S=!0},"enableInclusiveEndDates"),N=(0,o.K2)(function(){return S},"endDatesAreInclusive"),G=(0,o.K2)(function(){E=!0},"enableTopAxis"),H=(0,o.K2)(function(){return E},"topAxisEnabled"),R=(0,o.K2)(function(t){$=t},"setDisplayMode"),U=(0,o.K2)(function(){return $},"getDisplayMode"),V=(0,o.K2)(function(){return k},"getDateFormat"),Z=(0,o.K2)(function(t){v=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),X=(0,o.K2)(function(){return v},"getIncludes"),q=(0,o.K2)(function(t){T=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),Q=(0,o.K2)(function(){return T},"getExcludes"),J=(0,o.K2)(function(){return x},"getLinks"),tt=(0,o.K2)(function(t){D=t,w.push(t)},"addSection"),te=(0,o.K2)(function(){return w},"getSections"),ti=(0,o.K2)(function(){let t=tT(),e=0;for(;!t&&e<10;)t=tT(),e++;return _=tk},"getTasks"),ts=(0,o.K2)(function(t,e,i,s){return!s.includes(t.format(e.trim()))&&(!!(i.includes("weekends")&&(t.isoWeekday()===y[A]||t.isoWeekday()===y[A]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},"isInvalidDate"),tr=(0,o.K2)(function(t){M=t},"setWeekday"),tn=(0,o.K2)(function(){return M},"getWeekday"),ta=(0,o.K2)(function(t){A=t},"setWeekend"),to=(0,o.K2)(function(t,e,i,s){let r;if(!i.length||t.manualEndTime)return;let[n,a]=tc((t.startTime instanceof Date?l(t.startTime):l(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?l(t.endTime):l(t.endTime,e,!0),e,i,s);t.endTime=n.toDate(),t.renderEndTime=a},"checkTaskDates"),tc=(0,o.K2)(function(t,e,i,s,r){let n=!1,a=null;for(;t<=e;)n||(a=e.toDate()),(n=ts(t,i,s,r))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},"fixTaskDates"),tl=(0,o.K2)(function(t,e,i){i=i.trim();let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==s){let t=null;for(let e of s.groups.ids.split(" ")){let i=tb(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let r=l(i,e.trim(),!0);if(r.isValid())return r.toDate();{o.Rm.debug("Invalid date:"+i),o.Rm.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),td=(0,o.K2)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),tu=(0,o.K2)(function(t,e,i,s=!1){i=i.trim();let r=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null;for(let e of r.groups.ids.split(" ")){let i=tb(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let n=l(i,e.trim(),!0);if(n.isValid())return s&&(n=n.add(1,"d")),n.toDate();let a=l(t),[o,c]=td(i);if(!Number.isNaN(o)){let t=a.add(o,c);t.isValid()&&(a=t)}return a.toDate()},"getEndDate"),th=0,tf=(0,o.K2)(function(t){return void 0===t?"task"+(th+=1):t},"parseId"),tm=(0,o.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),s={};tS(i,s,C);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let r="";switch(i.length){case 1:s.id=tf(),s.startTime=t.endTime,r=i[0];break;case 2:s.id=tf(),s.startTime=tl(void 0,k,i[0]),r=i[1];break;case 3:s.id=tf(i[0]),s.startTime=tl(void 0,k,i[1]),r=i[2]}return r&&(s.endTime=tu(s.startTime,k,r,S),s.manualEndTime=l(r,"YYYY-MM-DD",!0).isValid(),to(s,k,T,v)),s},"compileData"),ty=(0,o.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),s={};tS(i,s,C);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:s.id=tf(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=tf(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=tf(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]}}return s},"parseData"),tk=[],tp={},tg=(0,o.K2)(function(t,e){let i={section:D,type:D,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=ty(r,e);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=r,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.order=Y,Y++;let n=tk.push(i);r=i.id,tp[i.id]=n-1},"addTask"),tb=(0,o.K2)(function(t){return tk[tp[t]]},"findTaskById"),tv=(0,o.K2)(function(t,e){let i={section:D,type:D,description:t,task:t,classes:[]},r=tm(s,e);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,s=i,_.push(i)},"addTaskOrg"),tT=(0,o.K2)(function(){let t=(0,o.K2)(function(t){let e=tk[t],i="";switch(tk[t].raw.startTime.type){case"prevTaskEnd":{let t=tb(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=tl(void 0,k,tk[t].raw.startTime.startData))&&(tk[t].startTime=i)}return tk[t].startTime&&(tk[t].endTime=tu(tk[t].startTime,k,tk[t].raw.endTime.data,S),tk[t].endTime&&(tk[t].processed=!0,tk[t].manualEndTime=l(tk[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),to(tk[t],k,T,v))),tk[t].processed},"compileTask"),e=!0;for(let[i,s]of tk.entries())t(i),e=e&&s.processed;return e},"compileTasks"),tx=(0,o.K2)(function(t,e){let i=e;"loose"!==(0,o.D7)().securityLevel&&(i=(0,c.J)(e)),t.split(",").forEach(function(t){void 0!==tb(t)&&(tD(t,()=>{window.open(i,"_self")}),x.set(t,i))}),tw(t,"clickable")},"setLink"),tw=(0,o.K2)(function(t,e){t.split(",").forEach(function(t){let i=tb(t);void 0!==i&&i.classes.push(e)})},"setClass"),t_=(0,o.K2)(function(t,e,i){if("loose"!==(0,o.D7)().securityLevel||void 0===e)return;let s=[];if("string"==typeof i){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<s.length;t++){let e=s[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),s[t]=e}}0===s.length&&s.push(t),void 0!==tb(t)&&tD(t,()=>{a._K.runFunc(e,...s)})},"setClickFun"),tD=(0,o.K2)(function(t,e){K.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},"pushFun"),t$=(0,o.K2)(function(t,e,i){t.split(",").forEach(function(t){t_(t,e,i)}),tw(t,"clickable")},"setClickEvent"),tC=(0,o.K2)(function(t){K.forEach(function(e){e(t)})},"bindFunctions"),tK={getConfig:(0,o.K2)(()=>(0,o.D7)().gantt,"getConfig"),clear:L,setDateFormat:B,getDateFormat:V,enableInclusiveEndDates:z,endDatesAreInclusive:N,enableTopAxis:G,topAxisEnabled:H,setAxisFormat:I,getAxisFormat:W,setTickInterval:F,getTickInterval:O,setTodayMarker:P,getTodayMarker:j,setAccTitle:o.SV,getAccTitle:o.iN,setDiagramTitle:o.ke,getDiagramTitle:o.ab,setDisplayMode:R,getDisplayMode:U,setAccDescription:o.EI,getAccDescription:o.m7,addSection:tt,getSections:te,getTasks:ti,addTask:tg,findTaskById:tb,addTaskOrg:tv,setIncludes:Z,getIncludes:X,setExcludes:q,getExcludes:Q,setClickEvent:t$,setLink:tx,getLinks:J,bindFunctions:tC,parseDuration:td,isInvalidDate:ts,setWeekday:tr,getWeekday:tn,setWeekend:ta};function tS(t,e,i){let s=!0;for(;s;)s=!1,i.forEach(function(i){let r=RegExp("^\\s*"+i+"\\s*$");t[0].match(r)&&(e[i]=!0,t.shift(1),s=!0)})}(0,o.K2)(tS,"getTaskTags");var tE=(0,o.K2)(function(){o.Rm.debug("Something is calling, setConf, remove the call")},"setConf"),tM={monday:f.ABi,tuesday:f.PGu,wednesday:f.GuW,thursday:f.Mol,friday:f.TUC,saturday:f.rGn,sunday:f.YPH},tA=(0,o.K2)((t,e)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),r=0;for(let t of s)for(let s=0;s<i.length;s++)if(t.startTime>=i[s]){i[s]=t.endTime,t.order=s+e,s>r&&(r=s);break}return r},"getMaxIntersections"),tY={parser:m,db:tK,renderer:{setConf:tE,draw:(0,o.K2)(function(t,e,i,s){let r;let a=(0,o.D7)().gantt,c=(0,o.D7)().securityLevel;"sandbox"===c&&(r=(0,f.Ltv)("#i"+e));let d="sandbox"===c?(0,f.Ltv)(r.nodes()[0].contentDocument.body):(0,f.Ltv)("body"),u="sandbox"===c?r.nodes()[0].contentDocument:document,h=u.getElementById(e);void 0===(n=h.parentElement.offsetWidth)&&(n=1200),void 0!==a.useWidth&&(n=a.useWidth);let m=s.db.getTasks(),y=[];for(let t of m)y.push(t.type);y=C(y);let k={},p=2*a.topPadding;if("compact"===s.db.getDisplayMode()||"compact"===a.displayMode){let t={};for(let e of m)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let s=tA(t[i],e)+1;e+=s,p+=s*(a.barHeight+a.barGap),k[i]=s}}else for(let t of(p+=m.length*(a.barHeight+a.barGap),y))k[t]=m.filter(e=>e.type===t).length;h.setAttribute("viewBox","0 0 "+n+" "+p);let g=d.select(`[id="${e}"]`),b=(0,f.w7C)().domain([(0,f.jkA)(m,function(t){return t.startTime}),(0,f.T9B)(m,function(t){return t.endTime})]).rangeRound([0,n-a.leftPadding-a.rightPadding]);function v(t,e){let i=t.startTime,s=e.startTime,r=0;return i>s?r=1:i<s&&(r=-1),r}function T(t,e,i){let r=a.barHeight,n=r+a.barGap,o=a.topPadding,c=a.leftPadding,l=(0,f.m4Y)().domain([0,y.length]).range(["#00B9FA","#F95002"]).interpolate(f.bEH);w(n,o,c,e,i,t,s.db.getExcludes(),s.db.getIncludes()),_(c,o,e,i),x(t,n,o,c,r,l,e,i),D(n,o,c,r,l),$(c,o,e,i)}function x(t,i,r,n,c,l,d){let u=[...new Set(t.map(t=>t.order))].map(e=>t.find(t=>t.order===e));g.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+r-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of y.entries())if(t.type===i)return"section section"+e%a.numberSectionStyles;return"section section0"});let h=g.append("g").selectAll("rect").data(t).enter(),m=s.db.getLinks();if(h.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?b(t.startTime)+n+.5*(b(t.endTime)-b(t.startTime))-.5*c:b(t.startTime)+n}).attr("y",function(t,e){return t.order*i+r}).attr("width",function(t){return t.milestone?c:b(t.renderEndTime||t.endTime)-b(t.startTime)}).attr("height",c).attr("transform-origin",function(t,e){return e=t.order,(b(t.startTime)+n+.5*(b(t.endTime)-b(t.startTime))).toString()+"px "+(e*i+r+.5*c).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,s]of y.entries())t.type===s&&(i=e%a.numberSectionStyles);let s="";return t.active?t.crit?s+=" activeCrit":s=" active":t.done?s=t.crit?" doneCrit":" done":t.crit&&(s+=" crit"),0===s.length&&(s=" task"),t.milestone&&(s=" milestone "+s),s+=i,"task"+(s+=" "+e)}),h.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let e=b(t.startTime),i=b(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(b(t.endTime)-b(t.startTime))-.5*c),t.milestone&&(i=e+c);let s=this.getBBox().width;return s>i-e?i+s+1.5*a.leftPadding>d?e+n-5:i+n+5:(i-e)/2+e+n}).attr("y",function(t,e){return t.order*i+a.barHeight/2+(a.fontSize/2-2)+r}).attr("text-height",c).attr("class",function(t){let e=b(t.startTime),i=b(t.endTime);t.milestone&&(i=e+c);let s=this.getBBox().width,r="";t.classes.length>0&&(r=t.classes.join(" "));let n=0;for(let[e,i]of y.entries())t.type===i&&(n=e%a.numberSectionStyles);let o="";return(t.active&&(o=t.crit?"activeCritText"+n:"activeText"+n),t.done?o=t.crit?o+" doneCritText"+n:o+" doneText"+n:t.crit&&(o=o+" critText"+n),t.milestone&&(o+=" milestoneText"),s>i-e)?i+s+1.5*a.leftPadding>d?r+" taskTextOutsideLeft taskTextOutside"+n+" "+o:r+" taskTextOutsideRight taskTextOutside"+n+" "+o+" width-"+s:r+" taskText taskText"+n+" "+o+" width-"+s}),"sandbox"===(0,o.D7)().securityLevel){let t=(0,f.Ltv)("#i"+e).nodes()[0].contentDocument;h.filter(function(t){return m.has(t.id)}).each(function(e){var i=t.querySelector("#"+e.id),s=t.querySelector("#"+e.id+"-text");let r=i.parentNode;var n=t.createElement("a");n.setAttribute("xlink:href",m.get(e.id)),n.setAttribute("target","_top"),r.appendChild(n),n.appendChild(i),n.appendChild(s)})}}function w(t,e,i,r,n,c,d,u){let h,f;if(0===d.length&&0===u.length)return;for(let{startTime:t,endTime:e}of c)(void 0===h||t<h)&&(h=t),(void 0===f||e>f)&&(f=e);if(!h||!f)return;if(l(f).diff(l(h),"year")>5){o.Rm.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let m=s.db.getDateFormat(),y=[],k=null,p=l(h);for(;p.valueOf()<=f;)s.db.isInvalidDate(p,m,d,u)?k?k.end=p:k={start:p,end:p}:k&&(y.push(k),k=null),p=p.add(1,"d");g.append("g").selectAll("rect").data(y).enter().append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return b(t.start)+i}).attr("y",a.gridLineStartPadding).attr("width",function(t){return b(t.end.add(1,"day"))-b(t.start)}).attr("height",n-e-a.gridLineStartPadding).attr("transform-origin",function(e,s){return(b(e.start)+i+.5*(b(e.end)-b(e.start))).toString()+"px "+(s*t+.5*n).toString()+"px"}).attr("class","exclude-range")}function _(t,e,i,r){let n=(0,f.l78)(b).tickSize(-r+e+a.gridLineStartPadding).tickFormat((0,f.DCK)(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d")),o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(null!==o){let t=o[1],e=o[2],i=s.db.getWeekday()||a.weekday;switch(e){case"millisecond":n.ticks(f.t6C.every(t));break;case"second":n.ticks(f.ucG.every(t));break;case"minute":n.ticks(f.wXd.every(t));break;case"hour":n.ticks(f.Agd.every(t));break;case"day":n.ticks(f.UAC.every(t));break;case"week":n.ticks(tM[i].every(t));break;case"month":n.ticks(f.Ui6.every(t))}}if(g.append("g").attr("class","grid").attr("transform","translate("+t+", "+(r-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let i=(0,f.tlR)(b).tickSize(-r+e+a.gridLineStartPadding).tickFormat((0,f.DCK)(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(null!==o){let t=o[1],e=o[2],r=s.db.getWeekday()||a.weekday;switch(e){case"millisecond":i.ticks(f.t6C.every(t));break;case"second":i.ticks(f.ucG.every(t));break;case"minute":i.ticks(f.wXd.every(t));break;case"hour":i.ticks(f.Agd.every(t));break;case"day":i.ticks(f.UAC.every(t));break;case"week":i.ticks(tM[r].every(t));break;case"month":i.ticks(f.Ui6.every(t))}}g.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function D(t,e){let i=0,s=Object.keys(k).map(t=>[t,k[t]]);g.append("g").selectAll("text").data(s).enter().append(function(t){let e=t[0].split(o.Y2.lineBreakRegex),i=-(e.length-1)/2,s=u.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,r]of(s.setAttribute("dy",i+"em"),e.entries())){let e=u.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=r,s.appendChild(e)}return s}).attr("x",10).attr("y",function(r,n){if(!(n>0))return r[1]*t/2+e;for(let a=0;a<n;a++)return i+=s[n-1][1],r[1]*t/2+i*t+e}).attr("font-size",a.sectionFontSize).attr("class",function(t){for(let[e,i]of y.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"})}function $(t,e,i,r){let n=s.db.getTodayMarker();if("off"===n)return;let o=g.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",b(c)+t).attr("x2",b(c)+t).attr("y1",a.titleTopMargin).attr("y2",r-a.titleTopMargin).attr("class","today"),""!==n&&l.attr("style",n.replace(/,/g,";"))}function C(t){let e={},i=[];for(let s=0,r=t.length;s<r;++s)Object.prototype.hasOwnProperty.call(e,t[s])||(e[t[s]]=!0,i.push(t[s]));return i}(0,o.K2)(v,"taskCompare"),m.sort(v),T(m,n,p),(0,o.a$)(g,p,n,a.useMaxWidth),g.append("text").text(s.db.getDiagramTitle()).attr("x",n/2).attr("y",a.titleTopMargin).attr("class","titleText"),(0,o.K2)(T,"makeGantt"),(0,o.K2)(x,"drawRects"),(0,o.K2)(w,"drawExcludeDays"),(0,o.K2)(_,"makeGrid"),(0,o.K2)(D,"vertLabels"),(0,o.K2)($,"drawToday"),(0,o.K2)(C,"checkUnique")},"draw")},styles:(0,o.K2)(t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles")}}}]);