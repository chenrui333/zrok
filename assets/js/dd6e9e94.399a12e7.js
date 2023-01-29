"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Account Request Process",c={unversionedId:"getting-started/v0.2_account_requests",id:"getting-started/v0.2_account_requests",title:"Account Request Process",description:"In v0.1",source:"@site/../docs/getting-started/v0.2_account_requests.md",sourceDirName:"getting-started",slug:"/getting-started/v0.2_account_requests",permalink:"/docs/getting-started/v0.2_account_requests",draft:!1,editUrl:"https://github.com/openziti/zrok/tree/main/../docs/getting-started/v0.2_account_requests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"zrok quickstart",permalink:"/docs/getting-started/v0.2_quickstart"}},s={},l=[{value:"In v0.1",id:"in-v01",level:2},{value:"In v0.2",id:"in-v02",level:2},{value:"Invitations for Others",id:"invitations-for-others",level:3},{value:"Garbage Collection",id:"garbage-collection",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account-request-process"},"Account Request Process"),(0,o.kt)("h2",{id:"in-v01"},"In v0.1"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.1")," versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"zrok")," had an open-access ",(0,o.kt)("inlineCode",{parentName:"p"},"zrok create account")," that allows any user to create an account. Useful for closed development environments only."),(0,o.kt)("h2",{id:"in-v02"},"In v0.2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"zrok create account")," command now only takes an email address. "),(0,o.kt)("li",{parentName:"ul"},'The email address is submitted to an open-ended API endpoint, which then records an "account request", allocating a request token.'),(0,o.kt)("li",{parentName:"ul"},"An email is sent to the address offering a link with the request token, allowing the user to create the account."),(0,o.kt)("li",{parentName:"ul"},"The account request is marked complete.")),(0,o.kt)("h3",{id:"invitations-for-others"},"Invitations for Others"),(0,o.kt)("p",null,"This open ",(0,o.kt)("inlineCode",{parentName:"p"},"zrok create account")," command will allow any user to send a ",(0,o.kt)("inlineCode",{parentName:"p"},"zrok")," invitation to any user with a valid email address."),(0,o.kt)("h3",{id:"garbage-collection"},"Garbage Collection"),(0,o.kt)("p",null,"An background garbage collector in the controller scans the account requests, looking for unused requests, which are removed after a configurable amount of time."))}p.isMDXComponent=!0}}]);