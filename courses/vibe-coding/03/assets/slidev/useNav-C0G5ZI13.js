const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-C-qcEB5u.js","assets/modules/shiki-DeTF74yl.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-CFZR7p0y.js","assets/modules/vue-CGb69BCx.js","assets/md-CoS9Q59H.js","assets/slidev/SlideChrome-D68fwbD9.js","assets/syncState-CQbDxmWp.js","assets/index-CTrQLiYc.js","assets/index-Bb1B5-Gx.css","assets/useDrawings-DjUuk_sV.js","assets/ItemList-Cv-ZtB_K.js","assets/md-BlFmykxd.js","assets/lesson-compare-DQAG6jgH.js","assets/LessonDiagram-B7k9xhMk.js","assets/md-BZ7-VmJc.js","assets/lesson-cards-Clgrue_H.js","assets/SlideFigure-DM-I5M-v.js","assets/md-BAzSE5HR.js","assets/md-WK9PK38g.js","assets/md-6FZy54sM.js","assets/md-BrEv_DLU.js","assets/md-DZidw4C_.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,F as n,I as r,K as i,L as a,S as o,et as s,g as c,h as l,it as u,j as d,lt as f,mt as p,ot as m,p as ee,pt as h,st as g,ut as _,v,vt as y,y as b}from"../modules/shiki-DeTF74yl.js";import{t as te}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as x,B as S,E as C,I as ne,T as re,a as ie,c as w,g as ae,h as T,k as E,l as oe,m as se,z as ce}from"../modules/vue-CGb69BCx.js";import{l as D,y as le}from"./context-CFZR7p0y.js";function O(e,t,n){return Math.min(n,Math.max(t,e))}function ue(...e){return fe(e).reduce((e,t)=>e+t,0)}function de(e){return e??=[],Array.isArray(e)?e:[e]}function fe(e){return de(e).flat(1)}function pe(e){return Array.from(new Set(e))}function k(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function me(e){return e!=null}function he(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(me))}var A={theme:`default`,title:`03.Skills、Rules与结构化Prompt`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`auto`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"Avenir Next"`,`"Nunito Sans"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"Fira Code"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`Nunito Sans`,`Fira Code`],provider:`google`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:null,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/03.Skills与结构化Prompt工作流/slides.md`,slidesTitle:`03.Skills、Rules与结构化Prompt - Slidev`},ge=`build`,_e=l(()=>A.aspectRatio),ve=l(()=>A.canvasWidth),ye=l(()=>Math.ceil(ve.value/_e.value)),be=l(()=>he(A.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),xe=A.slidesTitle,Se=`/courses/vibe-coding/03/#/`,Ce=`modulepreload`,we=function(e){return`/courses/vibe-coding/03/`+e},Te={},j=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=we(t,n),t=s(t),t in Te)return;Te[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ce,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function M(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function Ee(e){return Array.isArray(e)?[M(e[0]),M(e[1])]:null}function N(e,t=0,i){let a=m(!1),o=new Map,c=new Map,u={get current(){return O(+e.value,t,u.total)},set current(n){e.value=a.value?O(n,t,u.total):n},clicksStart:t,get relativeSizeMap(){return o},get maxMap(){return c},get isMounted(){return a.value},setup(){n(()=>{a.value=!0,c=g(c),s(e)||(u.current=e.value)}),r(()=>{a.value=!1,o=new Map,c=new Map})},calculateSince(e,t=1){let n=M(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=u.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:l(()=>u.current-r),isCurrent:l(()=>u.current===r),isActive:l(()=>u.current>=r)}},calculateRange(e){let t=Ee(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=u.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:l(()=>u.current-i),isCurrent:l(()=>u.current===i),isActive:l(()=>i<=u.current&&u.current<a)}},calculate(e){return Array.isArray(e)?u.calculateRange(e):u.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),c.set(e,r)},unregister(e){o.delete(e),c.delete(e)},get currentOffset(){return ue(...o.values())},get total(){return i??(a.value?Math.max(0,...c.values()):0)}};return u}function De(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=m(Math.max(h(t),n));return i(()=>h(t),e=>{r.value=Math.max(e,n)}),N(r,n,e?.meta?.clicks)}var Oe=/[a-z]/i;function ke(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!Oe.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function Ae(e,t){if(!t||t===`all`||t===`*`)return k(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(...k(+t,i?+i+1:e+1))}return pe(n).filter(t=>t<=e).sort((e,t)=>e-t)}var je={},Me={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function Ne(e,t){return a(),b(`div`,Me,y(`Failed to fetch this slide. Please check your network connection.`))}var P=te(je,[[`render`,Ne]]),Pe={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},Fe=e({__name:`SlideLoading`,setup(e){let t=m(!1);return n(()=>{setTimeout(()=>{t.value=!0},200)}),(e,n)=>(a(),b(`div`,Pe,[t.value?(a(),b(ee,{key:0},[n[0]||=c(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),n[1]||=c(`div`,null,`Loading slide...`,-1)],64)):v(`v-if`,!0)]))}}),F=u({theme:`default`,title:`03.Skills、Rules与结构化Prompt`,info:`《AI氛围编程》课次 03。`,author:`人工智能学院`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`,sans:`Microsoft YaHei, PingFang SC, Noto Sans SC, Source Han Sans SC, sans-serif`,mono:`Sarasa Mono SC, Fira Code, Consolas, ui-monospace, monospace`},htmlAttrs:{lang:`zh-CN`},layout:`lesson-cover`,week:3,weekLabel:`课次 03`,chapter:1,chapterTitle:`协作入门与工程基础`,experiment:2,experimentTitle:`工作流与主路径原型`,lead:`助手好不好用，看你把任务写到哪一步。今天对比一组含糊的说明和一组可验收的说明。`,course:`AI氛围编程`,unit:`人工智能学院`,defaults:{layout:`lesson-cards`,week:3,weekLabel:`课次 03`,spine:[]}}),Ie=g({get layout(){return F.layout},get transition(){return F.transition},get class(){return F.class},get clicks(){return F.clicks},get name(){return F.name},get preload(){return F.preload},slide:{content:``,revision:`-u52wu2`,frontmatterRaw:`theme: "default"
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
lead: "助手好不好用，看你把任务写到哪一步。今天对比一组含糊的说明和一组可验收的说明。"
course: "AI氛围编程"
unit: "人工智能学院"
defaults:
  layout: "lesson-cards"
  week: 3
  weekLabel: "课次 03"
  spine: []
`,note:``,title:`03.Skills、Rules与结构化Prompt`,index:0,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),I=u({layout:`lesson-agenda`,week:3,weekLabel:`课次 03`,heading:`本日安排`,lecture:[`失败常见在任务含糊`,`工作流：小步、可核对、留下记录`,`结构化说明：角色、任务、约束、输出`],practice:[`写 1 组差/好对照，主题绑定本组主路径`,`填工作流自检`,`把对照里写得好的那条拿去改项目`]}),Le=g({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`69iz33`,frontmatterRaw:`layout: "lesson-agenda"
week: 3
weekLabel: "课次 03"
heading: "本日安排"
lecture:
  - "失败常见在任务含糊"
  - "工作流：小步、可核对、留下记录"
  - "结构化说明：角色、任务、约束、输出"
practice:
  - "写 1 组差/好对照，主题绑定本组主路径"
  - "填工作流自检"
  - "把对照里写得好的那条拿去改项目"
`,note:``,title:`本日安排`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:36,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),L=u({layout:`lesson-compare`,week:3,weekLabel:`课次 03`,heading:`两种说明`,kicker:`3.1`,leftTitle:`难验收`,left:[`帮我把系统做完善`,`参考常见网站的体验`,`代码质量高一点`],rightTitle:`可验收`,right:[`按项目要求的输入，返回结果或明确的找不到`,`缺字段时返回明确错误，不空白`,`只改查询这一条路径，不动登录`]}),Re=g({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`-mz7p21`,frontmatterRaw:`layout: "lesson-compare"
week: 3
weekLabel: "课次 03"
heading: "两种说明"
kicker: "3.1"
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
`,note:``,title:`两种说明`,level:1,index:2,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:53,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),R=u({layout:`lesson-cards`,week:3,weekLabel:`课次 03`,heading:`工作流四步`,kicker:`3.2`,variant:`rows`,cards:[{num:`01`,title:`范围`,body:`输入、输出、不做哪些。`},{num:`02`,title:`小步`,body:`一次只让助手改一处能看见的结果。`},{num:`03`,title:`核对`,body:`自己跑命令，不要只看助手说完成了。`,on:!0},{num:`04`,title:`留下`,body:`提交说明或报告里记下改了什么。`}]}),ze=g({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`tambmb`,frontmatterRaw:`layout: "lesson-cards"
week: 3
weekLabel: "课次 03"
heading: "工作流四步"
kicker: "3.2"
variant: "rows"
cards:
  - num: "01"
    title: "范围"
    body: "输入、输出、不做哪些。"
  - num: "02"
    title: "小步"
    body: "一次只让助手改一处能看见的结果。"
  - num: "03"
    title: "核对"
    body: "自己跑命令，不要只看助手说完成了。"
    on: true
  - num: "04"
    title: "留下"
    body: "提交说明或报告里记下改了什么。"
`,note:``,title:`工作流四步`,level:1,index:3,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:73,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),z=u({layout:`lesson-compare`,week:3,weekLabel:`课次 03`,heading:`结构化说明的四块`,kicker:`3.3`,diagram:`prompt-four`,lead:`四块写全，助手才知道交什么。约束里写死不改登录、日期格式与模板一致。`}),Be=g({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`-u8mt5m`,frontmatterRaw:`layout: "lesson-compare"
week: 3
weekLabel: "课次 03"
heading: "结构化说明的四块"
kicker: "3.3"
diagram: "prompt-four"
lead: "四块写全，助手才知道交什么。约束里写死不改登录、日期格式与模板一致。"
`,note:``,title:`结构化说明的四块`,level:1,index:4,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:98,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),B=u({layout:`lesson-cards`,week:3,weekLabel:`课次 03`,heading:`Skills 与 Rules 在课上怎么用`,kicker:`3.4`,variant:`rows`,cards:[{num:`01`,title:`Skills`,body:`某一类任务的固定步骤，例如如何交实验报告。`},{num:`02`,title:`Rules`,body:`全程禁令，例如禁止把密钥写进仓库。`},{num:`03`,title:`为何要写下来`,body:`避免每次把同样的话再贴一遍；审查时有对照。`}]}),Ve=g({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`klwxok`,frontmatterRaw:`layout: "lesson-cards"
week: 3
weekLabel: "课次 03"
heading: "Skills 与 Rules 在课上怎么用"
kicker: "3.4"
variant: "rows"
cards:
  - num: "01"
    title: "Skills"
    body: "某一类任务的固定步骤，例如如何交实验报告。"
  - num: "02"
    title: "Rules"
    body: "全程禁令，例如禁止把密钥写进仓库。"
  - num: "03"
    title: "为何要写下来"
    body: "避免每次把同样的话再贴一遍；审查时有对照。"
`,note:``,title:`Skills 与 Rules 在课上怎么用`,level:1,index:5,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:110,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),V=u({layout:`lesson-steps`,week:3,weekLabel:`课次 03`,heading:`今天上机`,kicker:`3.5`,steps:[{title:`写差的一条`,body:`故意含糊，只当反例，不要拿去跑项目。`},{title:`写好的一条`,body:`四块写全，绑定本组主路径。`},{title:`自检后试用`,body:`用好的那条让助手改一处，命令跑通再停下。`}]}),He=g({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`-4v0gdw`,frontmatterRaw:`layout: "lesson-steps"
week: 3
weekLabel: "课次 03"
heading: "今天上机"
kicker: "3.5"
steps:
  - title: "写差的一条"
    body: "故意含糊，只当反例，不要拿去跑项目。"
  - title: "写好的一条"
    body: "四块写全，绑定本组主路径。"
  - title: "自检后试用"
    body: "用好的那条让助手改一处，命令跑通再停下。"
`,note:``,title:`今天上机`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:131,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),H=u({layout:`lesson-pitfalls`,week:3,weekLabel:`课次 03`,heading:`常见问题`,kicker:`3.6`,items:[{title:`好的说明仍然像作文`,body:`写成可执行条目，不要抒情。`},{title:`对照主题与项目无关`,body:`必须落在本组选题的主路径，否则小报告 02 不算关联本次任务。`},{title:`只用一次成功当完成`,body:`再试一条失败路径，按本组课题选。`}]}),Ue=g({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`g6wlh5`,frontmatterRaw:`layout: "lesson-pitfalls"
week: 3
weekLabel: "课次 03"
heading: "常见问题"
kicker: "3.6"
items:
  - title: "好的说明仍然像作文"
    body: "写成可执行条目，不要抒情。"
  - title: "对照主题与项目无关"
    body: "必须落在本组选题的主路径，否则小报告 02 不算关联本次任务。"
  - title: "只用一次成功当完成"
    body: "再试一条失败路径，按本组课题选。"
`,note:``,title:`常见问题`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:148,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),U=u({layout:`lesson-accept`,week:3,weekLabel:`课次 03`,heading:`本次提交`,kicker:`3.7`,deliverable:[`差/好说明各 1 组`,`工作流自检表`,`用好的说明实际改动的记录`],criteria:[`好的说明含输入、输出、约束`,`与本组选题有关`,`有一次自己跑通的命令`],due:`小报告 02 进行中　·　按窗口提交`}),We=g({get layout(){return U.layout},get transition(){return U.transition},get class(){return U.class},get clicks(){return U.clicks},get name(){return U.name},get preload(){return U.preload},slide:{content:``,revision:`qzaerh`,frontmatterRaw:`layout: "lesson-accept"
week: 3
weekLabel: "课次 03"
heading: "本次提交"
kicker: "3.7"
deliverable:
  - "差/好说明各 1 组"
  - "工作流自检表"
  - "用好的说明实际改动的记录"
criteria:
  - "好的说明含输入、输出、约束"
  - "与本组选题有关"
  - "有一次自己跑通的命令"
due: "小报告 02 进行中　·　按窗口提交"
`,note:``,title:`本次提交`,level:1,index:8,noteHTML:``,images:[],raw:``,frontmatter:U,filepath:``,start:165,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),W=Array(9),G=(e,t)=>o({loader:t,delay:300,loadingComponent:Fe,errorComponent:P,onError:t=>console.error(`Failed to load slide `+(e+1),t)}),Ge=async()=>{try{return W[0]??=await j(()=>import(`../md-C-qcEB5u.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),P}},Ke=async()=>{try{return W[1]??=await j(()=>import(`../md-CoS9Q59H.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),P}},qe=async()=>{try{return W[2]??=await j(()=>import(`../md-BlFmykxd.js`),__vite__mapDeps([13,1,2,3,4,5,14,7,8,9,10,11,12,15]))}catch(e){return console.error(`slide failed to load`,e),P}},Je=async()=>{try{return W[3]??=await j(()=>import(`../md-BZ7-VmJc.js`),__vite__mapDeps([16,1,2,3,4,5,17,7,8,9,10,11,15,12,18]))}catch(e){return console.error(`slide failed to load`,e),P}},Ye=async()=>{try{return W[4]??=await j(()=>import(`../md-BAzSE5HR.js`),__vite__mapDeps([19,1,2,3,4,5,14,7,8,9,10,11,12,15]))}catch(e){return console.error(`slide failed to load`,e),P}},Xe=async()=>{try{return W[5]??=await j(()=>import(`../md-WK9PK38g.js`),__vite__mapDeps([20,1,2,3,4,5,17,7,8,9,10,11,15,12,18]))}catch(e){return console.error(`slide failed to load`,e),P}},Ze=async()=>{try{return W[6]??=await j(()=>import(`../md-6FZy54sM.js`),__vite__mapDeps([21,1,2,3,4,5,7,8,9,10,11,15,12,18]))}catch(e){return console.error(`slide failed to load`,e),P}},Qe=async()=>{try{return W[7]??=await j(()=>import(`../md-BrEv_DLU.js`),__vite__mapDeps([22,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),P}},$e=async()=>{try{return W[8]??=await j(()=>import(`../md-DZidw4C_.js`),__vite__mapDeps([23,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),P}},et=[{no:1,meta:Ie,load:Ge,component:G(0,Ge)},{no:2,meta:Le,load:Ke,component:G(1,Ke)},{no:3,meta:Re,load:qe,component:G(2,qe)},{no:4,meta:ze,load:Je,component:G(3,Je)},{no:5,meta:Be,load:Ye,component:G(4,Ye)},{no:6,meta:Ve,load:Xe,component:G(5,Xe)},{no:7,meta:He,load:Ze,component:G(6,Ze)},{no:8,meta:Ue,load:Qe,component:G(7,Qe)},{no:9,meta:We,load:$e,component:G(8,$e)}],K=f(et);function tt(e,t,{mode:n=`replace`}={}){let r=S();return l({get(){let n=r.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(i){d(()=>{(r.currentRoute.value.query[e]??t?.toString())!==i.toString()&&r[p(n)]({query:{...r.currentRoute.value.query,[e]:`${i}`===t?void 0:i}})})}})}function nt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function q(e){return K.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function J(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=q(e)),nt(e,t,n)}var rt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function it(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:rt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function at(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=A.transition||void 0,it(r,e<0)}var ot=m(!1),st=m(!1),ct=m(!1),lt=m(!1),Y=m(!1),ut=m(!1),dt=m(!0),ft=u(new Set),pt=l(()=>ft.size>0),mt=oe({xs:460,...ie}),ht=re(),gt=ae(),_t=l(()=>ht.height.value-ht.width.value/_e.value>120),vt=se(x?document.body:null),yt=w(),bt=l(()=>[`INPUT`,`TEXTAREA`].includes(yt.value?.tagName||``)),xt=l(()=>[`BUTTON`,`A`].includes(yt.value?.tagName||``));T(`slidev-camera`,`default`,{listenToStorageChanges:!1}),T(`slidev-mic`,`default`,{listenToStorageChanges:!1});var St=T(`slidev-scale`,0),Ct=T(`slidev-wake-lock`,!0),wt=T(`slidev-hide-cursor-idle`,!0);T(`slidev-skip-export-pdf-tip`,!1),T(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var X=T(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),Tt=T(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Et(){X.value=!X.value}var Dt=T(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Ot=T(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),kt=T(`slidev-editor-width`,x?window.innerWidth*.4:318,{listenToStorageChanges:!1}),At=T(`slidev-editor-height`,x?window.innerHeight*.4:300,{listenToStorageChanges:!1}),jt=f(null),Z=T(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=T(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},Mt=T(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),Nt=l(()=>Object.keys($).some(e=>Mt.value[e]!==$[e]));function Pt(){Q.value+=1,Q.value>3&&(Q.value=1)}function Ft(){Z.value=Math.min(2,Z.value+.1)}function It(){Z.value=Math.max(.5,Z.value-.1)}var Lt=ne(lt),Rt=T(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function zt(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?zt(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:J(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function Bt(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=Bt(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function Vt(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:Vt(e.children,t+1)}))}function Ht(e,t,n){let r=l(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(zt(e,t),e),[])),i=l(()=>Bt(r.value,n.value,void 0,void 0,t));return l(()=>Vt(i.value))}function Ut(e,t,n=m(0),r,a,o){let s=l(()=>K.value.length),c=m(0),u=m(0),d=l(()=>J(e.value,r.value)),f=l(()=>e.value.no),p=l(()=>e.value.meta?.layout||(f.value===1?`cover`:`default`)),ee=l(()=>e.value.meta.slide.frontmatter),h=l(()=>t.value.current),g=l(()=>t.value.clicksStart),_=l(()=>t.value.total),v=l(()=>K.value[Math.min(K.value.length,f.value+1)-1]),y=l(()=>K.value[Math.max(1,f.value-1)-1]),b=l(()=>f.value<K.value.length||h.value<_.value),te=l(()=>f.value>1||h.value>0),x=l(()=>a.value?void 0:at(c.value,e.value,y.value));i(e,(e,t)=>{c.value=e.no-t.no});async function S(e){return!1}let C=Ht(K,f,e);async function ne(){u.value=1,_.value<=n.value?await ie():n.value+=1}async function re(){u.value=-1,n.value<=g.value?await w(!0):--n.value}async function ie(e=!1){u.value=1,f.value<K.value.length&&await E(f.value+1,e&&!a.value?D:void 0)}async function w(e=!1){u.value=-1,f.value>1&&await E(f.value-1,e&&!a.value?D:void 0)}function ae(){return E(1)}function T(){return E(s.value)}async function E(e,t=0,i=!1){Y.value=!1;let a=f.value!==e,s=t!==n.value,c=q(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=O(t,l,c?.__clicksContext?.total??999999),(i||a||s)&&await o?.push({path:J(e,r.value,o.currentRoute.value.name===`export`),query:{...o.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function oe(){o?.push({path:J(f.value,!0),query:{...o.currentRoute.value.query}})}function se(){o?.push({path:J(f.value,!1),query:{...o.currentRoute.value.query}})}return{slides:K,total:s,currentPath:d,currentSlideNo:f,currentPage:f,currentSlideRoute:e,currentLayout:p,currentFrontmatter:ee,currentTransition:x,clicksDirection:u,nextRoute:v,prevRoute:y,clicksContext:t,clicks:h,clicksStart:g,clicksTotal:_,hasNext:b,hasPrev:te,tocTree:C,navDirection:c,openInEditor:S,next:ne,prev:re,go:E,goLast:T,goFirst:ae,nextSlide:ie,prevSlide:w,enterPresenter:oe,exitPresenter:se}}var Wt=C(()=>{let e=S(),t=ce(),n=l(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=l(()=>n.value.has(`print`)||t.name===`export`),i=m(n.value.get(`print`)===`clicks`),a=l(()=>n.value.has(`embedded`)),o=l(()=>t.name===`play`),s=l(()=>t.name===`presenter`),c=l(()=>t.name===`notes`),u=l(()=>!s.value&&(!A.remote||n.value.get(`password`)===A.remote)),d=l(()=>!!t.params.no),f=l(()=>d.value?q(t.params.no)?.no??1:1),p=l(()=>K.value[f.value-1]),ee=m(Ae(K.value.length,t?.query?.range)),h=tt(`clicks`,`0`),g=l(()=>v(p.value)),_=l({get(){let e=+(h.value||0);return Number.isNaN(e)&&(e=0),e},set(e){Y.value=!1,h.value=e.toString()}});function v(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=N(l({get(){return f.value===t?Math.max(+(h.value??0),n.clicksStart):f.value>t?D:n.clicksStart},set(e){f.value===t&&(h.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:l(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:u,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:g,queryClicksRaw:h,queryClicks:_,printRange:ee,getPrimaryClicks:v}}),Gt=C(()=>{let e=Wt(),t=S(),n=Ut(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return i([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!q(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function Kt(){let e=Gt(),n=t()?E(le,void 0):void 0;if(!n)return e;let r=_(n).nav;return{...e,...r}}export{A as $,St as A,J as B,pt as C,lt as D,st as E,Mt as F,j as G,ke as H,$ as I,_e as J,ge as K,Ct as L,Lt as M,Et as N,X as O,Pt as P,be as Q,ht as R,dt as S,ct as T,N as U,K as V,De as W,ve as X,ye as Y,xe as Z,xt as _,Tt as a,Q as b,At as c,Nt as d,O as et,wt as f,bt as g,Ot as h,mt as i,Rt as j,ot as k,kt as l,Ft as m,jt as n,It as o,Y as p,Se as q,yt as r,ut as s,Kt as t,k as tt,vt as u,_t as v,Dt as w,Z as x,gt as y,q as z};