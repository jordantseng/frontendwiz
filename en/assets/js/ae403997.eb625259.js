"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,v=u["".concat(c,".").concat(s)]||u[s]||d[s]||l;return r?a.createElement(v,i(i({ref:t},m),{},{components:r})):a.createElement(v,i({ref:t},m))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},i="DOM vs. Virtual DOM",o={unversionedId:"React/dom-vs-virtual-dom/index",id:"React/dom-vs-virtual-dom/index",title:"DOM vs. Virtual DOM",description:"\u4ec0\u9ebc\u662f DOM",source:"@site/docs/React/dom-vs-virtual-dom/index.md",sourceDirName:"React/dom-vs-virtual-dom",slug:"/React/dom-vs-virtual-dom/",permalink:"/doc/en/React/dom-vs-virtual-dom/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/dom-vs-virtual-dom/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"this",permalink:"/doc/en/JavaScript/this"}},c={},p=[{value:"\u4ec0\u9ebc\u662f DOM",id:"\u4ec0\u9ebc\u662f-dom",level:3},{value:"\u4ec0\u9ebc\u662f Virtual DOM",id:"\u4ec0\u9ebc\u662f-virtual-dom",level:3},{value:"Web Documents",id:"web-documents",level:4},{value:"\u4f7f\u7528 Virtual DOM \u7684 framework/library",id:"\u4f7f\u7528-virtual-dom-\u7684-frameworklibrary",level:4}],m={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dom-vs-virtual-dom"},"DOM vs. Virtual DOM"),(0,n.kt)("h3",{id:"\u4ec0\u9ebc\u662f-dom"},"\u4ec0\u9ebc\u662f DOM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DOM (Document Object Model / \u6587\u4ef6\u7269\u4ef6\u6a21\u578b)\uff1a\u63cf\u8ff0 ",(0,n.kt)("a",{parentName:"p",href:"#web-documents"},"Web Documents")," \u7684\u7269\u4ef6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DOM tree\uff1a\u4ee5\u5404\u500b\u5143\u7d20\u7684 entry point \u7522\u751f\u7684\u6a39\u72c0\u7d50\u69cb\uff0c\u7528\u4ee5\u8868\u793a page \u7684\u5167\u5bb9"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:r(3135).Z,width:"486",height:"266"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Shadow DOM"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u70ba\u700f\u89bd\u5668\u5c01\u88dd\u6a19\u8a18\u3001\u6a23\u5f0f\u8207\u7d50\u69cb\u7684\u6280\u8853"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u96b1\u85cf\u539f\u5148 DOM \u7684\u7d30\u7bc0"),(0,n.kt)("li",{parentName:"ul"},"e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},'<input type="range" />')," ",(0,n.kt)("inlineCode",{parentName:"li"},'<input type="date" />'))))),(0,n.kt)("h3",{id:"\u4ec0\u9ebc\u662f-virtual-dom"},"\u4ec0\u9ebc\u662f Virtual DOM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Virtual DOM (VDOM)")," \u70ba\u900f\u904e diff \u6f14\u7b97\u6cd5 \u4ee5\u53ca ",(0,n.kt)("inlineCode",{parentName:"li"},"ReactDOM")," \u540c\u6b65\u7576\u524d\u7684 real DOM \u7684\u6280\u8853"),(0,n.kt)("li",{parentName:"ul"},"\u9019\u500b\u7de8\u7a0b\u904e\u7a0b\u7a31\u70ba ",(0,n.kt)("inlineCode",{parentName:"li"},"reconciliation"))),(0,n.kt)("h4",{id:"web-documents"},"Web Documents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u70ba\u767c\u5e03\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"World Wide Web (a.k.a. WWW)")," \u5e95\u4e0b\u4e26\u53ef\u900f\u904e\u700f\u89bd\u5668\u9020\u8a2a\u7684\u6587\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u5e38\u4ee5 HTML \u63cf\u8ff0\uff0c\u5305\u542b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTML / CSS"),(0,n.kt)("li",{parentName:"ul"},"JavaScript"),(0,n.kt)("li",{parentName:"ul"},"XML"),(0,n.kt)("li",{parentName:"ul"},"Images"),(0,n.kt)("li",{parentName:"ul"},"Videos")))),(0,n.kt)("h4",{id:"\u4f7f\u7528-virtual-dom-\u7684-frameworklibrary"},"\u4f7f\u7528 Virtual DOM \u7684 framework/library"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/"},"React")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vuejs.org/"},"Vue"))),(0,n.kt)("p",null,"\u53c3\u8003\u4f86\u6e90:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://zh-hant.reactjs.org/docs/faq-internals.html"},"https://zh-hant.reactjs.org/docs/faq-internals.html")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"},"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document"},"https://developer.mozilla.org/en-US/docs/Web/API/Document"))))}d.isMDXComponent=!0},3135:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/gif;base64,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"}}]);