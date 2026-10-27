const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md-6mRxO_GQ.js","assets/modules/shiki-DeTF74yl.js","assets/rolldown-runtime-hePW80VL.js","assets/modules/shiki-BrmBd2_v.css","assets/chapters-BfrGiRCm.js","assets/syncState-CQbDxmWp.js","assets/index-FeKU7fqg.js","assets/modules/vue-BbPpL-NQ.js","assets/index-CHg12-vL.css","assets/useDrawings-DzLGSwx-.js","assets/md-DWtD9le_.js","assets/Chrome-CDo8EJJd.js","assets/md-BPosl7A1.js","assets/md-DhwJCQt2.js","assets/compare--o-6vBmx.js","assets/md-DgWPtTG2.js","assets/md-DA0ffN_s.js","assets/md-BiNvW7Vp.js","assets/slidev/code-D1f1mKn1.js","assets/modules/unplugin-icons-Dz6xerHB.js","assets/md-D838jI7J.js","assets/md-DR5R6ztw.js","assets/md-BHQI_jSG.js","assets/md-CV7scFdy.js","assets/md-D42u4PCH.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,F as n,I as r,K as i,L as a,S as o,dt as s,et as c,g as l,h as u,it as d,j as f,lt as p,mt as ee,ot as m,p as h,pt as g,st as _,ut as v,v as te,vt as ne,y}from"../modules/shiki-DeTF74yl.js";import{t as re}from"../_plugin-vue_export-helper-BDNMzG2s.js";import{A as b,B as ie,D as x,E as ae,L as S,M as oe,V as C,_ as se,a as w,c as ce,g as T,h as le,j as ue,l as de}from"../modules/vue-BbPpL-NQ.js";function E(e,t,n){return Math.min(n,Math.max(t,e))}function fe(...e){return me(e).reduce((e,t)=>e+t,0)}function pe(e){return e??=[],Array.isArray(e)?e:[e]}function me(e){return pe(e).flat(1)}function he(e){return Array.from(new Set(e))}function D(...e){let t,n,r;e.length===1?(t=0,r=1,[n]=e):[t,n,r=1]=e;let i=[],a=t;for(;a<n;)i.push(a),a+=r||1;return i}function ge(e){return e!=null}function _e(e,t){return Object.fromEntries(Object.entries(e).map(([e,n])=>t(e,n)).filter(ge))}var O={theme:`default`,title:`Skills、Rules 与结构化 Prompt`,titleTemplate:`%s - Slidev`,addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:`local`,monacoTypesAdditionalPackages:[],monacoTypesIgnorePackages:[],monacoRunAdditionalDeps:[],monacoRunUseStrict:!0,download:!1,export:{},info:!1,highlighter:`shiki`,twoslash:!0,lineNumbers:!1,colorSchema:`light`,routerMode:`hash`,aspectRatio:1.7777777777777777,canvasWidth:1280,exportFilename:``,selectable:!1,themeConfig:{},fonts:{sans:[`"Avenir Next"`,`"Nunito Sans"`,`ui-sans-serif`,`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`"Helvetica Neue"`,`Arial`,`"Noto Sans"`,`sans-serif`,`"Apple Color Emoji"`,`"Segoe UI Emoji"`,`"Segoe UI Symbol"`,`"Noto Color Emoji"`],serif:[`ui-serif`,`Georgia`,`Cambria`,`"Times New Roman"`,`Times`,`serif`],mono:[`"Fira Code"`,`ui-monospace`,`SFMono-Regular`,`Menlo`,`Monaco`,`Consolas`,`"Liberation Mono"`,`"Courier New"`,`monospace`],webfonts:[`Nunito Sans`,`Fira Code`],provider:`none`,local:[`Avenir Next`],italic:!1,weights:[`200`,`400`,`600`]},favicon:`https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png`,drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:`https://www.plantuml.com/plantuml`,codeCopy:!0,magicMoveCopy:!0,author:``,record:`dev`,css:`unocss`,presenter:!0,browserExporter:`dev`,htmlAttrs:{lang:`zh-CN`},transition:`fade-out`,editor:!0,mcp:!0,contextMenu:null,wakeLock:!0,pwa:!1,mdc:!0,comark:!1,seoMeta:{},notesAutoRuby:{},duration:`30min`,timer:`stopwatch`,magicMoveDuration:800,preloadImages:!0,clickAnimation:``,src:`./chapters/03.Skills与结构化Prompt工作流/slides.md`,slidesTitle:`Skills、Rules 与结构化 Prompt - Slidev`},ve=`build`,ye=u(()=>O.aspectRatio),be=u(()=>O.canvasWidth),xe=u(()=>Math.ceil(be.value/ye.value)),Se=u(()=>_e(O.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t])),Ce=O.slidesTitle,we=`/courses/vibe-coding/03/#/`,Te=`modulepreload`,Ee=function(e){return`/courses/vibe-coding/03/`+e},De={},k=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Ee(t,n),t=s(t),t in De)return;De[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Te,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Oe(e){if(e===!1||e===`false`)return null;if(e==null||e===!0||e===`true`)return`+1`;if(typeof e==`string`&&`+-`.includes(e[0]))return e;let t=+e;return Number.isNaN(t)?(console.error(`Invalid "at" prop value: ${e}`),null):t<=0?(console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`),1):t}function ke(e){return Array.isArray(e)?[Oe(e[0]),Oe(e[1])]:null}function Ae(e,t=0,i){let a=m(!1),o=new Map,s=new Map,l={get current(){return E(+e.value,t,l.total)},set current(n){e.value=a.value?E(n,t,l.total):n},clicksStart:t,get relativeSizeMap(){return o},get maxMap(){return s},get isMounted(){return a.value},setup(){n(()=>{a.value=!0,s=_(s),c(e)||(l.current=e.value)}),r(()=>{a.value=!1,o=new Map,s=new Map})},calculateSince(e,t=1){let n=Oe(e);if(n==null)return null;let r,i,a;if(typeof n==`string`){let e=l.currentOffset,o=+n;r=e+o,i=e+o+t-1,a=o+t-1}else r=n,i=n+t-1,a=0;return{start:r,end:1/0,max:i,delta:a,currentOffset:u(()=>l.current-r),isCurrent:u(()=>l.current===r),isActive:u(()=>l.current>=r)}},calculateRange(e){let t=ke(e);if(t==null)return null;let[n,r]=t,i,a,o;return typeof n==`string`?(i=l.currentOffset+ +n,o=+n):(i=n,o=0),typeof r==`string`?(a=i+ +r,o+=+r):a=r,{start:i,end:a,max:a,delta:o,currentOffset:u(()=>l.current-i),isCurrent:u(()=>l.current===i),isActive:u(()=>i<=l.current&&l.current<a)}},calculate(e){return Array.isArray(e)?l.calculateRange(e):l.calculateSince(e)},register(e,t){if(!t)return;let{delta:n,max:r}=t;o.set(e,n),s.set(e,r)},unregister(e){o.delete(e),s.delete(e)},get currentOffset(){return fe(...o.values())},get total(){return i??(a.value?Math.max(0,...s.values()):0)}};return l}function je(e,t=0){let n=e?.meta.slide?.frontmatter.clicksStart??0,r=m(Math.max(g(t),n));return i(()=>g(t),e=>{r.value=Math.max(e,n)}),Ae(r,n,e?.meta?.clicks)}var Me=/[a-z]/i;function Ne(e){if(typeof e==`number`)return{seconds:e,relative:!1};let t=e.startsWith(`+`);t&&(e=e.slice(1));let n=0;if(e.includes(`:`)){let t=e.split(`:`).map(Number),r=0,i=0,a=0;if(t.length===3)r=t[0],i=t[1],a=t[2];else if(t.length===2)i=t[0],a=t[1];else if(t.length===1)a=t[0];else throw TypeError(`Invalid timestamp format`);if(Number.isNaN(r)||Number.isNaN(i)||Number.isNaN(a))throw TypeError(`Invalid timestamp format`);n=(r||0)*3600+(i||0)*60+(a||0)}else if(!Me.test(e))n=Number(e);else{let t={s:1,sec:1,secs:1,m:60,min:60,mins:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400,week:604800,weeks:604800,month:2629746,months:2629746,year:31556952,years:31556952},r=/([\d.]+)([a-z]+)/gi,i=e.matchAll(r);if(i)for(let e of i){let r=Number(e[1]);if(Number.isNaN(r))throw TypeError(`Invalid timestamp value: ${e[1]}`);let i=e[2].toLowerCase();if(!(i in t))throw TypeError(`Invalid timestamp unit: ${i}`);n+=r*t[i]}let a=e.replace(r,``).trim();if(a)throw TypeError(`Unknown timestamp remaining: ${a}`)}return{seconds:n,relative:t}}function Pe(e,t){if(!t||t===`all`||t===`*`)return D(1,e+1);if(t===`none`)return[];let n=[];for(let r of t.split(/[,;]/g))if(!r.includes(`-`))n.push(+r);else{let[t,i]=r.split(`-`,2);n.push(...D(+t,i?+i+1:e+1))}return he(n).filter(t=>t<=e).sort((e,t)=>e-t)}var Fe={},Ie={class:`px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono`};function Le(e,t){return a(),y(`div`,Ie,ne(`Failed to fetch this slide. Please check your network connection.`))}var A=re(Fe,[[`render`,Le]]),Re={class:`h-full w-full flex items-center justify-center gap-2 slidev-slide-loading`},ze=e({__name:`SlideLoading`,setup(e){let t=m(!1);return n(()=>{setTimeout(()=>{t.value=!0},200)}),(e,n)=>(a(),y(`div`,Re,[t.value?(a(),y(h,{key:0},[n[0]||=l(`div`,{class:`i-svg-spinners-90-ring-with-bg text-xl`},null,-1),n[1]||=l(`div`,null,`Loading slide...`,-1)],64)):te(`v-if`,!0)]))}}),j=d({layout:`cover`,lesson:`03`,title:`Skills、Rules 与结构化 Prompt`,unit:`第 1 章 协作入门与工程基础`,lead:`同一件事，说明写得具体，助手做对的机会大得多。每次都要守的规矩写成 Rules，反复用到的做法写成 Skills。课上写一组差、好任务说明，比一比结果。`,theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Be=_({get layout(){return j.layout},get transition(){return j.transition},get class(){return j.class},get clicks(){return j.clicks},get name(){return j.name},get preload(){return j.preload},slide:{content:``,revision:`-uzazy9`,frontmatterRaw:`layout: cover
lesson: '03'
title: Skills、Rules 与结构化 Prompt
unit: 第 1 章 协作入门与工程基础
lead: 同一件事，说明写得具体，助手做对的机会大得多。每次都要守的规矩写成 Rules，反复用到的做法写成 Skills。课上写一组差、好任务说明，比一比结果。
`,note:``,title:`Skills、Rules 与结构化 Prompt`,index:0,noteHTML:``,images:[],raw:``,frontmatter:j,filepath:``,start:0,sourceIndex:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),M=d({layout:`prompt`,title:`同一个功能，两份任务说明`,left:{h:`差的说明`,text:`帮我做个报名功能，好用一点，界面好看。`,notes:[`报什么、填什么、什么情况算失败，都没写`,`“好用”“好看”没法检查`]},right:{h:`好的说明`,text:`**目标** 活动详情页加报名表单。
**输入** 姓名；学号，8 位数字。
**输出** 成功显示“报名成功”；满员显示“名额已满”；重复报名显示“你已报过名”。
**约束** 只改详情页和报名接口，不动登录。
**验收** 名额为 2 的活动报第 3 人，看到“名额已满”。`,notes:[`每一项都能当场检查`]},theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Ve=_({get layout(){return M.layout},get transition(){return M.transition},get class(){return M.class},get clicks(){return M.clicks},get name(){return M.name},get preload(){return M.preload},slide:{content:``,revision:`-8lrhgc`,frontmatterRaw:`layout: prompt
title: 同一个功能，两份任务说明
left:
  h: 差的说明
  text: 帮我做个报名功能，好用一点，界面好看。
  notes:
    - 报什么、填什么、什么情况算失败，都没写
    - “好用”“好看”没法检查
right:
  h: 好的说明
  text: "**目标** 活动详情页加报名表单。\\n**输入** 姓名；学号，8 位数字。\\n**输出** 成功显示“报名成功”；满员显示“名额已满”；重复报名显示“你已报过名”。\\n**约束** 只改详情页和报名接口，不动登录。\\n**验收** 名额为 2 的活动报第 3 人，看到“名额已满”。"
  notes:
    - 每一项都能当场检查
`,note:``,title:`同一个功能，两份任务说明`,index:1,noteHTML:``,images:[],raw:``,frontmatter:M,filepath:``,start:8,sourceIndex:1,id:1,no:2},__clicksContext:null,__preloaded:!1}),N=d({layout:`table`,title:`任务说明的五项`,head:[`项`,`写什么`,`缺了会怎样`],widths:[`130px`,`auto`,`440px`],hi:4,rows:[[`目标`,`这一次只做哪一件事`,`助手顺手改一堆别的`],[`输入`,`用户给什么，格式和范围`,`格式靠猜，边界没人管`],[`输出`,`成功和每种失败分别显示什么`,`失败时页面一片空白`],[`约束`,`不许动哪些文件，用什么技术`,`改到范围以外，甚至换掉框架`],[`验收`,`用什么数据、做什么操作、应看到什么`,`做完了没法判断对不对`]],theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),He=_({get layout(){return N.layout},get transition(){return N.transition},get class(){return N.class},get clicks(){return N.clicks},get name(){return N.name},get preload(){return N.preload},slide:{content:``,revision:`-48yuyc`,frontmatterRaw:`layout: table
title: 任务说明的五项
head: [项, 写什么, 缺了会怎样]
widths: [130px, auto, 440px]
hi: 4
rows:
  - [目标, 这一次只做哪一件事, 助手顺手改一堆别的]
  - [输入, 用户给什么，格式和范围, 格式靠猜，边界没人管]
  - [输出, 成功和每种失败分别显示什么, 失败时页面一片空白]
  - [约束, 不许动哪些文件，用什么技术, 改到范围以外，甚至换掉框架]
  - [验收, 用什么数据、做什么操作、应看到什么, 做完了没法判断对不对]
`,note:``,title:`任务说明的五项`,index:2,noteHTML:``,images:[],raw:``,frontmatter:N,filepath:``,start:24,sourceIndex:2,id:2,no:3},__clicksContext:null,__preloaded:!1}),P=d({layout:`compare`,title:`一次说完，还是分几轮`,left:{tag:`一次说完`,h:`一条长消息要十件事`,items:[`后面几件常被漏掉`,`出了错，不知道是哪一件引起的`,`改起来要整段重来`],tone:`bad`},right:{tag:`分几轮`,h:`一轮一件，验收了再下一轮`,items:[`每轮改动小，看得过来`,`出错只退回这一轮`,`前一轮的结果成为下一轮的上下文`],tone:`good`},verdict:`分轮的第一轮，是让助手先出计划，人审过再动手。`,theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Ue=_({get layout(){return P.layout},get transition(){return P.transition},get class(){return P.class},get clicks(){return P.clicks},get name(){return P.name},get preload(){return P.preload},slide:{content:``,revision:`adsjvi`,frontmatterRaw:`layout: compare
title: 一次说完，还是分几轮
left:
  tag: 一次说完
  h: 一条长消息要十件事
  items:
    - 后面几件常被漏掉
    - 出了错，不知道是哪一件引起的
    - 改起来要整段重来
  tone: bad
right:
  tag: 分几轮
  h: 一轮一件，验收了再下一轮
  items:
    - 每轮改动小，看得过来
    - 出错只退回这一轮
    - 前一轮的结果成为下一轮的上下文
  tone: good
verdict: 分轮的第一轮，是让助手先出计划，人审过再动手。
`,note:``,title:`一次说完，还是分几轮`,index:3,noteHTML:``,images:[],raw:``,frontmatter:P,filepath:``,start:38,sourceIndex:3,id:3,no:4},__clicksContext:null,__preloaded:!1}),F=d({layout:`cols`,title:`给助手的上下文：给相关的，不给全部`,variant:`boxes`,items:[{h:`要给`,items:[`任务说明的五项：目标、输入、输出、约束、验收`,`要改的文件，相关的约定（如 docs/api.md）`,`报错原文和复现步骤`],on:!0},{h:`不给`,items:[`整段聊天记录：里面混着已经推翻的方案`,`和这次任务无关的文件`,`密钥、口令、真实的个人信息`]}],close:`给出去的每一样东西，你都说得出为什么要给。`,theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),We=_({get layout(){return F.layout},get transition(){return F.transition},get class(){return F.class},get clicks(){return F.clicks},get name(){return F.name},get preload(){return F.preload},slide:{content:``,revision:`-ibua4m`,frontmatterRaw:`layout: cols
title: 给助手的上下文：给相关的，不给全部
variant: boxes
items:
  - h: 要给
    items:
      - 任务说明的五项：目标、输入、输出、约束、验收
      - 要改的文件，相关的约定（如 docs/api.md）
      - 报错原文和复现步骤
    on: true
  - h: 不给
    items:
      - 整段聊天记录：里面混着已经推翻的方案
      - 和这次任务无关的文件
      - 密钥、口令、真实的个人信息
close: 给出去的每一样东西，你都说得出为什么要给。
`,note:``,title:`给助手的上下文：给相关的，不给全部`,index:4,noteHTML:``,images:[],raw:``,frontmatter:F,filepath:``,start:60,sourceIndex:4,id:4,no:5},__clicksContext:null,__preloaded:!1}),I=d({layout:`compare`,title:`Rules 每次都读，Skills 用到才读`,left:{tag:`Rules`,h:`每次对话都生效的规矩`,items:[`放在 AGENTS.md 或规则目录里`,`写必做步骤和禁止事项`,`要短：每次都占用上下文`],eg:"改完必须运行 `scripts/check.sh`；不许提交 .env",tone:`navy`},right:{tag:`Skills`,h:`某一类任务的做法说明`,items:[`一个目录放一份 SKILL.md，开头写名字和用途`,`助手先只看用途，任务对得上才读全文`,`可以附带脚本和模板`],eg:`“新增接口”：约定格式、成功和失败示例、测试写法`,tone:`tint`},source:`Agent Skills 开放标准，agentskills.io，2025-12-18`,theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Ge=_({get layout(){return I.layout},get transition(){return I.transition},get class(){return I.class},get clicks(){return I.clicks},get name(){return I.name},get preload(){return I.preload},slide:{content:``,revision:`-hzw9ya`,frontmatterRaw:`layout: compare
title: Rules 每次都读，Skills 用到才读
left:
  tag: Rules
  h: 每次对话都生效的规矩
  items:
    - 放在 AGENTS.md 或规则目录里
    - 写必做步骤和禁止事项
    - 要短：每次都占用上下文
  eg: 改完必须运行 \`scripts/check.sh\`；不许提交 .env
  tone: navy
right:
  tag: Skills
  h: 某一类任务的做法说明
  items:
    - 一个目录放一份 SKILL.md，开头写名字和用途
    - 助手先只看用途，任务对得上才读全文
    - 可以附带脚本和模板
  eg: “新增接口”：约定格式、成功和失败示例、测试写法
  tone: tint
source: Agent Skills 开放标准，agentskills.io，2025-12-18
`,note:``,title:`Rules 每次都读，Skills 用到才读`,index:5,noteHTML:``,images:[],raw:``,frontmatter:I,filepath:``,start:78,sourceIndex:5,id:5,no:6},__clicksContext:null,__preloaded:!1}),L=d({layout:`code`,title:`Rules 的样子：一份 AGENTS.md`,file:`AGENTS.md`,width:720,notes:[{line:3,h:`项目是什么`,p:`一两句话，让助手知道在改什么。`},{line:5,h:`必须`,p:`每次改完都要做的事。`},{line:8,h:`禁止`,p:`不能商量的底线。`,tone:`bad`}],theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Ke=_({get layout(){return L.layout},get transition(){return L.transition},get class(){return L.class},get clicks(){return L.clicks},get name(){return L.name},get preload(){return L.preload},slide:{content:``,revision:`q9y6sw`,frontmatterRaw:`layout: code
title: Rules 的样子：一份 AGENTS.md
file: AGENTS.md
width: 720
notes:
  - line: 3
    h: 项目是什么
    p: 一两句话，让助手知道在改什么。
  - line: 5
    h: 必须
    p: 每次改完都要做的事。
  - line: 8
    h: 禁止
    p: 不能商量的底线。
    tone: bad
`,note:``,title:`Rules 的样子：一份 AGENTS.md`,index:6,noteHTML:``,images:[],raw:``,frontmatter:L,filepath:``,start:102,sourceIndex:6,id:6,no:7},__clicksContext:null,__preloaded:!1}),R=d({layout:`code`,title:`Skills 的样子：一份 SKILL.md`,file:`skills/add-api/SKILL.md`,width:760,notes:[{line:3,h:`名字和用途`,p:`助手平时只读这两行，判断这次任务用不用得上。`,tone:`bad`},{line:7,h:`正文`,p:`用得上时才读：一步一步怎么做。`}],caption:`用途写得准，助手才会在该用的时候想起它。`,theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),qe=_({get layout(){return R.layout},get transition(){return R.transition},get class(){return R.class},get clicks(){return R.clicks},get name(){return R.name},get preload(){return R.preload},slide:{content:``,revision:`hfd2n7`,frontmatterRaw:`layout: code
title: Skills 的样子：一份 SKILL.md
file: skills/add-api/SKILL.md
width: 760
notes:
  - line: 3
    h: 名字和用途
    p: 助手平时只读这两行，判断这次任务用不用得上。
    tone: bad
  - line: 7
    h: 正文
    p: 用得上时才读：一步一步怎么做。
caption: 用途写得准，助手才会在该用的时候想起它。
`,note:``,title:`Skills 的样子：一份 SKILL.md`,index:7,noteHTML:``,images:[],raw:``,frontmatter:R,filepath:``,start:132,sourceIndex:7,id:7,no:8},__clicksContext:null,__preloaded:!1}),z=d({layout:`flow`,title:`一次任务的工作流`,steps:[{h:`写说明`,p:`按五项写，交给助手。`},{h:`出计划`,p:`助手列出要改哪些文件、怎么改。`},{h:`审计划`,p:`人看计划，不对就在这一步打回。`,on:!0},{h:`改`,p:`助手按计划改。`},{h:`验收`,p:`照验收那一条亲手试。`},{h:`提交`,p:`单独提交，说明写改了什么。`}],close:`计划阶段打回，比改完再返工省事得多。`,theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Je=_({get layout(){return z.layout},get transition(){return z.transition},get class(){return z.class},get clicks(){return z.clicks},get name(){return z.name},get preload(){return z.preload},slide:{content:``,revision:`-f3uyzb`,frontmatterRaw:`layout: flow
title: 一次任务的工作流
steps:
  - h: 写说明
    p: 按五项写，交给助手。
  - h: 出计划
    p: 助手列出要改哪些文件、怎么改。
  - h: 审计划
    p: 人看计划，不对就在这一步打回。
    on: true
  - h: 改
    p: 助手按计划改。
  - h: 验收
    p: 照验收那一条亲手试。
  - h: 提交
    p: 单独提交，说明写改了什么。
close: 计划阶段打回，比改完再返工省事得多。
`,note:``,title:`一次任务的工作流`,index:8,noteHTML:``,images:[],raw:``,frontmatter:z,filepath:``,start:160,sourceIndex:8,id:8,no:9},__clicksContext:null,__preloaded:!1}),B=d({layout:`edits`,title:`任务说明里常见的四个毛病`,items:[{h:`用形容词代替标准`,del:`界面好看一点`,ins:`标题 32 号字，报名按钮放在右上角`},{h:`一次塞十件事`,del:`加报名、取消、导出名单，顺便美化页面`,ins:`拆成三轮：报名、取消、导出，每轮验收`},{h:`没写不能动什么`,del:`按需修改相关文件`,ins:`只改详情页和报名接口，不动登录和数据格式`},{h:`没写怎样算完`,del:`做好报名功能`,ins:`名额为 2 的活动报第 3 人，显示“名额已满”`}],theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Ye=_({get layout(){return B.layout},get transition(){return B.transition},get class(){return B.class},get clicks(){return B.clicks},get name(){return B.name},get preload(){return B.preload},slide:{content:``,revision:`asm4sv`,frontmatterRaw:`layout: edits
title: 任务说明里常见的四个毛病
items:
  - h: 用形容词代替标准
    del: 界面好看一点
    ins: 标题 32 号字，报名按钮放在右上角
  - h: 一次塞十件事
    del: 加报名、取消、导出名单，顺便美化页面
    ins: 拆成三轮：报名、取消、导出，每轮验收
  - h: 没写不能动什么
    del: 按需修改相关文件
    ins: 只改详情页和报名接口，不动登录和数据格式
  - h: 没写怎样算完
    del: 做好报名功能
    ins: 名额为 2 的活动报第 3 人，显示“名额已满”
`,note:``,title:`任务说明里常见的四个毛病`,index:9,noteHTML:``,images:[],raw:``,frontmatter:B,filepath:``,start:180,sourceIndex:9,id:9,no:10},__clicksContext:null,__preloaded:!1}),V=d({layout:`checklist`,title:`工作流自检`,cols:2,items:[{h:`说明里五项都有`,p:`目标、输入、输出、约束、验收`,state:`todo`},{h:`助手先出了计划`,p:`我看过，必要时改过`,state:`todo`},{h:`改动在约定范围内`,p:`用 git diff 核对文件和行数`,state:`todo`},{h:`验收那一条亲手试过`,p:`不以助手说的为准`,state:`todo`},{h:`这次改动单独提交`,p:`说明写明改了什么`,state:`todo`},{h:`发现的问题写进了规则`,p:`下次不必再说一遍`,state:`todo`}],theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Xe=_({get layout(){return V.layout},get transition(){return V.transition},get class(){return V.class},get clicks(){return V.clicks},get name(){return V.name},get preload(){return V.preload},slide:{content:``,revision:`s7g6w2`,frontmatterRaw:`layout: checklist
title: 工作流自检
cols: 2
items:
  - { h: 说明里五项都有, p: 目标、输入、输出、约束、验收, state: todo }
  - { h: 助手先出了计划, p: 我看过，必要时改过, state: todo }
  - { h: 改动在约定范围内, p: 用 git diff 核对文件和行数, state: todo }
  - { h: 验收那一条亲手试过, p: 不以助手说的为准, state: todo }
  - { h: 这次改动单独提交, p: 说明写明改了什么, state: todo }
  - { h: 发现的问题写进了规则, p: 下次不必再说一遍, state: todo }
`,note:``,title:`工作流自检`,index:10,noteHTML:``,images:[],raw:``,frontmatter:V,filepath:``,start:198,sourceIndex:10,id:10,no:11},__clicksContext:null,__preloaded:!1}),H=d({layout:`lab`,title:`上机：写一组差、好任务说明，比较结果`,goal:`同一个小功能，用两份说明各做一次，比较差在哪里`,time:`40 分钟`,tasks:[{h:`用差的说明做一次`,p:`挑本组主路径上的一个小功能，用一句模糊的话交给助手。`,done:"记下它改了哪些文件、结果怎样，然后用 `git restore` 撤销"},{h:`用好的说明再做一次`,p:`同一个功能按五项写说明，先让助手出计划，审过再改。`,done:`验收那一条亲手试过`},{h:`对比`,p:`两次的 diff 和结果放在一起看，记下差异。`,done:`至少写出两处具体差别`},{h:`写一条规则`,p:`把这次发现的一个问题写进 AGENTS.md 的必须或禁止。`,done:`新开一个对话，助手能遵守这条规则`}],theme:`default`,colorSchema:`light`,aspectRatio:`16/9`,canvasWidth:1280,highlighter:`shiki`,mdc:!0,transition:`fade-out`,fonts:{provider:`none`},htmlAttrs:{lang:`zh-CN`}}),Ze=_({get layout(){return H.layout},get transition(){return H.transition},get class(){return H.class},get clicks(){return H.clicks},get name(){return H.name},get preload(){return H.preload},slide:{content:``,revision:`-wldwxf`,frontmatterRaw:`layout: lab
title: 上机：写一组差、好任务说明，比较结果
goal: 同一个小功能，用两份说明各做一次，比较差在哪里
time: 40 分钟
tasks:
  - h: 用差的说明做一次
    p: 挑本组主路径上的一个小功能，用一句模糊的话交给助手。
    done: 记下它改了哪些文件、结果怎样，然后用 \`git restore\` 撤销
  - h: 用好的说明再做一次
    p: 同一个功能按五项写说明，先让助手出计划，审过再改。
    done: 验收那一条亲手试过
  - h: 对比
    p: 两次的 diff 和结果放在一起看，记下差异。
    done: 至少写出两处具体差别
  - h: 写一条规则
    p: 把这次发现的一个问题写进 AGENTS.md 的必须或禁止。
    done: 新开一个对话，助手能遵守这条规则
`,note:``,title:`上机：写一组差、好任务说明，比较结果`,index:11,noteHTML:``,images:[],raw:``,frontmatter:H,filepath:``,start:211,sourceIndex:11,id:11,no:12},__clicksContext:null,__preloaded:!1}),U=Array(12),W=(e,t)=>o({loader:t,delay:300,loadingComponent:ze,errorComponent:A,onError:t=>console.error(`Failed to load slide `+(e+1),t)}),Qe=async()=>{try{return U[0]??=await k(()=>import(`../md-6mRxO_GQ.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))}catch(e){return console.error(`slide failed to load`,e),A}},$e=async()=>{try{return U[1]??=await k(()=>import(`../md-DWtD9le_.js`),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},et=async()=>{try{return U[2]??=await k(()=>import(`../md-BPosl7A1.js`),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},tt=async()=>{try{return U[3]??=await k(()=>import(`../md-DhwJCQt2.js`),__vite__mapDeps([13,1,2,3,14,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},nt=async()=>{try{return U[4]??=await k(()=>import(`../md-DgWPtTG2.js`),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},rt=async()=>{try{return U[5]??=await k(()=>import(`../md-DA0ffN_s.js`),__vite__mapDeps([16,1,2,3,14,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},it=async()=>{try{return U[6]??=await k(()=>import(`../md-BiNvW7Vp.js`),__vite__mapDeps([17,1,2,3,18,7,6,5,8,4,9,11,19]))}catch(e){return console.error(`slide failed to load`,e),A}},at=async()=>{try{return U[7]??=await k(()=>import(`../md-D838jI7J.js`),__vite__mapDeps([20,1,2,3,18,7,6,5,8,4,9,11,19]))}catch(e){return console.error(`slide failed to load`,e),A}},ot=async()=>{try{return U[8]??=await k(()=>import(`../md-DR5R6ztw.js`),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},st=async()=>{try{return U[9]??=await k(()=>import(`../md-BHQI_jSG.js`),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},ct=async()=>{try{return U[10]??=await k(()=>import(`../md-CV7scFdy.js`),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},lt=async()=>{try{return U[11]??=await k(()=>import(`../md-D42u4PCH.js`),__vite__mapDeps([24,1,2,3,4,5,6,7,8,9,11]))}catch(e){return console.error(`slide failed to load`,e),A}},ut=[{no:1,meta:Be,load:Qe,component:W(0,Qe)},{no:2,meta:Ve,load:$e,component:W(1,$e)},{no:3,meta:He,load:et,component:W(2,et)},{no:4,meta:Ue,load:tt,component:W(3,tt)},{no:5,meta:We,load:nt,component:W(4,nt)},{no:6,meta:Ge,load:rt,component:W(5,rt)},{no:7,meta:Ke,load:it,component:W(6,it)},{no:8,meta:qe,load:at,component:W(7,at)},{no:9,meta:Je,load:ot,component:W(8,ot)},{no:10,meta:Ye,load:st,component:W(9,st)},{no:11,meta:Xe,load:ct,component:W(10,ct)},{no:12,meta:Ze,load:lt,component:W(11,lt)}],G=p(ut),dt=`$$slidev-clicks-context`,ft=`$$slidev-page`,pt=`$$slidev-slide-element`,mt=`$$slidev-slide-scale`,K=`$$slidev-context`,ht=`$$slidev-route`,gt=`$$slidev-render-context`,_t=`$$slidev-fontmatter`,vt=`$$slidev-slide-zoom`,yt=`slidev-vclick-target`,bt=`slidev-vclick-hidden`,xt=`slidev-vclick-hidden-explicitly`,St=`slidev-vclick-current`,Ct=`slidev-vclick-prior`,wt=`slidev-vclick-anim-`,q=999999,Tt=[`localhost`,`127.0.0.1`],Et=[`clicks`,`clicksStart`,`disabled`,`hide`,`hideInToc`,`layout`,`level`,`preload`,`routeAlias`,`src`,`title`,`transition`,`zoom`,`dragPos`,`lang`,`clickAnimation`],Dt=[...Et,`theme`,`titleTemplate`,`info`,`author`,`keywords`,`presenter`,`browserExporter`,`download`,`exportFilename`,`export`,`highlighter`,`lineNumbers`,`monaco`,`monacoTypesSource`,`monacoTypesAdditionalPackages`,`monacoRunAdditionalDeps`,`monacoRunUseStrict`,`remoteAssets`,`selectable`,`record`,`colorSchema`,`routerMode`,`aspectRatio`,`canvasWidth`,`themeConfig`,`favicon`,`plantUmlServer`,`fonts`,`defaults`,`drawings`,`htmlAttrs`,`mdc`,`comark`,`contextMenu`,`wakeLock`,`pwa`,`seoMeta`,`notesAutoRuby`,`magicMoveDuration`,`preloadImages`];function Ot(e,t,{mode:n=`replace`}={}){let r=C();return u({get(){let n=r.currentRoute.value.query[e];return n==null?t??null:Array.isArray(n)?n.filter(Boolean):n},set(i){f(()=>{(r.currentRoute.value.query[e]??t?.toString())!==i.toString()&&r[ee(n)]({query:{...r.currentRoute.value.query,[e]:`${i}`===t?void 0:i}})})}})}function kt(){let e=b(K),t=s(e,`nav`),n=b(dt).value,r=s(n,`current`),i=b(ft),a=b(gt),o=b(_t,{});return{$slidev:e,$nav:t,$clicksContext:n,$clicks:r,$page:i,$route:b(ht,void 0),$renderContext:a,$frontmatter:o,$scale:b(mt,m(1)),$zoom:b(vt,u(()=>1))}}function At(e,t){return{...oe(e,t===0?Dt:Et),frontmatter:e}}function jt(e,t,n=!1){let r=e.meta.slide?.frontmatter.routeAlias??e.no;return n?`/export/${r}`:t?`/presenter/${r}`:`/${r}`}function J(e){return G.value.find(t=>t.no===+e||t.meta.slide?.frontmatter.routeAlias===e)}function Y(e,t,n=!1){return(typeof e==`number`||typeof e==`string`)&&(e=J(e)),jt(e,t,n)}var Mt={"slide-left":`slide-left | slide-right`,"slide-right":`slide-right | slide-left`,"slide-up":`slide-up | slide-down`,"slide-down":`slide-down | slide-up`};function Nt(e,t=!1){if(!e||(typeof e==`string`&&(e={name:e}),!e.name))return;let n=e.name.includes(`|`)?e.name:Mt[e.name]||e.name;if(n.includes(`|`)){let[e,r]=n.split(`|`).map(e=>e.trim());n=t?r:e}if(n)return{...e,name:n}}function Pt(e,t,n){let r=e>0?n?.meta?.transition:t?.meta?.transition;return r||=O.transition||void 0,Nt(r,e<0)}var Ft=m(!1),It=m(!1),Lt=m(!1),Rt=m(!1),zt=m(!1),Bt=m(!1),Vt=m(!0),Ht=d(new Set),Ut=u(()=>Ht.size>0),Wt=de({xs:460,...w}),Gt=ae(),Kt=se(),qt=u(()=>Gt.height.value-Gt.width.value/ye.value>120),Jt=le(ue?document.body:null),X=ce(),Yt=u(()=>[`INPUT`,`TEXTAREA`].includes(X.value?.tagName||``)),Xt=u(()=>[`BUTTON`,`A`].includes(X.value?.tagName||``));T(`slidev-camera`,`default`,{listenToStorageChanges:!1}),T(`slidev-mic`,`default`,{listenToStorageChanges:!1});var Zt=T(`slidev-scale`,0),Qt=T(`slidev-wake-lock`,!0),$t=T(`slidev-hide-cursor-idle`,!0);T(`slidev-skip-export-pdf-tip`,!1),T(`slidev-export-capture-delay`,400,{listenToStorageChanges:!1});var en=T(`slidev-presenter-cursor`,!0,{listenToStorageChanges:!1}),tn=T(`slidev-cursor-style`,`cursor`,{listenToStorageChanges:!1});function nn(){en.value=!en.value}var rn=T(`slidev-show-editor`,!1,{listenToStorageChanges:!1}),an=T(`slidev-editor-vertical`,!1,{listenToStorageChanges:!1}),on=T(`slidev-editor-width`,ue?window.innerWidth*.4:318,{listenToStorageChanges:!1}),sn=T(`slidev-editor-height`,ue?window.innerHeight*.4:300,{listenToStorageChanges:!1}),cn=p(null),Z=T(`slidev-presenter-font-size`,1,{listenToStorageChanges:!1}),Q=T(`slidev-presenter-layout`,1,{listenToStorageChanges:!1}),$={invert:!1,contrast:1,brightness:1,hueRotate:0,saturate:1,sepia:0},ln=T(`slidev-viewer-css-filter`,$,{listenToStorageChanges:!1,mergeDefaults:!0,deep:!0}),un=u(()=>Object.keys($).some(e=>ln.value[e]!==$[e]));function dn(){Q.value+=1,Q.value>3&&(Q.value=1)}function fn(){Z.value=Math.min(2,Z.value+.1)}function pn(){Z.value=Math.max(.5,Z.value-.1)}var mn=S(Rt),hn=T(`slidev-sync-directions`,{viewerSend:!0,viewerReceive:!0,presenterSend:!0,presenterReceive:!0},{listenToStorageChanges:!1,mergeDefaults:!0});function gn(e,t,n=1){let r=t.meta.slide.level??n;r&&r>n&&e.length>0?gn(e[e.length-1].children,t,n+1):e.push({no:t.no,children:[],level:n,titleLevel:r,path:Y(t.meta.slide?.frontmatter?.routeAlias??t.no,!1),hideInToc:!!t.meta?.slide?.frontmatter?.hideInToc,title:t.meta?.slide?.title})}function _n(e,t,n=!1,r,i){return e.map(e=>{let a={...e,active:e.no===i?.value,hasActiveParent:n};return a.children.length>0&&(a.children=_n(a.children,t,a.active||a.hasActiveParent,a,i)),r&&(a.active||a.activeParent)&&(r.activeParent=!0),a})}function vn(e,t=1){return e.filter(e=>!e.hideInToc).map(e=>({...e,children:vn(e.children,t+1)}))}function yn(e,t,n){let r=u(()=>e.value.filter(e=>e.meta?.slide?.title).reduce((e,t)=>(gn(e,t),e),[])),i=u(()=>_n(r.value,n.value,void 0,void 0,t));return u(()=>vn(i.value))}function bn(e,t,n=m(0),r,a,o){let s=u(()=>G.value.length),c=m(0),l=m(0),d=u(()=>Y(e.value,r.value)),f=u(()=>e.value.no),p=u(()=>e.value.meta?.layout||(f.value===1?`cover`:`default`)),ee=u(()=>e.value.meta.slide.frontmatter),h=u(()=>t.value.current),g=u(()=>t.value.clicksStart),_=u(()=>t.value.total),v=u(()=>G.value[Math.min(G.value.length,f.value+1)-1]),te=u(()=>G.value[Math.max(1,f.value-1)-1]),ne=u(()=>f.value<G.value.length||h.value<_.value),y=u(()=>f.value>1||h.value>0),re=u(()=>a.value?void 0:Pt(c.value,e.value,te.value));i(e,(e,t)=>{c.value=e.no-t.no});async function b(e){return!1}let ie=yn(G,f,e);async function x(){l.value=1,_.value<=n.value?await S():n.value+=1}async function ae(){l.value=-1,n.value<=g.value?await oe(!0):--n.value}async function S(e=!1){l.value=1,f.value<G.value.length&&await w(f.value+1,e&&!a.value?q:void 0)}async function oe(e=!1){l.value=-1,f.value>1&&await w(f.value-1,e&&!a.value?q:void 0)}function C(){return w(1)}function se(){return w(s.value)}async function w(e,t=0,i=!1){zt.value=!1;let a=f.value!==e,s=t!==n.value,c=J(e)?.meta,l=c?.slide?.frontmatter.clicksStart??0;t=E(t,l,c?.__clicksContext?.total??999999),(i||a||s)&&await o?.push({path:Y(e,r.value,o.currentRoute.value.name===`export`),query:{...o.currentRoute.value.query,clicks:t===0?void 0:t.toString(),embedded:location.search.includes(`embedded`)?`true`:void 0}})}function ce(){o?.push({path:Y(f.value,!0),query:{...o.currentRoute.value.query}})}function T(){o?.push({path:Y(f.value,!1),query:{...o.currentRoute.value.query}})}return{slides:G,total:s,currentPath:d,currentSlideNo:f,currentPage:f,currentSlideRoute:e,currentLayout:p,currentFrontmatter:ee,currentTransition:re,clicksDirection:l,nextRoute:v,prevRoute:te,clicksContext:t,clicks:h,clicksStart:g,clicksTotal:_,hasNext:ne,hasPrev:y,tocTree:ie,navDirection:c,openInEditor:b,next:x,prev:ae,go:w,goLast:se,goFirst:C,nextSlide:S,prevSlide:oe,enterPresenter:ce,exitPresenter:T}}var xn=x(()=>{let e=C(),t=ie(),n=u(()=>(e?.currentRoute?.value?.query,new URLSearchParams(location.search))),r=u(()=>n.value.has(`print`)||t.name===`export`),i=m(n.value.get(`print`)===`clicks`),a=u(()=>n.value.has(`embedded`)),o=u(()=>t.name===`play`),s=u(()=>t.name===`presenter`),c=u(()=>t.name===`notes`),l=u(()=>!s.value&&(!O.remote||n.value.get(`password`)===O.remote)),d=u(()=>!!t.params.no),f=u(()=>d.value?J(t.params.no)?.no??1:1),p=u(()=>G.value[f.value-1]),ee=m(Pe(G.value.length,t?.query?.range)),h=Ot(`clicks`,`0`),g=u(()=>v(p.value)),_=u({get(){let e=+(h.value||0);return Number.isNaN(e)&&(e=0),e},set(e){zt.value=!1,h.value=e.toString()}});function v(e){if(e?.meta?.__clicksContext)return e.meta.__clicksContext;let t=e.no,n=Ae(u({get(){return f.value===t?Math.max(+(h.value??0),n.clicksStart):f.value>t?q:n.clicksStart},set(e){f.value===t&&(h.value=e.toString())}}),e?.meta.slide?.frontmatter.clicksStart??0,e?.meta.clicks);return e?.meta&&(e.meta.__clicksContext=n),n}return{router:e,currentRoute:u(()=>t),isPrintMode:r,isPrintWithClicks:i,isEmbedded:a,isPlaying:o,isPresenter:s,isNotesViewer:c,isPresenterAvailable:l,hasPrimarySlide:d,currentSlideNo:f,currentSlideRoute:p,clicksContext:g,queryClicksRaw:h,queryClicks:_,printRange:ee,getPrimaryClicks:v}}),Sn=x(()=>{let e=xn(),t=C(),n=bn(e.currentSlideRoute,e.clicksContext,e.queryClicks,e.isPresenter,e.isPrintMode,t);return i([n.total,e.currentRoute],async()=>{let t=e.currentRoute.value.params.no;e.hasPrimarySlide.value&&!J(t)&&(t&&t!==`index.html`?await n.go(n.total.value,0,!0):await n.go(1,0,!0))},{flush:`pre`,immediate:!0}),{...n,...e}});function Cn(){let e=Sn(),n=t()?b(K,void 0):void 0;if(!n)return e;let r=v(n).nav;return{...e,...r}}export{_t as $,Zt as A,Y as B,Ut as C,Rt as D,It as E,ln as F,bt as G,kt as H,$ as I,yt as J,xt as K,Qt as L,mn as M,nn as N,en as O,dn as P,ft as Q,Gt as R,Vt as S,Lt as T,wt as U,At as V,St as W,Tt as X,q as Y,dt as Z,Xt as _,Ce as _t,tn as a,K as at,Q as b,E as bt,sn as c,Ne as ct,un as d,k as dt,gt as et,$t as f,ve as ft,Yt as g,be as gt,an as h,xe as ht,Wt as i,vt as it,hn as j,Ft as k,on as l,Ae as lt,fn as m,ye as mt,cn as n,pt as nt,pn as o,G as ot,zt as p,we as pt,Ct as q,X as r,mt as rt,Bt as s,Pe as st,Cn as t,ht as tt,Jt as u,je as ut,qt as v,Se as vt,rn as w,Z as x,D as xt,Kt as y,O as yt,J as z};