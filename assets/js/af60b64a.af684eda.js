"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Nginx Reverse Proxy for zrok",l={unversionedId:"guides/v0.3_nginx_tls_guide",id:"guides/v0.3_nginx_tls_guide",title:"Nginx Reverse Proxy for zrok",description:"I'll assume you have a running zrok controller and public frontend and wish to front both with Nginx providing server TLS. Go back to Self-Hosting Guide if you still need to spin those up.",source:"@site/../docs/guides/v0.3_nginx_tls_guide.md",sourceDirName:"guides",slug:"/guides/v0.3_nginx_tls_guide",permalink:"/docs/guides/v0.3_nginx_tls_guide",draft:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/v0.3_nginx_tls_guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Self-Hosting Guide",permalink:"/docs/guides/v0.3_self_hosting_guide"}},s={},c=[{value:"Choose a Reverse Proxy Address",id:"choose-a-reverse-proxy-address",level:2},{value:"Obtain a Wildcard Server Certificate",id:"obtain-a-wildcard-server-certificate",level:2},{value:"Install Nginx",id:"install-nginx",level:2},{value:"Configure Nginx",id:"configure-nginx",level:2},{value:"Restart Nginx",id:"restart-nginx",level:2},{value:"Check the Firewall",id:"check-the-firewall",level:2},{value:"Update the zrok Frontend",id:"update-the-zrok-frontend",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nginx-reverse-proxy-for-zrok"},"Nginx Reverse Proxy for zrok"),(0,o.kt)("p",null,"I'll assume you have a running zrok controller and public frontend and wish to front both with Nginx providing server TLS. Go back to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/v0.3_self_hosting_guide"},"Self-Hosting Guide")," if you still need to spin those up."),(0,o.kt)("h2",{id:"choose-a-reverse-proxy-address"},"Choose a Reverse Proxy Address"),(0,o.kt)("p",null,"I'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.zrok.quigley.com:443")," in this example, and assume you already set up wildcard DNS like ",(0,o.kt)("inlineCode",{parentName:"p"},"*.zrok.quigley.com"),". This lets us elect ",(0,o.kt)("inlineCode",{parentName:"p"},"api.zrok.quigley.com")," as the controller DNS name, and forward any other incoming requests to the zrok public frontend."),(0,o.kt)("h2",{id:"obtain-a-wildcard-server-certificate"},"Obtain a Wildcard Server Certificate"),(0,o.kt)("p",null,"You must complete a DNS challenge to obtain a wildcard certificate from Let's Encrypt. I'll assume you know how to create the necessary TXT record in the DNS zone you're using with zrok."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install certbot: ",(0,o.kt)("a",{parentName:"p",href:"https://eff-certbot.readthedocs.io/en/stable/install.html"},"https://eff-certbot.readthedocs.io/en/stable/install.html"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run certbot with the manual plugin: ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/docs/using.html#manual"},"https://certbot.eff.org/docs/using.html#manual")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# install cert for *.zrok.quigley.com in /etc/letsencrypt\nsudo certbot certonly --manual\n")))),(0,o.kt)("h2",{id:"install-nginx"},(0,o.kt)("a",{parentName:"h2",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"Install Nginx")),(0,o.kt)("h2",{id:"configure-nginx"},"Configure Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server {\n    listen              443 ssl;\n    server_name         api.zrok.quigley.com;\n    ssl_certificate     /etc/letsencrypt/live/zrok.quigley.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/zrok.quigley.com/privkey.pem;\n    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers         HIGH:!aNULL:!MD5;\n\n    location / {\n      proxy_pass      http://127.0.0.1:18080;\n      error_log       /var/log/nginx/zrok-controller.log;\n    }\n\n}\n\nserver {\n    listen              443 ssl;\n    server_name         *.zrok.quigley.com;\n    ssl_certificate     /etc/letsencrypt/live/zrok.quigley.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/zrok.quigley.com/privkey.pem;\n    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers         HIGH:!aNULL:!MD5;\n\n    location / {\n      proxy_pass       http://127.0.0.1:8080;\n      proxy_set_header Host $host;\n      error_log        /var/log/nginx/zrok-frontend.log;\n      proxy_busy_buffers_size   512k;\n      proxy_buffers    4 512k;\n      proxy_buffer_size   256k;\n\n    }\n\n}\n")),(0,o.kt)("h2",{id:"restart-nginx"},"Restart Nginx"),(0,o.kt)("p",null,"Load the new configuration by restarting Nginx. Check the logs to make sure it's happy."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Started A high performance web server and a reverse proxy server.")),(0,o.kt)("h2",{id:"check-the-firewall"},"Check the Firewall"),(0,o.kt)("p",null,"If you followed the non-TLS quickstart then you may have opened 8080,108080/tcp in your firewall. You can go ahead and replace those exceptions with 443/tcp because only Nginx needs to be reachable for zrok to function."),(0,o.kt)("h2",{id:"update-the-zrok-frontend"},"Update the zrok Frontend"),(0,o.kt)("p",null,'List available frontends to obtain the token identifier of the frontend named "public". You may need to set ',(0,o.kt)("inlineCode",{parentName:"p"},"ZROK_ADMIN_TOKEN")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ZROK_API_ENDPOINT")," before running ",(0,o.kt)("inlineCode",{parentName:"p"},"zrok admin"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zrok admin list frontends\n\n TOKEN         ZID        PUBLIC NAME  URL TEMPLATE                              CREATED AT                         UPDATED AT                    \n 2NiDTRYUww18  7DsLh9DXG  public       http://{token}.zrok.quigley.com:8080  2023-01-19 05:29:20.793 +0000 UTC  2023-01-19 06:17:25 +0000 UTC \n")),(0,o.kt)("p",null,"Update the URL template to use Nginx."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zrok admin update frontend 2NiDTRYUww18 --url-template https://{token}.zrok.quigley.com:443\n[   0.028]    INFO main.(*adminUpdateFrontendCommand).run: updated global frontend '2NiDTRYUww18'\n")))}u.isMDXComponent=!0}}]);