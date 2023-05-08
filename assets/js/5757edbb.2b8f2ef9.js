"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[102],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(t),k=r,u=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const l={},o="\u63d0\u5347",i={unversionedId:"JavaScript/hoisting",id:"JavaScript/hoisting",title:"\u63d0\u5347",description:"TL;DR",source:"@site/docs/JavaScript/hoisting.md",sourceDirName:"JavaScript",slug:"/JavaScript/hoisting",permalink:"/frontendwiz/JavaScript/hoisting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/hoisting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9589\u5305",permalink:"/frontendwiz/JavaScript/closure"},next:{title:"Promise",permalink:"/frontendwiz/JavaScript/promise"}},p={},m=[{value:"TL;DR",id:"tldr",level:3},{value:"<strong>\u4ec0\u9ebc\u662f\u63d0\u5347 \uff08hoisting\uff09</strong>",id:"\u4ec0\u9ebc\u662f\u63d0\u5347-hoisting",level:3},{value:"JavaScript \u7de8\u8b6f\u904e\u7a0b",id:"javascript-\u7de8\u8b6f\u904e\u7a0b",level:3},{value:"\u66ab\u6642\u6027\u6b7b\u5340\uff08Temporal Dead Zone\uff09",id:"\u66ab\u6642\u6027\u6b7b\u5340temporal-dead-zone",level:3},{value:"<code>undefined</code> vs. not defined",id:"undefined-vs-not-defined",level:3},{value:"FAQ",id:"faq",level:3}],c={toc:m},d="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63d0\u5347"},"\u63d0\u5347"),(0,r.kt)("h3",{id:"tldr"},"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u5c31\u662f",(0,r.kt)("strong",{parentName:"li"},"\u8b8a\u6578"),"\u548c",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u5f0f\u5ba3\u544a\uff08function declaration\uff09"),"\u88ab\u63d0\u5347\u5230\u4f5c\u7528\u57df\u9802\u7aef\u7684\u884c\u70ba\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u5347\u4e26\u4e0d\u662f\u771f\u7684\u79fb\u52d5\u7a0b\u5f0f\u78bc\uff0c\u800c\u662f\u8207 JavaScript \u5f15\u64ce\u7de8\u8b6f\u7684\u904e\u7a0b\u6709\u95dc\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7de8\u8b6f\u904e\u7a0b\u5206\u70ba",(0,r.kt)("strong",{parentName:"li"},"\u5275\u9020\u968e\u6bb5"),"\u548c",(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884c\u968e\u6bb5"),"\uff0c\u5275\u9020\u968e\u6bb5\u6703\u5efa\u7acb\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u7d66\u8b8a\u6578\uff0c\u800c\u57f7\u884c\u968e\u6bb5\u5247\u6703\u8ce6\u4e88\u503c\u7d66\u8b8a\u6578\u3002")),(0,r.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u63d0\u5347-hoisting"},(0,r.kt)("strong",{parentName:"h3"},"\u4ec0\u9ebc\u662f\u63d0\u5347 \uff08hoisting\uff09")),(0,r.kt)("p",null,"\u5c31\u8a9e\u610f\u4f86\u8aaa\uff0c\u63d0\u5347\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"\u8b8a\u6578"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u5f0f\u5ba3\u544a\uff08function declaration\uff09"),"\u88ab\u63d0\u5347\u5230\u4f5c\u7528\u57df\u9802\u7aef\u7684\u884c\u70ba\u3002"),(0,r.kt)("p",null,"\u4e0d\u8ad6\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u9084\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," \u5ba3\u544a\u8b8a\u6578\uff0c\u90fd\u6703\u6709\u63d0\u5347\u7684\u884c\u70ba\u3002\u7136\u800c\u63d0\u5347\u4e00\u8a5e\u53ef\u80fd\u6703\u8b93\u4eba\u8aa4\u4ee5\u70ba\u7a0b\u5f0f\u78bc\u79fb\u52d5\u4e86\uff0c\u5be6\u969b\u4e0a\u7a0b\u5f0f\u78bc\u4e26\u4e0d\u662f\u771f\u7684\u88ab\u79fb\u52d5\uff0c\u800c\u662f\u8207 JavaScript \u5f15\u64ce\u7de8\u8b6f\u7684\u904e\u7a0b\u6709\u95dc\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5be6\u969b\u4e0a\u7684\u7a0b\u5f0f\u78bc\nconsole.log(a);\nvar a = 1;\n\n// JavaScript \u7de8\u8b6f\u7684\u7a0b\u5f0f\u78bc\nvar a;\nconsole.log(a);\na = 1;\n")),(0,r.kt)("h3",{id:"javascript-\u7de8\u8b6f\u904e\u7a0b"},"JavaScript \u7de8\u8b6f\u904e\u7a0b"),(0,r.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u7de8\u8b6f\u904e\u7a0b\u6709\u5169\u500b\u968e\u6bb5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5275\u9020\uff08creation\uff09"),"\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u9010\u884c\u57f7\u884c\u7a0b\u5f0f\u524d"),"\uff0cJavaScript \u5f15\u64ce\u6703\u5148\u5efa\u7acb\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u7d66",(0,r.kt)("strong",{parentName:"li"},"\u8b8a\u6578"),"\u548c",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u5f0f\u5ba3\u544a\uff0c"),"\u8b8a\u6578\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u800c\u5efa\u7acb\u51fd\u5f0f\u9810\u8a2d\u503c\u70ba\u51fd\u5f0f\u5ba3\u544a\u672c\u8eab\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884c\uff08execution\uff09"),"\uff1a",(0,r.kt)("strong",{parentName:"li"},"\u9010\u884c\u57f7\u884c\u7a0b\u5f0f"),"\uff0c\u6839\u64da\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\u9032\u884c\u7d66\u503c\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u65b9\u7a0b\u5f0f\u78bc\u70ba\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(a); // undefined\nvar a = 1;\n\nlogName(); // jordan\nfunction logName() {\n  console.log('jordan');\n}\n")),(0,r.kt)("p",null,"JavaScript \u7de8\u8b6f\u7684\u904e\u7a0b\u70ba\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5275\u9020\u968e\u6bb5\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"\uff0c\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u4e00\u500b\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName"),"\uff0c\u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u51fd\u5f0f\u5ba3\u544a\u672c\u8eab\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u57f7\u884c\u968e\u6bb5\uff1a"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"console.log(a)")," \u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u56e0\u7232 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"var a = 1")," \u8ce6\u4e88\u8b8a\u6578 ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u521d\u59cb\u503c 1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u57f7\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"logName()"),"\u5370\u51fa jordan\uff0c\u56e0\u7232 ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u9810\u8a2d\u503c\u70ba ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u672c\u8eab\u3002")),(0,r.kt)("h3",{id:"\u66ab\u6642\u6027\u6b7b\u5340temporal-dead-zone"},"\u66ab\u6642\u6027\u6b7b\u5340\uff08Temporal Dead Zone\uff09"),(0,r.kt)("p",null,"\u4e0d\u8ad6\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u9084\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"const"),"\uff0c \u5ba3\u544a\u8b8a\u6578\u90fd\u6703\u6709\u63d0\u5347\u7684\u884c\u70ba\uff0c\u4f46\u662f\u70ba\u4ec0\u9ebc\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u6703\u5831\u932f\u5462 \ud83e\udd14"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log(a); // ReferenceError: Cannot access 'a' before initialization\nlet a = 1;\n")),(0,r.kt)("p",null,"\u9019\u662f\u7531\u65bc",(0,r.kt)("strong",{parentName:"p"},"\u66ab\u6642\u6027\u6b7b\u5340"),"\u7684\u95dc\u4fc2\u3002"),(0,r.kt)("p",null,"\u66ab\u6642\u6027\u6b7b\u5340\uff08Temporal Dead Zone\uff0c\u7c21\u7a31 TDZ\uff09\u662f\u5728\u5ba3\u544a\u8b8a\u6578\u548c\u521d\u59cb\u5316\u8a72\u8b8a\u6578\u4e4b\u9593\u7684\u5340\u57df\uff0c\u8a72\u5340\u57df\u4e2d\u4e0d\u80fd\u4f7f\u7528\u8a72\u8b8a\u6578\uff0c\u5426\u5247\u6703\u62cb\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"ReferenceError")," \u3002"),(0,r.kt)("p",null,"\u66ab\u6642\u6027\u6b7b\u5340\u80fd\u5920\u907f\u514d\u8b8a\u6578\u88ab\u5ba3\u544a\u524d\u610f\u5916\u5730\u88ab\u4f7f\u7528\uff0c\u5f9e\u800c\u6e1b\u5c11\u4ee3\u78bc\u932f\u8aa4\uff0c\u589e\u52a0\u7a0b\u5f0f\u78bc\u7684\u53ef\u9760\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"console.log('Jordan');\nconsole.log('John');\nconsole.log(a);\n// \u4ee5\u4e0a\u70ba\u8b8a\u6578 a \u7684\u66ab\u6642\u6027\u6b7b\u5340\uff0c\u8a72\u5340\u57df a \u4e0d\u80fd\u5920\u88ab\u4f7f\u7528\nconst a = 1; // \u76f4\u5230 a \u88ab\u521d\u59cb\u5316\uff0ca \u624d\u80fd\u88ab\u4f7f\u7528\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"var")," \u7684 TDZ \u5728\u57f7\u884c\u968e\u6bb5\u4e00\u958b\u59cb\u5c31\u7d50\u675f\u4e86\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," \u7684 TDZ \u5728\u8b8a\u6578\u521d\u59cb\u5316\u6642\u7d50\u675f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\u5c07\u4ee5\u4e0a\u7684\u7a0b\u5f0f\u78bc\u6539\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," \u5ba3\u544a\uff0c\u4e26\u4e0d\u6703\u62cb\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"ReferenceError"),"\u3002")),(0,r.kt)("h3",{id:"undefined-vs-not-defined"},(0,r.kt)("inlineCode",{parentName:"h3"},"undefined")," vs. not defined"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff1a\u8b8a\u6578\u5728\u5ba3\u544a\u6642\u6c92\u6709\u8ce6\u4e88\u503c\uff0c\u5247\u5b83\u6703\u81ea\u52d5\u88ab\u8ce6\u4e88\u4e00\u500b\u7279\u6b8a\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u4ee3\u8868\u8a72\u8b8a\u6578\u5c1a\u672a\u6709\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"not defined\uff1a\u5728\u7576\u524d\u4f5c\u7528\u57df\u6216\u4efb\u4f55\u7236\u4f5c\u7528\u57df\u4e2d\u90fd\u6c92\u6709\u5ba3\u544a\u904e\u8a72\u8b8a\u6578\uff0c\u5247\u5b83\u6703\u88ab\u8996\u70ba\u672a\u5b9a\u7fa9\uff0c\u9019\u5c07\u5c0e\u81f4\u7576\u5617\u8a66\u8a2a\u554f\u6642\u51fa\u73fe ",(0,r.kt)("inlineCode",{parentName:"li"},"ReferenceError")," \u932f\u8aa4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"var a;\n\nconsole.log(a); // undefined\nconsole.log(b); // ReferenceError: a is not defined\n")),(0,r.kt)("h3",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"let a = 1;\n{\n  console.log(a);\n  let a = 2;\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Answer\uff1a")),(0,r.kt)("p",{parentName:"li"},"\u7531\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u70ba block scope\uff0c\u5728\u5275\u9020\u968e\u6bb5\u6703\u5efa\u7acb\u4e00\u500b\u5168\u57df\u8b8a\u6578 ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u4e5f\u6703\u5efa\u7acb\u4e00\u500b block ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u5728\u57f7\u884c\u968e\u6bb5\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log(a)")," \u6642\uff0c\u7531\u65bc\u66ab\u6642\u6027\u6b7b\u5340\u7684\u95dc\u4fc2\uff0cblock ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," \u5c1a\u672a\u88ab\u7d66\u4e88\u521d\u59cb\u503c\uff0c\u56e0\u6b64\u6703\u62cb\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"Reference Error")," \u7684\u932f\u8aa4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7d50\u679c\u5224\u8b80")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"var logName = function () {\n  console.log('jordan');\n};\n\nfunction logName() {\n  console.log('john');\n}\n\nlogName();\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Answer\uff1a")),(0,r.kt)("p",{parentName:"li"},"\u5275\u9020\u968e\u6bb5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u7576\u8b8a\u6578\u548c\u51fd\u6578\u5ba3\u544a\u4f7f\u7528\u76f8\u540c\u7684\u540d\u7a31\u6642\uff0c\u51fd\u6578\u5ba3\u544a\u6703\u512a\u5148\u65bc\u8b8a\u6578\u5ba3\u544a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u51fd\u6578 ",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u9810\u8a2d\u503c\u70ba\u51fd\u5f0f\u5ba3\u544a",(0,r.kt)("inlineCode",{parentName:"li"},"logName")," \u672c\u8eab\u3002")),(0,r.kt)("p",{parentName:"li"},"\u57f7\u884c\u968e\u6bb5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u51fd\u6578 logName \u88ab\u91cd\u65b0\u8ce6\u503c\u70ba",(0,r.kt)("inlineCode",{parentName:"p"},"function () { console.log('jordan'); }"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u57f7\u884c logName()\uff0c\u4e26\u5370\u51fa'jordan'\u3002"))))),(0,r.kt)("p",null,"\u53c3\u8003\u4f86\u6e90\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pjchender.blogspot.com/2015/12/javascript-hoisting.html"},"https://pjchender.blogspot.com/2015/12/javascript-hoisting.html")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting"},"https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting"))))}s.isMDXComponent=!0}}]);