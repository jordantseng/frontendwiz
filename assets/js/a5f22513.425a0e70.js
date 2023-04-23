"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(k,p(p({ref:t},s),{},{components:n})):o.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},p="\u539f\u578b",i={unversionedId:"JavaScript/prototype",id:"JavaScript/prototype",title:"\u539f\u578b",description:"TL;DR",source:"@site/docs/JavaScript/prototype.md",sourceDirName:"JavaScript",slug:"/JavaScript/prototype",permalink:"/frontendwiz/JavaScript/prototype",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/prototype.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/frontendwiz/JavaScript/promise"},next:{title:"this",permalink:"/frontendwiz/JavaScript/this"}},l={},c=[{value:"TL;DR",id:"tldr",level:3},{value:"\u4ec0\u9ebc\u662f\u539f\u578b\uff08prototype\uff09",id:"\u4ec0\u9ebc\u662f\u539f\u578bprototype",level:3},{value:"\u4ec0\u9ebc\u662f\u539f\u578b\u93c8\uff08prototype chain\uff09",id:"\u4ec0\u9ebc\u662f\u539f\u578b\u93c8prototype-chain",level:3},{value:"\u5982\u4f55\u53d6\u5f97\u539f\u578b",id:"\u5982\u4f55\u53d6\u5f97\u539f\u578b",level:3},{value:"\u5efa\u69cb\u51fd\u5f0f\uff08constructor function\uff09",id:"\u5efa\u69cb\u51fd\u5f0fconstructor-function",level:3},{value:"<code>new</code> \u95dc\u9375\u5b57",id:"new-\u95dc\u9375\u5b57",level:3},{value:"<code>__proto__</code> \u548c <code>prototype</code> \u7684\u5dee\u5225",id:"__proto__-\u548c-prototype-\u7684\u5dee\u5225",level:3},{value:"\u5efa\u69cb\u51fd\u5f0f <code>prototype</code> \u61c9\u7528",id:"\u5efa\u69cb\u51fd\u5f0f-prototype-\u61c9\u7528",level:3}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u539f\u578b"},"\u539f\u578b"),(0,r.kt)("h3",{id:"tldr"},"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u628a\u539f\u578b\u60f3\u50cf\u6210\u7236\u6bcd\uff0c\u7269\u4ef6\u70ba\u5c0f\u5b69\uff0c\u5c0f\u5b69\u6703\u7e7c\u627f\u4f86\u81ea\u7236\u6bcd\u7684\u57fa\u56e0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"li"},"__proto__"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Object.getPrototypeOf()")," \u53d6\u5f97\u7269\u4ef6\u7684\u539f\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u69cb\u51fd\u5f0f\u5c31\u662f\u666e\u901a\u7684\u51fd\u5f0f\uff0c\u4f46\u5982\u679c\u642d\u914d ",(0,r.kt)("inlineCode",{parentName:"li"},"new")," \u95dc\u9375\u5b57\u4f7f\u7528\u6642\uff0c\u5247\u7528\u65bc\u5efa\u7acb\u7269\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__prototype__")," \u662f\u5c6c\u65bc\u7269\u4ef6\u7684\u5c6c\u6027\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"prototype")," \u662f\u5c6c\u65bc\u5efa\u69cb\u51fd\u5f0f\u7684\u5c6c\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object.__proto__ === constructorFn.prototype"),"\u3002")),(0,r.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u539f\u578bprototype"},"\u4ec0\u9ebc\u662f\u539f\u578b\uff08prototype\uff09"),(0,r.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u539f\u578b\u662f\u4e00\u500b\u7269\u4ef6\uff0c\u7528\u65bc\u5275\u5efa\u5176\u4ed6\u7269\u4ef6\u7684\u85cd\u5716\uff0c\u6bcf\u4e00\u500b\u7269\u4ef6\u90fd\u6709\u4e00\u500b\u539f\u578b\uff0c\u7269\u4ef6\u53ef\u4ee5\u8a2a\u554f\u539f\u578b\u4e0a\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"\u4ec0\u9ebc\u662f\u539f\u578b\u93c8prototype-chain"},"\u4ec0\u9ebc\u662f\u539f\u578b\u93c8\uff08prototype chain\uff09"),(0,r.kt)("p",null,"\u7576\u8a2a\u554f\u7269\u4ef6\u7684\u5c6c\u6027\u6216\u65b9\u6cd5\u6642\uff0cJavaScript \u6703\u5148\u5c0b\u627e\u5b83\u662f\u5426\u5b58\u5728\u65bc\u7269\u4ef6\u672c\u8eab\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5b83\u6703\u5f80\u8a72\u7269\u4ef6\u7684\u539f\u578b\u4e0a\u5c0b\u627e\uff0c\u5982\u679c\u4ecd\u7136\u627e\u4e0d\u5230\uff0c\u518d\u5f80\u539f\u578b\u7684\u539f\u578b\u4e0a\u5c0b\u627e\uff0c\u4ee5\u6b64\u985e\u63a8\uff0c\u76f4\u5230\u627e\u5230\u6216\u539f\u578b\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u70ba\u6b62\uff0c\u9019\u689d\u5c0b\u627e\u7684\u8def\u5f91\u5c31\u88ab\u7a31\u70ba",(0,r.kt)("strong",{parentName:"p"},"\u539f\u578b\u93c8")," \u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u53d6\u5f97\u539f\u578b"},"\u5982\u4f55\u53d6\u5f97\u539f\u578b"),(0,r.kt)("p",null,"\u6bcf\u500b\u7269\u4ef6\u90fd\u6709\u4e00\u500b\u96b1\u85cf\u7684\u5c6c\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"[[Prototype]]")," \uff0c\u5b83\u6307\u5411\u8a72\u7269\u4ef6\u7684\u539f\u578b\uff0c\u4f46\u7531\u65bc \xa0",(0,r.kt)("inlineCode",{parentName:"p"},"[[Prototype]]"),"\xa0 \u7121\u6cd5\u76f4\u63a5\u88ab\u8a2a\u554f\uff0c\u56e0\u6b64\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf()")," \u8a2a\u554f\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5be6\u52d9\u4e0a\uff0c\u6211\u5011\u4e0d\u6703\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__")," \u53bb\u53d6\u5f97\u539f\u578b\uff0c\u800c\u662f\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf()"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const person = {\n  isHuman: true,\n};\n\nconst jordan = Object.create(person); // \u5efa\u7acb\u4e00\u500b\u539f\u578b\u70ba person \u7684\u7269\u4ef6\n\nconsole.log(jordan.__proto__); // { isHuman: true }\n\nconsole.log(jordan.__proto__ === Object.getPrototypeOf(jordan)); // true\n")),(0,r.kt)("h3",{id:"\u5efa\u69cb\u51fd\u5f0fconstructor-function"},"\u5efa\u69cb\u51fd\u5f0f\uff08constructor function\uff09"),(0,r.kt)("p",null,"\u5176\u5be6\u5efa\u69cb\u51fd\u5f0f\u5c31\u662f\u666e\u901a\u7684\u51fd\u5f0f\uff0c\u4f46\u5982\u679c\u642d\u914d ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u4f7f\u7528\u6642\uff0c\u5247\u7528\u65bc\u5efa\u7acb\u7269\u4ef6\u3002\u5728 ES6 \u4e4b\u524d\u7684 JavaScript \u6c92\u6709 \xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Class"),"\xa0 \u8a9e\u6cd5\u7cd6\uff0c\u90fd\u662f\u900f\u904e\u5efa\u69cb\u51fd\u5f0f\u5efa\u7acb\u7269\u4ef6\uff0c\u7136\u5f8c\u5728\u5efa\u69cb\u51fd\u5f0f\u7684 \xa0",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\xa0 \u4e0a\u65b0\u589e\u5c6c\u6027\u6216\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Person(name) {\n  this.isHuman = true;\n  this.name = name;\n}\n\n// \u5b9a\u7fa9\u5efa\u69cb\u51fd\u5f0f\u4e0a\u7684 prototype \u5c6c\u6027\uff0c\u8b93\u900f\u904e\u5efa\u69cb\u51fd\u5f0f\u6240\u5efa\u7acb\u7684\u7269\u4ef6\u90fd\u80fd\u7e7c\u627f\u4f7f\u7528\nPerson.prototype.greet = function () {\n  console.log('I am ' + this.name);\n};\n\nconst jordan = new Person('jordan');\n\nconsole.log(jordan); // Person { isHuman: true, name: 'jordan' }\nconsole.log(jordan.__proto__); // { greet: \u0192, constructor: \u0192 }\nconsole.log(jordan.greet()); // I am jordan\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u5efa\u69cb\u51fd\u5f0f\u5efa\u7acb\u7269\u4ef6\u6642\uff0c\u4e26\u4e0d\u6703\u5b9a\u7fa9\u56de\u50b3\u7684\u503c\uff0c\u5982\u679c\u8b93\u5efa\u69cb\u51fd\u5f0f\u56de\u50b3\u81ea\u5b9a\u7fa9\u7684\u7269\u4ef6\u7684\u8a71\uff0c\u5efa\u69cb\u51fd\u5f0f\u5c07\u6703\u56de\u50b3\u81ea\u5b9a\u7fa9\u7684\u7269\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Person(name) {\n  this.isHuman = true;\n  this.name = name;\n  // \u81ea\u5df1\u5b9a\u7fa9\u56de\u50b3\u7684\u7269\u4ef6\n  return { name: 'John' };\n}\n\nconst jordan = new Person('jordan');\nconsole.log(jordan); // { name: 'John' }\n\n// \u53ef\u4ee5\u767c\u73fe jordan \u4e0d\u662f\u6211\u5011\u900f\u904e\u5efa\u69cb\u51fd\u5f0f\u5efa\u7acb\u7684\u7269\u4ef6\uff0c\u800c\u662f\u56de\u50b3\u6211\u5011\u81ea\u5b9a\u7fa9\u7684\u7269\n")),(0,r.kt)("h3",{id:"new-\u95dc\u9375\u5b57"},(0,r.kt)("inlineCode",{parentName:"h3"},"new")," \u95dc\u9375\u5b57"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u7684\u6848\u4f8b\u5728\u547c\u53eb\u5efa\u69cb\u51fd\u5f0f\u524d\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u95dc\u9375\u5b57\uff0c\u90a3 ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u5230\u5e95\u505a\u4e86\u4ec0\u9ebc\u5462 \ud83e\udd14"),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"},"MDN")," \u7684\u5b9a\u7fa9\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"new")," \u5be6\u969b\u4e0a\u57f7\u884c\u4e86\u56db\u500b\u6b65\u9a5f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u5efa\u7acb\u4e00\u500b\u7a7a\u7684\u7269\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u7a7a\u7269\u4ef6\u7684\u539f\u578b ",(0,r.kt)("inlineCode",{parentName:"li"},"__proto__")," \u6307\u5411\u5efa\u69cb\u51fd\u5f0f\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"prototype")," \u5c6c\u6027\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5efa\u69cb\u51fd\u5f0f\u88ab\u57f7\u884c\uff0c\u51fd\u5f0f\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u5c07\u6703\u88ab\u6307\u5411\u5230\u525b\u525b\u5efa\u7acb\u7684\u7a7a\u7269\u4ef6\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u5efa\u69cb\u51fd\u5f0f\u6c92\u6709\u56de\u50b3\u7269\u4ef6\uff0c\u5247\u56de\u50b3\u4e00\u958b\u59cb\u5efa\u7acb\u7684\u7a7a\u7269\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function myNew(constructorFn, ...args) {\n  // 1. \u5efa\u7acb\u4e00\u500b\u7a7a\u7684\u7269\u4ef6\n  // 2. \u5c07\u7a7a\u7269\u4ef6\u7684\u539f\u578b\u6307\u5411\u5efa\u69cb\u51fd\u5f0f\u7684 prototype\n  const obj = Object.create(constructorFn.prototype);\n\n  // 3. \u547c\u53eb\u5efa\u69cb\u51fd\u5f0f\u4e26\u5c07 this \u7d81\u5b9a\u70ba\u525b\u525b\u6240\u5efa\u7acb\u7684\u7269\u4ef6\n  const result = constructorFn.apply(obj, args);\n\n  // 4. \u6aa2\u67e5\u5efa\u69cb\u51fd\u5f0f\u662f\u5426\u56de\u50b3\u7269\u4ef6\uff0c\u5982\u679c\u662f\uff0c\u56de\u50b3\u8a72\u7269\u4ef6\uff1b\u5982\u679c\u4e0d\u662f\uff0c\u5247\u56de\u50b3\u4e00\u958b\u59cb\u5efa\u7acb\u7684\u7269\u4ef6\n  return typeof result === 'object' ? result : obj;\n}\n\nfunction Person(name) {\n  this.name = name;\n}\n\nconst jordan = myNew(Person, 'jordan'); // Person { name: 'jordan' }\n")),(0,r.kt)("h3",{id:"__proto__-\u548c-prototype-\u7684\u5dee\u5225"},(0,r.kt)("inlineCode",{parentName:"h3"},"__proto__")," \u548c ",(0,r.kt)("inlineCode",{parentName:"h3"},"prototype")," \u7684\u5dee\u5225"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"__proto__")," \uff1a\u6bcf\u500b",(0,r.kt)("strong",{parentName:"p"},"\u7269\u4ef6"),"\u7684\u4e00\u500b\u96b1\u85cf\u5c6c\u6027\uff0c\u6bcf\u500b\u7269\u4ef6\u53ef\u4ee5\u7531 \xa0",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__"),"\xa0 \u8a2a\u554f\u5230\u5b83\u7684\u539f\u578b\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prototype")," \uff1a\u900f\u904e",(0,r.kt)("strong",{parentName:"p"},"\u5efa\u69cb\u51fd\u5f0f + ",(0,r.kt)("inlineCode",{parentName:"strong"},"new"))," \u5efa\u7acb\u7684\u7269\u4ef6\u90fd\u6703\u7e7c\u627f\u4f86\u81ea",(0,r.kt)("strong",{parentName:"p"},"\u5efa\u69cb\u51fd\u5f0f"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype")," \u7684\u5c6c\u6027\u548c\u65b9\u6cd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u5efa\u69cb\u51fd\u5f0f.prototype === \u7269\u4ef6.__proto__")," \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Person(name) {\n  this.name = name;\n}\n\nconst jordan = new Person('jordan');\n\nconsole.log(jordan.__proto__ === Person.prototype); // true\n")),(0,r.kt)("h3",{id:"\u5efa\u69cb\u51fd\u5f0f-prototype-\u61c9\u7528"},"\u5efa\u69cb\u51fd\u5f0f ",(0,r.kt)("inlineCode",{parentName:"h3"},"prototype")," \u61c9\u7528"),(0,r.kt)("p",null,"\u6211\u5011\u73fe\u5728\u77e5\u9053\u5efa\u69cb\u51fd\u5f0f\u7d93\u5e38\u7528\u4f86\u5efa\u7acb\u7269\u4ef6\uff0c\u4f46\u662f\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981 prototype \u9019\u500b\u5c6c\u6027\u5462\uff0c\u70ba\u4ec0\u9ebc\u4e0d\u76f4\u63a5\u628a\u5c6c\u6027\u548c\u65b9\u6cd5\u5b9a\u7fa9\u5728\u5efa\u69cb\u51fd\u5f0f\u88e1\u9762\u5c31\u597d\u5462 \ud83e\udd14"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Person(name) {\n  this.name = name;\n  // \u5c07\u65b9\u6cd5\u76f4\u63a5\u5b9a\u7fa9\u5728\u5efa\u69cb\u51fd\u5f0f\u4e2d\n  this.greet = function () {\n    console.log('I am ' + this.name);\n  };\n}\n")),(0,r.kt)("p",null,"\u8a66\u60f3\u4e00\u500b\u60c5\u6cc1\uff0c\u5982\u679c\u6211\u5011\u8981\u900f\u904e\u4e0a\u8ff0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," \u5efa\u7acb 10000 \u500b\u7269\u4ef6\uff0c\u6bcf\u4e00\u500b\u7269\u4ef6\u90fd\u6703\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"greet")," \u9019\u500b\u65b9\u6cd5\uff0c\u6d6a\u8cbb\u4e86\u8a31\u591a\u8a18\u61b6\u9ad4\u4f4d\u7f6e\uff0c\u4f46\u662f\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype")," \u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"greet")," \u65b9\u6cd5\uff0c\u5247\u6240\u6709\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," \u5efa\u7acb\u7684\u7269\u4ef6\u90fd\u7e7c\u627f\u9019\u4e00\u500b\u65b9\u6cd5\uff0c\u5927\u5e45\u6e1b\u5c11\u6240\u9700\u7684\u8a18\u61b6\u9ad4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Person(name) {\n  this.name = name;\n}\n\nPerson.prototype.greet = function () {\n  console.log('I am ' + this.name);\n};\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6548\u80fd\u8003\u91cf\u4e0a\uff0c\u901a\u5e38\u6703\u628a",(0,r.kt)("strong",{parentName:"p"},"\u901a\u7528"),"\u7684\u5c6c\u6027\u548c\u65b9\u6cd5\u653e\u5728\u5efa\u69cb\u51fd\u5f0f\u7684 prototype \u4e2d\u3002")),(0,r.kt)("p",null,"\u53c3\u8003\u4f86\u6e90\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/javascript-new-operator-implementation-8c0d15f2b899"},"https://medium.com/\u624b\u5beb\u7b46\u8a18/javascript-new-operator-implementation-8c0d15f2b899")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html"},"https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions"},"https://www.explainthis.io/zh-hant/interview-guides/javascript/most-common-js-prototype-questions"))))}u.isMDXComponent=!0}}]);