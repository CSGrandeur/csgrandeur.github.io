const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-p3vp6_c-.js","assets/modules/shiki-DeTF74yl.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-CFZR7p0y.js","assets/modules/vue-CGb69BCx.js","assets/md-D-Mvv2b8.js","assets/slidev/SlideChrome-D8IVGgSB.js","assets/syncState-CQbDxmWp.js","assets/index-BTbJ_Krv.js","assets/index-8dE_dpr8.css","assets/useDrawings-DRtvxa3_.js","assets/ItemList-Cv-ZtB_K.js","assets/md-DK8HUMIm.js","assets/lesson-cards-B42wVAk_.js","assets/md-DYpt5fM_.js","assets/lesson-compare-CXJBHSiy.js","assets/md-D-rAwWry.js","assets/lesson-steps-C2vKUrhU.js","assets/md-DQZ_HHRV.js","assets/md-CKPAu39g.js","assets/md-Dydnjvec.js","assets/md-CyTEMrNp.js","assets/md-CQscGqwm.js","assets/md-nBsjbgVZ.js","assets/md-Cyjl8Vkz.js","assets/md-C2qhP6Rq.js","assets/md-BGFa1wc4.js","assets/md-Bcl4Mv_t.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,F as n,I as r,K as i,L as a,S as o,et as s,g as c,h as l,it as u,j as d,lt as f,mt as p,ot as m,p as ee,pt as h,st as g,ut as _,v,vt as te,y}from"../modules/shiki-DeTF74yl.js";import{t as ne}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as b,B as x,E as re,I as ie,T as ae,a as oe,c as se,g as ce,h as S,k as C,l as le,m as ue,z as de}from"../modules/vue-CGb69BCx.js";import{l as fe,y as pe}from"./context-CFZR7p0y.js";function w(e,t,n){return Math.min(n,Math.max(t,e))}function me(...e){return ge(e).reduce((e,t)=>e+t,0)}function he(e){return e??=[],Array.isArray(e)?e:[e]}function ge(e){return he(e).flat(1)}function _e(e){return Array.from(new Set(e))}function ve(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function ye(e){return e!=null}function be(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(ye))}var T={theme:`default`,title:`00.课前学习`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`auto`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"Avenir Next"`,`"Nunito Sans"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"Fira Code"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`Nunito Sans`,`Fira Code`],provider:`google`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:null,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/00.课前学习/slides.md`,slidesTitle:`00.课前学习 - Slidev`},xe=`build`,E=l(()=>T.aspectRatio),Se=l(()=>T.canvasWidth),Ce=l(()=>Math.ceil(Se.value/E.value)),we=l(()=>be(T.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),Te=T.slidesTitle,Ee=`/courses/vibe-coding/00/#/`,De=`modulepreload`,Oe=function(e){return`/courses/vibe-coding/00/`+e},ke={},D=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Oe(t,n),t=s(t),t in ke)return;ke[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:De,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function O(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function Ae(e){return Array.isArray(e)?[O(e[0]),O(e[1])]:null}function je(e,t=0,i){let a=m(!1),o=new Map,c=new Map,u={get current(){return w(+e.value,t,u.total)},set current(n){e.value=a.value?w(n,t,u.total):n},clicksStart:t,get relativeSizeMap(){return o},get maxMap(){return c},get isMounted(){return a.value},setup(){n(()=>{a.value=!0,c=g(c),s(e)||(u.current=e.value)}),r(()=>{a.value=!1,o=new Map,c=new Map})},calculateSince(e,t=1){let n=O(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=u.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:l(()=>u.current-r),isCurrent:l(()=>u.current===r),isActive:l(()=>u.current>=r)}},calculateRange(e){let t=Ae(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=u.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:l(()=>u.current-i),isCurrent:l(()=>u.current===i),isActive:l(()=>i<=u.current&&u.current<a)}},calculate(e){return Array.isArray(e)?u.calculateRange(e):u.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),c.set(e,r)},unregister(e){o.delete(e),c.delete(e)},get currentOffset(){return me(...o.values())},get total(){return i??(a.value?Math.max(0,...c.values()):0)}};return u}function Me(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=m(Math.max(h(t),n));return i(()=>h(t),e=>{r.value=Math.max(e,n)}),je(r,n,e?.meta?.clicks)}var Ne=/[a-z]/i;function Pe(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!Ne.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function Fe(e,t){if(!t||t===`all`||t===`*`)return ve(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(...ve(+t,i?+i+1:e+1))}return _e(n).filter(t=>t<=e).sort((e,t)=>e-t)}var Ie={},Le={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function Re(e,t){return a(),y(`div`,Le,te(`Failed to fetch this slide. Please check your network connection.`))}var k=ne(Ie,[[`render`,Re]]),ze={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},Be=e({__name:`SlideLoading`,setup(e){let t=m(!1);return n(()=>{setTimeout(()=>{t.value=!0},200)}),(e,n)=>(a(),y(`div`,ze,[t.value?(a(),y(ee,{key:0},[n[0]||=c(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),n[1]||=c(`div`,null,`Loading slide...`,-1)],64)):v(`v-if`,!0)]))}}),A=u({theme:`default`,title:`00.课前学习`,info:`《AI氛围编程》课前。`,author:`人工智能学院`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`,sans:`Microsoft YaHei, PingFang SC, Noto Sans SC, Source Han Sans SC, sans-serif`,mono:`Sarasa Mono SC, Fira Code, Consolas, ui-monospace, monospace`},htmlAttrs:{lang:`zh-CN`},layout:`lesson-cover`,week:0,weekLabel:`课前`,chapter:0,chapterTitle:`课程与基本功`,experiment:``,experimentTitle:``,lead:`课前熟悉键盘、编辑器和命令行。随后用编程助手做一件能演示的校园应用。`,course:`AI氛围编程`,unit:`人工智能学院`,defaults:{layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`]}}),Ve=g({get layout(){return A.layout},get transition(){return A.transition},get class(){return A.class},get clicks(){return A.clicks},get name(){return A.name},get preload(){return A.preload},slide:{content:``,revision:`8ybhw8`,frontmatterRaw:`theme: "default"
title: "00.课前学习"
info: "《AI氛围编程》课前。"
author: "人工智能学院"
colorSchema: "light"
aspectRatio: "16/9"
canvasWidth: 1280
highlighter: "shiki"
mdc: true
transition: "fade-out"
fonts:
  provider: "none"
  sans: "Microsoft YaHei, PingFang SC, Noto Sans SC, Source Han Sans SC, sans-serif"
  mono: "Sarasa Mono SC, Fira Code, Consolas, ui-monospace, monospace"
htmlAttrs:
  lang: "zh-CN"
layout: "lesson-cover"
week: 0
weekLabel: "课前"
chapter: 0
chapterTitle: "课程与基本功"
experiment: ""
experimentTitle: ""
lead: "课前熟悉键盘、编辑器和命令行。随后用编程助手做一件能演示的校园应用。"
course: "AI氛围编程"
unit: "人工智能学院"
defaults:
  layout: "lesson-cards"
  week: 0
  weekLabel: "课前"
  spine:
    - "课程"
    - "基本功"
    - "判断力"
    - "自检"
`,note:``,title:`00.课前学习`,index:0,noteHTML:``,images:[],raw:``,frontmatter:A,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),j=u({layout:`lesson-agenda`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`本节内容`,lectureLabel:`课程安排`,practiceLabel:`课前自检`,nav:0,lecture:[`学校有程序基础、面向对象、数据结构、算法课；本课用助手做出产品`,`编程、编译与解释、软件三层`,`助手能写代码。题目怎么拆、对不对，还得自己判`],practice:[`盲打、编辑器与终端、Git、Markdown`,`力扣、竞赛、实验室自愿，不计入本课成绩`]}),He=g({get layout(){return j.layout},get transition(){return j.transition},get class(){return j.class},get clicks(){return j.clicks},get name(){return j.name},get preload(){return j.preload},slide:{content:``,revision:`an1rrr`,frontmatterRaw:`layout: "lesson-agenda"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "本节内容"
lectureLabel: "课程安排"
practiceLabel: "课前自检"
nav: 0
lecture:
  - "学校有程序基础、面向对象、数据结构、算法课；本课用助手做出产品"
  - "编程、编译与解释、软件三层"
  - "助手能写代码。题目怎么拆、对不对，还得自己判"
practice:
  - "盲打、编辑器与终端、Git、Markdown"
  - "力扣、竞赛、实验室自愿，不计入本课成绩"
`,note:``,title:`本节内容`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:j,filepath:``,start:40,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),M=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`大学里的编程课`,kicker:`0.1　本课做产品；这几门仍要上`,nav:0,cards:[{num:`01`,title:`程序基础`,body:`写出能跑的程序。`},{num:`02`,title:`面向对象`,body:`对象怎么封装、怎么组织。`},{num:`03`,title:`数据结构`,body:`数据怎么放，才好查、好改。`},{num:`04`,title:`算法课`,body:`问题怎么拆，对不对怎么判。`}]}),Ue=g({get layout(){return M.layout},get transition(){return M.transition},get class(){return M.class},get clicks(){return M.clicks},get name(){return M.name},get preload(){return M.preload},slide:{content:``,revision:`8n718l`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "大学里的编程课"
kicker: "0.1　本课做产品；这几门仍要上"
nav: 0
cards:
  - num: "01"
    title: "程序基础"
    body: "写出能跑的程序。"
  - num: "02"
    title: "面向对象"
    body: "对象怎么封装、怎么组织。"
  - num: "03"
    title: "数据结构"
    body: "数据怎么放，才好查、好改。"
  - num: "04"
    title: "算法课"
    body: "问题怎么拆，对不对怎么判。"
`,note:``,title:`大学里的编程课`,level:1,index:2,noteHTML:``,images:[],raw:``,frontmatter:M,filepath:``,start:64,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),N=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`工程和算法`,kicker:`0.2　工程与算法`,nav:0,leftTitle:`工程与项目`,left:`工程做网站、小程序、桌面软件，还要能部署上线，做出给人用的产品。
本课做这件事，学期项目是校园应用。
`,rightTitle:`算法与判断`,right:`题目怎么拆、结果对不对，要自己判。视觉、语言、搜索、推荐、数据库都会用到算法。
算法课、竞赛、实验室都在练这件事。
`}),We=g({get layout(){return N.layout},get transition(){return N.transition},get class(){return N.class},get clicks(){return N.clicks},get name(){return N.name},get preload(){return N.preload},slide:{content:``,revision:`1kwxf4`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "工程和算法"
kicker: "0.2　工程与算法"
nav: 0
leftTitle: "工程与项目"
left: |
  工程做网站、小程序、桌面软件，还要能部署上线，做出给人用的产品。
  本课做这件事，学期项目是校园应用。
rightTitle: "算法与判断"
right: |
  题目怎么拆、结果对不对，要自己判。视觉、语言、搜索、推荐、数据库都会用到算法。
  算法课、竞赛、实验室都在练这件事。
`,note:``,title:`工程和算法`,level:1,index:3,noteHTML:``,images:[],raw:``,frontmatter:N,filepath:``,start:93,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),P=u({layout:`lesson-steps`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`编程在干什么`,kicker:`0.3　步骤写成指令`,nav:0,steps:[{title:`编程`,body:`把解题步骤写成计算机能执行的指令。`},{title:`程序`,body:`把步骤写准确、写完整，计算机才能按它做。`},{title:`本课怎么用`,body:`人写清要做什么、怎样算过；助手写草稿；人核对能跑。`}]}),Ge=g({get layout(){return P.layout},get transition(){return P.transition},get class(){return P.class},get clicks(){return P.clicks},get name(){return P.name},get preload(){return P.preload},slide:{content:``,revision:`-hnun71`,frontmatterRaw:`layout: "lesson-steps"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "编程在干什么"
kicker: "0.3　步骤写成指令"
nav: 0
steps:
  - title: "编程"
    body: "把解题步骤写成计算机能执行的指令。"
  - title: "程序"
    body: "把步骤写准确、写完整，计算机才能按它做。"
  - title: "本课怎么用"
    body: "人写清要做什么、怎样算过；助手写草稿；人核对能跑。"
`,note:``,title:`编程在干什么`,level:1,index:4,noteHTML:``,images:[],raw:``,frontmatter:P,filepath:``,start:117,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),F=u({layout:`lesson-steps`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`计算怎么走到今天`,kicker:`0.4　程序形态`,nav:0,steps:[{title:`图灵机`,body:`1936 年，纸带和规则。能一步步算出来的问题，都可以放到这个模型里讲。`},{title:`存储程序`,body:`程序和数据放在一起。换题目时改存储器里的内容，不必改接线。`},{title:`高级语言`,body:`人按问题来写，编译器或解释器再把它变成机器能跑的东西。`}]}),Ke=g({get layout(){return F.layout},get transition(){return F.transition},get class(){return F.class},get clicks(){return F.clicks},get name(){return F.name},get preload(){return F.preload},slide:{content:``,revision:`-3clb33`,frontmatterRaw:`layout: "lesson-steps"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "计算怎么走到今天"
kicker: "0.4　程序形态"
nav: 0
steps:
  - title: "图灵机"
    body: "1936 年，纸带和规则。能一步步算出来的问题，都可以放到这个模型里讲。"
  - title: "存储程序"
    body: "程序和数据放在一起。换题目时改存储器里的内容，不必改接线。"
  - title: "高级语言"
    body: "人按问题来写，编译器或解释器再把它变成机器能跑的东西。"
`,note:``,title:`计算怎么走到今天`,level:1,index:5,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:140,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),I=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`源程序如何变成结果`,kicker:`0.5　编辑之后`,nav:0,lead:`编辑器只改文字、保存文件。要在屏幕上看到结果，还要经过编译或解释，再运行。`,leftTitle:`编译`,left:`先把全部源程序翻译完，再运行。例如 C++。`,rightTitle:`解释`,right:`边读边执行，一般不先做出一份独立的可执行文件。例如 Python。`,foot:`本课用 IDE：编辑和一键运行在同一窗口。`}),qe=g({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`4wcv4l`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "源程序如何变成结果"
kicker: "0.5　编辑之后"
nav: 0
lead: "编辑器只改文字、保存文件。要在屏幕上看到结果，还要经过编译或解释，再运行。"
leftTitle: "编译"
left: "先把全部源程序翻译完，再运行。例如 C++。"
rightTitle: "解释"
right: "边读边执行，一般不先做出一份独立的可执行文件。例如 Python。"
foot: "本课用 IDE：编辑和一键运行在同一窗口。"
`,note:``,title:`源程序如何变成结果`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:163,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),L=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`软件的三层`,kicker:`0.6　做校园应用时按这三层`,nav:0,cards:[{num:`01`,title:`表示层`,body:`页面上能点、能看见结果。`},{num:`02`,title:`逻辑层`,body:`怎么查、找不到怎么说。`},{num:`03`,title:`数据层`,body:`记录存在哪里、怎么改。`}]}),Je=g({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`-jgvedu`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "软件的三层"
kicker: "0.6　做校园应用时按这三层"
nav: 0
cards:
  - num: "01"
    title: "表示层"
    body: "页面上能点、能看见结果。"
  - num: "02"
    title: "逻辑层"
    body: "怎么查、找不到怎么说。"
  - num: "03"
    title: "数据层"
    body: "记录存在哪里、怎么改。"
`,note:``,title:`软件的三层`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:185,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),R=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课前要会的四件事`,kicker:`0.7　基本功`,nav:1,cards:[{num:`01`,title:`盲打`,body:`先练到不看键盘也能打字。可在 TypeRacer 上练。检索：Words per minute。`},{num:`02`,title:`IDE 与排错`,body:`分清编译器、编辑器、IDE。本课用在线实验环境与 CodeBuddy；自己电脑可用 VS Code。`},{num:`03`,title:`Git 与命令行`,body:`Git 用来记版本，课上会对照两次提交。命令行在 Windows 之外也会用到。`},{num:`04`,title:`Markdown`,body:`说明、报告用它写标题和列表。LaTeX 以后写论文会用，本课不要求现在学。`}]}),Ye=g({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`1npqxu`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课前要会的四件事"
kicker: "0.7　基本功"
nav: 1
cards:
  - num: "01"
    title: "盲打"
    body: "先练到不看键盘也能打字。可在 TypeRacer 上练。检索：Words per minute。"
  - num: "02"
    title: "IDE 与排错"
    body: "分清编译器、编辑器、IDE。本课用在线实验环境与 CodeBuddy；自己电脑可用 VS Code。"
  - num: "03"
    title: "Git 与命令行"
    body: "Git 用来记版本，课上会对照两次提交。命令行在 Windows 之外也会用到。"
  - num: "04"
    title: "Markdown"
    body: "说明、报告用它写标题和列表。LaTeX 以后写论文会用，本课不要求现在学。"
`,note:``,title:`课前要会的四件事`,level:1,index:8,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:211,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),z=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`助手能写代码，人要会判断`,kicker:`0.8　判断力`,nav:2,leftTitle:`竞赛与思维`,left:`开发可以少手写代码。题目怎么拆、答案对不对，还是人跟人比。
学算法，是学判断时用到的素材和规则。围棋程序已经能赢职业棋手，人仍要懂规则和气。
`,rightTitle:`开发现场`,right:`要看出助手给的方案能不能用，自己得先会用。`,rightCase:{label:`例`,body:`ACM 颁奖滚榜，要能停在任意一个名次上。这件事问助手很久，一直没有能用的做法。限定环境里助手的名次可以很靠前，现场能不能用，仍由人判定。`}}),Xe=g({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`4w2v3y`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "助手能写代码，人要会判断"
kicker: "0.8　判断力"
nav: 2
leftTitle: "竞赛与思维"
left: |
  开发可以少手写代码。题目怎么拆、答案对不对，还是人跟人比。
  学算法，是学判断时用到的素材和规则。围棋程序已经能赢职业棋手，人仍要懂规则和气。
rightTitle: "开发现场"
right: "要看出助手给的方案能不能用，自己得先会用。"
rightCase:
  label: "例"
  body: "ACM 颁奖滚榜，要能停在任意一个名次上。这件事问助手很久，一直没有能用的做法。限定环境里助手的名次可以很靠前，现场能不能用，仍由人判定。"
`,note:``,title:`助手能写代码，人要会判断`,level:1,index:9,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:240,sourceIndex:9,id:9,no:10},__clicksContext:null,__preloaded:!1}),B=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课上怎么跟助手配合`,kicker:`0.9　Vibe Coding`,nav:2,lead:`用自然语言说明要做什么，由模型写出程序。课上把这种做法叫 Vibe Coding，按下面的职责来。`,leftTitle:`你来做`,left:`写清要做什么，以及怎样算合格。助手交来的结果，由你核对能不能跑、能不能演示。`,rightTitle:`助手来做`,right:`按你的说明写代码、改文件、运行，并按你的标准改到能过。`,foot:`这个名字是 2025 年 Karpathy 起的。用对话写代码的工具，2022 年前后进入日常。`}),Ze=g({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`-eolj6k`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课上怎么跟助手配合"
kicker: "0.9　Vibe Coding"
nav: 2
lead: "用自然语言说明要做什么，由模型写出程序。课上把这种做法叫 Vibe Coding，按下面的职责来。"
leftTitle: "你来做"
left: "写清要做什么，以及怎样算合格。助手交来的结果，由你核对能不能跑、能不能演示。"
rightTitle: "助手来做"
right: "按你的说明写代码、改文件、运行，并按你的标准改到能过。"
foot: "这个名字是 2025 年 Karpathy 起的。用对话写代码的工具，2022 年前后进入日常。"
`,note:``,title:`课上怎么跟助手配合`,level:1,index:10,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:265,sourceIndex:10,id:10,no:11},__clicksContext:null,__preloaded:!1}),V=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课外练习，自愿`,kicker:`0.10　考证、竞赛、实验室`,nav:3,cards:[{num:`01`,title:`力扣`,body:`面试题合集，个人练习。不计入本课成绩。`},{num:`02`,title:`Codeforces / AtCoder`,body:`算法排位赛。校内竞赛面向全校，想参加的可以进实验室。`},{num:`03`,title:`ACM 实验室`,body:`三人组队刷题。群号 735419861。3–6 月每周专题，7 月暑期集训，8 月 CSP 课。`},{num:`04`,title:`CCF-CSP`,body:`软件能力认证。官网 cspro.org。想考证或进实验室，按群里通知报名。`}]}),Qe=g({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`-62jhhk`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课外练习，自愿"
kicker: "0.10　考证、竞赛、实验室"
nav: 3
cards:
  - num: "01"
    title: "力扣"
    body: "面试题合集，个人练习。不计入本课成绩。"
  - num: "02"
    title: "Codeforces / AtCoder"
    body: "算法排位赛。校内竞赛面向全校，想参加的可以进实验室。"
  - num: "03"
    title: "ACM 实验室"
    body: "三人组队刷题。群号 735419861。3–6 月每周专题，7 月暑期集训，8 月 CSP 课。"
  - num: "04"
    title: "CCF-CSP"
    body: "软件能力认证。官网 cspro.org。想考证或进实验室，按群里通知报名。"
`,note:``,title:`课外练习，自愿`,level:1,index:11,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:287,sourceIndex:11,id:11,no:12},__clicksContext:null,__preloaded:!1}),H=u({layout:`lesson-steps`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课前自检`,kicker:`0.11　动手`,nav:3,steps:[{title:`键盘`,body:`能不看键打一段话。TypeRacer：https://play.typeracer.com/`},{title:`实验环境`,body:`打开课程工作空间，新建文件，跑通一条命令。`},{title:`版本与说明`,body:`知道 Git 用来记版本；能用 Markdown 写出标题和列表。`}]}),$e=g({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`-6w1z1k`,frontmatterRaw:`layout: "lesson-steps"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课前自检"
kicker: "0.11　动手"
nav: 3
steps:
  - title: "键盘"
    body: "能不看键打一段话。TypeRacer：https://play.typeracer.com/"
  - title: "实验环境"
    body: "打开课程工作空间，新建文件，跑通一条命令。"
  - title: "版本与说明"
    body: "知道 Git 用来记版本；能用 Markdown 写出标题和列表。"
`,note:``,title:`课前自检`,level:1,index:12,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:316,sourceIndex:12,id:12,no:13},__clicksContext:null,__preloaded:!1}),U=u({layout:`lesson-pitfalls`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`常见问题`,kicker:`0.12`,nav:3,items:[{title:`密钥写进对话`,body:`账号、口令只放本地配置，不进提交物。`}]}),et=g({get layout(){return U.layout},get transition(){return U.transition},get class(){return U.class},get clicks(){return U.clicks},get name(){return U.name},get preload(){return U.preload},slide:{content:``,revision:`ejq8e`,frontmatterRaw:`layout: "lesson-pitfalls"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "常见问题"
kicker: "0.12"
nav: 3
items:
  - title: "密钥写进对话"
    body: "账号、口令只放本地配置，不进提交物。"
`,note:``,title:`常见问题`,level:1,index:13,noteHTML:``,images:[],raw:``,frontmatter:U,filepath:``,start:339,sourceIndex:13,id:13,no:14},__clicksContext:null,__preloaded:!1}),W=u({layout:`lesson-accept`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`本次完成`,kicker:`0.13`,nav:3,deliverable:[`读完本节，能说明本课做什么：用助手做出校园应用`,`实验环境能打开，命令能跑通一条`,`带着选题方向来上课`],criteria:[`知道盲打、编辑器、Git、Markdown 各做什么`,`不把课外竞赛当成必须提交`],due:`上课前`}),tt=g({get layout(){return W.layout},get transition(){return W.transition},get class(){return W.class},get clicks(){return W.clicks},get name(){return W.name},get preload(){return W.preload},slide:{content:``,revision:`3rkmgm`,frontmatterRaw:`layout: "lesson-accept"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "本次完成"
kicker: "0.13"
nav: 3
deliverable:
  - "读完本节，能说明本课做什么：用助手做出校园应用"
  - "实验环境能打开，命令能跑通一条"
  - "带着选题方向来上课"
criteria:
  - "知道盲打、编辑器、Git、Markdown 各做什么"
  - "不把课外竞赛当成必须提交"
due: "上课前"
`,note:``,title:`本次完成`,level:1,index:14,noteHTML:``,images:[],raw:``,frontmatter:W,filepath:``,start:358,sourceIndex:14,id:14,no:15},__clicksContext:null,__preloaded:!1}),G=Array(15),K=(e,t)=>o({loader:t,delay:300,loadingComponent:Be,errorComponent:k,onError:t=>console.error(`Failed to load slide `+(e+1),t)}),nt=async()=>{try{return G[0]??=await D(()=>import(`../md-p3vp6_c-.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),k}},rt=async()=>{try{return G[1]??=await D(()=>import(`../md-D-Mvv2b8.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),k}},it=async()=>{try{return G[2]??=await D(()=>import(`../md-DK8HUMIm.js`),__vite__mapDeps([13,1,2,3,4,5,14,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},at=async()=>{try{return G[3]??=await D(()=>import(`../md-DYpt5fM_.js`),__vite__mapDeps([15,1,2,3,4,5,16,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),k}},ot=async()=>{try{return G[4]??=await D(()=>import(`../md-D-rAwWry.js`),__vite__mapDeps([17,1,2,3,4,5,18,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},st=async()=>{try{return G[5]??=await D(()=>import(`../md-DQZ_HHRV.js`),__vite__mapDeps([19,1,2,3,4,5,18,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},ct=async()=>{try{return G[6]??=await D(()=>import(`../md-CKPAu39g.js`),__vite__mapDeps([20,1,2,3,4,5,16,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),k}},lt=async()=>{try{return G[7]??=await D(()=>import(`../md-Dydnjvec.js`),__vite__mapDeps([21,1,2,3,4,5,14,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},ut=async()=>{try{return G[8]??=await D(()=>import(`../md-CyTEMrNp.js`),__vite__mapDeps([22,1,2,3,4,5,14,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},dt=async()=>{try{return G[9]??=await D(()=>import(`../md-CQscGqwm.js`),__vite__mapDeps([23,1,2,3,4,5,16,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),k}},ft=async()=>{try{return G[10]??=await D(()=>import(`../md-nBsjbgVZ.js`),__vite__mapDeps([24,1,2,3,4,5,16,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),k}},pt=async()=>{try{return G[11]??=await D(()=>import(`../md-Cyjl8Vkz.js`),__vite__mapDeps([25,1,2,3,4,5,14,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},mt=async()=>{try{return G[12]??=await D(()=>import(`../md-C2qhP6Rq.js`),__vite__mapDeps([26,1,2,3,4,5,18,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},ht=async()=>{try{return G[13]??=await D(()=>import(`../md-BGFa1wc4.js`),__vite__mapDeps([27,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),k}},gt=async()=>{try{return G[14]??=await D(()=>import(`../md-Bcl4Mv_t.js`),__vite__mapDeps([28,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),k}},_t=[{no:1,meta:Ve,load:nt,component:K(0,nt)},{no:2,meta:He,load:rt,component:K(1,rt)},{no:3,meta:Ue,load:it,component:K(2,it)},{no:4,meta:We,load:at,component:K(3,at)},{no:5,meta:Ge,load:ot,component:K(4,ot)},{no:6,meta:Ke,load:st,component:K(5,st)},{no:7,meta:qe,load:ct,component:K(6,ct)},{no:8,meta:Je,load:lt,component:K(7,lt)},{no:9,meta:Ye,load:ut,component:K(8,ut)},{no:10,meta:Xe,load:dt,component:K(9,dt)},{no:11,meta:Ze,load:ft,component:K(10,ft)},{no:12,meta:Qe,load:pt,component:K(11,pt)},{no:13,meta:$e,load:mt,component:K(12,mt)},{no:14,meta:et,load:ht,component:K(13,ht)},{no:15,meta:tt,load:gt,component:K(14,gt)}],q=f(_t);function vt(e,t,{mode:n=`replace`}={}){let r=x();return l({get(){let n=r.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(i){d(()=>{(r.currentRoute.value.query[e]??t?.toString())!==i.toString()&&r[p(n)]({query:{...r.currentRoute.value.query,[e]:`${i}`===t?void 0:i}})})}})}function yt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function J(e){return q.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function Y(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=J(e)),yt(e,t,n)}var bt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function xt(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:bt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function St(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=T.transition||void 0,xt(r,e<0)}var Ct=m(!1),wt=m(!1),Tt=m(!1),Et=m(!1),Dt=m(!1),Ot=m(!1),kt=m(!0),At=u(new Set),jt=l(()=>At.size>0),Mt=le({xs:460,...oe}),Nt=ae(),Pt=ce(),Ft=l(()=>Nt.height.value-Nt.width.value/E.value>120),It=ue(b?document.body:null),Lt=se(),Rt=l(()=>[`INPUT`,`TEXTAREA`].includes(Lt.value?.tagName||``)),zt=l(()=>[`BUTTON`,`A`].includes(Lt.value?.tagName||``));S(`slidev-camera`,`default`,{listenToStorageChanges:!1}),S(`slidev-mic`,`default`,{listenToStorageChanges:!1});var Bt=S(`slidev-scale`,0),Vt=S(`slidev-wake-lock`,!0),Ht=S(`slidev-hide-cursor-idle`,!0);S(`slidev-skip-export-pdf-tip`,!1),S(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var X=S(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),Ut=S(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Wt(){X.value=!X.value}var Gt=S(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Kt=S(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),qt=S(`slidev-editor-width`,b?window.innerWidth*.4:318,{listenToStorageChanges:!1}),Jt=S(`slidev-editor-height`,b?window.innerHeight*.4:300,{listenToStorageChanges:!1}),Yt=f(null),Z=S(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=S(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},Xt=S(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),Zt=l(()=>Object.keys($).some(e=>Xt.value[e]!==$[e]));function Qt(){Q.value+=1,Q.value>3&&(Q.value=1)}function $t(){Z.value=Math.min(2,Z.value+.1)}function en(){Z.value=Math.max(.5,Z.value-.1)}var tn=ie(Et),nn=S(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function rn(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?rn(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:Y(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function an(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=an(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function on(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:on(e.children,t+1)}))}function sn(e,t,n){let r=l(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(rn(e,t),e),[])),i=l(()=>an(r.value,n.value,void 0,void 0,t));return l(()=>on(i.value))}function cn(e,t,n=m(0),r,a,o){let s=l(()=>q.value.length),c=m(0),u=m(0),d=l(()=>Y(e.value,r.value)),f=l(()=>e.value.no),p=l(()=>e.value.meta?.layout||(f.value===1?`cover`:`default`)),ee=l(()=>e.value.meta.slide.frontmatter),h=l(()=>t.value.current),g=l(()=>t.value.clicksStart),_=l(()=>t.value.total),v=l(()=>q.value[Math.min(q.value.length,f.value+1)-1]),te=l(()=>q.value[Math.max(1,f.value-1)-1]),y=l(()=>f.value<q.value.length||h.value<_.value),ne=l(()=>f.value>1||h.value>0),b=l(()=>a.value?void 0:St(c.value,e.value,te.value));i(e,(e,t)=>{c.value=e.no-t.no});async function x(e){return!1}let re=sn(q,f,e);async function ie(){u.value=1,_.value<=n.value?await oe():n.value+=1}async function ae(){u.value=-1,n.value<=g.value?await se(!0):--n.value}async function oe(e=!1){u.value=1,f.value<q.value.length&&await C(f.value+1,e&&!a.value?fe:void 0)}async function se(e=!1){u.value=-1,f.value>1&&await C(f.value-1,e&&!a.value?fe:void 0)}function ce(){return C(1)}function S(){return C(s.value)}async function C(e,t=0,i=!1){Dt.value=!1;let a=f.value!==e,s=t!==n.value,c=J(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=w(t,l,c?.__clicksContext?.total??999999),(i||a||s)&&await o?.push({path:Y(e,r.value,o.currentRoute.value.name===`export`),query:{...o.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function le(){o?.push({path:Y(f.value,!0),query:{...o.currentRoute.value.query}})}function ue(){o?.push({path:Y(f.value,!1),query:{...o.currentRoute.value.query}})}return{slides:q,total:s,currentPath:d,currentSlideNo:f,currentPage:f,currentSlideRoute:e,currentLayout:p,currentFrontmatter:ee,currentTransition:b,clicksDirection:u,nextRoute:v,prevRoute:te,clicksContext:t,clicks:h,clicksStart:g,clicksTotal:_,hasNext:y,hasPrev:ne,tocTree:re,navDirection:c,openInEditor:x,next:ie,prev:ae,go:C,goLast:S,goFirst:ce,nextSlide:oe,prevSlide:se,enterPresenter:le,exitPresenter:ue}}var ln=re(()=>{let e=x(),t=de(),n=l(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=l(()=>n.value.has(`print`)||t.name===`export`),i=m(n.value.get(`print`)===`clicks`),a=l(()=>n.value.has(`embedded`)),o=l(()=>t.name===`play`),s=l(()=>t.name===`presenter`),c=l(()=>t.name===`notes`),u=l(()=>!s.value&&(!T.remote||n.value.get(`password`)===T.remote)),d=l(()=>!!t.params.no),f=l(()=>d.value?J(t.params.no)?.no??1:1),p=l(()=>q.value[f.value-1]),ee=m(Fe(q.value.length,t?.query?.range)),h=vt(`clicks`,`0`),g=l(()=>v(p.value)),_=l({get(){let e=+(h.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Dt.value=!1,h.value=e.toString()}});function v(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=je(l({get(){return f.value===t?Math.max(+(h.value??0),n.clicksStart):f.value>t?fe:n.clicksStart},set(e){f.value===t&&(h.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:l(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:u,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:g,queryClicksRaw:h,queryClicks:_,printRange:ee,getPrimaryClicks:v}}),un=re(()=>{let e=ln(),t=x(),n=cn(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return i([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!J(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function dn(){let e=un(),n=t()?C(pe,void 0):void 0;if(!n)return e;let r=_(n).nav;return{...e,...r}}export{T as $,Bt as A,Y as B,jt as C,Et as D,wt as E,Xt as F,D as G,Pe as H,$ as I,E as J,xe as K,Vt as L,tn as M,Wt as N,X as O,Qt as P,we as Q,Nt as R,kt as S,Tt as T,je as U,q as V,Me as W,Se as X,Ce as Y,Te as Z,zt as _,Ut as a,Q as b,Jt as c,Zt as d,w as et,Ht as f,Rt as g,Kt as h,Mt as i,nn as j,Ct as k,qt as l,$t as m,Yt as n,en as o,Dt as p,Ee as q,Lt as r,Ot as s,dn as t,ve as tt,It as u,Ft as v,Gt as w,Z as x,Pt as y,J as z};