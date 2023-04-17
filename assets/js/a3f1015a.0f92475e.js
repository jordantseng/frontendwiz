"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="\u8cc7\u6599\u5b58\u5132",i={unversionedId:"\u700f\u89bd\u5668/browser-storage",id:"\u700f\u89bd\u5668/browser-storage",title:"\u8cc7\u6599\u5b58\u5132",description:"TL;DR",source:"@site/docs/\u700f\u89bd\u5668/browser-storage.md",sourceDirName:"\u700f\u89bd\u5668",slug:"/\u700f\u89bd\u5668/browser-storage",permalink:"/frontendwiz/\u700f\u89bd\u5668/browser-storage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u700f\u89bd\u5668/browser-storage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Throttle \u5be6\u4f5c",permalink:"/frontendwiz/\u5e38\u898b\u624b\u5beb\u984c/throttle"}},s={},c=[{value:"TL;DR",id:"tldr",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8cc7\u6599\u5b58\u5132"},"\u8cc7\u6599\u5b58\u5132"),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("p",null,"Cookie\u3001Session\u3001LocalStorage \u90fd\u662f\u5728\u524d\u7aef\u7db2\u9801\u4e2d\u5b58\u5132\u8cc7\u6599\u7684\u65b9\u5f0f\uff0c\u4f46\u662f\u5b83\u5011\u4e4b\u9593\u6709\u8457\u4e0d\u540c\u7684\u7279\u9ede\u548c\u7528\u9014\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cookie")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u9650\u5236\uff1a\u4e00\u822c\u4e0d\u80fd\u8d85\u904e 4KB\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u547d\u9031\u671f\uff1a\u53ef\u4ee5\u8a2d\u7f6e\u904e\u671f\u6642\u9593\uff0c\u904e\u671f\u5f8c\u6703\u81ea\u52d5\u522a\u9664\uff0c\u6c92\u6709\u8a2d\u7f6e\u7684\u8a71\uff0c\u9810\u8a2d\u662f\u95dc\u9589\u700f\u89bd\u5668\u4e4b\u5f8c\u5931\u6548\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5834\u666f\uff1aCookie \u6703\u88ab",(0,o.kt)("strong",{parentName:"li"},"\u81ea\u52d5\u593e\u5e36\u5728 HTTP \u8acb\u6c42\u4e2d"),"\uff0c\u6240\u4ee5\u5e38\u4f7f\u7528\u5728\u9700\u8981\u8fa8\u8b58\u7528\u6236\u7684\u5834\u666f\uff0c\u4f8b\u5982\u767b\u5165\u4fe1\u606f\u3001\u7528\u6236\u540d\u3001\u8cfc\u7269\u8eca\u5167\u5bb9\u7b49\u3002")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Session Storage")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u9650\u5236\uff1a\u901a\u5e38\u70ba 5MB ~ 10MB\uff08\u4f9d\u4e0d\u540c\u700f\u89bd\u5668\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u547d\u9031\u671f\uff1a\u5728\u6bcf\u6b21\u95dc\u9589\u8a72\u5206\u9801\u3001\u6216\u662f\u95dc\u9589\u700f\u89bd\u5668\u5f8c\u5c31\u6703\u81ea\u52d5\u88ab\u6e05\u9664\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5834\u666f\uff1a\u901a\u5e38\u88ab\u7528\u4f86",(0,o.kt)("strong",{parentName:"li"},"\u5132\u5b58\u77ed\u671f"),"\u7684\u8cc7\u6599\uff0c\u7528\u4f86\u5728\u7db2\u7ad9\u7684\u4e0d\u540c\u9801\u9762\u9593\u5171\u4eab\u8cc7\u6599\u3002")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Local Storage")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u9650\u5236\uff1a\u901a\u5e38\u70ba 5MB ~ 10MB\uff08\u4f9d\u4e0d\u540c\u700f\u89bd\u5668\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u751f\u547d\u9031\u671f\uff1a\u9664\u975e\u5728\u7528\u6236\u7aef\u88ab\u624b\u52d5\u522a\u9664\u6216\u662f\u6e05\u9664\u8cc7\u6599\uff0c\u5426\u5247\u5c07\u6c38\u4e45\u4fdd\u5b58\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5834\u666f\uff1a\u901a\u5e38\u88ab\u7528\u4f86",(0,o.kt)("strong",{parentName:"li"},"\u5132\u5b58\u9577\u671f"),"\u7684\u8cc7\u6599\uff0c\u4f8b\u5982\u4f7f\u7528\u8005\u7684\u504f\u597d\u8a2d\u5b9a\u3001\u6b77\u53f2\u7d00\u9304\u7b49\u3002")),(0,o.kt)("p",null,"\u53c3\u8003\u8cc7\u6599\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.explainthis.io/zh-hant/interview-guides/browser/cookie-sessionstorage-localstorage-difference"},"https://www.explainthis.io/zh-hant/interview-guides/browser/cookie-sessionstorage-localstorage-difference"))))}m.isMDXComponent=!0}}]);