import{s as _,n as o,x as C,o as E,e as L}from"../chunks/scheduler.W2pu3yam.js";import{S as $,i as b,e as h,c as v,d as y,g as r,o as m,j as f,y as T,p,u as x,s as w,v as I,h as M,z as V,w as S,t as A,a as R,x as z}from"../chunks/index.WxWe8EyI.js";import{b as g}from"../chunks/paths.BmedtpF5.js";function j(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function k(c,e,s){const t=c.slice();return t[0]=e[s],t[2]=s,t}function D(c){let e;return{c(){e=h("div"),this.h()},l(s){e=v(s,"DIV",{class:!0,style:!0}),y(e).forEach(r),this.h()},h(){m(e,"class","rain-drop svelte-10ra3zy"),p(e,"--delay",Math.random()*2+"s"),p(e,"--left",Math.random()*100+"%"),p(e,"--duration",.5+Math.random()*.5+"s")},m(s,t){f(s,e,t)},p:o,d(s){s&&r(e)}}}function q(c){let e,s=j(Array(100)),t=[];for(let n=0;n<s.length;n+=1)t[n]=D(k(c,s,n));return{c(){e=h("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=v(n,"DIV",{class:!0});var i=y(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(r),this.h()},h(){m(e,"class","rain-container svelte-10ra3zy")},m(n,i){f(n,e,i);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(n,[i]){if(i&0){s=j(Array(100));let a;for(a=0;a<s.length;a+=1){const u=k(n,s,a);t[a]?t[a].p(u,i):(t[a]=D(),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},i:o,o,d(n){n&&r(e),T(t,n)}}}class H extends ${constructor(e){super(),b(this,e,null,q,_,{})}}function O(c){let e,s;return{c(){e=h("audio"),this.h()},l(t){e=v(t,"AUDIO",{src:!0,preload:!0,class:!0}),y(e).forEach(r),this.h()},h(){C(e.src,s=g+"/Rain.wav")||m(e,"src",s),e.loop=!0,m(e,"preload","auto"),m(e,"class","svelte-1yzglfe")},m(t,n){f(t,e,n),c[1](e)},p:o,i:o,o,d(t){t&&r(e),c[1](null)}}}function P(c,e,s){let t;E(()=>{t&&(s(0,t.volume=.3,t),t.play().catch(i=>{console.log("Audio autoplay failed:",i)}))});function n(i){L[i?"unshift":"push"](()=>{t=i,s(0,t)})}return[t,n]}class U extends ${constructor(e){super(),b(this,e,P,O,_,{})}}function W(c){let e,s,t,n,i,a=`<div class="side-image left svelte-1e4cb83"><img src="${g}/reimu.png" alt="Reimu Left" class="svelte-1e4cb83"/></div> <div class="container svelte-1e4cb83"><div class="content-center svelte-1e4cb83"><h1 class="svelte-1e4cb83">Tensei_Surf</h1> <div class="summary svelte-1e4cb83">Welcome, this is a project that I&#39;m working on in my free time.
        I didn&#39;t like how the current Counter Strike Source Surf servers gatekept voting for maps, so I am making my own.
        More work needs to be done, but this is just the beginning. 
        Stay tuned for more updates!</div></div></div> <div class="side-image right svelte-1e4cb83"><img src="${g}/reimu.png" alt="Reimu Right" class="svelte-1e4cb83"/></div>`,u;return e=new H({}),t=new U({}),{c(){x(e.$$.fragment),s=w(),x(t.$$.fragment),n=w(),i=h("div"),i.innerHTML=a,this.h()},l(l){I(e.$$.fragment,l),s=M(l),I(t.$$.fragment,l),n=M(l),i=v(l,"DIV",{class:!0,"data-svelte-h":!0}),V(i)!=="svelte-1vzjio4"&&(i.innerHTML=a),this.h()},h(){m(i,"class","page-layout svelte-1e4cb83")},m(l,d){S(e,l,d),f(l,s,d),S(t,l,d),f(l,n,d),f(l,i,d),u=!0},p:o,i(l){u||(A(e.$$.fragment,l),A(t.$$.fragment,l),u=!0)},o(l){R(e.$$.fragment,l),R(t.$$.fragment,l),u=!1},d(l){l&&(r(s),r(n),r(i)),z(e,l),z(t,l)}}}class J extends ${constructor(e){super(),b(this,e,null,W,_,{})}}export{J as component};
