const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-B9dt-fmt.js","assets/modules/shiki-DeTF74yl.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/slidev/context-CFZR7p0y.js","assets/modules/vue-CGb69BCx.js","assets/md-DGVgxMFL.js","assets/slidev/SlideChrome-TX8Qv3Wa.js","assets/syncState-CQbDxmWp.js","assets/index-CJ_YWi96.js","assets/index-8dE_dpr8.css","assets/useDrawings-DkOVAL6g.js","assets/ItemList-Cv-ZtB_K.js","assets/md-Bl5O1k5B.js","assets/lesson-cards-B1mVvhPM.js","assets/md-B2eUp5FL.js","assets/md-DPPBeh5O.js","assets/md-Df1qZvYA.js","assets/md-DTogpIci.js","assets/md-D8x-DXkU.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,F as n,I as r,K as i,L as a,S as o,et as s,g as c,h as l,it as u,j as d,lt as f,mt as p,ot as m,p as h,pt as g,st as _,ut as v,v as y,vt as b,y as x}from"../modules/shiki-DeTF74yl.js";import{t as ee}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as S,B as C,E as w,I as te,T as ne,a as re,c as T,g as ie,h as E,k as D,l as ae,m as oe,z as se}from"../modules/vue-CGb69BCx.js";import{l as O,y as ce}from"./context-CFZR7p0y.js";function k(e,t,n){return Math.min(n,Math.max(t,e))}function le(...e){return de(e).reduce((e,t)=>e+t,0)}function ue(e){return e??=[],Array.isArray(e)?e:[e]}function de(e){return ue(e).flat(1)}function fe(e){return Array.from(new Set(e))}function A(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function pe(e){return e!=null}function me(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(pe))}var j={theme:`default`,title:`18.期末交付与结构化复盘`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`auto`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"Avenir Next"`,`"Nunito Sans"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"Fira Code"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`Nunito Sans`,`Fira Code`],provider:`google`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{},transition:null,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!1,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/18.期末交付与结构化复盘/slides.md`,slidesTitle:`18.期末交付与结构化复盘 - Slidev`},he=`build`,M=l(()=>j.aspectRatio),ge=l(()=>j.canvasWidth),_e=l(()=>Math.ceil(ge.value/M.value)),ve=l(()=>me(j.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),ye=j.slidesTitle,be=`/courses/vibe-coding/18/#/`,xe=`modulepreload`,Se=function(e){return`/courses/vibe-coding/18/`+e},Ce={},N=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Se(t,n),t=s(t),t in Ce)return;Ce[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:xe,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function we(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function Te(e){return Array.isArray(e)?[we(e[0]),we(e[1])]:null}function Ee(e,t=0,i){let a=m(!1),o=new Map,c=new Map,u={get current(){return k(+e.value,t,u.total)},set current(n){e.value=a.value?k(n,t,u.total):n},clicksStart:t,get relativeSizeMap(){return o},get maxMap(){return c},get isMounted(){return a.value},setup(){n(()=>{a.value=!0,c=_(c),s(e)||(u.current=e.value)}),r(()=>{a.value=!1,o=new Map,c=new Map})},calculateSince(e,t=1){let n=we(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=u.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:l(()=>u.current-r),isCurrent:l(()=>u.current===r),isActive:l(()=>u.current>=r)}},calculateRange(e){let t=Te(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=u.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:l(()=>u.current-i),isCurrent:l(()=>u.current===i),isActive:l(()=>i<=u.current&&u.current<a)}},calculate(e){return Array.isArray(e)?u.calculateRange(e):u.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),c.set(e,r)},unregister(e){o.delete(e),c.delete(e)},get currentOffset(){return le(...o.values())},get total(){return i??(a.value?Math.max(0,...c.values()):0)}};return u}function De(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=m(Math.max(g(t),n));return i(()=>g(t),e=>{r.value=Math.max(e,n)}),Ee(r,n,e?.meta?.clicks)}var Oe=/[a-z]/i;function ke(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!Oe.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function Ae(e,t){if(!t||t===`all`||t===`*`)return A(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(...A(+t,i?+i+1:e+1))}return fe(n).filter(t=>t<=e).sort((e,t)=>e-t)}var je={},Me={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function Ne(e,t){return a(),x(`div`,Me,b(`Failed to fetch this slide. Please check your network connection.`))}var P=ee(je,[[`render`,Ne]]),Pe={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},Fe=e({__name:`SlideLoading`,setup(e){let t=m(!1);return n(()=>{setTimeout(()=>{t.value=!0},200)}),(e,n)=>(a(),x(`div`,Pe,[t.value?(a(),x(h,{key:0},[n[0]||=c(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),n[1]||=c(`div`,null,`Loading slide...`,-1)],64)):y(`v-if`,!0)]))}}),F=u({theme:`default`,title:`18.期末交付与结构化复盘`,info:`《AI氛围编程》课次 18。`,author:`人工智能学院`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`,sans:`Microsoft YaHei, PingFang SC, Noto Sans SC, Source Han Sans SC, sans-serif`,mono:`Sarasa Mono SC, Fira Code, Consolas, ui-monospace, monospace`},htmlAttrs:{lang:`zh-CN`},layout:`lesson-cover`,week:18,weekLabel:`课次 18`,chapter:6,chapterTitle:`验收与总结`,experiment:``,experimentTitle:`期末大报告`,lead:`演示只展示能核对的路径。复盘写事实：做了什么、助手做了什么、人拦住了什么、下一门课还能用哪几条。`,course:`AI氛围编程`,unit:`人工智能学院`,defaults:{layout:`lesson-cards`,week:18,weekLabel:`课次 18`,spine:[]}}),Ie=_({get layout(){return F.layout},get transition(){return F.transition},get class(){return F.class},get clicks(){return F.clicks},get name(){return F.name},get preload(){return F.preload},slide:{content:``,revision:`tf5xy1`,frontmatterRaw:`theme: "default"
title: "18.期末交付与结构化复盘"
info: "《AI氛围编程》课次 18。"
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
week: 18
weekLabel: "课次 18"
chapter: 6
chapterTitle: "验收与总结"
experiment: ""
experimentTitle: "期末大报告"
lead: "演示只展示能核对的路径。复盘写事实：做了什么、助手做了什么、人拦住了什么、下一门课还能用哪几条。"
course: "AI氛围编程"
unit: "人工智能学院"
defaults:
  layout: "lesson-cards"
  week: 18
  weekLabel: "课次 18"
  spine: []
`,note:``,title:`18.期末交付与结构化复盘`,index:0,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),I=u({layout:`lesson-agenda`,week:18,weekLabel:`课次 18`,heading:`本日安排`,lecture:[`演示结构：范围、主路径、一处曾失败后修复`,`复盘四段`,`能力迁移：别的课也能用的习惯`],practice:[`综合验收演示`,`提交期末大报告`,`材料按课程公布的提交入口打包`]}),Le=_({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`iuhfte`,frontmatterRaw:`layout: "lesson-agenda"
week: 18
weekLabel: "课次 18"
heading: "本日安排"
lecture:
  - "演示结构：范围、主路径、一处曾失败后修复"
  - "复盘四段"
  - "能力迁移：别的课也能用的习惯"
practice:
  - "综合验收演示"
  - "提交期末大报告"
  - "材料按课程公布的提交入口打包"
`,note:``,title:`本日安排`,level:1,index:1,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:36,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),L=u({layout:`lesson-cards`,week:18,weekLabel:`课次 18`,heading:`演示十分钟内能讲完`,kicker:`18.1`,cards:[{num:`01`,title:`范围`,body:`必做与不做各一句。`},{num:`02`,title:`主路径`,body:`走通主路径，再演示一次空结果或失败。`,on:!0},{num:`03`,title:`证据`,body:`门禁为绿，或说明阻断。`}]}),Re=_({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`tl2plk`,frontmatterRaw:`layout: "lesson-cards"
week: 18
weekLabel: "课次 18"
heading: "演示十分钟内能讲完"
kicker: "18.1"
cards:
  - num: "01"
    title: "范围"
    body: "必做与不做各一句。"
  - num: "02"
    title: "主路径"
    body: "走通主路径，再演示一次空结果或失败。"
    on: true
  - num: "03"
    title: "证据"
    body: "门禁为绿，或说明阻断。"
`,note:``,title:`演示十分钟内能讲完`,level:1,index:2,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:53,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),R=u({layout:`lesson-cards`,week:18,weekLabel:`课次 18`,heading:`复盘四段`,kicker:`18.2`,cards:[{num:`01`,title:`目标`,body:`学期初立项怎么写，最后交了什么。`},{num:`02`,title:`过程`,body:`七次小报告里哪一次改动了主路径。`},{num:`03`,title:`协作`,body:`助手写了什么，人改掉了什么。`},{num:`04`,title:`迁移`,body:`下一门课仍会用的三条习惯。`}]}),ze=_({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`-gshl0y`,frontmatterRaw:`layout: "lesson-cards"
week: 18
weekLabel: "课次 18"
heading: "复盘四段"
kicker: "18.2"
cards:
  - num: "01"
    title: "目标"
    body: "学期初立项怎么写，最后交了什么。"
  - num: "02"
    title: "过程"
    body: "七次小报告里哪一次改动了主路径。"
  - num: "03"
    title: "协作"
    body: "助手写了什么，人改掉了什么。"
  - num: "04"
    title: "迁移"
    body: "下一门课仍会用的三条习惯。"
`,note:``,title:`复盘四段`,level:1,index:3,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:74,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),z=u({layout:`lesson-compare`,week:18,weekLabel:`课次 18`,heading:`迁移带走什么`,kicker:`18.3`,leftTitle:`带走`,left:[`任务写成可验收`,`先跑再信助手`,`提交一次一事`,`密钥不进仓库`],rightTitle:`不必带走`,right:[`本课模板的目录名`,`某一家助手的按钮位置`,`课上简化过的容器命令细节`]}),Be=_({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`os78n3`,frontmatterRaw:`layout: "lesson-compare"
week: 18
weekLabel: "课次 18"
heading: "迁移带走什么"
kicker: "18.3"
leftTitle: "带走"
left:
  - "任务写成可验收"
  - "先跑再信助手"
  - "提交一次一事"
  - "密钥不进仓库"
rightTitle: "不必带走"
right:
  - "本课模板的目录名"
  - "某一家助手的按钮位置"
  - "课上简化过的容器命令细节"
`,note:``,title:`迁移带走什么`,level:1,index:4,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:97,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),B=u({layout:`lesson-steps`,week:18,weekLabel:`课次 18`,heading:`今天上机`,kicker:`18.4　实践`,steps:[{title:`按脚本演示一遍`,body:`组员计时。`},{title:`写复盘`,body:`四段都有事实，不写空话。`},{title:`打包提交`,body:`期末大报告按课程公布的提交入口提交。`}]}),Ve=_({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`hq8dj7`,frontmatterRaw:`layout: "lesson-steps"
week: 18
weekLabel: "课次 18"
heading: "今天上机"
kicker: "18.4　实践"
steps:
  - title: "按脚本演示一遍"
    body: "组员计时。"
  - title: "写复盘"
    body: "四段都有事实，不写空话。"
  - title: "打包提交"
    body: "期末大报告按课程公布的提交入口提交。"
`,note:``,title:`今天上机`,level:1,index:5,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:118,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),V=u({layout:`lesson-pitfalls`,week:18,weekLabel:`课次 18`,heading:`常见问题`,kicker:`18.5`,items:[{title:`演示现场改代码`,body:`用已提交的版本。`},{title:`复盘抄教材目录`,body:`写自己的七次小报告。`},{title:`把未做功能说成已上线`,body:`对照差距清单。`}]}),He=_({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`-a8bj1y`,frontmatterRaw:`layout: "lesson-pitfalls"
week: 18
weekLabel: "课次 18"
heading: "常见问题"
kicker: "18.5"
items:
  - title: "演示现场改代码"
    body: "用已提交的版本。"
  - title: "复盘抄教材目录"
    body: "写自己的七次小报告。"
  - title: "把未做功能说成已上线"
    body: "对照差距清单。"
`,note:``,title:`常见问题`,level:1,index:6,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:135,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),H=u({layout:`lesson-accept`,week:18,weekLabel:`课次 18`,heading:`期末大报告`,kicker:`18.6　期末项目`,deliverable:[`演示材料（脚本、范围、证据目录）`,`结课大报告`,`可演示的主路径`],criteria:[`当场能点通主路径与一处空结果或失败`,`不做事项与立项一致`,`大报告对照必做有结论`],due:`本周提交　·　期末大报告　·　期末项目 30%`,stat:`30%`,statLead:`期末项目；过程七次小报告另计 70%`}),Ue=_({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`vsmtqx`,frontmatterRaw:`layout: "lesson-accept"
week: 18
weekLabel: "课次 18"
heading: "期末大报告"
kicker: "18.6　期末项目"
deliverable:
  - "演示材料（脚本、范围、证据目录）"
  - "结课大报告"
  - "可演示的主路径"
criteria:
  - "当场能点通主路径与一处空结果或失败"
  - "不做事项与立项一致"
  - "大报告对照必做有结论"
due: "本周提交　·　期末大报告　·　期末项目 30%"
stat: "30%"
statLead: "期末项目；过程七次小报告另计 70%"
`,note:``,title:`期末大报告`,level:1,index:7,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:152,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),U=Array(8),W=(e,t)=>o({loader:t,delay:300,loadingComponent:Fe,errorComponent:P,onError:t=>console.error(`Failed to load slide `+(e+1),t)}),We=async()=>{try{return U[0]??=await N(()=>import(`../md-B9dt-fmt.js`),__vite__mapDeps([0,1,2,3,4,5]))}catch(e){return console.error(`slide failed to load`,e),P}},Ge=async()=>{try{return U[1]??=await N(()=>import(`../md-DGVgxMFL.js`),__vite__mapDeps([6,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),P}},Ke=async()=>{try{return U[2]??=await N(()=>import(`../md-Bl5O1k5B.js`),__vite__mapDeps([13,1,2,3,4,5,14,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),P}},qe=async()=>{try{return U[3]??=await N(()=>import(`../md-B2eUp5FL.js`),__vite__mapDeps([15,1,2,3,4,5,14,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),P}},Je=async()=>{try{return U[4]??=await N(()=>import(`../md-DPPBeh5O.js`),__vite__mapDeps([16,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),P}},Ye=async()=>{try{return U[5]??=await N(()=>import(`../md-Df1qZvYA.js`),__vite__mapDeps([17,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),P}},Xe=async()=>{try{return U[6]??=await N(()=>import(`../md-DTogpIci.js`),__vite__mapDeps([18,1,2,3,4,5,7,8,9,10,11]))}catch(e){return console.error(`slide failed to load`,e),P}},Ze=async()=>{try{return U[7]??=await N(()=>import(`../md-D8x-DXkU.js`),__vite__mapDeps([19,1,2,3,4,5,7,8,9,10,11,12]))}catch(e){return console.error(`slide failed to load`,e),P}},Qe=[{no:1,meta:Ie,load:We,component:W(0,We)},{no:2,meta:Le,load:Ge,component:W(1,Ge)},{no:3,meta:Re,load:Ke,component:W(2,Ke)},{no:4,meta:ze,load:qe,component:W(3,qe)},{no:5,meta:Be,load:Je,component:W(4,Je)},{no:6,meta:Ve,load:Ye,component:W(5,Ye)},{no:7,meta:He,load:Xe,component:W(6,Xe)},{no:8,meta:Ue,load:Ze,component:W(7,Ze)}],G=f(Qe);function $e(e,t,{mode:n=`replace`}={}){let r=C();return l({get(){let n=r.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(i){d(()=>{(r.currentRoute.value.query[e]??t?.toString())!==i.toString()&&r[p(n)]({query:{...r.currentRoute.value.query,[e]:`${i}`===t?void 0:i}})})}})}function et(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function K(e){return G.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function q(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=K(e)),et(e,t,n)}var tt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function nt(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:tt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function rt(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=j.transition||void 0,nt(r,e<0)}var it=m(!1),at=m(!1),ot=m(!1),st=m(!1),J=m(!1),ct=m(!1),lt=m(!0),ut=u(new Set),dt=l(()=>ut.size>0),ft=ae({xs:460,...re}),Y=ne(),pt=ie(),mt=l(()=>Y.height.value-Y.width.value/M.value>120),ht=oe(S?document.body:null),gt=T(),_t=l(()=>[`INPUT`,`TEXTAREA`].includes(gt.value?.tagName||``)),vt=l(()=>[`BUTTON`,`A`].includes(gt.value?.tagName||``));E(`slidev-camera`,`default`,{listenToStorageChanges:!1}),E(`slidev-mic`,`default`,{listenToStorageChanges:!1});var yt=E(`slidev-scale`,0),bt=E(`slidev-wake-lock`,!0),xt=E(`slidev-hide-cursor-idle`,!0);E(`slidev-skip-export-pdf-tip`,!1),E(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var X=E(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),St=E(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function Ct(){X.value=!X.value}var wt=E(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),Tt=E(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),Et=E(`slidev-editor-width`,S?window.innerWidth*.4:318,{listenToStorageChanges:!1}),Dt=E(`slidev-editor-height`,S?window.innerHeight*.4:300,{listenToStorageChanges:!1}),Ot=f(null),Z=E(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=E(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},kt=E(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),At=l(()=>Object.keys($).some(e=>kt.value[e]!==$[e]));function jt(){Q.value+=1,Q.value>3&&(Q.value=1)}function Mt(){Z.value=Math.min(2,Z.value+.1)}function Nt(){Z.value=Math.max(.5,Z.value-.1)}var Pt=te(st),Ft=E(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function It(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?It(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:q(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function Lt(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=Lt(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function Rt(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:Rt(e.children,t+1)}))}function zt(e,t,n){let r=l(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(It(e,t),e),[])),i=l(()=>Lt(r.value,n.value,void 0,void 0,t));return l(()=>Rt(i.value))}function Bt(e,t,n=m(0),r,a,o){let s=l(()=>G.value.length),c=m(0),u=m(0),d=l(()=>q(e.value,r.value)),f=l(()=>e.value.no),p=l(()=>e.value.meta?.layout||(f.value===1?`cover`:`default`)),h=l(()=>e.value.meta.slide.frontmatter),g=l(()=>t.value.current),_=l(()=>t.value.clicksStart),v=l(()=>t.value.total),y=l(()=>G.value[Math.min(G.value.length,f.value+1)-1]),b=l(()=>G.value[Math.max(1,f.value-1)-1]),x=l(()=>f.value<G.value.length||g.value<v.value),ee=l(()=>f.value>1||g.value>0),S=l(()=>a.value?void 0:rt(c.value,e.value,b.value));i(e,(e,t)=>{c.value=e.no-t.no});async function C(e){return!1}let w=zt(G,f,e);async function te(){u.value=1,v.value<=n.value?await re():n.value+=1}async function ne(){u.value=-1,n.value<=_.value?await T(!0):--n.value}async function re(e=!1){u.value=1,f.value<G.value.length&&await D(f.value+1,e&&!a.value?O:void 0)}async function T(e=!1){u.value=-1,f.value>1&&await D(f.value-1,e&&!a.value?O:void 0)}function ie(){return D(1)}function E(){return D(s.value)}async function D(e,t=0,i=!1){J.value=!1;let a=f.value!==e,s=t!==n.value,c=K(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=k(t,l,c?.__clicksContext?.total??999999),(i||a||s)&&await o?.push({path:q(e,r.value,o.currentRoute.value.name===`export`),query:{...o.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function ae(){o?.push({path:q(f.value,!0),query:{...o.currentRoute.value.query}})}function oe(){o?.push({path:q(f.value,!1),query:{...o.currentRoute.value.query}})}return{slides:G,total:s,currentPath:d,currentSlideNo:f,currentPage:f,currentSlideRoute:e,currentLayout:p,currentFrontmatter:h,currentTransition:S,clicksDirection:u,nextRoute:y,prevRoute:b,clicksContext:t,clicks:g,clicksStart:_,clicksTotal:v,hasNext:x,hasPrev:ee,tocTree:w,navDirection:c,openInEditor:C,next:te,prev:ne,go:D,goLast:E,goFirst:ie,nextSlide:re,prevSlide:T,enterPresenter:ae,exitPresenter:oe}}var Vt=w(()=>{let e=C(),t=se(),n=l(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=l(()=>n.value.has(`print`)||t.name===`export`),i=m(n.value.get(`print`)===`clicks`),a=l(()=>n.value.has(`embedded`)),o=l(()=>t.name===`play`),s=l(()=>t.name===`presenter`),c=l(()=>t.name===`notes`),u=l(()=>!s.value&&(!j.remote||n.value.get(`password`)===j.remote)),d=l(()=>!!t.params.no),f=l(()=>d.value?K(t.params.no)?.no??1:1),p=l(()=>G.value[f.value-1]),h=m(Ae(G.value.length,t?.query?.range)),g=$e(`clicks`,`0`),_=l(()=>y(p.value)),v=l({get(){let e=+(g.value||0);return Number.isNaN(e)&&(e=0),e},set(e){J.value=!1,g.value=e.toString()}});function y(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=Ee(l({get(){return f.value===t?Math.max(+(g.value??0),n.clicksStart):f.value>t?O:n.clicksStart},set(e){f.value===t&&(g.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:l(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:u,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:_,queryClicksRaw:g,queryClicks:v,printRange:h,getPrimaryClicks:y}}),Ht=w(()=>{let e=Vt(),t=C(),n=Bt(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return i([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!K(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function Ut(){let e=Ht(),n=t()?D(ce,void 0):void 0;if(!n)return e;let r=v(n).nav;return{...e,...r}}export{j as $,yt as A,q as B,dt as C,st as D,at as E,kt as F,N as G,ke as H,$ as I,M as J,he as K,bt as L,Pt as M,Ct as N,X as O,jt as P,ve as Q,Y as R,lt as S,ot as T,Ee as U,G as V,De as W,ge as X,_e as Y,ye as Z,vt as _,St as a,Q as b,Dt as c,At as d,k as et,xt as f,_t as g,Tt as h,ft as i,Ft as j,it as k,Et as l,Mt as m,Ot as n,Nt as o,J as p,be as q,gt as r,ct as s,Ut as t,A as tt,ht as u,mt as v,wt as w,Z as x,pt as y,K as z};