const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-DG32bVCg.js","assets/modules/shiki-fGx4atKb.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-C4QGt8TM.js","assets/modules/vue-D6jbpgMm.js","assets/md-D714Jqny.js","assets/slidev/SlideChrome-C3DFkiJc.js","assets/syncState-B-76tFHB.js","assets/index-DLCWv6UX.js","assets/index-8dE_dpr8.css","assets/useDrawings-CpRnBEyM.js","assets/ItemList-BQUphCJP.js","assets/md-Dp6b4WkO.js","assets/md-BbSUnWkg.js","assets/lesson-cards-C0utx9uI.js","assets/md-CC3epYu1.js","assets/md-DreMLa90.js","assets/md-CNjgMA01.js","assets/md-C_4P5fcv.js","assets/md-CVASpu-T.js"])))=>i.map(i=>d[i]);
import{C as e,I as t,L as n,M as r,O as i,R as a,at as o,ct as s,dt as c,g as l,h as u,ht as d,mt as f,p,q as m,st as h,tt as g,ut as _,v,w as y,y as b,yt as ee}from"../modules/shiki-fGx4atKb.js";import{t as te}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as x,B as S,E as C,I as ne,T as re,a as w,c as ie,g as ae,h as T,k as E,l as oe,m as se,z as ce}from"../modules/vue-D6jbpgMm.js";import{l as D,y as le}from"./context-C4QGt8TM.js";function O(e,t,n){return Math.min(n,Math.max(t,e))}function ue(...e){return fe(e).reduce((e,t)=>e+t,0)}function de(e){return e??=[],Array.isArray(e)?e:[e]}function fe(e){return de(e).flat(1)}function pe(e){return Array.from(new Set(e))}function k(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function me(e){return e!=null}function he(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(me))}var A={theme:`default`,title:`03.Skills、Rules与结构化Prompt`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`auto`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"Avenir Next"`,`"Nunito Sans"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"Fira Code"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`Nunito Sans`,`Fira Code`],provider:`google`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:null,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/03.Skills与结构化Prompt工作流/slides.md`,slidesTitle:`03.Skills、Rules与结构化Prompt - Slidev`},ge=`build`,j=u(()=>A.aspectRatio),_e=u(()=>A.canvasWidth),ve=u(()=>Math.ceil(_e.value/j.value)),ye=u(()=>he(A.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),be=A.slidesTitle,xe=`/courses/vibe-coding/03/#/`,Se=`modulepreload`,Ce=function(e){return`/courses/vibe-coding/03/`+e},we={},M=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ce(t,n),t=s(t),t in we)return;we[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Se,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function N(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function Te(e){return Array.isArray(e)?[N(e[0]),N(e[1])]:null}function P(e,r=0,i){let a=h(!1),o=new Map,c=new Map,l={get current(){return O(+e.value,r,l.total)},set current(t){e.value=a.value?O(t,r,l.total):t},clicksStart:r,get relativeSizeMap(){return o},get maxMap(){return c},get isMounted(){return a.value},setup(){t(()=>{a.value=!0,c=s(c),g(e)||(l.current=e.value)}),n(()=>{a.value=!1,o=new Map,c=new Map})},calculateSince(e,t=1){let n=N(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=l.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:u(()=>l.current-r),isCurrent:u(()=>l.current===r),isActive:u(()=>l.current>=r)}},calculateRange(e){let t=Te(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=l.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:u(()=>l.current-i),isCurrent:u(()=>l.current===i),isActive:u(()=>i<=l.current&&l.current<a)}},calculate(e){return Array.isArray(e)?l.calculateRange(e):l.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),c.set(e,r)},unregister(e){o.delete(e),c.delete(e)},get currentOffset(){return ue(...o.values())},get total(){return i??(a.value?Math.max(0,...c.values()):0)}};return l}function Ee(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=h(Math.max(f(t),n));return m(()=>f(t),e=>{r.value=Math.max(e,n)}),P(r,n,e?.meta?.clicks)}var De=/[a-z]/i;function Oe(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!De.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function ke(e,t){if(!t||t===`all`||t===`*`)return k(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(...k(+t,i?+i+1:e+1))}return pe(n).filter(t=>t<=e).sort((e,t)=>e-t)}var Ae={},je={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function Me(e,t){return a(),b(`div`,je,ee(`Failed to fetch this slide. Please check your network connection.`))}var F=te(Ae,[[`render`,Me]]),Ne={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},Pe=y({__name:`SlideLoading`,setup(e){let n=h(!1);return t(()=>{setTimeout(()=>{n.value=!0},200)}),(e,t)=>(a(),b(`div`,Ne,[n.value?(a(),b(p,{key:0},[t[0]||=l(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),t[1]||=l(`div`,null,`Loading slide...`,-1)],64)):v(`v-if`,!0)]))}}),I=o({theme:`default`,title:`03.Skills、Rules与结构化Prompt`,info:`《AI氛围编程》课次 03。`,author:`人工智能学院`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`,sans:`Microsoft YaHei, PingFang SC, Noto Sans SC, Source Han Sans SC, sans-serif`,mono:`Sarasa Mono SC, Fira Code, Consolas, ui-monospace, monospace`},htmlAttrs:{lang:`zh-CN`},layout:`lesson-cover`,week:3,weekLabel:`课次 03`,chapter:1,chapterTitle:`协作入门与工程基础`,experiment:2,experimentTitle:`工作流与主路径原型`,lead:`助手好不好用，取决于你把任务写到什么程度。今天对比一组写不清的说明和一组可验收的说明。`,course:`AI氛围编程`,unit:`人工智能学院`,defaults:{layout:`lesson-cards`,week:3,weekLabel:`课次 03`,spine:[]}}),Fe=s({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`-ruqdzk`,frontmatterRaw:`theme: "default"
title: "03.Skills、Rules与结构化Prompt"
info: "《AI氛围编程》课次 03。"
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
week: 3
weekLabel: "课次 03"
chapter: 1
chapterTitle: "协作入门与工程基础"
experiment: 2
experimentTitle: "工作流与主路径原型"
lead: "助手好不好用，取决于你把任务写到什么程度。今天对比一组写不清的说明和一组可验收的说明。"
course: "AI氛围编程"
unit: "人工智能学院"
defaults:
  layout: "lesson-cards"
  week: 3
  weekLabel: "课次 03"
  spine: []
`,note:``,title:`03.Skills、Rules与结构化Prompt`,index:0,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),L=o({layout:`lesson-agenda`,week:3,weekLabel:`课次 03`,heading:`本日安排`,lecture:[`失败常见在任务没写清`,`有效工作流：小步、可核对、留下记录`,`结构化说明：角色、任务、约束、输出`],practice:[`写 1 组差/好对照，主题绑定本组主路径`,`填工作流自检`,`把对照里「好」的那条拿去改本周代码`]}),Ie=s({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`-l54kw8`,frontmatterRaw:`layout: "lesson-agenda"
week: 3
weekLabel: "课次 03"
heading: "本日安排"
lecture:
  - "失败常见在任务没写清"
  - "有效工作流：小步、可核对、留下记录"
  - "结构化说明：角色、任务、约束、输出"
practice:
  - "写 1 组差/好对照，主题绑定本组主路径"
  - "填工作流自检"
  - "把对照里「好」的那条拿去改本周代码"
`,note:``,title:`本日安排`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:36,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),R=o({layout:`lesson-compare`,week:3,weekLabel:`课次 03`,heading:`两种说明，结果差很远`,kicker:`3.1　失败案例`,leftTitle:`难验收`,left:[`帮我把系统做完善`,`参考常见网站的体验`,`代码质量高一点`],rightTitle:`可验收`,right:[`按项目要求的输入，返回结果或明确的找不到`,`缺字段时返回明确错误，不空白`,`只改查询这一条路径，不动登录`]}),Le=s({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`-zd30c6`,frontmatterRaw:`layout: "lesson-compare"
week: 3
weekLabel: "课次 03"
heading: "两种说明，结果差很远"
kicker: "3.1　失败案例"
leftTitle: "难验收"
left:
  - "帮我把系统做完善"
  - "参考常见网站的体验"
  - "代码质量高一点"
rightTitle: "可验收"
right:
  - "按项目要求的输入，返回结果或明确的找不到"
  - "缺字段时返回明确错误，不空白"
  - "只改查询这一条路径，不动登录"
`,note:``,title:`两种说明，结果差很远`,level:1,index:2,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:53,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),z=o({layout:`lesson-cards`,week:3,weekLabel:`课次 03`,heading:`工作流四步`,kicker:`3.2　怎么推进`,cards:[{num:`01`,title:`写清`,body:`输入、输出、不做哪些。`},{num:`02`,title:`小步`,body:`一次只让助手改一处能看见的结果。`},{num:`03`,title:`核对`,body:`自己跑命令，不要只看助手说「完成了」。`,on:!0},{num:`04`,title:`留下`,body:`提交说明或报告里写清改了什么。`}]}),Re=s({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`h09d99`,frontmatterRaw:`layout: "lesson-cards"
week: 3
weekLabel: "课次 03"
heading: "工作流四步"
kicker: "3.2　怎么推进"
cards:
  - num: "01"
    title: "写清"
    body: "输入、输出、不做哪些。"
  - num: "02"
    title: "小步"
    body: "一次只让助手改一处能看见的结果。"
  - num: "03"
    title: "核对"
    body: "自己跑命令，不要只看助手说「完成了」。"
    on: true
  - num: "04"
    title: "留下"
    body: "提交说明或报告里写清改了什么。"
`,note:``,title:`工作流四步`,level:1,index:3,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:73,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),B=o({layout:`lesson-split`,week:3,weekLabel:`课次 03`,heading:`结构化说明的四块`,kicker:`3.3　Prompt`,diagram:`prompt-four`,items:[`角色：你在给零基础同学做本组选题的主路径。`,`任务：实现项目要求里那条能演示的主路径。`,`约束：不改登录；日期格式与模板一致。`,`输出：改动的文件列表，以及一条成功、一条失败的返回例子。`]}),ze=s({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`-v9vkm8`,frontmatterRaw:`layout: "lesson-split"
week: 3
weekLabel: "课次 03"
heading: "结构化说明的四块"
kicker: "3.3　Prompt"
diagram: "prompt-four"
items:
  - "角色：你在给零基础同学做本组选题的主路径。"
  - "任务：实现项目要求里那条能演示的主路径。"
  - "约束：不改登录；日期格式与模板一致。"
  - "输出：改动的文件列表，以及一条成功、一条失败的返回例子。"
`,note:``,title:`结构化说明的四块`,level:1,index:4,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:97,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),V=o({layout:`lesson-cards`,week:3,weekLabel:`课次 03`,heading:`Skills 与 Rules 在课上怎么用`,kicker:`3.4　约束文件`,cards:[{num:`01`,title:`Skills`,body:`某一类任务的固定步骤，例如「如何交实验报告」。`},{num:`02`,title:`Rules`,body:`全程禁令，例如禁止把密钥写进仓库。`},{num:`03`,title:`为何要写下来`,body:`避免每周把同样的话再贴一遍；审查时有对照。`}]}),Be=s({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`dh8aws`,frontmatterRaw:`layout: "lesson-cards"
week: 3
weekLabel: "课次 03"
heading: "Skills 与 Rules 在课上怎么用"
kicker: "3.4　约束文件"
cards:
  - num: "01"
    title: "Skills"
    body: "某一类任务的固定步骤，例如「如何交实验报告」。"
  - num: "02"
    title: "Rules"
    body: "全程禁令，例如禁止把密钥写进仓库。"
  - num: "03"
    title: "为何要写下来"
    body: "避免每周把同样的话再贴一遍；审查时有对照。"
`,note:``,title:`Skills 与 Rules 在课上怎么用`,level:1,index:5,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:113,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),H=o({layout:`lesson-steps`,week:3,weekLabel:`课次 03`,heading:`今天上机`,kicker:`3.5　实践`,steps:[{title:`写差的一条`,body:`故意含糊，用来当反例，不要拿去跑项目。`},{title:`写好的一条`,body:`四块写全，绑定本组主路径。`},{title:`自检后试用`,body:`用好的那条让助手改一处，命令跑通再停下。`}]}),Ve=s({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`-gozwdw`,frontmatterRaw:`layout: "lesson-steps"
week: 3
weekLabel: "课次 03"
heading: "今天上机"
kicker: "3.5　实践"
steps:
  - title: "写差的一条"
    body: "故意含糊，用来当反例，不要拿去跑项目。"
  - title: "写好的一条"
    body: "四块写全，绑定本组主路径。"
  - title: "自检后试用"
    body: "用好的那条让助手改一处，命令跑通再停下。"
`,note:``,title:`今天上机`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:133,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),U=o({layout:`lesson-pitfalls`,week:3,weekLabel:`课次 03`,heading:`常见问题`,kicker:`3.6`,items:[{title:`好的说明仍然像作文`,body:`写成可执行条目，不要抒情。`},{title:`对照主题与项目无关`,body:`必须落在本组选题的主路径，否则小报告 02 不算关联本周任务。`},{title:`只用一次成功当完成`,body:`再试一条失败路径，按本组课题选。`}]}),He=s({get layout(){return U.layout},get transition(){return U.transition},get class(){return U.class},get clicks(){return U.clicks},get name(){return U.name},get preload(){return U.preload},slide:{content:``,revision:`-c6o0ow`,frontmatterRaw:`layout: "lesson-pitfalls"
week: 3
weekLabel: "课次 03"
heading: "常见问题"
kicker: "3.6"
items:
  - title: "好的说明仍然像作文"
    body: "写成可执行条目，不要抒情。"
  - title: "对照主题与项目无关"
    body: "必须落在本组选题的主路径，否则小报告 02 不算关联本周任务。"
  - title: "只用一次成功当完成"
    body: "再试一条失败路径，按本组课题选。"
`,note:``,title:`常见问题`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:U,filepath:``,start:150,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),W=o({layout:`lesson-accept`,week:3,weekLabel:`课次 03`,heading:`本次提交`,kicker:`3.7　小报告 02`,deliverable:[`差/好说明各 1 组`,`工作流自检表`,`用好的说明实际改动的记录`],criteria:[`好的说明含输入、输出、约束`,`与本组选题有关`,`有一次自己跑通的命令`],due:`小报告 02 进行中　·　按窗口提交`}),Ue=s({get layout(){return W.layout},get transition(){return W.transition},get class(){return W.class},get clicks(){return W.clicks},get name(){return W.name},get preload(){return W.preload},slide:{content:``,revision:`3j4uzd`,frontmatterRaw:`layout: "lesson-accept"
week: 3
weekLabel: "课次 03"
heading: "本次提交"
kicker: "3.7　小报告 02"
deliverable:
  - "差/好说明各 1 组"
  - "工作流自检表"
  - "用好的说明实际改动的记录"
criteria:
  - "好的说明含输入、输出、约束"
  - "与本组选题有关"
  - "有一次自己跑通的命令"
due: "小报告 02 进行中　·　按窗口提交"
`,note:``,title:`本次提交`,level:1,index:8,noteHTML:``,images:[],raw:``,frontmatter:W,filepath:``,start:167,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),G=Array(9),K=(t,n)=>e({loader:n,delay:300,loadingComponent:Pe,errorComponent:F,onError:e=>console.error(`Failed to load slide `+(t+1),e)}),We=async()=>{try{return G[0]??=await M(()=>import(`../md-DG32bVCg.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),F}},Ge=async()=>{try{return G[1]??=await M(()=>import(`../md-D714Jqny.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),F}},Ke=async()=>{try{return G[2]??=await M(()=>import(`../md-Dp6b4WkO.js`),__vite__mapDeps([13,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),F}},qe=async()=>{try{return G[3]??=await M(()=>import(`../md-BbSUnWkg.js`),__vite__mapDeps([14,1,2,3,4,5,15,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),F}},Je=async()=>{try{return G[4]??=await M(()=>import(`../md-CC3epYu1.js`),__vite__mapDeps([16,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),F}},Ye=async()=>{try{return G[5]??=await M(()=>import(`../md-DreMLa90.js`),__vite__mapDeps([17,1,2,3,4,5,15,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),F}},Xe=async()=>{try{return G[6]??=await M(()=>import(`../md-CNjgMA01.js`),__vite__mapDeps([18,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),F}},Ze=async()=>{try{return G[7]??=await M(()=>import(`../md-C_4P5fcv.js`),__vite__mapDeps([19,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),F}},Qe=async()=>{try{return G[8]??=await M(()=>import(`../md-CVASpu-T.js`),__vite__mapDeps([20,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),F}},$e=[{no:1,meta:Fe,load:We,component:K(0,We)},{no:2,meta:Ie,load:Ge,component:K(1,Ge)},{no:3,meta:Le,load:Ke,component:K(2,Ke)},{no:4,meta:Re,load:qe,component:K(3,qe)},{no:5,meta:ze,load:Je,component:K(4,Je)},{no:6,meta:Be,load:Ye,component:K(5,Ye)},{no:7,meta:Ve,load:Xe,component:K(6,Xe)},{no:8,meta:He,load:Ze,component:K(7,Ze)},{no:9,meta:Ue,load:Qe,component:K(8,Qe)}],q=_($e);function et(e,t,{mode:n=`replace`}={}){let i=S();return u({get(){let n=i.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(a){r(()=>{(i.currentRoute.value.query[e]??t?.toString())!==a.toString()&&i[d(n)]({query:{...i.currentRoute.value.query,[e]:`${a}`===t?void 0:a}})})}})}function tt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function J(e){return q.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function Y(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=J(e)),tt(e,t,n)}var nt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function rt(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:nt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function it(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=A.transition||void 0,rt(r,e<0)}var at=h(!1),ot=h(!1),st=h(!1),ct=h(!1),X=h(!1),lt=h(!1),ut=h(!0),dt=o(new Set),ft=u(()=>dt.size>0),pt=oe({xs:460,...w}),mt=re(),ht=ae(),gt=u(()=>mt.height.value-mt.width.value/j.value>120),_t=se(x?document.body:null),vt=ie(),yt=u(()=>[`INPUT`,`TEXTAREA`].includes(vt.value?.tagName||``)),bt=u(()=>[`BUTTON`,`A`].includes(vt.value?.tagName||``));T(`slidev-camera`,`default`,{listenToStorageChanges:!1}),T(`slidev-mic`,`default`,{listenToStorageChanges:!1});var xt=T(`slidev-scale`,0),St=T(`slidev-wake-lock`,!0),Ct=T(`slidev-hide-cursor-idle`,!0);T(`slidev-skip-export-pdf-tip`,!1),T(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var wt=T(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),Tt=T(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Et(){wt.value=!wt.value}var Dt=T(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Ot=T(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),kt=T(`slidev-editor-width`,x?window.innerWidth*.4:318,{listenToStorageChanges:!1}),At=T(`slidev-editor-height`,x?window.innerHeight*.4:300,{listenToStorageChanges:!1}),jt=_(null),Z=T(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=T(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},Mt=T(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),Nt=u(()=>Object.keys($).some(e=>Mt.value[e]!==$[e]));function Pt(){Q.value+=1,Q.value>3&&(Q.value=1)}function Ft(){Z.value=Math.min(2,Z.value+.1)}function It(){Z.value=Math.max(.5,Z.value-.1)}var Lt=ne(ct),Rt=T(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function zt(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?zt(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:Y(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function Bt(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=Bt(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function Vt(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:Vt(e.children,t+1)}))}function Ht(e,t,n){let r=u(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(zt(e,t),e),[])),i=u(()=>Bt(r.value,n.value,void 0,void 0,t));return u(()=>Vt(i.value))}function Ut(e,t,n=h(0),r,i,a){let o=u(()=>q.value.length),s=h(0),c=h(0),l=u(()=>Y(e.value,r.value)),d=u(()=>e.value.no),f=u(()=>e.value.meta?.layout||(d.value===1?`cover`:`default`)),p=u(()=>e.value.meta.slide.frontmatter),g=u(()=>t.value.current),_=u(()=>t.value.clicksStart),v=u(()=>t.value.total),y=u(()=>q.value[Math.min(q.value.length,d.value+1)-1]),b=u(()=>q.value[Math.max(1,d.value-1)-1]),ee=u(()=>d.value<q.value.length||g.value<v.value),te=u(()=>d.value>1||g.value>0),x=u(()=>i.value?void 0:it(s.value,e.value,b.value));m(e,(e,t)=>{s.value=e.no-t.no});async function S(e){return!1}let C=Ht(q,d,e);async function ne(){c.value=1,v.value<=n.value?await w():n.value+=1}async function re(){c.value=-1,n.value<=_.value?await ie(!0):--n.value}async function w(e=!1){c.value=1,d.value<q.value.length&&await E(d.value+1,e&&!i.value?D:void 0)}async function ie(e=!1){c.value=-1,d.value>1&&await E(d.value-1,e&&!i.value?D:void 0)}function ae(){return E(1)}function T(){return E(o.value)}async function E(e,t=0,i=!1){X.value=!1;let o=d.value!==e,s=t!==n.value,c=J(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=O(t,l,c?.__clicksContext?.total??999999),(i||o||s)&&await a?.push({path:Y(e,r.value,a.currentRoute.value.name===`export`),query:{...a.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function oe(){a?.push({path:Y(d.value,!0),query:{...a.currentRoute.value.query}})}function se(){a?.push({path:Y(d.value,!1),query:{...a.currentRoute.value.query}})}return{slides:q,total:o,currentPath:l,currentSlideNo:d,currentPage:d,currentSlideRoute:e,currentLayout:f,currentFrontmatter:p,currentTransition:x,clicksDirection:c,nextRoute:y,prevRoute:b,clicksContext:t,clicks:g,clicksStart:_,clicksTotal:v,hasNext:ee,hasPrev:te,tocTree:C,navDirection:s,openInEditor:S,next:ne,prev:re,go:E,goLast:T,goFirst:ae,nextSlide:w,prevSlide:ie,enterPresenter:oe,exitPresenter:se}}var Wt=C(()=>{let e=S(),t=ce(),n=u(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=u(()=>n.value.has(`print`)||t.name===`export`),i=h(n.value.get(`print`)===`clicks`),a=u(()=>n.value.has(`embedded`)),o=u(()=>t.name===`play`),s=u(()=>t.name===`presenter`),c=u(()=>t.name===`notes`),l=u(()=>!s.value&&(!A.remote||n.value.get(`password`)===A.remote)),d=u(()=>!!t.params.no),f=u(()=>d.value?J(t.params.no)?.no??1:1),p=u(()=>q.value[f.value-1]),m=h(ke(q.value.length,t?.query?.range)),g=et(`clicks`,`0`),_=u(()=>y(p.value)),v=u({get(){let e=+(g.value||0);return Number.isNaN(e)&&(e=0),e},set(e){X.value=!1,g.value=e.toString()}});function y(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=P(u({get(){return f.value===t?Math.max(+(g.value??0),n.clicksStart):f.value>t?D:n.clicksStart},set(e){f.value===t&&(g.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:u(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:l,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:_,queryClicksRaw:g,queryClicks:v,printRange:m,getPrimaryClicks:y}}),Gt=C(()=>{let e=Wt(),t=S(),n=Ut(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return m([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!J(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function Kt(){let e=Gt(),t=i()?E(le,void 0):void 0;if(!t)return e;let n=c(t).nav;return{...e,...n}}export{A as $,xt as A,Y as B,ft as C,ct as D,ot as E,Mt as F,M as G,Oe as H,$ as I,j as J,ge as K,St as L,Lt as M,Et as N,wt as O,Pt as P,ye as Q,mt as R,ut as S,st as T,P as U,q as V,Ee as W,_e as X,ve as Y,be as Z,bt as _,Tt as a,Q as b,At as c,Nt as d,O as et,Ct as f,yt as g,Ot as h,pt as i,Rt as j,at as k,kt as l,Ft as m,jt as n,It as o,X as p,xe as q,vt as r,lt as s,Kt as t,k as tt,_t as u,gt as v,Dt as w,Z as x,ht as y,J as z};