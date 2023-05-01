"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Event Propagation",l={unversionedId:"DOM/event-propagation/index",id:"DOM/event-propagation/index",title:"Event Propagation",description:"TL;DR",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/DOM/event-propagation/index.md",sourceDirName:"DOM/event-propagation",slug:"/DOM/event-propagation/",permalink:"/frontendwiz/en/DOM/event-propagation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DOM/event-propagation/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/frontendwiz/en/"},next:{title:"Factory Pattern",permalink:"/frontendwiz/en/Design Patterns/factory-pattern"}},s={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"What is Event Propagation",id:"what-is-event-propagation",level:3},{value:"Capturing",id:"capturing",level:3},{value:"Bubbling",id:"bubbling",level:3},{value:"<code>event.stopPropagation</code>",id:"eventstoppropagation",level:3},{value:"<code>event.preventDefault</code>",id:"eventpreventdefault",level:3},{value:"<code>event.target</code> vs. <code>event.currentTarget</code>",id:"eventtarget-vs-eventcurrenttarget",level:3},{value:"Event Delegation",id:"event-delegation",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-propagation"},"Event Propagation"),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Event propagation can be divided into three stages: ",(0,o.kt)("strong",{parentName:"li"},"capturing"),", ",(0,o.kt)("strong",{parentName:"li"},"target"),", and ",(0,o.kt)("strong",{parentName:"li"},"bubbling"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event.stopPropagation")," is used to stop the propagation of an event, while ",(0,o.kt)("inlineCode",{parentName:"li"},"event.preventDefault")," is used to prevent the browser from performing its default action for that event."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event.target")," refers to the element that triggered the event, while ",(0,o.kt)("inlineCode",{parentName:"li"},"event.currentTarget")," refers to the current element that is processing the event during propagation."),(0,o.kt)("li",{parentName:"ul"},"Event delegation is a technique where a parent element handles events for its child elements, rather than each child element having its own event handler.")),(0,o.kt)("h3",{id:"what-is-event-propagation"},"What is Event Propagation"),(0,o.kt)("p",null,"In JavaScript, event propagation refers to the way events are propagated (or passed along) through the DOM tree."),(0,o.kt)("p",null,"There are three phases of event propagation: ",(0,o.kt)("strong",{parentName:"p"},"capturing"),", ",(0,o.kt)("strong",{parentName:"p"},"target"),", and ",(0,o.kt)("strong",{parentName:"p"},"bubbling"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Capturing\uff1aThe event starts at the outermost ancestor element and moves towards the target element that triggered the event."),(0,o.kt)("li",{parentName:"ol"},"Target\uff1aThe event triggered any event listeners or handlers attached directly to the target element."),(0,o.kt)("li",{parentName:"ol"},"Bubbling\uff1aThe event propagates back up the DOM tree from the target element to the outermost ancestor element.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"eventflow.png",src:n(8020).Z,width:"640",height:"690"})),(0,o.kt)("h3",{id:"capturing"},"Capturing"),(0,o.kt)("p",null,"By default, when using ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener"),", the event listener only listens for events in the ",(0,o.kt)("strong",{parentName:"p"},"target")," and ",(0,o.kt)("strong",{parentName:"p"},"bubbling")," phases."),(0,o.kt)("p",null,"If you want to listen for events in the capturing phase, you need to pass a third parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEventListener")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button>button</button>\n</body>\n\n<script>\n  const body = document.querySelector('body');\n  const button = document.querySelector('button');\n\n  body.addEventListener(\n    'click',\n    function (e) {\n      console.log('body');\n    },\n    true,\n  );\n\n  button.addEventListener(\n    'click',\n    function (e) {\n      console.log('button');\n    },\n    true,\n  );\n\n  // It will listen for the capturing event, as the third parameter of the eventListener is true\n  // When the button is clicked, 'body' and 'button' will be logged in order\n<\/script>\n")),(0,o.kt)("h3",{id:"bubbling"},"Bubbling"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<body onclick=\"console.log('body')\">\n  <div onclick=\"console.log('div')\">\n    <button onclick=\"console.log('button')\">button</button>\n  </div>\n</body>\n\n\x3c!-- When the button is clicked, 'button', 'div' and 'body' will be logged in order --\x3e\n\x3c!-- The reason why 'div' and 'body' are logged is because of event bubbling --\x3e\n")),(0,o.kt)("h3",{id:"eventstoppropagation"},(0,o.kt)("inlineCode",{parentName:"h3"},"event.stopPropagation")),(0,o.kt)("p",null,"In practice, we may sometimes want to prevent event propagation, such that only the event associated with the target element is triggered, without triggering any other events associated with other elements."),(0,o.kt)("p",null,"To achieve this, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"event.stopPropagation()")," to cancel the propagation of the event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button>button</button>\n</body>\n\n<script>\n  const body = document.querySelector('body');\n  const button = document.querySelector('button');\n\n  body.addEventListener('click', function (e) {\n    console.log('body');\n  });\n\n  button.addEventListener('click', function (e) {\n    e.stopPropagation();\n    console.log('button');\n  });\n\n  // Due to e.stopPropagation, when the button is clicked, the event will not continue to bubble\n  // As a result, only 'button' will be logged\n<\/script>\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If event propagation is cancelled during the capturing phase, subsequent target and bubbling phases will not occur.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <button>button</button>\n</body>\n\n<script>\n  const body = document.querySelector('body');\n  const button = document.querySelector('button');\n\n  body.addEventListener(\n    'click',\n    function (e) {\n      e.stopPropagation();\n      console.log('capturing body');\n    },\n    true,\n  );\n\n  button.addEventListener(\n    'click',\n    function (e) {\n      console.log('capturing button');\n    },\n    true,\n  );\n\n  body.addEventListener('click', function (e) {\n    console.log('body');\n  });\n\n  button.addEventListener('click', function (e) {\n    console.log('button');\n  });\n\n  // As event propagation is cancelled during the capturing phase\n  // Only 'capturing body' will be logged\n<\/script>\n")),(0,o.kt)("h3",{id:"eventpreventdefault"},(0,o.kt)("inlineCode",{parentName:"h3"},"event.preventDefault")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"event.preventDefault()")," is used to prevent the default browser behavior associated with an event, such as following a link or submitting a form.\nIt does not affect the event propagation."),(0,o.kt)("p",null,"As shown in the following code, when a user clicks on an anchor tag ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>"),", the default behavior of the browser is to navigate to a different page."),(0,o.kt)("p",null,"However, this default behavior can be prevented using ",(0,o.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),", allowing developers to execute the desired behavior instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const link = document.querySelector('a');\n\nlink.addEventListener('click', function (e) {\n  e.preventDefault(); // prevent the default behavior\n  console.log('clicked'); // execute the desired behavior\n});\n")),(0,o.kt)("h3",{id:"eventtarget-vs-eventcurrenttarget"},(0,o.kt)("inlineCode",{parentName:"h3"},"event.target")," vs. ",(0,o.kt)("inlineCode",{parentName:"h3"},"event.currentTarget")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event.target"),"\uff1aThe element that triggered the event. This element will not change during the entire event bubbling process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event.currentTarget"),"\uff1aThe element that the event listener is attached to. This element can change as the event bubbles up or down the DOM tree, but it will always be the same as ",(0,o.kt)("inlineCode",{parentName:"li"},"this")," inside the event listener function.")),(0,o.kt)("h3",{id:"event-delegation"},"Event Delegation"),(0,o.kt)("p",null,"Event delegation, which is based on event propagation, is a technique used to optimize event handling by reducing the number of event listeners needed."),(0,o.kt)("p",null,"Rather than attaching an event listener to every individual element, a single event listener is attached to a parent element, and events are handled as they propagate up or down the DOM tree."),(0,o.kt)("p",null,"This can improve performance and make code more efficient and maintainable, especially in cases where there are many elements with the same event handling requirements."),(0,o.kt)("p",null,"\ud83d\udca9 Attaching an event listener to every individual element"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ol id="list">\n  <li data-num="1" onClick="console.log(this.dataset.num)">1</li>\n  <li data-num="2" onClick="console.log(this.dataset.num)">2</li>\n  <li data-num="3" onClick="console.log(this.dataset.num)">3</li>\n  <li data-num="4" onClick="console.log(this.dataset.num)">4</li>\n</ol>\n')),(0,o.kt)("p",null,"\u2705 A single event listener is attached to a parent element"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ol id="list">\n  <li data-num="1">1</li>\n  <li data-num="2">2</li>\n  <li data-num="3">3</li>\n  <li data-num="4">4</li>\n</ol>\n\n<script>\n  const list = document.getElementById(\'list\');\n\n  list.addEventListener(\'click\', (e) => {\n    const li = e.target.closest(\'li\');\n\n    if (!li) return;\n\n    console.log(li.dataset.num);\n  });\n<\/script>\n')),(0,o.kt)("p",null,"Reference:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/"},"https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://shubo.io/event-bubbling-event-capturing-event-delegation/"},"https://shubo.io/event-bubbling-event-capturing-event-delegation/")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://pjchender.dev/webapis/note-event-capturing-bubbling/"},"https://pjchender.dev/webapis/note-event-capturing-bubbling/"))))}d.isMDXComponent=!0},8020:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eventflow-bffcde0414ed0e3ad3044129f5a3e990.png"}}]);