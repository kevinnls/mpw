import{D as s,S as e,i as a,s as t,e as r,k as c,E as l,t as v,c as i,a as o,d as f,n as h,g as n,b as d,F as p,f as u,G as m,H as k,I as g,J as b,j as w,m as E,o as $,K as A,v as I,r as L,w as x}from"../chunks/vendor-2f7c43bc.js";const B={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function D(s){let e,a,t,g,b,w,E,$,A,I,L,x,B,D,H,K,M,S,_,z,T,V,j,C,F,G,N;return{c(){e=r("header"),a=r("div"),t=r("a"),g=r("img"),w=c(),E=r("nav"),$=l("svg"),A=l("path"),I=c(),L=r("ul"),x=r("li"),B=r("a"),D=v("Home"),H=c(),K=r("li"),M=r("a"),S=v("About"),_=c(),z=r("li"),T=r("a"),V=v("Todos"),j=c(),C=l("svg"),F=l("path"),G=c(),N=r("div"),this.h()},l(s){e=i(s,"HEADER",{class:!0});var r=o(e);a=i(r,"DIV",{class:!0});var c=o(a);t=i(c,"A",{href:!0,class:!0});var l=o(t);g=i(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(f),c.forEach(f),w=h(r),E=i(r,"NAV",{class:!0});var v=o(E);$=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=o($);A=i(d,"path",{d:!0,class:!0},1),o(A).forEach(f),d.forEach(f),I=h(v),L=i(v,"UL",{class:!0});var p=o(L);x=i(p,"LI",{class:!0});var u=o(x);B=i(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=o(B);D=n(m,"Home"),m.forEach(f),u.forEach(f),H=h(p),K=i(p,"LI",{class:!0});var k=o(K);M=i(k,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=o(M);S=n(b,"About"),b.forEach(f),k.forEach(f),_=h(p),z=i(p,"LI",{class:!0});var O=o(z);T=i(O,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=o(T);V=n(R,"Todos"),R.forEach(f),O.forEach(f),p.forEach(f),j=h(v),C=i(v,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Z=o(C);F=i(Z,"path",{d:!0,class:!0},1),o(F).forEach(f),Z.forEach(f),v.forEach(f),G=h(r),N=i(r,"DIV",{class:!0}),o(N).forEach(f),r.forEach(f),this.h()},h(){g.src!==(b="/mpw/app/assets/svelte-logo.87df40b8.svg")&&d(g,"src","/mpw/app/assets/svelte-logo.87df40b8.svg"),d(g,"alt","SvelteKit"),d(g,"class","svelte-1twf6mk"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-1twf6mk"),d(a,"class","corner svelte-1twf6mk"),d(A,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(A,"class","svelte-1twf6mk"),d($,"viewBox","0 0 2 3"),d($,"aria-hidden","true"),d($,"class","svelte-1twf6mk"),d(B,"sveltekit:prefetch",""),d(B,"href","/"),d(B,"class","svelte-1twf6mk"),d(x,"class","svelte-1twf6mk"),p(x,"active","/"===s[0].path),d(M,"sveltekit:prefetch",""),d(M,"href","/about"),d(M,"class","svelte-1twf6mk"),d(K,"class","svelte-1twf6mk"),p(K,"active","/about"===s[0].path),d(T,"sveltekit:prefetch",""),d(T,"href","/todos"),d(T,"class","svelte-1twf6mk"),d(z,"class","svelte-1twf6mk"),p(z,"active","/todos"===s[0].path),d(L,"class","svelte-1twf6mk"),d(F,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(F,"class","svelte-1twf6mk"),d(C,"viewBox","0 0 2 3"),d(C,"aria-hidden","true"),d(C,"class","svelte-1twf6mk"),d(E,"class","svelte-1twf6mk"),d(N,"class","corner svelte-1twf6mk"),d(e,"class","svelte-1twf6mk")},m(s,r){u(s,e,r),m(e,a),m(a,t),m(t,g),m(e,w),m(e,E),m(E,$),m($,A),m(E,I),m(E,L),m(L,x),m(x,B),m(B,D),m(L,H),m(L,K),m(K,M),m(M,S),m(L,_),m(L,z),m(z,T),m(T,V),m(E,j),m(E,C),m(C,F),m(e,G),m(e,N)},p(s,[e]){1&e&&p(x,"active","/"===s[0].path),1&e&&p(K,"active","/about"===s[0].path),1&e&&p(z,"active","/todos"===s[0].path)},i:k,o:k,d(s){s&&f(e)}}}function H(s,e,a){let t;return g(s,B,(s=>a(0,t=s))),[t]}class K extends e{constructor(s){super(),a(this,s,H,D,t,{})}}function M(s){let e,a,t,l,p,k,g,B,D,H,M;e=new K({});const S=s[1].default,_=b(S,s,s[0],null);return{c(){w(e.$$.fragment),a=c(),t=r("main"),_&&_.c(),l=c(),p=r("footer"),k=r("p"),g=v("visit "),B=r("a"),D=v("kit.svelte.dev"),H=v(" to learn SvelteKit"),this.h()},l(s){E(e.$$.fragment,s),a=h(s),t=i(s,"MAIN",{class:!0});var r=o(t);_&&_.l(r),r.forEach(f),l=h(s),p=i(s,"FOOTER",{class:!0});var c=o(p);k=i(c,"P",{});var v=o(k);g=n(v,"visit "),B=i(v,"A",{href:!0,class:!0});var d=o(B);D=n(d,"kit.svelte.dev"),d.forEach(f),H=n(v," to learn SvelteKit"),v.forEach(f),c.forEach(f),this.h()},h(){d(t,"class","svelte-1izrdc8"),d(B,"href","https://kit.svelte.dev"),d(B,"class","svelte-1izrdc8"),d(p,"class","svelte-1izrdc8")},m(s,r){$(e,s,r),u(s,a,r),u(s,t,r),_&&_.m(t,null),u(s,l,r),u(s,p,r),m(p,k),m(k,g),m(k,B),m(B,D),m(k,H),M=!0},p(s,[e]){_&&_.p&&(!M||1&e)&&A(_,S,s,s[0],e,null,null)},i(s){M||(I(e.$$.fragment,s),I(_,s),M=!0)},o(s){L(e.$$.fragment,s),L(_,s),M=!1},d(s){x(e,s),s&&f(a),s&&f(t),_&&_.d(s),s&&f(l),s&&f(p)}}}function S(s,e,a){let{$$slots:t={},$$scope:r}=e;return s.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,t]}export default class extends e{constructor(s){super(),a(this,s,S,M,t,{})}}
