const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-jYRIR-Uv.js","assets/modules/shiki-fGx4atKb.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-C4QGt8TM.js","assets/modules/vue-D6jbpgMm.js","assets/md-CXxtMPLc.js","assets/lesson-split-PYtDNVTz.js","assets/SlideChrome-ChrYyXpc.js","assets/LessonDiagram-Bhbw6YxP.js","assets/SlideFigure-CEmbsuVI.js","assets/md-BqgQmuMl.js","assets/lesson-cards-DTVwmL14.js","assets/md-MOMkfFr4.js","assets/md-C3zSf5Tl.js","assets/md-DH8Cwd8G.js","assets/lesson-compare-DGnxJqIw.js","assets/md-AUEdH4l9.js","assets/md-Baj-2iqt.js","assets/md-CjRa_3Sn.js","assets/md-BLVTtvpo.js","assets/md-DMtuR2If.js","assets/lesson-still-Bvaxq4si.js","assets/md-ByA7UW_P.js","assets/md-CQAeRTCc.js","assets/md-Dea8nx8n.js","assets/md-CHtyJdFz.js","assets/md-u3PS5IHs.js","assets/md-B25kctQ1.js"])))=>i.map(i=>d[i]);
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
`,note:``,title:`算法与程序`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:A,filepath:``,start:43,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),j=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`培养计划里的编程课`,kicker:`0.2`,nav:0,variant:`rows`,cards:[{num:`01`,title:`程序基础`,body:`从语句写到能跑的程序。变量、分支、循环都从这里开始。自己写过几行，才看得出助手写的对不对。`},{num:`02`,title:`面向对象`,body:`用对象把数据和操作打包，程序按对象组织。课上例子里的一条记录，也可以看成一个对象。`},{num:`03`,title:`数据结构`,body:`数据怎么放，才好查、好改。数组、链表、树这些课会讲。查一条记录时，放法不同，快慢差很多。`},{num:`04`,title:`算法课`,body:`问题怎么拆，结果对不对怎么判。排序、查找是常用素材。助手给了方案，最后还是人拿规则来核对。`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),We=s({get layout(){return j.layout},get transition(){return j.transition},get class(){return j.class},get clicks(){return j.clicks},get name(){return j.name},get preload(){return j.preload},slide:{content:``,revision:`i89v79`,frontmatterRaw:`layout: "lesson-cards"
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
    title: "算法课"
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
`,note:``,title:`软件的三层`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:182,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),I=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课前应掌握的四项`,kicker:`0.7`,nav:1,variant:`rows`,cards:[{num:`01`,title:`盲打`,body:`练到不看键盘也能打字。可在 TypeRacer 上练。检索：Words per minute。`},{num:`02`,title:`IDE 与实验环境`,body:`分清编译器、编辑器、IDE。本课用在线实验环境与 CodeBuddy；自己电脑可用 VS Code。打开工作空间，新建文件，跑通一条命令。`},{num:`03`,title:`Git 与 Markdown`,body:`Git 记版本，课上会对照两次提交。说明用 Markdown 写标题和列表。LaTeX 以后写论文再用，本课不要求现在学。`},{num:`04`,title:`密钥`,body:`账号、口令只放本地配置，不写进对话，不进仓库。`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ye=s({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`w761qh`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课前应掌握的四项"
kicker: "0.7"
nav: 1
variant: "rows"
cards:
  - num: "01"
    title: "盲打"
    body: "练到不看键盘也能打字。可在 TypeRacer 上练。检索：Words per minute。"
  - num: "02"
    title: "IDE 与实验环境"
    body: "分清编译器、编辑器、IDE。本课用在线实验环境与 CodeBuddy；自己电脑可用 VS Code。打开工作空间，新建文件，跑通一条命令。"
  - num: "03"
    title: "Git 与 Markdown"
    body: "Git 记版本，课上会对照两次提交。说明用 Markdown 写标题和列表。LaTeX 以后写论文再用，本课不要求现在学。"
  - num: "04"
    title: "密钥"
    body: "账号、口令只放本地配置，不写进对话，不进仓库。"
`,note:``,title:`课前应掌握的四项`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:200,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),L=o({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`助手能写代码，人要会判断`,kicker:`0.8`,nav:2,leftTitle:`竞赛与思维`,left:`题目怎么拆、答案对不对，还是人来判。学算法，是学判断时用到的素材和规则。`,rightTitle:`开发现场`,hi:`right`,right:`要看出助手给的方案能不能用，自己得先会用。现场的数据、该停在哪一步、机器上有什么限制，助手不一定见过。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Xe=s({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`mo4xcl`,frontmatterRaw:`layout: "lesson-compare"
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
leftTitle: "竞赛与思维"
left: "题目怎么拆、答案对不对，还是人来判。学算法，是学判断时用到的素材和规则。"
rightTitle: "开发现场"
hi: "right"
right: "要看出助手给的方案能不能用，自己得先会用。现场的数据、该停在哪一步、机器上有什么限制，助手不一定见过。"
`,note:``,title:`助手能写代码，人要会判断`,level:1,index:8,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:230,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),R=o({layout:`lesson-names`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`人与助手的分工`,kicker:`0.9`,nav:2,items:[{en:`你`,zh:`定范围和验收`,p:`定要做什么，写出怎样算合格。助手交来的结果，核对着能不能跑、能不能演示。`},{en:`助手`,zh:`写草稿、改文件`,p:`按你的说明写代码、改文件、运行，并按你的标准改到能过。`}],foot:`用自然语言说明要做什么，由模型写出程序。课上把这种做法叫 Vibe Coding。这个名字是 2025 年 Karpathy 起的。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Ze=s({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`-lrcv50`,frontmatterRaw:`layout: "lesson-names"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "人与助手的分工"
kicker: "0.9"
nav: 2
items:
  - en: "你"
    zh: "定范围和验收"
    p: "定要做什么，写出怎样算合格。助手交来的结果，核对着能不能跑、能不能演示。"
  - en: "助手"
    zh: "写草稿、改文件"
    p: "按你的说明写代码、改文件、运行，并按你的标准改到能过。"
foot: "用自然语言说明要做什么，由模型写出程序。课上把这种做法叫 Vibe Coding。这个名字是 2025 年 Karpathy 起的。"
`,note:``,title:`人与助手的分工`,level:1,index:9,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:251,sourceIndex:9,id:9,no:10},__clicksContext:null,__preloaded:!1}),z=o({layout:`lesson-still`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],kicker:`0.10`,nav:2,line:`AI 时代的古法编程`,note:`可以不用，但是得会`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),Qe=s({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`jpdgvu`,frontmatterRaw:`layout: "lesson-still"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
kicker: "0.10"
nav: 2
line: "AI 时代的古法编程"
note: "可以不用，但是得会"
`,note:``,index:10,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:275,sourceIndex:10,id:10,no:11},__clicksContext:null,__preloaded:!1}),B=o({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`古法编程`,kicker:`0.11`,nav:2,leftTitle:`干活`,left:`越来越可以少写。做产品，可以交给 AI。`,rightTitle:`学习`,hi:`right`,right:`得理解计算机在干什么。`,close:`自己读题、自己写、自己调。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),$e=s({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`slx3jt`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "古法编程"
kicker: "0.11"
nav: 2
leftTitle: "干活"
left: "越来越可以少写。做产品，可以交给 AI。"
rightTitle: "学习"
hi: "right"
right: "得理解计算机在干什么。"
close: "自己读题、自己写、自己调。"
`,note:``,title:`古法编程`,level:1,index:11,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:291,sourceIndex:11,id:11,no:12},__clicksContext:null,__preloaded:!1}),V=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`打竞赛，是练脑`,kicker:`0.12`,nav:2,lead:`学编程，是打算法竞赛的门槛。`,cards:[{num:`01`,title:`解决问题的品位`,mark:`品位`},{num:`02`,title:`找到问题的直觉`,mark:`直觉`},{num:`03`,title:`定位问题的经验`,mark:`经验`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),et=s({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`zgn1vr`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "打竞赛，是练脑"
kicker: "0.12"
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
`,note:``,title:`打竞赛，是练脑`,level:1,index:12,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:313,sourceIndex:12,id:12,no:13},__clicksContext:null,__preloaded:!1}),H=o({layout:`lesson-compare`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`有些场景，现在的 AI 还编不出来`,kicker:`0.13`,nav:2,lead:`没见过的细分问题，没有训练数据，凭空造不出。`,leftTitle:`封榜`,left:`比赛结束前一段时间，排行榜冻结，不再显示此后的通过情况。`,rightTitle:`中间态`,right:`如何快速得到只剩 x 支队伍尚未揭晓时的局面。`,close:`过几年，这样的场景可能也会被做掉。
到那一天，算法还学不学？
`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),tt=s({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`-sis5cg`,frontmatterRaw:`layout: "lesson-compare"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "有些场景，现在的 AI 还编不出来"
kicker: "0.13"
nav: 2
lead: "没见过的细分问题，没有训练数据，凭空造不出。"
leftTitle: "封榜"
left: "比赛结束前一段时间，排行榜冻结，不再显示此后的通过情况。"
rightTitle: "中间态"
right: "如何快速得到只剩 x 支队伍尚未揭晓时的局面。"
close: |
  过几年，这样的场景可能也会被做掉。
  到那一天，算法还学不学？
`,note:``,title:`有些场景，现在的 AI 还编不出来`,level:1,index:13,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:340,sourceIndex:13,id:13,no:14},__clicksContext:null,__preloaded:!1}),U=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`人还在下棋、赛跑`,kicker:`0.14`,nav:2,cards:[{num:`小学`,title:`计算器`,body:`计算器比手算快，照样学加减乘除。`},{num:`1997`,title:`深蓝`,body:`深蓝赢了国际象棋。`},{num:`2016`,title:`AlphaGo`,body:`AlphaGo 赢了围棋。`},{num:`一直`,title:`赛跑`,body:`自行车、汽车都比人跑得快。奥运会还在赛跑。`}],close:`象棋、围棋、奥运会仍然火热，人类追求自身的更高、更快、更强。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),nt=s({get layout(){return U.layout},get transition(){return U.transition},get class(){return U.class},get clicks(){return U.clicks},get name(){return U.name},get preload(){return U.preload},slide:{content:``,revision:`-1wxsbw`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "人还在下棋、赛跑"
kicker: "0.14"
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
`,note:``,title:`人还在下棋、赛跑`,level:1,index:14,noteHTML:``,images:[],raw:``,frontmatter:U,filepath:``,start:364,sourceIndex:14,id:14,no:15},__clicksContext:null,__preloaded:!1}),W=o({layout:`lesson-still`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],kicker:`0.15`,nav:2,over:`把 AI 看作一名聪明的员工。`,line:`你愿意当内行的老板，还是外行的老板。`,fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),rt=s({get layout(){return W.layout},get transition(){return W.transition},get class(){return W.class},get clicks(){return W.clicks},get name(){return W.name},get preload(){return W.preload},slide:{content:``,revision:`pz8a5v`,frontmatterRaw:`layout: "lesson-still"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
kicker: "0.15"
nav: 2
over: "把 AI 看作一名聪明的员工。"
line: "你愿意当内行的老板，还是外行的老板。"
`,note:``,index:15,noteHTML:``,images:[],raw:``,frontmatter:W,filepath:``,start:394,sourceIndex:15,id:15,no:16},__clicksContext:null,__preloaded:!1}),G=o({layout:`lesson-cards`,week:0,weekLabel:`课前`,spine:[`课程`,`基本功`,`判断力`,`自检`],heading:`课外练习，自愿`,kicker:`0.16`,nav:3,lead:`用，可以靠 AI。学，得自己写。课内不要求。`,cards:[{num:`01`,title:`力扣`,body:`面试题合集，个人练习。`},{num:`02`,title:`Codeforces / AtCoder`,body:`算法排位赛。校内竞赛面向全校，想参加的可以进实验室。`},{num:`03`,title:`ACM 实验室`,body:`三人组队刷题。校内竞赛面向想参赛的同学。`},{num:`04`,title:`CCF-CSP`,body:`软件能力认证。官网 cspro.org。`}],fonts:{provider:`none`,sans:`IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, Noto Sans CJK SC, Source Han Sans SC, system-ui, sans-serif`,mono:`IBM Plex Mono, Sarasa Mono SC, ui-monospace, Consolas, monospace`}}),it=s({get layout(){return G.layout},get transition(){return G.transition},get class(){return G.class},get clicks(){return G.clicks},get name(){return G.name},get preload(){return G.preload},slide:{content:``,revision:`-vdmsyu`,frontmatterRaw:`layout: "lesson-cards"
week: 0
weekLabel: "课前"
spine:
  - "课程"
  - "基本功"
  - "判断力"
  - "自检"
heading: "课外练习，自愿"
kicker: "0.16"
nav: 3
lead: "用，可以靠 AI。学，得自己写。课内不要求。"
cards:
  - num: "01"
    title: "力扣"
    body: "面试题合集，个人练习。"
  - num: "02"
    title: "Codeforces / AtCoder"
    body: "算法排位赛。校内竞赛面向全校，想参加的可以进实验室。"
  - num: "03"
    title: "ACM 实验室"
    body: "三人组队刷题。校内竞赛面向想参赛的同学。"
  - num: "04"
    title: "CCF-CSP"
    body: "软件能力认证。官网 cspro.org。"
`,note:``,title:`课外练习，自愿`,level:1,index:16,noteHTML:``,images:[],raw:``,frontmatter:G,filepath:``,start:410,sourceIndex:16,id:16,no:17},__clicksContext:null,__preloaded:!1}),K=Array(17),q=(t,n)=>e({loader:n,delay:300,loadingComponent:Ve,errorComponent:O,onError:e=>console.error(`Failed to load slide `+(t+1),e)}),at=async()=>{try{return K[0]??=await D(()=>import(`../md-jYRIR-Uv.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),O}},ot=async()=>{try{return K[1]??=await D(()=>import(`../md-CXxtMPLc.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},st=async()=>{try{return K[2]??=await D(()=>import(`../md-BqgQmuMl.js`),__vite__mapDeps([11,1,2,3,4,5,12,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},ct=async()=>{try{return K[3]??=await D(()=>import(`../md-MOMkfFr4.js`),__vite__mapDeps([13,1,2,3,4,5,7,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},lt=async()=>{try{return K[4]??=await D(()=>import(`../md-C3zSf5Tl.js`),__vite__mapDeps([14,1,2,3,4,5,12,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},ut=async()=>{try{return K[5]??=await D(()=>import(`../md-DH8Cwd8G.js`),__vite__mapDeps([15,1,2,3,4,5,16,8,9]))}catch(e){return console.error(`slide failed to load`,e),O}},dt=async()=>{try{return K[6]??=await D(()=>import(`../md-AUEdH4l9.js`),__vite__mapDeps([17,1,2,3,4,5,16,8,9]))}catch(e){return console.error(`slide failed to load`,e),O}},ft=async()=>{try{return K[7]??=await D(()=>import(`../md-Baj-2iqt.js`),__vite__mapDeps([18,1,2,3,4,5,12,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},pt=async()=>{try{return K[8]??=await D(()=>import(`../md-CjRa_3Sn.js`),__vite__mapDeps([19,1,2,3,4,5,16,8,9]))}catch(e){return console.error(`slide failed to load`,e),O}},mt=async()=>{try{return K[9]??=await D(()=>import(`../md-BLVTtvpo.js`),__vite__mapDeps([20,1,2,3,4,5,8]))}catch(e){return console.error(`slide failed to load`,e),O}},ht=async()=>{try{return K[10]??=await D(()=>import(`../md-DMtuR2If.js`),__vite__mapDeps([21,1,2,3,4,5,22]))}catch(e){return console.error(`slide failed to load`,e),O}},gt=async()=>{try{return K[11]??=await D(()=>import(`../md-ByA7UW_P.js`),__vite__mapDeps([23,1,2,3,4,5,16,8,9]))}catch(e){return console.error(`slide failed to load`,e),O}},_t=async()=>{try{return K[12]??=await D(()=>import(`../md-CQAeRTCc.js`),__vite__mapDeps([24,1,2,3,4,5,12,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},vt=async()=>{try{return K[13]??=await D(()=>import(`../md-Dea8nx8n.js`),__vite__mapDeps([25,1,2,3,4,5,16,8,9]))}catch(e){return console.error(`slide failed to load`,e),O}},yt=async()=>{try{return K[14]??=await D(()=>import(`../md-CHtyJdFz.js`),__vite__mapDeps([26,1,2,3,4,5,12,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},bt=async()=>{try{return K[15]??=await D(()=>import(`../md-u3PS5IHs.js`),__vite__mapDeps([27,1,2,3,4,5,22]))}catch(e){return console.error(`slide failed to load`,e),O}},xt=async()=>{try{return K[16]??=await D(()=>import(`../md-B25kctQ1.js`),__vite__mapDeps([28,1,2,3,4,5,12,8,9,10]))}catch(e){return console.error(`slide failed to load`,e),O}},St=[{no:1,meta:He,load:at,component:q(0,at)},{no:2,meta:Ue,load:ot,component:q(1,ot)},{no:3,meta:We,load:st,component:q(2,st)},{no:4,meta:Ge,load:ct,component:q(3,ct)},{no:5,meta:Ke,load:lt,component:q(4,lt)},{no:6,meta:qe,load:ut,component:q(5,ut)},{no:7,meta:Je,load:dt,component:q(6,dt)},{no:8,meta:Ye,load:ft,component:q(7,ft)},{no:9,meta:Xe,load:pt,component:q(8,pt)},{no:10,meta:Ze,load:mt,component:q(9,mt)},{no:11,meta:Qe,load:ht,component:q(10,ht)},{no:12,meta:$e,load:gt,component:q(11,gt)},{no:13,meta:et,load:_t,component:q(12,_t)},{no:14,meta:tt,load:vt,component:q(13,vt)},{no:15,meta:nt,load:yt,component:q(14,yt)},{no:16,meta:rt,load:bt,component:q(15,bt)},{no:17,meta:it,load:xt,component:q(16,xt)}],J=_(St);function Ct(e,t,{mode:n=`replace`}={}){let i=S();return u({get(){let n=i.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(a){r(()=>{(i.currentRoute.value.query[e]??t?.toString())!==a.toString()&&i[d(n)]({query:{...i.currentRoute.value.query,[e]:`${a}`===t?void 0:a}})})}})}function wt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function Y(e){return J.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function X(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=Y(e)),wt(e,t,n)}var Tt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function Et(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:Tt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function Dt(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=E.transition||void 0,Et(r,e<0)}var Ot=h(!1),kt=h(!1),At=h(!1),jt=h(!1),Mt=h(!1),Nt=h(!1),Pt=h(!0),Ft=o(new Set),It=u(()=>Ft.size>0),Lt=ce({xs:460,...ae}),Rt=ie(),zt=se(),Bt=u(()=>Rt.height.value-Rt.width.value/xe.value>120),Vt=le(x?document.body:null),Ht=oe(),Ut=u(()=>[`INPUT`,`TEXTAREA`].includes(Ht.value?.tagName||``)),Wt=u(()=>[`BUTTON`,`A`].includes(Ht.value?.tagName||``));C(`slidev-camera`,`default`,{listenToStorageChanges:!1}),C(`slidev-mic`,`default`,{listenToStorageChanges:!1});var Gt=C(`slidev-scale`,0),Kt=C(`slidev-wake-lock`,!0),qt=C(`slidev-hide-cursor-idle`,!0);C(`slidev-skip-export-pdf-tip`,!1),C(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var Jt=C(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),Yt=C(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Xt(){Jt.value=!Jt.value}var Zt=C(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Qt=C(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),$t=C(`slidev-editor-width`,x?window.innerWidth*.4:318,{listenToStorageChanges:!1}),en=C(`slidev-editor-height`,x?window.innerHeight*.4:300,{listenToStorageChanges:!1}),tn=_(null),Z=C(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=C(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},nn=C(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),rn=u(()=>Object.keys($).some(e=>nn.value[e]!==$[e]));function an(){Q.value+=1,Q.value>3&&(Q.value=1)}function on(){Z.value=Math.min(2,Z.value+.1)}function sn(){Z.value=Math.max(.5,Z.value-.1)}var cn=re(jt),ln=C(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function un(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?un(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:X(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function dn(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=dn(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function fn(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:fn(e.children,t+1)}))}function pn(e,t,n){let r=u(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(un(e,t),e),[])),i=u(()=>dn(r.value,n.value,void 0,void 0,t));return u(()=>fn(i.value))}function mn(e,t,n=h(0),r,i,a){let o=u(()=>J.value.length),s=h(0),c=h(0),l=u(()=>X(e.value,r.value)),d=u(()=>e.value.no),f=u(()=>e.value.meta?.layout||(d.value===1?`cover`:`default`)),p=u(()=>e.value.meta.slide.frontmatter),g=u(()=>t.value.current),_=u(()=>t.value.clicksStart),v=u(()=>t.value.total),y=u(()=>J.value[Math.min(J.value.length,d.value+1)-1]),b=u(()=>J.value[Math.max(1,d.value-1)-1]),ee=u(()=>d.value<J.value.length||g.value<v.value),te=u(()=>d.value>1||g.value>0),x=u(()=>i.value?void 0:Dt(s.value,e.value,b.value));m(e,(e,t)=>{s.value=e.no-t.no});async function S(e){return!1}let ne=pn(J,d,e);async function re(){c.value=1,v.value<=n.value?await ae():n.value+=1}async function ie(){c.value=-1,n.value<=_.value?await oe(!0):--n.value}async function ae(e=!1){c.value=1,d.value<J.value.length&&await w(d.value+1,e&&!i.value?de:void 0)}async function oe(e=!1){c.value=-1,d.value>1&&await w(d.value-1,e&&!i.value?de:void 0)}function se(){return w(1)}function C(){return w(o.value)}async function w(e,t=0,i=!1){Mt.value=!1;let o=d.value!==e,s=t!==n.value,c=Y(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=T(t,l,c?.__clicksContext?.total??999999),(i||o||s)&&await a?.push({path:X(e,r.value,a.currentRoute.value.name===`export`),query:{...a.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function ce(){a?.push({path:X(d.value,!0),query:{...a.currentRoute.value.query}})}function le(){a?.push({path:X(d.value,!1),query:{...a.currentRoute.value.query}})}return{slides:J,total:o,currentPath:l,currentSlideNo:d,currentPage:d,currentSlideRoute:e,currentLayout:f,currentFrontmatter:p,currentTransition:x,clicksDirection:c,nextRoute:y,prevRoute:b,clicksContext:t,clicks:g,clicksStart:_,clicksTotal:v,hasNext:ee,hasPrev:te,tocTree:ne,navDirection:s,openInEditor:S,next:re,prev:ie,go:w,goLast:C,goFirst:se,nextSlide:ae,prevSlide:oe,enterPresenter:ce,exitPresenter:le}}var hn=ne(()=>{let e=S(),t=ue(),n=u(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=u(()=>n.value.has(`print`)||t.name===`export`),i=h(n.value.get(`print`)===`clicks`),a=u(()=>n.value.has(`embedded`)),o=u(()=>t.name===`play`),s=u(()=>t.name===`presenter`),c=u(()=>t.name===`notes`),l=u(()=>!s.value&&(!E.remote||n.value.get(`password`)===E.remote)),d=u(()=>!!t.params.no),f=u(()=>d.value?Y(t.params.no)?.no??1:1),p=u(()=>J.value[f.value-1]),m=h(Ie(J.value.length,t?.query?.range)),g=Ct(`clicks`,`0`),_=u(()=>y(p.value)),v=u({get(){let e=+(g.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Mt.value=!1,g.value=e.toString()}});function y(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=Me(u({get(){return f.value===t?Math.max(+(g.value??0),n.clicksStart):f.value>t?de:n.clicksStart},set(e){f.value===t&&(g.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:u(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:l,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:_,queryClicksRaw:g,queryClicks:v,printRange:m,getPrimaryClicks:y}}),gn=ne(()=>{let e=hn(),t=S(),n=mn(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return m([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!Y(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function _n(){let e=gn(),t=i()?w(fe,void 0):void 0;if(!t)return e;let n=c(t).nav;return{...e,...n}}export{E as $,Gt as A,X as B,It as C,jt as D,kt as E,nn as F,D as G,Fe as H,$ as I,xe as J,be as K,Kt as L,cn as M,Xt as N,Jt as O,an as P,we as Q,Rt as R,Pt as S,At as T,Me as U,J as V,Ne as W,Se as X,Ce as Y,Te as Z,Wt as _,Yt as a,Q as b,en as c,rn as d,T as et,qt as f,Ut as g,Qt as h,Lt as i,ln as j,Ot as k,$t as l,on as m,tn as n,sn as o,Mt as p,Ee as q,Ht as r,Nt as s,_n as t,_e as tt,Vt as u,Bt as v,Zt as w,Z as x,zt as y,Y as z};