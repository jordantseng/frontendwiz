"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="XSS",o={unversionedId:"\u7db2\u8def\u5b89\u5168/xss",id:"\u7db2\u8def\u5b89\u5168/xss",title:"XSS",description:"TL;DR",source:"@site/docs/\u7db2\u8def\u5b89\u5168/xss.md",sourceDirName:"\u7db2\u8def\u5b89\u5168",slug:"/\u7db2\u8def\u5b89\u5168/xss",permalink:"/frontendwiz/\u7db2\u8def\u5b89\u5168/xss",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u7db2\u8def\u5b89\u5168/xss.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8cc7\u6599\u5b58\u5132",permalink:"/frontendwiz/\u700f\u89bd\u5668/browser-storage"},next:{title:"\u5be6\u4f5c\u9663\u5217\u65b9\u6cd5",permalink:"/frontendwiz/\u9762\u8a66\u624b\u5beb\u984c/array-methods"}},s={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"\u4ec0\u9ebc\u662f XSS\uff08cross-site scripting\uff09",id:"\u4ec0\u9ebc\u662f-xsscross-site-scripting",level:3},{value:"XSS \u985e\u578b",id:"xss-\u985e\u578b",level:3},{value:"\u5982\u4f55\u9632\u7bc4 XSS",id:"\u5982\u4f55\u9632\u7bc4-xss",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xss"},"XSS"),(0,a.kt)("h3",{id:"tldr"},"TL;DR"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XSS \u653b\u64ca\u662f\u6307\u5f9e Client \u7aef\u6ce8\u5165\u4e00\u4e9b\u60e1\u610f\u8173\u672c\uff0c\u901a\u5e38\u662f\u5f9e\u53ef\u4fe1\u7684\u4f86\u6e90\u767c\u51fa\uff0c\u56e0\u6b64\u80fd\u5920\u7e5e\u904e\u540c\u6e90\u653f\u7b56\uff0c\u6545\u7a31\u70ba cross-site scripting\u3002"),(0,a.kt)("li",{parentName:"ul"},"XSS \u6709\u4e09\u7a2e\u7a2e\u985e\uff1aStored XSS\u3001Reflected XSS\u3001DOM-Based XSS"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u900f\u904e\u6aa2\u67e5\u4f7f\u7528\u8005\u8f38\u5165\u7684\u5167\u5bb9\uff0c\u5c07\u8f38\u5165\u7684\u5167\u5bb9\u8f49\u70ba\u5b57\u4e32\u6216\u8005\u5c07\u95dc\u9375\u5b57 ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"onerror")," \u522a\u9664\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u900f\u904e CSP\uff0c\u53ea\u57f7\u884c\u6388\u6b0a\u4f86\u6e90\u7684\u8173\u672c\u3002")),(0,a.kt)("h3",{id:"\u4ec0\u9ebc\u662f-xsscross-site-scripting"},"\u4ec0\u9ebc\u662f XSS\uff08cross-site scripting\uff09"),(0,a.kt)("p",null,"XSS \u653b\u64ca\u662f\u6307\u5f9e Client \u7aef\u6ce8\u5165\u4e00\u4e9b\u60e1\u610f\u8173\u672c\uff08\u901a\u5e38\u70ba JavaScript\uff09\uff0c\u4f7f\u7528\u6236\u5728\u67e5\u770b\u8a72\u7db2\u9801\u6642\u53d7\u5230\u653b\u64ca\u3002\u901a\u5e38\u662f\u5f9e\u53ef\u4fe1\u7684\u4f86\u6e90\u767c\u51fa\uff0c\u56e0\u6b64\u80fd\u5920\u7e5e\u904e\u540c\u6e90\u653f\u7b56\uff0c\u6545\u7a31\u70ba cross-site scripting\uff08\u8de8\u57df\u8173\u672c\u653b\u64ca\uff09\u3002"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u67d0\u7528\u6236\u4ee5\u5408\u6cd5\u8eab\u4efd\u9032\u5230\u67d0\u500b\u7db2\u7ad9\uff0c\u7531\u65bc\u4ed6\u7684\u8eab\u4efd\u662f\u5408\u6cd5\u7684\uff0c\u7db2\u7ad9\u8a8d\u70ba\u8a72\u7528\u6236\u8f38\u5165\u7684\u6771\u897f\u662f\u53ef\u4fe1\u4efb\u7684\uff0c\u56e0\u6b64\u5c31\u7b97\u8a72\u7528\u6236\u6ce8\u5165\u60e1\u610f\u8173\u672c\uff0c\u7db2\u7ad9\u4e5f\u6703\u8a8d\u70ba\u8a72\u7a0b\u5f0f\u662f\u53ef\u4fe1\u4efb\u7684\u3002"),(0,a.kt)("p",null,"\u5bb9\u6613\u767c\u751f\u5728\u672a\u6b63\u78ba\u9a57\u8b49\u7528\u6236\u8f38\u5165\u6216\u8f38\u51fa\u7684\u7db2\u7ad9\uff0c\u7d93\u5e38\u7528\u4f86\u7aca\u53d6\u7528\u6236\u8cc7\u8a0a\uff08\u5982\u5bc6\u78bc\u6216 Cookie\uff09\u3001\u4fee\u6539\u6216\u522a\u9664\u9801\u9762\u5167\u5bb9\uff0c\u751a\u81f3\u5c07\u7528\u6236\u5c0e\u5411\u4e0d\u540c\u7684\u7db2\u7ad9\u3002"),(0,a.kt)("h3",{id:"xss-\u985e\u578b"},"XSS \u985e\u578b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Stored XSS"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u60e1\u610f\u8173\u672c\u5132\u5b58\u5728\u8cc7\u6599\u5eab\u4e2d\u5f15\u8d77\u7684\u653b\u64ca\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u653b\u64ca\u8005\u53ef\u80fd\u6703\u5728\u7db2\u7ad9\u4e0a\u7684\u8a55\u8ad6\u5340\u8f38\u5165\u4e00\u4e9b\u5305\u542b\u60e1\u610f\u8173\u672c\u7684\u8a55\u8ad6\uff0c\u7136\u5f8c\u9019\u4e9b\u8a55\u8ad6\u6703\u88ab\u5132\u5b58\u5728\u8cc7\u6599\u5eab\u4e2d\u3002\u7576\u5176\u4ed6\u7528\u6236\u67e5\u770b\u8a72\u9801\u9762\u6642\uff0c\u60e1\u610f\u8173\u672c\u5c31\u6703\u88ab\u8f09\u5165\u4e26\u5728\u7528\u6236\u7684\u700f\u89bd\u5668\u4e0a\u57f7\u884c\u3002")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Reflected XSS"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u60e1\u610f\u8173\u672c\u6ce8\u5165\u5230 URL \u5f15\u8d77\u7684\u653b\u64ca\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7576\u53d7\u5bb3\u8005\u9ede\u64ca\u542b\u6709\u60e1\u610f\u8173\u672c\u7684 URL \u4e26\u8a2a\u554f\u76f8\u61c9\u7684\u7db2\u9801\u6642\uff0c\u7db2\u7ad9\u6703\u5c07 URL \u4e2d\u7684\u8173\u672c\u53cd\u5c04\u56de\u7db2\u9801\uff0c\u4e26\u88ab\u700f\u89bd\u5668\u57f7\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// \u9019\u6bb5 php \u7a0b\u5f0f\u78bc\u6703\u5f9e GET \u8acb\u6c42\u7372\u53d6\u540d\u70ba name \u7684\u53c3\u6578\uff0c\u4e26\u5c07\u5176\u63d2\u5165\u5230 html \u4e2d\n// \u5982\u679c GET \u8acb\u6c42\u70ba https:*//jordantseng.github.io?name=<script>alert(1)<\/script>\n// <script>alert(1)<\/script> \u9019\u6bb5\u8173\u672c\u53ef\u80fd\u6703\u88ab\u53cd\u5c04\u5230\u7db2\u9801\u4e0a\u4e26\u57f7\u884c\u3002*\n\n<h3>Hi, I am <?=$_GET['name']?></h3>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DOM-Based XSS"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u904e\u5c0d\u7db2\u9801\u4e2d DOM \u5143\u7d20\u9032\u884c\u4fee\u6539\u6216\u8005\u6dfb\u52a0\u6240\u5f15\u8d77\u7684\u653b\u64ca\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8207 Stored XSS \u548c Reflected XSS \u4e0d\u540c\uff0c\u4e0d\u9808\u5c07\u60e1\u610f\u8173\u672c\u767c\u9001\u5230 Server \u7aef\uff0c\u76f4\u63a5\u5728 Client \u9032\u884c\u653b\u64ca\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"<input id=\"input\" />\n<div>Hi, I am <span id=\"name\"></span></div>\n<button id=\"button\">submit</button>\n<script>\n  const input = document.getElementById('input');\n  const name = document.getElementById('name');\n  const button = documnet.getElementById('button');\n\n  // \u6b64\u60c5\u6cc1\u662f\u4e00\u500b\u5178\u578b\u7684 DOM-Based XSS \u7684\u4f8b\u5b50\n  // \u7576\u4f7f\u7528\u8005\u5728 input \u8f38\u5165 <script>alert(1)<\/script> \u6642\uff0c\u9019\u6bb5\u60e1\u610f\u8173\u672c\u5c07\u6703\u57f7\u884c\n  // \u56e0\u6b64\u7576\u8981\u4f7f\u7528\u52d5\u614b\u7684\u5167\u5bb9\u6642\uff0c\u907f\u514d\u4f7f\u7528 innerHTML\uff0c\u4f7f\u7528 textContent/innerText\n  button.addEventListener('click', () => {\n    name.innerHTML = input.value;\n  });\n<\/script>\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u9632\u7bc4-xss"},"\u5982\u4f55\u9632\u7bc4 XSS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Stored\u3001Reflected XSS \u53ef\u4ee5\u900f\u904e Server \u7aef\u9632\u7bc4\uff0c\u6aa2\u67e5\u4efb\u4f55\u5141\u8a31\u7528\u6236\u8f38\u5165\u7684\u5167\u5bb9\uff0c\u50cf\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"<script>"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"onerror")," \u7b49\u6307\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ol"},"DOM-Based XSS \u53ef\u4ee5\u900f\u904e Client \u7aef\u9632\u7bc4\uff0c\u6aa2\u67e5\u4efb\u4f55\u53ef\u8f38\u5165\u6b04\u4f4d\uff0c\u900f\u904e\u8df3\u812b\u6a5f\u5236\u8b93\u8173\u672c\u88ab\u8f49\u63db\u6210\u5b57\u4e32\u3002"),(0,a.kt)("li",{parentName:"ol"},"XSS \u53ef\u4ee5\u900f\u904e ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"CSP")," \uff08content security policy\uff09\u9632\u7bc4\uff0c\u907f\u514d\u700f\u89bd\u5668\u8f09\u5165\u4f86\u81ea\u672a\u6388\u6b0a\u4f86\u6e90\u7684\u8173\u672c\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u5982\u679c\u8a2d\u5b9a\u53ea\u6709\u4f86\u81ea\u8207\u7db2\u7ad9\u540c\u4e00\u500b\u7db2\u57df\u7684\u8173\u672c\u53ef\u88ab\u57f7\u884c\uff0c\u90a3\u9ebc\u5176\u4ed6\u7531\u60e1\u610f\u653b\u64ca\u8005\u6ce8\u5165\u7684\u8173\u672c\uff0c\u5c31\u6703\u88ab\u8a8d\u5b9a\u6210\u4e0d\u8a72\u57f7\u884c\u7684\uff0c\u5c31\u4e0d\u6703\u88ab\u57f7\u884c\u3002")),(0,a.kt)("p",null,"\u53c3\u8003\u4f86\u6e90\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-xss"},"https://www.explainthis.io/zh-hant/interview-guides/browser/what-is-xss"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://medium.com/hannah-lin/content-security-policy-csp-%E5%B9%AB%E4%BD%A0%E7%B6%B2%E7%AB%99%E5%88%97%E7%99%BD%E5%90%8D%E5%96%AE%E5%90%A7-df38c990f63c"},"https://medium.com/hannah-lin/content-security-policy-csp-\u5e6b\u4f60\u7db2\u7ad9\u5217\u767d\u540d\u55ae\u5427-df38c990f63c"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://tech-blog.cymetrics.io/posts/jo/zerobased-secure-samesite-httponly/"},"https://tech-blog.cymetrics.io/posts/jo/zerobased-secure-samesite-httponly/")))))}m.isMDXComponent=!0}}]);