import{D as s,S as e,i as a,s as t,e as r,k as c,E as l,t as o,c as v,a as i,d as f,n as h,g as n,b as d,F as p,f as u,G as m,H as k,I as g,J as b,j as w,m as E,o as $,K as A,v as I,r as L,w as x}from"../chunks/vendor-2f7c43bc.js";import{b as _}from"../chunks/paths-45dac81d.js";const B={subscribe:e=>(()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}})().page.subscribe(e)};function D(s){let e,a,t,g,b,w,E,$,A,I,L,x,B,D,H,K,M,S,j,z,T,V,C,F,G,N,O;return{c(){e=r("header"),a=r("div"),t=r("a"),g=r("img"),w=c(),E=r("nav"),$=l("svg"),A=l("path"),I=c(),L=r("ul"),x=r("li"),B=r("a"),D=o("Home"),H=c(),K=r("li"),M=r("a"),S=o("About"),j=c(),z=r("li"),T=r("a"),V=o("Todos"),C=c(),F=l("svg"),G=l("path"),N=c(),O=r("div"),this.h()},l(s){e=v(s,"HEADER",{class:!0});var r=i(e);a=v(r,"DIV",{class:!0});var c=i(a);t=v(c,"A",{href:!0,class:!0});var l=i(t);g=v(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(f),c.forEach(f),w=h(r),E=v(r,"NAV",{class:!0});var o=i(E);$=v(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var d=i($);A=v(d,"path",{d:!0,class:!0},1),i(A).forEach(f),d.forEach(f),I=h(o),L=v(o,"UL",{class:!0});var p=i(L);x=v(p,"LI",{class:!0});var u=i(x);B=v(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var m=i(B);D=n(m,"Home"),m.forEach(f),u.forEach(f),H=h(p),K=v(p,"LI",{class:!0});var k=i(K);M=v(k,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=i(M);S=n(b,"About"),b.forEach(f),k.forEach(f),j=h(p),z=v(p,"LI",{class:!0});var _=i(z);T=v(_,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var R=i(T);V=n(R,"Todos"),R.forEach(f),_.forEach(f),p.forEach(f),C=h(o),F=v(o,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var Z=i(F);G=v(Z,"path",{d:!0,class:!0},1),i(G).forEach(f),Z.forEach(f),o.forEach(f),N=h(r),O=v(r,"DIV",{class:!0}),i(O).forEach(f),r.forEach(f),this.h()},h(){g.src!==(b="/mpw/_app/assets/svelte-logo.87df40b8.svg")&&d(g,"src","/mpw/_app/assets/svelte-logo.87df40b8.svg"),d(g,"alt","SvelteKit"),d(g,"class","svelte-1twf6mk"),d(t,"href","https://kit.svelte.dev"),d(t,"class","svelte-1twf6mk"),d(a,"class","corner svelte-1twf6mk"),d(A,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),d(A,"class","svelte-1twf6mk"),d($,"viewBox","0 0 2 3"),d($,"aria-hidden","true"),d($,"class","svelte-1twf6mk"),d(B,"sveltekit:prefetch",""),d(B,"href",_+"/"),d(B,"class","svelte-1twf6mk"),d(x,"class","svelte-1twf6mk"),p(x,"active","/"===s[0].path),d(M,"sveltekit:prefetch",""),d(M,"href",_+"/about"),d(M,"class","svelte-1twf6mk"),d(K,"class","svelte-1twf6mk"),p(K,"active","/about"===s[0].path),d(T,"sveltekit:prefetch",""),d(T,"href",_+"/todos"),d(T,"class","svelte-1twf6mk"),d(z,"class","svelte-1twf6mk"),p(z,"active","/todos"===s[0].path),d(L,"class","svelte-1twf6mk"),d(G,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),d(G,"class","svelte-1twf6mk"),d(F,"viewBox","0 0 2 3"),d(F,"aria-hidden","true"),d(F,"class","svelte-1twf6mk"),d(E,"class","svelte-1twf6mk"),d(O,"class","corner svelte-1twf6mk"),d(e,"class","svelte-1twf6mk")},m(s,r){u(s,e,r),m(e,a),m(a,t),m(t,g),m(e,w),m(e,E),m(E,$),m($,A),m(E,I),m(E,L),m(L,x),m(x,B),m(B,D),m(L,H),m(L,K),m(K,M),m(M,S),m(L,j),m(L,z),m(z,T),m(T,V),m(E,C),m(E,F),m(F,G),m(e,N),m(e,O)},p(s,[e]){1&e&&p(x,"active","/"===s[0].path),1&e&&p(K,"active","/about"===s[0].path),1&e&&p(z,"active","/todos"===s[0].path)},i:k,o:k,d(s){s&&f(e)}}}function H(s,e,a){let t;return g(s,B,(s=>a(0,t=s))),[t]}class K extends e{constructor(s){super(),a(this,s,H,D,t,{})}}function M(s){let e,a,t,l,p,k,g,_,B,D,H;e=new K({});const M=s[1].default,S=b(M,s,s[0],null);return{c(){w(e.$$.fragment),a=c(),t=r("main"),S&&S.c(),l=c(),p=r("footer"),k=r("p"),g=o("visit "),_=r("a"),B=o("kit.svelte.dev"),D=o(" to learn SvelteKit"),this.h()},l(s){E(e.$$.fragment,s),a=h(s),t=v(s,"MAIN",{class:!0});var r=i(t);S&&S.l(r),r.forEach(f),l=h(s),p=v(s,"FOOTER",{class:!0});var c=i(p);k=v(c,"P",{});var o=i(k);g=n(o,"visit "),_=v(o,"A",{href:!0,class:!0});var d=i(_);B=n(d,"kit.svelte.dev"),d.forEach(f),D=n(o," to learn SvelteKit"),o.forEach(f),c.forEach(f),this.h()},h(){d(t,"class","svelte-1izrdc8"),d(_,"href","https://kit.svelte.dev"),d(_,"class","svelte-1izrdc8"),d(p,"class","svelte-1izrdc8")},m(s,r){$(e,s,r),u(s,a,r),u(s,t,r),S&&S.m(t,null),u(s,l,r),u(s,p,r),m(p,k),m(k,g),m(k,_),m(_,B),m(k,D),H=!0},p(s,[e]){S&&S.p&&(!H||1&e)&&A(S,M,s,s[0],e,null,null)},i(s){H||(I(e.$$.fragment,s),I(S,s),H=!0)},o(s){L(e.$$.fragment,s),L(S,s),H=!1},d(s){x(e,s),s&&f(a),s&&f(t),S&&S.d(s),s&&f(l),s&&f(p)}}}function S(s,e,a){let{$$slots:t={},$$scope:r}=e;return s.$$set=s=>{"$$scope"in s&&a(0,r=s.$$scope)},[r,t]}export default class extends e{constructor(s){super(),a(this,s,S,M,t,{})}}
