const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-p3vp6_c-.js","assets/modules/shiki-DeTF74yl.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-CFZR7p0y.js","assets/modules/vue-CGb69BCx.js","assets/md-CZzFHcns.js","assets/ItemList-DWIiLPFf.js","assets/syncState-CQbDxmWp.js","assets/index-DRg1OTQ4.js","assets/index-Bb1B5-Gx.css","assets/useDrawings-CX3pOQfN.js","assets/md-yct4yRaU.js","assets/lesson-compare-BqO8OFSL.js","assets/LessonDiagram-CzTKJmDw.js","assets/md-NO--A4P6.js","assets/lesson-cards-bCPi3dYE.js","assets/md-Dcm34y47.js","assets/md-CCDklr81.js","assets/md-UyG45T1I.js","assets/md-DACoAndq.js","assets/md-CqFjYa8S.js","assets/md-CQy-5LwW.js","assets/md-jRvV9HbI.js","assets/md-D0z9LBx_.js","assets/md-BiGJh9lR.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,F as n,I as r,K as i,L as a,S as o,et as s,g as c,h as l,it as u,j as d,lt as f,mt as p,ot as m,p as h,pt as g,st as _,ut as v,v as y,vt as ee,y as b}from"../modules/shiki-DeTF74yl.js";import{t as te}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as x,B as S,E as ne,I as re,T as ie,a as ae,c as oe,g as se,h as C,k as w,l as ce,m as le,z as ue}from"../modules/vue-CGb69BCx.js";import{l as de,y as fe}from"./context-CFZR7p0y.js";function T(e,t,n){return Math.min(n,Math.max(t,e))}function pe(...e){return he(e).reduce((e,t)=>e+t,0)}function me(e){return e??=[],Array.isArray(e)?e:[e]}function he(e){return me(e).flat(1)}function ge(e){return Array.from(new Set(e))}function E(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function _e(e){return e!=null}function ve(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(_e))}var D={theme:`default`,title:`00.课前学习`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`auto`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"Avenir Next"`,`"Nunito Sans"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"Fira Code"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`Nunito Sans`,`Fira Code`],provider:`google`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:null,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/00.课前学习/slides.md`,slidesTitle:`00.课前学习 - Slidev`},ye=`build`,O=l(()=>D.aspectRatio),be=l(()=>D.canvasWidth),xe=l(()=>Math.ceil(be.value/O.value)),Se=l(()=>ve(D.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),Ce=D.slidesTitle,we=`/courses/vibe-coding/00/#/`,Te=`modulepreload`,Ee=function(e){return`/courses/vibe-coding/00/`+e},De={},k=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ee(t,n),t=s(t),t in De)return;De[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Te,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Oe(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function ke(e){return Array.isArray(e)?[Oe(e[0]),Oe(e[1])]:null}function Ae(e,t=0,i){let a=m(!1),o=new Map,c=new Map,u={get current(){return T(+e.value,t,u.total)},set current(n){e.value=a.value?T(n,t,u.total):n},clicksStart:t,get relativeSizeMap(){return o},get maxMap(){return c},get isMounted(){return a.value},setup(){n(()=>{a.value=!0,c=_(c),s(e)||(u.current=e.value)}),r(()=>{a.value=!1,o=new Map,c=new Map})},calculateSince(e,t=1){let n=Oe(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=u.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:l(()=>u.current-r),isCurrent:l(()=>u.current===r),isActive:l(()=>u.current>=r)}},calculateRange(e){let t=ke(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=u.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:l(()=>u.current-i),isCurrent:l(()=>u.current===i),isActive:l(()=>i<=u.current&&u.current<a)}},calculate(e){return Array.isArray(e)?u.calculateRange(e):u.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),c.set(e,r)},unregister(e){o.delete(e),c.delete(e)},get currentOffset(){return pe(...o.values())},get total(){return i??(a.value?Math.max(0,...c.values()):0)}};return u}function je(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=m(Math.max(g(t),n));return i(()=>g(t),e=>{r.value=Math.max(e,n)}),Ae(r,n,e?.meta?.clicks)}var Me=/[a-z]/i;function Ne(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!Me.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function Pe(e,t){if(!t||t===`all`||t===`*`)return E(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(...E(+t,i?+i+1:e+1))}return ge(n).filter(t=>t<=e).sort((e,t)=>e-t)}var Fe={},Ie={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function Le(e,t){return a(),b(`div`,Ie,ee(`Failed to fetch this slide. Please check your network connection.`))}var A=te(Fe,[[`render`,Le]]),Re={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},ze=e({__name:`SlideLoading`,setup(e){let t=m(!1);return n(()=>{setTimeout(()=>{t.value=!0},200)}),(e,n)=>(a(),b(`div`,Re,[t.value?(a(),b(h,{key:0},[n[0]||=c(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),n[1]||=c(`div`,null,`Loading slide...`,-1)],64)):y(`v-if`,!0)]))}}),j=u({theme:`default`,title:`00.课前学习`,info:`《AI氛围编程》课前。`,author:`人工智能学院`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`,sans:`Microsoft YaHei, PingFang SC, Noto Sans SC, Source Han Sans SC, sans-serif`,mono:`Sarasa Mono SC, Fira Code, Consolas, ui-monospace, monospace`},htmlAttrs:{lang:`zh-CN`},layout:`lesson-cover`,week:0,weekLabel:`课前`,chapter:0,chapterTitle:`课程与基本功`,experiment:``,experimentTitle:``,lead:`课前熟悉键盘、编辑器和命令行。随后用编程助手做一件能演示的校园应用。`,course:`AI氛围编程`,unit:`人工智能学院`,defaults:{layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`]}}),Be=_({get layout(){return j.layout},get transition(){return j.transition},get class(){return j.class},get clicks(){return j.clicks},get name(){return j.name},get preload(){return j.preload},slide:{content:``,revision:`8ybhw8`,frontmatterRaw:`theme: "default"
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
`,note:``,title:`00.课前学习`,index:0,noteHTML:``,images:[],raw:``,frontmatter:j,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),M=u({layout:`lesson-agenda`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`本节内容`,lectureLabel:`课程安排`,practiceLabel:`课前自检`,nav:0,lecture:[`编程：把解题步骤写成指令`,`培养计划里的四门编程课`,`编译与解释、软件三层`,`助手写草稿。题目怎么拆、对不对，自己判`],practice:[`盲打、编辑器与终端、Git、Markdown`,`力扣、竞赛、实验室自愿，不计入本课成绩`]}),Ve=_({get layout(){return M.layout},get transition(){return M.transition},get class(){return M.class},get clicks(){return M.clicks},get name(){return M.name},get preload(){return M.preload},slide:{content:``,revision:`su1p0q`,frontmatterRaw:`layout: "lesson-agenda"
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
  - "编程：把解题步骤写成指令"
  - "培养计划里的四门编程课"
  - "编译与解释、软件三层"
  - "助手写草稿。题目怎么拆、对不对，自己判"
practice:
  - "盲打、编辑器与终端、Git、Markdown"
  - "力扣、竞赛、实验室自愿，不计入本课成绩"
`,note:``,title:`本节内容`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:M,filepath:``,start:40,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),N=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`编程在干什么`,kicker:`0.1`,nav:0,diagram:`program-flow`,lead:`编程是把解题步骤写成计算机能执行的指令。`,foot:`本课：人定要做什么、怎样算过；助手写草稿；人核对能跑。`}),He=_({get layout(){return N.layout},get transition(){return N.transition},get class(){return N.class},get clicks(){return N.clicks},get name(){return N.name},get preload(){return N.preload},slide:{content:``,revision:`hebzab`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "编程在干什么"
kicker: "0.1"
nav: 0
diagram: "program-flow"
lead: "编程是把解题步骤写成计算机能执行的指令。"
foot: "本课：人定要做什么、怎样算过；助手写草稿；人核对能跑。"
`,note:``,title:`编程在干什么`,level:1,index:2,noteHTML:``,images:[],raw:``,frontmatter:N,filepath:``,start:65,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),P=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`培养计划里的编程课`,kicker:`0.2`,nav:0,variant:`rows`,cards:[{num:`01`,title:`程序基础`,body:`从语句写到能跑的程序。变量、分支、循环都从这里起。先自己写过几行，才看得出助手写的对不对。`},{num:`02`,title:`面向对象`,body:`用对象把数据和操作收在一起，程序按对象来组织。课上例子里的一条记录，也可以看成一个对象。`},{num:`03`,title:`数据结构`,body:`数据怎么放，才好查、好改。数组、链表、树这些课会讲。查一条记录时，放法不同，快慢差很多。`},{num:`04`,title:`算法课`,body:`问题怎么拆，结果对不对怎么判。排序、查找这些是常用素材。助手给了方案，最后还是人拿规则来核对。`}]}),Ue=_({get layout(){return P.layout},get transition(){return P.transition},get class(){return P.class},get clicks(){return P.clicks},get name(){return P.name},get preload(){return P.preload},slide:{content:``,revision:`-uvcoxz`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "培养计划里的编程课"
kicker: "0.2"
nav: 0
variant: "rows"
cards:
  - num: "01"
    title: "程序基础"
    body: "从语句写到能跑的程序。变量、分支、循环都从这里起。先自己写过几行，才看得出助手写的对不对。"
  - num: "02"
    title: "面向对象"
    body: "用对象把数据和操作收在一起，程序按对象来组织。课上例子里的一条记录，也可以看成一个对象。"
  - num: "03"
    title: "数据结构"
    body: "数据怎么放，才好查、好改。数组、链表、树这些课会讲。查一条记录时，放法不同，快慢差很多。"
  - num: "04"
    title: "算法课"
    body: "问题怎么拆，结果对不对怎么判。排序、查找这些是常用素材。助手给了方案，最后还是人拿规则来核对。"
`,note:``,title:`培养计划里的编程课`,level:1,index:3,noteHTML:``,images:[],raw:``,frontmatter:P,filepath:``,start:84,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),F=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`计算怎么走到今天`,kicker:`0.3`,nav:0,diagram:`compute-history`,lead:`能一步步算完的问题，都可以用同一套模型来讲。从纸带上的格子，到程序放进存储器，再到人按问题写高级语言，中间隔了几十年。`}),We=_({get layout(){return F.layout},get transition(){return F.transition},get class(){return F.class},get clicks(){return F.clicks},get name(){return F.name},get preload(){return F.preload},slide:{content:``,revision:`gwy8uu`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "计算怎么走到今天"
kicker: "0.3"
nav: 0
diagram: "compute-history"
lead: "能一步步算完的问题，都可以用同一套模型来讲。从纸带上的格子，到程序放进存储器，再到人按问题写高级语言，中间隔了几十年。"
`,note:``,title:`计算怎么走到今天`,level:1,index:4,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:114,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),I=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`源程序如何变成结果`,kicker:`0.4`,nav:0,diagram:`compile-interpret`,lead:`编辑器只改文字、保存文件。本课用 IDE：编辑和一键运行在同一窗口。`}),Ge=_({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`-1n4c1x`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "源程序如何变成结果"
kicker: "0.4"
nav: 0
diagram: "compile-interpret"
lead: "编辑器只改文字、保存文件。本课用 IDE：编辑和一键运行在同一窗口。"
`,note:``,title:`源程序如何变成结果`,level:1,index:5,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:132,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),L=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`软件的三层`,kicker:`0.5`,nav:0,diagram:`three-layer`,lead:`课上例子：查某同学有没有某条记录。列表、条件、存档不要写在同一处。`}),Ke=_({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`mf621m`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "软件的三层"
kicker: "0.5"
nav: 0
diagram: "three-layer"
lead: "课上例子：查某同学有没有某条记录。列表、条件、存档不要写在同一处。"
`,note:``,title:`软件的三层`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:150,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),R=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课前要会的四件事`,kicker:`0.6`,nav:1,variant:`rows`,cards:[{num:`01`,title:`盲打`,body:`先练到不看键盘也能打字。可在 TypeRacer 上练。检索：Words per minute。`},{num:`02`,title:`IDE 与排错`,body:`分清编译器、编辑器、IDE。本课用在线实验环境与 CodeBuddy；自己电脑可用 VS Code。`},{num:`03`,title:`Git 与命令行`,body:`Git 记版本，课上会对照两次提交。命令行在 Windows 之外也会用到。`},{num:`04`,title:`Markdown`,body:`说明、报告用它写标题和列表。LaTeX 以后写论文会用，本课不要求现在学。`}]}),qe=_({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`-qhza63`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课前要会的四件事"
kicker: "0.6"
nav: 1
variant: "rows"
cards:
  - num: "01"
    title: "盲打"
    body: "先练到不看键盘也能打字。可在 TypeRacer 上练。检索：Words per minute。"
  - num: "02"
    title: "IDE 与排错"
    body: "分清编译器、编辑器、IDE。本课用在线实验环境与 CodeBuddy；自己电脑可用 VS Code。"
  - num: "03"
    title: "Git 与命令行"
    body: "Git 记版本，课上会对照两次提交。命令行在 Windows 之外也会用到。"
  - num: "04"
    title: "Markdown"
    body: "说明、报告用它写标题和列表。LaTeX 以后写论文会用，本课不要求现在学。"
`,note:``,title:`课前要会的四件事`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:168,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),z=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`助手能写代码，人要会判断`,kicker:`0.7`,nav:2,leftTitle:`竞赛与思维`,left:`开发可以少手写代码。题目怎么拆、答案对不对，还是人跟人比。
学算法，是学判断时用到的素材和规则。围棋程序已经能赢职业棋手，人仍要懂规则和气。
`,rightTitle:`开发现场`,right:`要看出助手给的方案能不能用，自己得先会用。现场的数据、该停在哪一步、机器上有什么限制，助手不一定见过。`,rightCase:{label:`例`,body:`ACM 颁奖滚榜，要能停在任意一个名次上。这件事问助手很久，一直没有能用的做法。限定环境里助手的名次可以很靠前，现场能不能用，仍由人判定。`}}),Je=_({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`-l08seb`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "助手能写代码，人要会判断"
kicker: "0.7"
nav: 2
leftTitle: "竞赛与思维"
left: |
  开发可以少手写代码。题目怎么拆、答案对不对，还是人跟人比。
  学算法，是学判断时用到的素材和规则。围棋程序已经能赢职业棋手，人仍要懂规则和气。
rightTitle: "开发现场"
right: "要看出助手给的方案能不能用，自己得先会用。现场的数据、该停在哪一步、机器上有什么限制，助手不一定见过。"
rightCase:
  label: "例"
  body: "ACM 颁奖滚榜，要能停在任意一个名次上。这件事问助手很久，一直没有能用的做法。限定环境里助手的名次可以很靠前，现场能不能用，仍由人判定。"
`,note:``,title:`助手能写代码，人要会判断`,level:1,index:8,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:198,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),B=u({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课上怎么跟助手配合`,kicker:`0.8`,nav:2,lead:`用自然语言说明要做什么，由模型写出程序。课上把这种做法叫 Vibe Coding。`,leftTitle:`你来做`,left:`定要做什么，写出怎样算合格。助手交来的结果，你核对着能不能跑、能不能演示。`,rightTitle:`助手来做`,right:`按你的说明写代码、改文件、运行，并按你的标准改到能过。`,foot:`对话写代码的工具从 2022 年起进入日常。Vibe Coding 这个名字是 2025 年 Karpathy 起的。`}),Ye=_({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`-4v6cqy`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课上怎么跟助手配合"
kicker: "0.8"
nav: 2
lead: "用自然语言说明要做什么，由模型写出程序。课上把这种做法叫 Vibe Coding。"
leftTitle: "你来做"
left: "定要做什么，写出怎样算合格。助手交来的结果，你核对着能不能跑、能不能演示。"
rightTitle: "助手来做"
right: "按你的说明写代码、改文件、运行，并按你的标准改到能过。"
foot: "对话写代码的工具从 2022 年起进入日常。Vibe Coding 这个名字是 2025 年 Karpathy 起的。"
`,note:``,title:`课上怎么跟助手配合`,level:1,index:9,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:223,sourceIndex:9,id:9,no:10},__clicksContext:null,__preloaded:!1}),V=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课外练习，自愿`,kicker:`0.9`,nav:3,variant:`rows`,cards:[{num:`01`,title:`力扣`,body:`面试题合集，个人练习。不计入本课成绩。`},{num:`02`,title:`Codeforces / AtCoder`,body:`算法排位赛。校内竞赛面向全校，想参加的可以进实验室。`},{num:`03`,title:`ACM 实验室`,body:`三人组队刷题。校内竞赛面向想参赛的同学。`},{num:`04`,title:`CCF-CSP`,body:`软件能力认证。官网 cspro.org。`}]}),Xe=_({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`-9nk552`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课外练习，自愿"
kicker: "0.9"
nav: 3
variant: "rows"
cards:
  - num: "01"
    title: "力扣"
    body: "面试题合集，个人练习。不计入本课成绩。"
  - num: "02"
    title: "Codeforces / AtCoder"
    body: "算法排位赛。校内竞赛面向全校，想参加的可以进实验室。"
  - num: "03"
    title: "ACM 实验室"
    body: "三人组队刷题。校内竞赛面向想参赛的同学。"
  - num: "04"
    title: "CCF-CSP"
    body: "软件能力认证。官网 cspro.org。"
`,note:``,title:`课外练习，自愿`,level:1,index:10,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:245,sourceIndex:10,id:10,no:11},__clicksContext:null,__preloaded:!1}),H=u({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课前自检`,kicker:`0.10`,nav:3,variant:`rows`,cards:[{num:`01`,title:`盲打`,body:`能不看键打一段话。TypeRacer：https://play.typeracer.com/`},{num:`02`,title:`实验环境`,body:`打开课程工作空间，新建文件，跑通一条命令。`},{num:`03`,title:`版本与说明`,body:`知道 Git 记版本；能用 Markdown 写出标题和列表。`},{num:`04`,title:`密钥`,body:`账号、口令只放本地配置，不写进对话，不进提交物。`}]}),Ze=_({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`-8hxiq0`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课前自检"
kicker: "0.10"
nav: 3
variant: "rows"
cards:
  - num: "01"
    title: "盲打"
    body: "能不看键打一段话。TypeRacer：https://play.typeracer.com/"
  - num: "02"
    title: "实验环境"
    body: "打开课程工作空间，新建文件，跑通一条命令。"
  - num: "03"
    title: "版本与说明"
    body: "知道 Git 记版本；能用 Markdown 写出标题和列表。"
  - num: "04"
    title: "密钥"
    body: "账号、口令只放本地配置，不写进对话，不进提交物。"
`,note:``,title:`课前自检`,level:1,index:11,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:275,sourceIndex:11,id:11,no:12},__clicksContext:null,__preloaded:!1}),U=u({layout:`lesson-accept`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`本次完成`,kicker:`0.11`,nav:3,deliverable:[`读完本节，能说明本课做什么：用助手做出校园应用`,`实验环境能打开，命令能跑通一条`,`带着选题方向来上课`],criteria:[`知道盲打、编辑器、Git、Markdown 各做什么`,`不把课外竞赛当成必须提交`],due:`上课前`}),Qe=_({get layout(){return U.layout},get transition(){return U.transition},get class(){return U.class},get clicks(){return U.clicks},get name(){return U.name},get preload(){return U.preload},slide:{content:``,revision:`3fxsfo`,frontmatterRaw:`layout: "lesson-accept"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "本次完成"
kicker: "0.11"
nav: 3
deliverable:
  - "读完本节，能说明本课做什么：用助手做出校园应用"
  - "实验环境能打开，命令能跑通一条"
  - "带着选题方向来上课"
criteria:
  - "知道盲打、编辑器、Git、Markdown 各做什么"
  - "不把课外竞赛当成必须提交"
due: "上课前"
`,note:``,title:`本次完成`,level:1,index:12,noteHTML:``,images:[],raw:``,frontmatter:U,filepath:``,start:305,sourceIndex:12,id:12,no:13},__clicksContext:null,__preloaded:!1}),W=Array(13),G=(e,t)=>o({loader:t,delay:300,loadingComponent:ze,errorComponent:A,onError:t=>console.error(`Failed to load slide `+(e+1),t)}),$e=async()=>{try{return W[0]??=await k(()=>import(`../md-p3vp6_c-.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),A}},et=async()=>{try{return W[1]??=await k(()=>import(`../md-CZzFHcns.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),A}},tt=async()=>{try{return W[2]??=await k(()=>import(`../md-yct4yRaU.js`),__vite__mapDeps([12,1,2,3,4,5,13,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},nt=async()=>{try{return W[3]??=await k(()=>import(`../md-NO--A4P6.js`),__vite__mapDeps([15,1,2,3,4,5,16,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},rt=async()=>{try{return W[4]??=await k(()=>import(`../md-Dcm34y47.js`),__vite__mapDeps([17,1,2,3,4,5,13,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},it=async()=>{try{return W[5]??=await k(()=>import(`../md-CCDklr81.js`),__vite__mapDeps([18,1,2,3,4,5,13,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},at=async()=>{try{return W[6]??=await k(()=>import(`../md-UyG45T1I.js`),__vite__mapDeps([19,1,2,3,4,5,13,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},ot=async()=>{try{return W[7]??=await k(()=>import(`../md-DACoAndq.js`),__vite__mapDeps([20,1,2,3,4,5,16,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},st=async()=>{try{return W[8]??=await k(()=>import(`../md-CqFjYa8S.js`),__vite__mapDeps([21,1,2,3,4,5,13,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},ct=async()=>{try{return W[9]??=await k(()=>import(`../md-CQy-5LwW.js`),__vite__mapDeps([22,1,2,3,4,5,13,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},lt=async()=>{try{return W[10]??=await k(()=>import(`../md-jRvV9HbI.js`),__vite__mapDeps([23,1,2,3,4,5,16,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},ut=async()=>{try{return W[11]??=await k(()=>import(`../md-D0z9LBx_.js`),__vite__mapDeps([24,1,2,3,4,5,16,7,8,9,10,11,14]))}catch(e){return console.error(`slide failed to load`,e),A}},dt=async()=>{try{return W[12]??=await k(()=>import(`../md-BiGJh9lR.js`),__vite__mapDeps([25,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),A}},ft=[{no:1,meta:Be,load:$e,component:G(0,$e)},{no:2,meta:Ve,load:et,component:G(1,et)},{no:3,meta:He,load:tt,component:G(2,tt)},{no:4,meta:Ue,load:nt,component:G(3,nt)},{no:5,meta:We,load:rt,component:G(4,rt)},{no:6,meta:Ge,load:it,component:G(5,it)},{no:7,meta:Ke,load:at,component:G(6,at)},{no:8,meta:qe,load:ot,component:G(7,ot)},{no:9,meta:Je,load:st,component:G(8,st)},{no:10,meta:Ye,load:ct,component:G(9,ct)},{no:11,meta:Xe,load:lt,component:G(10,lt)},{no:12,meta:Ze,load:ut,component:G(11,ut)},{no:13,meta:Qe,load:dt,component:G(12,dt)}],K=f(ft);function pt(e,t,{mode:n=`replace`}={}){let r=S();return l({get(){let n=r.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(i){d(()=>{(r.currentRoute.value.query[e]??t?.toString())!==i.toString()&&r[p(n)]({query:{...r.currentRoute.value.query,[e]:`${i}`===t?void 0:i}})})}})}function mt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function q(e){return K.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function J(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=q(e)),mt(e,t,n)}var ht={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function gt(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:ht[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function _t(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=D.transition||void 0,gt(r,e<0)}var vt=m(!1),yt=m(!1),bt=m(!1),xt=m(!1),St=m(!1),Ct=m(!1),wt=m(!0),Tt=u(new Set),Et=l(()=>Tt.size>0),Dt=ce({xs:460,...ae}),Y=ie(),Ot=se(),kt=l(()=>Y.height.value-Y.width.value/O.value>120),At=le(x?document.body:null),jt=oe(),Mt=l(()=>[`INPUT`,`TEXTAREA`].includes(jt.value?.tagName||``)),Nt=l(()=>[`BUTTON`,`A`].includes(jt.value?.tagName||``));C(`slidev-camera`,`default`,{listenToStorageChanges:!1}),C(`slidev-mic`,`default`,{listenToStorageChanges:!1});var Pt=C(`slidev-scale`,0),Ft=C(`slidev-wake-lock`,!0),It=C(`slidev-hide-cursor-idle`,!0);C(`slidev-skip-export-pdf-tip`,!1),C(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var X=C(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),Lt=C(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Rt(){X.value=!X.value}var zt=C(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Bt=C(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),Vt=C(`slidev-editor-width`,x?window.innerWidth*.4:318,{listenToStorageChanges:!1}),Ht=C(`slidev-editor-height`,x?window.innerHeight*.4:300,{listenToStorageChanges:!1}),Ut=f(null),Z=C(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=C(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},Wt=C(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),Gt=l(()=>Object.keys($).some(e=>Wt.value[e]!==$[e]));function Kt(){Q.value+=1,Q.value>3&&(Q.value=1)}function qt(){Z.value=Math.min(2,Z.value+.1)}function Jt(){Z.value=Math.max(.5,Z.value-.1)}var Yt=re(xt),Xt=C(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function Zt(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?Zt(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:J(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function Qt(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=Qt(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function $t(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:$t(e.children,t+1)}))}function en(e,t,n){let r=l(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(Zt(e,t),e),[])),i=l(()=>Qt(r.value,n.value,void 0,void 0,t));return l(()=>$t(i.value))}function tn(e,t,n=m(0),r,a,o){let s=l(()=>K.value.length),c=m(0),u=m(0),d=l(()=>J(e.value,r.value)),f=l(()=>e.value.no),p=l(()=>e.value.meta?.layout||(f.value===1?`cover`:`default`)),h=l(()=>e.value.meta.slide.frontmatter),g=l(()=>t.value.current),_=l(()=>t.value.clicksStart),v=l(()=>t.value.total),y=l(()=>K.value[Math.min(K.value.length,f.value+1)-1]),ee=l(()=>K.value[Math.max(1,f.value-1)-1]),b=l(()=>f.value<K.value.length||g.value<v.value),te=l(()=>f.value>1||g.value>0),x=l(()=>a.value?void 0:_t(c.value,e.value,ee.value));i(e,(e,t)=>{c.value=e.no-t.no});async function S(e){return!1}let ne=en(K,f,e);async function re(){u.value=1,v.value<=n.value?await ae():n.value+=1}async function ie(){u.value=-1,n.value<=_.value?await oe(!0):--n.value}async function ae(e=!1){u.value=1,f.value<K.value.length&&await w(f.value+1,e&&!a.value?de:void 0)}async function oe(e=!1){u.value=-1,f.value>1&&await w(f.value-1,e&&!a.value?de:void 0)}function se(){return w(1)}function C(){return w(s.value)}async function w(e,t=0,i=!1){St.value=!1;let a=f.value!==e,s=t!==n.value,c=q(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=T(t,l,c?.__clicksContext?.total??999999),(i||a||s)&&await o?.push({path:J(e,r.value,o.currentRoute.value.name===`export`),query:{...o.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function ce(){o?.push({path:J(f.value,!0),query:{...o.currentRoute.value.query}})}function le(){o?.push({path:J(f.value,!1),query:{...o.currentRoute.value.query}})}return{slides:K,total:s,currentPath:d,currentSlideNo:f,currentPage:f,currentSlideRoute:e,currentLayout:p,currentFrontmatter:h,currentTransition:x,clicksDirection:u,nextRoute:y,prevRoute:ee,clicksContext:t,clicks:g,clicksStart:_,clicksTotal:v,hasNext:b,hasPrev:te,tocTree:ne,navDirection:c,openInEditor:S,next:re,prev:ie,go:w,goLast:C,goFirst:se,nextSlide:ae,prevSlide:oe,enterPresenter:ce,exitPresenter:le}}var nn=ne(()=>{let e=S(),t=ue(),n=l(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=l(()=>n.value.has(`print`)||t.name===`export`),i=m(n.value.get(`print`)===`clicks`),a=l(()=>n.value.has(`embedded`)),o=l(()=>t.name===`play`),s=l(()=>t.name===`presenter`),c=l(()=>t.name===`notes`),u=l(()=>!s.value&&(!D.remote||n.value.get(`password`)===D.remote)),d=l(()=>!!t.params.no),f=l(()=>d.value?q(t.params.no)?.no??1:1),p=l(()=>K.value[f.value-1]),h=m(Pe(K.value.length,t?.query?.range)),g=pt(`clicks`,`0`),_=l(()=>y(p.value)),v=l({get(){let e=+(g.value||0);return Number.isNaN(e)&&(e=0),e},set(e){St.value=!1,g.value=e.toString()}});function y(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=Ae(l({get(){return f.value===t?Math.max(+(g.value??0),n.clicksStart):f.value>t?de:n.clicksStart},set(e){f.value===t&&(g.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:l(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:u,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:_,queryClicksRaw:g,queryClicks:v,printRange:h,getPrimaryClicks:y}}),rn=ne(()=>{let e=nn(),t=S(),n=tn(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return i([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!q(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function an(){let e=rn(),n=t()?w(fe,void 0):void 0;if(!n)return e;let r=v(n).nav;return{...e,...r}}export{D as $,Pt as A,J as B,Et as C,xt as D,yt as E,Wt as F,k as G,Ne as H,$ as I,O as J,ye as K,Ft as L,Yt as M,Rt as N,X as O,Kt as P,Se as Q,Y as R,wt as S,bt as T,Ae as U,K as V,je as W,be as X,xe as Y,Ce as Z,Nt as _,Lt as a,Q as b,Ht as c,Gt as d,T as et,It as f,Mt as g,Bt as h,Dt as i,Xt as j,vt as k,Vt as l,qt as m,Ut as n,Jt as o,St as p,we as q,jt as r,Ct as s,an as t,E as tt,At as u,kt as v,zt as w,Z as x,Ot as y,q as z};