(()=>{"use strict";var e,t,r,o,a,n={},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=f,e=[],i.O=(t,r,o,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var f=!0,u=0;u<r.length;u++)(!1&a||n>=a)&&Object.keys(i.O).every((e=>i.O[e](r[u])))?r.splice(u--,1):(f=!1,a<n&&(n=a));if(f){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(a,n),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",74:"1ff649a8",339:"16863386",405:"3ecb74a2",421:"23374ca6",470:"3a448f36",514:"1be78505",630:"ae403997",754:"fab7b75f",918:"17896441",920:"1a4e3797",935:"50ef2912"}[e]||e)+"."+{53:"4017db27",74:"f57f3917",339:"a5480879",405:"959001d0",421:"944ff8ed",470:"d5c095b6",514:"2b5752c9",630:"adddb249",754:"9e668a24",780:"6036d314",894:"d055b699",918:"85c283b4",920:"2f5f3820",935:"8ad47d8c",945:"e9fa09c1",972:"b40c26f5"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="doc:",i.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var f,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){f=l;break}}f||(u=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var s=(t,r)=>{f.onerror=f.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),u&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/frontendwiz/en/",i.gca=function(e){return e={16863386:"339",17896441:"918","935f2afb":"53","1ff649a8":"74","3ecb74a2":"405","23374ca6":"421","3a448f36":"470","1be78505":"514",ae403997:"630",fab7b75f:"754","1a4e3797":"920","50ef2912":"935"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=i.p+i.u(t),f=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],f=r[1],u=r[2],c=0;if(n.some((t=>0!==e[t]))){for(o in f)i.o(f,o)&&(i.m[o]=f[o]);if(u)var d=u(i)}for(t&&t(r);c<n.length;c++)a=n[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},r=self.webpackChunkdoc=self.webpackChunkdoc||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();