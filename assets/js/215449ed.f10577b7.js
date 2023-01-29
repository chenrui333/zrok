"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=r,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return t?i.createElement(u,o(o({ref:n},d),{},{components:t})):i.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const a={},o="Public/Private Sharing",l={unversionedId:"core-concepts/sharing_modes",id:"core-concepts/sharing_modes",title:"Public/Private Sharing",description:"In v0.3 new sharing modes and new types of built-in services were introduced.",source:"@site/../docs/core-concepts/sharing_modes.md",sourceDirName:"core-concepts",slug:"/core-concepts/sharing_modes",permalink:"/docs/core-concepts/sharing_modes",draft:!1,editUrl:"https://github.com/openziti/zrok/tree/main/../docs/core-concepts/sharing_modes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reserved Services",permalink:"/docs/core-concepts/reserved_services"},next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},s={},p=[{value:"Share Modes",id:"share-modes",level:2},{value:"Public Sharing",id:"public-sharing",level:3},{value:"Private Sharing",id:"private-sharing",level:3},{value:"Backend Modes",id:"backend-modes",level:2},{value:"Web Mode",id:"web-mode",level:3},{value:"DAV Mode",id:"dav-mode",level:3},{value:"Proxy Mode",id:"proxy-mode",level:3},{value:"Entities (SQL)",id:"entities-sql",level:2}],d={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publicprivate-sharing"},"Public/Private Sharing"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," new sharing modes and new types of built-in services were introduced."),(0,r.kt)("h2",{id:"share-modes"},"Share Modes"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: In ",(0,r.kt)("inlineCode",{parentName:"em"},"v0.3"),", the ",(0,r.kt)("inlineCode",{parentName:"em"},"tunnel")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"untunnel")," concepts get renamed to ",(0,r.kt)("inlineCode",{parentName:"em"},"share")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"unshare"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: We're going to continue using ",(0,r.kt)("inlineCode",{parentName:"em"},"frontend")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"backend")," as concepts, even though those words will be changing in the ",(0,r.kt)("inlineCode",{parentName:"em"},"zrok")," CLI. A ",(0,r.kt)("inlineCode",{parentName:"em"},"frontend"),' will continue to describe an "ingress" into the ',(0,r.kt)("inlineCode",{parentName:"em"},"zrok"),'service, and is the tool that is used by the user "consuming" or ',(0,r.kt)("inlineCode",{parentName:"em"},"access"),"-ing the the ",(0,r.kt)("inlineCode",{parentName:"em"},"zrok")," service. A ",(0,r.kt)("inlineCode",{parentName:"em"},"backend"),' will continue to describe the "binding" created by a user that wants to ',(0,r.kt)("inlineCode",{parentName:"em"},"share")," a resource.")),(0,r.kt)("h3",{id:"public-sharing"},"Public Sharing"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),' only offered a "public" sharing mode. The public sharing mode will allow any configured ',(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances to send traffic to any ",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),". The policy and permission model was very simple and flat. A ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.2")," deployment considers any available ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instance to be allowed to send traffic to configured services. The access for ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances is controlled by identity provisioning within the underlying OpenZiti network."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),' will offer both a "public" and a "private" sharing mode. When ',(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," configures the policies for a service, a publicly-shared service will have policies created that allow whichever selected public ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances to access the shared ",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," deployment will have a collection of multi-tenant, high-capacity ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances available to be selected from. The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," CLI will default to selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," selection approach also gives us a clean implementation for picking public ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances based on geography (either network or physical). The production ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok.io")," service could easily offer multiple different fleets of ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances, and this mechanism will allow ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," users to choose where they want to offer access to their service."),(0,r.kt)("h3",{id:"private-sharing"},"Private Sharing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v0.3"),' introduced "private" sharing mode. When provisioning a service for private sharing, ',(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," will not create any policies for the service, until a request for a ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," binding is created for the service (through the ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok access")," command)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," API will support creating ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances for both identified users (where the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," user has a provisioned ",(0,r.kt)("inlineCode",{parentName:"p"},"environment"),"), as well as ephemeral users (the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),' controller will create a single-use "ephemeral environment" for these ',(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances)."),(0,r.kt)("h2",{id:"backend-modes"},"Backend Modes"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.2"),", the only possible ",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),' "mode" was used for reverse proxying HTTP traffic to a local endpoint. The ',(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," client will support several different ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," modes, providing a number of built-in conveniences."),(0,r.kt)("h3",{id:"web-mode"},"Web Mode"),(0,r.kt)("p",null,"A user has a collection of files on disk. Sharing with a ",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),' mode of "web", will create a ',(0,r.kt)("inlineCode",{parentName:"p"},"backend")," that shares a file tree as if it were a local web server. This effectively allows a user to bind a web-server backend to a document root with a single CLI command."),(0,r.kt)("h3",{id:"dav-mode"},"DAV Mode"),(0,r.kt)("p",null,"A user wants to operate a read/write repository of files accessible through either conventional WebDAV clients (through ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," instances), or through the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," CLI (a convenience wrapper, embedding WebDAV capabilities)."),(0,r.kt)("p",null,'This allows users to create read/write repositories of files that can be shared with multiple users, and also allows for the creation of write-only "drop boxes" for receiving files from another user (often a tricky thing to do well and securely on the public internet).'),(0,r.kt)("h3",{id:"proxy-mode"},"Proxy Mode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," will retain the classic reverse proxy mode, as well. Will continue to allow a user to expose a local HTTP endpoint through ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),"."),(0,r.kt)("h2",{id:"entities-sql"},"Entities (SQL)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," v0.3 introduced a new ",(0,r.kt)("inlineCode",{parentName:"p"},"frontends")," table to allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," controller to track the frontend instances that are available to any account or environment."),(0,r.kt)("p",null,"The following illustration shows the possibilities available."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Frontend Selection",src:t(7126).Z,width:"747",height:"341"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"*.in.zrok.io"),' frontend is a "public" frontend, available to all ',(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," users. Most ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," installations will want to have at least one public, global frontend for all public, internet-facing ingress traffic for private backend instances. In the underlying data store, the public frontend will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," (or some other representative name), allowing users to reference that ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," using a friendly label."),(0,r.kt)("p",null,'The other two "private" frontends are configured with no ',(0,r.kt)("inlineCode",{parentName:"p"},"name")," label (the lack of a ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),' label signifies that these are "private" frontends). The ephemeral environment is allocated when a ',(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," frontend request is made without an account on behalf of a private share."))}c.isMDXComponent=!0},7126:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/zrok_frontends_v0.3-d84f72f42d54f6cda21dca1b56e4954c.png"}}]);