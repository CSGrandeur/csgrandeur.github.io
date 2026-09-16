const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-jYRIR-Uv.js","assets/modules/shiki-fGx4atKb.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-C4QGt8TM.js","assets/modules/vue-D6jbpgMm.js","assets/md-BKBmov2p.js","assets/lesson-split-QI7SjJfY.js","assets/SlideChrome-ChrYyXpc.js","assets/SlideFigure-CEmbsuVI.js","assets/LessonDiagram-CT_AJQF0.js","assets/md-Dn4jhYe4.js","assets/lesson-cards-BlpkDLTB.js","assets/ProseBlock-BmdoXIq8.js","assets/md-CfLrxnpM.js","assets/md-BWDpZ3Fq.js","assets/md-ChGHEF-W.js","assets/lesson-compare-FctVYX03.js","assets/md-Bmnl9jao.js","assets/md-C2MVme4N.js","assets/md-DxG2JSnd.js","assets/md-Bs2vXISt.js","assets/lesson-still-Bvaxq4si.js","assets/md-DhaUEtRc.js","assets/md-YajNcYlS.js","assets/md-ComkIItT.js","assets/md-DssoS7jE.js","assets/md-BijyqBOM.js"])))=>i.map(i=>d[i]);
import{C as e,I as t,L as n,M as r,O as i,R as a,at as o,ct as s,dt as c,g as l,h as u,ht as d,mt as f,p,q as m,st as h,tt as g,ut as _,v,w as y,y as b,yt as ee}from"../modules/shiki-fGx4atKb.js";import{t as te}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as x,B as S,E as ne,I as re,T as ie,a as ae,c as oe,g as se,h as C,k as w,l as ce,m as le,z as ue}from"../modules/vue-D6jbpgMm.js";import{l as de,y as fe}from"./context-C4QGt8TM.js";function T(e,t,n){return Math.min(n,Math.max(t,e))}function pe(...e){return he(e).reduce((e,t)=>e+t,0)}function me(e){return e??=[],Array.isArray(e)?e:[e]}function he(e){return me(e).flat(1)}function ge(e){return Array.from(new Set(e))}function _e(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function ve(e){return e!=null}function ye(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(ve))}var E={theme:`default`,title:`00.课前学习`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`auto`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"IBM Plex Sans"`,`"Noto Sans SC"`,`"PingFang SC"`,`"Microsoft YaHei"`,`"Noto Sans CJK SC"`,`"Source Han Sans SC"`,`"system-ui"`,`"sans-serif"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"IBM Plex Mono"`,`"Sarasa Mono SC"`,`"ui-monospace"`,`"Consolas"`,`"monospace"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`IBM Plex Sans`,`Noto Sans SC`,`PingFang SC`,`Microsoft YaHei`,`Noto Sans CJK SC`,`Source Han Sans SC`,`system-ui`,`sans-serif`,`IBM Plex Mono`,`Sarasa Mono SC`,`ui-monospace`,`Consolas`,`monospace`],provider:`none`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:null,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/00.课前学习/slides.md`,slidesTitle:`00.课前学习 - Slidev`},be=`build`,xe=u(()=>E.aspectRatio),Se=u(()=>E.canvasWidth),Ce=u(()=>Math.ceil(Se.value/xe.value)),we=u(()=>ye(E.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),Te=E.slidesTitle,Ee=`/courses/vibe-coding/00/#/`,De=`modulepreload`,Oe=function(e){return`/courses/vibe-coding/00/`+e},ke={},D=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Oe(t,n),t=s(t),t in ke)return;ke[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:De,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Ae(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function je(e){return Array.isArray(e)?[Ae(e[0]),Ae(e[1])]:null}function Me(e,r=0,i){let a=h(!1),o=new Map,c=new Map,l={get current(){return T(+e.value,r,l.total)},set current(t){e.value=a.value?T(t,r,l.total):t},clicksStart:r,get relativeSizeMap(){return o},get maxMap(){return c},get isMounted(){return a.value},setup(){t(()=>{a.value=!0,c=s(c),g(e)||(l.current=e.value)}),n(()=>{a.value=!1,o=new Map,c=new Map})},calculateSince(e,t=1){let n=Ae(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=l.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:u(()=>l.current-r),isCurrent:u(()=>l.current===r),isActive:u(()=>l.current>=r)}},calculateRange(e){let t=je(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=l.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:u(()=>l.current-i),isCurrent:u(()=>l.current===i),isActive:u(()=>i<=l.current&&l.current<a)}},calculate(e){return Array.isArray(e)?l.calculateRange(e):l.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),c.set(e,r)},unregister(e){o.delete(e),c.delete(e)},get currentOffset(){return pe(...o.values())},get total(){return i??(a.value?Math.max(0,...c.values()):0)}};return l}function Ne(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=h(Math.max(f(t),n));return m(()=>f(t),e=>{r.value=Math.max(e,n)}),Me(r,n,e?.meta?.clicks)}var Pe=/[a-z]/i;function Fe(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!Pe.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function Ie(e,t){if(!t||t===`all`||t===`*`)return _e(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(..._e(+t,i?+i+1:e+1))}return ge(n).filter(t=>t<=e).sort((e,t)=>e-t)}var Le={},Re={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function ze(e,t){return a(),b(`div`,Re,ee(`Failed to fetch this slide. Please check your network connection.`))}var O=te(Le,[[`render`,ze]]),Be={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},Ve=y({__name:`SlideLoading`,setup(e){let n=h(!1);return t(()=>{setTimeout(()=>{n.value=!0},200)}),(e,t)=>(a(),b(`div`,Be,[n.value?(a(),b(p,{key:0},[t[0]||=l(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),t[1]||=l(`div`,null,`Loading slide...`,-1)],64)):v(`v-if`,!0)]))}}),k=o({theme:`default`,title:`00.课前学习`,info:`《AI氛围编程》课前。`,author:`人工智能学院`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`},htmlAttrs:{lang:`zh-CN`},layout:`lesson-cover`,week:0,weekLabel:`课前`,chapter:0,chapterTitle:`课程与基本功`,experiment:``,experimentTitle:``,lead:`先熟悉键盘、编辑器和命令行。然后用编程助手做一个能演示的校园应用。`,course:`AI氛围编程`,unit:`人工智能学院`,defaults:{layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],chapterTitle:`课程与基本功`,course:`AI氛围编程`,unit:`人工智能学院`}}),He=s({get layout(){return k.layout},get transition(){return k.transition},get class(){return k.class},get clicks(){return k.clicks},get name(){return k.name},get preload(){return k.preload},slide:{content:``,revision:`-gf8hpe`,frontmatterRaw:`theme: "default"
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
  sans: "IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif"
  mono: "IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace"
htmlAttrs:
  lang: "zh-CN"
layout: "lesson-cover"
week: 0
weekLabel: "课前"
chapter: 0
chapterTitle: "课程与基本功"
experiment: ""
experimentTitle: ""
lead: "先熟悉键盘、编辑器和命令行。然后用编程助手做一个能演示的校园应用。"
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
  chapterTitle: "课程与基本功"
  course: "AI氛围编程"
  unit: "人工智能学院"
`,note:``,title:`00.课前学习`,index:0,noteHTML:``,images:[],raw:``,frontmatter:k,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),A=o({layout:`lesson-split`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`算法与程序`,kicker:`0.1`,nav:0,wide:`copy`,copy:[{h:`先有计算问题，再有算法`,items:[`Cormen 等《算法导论》第 1 章（第 4 版，2022）：算法是定义清楚的计算过程，接收输入，有限时间内得到输出。问题先规定输入与输出的关系，算法给出步骤。`]},{h:`程序是用语言写出的算法`,items:[`Knuth《计算机程序设计艺术》第 1 卷第 1.1 节：有限步结束，每一步确定并能做完。`]}],diagram:`program-flow`,foot:`阅读：Cormen et al., Introduction to Algorithms, 4th ed., 第 1 章；Knuth, TAOCP Vol. 1, §1.1。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ue=s({get layout(){return A.layout},get transition(){return A.transition},get class(){return A.class},get clicks(){return A.clicks},get name(){return A.name},get preload(){return A.preload},slide:{content:``,revision:`-hdrt3h`,frontmatterRaw:`layout: "lesson-split"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "算法与程序"
kicker: "0.1"
nav: 0
wide: "copy"
copy:
  - h: "先有计算问题，再有算法"
    items: 
      - "Cormen 等《算法导论》第 1 章（第 4 版，2022）：算法是定义清楚的计算过程，接收输入，有限时间内得到输出。问题先规定输入与输出的关系，算法给出步骤。"
  - h: "程序是用语言写出的算法"
    items: 
      - "Knuth《计算机程序设计艺术》第 1 卷第 1.1 节：有限步结束，每一步确定并能做完。"
diagram: "program-flow"
foot: "阅读：Cormen et al., Introduction to Algorithms, 4th ed., 第 1 章；Knuth, TAOCP Vol. 1, §1.1。"
`,note:``,title:`算法与程序`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:A,filepath:``,start:43,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),j=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`培养计划里的编程课`,kicker:`0.2`,nav:0,variant:`rows`,cards:[{num:`01`,title:`程序基础`,body:`从语句写到能跑的程序。变量、分支、循环都从这里开始。自己写过几行，才看得出助手写的对不对。`},{num:`02`,title:`面向对象`,body:`用对象把数据和操作打包，程序按对象组织。课上例子里的一条记录，也可以看成一个对象。`},{num:`03`,title:`数据结构`,body:`数据怎么放，才好查、好改。数组、链表、树这些课会讲。查一条记录时，放法不同，快慢差很多。`},{num:`04`,title:`算法设计`,body:`问题怎么拆，结果对不对怎么判。排序、查找是常用素材。助手给了方案，最后还是人拿规则来核对。`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),We=s({get layout(){return j.layout},get transition(){return j.transition},get class(){return j.class},get clicks(){return j.clicks},get name(){return j.name},get preload(){return j.preload},slide:{content:``,revision:`-z3u4vu`,frontmatterRaw:`layout: "lesson-cards"
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
    body: "从语句写到能跑的程序。变量、分支、循环都从这里开始。自己写过几行，才看得出助手写的对不对。"
  - num: "02"
    title: "面向对象"
    body: "用对象把数据和操作打包，程序按对象组织。课上例子里的一条记录，也可以看成一个对象。"
  - num: "03"
    title: "数据结构"
    body: "数据怎么放，才好查、好改。数组、链表、树这些课会讲。查一条记录时，放法不同，快慢差很多。"
  - num: "04"
    title: "算法设计"
    body: "问题怎么拆，结果对不对怎么判。排序、查找是常用素材。助手给了方案，最后还是人拿规则来核对。"
`,note:``,title:`培养计划里的编程课`,level:1,index:2,noteHTML:``,images:[],raw:``,frontmatter:j,filepath:``,start:69,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),M=o({layout:`lesson-split`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`图灵机与存储程序`,kicker:`0.3`,nav:0,wide:`copy`,copy:[{h:`图灵机，1936`,items:[`Turing 的 On Computable Numbers：一条分格纸带，每次只看一格，状态有限种。Sipser《计算理论导引》第 3 章用它讲可计算性：能按固定规则算完的，都可以在图灵机上实现。`]},{h:`存储程序，1945–1949`,items:[`EDVAC 报告（von Neumann 执笔）：指令和数据都进存储器，换题改存储内容，不必重新接线。`]}],diagram:`von-neumann`,foot:`阅读：Turing 1936；EDVAC 报告 1945；Sipser 第 3 章；Patterson & Hennessy 历史附录。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ge=s({get layout(){return M.layout},get transition(){return M.transition},get class(){return M.class},get clicks(){return M.clicks},get name(){return M.name},get preload(){return M.preload},slide:{content:``,revision:`-o1z1ki`,frontmatterRaw:`layout: "lesson-split"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "图灵机与存储程序"
kicker: "0.3"
nav: 0
wide: "copy"
copy:
  - h: "图灵机，1936"
    items: 
      - "Turing 的 On Computable Numbers：一条分格纸带，每次只看一格，状态有限种。Sipser《计算理论导引》第 3 章用它讲可计算性：能按固定规则算完的，都可以在图灵机上实现。"
  - h: "存储程序，1945–1949"
    items: 
      - "EDVAC 报告（von Neumann 执笔）：指令和数据都进存储器，换题改存储内容，不必重新接线。"
diagram: "von-neumann"
foot: "阅读：Turing 1936；EDVAC 报告 1945；Sipser 第 3 章；Patterson & Hennessy 历史附录。"
`,note:``,title:`图灵机与存储程序`,level:1,index:3,noteHTML:``,images:[],raw:``,frontmatter:M,filepath:``,start:99,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),N=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`高级语言`,kicker:`0.4`,nav:0,lead:`人按问题写源程序，机器仍只执行指令。`,cards:[{num:`01`,title:`1954 年以前`,items:[`多用机器语言或汇编`,`换题要在指令层重写`,`精力花在指令和输入输出`]},{num:`02`,title:`FORTRAN，1957`,on:!0,items:[`1954 年夏开工，约两年半`,`在 IBM 704 上做成`,`1957 年发表`,`写公式，编译成机器程序`]},{num:`03`,title:`按用途设计`,items:[`Fortran：科学计算`,`Cobol：商务数据`,`Lisp：符号处理`]}],foot:`阅读：Backus 等 1957；Backus 1978；Patterson & Hennessy 第 1 章。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ke=s({get layout(){return N.layout},get transition(){return N.transition},get class(){return N.class},get clicks(){return N.clicks},get name(){return N.name},get preload(){return N.preload},slide:{content:``,revision:`-cxtea`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "高级语言"
kicker: "0.4"
nav: 0
lead: "人按问题写源程序，机器仍只执行指令。"
cards:
  - num: "01"
    title: "1954 年以前"
    items: 
      - "多用机器语言或汇编"
      - "换题要在指令层重写"
      - "精力花在指令和输入输出"
  - num: "02"
    title: "FORTRAN，1957"
    on: true
    items: 
      - "1954 年夏开工，约两年半"
      - "在 IBM 704 上做成"
      - "1957 年发表"
      - "写公式，编译成机器程序"
  - num: "03"
    title: "按用途设计"
    items: 
      - "Fortran：科学计算"
      - "Cobol：商务数据"
      - "Lisp：符号处理"
foot: "阅读：Backus 等 1957；Backus 1978；Patterson & Hennessy 第 1 章。"
`,note:``,title:`高级语言`,level:1,index:4,noteHTML:``,images:[],raw:``,frontmatter:N,filepath:``,start:125,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),P=o({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`源程序如何变成结果`,kicker:`0.5`,nav:0,diagram:`compile-interpret`,lead:`编辑器只改文字、保存文件。本课用 IDE：编辑和一键运行在同一窗口。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),qe=s({get layout(){return P.layout},get transition(){return P.transition},get class(){return P.class},get clicks(){return P.clicks},get name(){return P.name},get preload(){return P.preload},slide:{content:``,revision:`-hemr52`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "源程序如何变成结果"
kicker: "0.5"
nav: 0
diagram: "compile-interpret"
lead: "编辑器只改文字、保存文件。本课用 IDE：编辑和一键运行在同一窗口。"
`,note:``,title:`源程序如何变成结果`,level:1,index:5,noteHTML:``,images:[],raw:``,frontmatter:P,filepath:``,start:164,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),F=o({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`软件的三层`,kicker:`0.6`,nav:0,diagram:`three-layer`,lead:`课上例子：查某同学有没有某条记录。列表、条件、存档不要写在同一处。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Je=s({get layout(){return F.layout},get transition(){return F.transition},get class(){return F.class},get clicks(){return F.clicks},get name(){return F.name},get preload(){return F.preload},slide:{content:``,revision:`-hxwxr9`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "软件的三层"
kicker: "0.6"
nav: 0
diagram: "three-layer"
lead: "课上例子：查某同学有没有某条记录。列表、条件、存档不要写在同一处。"
`,note:``,title:`软件的三层`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:182,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),I=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`工科大学生必备技能`,kicker:`0.7`,nav:1,variant:`rows`,cards:[{num:`01`,title:`盲打`,body:`打字时注视屏幕，不必查看键盘。写代码时视线停留在屏幕上，输入才能跟上思路。速度以 WPM 计，可在 TypeRacer 测定。`},{num:`02`,title:`Git`,body:`版本控制系统，保存源代码的修改历史。团队开发中用它查看差异、合并修改，并在出错时恢复先前版本。`},{num:`03`,title:`Markdown`,body:`纯文本标记语言，用记号表示标题、列表和代码。仓库说明文档与多数开发平台默认采用这一格式。`},{num:`04`,title:`LaTeX`,body:`科技文献的排版系统，用于含数学公式的文稿。课程报告和论文中的公式按其语法书写，也可写入 Markdown。`},{num:`05`,title:`Linux 与 Docker`,body:`Linux 用于服务器与开发环境。Docker 把程序与依赖打成镜像，换机后环境仍可一致。macOS 可直接使用，Windows 专业版需启用 WSL2。`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ye=s({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`xo38iy`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "工科大学生必备技能"
kicker: "0.7"
nav: 1
variant: "rows"
cards:
  - num: "01"
    title: "盲打"
    body: "打字时注视屏幕，不必查看键盘。写代码时视线停留在屏幕上，输入才能跟上思路。速度以 WPM 计，可在 TypeRacer 测定。"
  - num: "02"
    title: "Git"
    body: "版本控制系统，保存源代码的修改历史。团队开发中用它查看差异、合并修改，并在出错时恢复先前版本。"
  - num: "03"
    title: "Markdown"
    body: "纯文本标记语言，用记号表示标题、列表和代码。仓库说明文档与多数开发平台默认采用这一格式。"
  - num: "04"
    title: "LaTeX"
    body: "科技文献的排版系统，用于含数学公式的文稿。课程报告和论文中的公式按其语法书写，也可写入 Markdown。"
  - num: "05"
    title: "Linux 与 Docker"
    body: "Linux 用于服务器与开发环境。Docker 把程序与依赖打成镜像，换机后环境仍可一致。macOS 可直接使用，Windows 专业版需启用 WSL2。"
`,note:``,title:`工科大学生必备技能`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:200,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),L=o({layout:`lesson-names`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`助手能写代码，人要会判断`,kicker:`0.8`,nav:2,lead:`用自然语言说明要做什么，由模型写出程序。`,items:[{en:`你`,zh:`定范围和验收`,p:`定要做什么，写出怎样算合格。交来的结果能不能跑、能不能演示，人来核对。现场的数据、该停在哪一步，助手不一定见过。`},{en:`助手`,zh:`写草稿、改文件`,p:`按你的说明写代码、改文件、运行，并按你的标准改到能过。`}],close:`课上把这种做法叫 Vibe Coding。`,foot:`名称：Andrej Karpathy，2025。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Xe=s({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`-yoh5li`,frontmatterRaw:`layout: "lesson-names"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "助手能写代码，人要会判断"
kicker: "0.8"
nav: 2
lead: "用自然语言说明要做什么，由模型写出程序。"
items:
  - en: "你"
    zh: "定范围和验收"
    p: "定要做什么，写出怎样算合格。交来的结果能不能跑、能不能演示，人来核对。现场的数据、该停在哪一步，助手不一定见过。"
  - en: "助手"
    zh: "写草稿、改文件"
    p: "按你的说明写代码、改文件、运行，并按你的标准改到能过。"
close: "课上把这种做法叫 Vibe Coding。"
foot: "名称：Andrej Karpathy，2025。"
`,note:``,title:`助手能写代码，人要会判断`,level:1,index:8,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:233,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),R=o({layout:`lesson-still`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],kicker:`0.9`,nav:2,line:`AI 时代的古法编程`,note:`可以不用，但是得会`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ze=s({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`-wrfj2y`,frontmatterRaw:`layout: "lesson-still"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
kicker: "0.9"
nav: 2
line: "AI 时代的古法编程"
note: "可以不用，但是得会"
`,note:``,index:9,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:259,sourceIndex:9,id:9,no:10},__clicksContext:null,__preloaded:!1}),z=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`打竞赛，是练脑`,kicker:`0.10`,nav:2,lead:`学编程，是打算法竞赛的门槛。`,cards:[{num:`01`,title:`解决问题的品位`,mark:`品位`},{num:`02`,title:`找到问题的直觉`,mark:`直觉`},{num:`03`,title:`定位问题的经验`,mark:`经验`}],leftTitle:`干活`,left:`越来越可以少写。做产品，可以交给 AI。`,rightTitle:`学习`,hi:`right`,right:`得理解计算机在干什么。`,close:`自己读题、自己写、自己调。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Qe=s({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`khivzj`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "打竞赛，是练脑"
kicker: "0.10"
nav: 2
lead: "学编程，是打算法竞赛的门槛。"
cards:
  - num: "01"
    title: "解决问题的品位"
    mark: "品位"
  - num: "02"
    title: "找到问题的直觉"
    mark: "直觉"
  - num: "03"
    title: "定位问题的经验"
    mark: "经验"
leftTitle: "干活"
left: "越来越可以少写。做产品，可以交给 AI。"
rightTitle: "学习"
hi: "right"
right: "得理解计算机在干什么。"
close: "自己读题、自己写、自己调。"
`,note:``,title:`打竞赛，是练脑`,level:1,index:10,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:275,sourceIndex:10,id:10,no:11},__clicksContext:null,__preloaded:!1}),B=o({layout:`lesson-split`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`有些场景，现在的 AI 还编不出来`,kicker:`0.11`,nav:2,wide:`media`,copy:[{h:`要算的问题`,items:[`比赛现场有一张排名表，叫榜。结束前一段时间会封榜。`,`赛后从名次末尾揭开，叫滚榜。要直接给出还剩 x 队未揭开时的局面。`]}],diagram:`scoreboard-roll`,close:`过几年，这样的场景可能也会被做掉。
到那一天，算法还学不学？
`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),$e=s({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`-awk3ou`,frontmatterRaw:`layout: "lesson-split"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "有些场景，现在的 AI 还编不出来"
kicker: "0.11"
nav: 2
wide: "media"
copy:
  - h: "要算的问题"
    items: 
      - "比赛现场有一张排名表，叫榜。结束前一段时间会封榜。"
      - "赛后从名次末尾揭开，叫滚榜。要直接给出还剩 x 队未揭开时的局面。"
diagram: "scoreboard-roll"
close: |
  过几年，这样的场景可能也会被做掉。
  到那一天，算法还学不学？
`,note:``,title:`有些场景，现在的 AI 还编不出来`,level:1,index:11,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:308,sourceIndex:11,id:11,no:12},__clicksContext:null,__preloaded:!1}),V=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`人还在下棋、赛跑`,kicker:`0.12`,nav:2,cards:[{num:`小学`,title:`计算器`,body:`计算器比手算快，照样学加减乘除。`},{num:`1997`,title:`深蓝`,body:`深蓝赢了国际象棋。`},{num:`2016`,title:`AlphaGo`,body:`AlphaGo 赢了围棋。`},{num:`一直`,title:`赛跑`,body:`自行车、汽车都比人跑得快。奥运会还在赛跑。`}],close:`象棋、围棋、奥运会仍然火热，人类追求自身的更高、更快、更强。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),et=s({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`w1qhe`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "人还在下棋、赛跑"
kicker: "0.12"
nav: 2
cards:
  - num: "小学"
    title: "计算器"
    body: "计算器比手算快，照样学加减乘除。"
  - num: "1997"
    title: "深蓝"
    body: "深蓝赢了国际象棋。"
  - num: "2016"
    title: "AlphaGo"
    body: "AlphaGo 赢了围棋。"
  - num: "一直"
    title: "赛跑"
    body: "自行车、汽车都比人跑得快。奥运会还在赛跑。"
close: "象棋、围棋、奥运会仍然火热，人类追求自身的更高、更快、更强。"
`,note:``,title:`人还在下棋、赛跑`,level:1,index:12,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:334,sourceIndex:12,id:12,no:13},__clicksContext:null,__preloaded:!1}),H=o({layout:`lesson-still`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],kicker:`0.13`,nav:2,over:`把 AI 看作一名聪明的员工。`,line:`你愿意当内行的老板，还是外行的老板。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),tt=s({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`qvm3zp`,frontmatterRaw:`layout: "lesson-still"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
kicker: "0.13"
nav: 2
over: "把 AI 看作一名聪明的员工。"
line: "你愿意当内行的老板，还是外行的老板。"
`,note:``,index:13,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:364,sourceIndex:13,id:13,no:14},__clicksContext:null,__preloaded:!1}),U=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`学习编程`,kicker:`0.14`,nav:3,lead:`用，可以靠 AI。学，得自己写。课内不要求。`,cards:[{num:`01`,title:`力扣`,body:`面试题合集，个人练习。`},{num:`02`,title:`Codeforces / AtCoder`,body:`算法排位赛。`},{num:`03`,title:`ACM 爱好者协会`,body:`一起学习算法。`},{num:`04`,title:`CCF-CSP`,body:`软件能力认证。官网 cspro.org。`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),nt=s({get layout(){return U.layout},get transition(){return U.transition},get class(){return U.class},get clicks(){return U.clicks},get name(){return U.name},get preload(){return U.preload},slide:{content:``,revision:`-o6jz81`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "学习编程"
kicker: "0.14"
nav: 3
lead: "用，可以靠 AI。学，得自己写。课内不要求。"
cards:
  - num: "01"
    title: "力扣"
    body: "面试题合集，个人练习。"
  - num: "02"
    title: "Codeforces / AtCoder"
    body: "算法排位赛。"
  - num: "03"
    title: "ACM 爱好者协会"
    body: "一起学习算法。"
  - num: "04"
    title: "CCF-CSP"
    body: "软件能力认证。官网 cspro.org。"
`,note:``,title:`学习编程`,level:1,index:14,noteHTML:``,images:[],raw:``,frontmatter:U,filepath:``,start:380,sourceIndex:14,id:14,no:15},__clicksContext:null,__preloaded:!1}),W=Array(15),G=(t,n)=>e({loader:n,delay:300,loadingComponent:Ve,errorComponent:O,onError:e=>console.error(`Failed to load slide `+(t+1),e)}),rt=async()=>{try{return W[0]??=await D(()=>import(`../md-jYRIR-Uv.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),O}},it=async()=>{try{return W[1]??=await D(()=>import(`../md-BKBmov2p.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},at=async()=>{try{return W[2]??=await D(()=>import(`../md-Dn4jhYe4.js`),__vite__mapDeps([11,1,2,3,4,5,12,8,9,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},ot=async()=>{try{return W[3]??=await D(()=>import(`../md-CfLrxnpM.js`),__vite__mapDeps([14,1,2,3,4,5,7,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},st=async()=>{try{return W[4]??=await D(()=>import(`../md-BWDpZ3Fq.js`),__vite__mapDeps([15,1,2,3,4,5,12,8,9,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},ct=async()=>{try{return W[5]??=await D(()=>import(`../md-ChGHEF-W.js`),__vite__mapDeps([16,1,2,3,4,5,17,8,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},lt=async()=>{try{return W[6]??=await D(()=>import(`../md-Bmnl9jao.js`),__vite__mapDeps([18,1,2,3,4,5,17,8,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},ut=async()=>{try{return W[7]??=await D(()=>import(`../md-C2MVme4N.js`),__vite__mapDeps([19,1,2,3,4,5,12,8,9,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},dt=async()=>{try{return W[8]??=await D(()=>import(`../md-DxG2JSnd.js`),__vite__mapDeps([20,1,2,3,4,5,8]))}catch(e){return console.error(`slide failed to load`,e),O}},ft=async()=>{try{return W[9]??=await D(()=>import(`../md-Bs2vXISt.js`),__vite__mapDeps([21,1,2,3,4,5,22]))}catch(e){return console.error(`slide failed to load`,e),O}},pt=async()=>{try{return W[10]??=await D(()=>import(`../md-DhaUEtRc.js`),__vite__mapDeps([23,1,2,3,4,5,12,8,9,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},mt=async()=>{try{return W[11]??=await D(()=>import(`../md-YajNcYlS.js`),__vite__mapDeps([24,1,2,3,4,5,7,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},ht=async()=>{try{return W[12]??=await D(()=>import(`../md-ComkIItT.js`),__vite__mapDeps([25,1,2,3,4,5,12,8,9,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},gt=async()=>{try{return W[13]??=await D(()=>import(`../md-DssoS7jE.js`),__vite__mapDeps([26,1,2,3,4,5,22]))}catch(e){return console.error(`slide failed to load`,e),O}},_t=async()=>{try{return W[14]??=await D(()=>import(`../md-BijyqBOM.js`),__vite__mapDeps([27,1,2,3,4,5,12,8,9,10,13]))}catch(e){return console.error(`slide failed to load`,e),O}},vt=[{no:1,meta:He,load:rt,component:G(0,rt)},{no:2,meta:Ue,load:it,component:G(1,it)},{no:3,meta:We,load:at,component:G(2,at)},{no:4,meta:Ge,load:ot,component:G(3,ot)},{no:5,meta:Ke,load:st,component:G(4,st)},{no:6,meta:qe,load:ct,component:G(5,ct)},{no:7,meta:Je,load:lt,component:G(6,lt)},{no:8,meta:Ye,load:ut,component:G(7,ut)},{no:9,meta:Xe,load:dt,component:G(8,dt)},{no:10,meta:Ze,load:ft,component:G(9,ft)},{no:11,meta:Qe,load:pt,component:G(10,pt)},{no:12,meta:$e,load:mt,component:G(11,mt)},{no:13,meta:et,load:ht,component:G(12,ht)},{no:14,meta:tt,load:gt,component:G(13,gt)},{no:15,meta:nt,load:_t,component:G(14,_t)}],K=_(vt);function yt(e,t,{mode:n=`replace`}={}){let i=S();return u({get(){let n=i.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(a){r(()=>{(i.currentRoute.value.query[e]??t?.toString())!==a.toString()&&i[d(n)]({query:{...i.currentRoute.value.query,[e]:`${a}`===t?void 0:a}})})}})}function bt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function q(e){return K.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function J(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=q(e)),bt(e,t,n)}var xt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function St(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:xt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function Ct(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=E.transition||void 0,St(r,e<0)}var wt=h(!1),Tt=h(!1),Et=h(!1),Dt=h(!1),Ot=h(!1),kt=h(!1),At=h(!0),jt=o(new Set),Mt=u(()=>jt.size>0),Nt=ce({xs:460,...ae}),Pt=ie(),Ft=se(),It=u(()=>Pt.height.value-Pt.width.value/xe.value>120),Lt=le(x?document.body:null),Y=oe(),Rt=u(()=>[`INPUT`,`TEXTAREA`].includes(Y.value?.tagName||``)),zt=u(()=>[`BUTTON`,`A`].includes(Y.value?.tagName||``));C(`slidev-camera`,`default`,{listenToStorageChanges:!1}),C(`slidev-mic`,`default`,{listenToStorageChanges:!1});var Bt=C(`slidev-scale`,0),Vt=C(`slidev-wake-lock`,!0),Ht=C(`slidev-hide-cursor-idle`,!0);C(`slidev-skip-export-pdf-tip`,!1),C(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var X=C(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),Ut=C(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Wt(){X.value=!X.value}var Gt=C(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Kt=C(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),qt=C(`slidev-editor-width`,x?window.innerWidth*.4:318,{listenToStorageChanges:!1}),Jt=C(`slidev-editor-height`,x?window.innerHeight*.4:300,{listenToStorageChanges:!1}),Yt=_(null),Z=C(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=C(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},Xt=C(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),Zt=u(()=>Object.keys($).some(e=>Xt.value[e]!==$[e]));function Qt(){Q.value+=1,Q.value>3&&(Q.value=1)}function $t(){Z.value=Math.min(2,Z.value+.1)}function en(){Z.value=Math.max(.5,Z.value-.1)}var tn=re(Dt),nn=C(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function rn(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?rn(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:J(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function an(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=an(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function on(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:on(e.children,t+1)}))}function sn(e,t,n){let r=u(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(rn(e,t),e),[])),i=u(()=>an(r.value,n.value,void 0,void 0,t));return u(()=>on(i.value))}function cn(e,t,n=h(0),r,i,a){let o=u(()=>K.value.length),s=h(0),c=h(0),l=u(()=>J(e.value,r.value)),d=u(()=>e.value.no),f=u(()=>e.value.meta?.layout||(d.value===1?`cover`:`default`)),p=u(()=>e.value.meta.slide.frontmatter),g=u(()=>t.value.current),_=u(()=>t.value.clicksStart),v=u(()=>t.value.total),y=u(()=>K.value[Math.min(K.value.length,d.value+1)-1]),b=u(()=>K.value[Math.max(1,d.value-1)-1]),ee=u(()=>d.value<K.value.length||g.value<v.value),te=u(()=>d.value>1||g.value>0),x=u(()=>i.value?void 0:Ct(s.value,e.value,b.value));m(e,(e,t)=>{s.value=e.no-t.no});async function S(e){return!1}let ne=sn(K,d,e);async function re(){c.value=1,v.value<=n.value?await ae():n.value+=1}async function ie(){c.value=-1,n.value<=_.value?await oe(!0):--n.value}async function ae(e=!1){c.value=1,d.value<K.value.length&&await w(d.value+1,e&&!i.value?de:void 0)}async function oe(e=!1){c.value=-1,d.value>1&&await w(d.value-1,e&&!i.value?de:void 0)}function se(){return w(1)}function C(){return w(o.value)}async function w(e,t=0,i=!1){Ot.value=!1;let o=d.value!==e,s=t!==n.value,c=q(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=T(t,l,c?.__clicksContext?.total??999999),(i||o||s)&&await a?.push({path:J(e,r.value,a.currentRoute.value.name===`export`),query:{...a.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function ce(){a?.push({path:J(d.value,!0),query:{...a.currentRoute.value.query}})}function le(){a?.push({path:J(d.value,!1),query:{...a.currentRoute.value.query}})}return{slides:K,total:o,currentPath:l,currentSlideNo:d,currentPage:d,currentSlideRoute:e,currentLayout:f,currentFrontmatter:p,currentTransition:x,clicksDirection:c,nextRoute:y,prevRoute:b,clicksContext:t,clicks:g,clicksStart:_,clicksTotal:v,hasNext:ee,hasPrev:te,tocTree:ne,navDirection:s,openInEditor:S,next:re,prev:ie,go:w,goLast:C,goFirst:se,nextSlide:ae,prevSlide:oe,enterPresenter:ce,exitPresenter:le}}var ln=ne(()=>{let e=S(),t=ue(),n=u(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=u(()=>n.value.has(`print`)||t.name===`export`),i=h(n.value.get(`print`)===`clicks`),a=u(()=>n.value.has(`embedded`)),o=u(()=>t.name===`play`),s=u(()=>t.name===`presenter`),c=u(()=>t.name===`notes`),l=u(()=>!s.value&&(!E.remote||n.value.get(`password`)===E.remote)),d=u(()=>!!t.params.no),f=u(()=>d.value?q(t.params.no)?.no??1:1),p=u(()=>K.value[f.value-1]),m=h(Ie(K.value.length,t?.query?.range)),g=yt(`clicks`,`0`),_=u(()=>y(p.value)),v=u({get(){let e=+(g.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Ot.value=!1,g.value=e.toString()}});function y(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=Me(u({get(){return f.value===t?Math.max(+(g.value??0),n.clicksStart):f.value>t?de:n.clicksStart},set(e){f.value===t&&(g.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:u(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:l,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:_,queryClicksRaw:g,queryClicks:v,printRange:m,getPrimaryClicks:y}}),un=ne(()=>{let e=ln(),t=S(),n=cn(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return m([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!q(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function dn(){let e=un(),t=i()?w(fe,void 0):void 0;if(!t)return e;let n=c(t).nav;return{...e,...n}}export{E as $,Bt as A,J as B,Mt as C,Dt as D,Tt as E,Xt as F,D as G,Fe as H,$ as I,xe as J,be as K,Vt as L,tn as M,Wt as N,X as O,Qt as P,we as Q,Pt as R,At as S,Et as T,Me as U,K as V,Ne as W,Se as X,Ce as Y,Te as Z,zt as _,Ut as a,Q as b,Jt as c,Zt as d,T as et,Ht as f,Rt as g,Kt as h,Nt as i,nn as j,wt as k,qt as l,$t as m,Yt as n,en as o,Ot as p,Ee as q,Y as r,kt as s,dn as t,_e as tt,Lt as u,It as v,Gt as w,Z as x,Ft as y,q as z};