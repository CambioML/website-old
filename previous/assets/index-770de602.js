var fe=Object.defineProperty;var pe=(t,e,n)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var J=(t,e,n)=>(pe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function $(){}function re(t){return t()}function X(){return Object.create(null)}function q(t){t.forEach(re)}function oe(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function F(t,e){return t===e?!0:(D||(D=document.createElement("a")),D.href=e,t===D.href)}function de(t){return Object.keys(t).length===0}function a(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function b(){return j(" ")}function me(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function he(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function Z(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let B;function G(t){B=t}function ge(){if(!B)throw new Error("Function called outside component initialization");return B}function be(t){ge().$$.on_mount.push(t)}const O=[],ee=[];let V=[];const te=[],$e=Promise.resolve();let W=!1;function ye(){W||(W=!0,$e.then(ae))}function K(t){V.push(t)}const Y=new Set;let S=0;function ae(){if(S!==0)return;const t=B;do{try{for(;S<O.length;){const e=O[S];S++,G(e),ze(e.$$)}}catch(e){throw O.length=0,S=0,e}for(G(null),O.length=0,S=0;ee.length;)ee.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];Y.has(n)||(Y.add(n),n())}V.length=0}while(O.length);for(;te.length;)te.pop()();W=!1,Y.clear(),G(t)}function ze(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}function xe(t){const e=[],n=[];V.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),V=e}const Q=new Set;let Le;function T(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(Q.has(t))return;Q.add(t),Le.c.push(()=>{Q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ne(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function U(t){t&&t.c()}function M(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),K(()=>{const o=t.$$.on_mount.map(re).filter(oe);t.$$.on_destroy?t.$$.on_destroy.push(...o):q(o),t.$$.on_mount=[]}),r.forEach(K)}function A(t,e){const n=t.$$;n.fragment!==null&&(xe(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ce(t,e){t.$$.dirty[0]===-1&&(O.push(t),ye(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,s,r,o,v,m=[-1]){const p=B;G(t);const i=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:X(),dirty:m,skip_bound:!1,root:e.target||p.$$.root};v&&v(i.root);let h=!1;if(i.ctx=n?n(t,e.props||{},(l,d,...u)=>{const g=u.length?u[0]:d;return i.ctx&&r(i.ctx[l],i.ctx[l]=g)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](g),h&&Ce(t,l)),d}):[],i.update(),h=!0,q(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const l=he(e.target);i.fragment&&i.fragment.l(l),l.forEach(y)}else i.fragment&&i.fragment.c();e.intro&&T(t.$$.fragment),M(t,e.target,e.anchor),ae()}G(p)}class H{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){A(this,1),this.$destroy=$}$on(e,n){if(!oe(n))return $;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const we="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(we);const ie="/assets/logo-8b972bb6.svg",ce="/assets/github-1ea8d62e.svg";function Ee(t){let e,n,s,r,o,v,m,p,i,h,l,d,u,g,_;return{c(){e=f("header"),n=f("div"),s=f("div"),r=f("a"),o=f("img"),m=b(),p=f("h1"),p.textContent="CambioML",i=b(),h=f("nav"),l=f("a"),l.innerHTML='<a href="https://join.slack.com/t/cambiomlworkspace/shared_invite/zt-1zes33rmt-20Rag043uvExUaUdvt5_xQ" class="svelte-ev35r1">Join Community</a>',d=b(),u=f("a"),g=f("img"),F(o.src,v=ie)||c(o,"src",v),c(o,"alt","CambioML Logo"),c(o,"class","svelte-ev35r1"),c(r,"href","https://www.cambioml.com"),c(r,"class","svelte-ev35r1"),c(s,"class","logo-bg svelte-ev35r1"),c(p,"class","logo"),c(n,"class","corner svelte-ev35r1"),c(l,"href","/"),c(l,"class","svelte-ev35r1"),F(g.src,_=ce)||c(g,"src",_),c(g,"alt","GitHub"),c(g,"class","svelte-ev35r1"),c(u,"href","https://github.com/CambioML/pykoi"),c(u,"target","_blank"),c(u,"class","svelte-ev35r1"),c(h,"class","svelte-ev35r1"),c(e,"class","svelte-ev35r1")},m(L,C){z(L,e,C),a(e,n),a(n,s),a(s,r),a(r,o),a(n,m),a(n,p),a(e,i),a(e,h),a(h,l),a(h,d),a(h,u),a(u,g)},p:$,i:$,o:$,d(L){L&&y(e)}}}class ke extends H{constructor(e){super(),P(this,e,null,Ee,N,{})}}function Ie(t){let e,n,s,r,o,v,m,p,i,h,l,d,u,g,_,L,C,w,E,k,x;return{c(){e=f("footer"),n=f("div"),s=f("div"),r=f("a"),o=f("img"),m=b(),p=f("h1"),p.textContent="CambioML",i=b(),h=f("nav"),l=f("a"),l.textContent="Docs",d=b(),u=f("a"),u.textContent="Tutorial",g=b(),_=f("a"),_.textContent="Community",L=b(),C=f("a"),w=f("img"),k=b(),x=f("p"),x.textContent="© 2023 CambioML",F(o.src,v=ie)||c(o,"src",v),c(o,"alt","CambioML Logo"),c(o,"class","svelte-p6p3sz"),c(r,"href","https://www.cambioml.com"),c(s,"class","logo-bg svelte-p6p3sz"),c(p,"class","logo"),c(n,"class","corner svelte-p6p3sz"),c(l,"href","/"),c(u,"href","/"),c(_,"href","/"),F(w.src,E=ce)||c(w,"src",E),c(w,"alt","GitHub"),c(w,"class","svelte-p6p3sz"),c(C,"href","https://github.com/cambioml"),c(C,"target","_blank"),c(e,"class","svelte-p6p3sz")},m(I,ue){z(I,e,ue),a(e,n),a(n,s),a(s,r),a(r,o),a(n,m),a(n,p),a(e,i),a(e,h),a(h,l),a(h,d),a(h,u),a(h,g),a(h,_),a(h,L),a(h,C),a(C,w),a(e,k),a(e,x)},p:$,i:$,o:$,d(I){I&&y(e)}}}class Te extends H{constructor(e){super(),P(this,e,null,Ie,N,{})}}function se(t,e,n){const s=t.slice();return s[3]=e[n],s}function le(t){let e,n,s;function r(){return t[2](t[3])}return{c(){e=f("li"),e.textContent=`${t[3]} `,c(e,"class","svelte-p7v5oz"),Z(e,"background-color",t[0]==t[3]?"var(--red)":"")},m(o,v){z(o,e,v),n||(s=me(e,"click",r),n=!0)},p(o,v){t=o,v&1&&Z(e,"background-color",t[0]==t[3]?"var(--red)":"")},d(o){o&&y(e),n=!1,s()}}}function Me(t){let e;return{c(){e=f("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Install the package<br/># into python virtual environment</span><span class="svelte-p7v5oz">git clone ...</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">cd plotano</span>
      <span class="svelte-p7v5oz">python app.py</span></pre>`},m(n,s){z(n,e,s)},d(n){n&&y(e)}}}function Ae(t){let e;return{c(){e=f("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Clone the repo</span><span class="svelte-p7v5oz">git clone https://github.com/CambioML/plotano.git</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">cd plotano</span><span class="svelte-p7v5oz">python app.py</span>
    </pre>`},m(n,s){z(n,e,s)},d(n){n&&y(e)}}}function Ne(t){let e;return{c(){e=f("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Install the package</span><span class="svelte-p7v5oz">pip install pykoi</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Use it!</span><span class="svelte-p7v5oz">import pykoi as pk</span>
      </pre>`},m(n,s){z(n,e,s)},d(n){n&&y(e)}}}function Pe(t){let e,n,s,r,o,v,m,p=ne(t[1]),i=[];for(let u=0;u<p.length;u+=1)i[u]=le(se(t,p,u));function h(u,g){if(u[0]==u[1][0])return Ne;if(u[0]==u[1][1])return Ae;if(u[0]==u[1][2])return Me}let l=h(t),d=l&&l(t);return{c(){e=f("div"),n=f("div"),s=f("div"),s.textContent="Quick Start",r=b(),o=f("ul");for(let u=0;u<i.length;u+=1)i[u].c();v=b(),m=f("div"),d&&d.c(),c(s,"class","title svelte-p7v5oz"),c(o,"class","tabs svelte-p7v5oz"),c(n,"class","header svelte-p7v5oz"),c(m,"class","tabs-container svelte-p7v5oz"),c(e,"class","code-example svelte-p7v5oz")},m(u,g){z(u,e,g),a(e,n),a(n,s),a(n,r),a(n,o);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(o,null);a(e,v),a(e,m),d&&d.m(m,null)},p(u,[g]){if(g&3){p=ne(u[1]);let _;for(_=0;_<p.length;_+=1){const L=se(u,p,_);i[_]?i[_].p(L,g):(i[_]=le(L),i[_].c(),i[_].m(o,null))}for(;_<i.length;_+=1)i[_].d(1);i.length=p.length}l!==(l=h(u))&&(d&&d.d(1),d=l&&l(u),d&&(d.c(),d.m(m,null)))},i:$,o:$,d(u){u&&y(e),ve(i,u),d&&d.d()}}}function He(t,e,n){const s=["pip"];let r=s[0];return[r,s,v=>{n(0,r=v)}]}class Se extends H{constructor(e){super(),P(this,e,He,Pe,N,{})}}function Oe(t){let e,n,s,r,o,v,m,p,i,h,l,d,u,g,_,L,C,w,E,k;return E=new Se({}),{c(){e=f("div"),n=f("div"),s=f("h1"),r=j("Open Source "),o=f("br"),v=b(),m=f("div"),p=f("span"),i=j(t[0]),h=j(" "),l=b(),d=f("br"),u=j("Platform In Python"),g=b(),_=f("h3"),_.textContent=`The most flexible data labeling platform to fine-tune LLMs, prepare
      training data or validate AI models.`,L=b(),C=f("div"),C.innerHTML='<button class="svelte-1adefem"><a href="https://github.com/CambioML/pykoi" class="svelte-1adefem">Get Started</a></button> <button class="svelte-1adefem"><a href="https://join.slack.com/t/cambiomlworkspace/shared_invite/zt-1zes33rmt-20Rag043uvExUaUdvt5_xQ" class="svelte-1adefem">Join Community</a></button>',w=b(),U(E.$$.fragment),c(p,"class","highlight"),c(m,"class","typewriter svelte-1adefem"),c(s,"class","hero-text svelte-1adefem"),c(_,"class","subheader svelte-1adefem"),c(C,"class","button-holder svelte-1adefem"),c(e,"class","hero svelte-1adefem")},m(x,I){z(x,e,I),a(e,n),a(n,s),a(s,r),a(s,o),a(s,v),a(s,m),a(m,p),a(p,i),a(p,h),a(s,l),a(s,d),a(s,u),a(n,g),a(n,_),a(n,L),a(n,C),a(e,w),M(E,e,null),k=!0},p(x,[I]){(!k||I&1)&&_e(i,x[0])},i(x){k||(T(E.$$.fragment,x),k=!0)},o(x){R(E.$$.fragment,x),k=!1},d(x){x&&y(e),A(E)}}}const Re=100,Ue=75,Ve=1e3,je=500,Ge=500;function Fe(t,e,n){const s=["Data Collection","RLHF","Monitoring"];let r=0,o=s[r],v=0,m="",p;const i=()=>{if(v<o.length)n(0,m+=o[v]),v++;else{clearInterval(p),setTimeout(_,Ve);return}},h=()=>{if(m.length>1)n(0,m=m.substring(0,m.length-1));else{n(0,m=""),clearInterval(p),l();return}},l=()=>{r=r===s.length-1?0:r+1,o=s[r],v=0,setTimeout(u,je)},d=()=>{},u=()=>p=setInterval(i,Re),g=()=>setInterval(d,Ge),_=()=>p=setInterval(h,Ue);return be(()=>{u(),g()}),[m]}class Be extends H{constructor(e){super(),P(this,e,Fe,Oe,N,{})}}function De(t){let e,n,s;return{c(){e=f("div"),n=f("video"),F(n.src,s=Qe)||c(n,"src",s),n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,c(n,"class","video-content svelte-1m2fz0c"),c(e,"class","video-container svelte-1m2fz0c")},m(r,o){z(r,e,o),a(e,n)},p:$,i:$,o:$,d(r){r&&y(e)}}}let Qe="/cambioML.mp4";class qe extends H{constructor(e){super(),P(this,e,null,De,N,{})}}function Je(t){let e;return{c(){e=f("div"),e.innerHTML='<div><h1 class="cta-text svelte-18bh2vt">CambioML</h1> <div class="button-holder svelte-18bh2vt"><button class="svelte-18bh2vt"><a href="https://github.com/CambioML/pykoi" class="svelte-18bh2vt">Get Started</a></button> <button class="svelte-18bh2vt"><a href="https://join.slack.com/t/cambiomlworkspace/shared_invite/zt-1zes33rmt-20Rag043uvExUaUdvt5_xQ" class="svelte-18bh2vt">Join Community</a></button></div></div>',c(e,"class","cta-container svelte-18bh2vt")},m(n,s){z(n,e,s)},p:$,i:$,o:$,d(n){n&&y(e)}}}class Ye extends H{constructor(e){super(),P(this,e,null,Je,N,{})}}function We(t){let e,n,s,r,o,v,m,p,i,h;return e=new ke({}),s=new Be({}),o=new qe({}),m=new Ye({}),i=new Te({}),{c(){U(e.$$.fragment),n=b(),U(s.$$.fragment),r=b(),U(o.$$.fragment),v=b(),U(m.$$.fragment),p=b(),U(i.$$.fragment)},m(l,d){M(e,l,d),z(l,n,d),M(s,l,d),z(l,r,d),M(o,l,d),z(l,v,d),M(m,l,d),z(l,p,d),M(i,l,d),h=!0},p:$,i(l){h||(T(e.$$.fragment,l),T(s.$$.fragment,l),T(o.$$.fragment,l),T(m.$$.fragment,l),T(i.$$.fragment,l),h=!0)},o(l){R(e.$$.fragment,l),R(s.$$.fragment,l),R(o.$$.fragment,l),R(m.$$.fragment,l),R(i.$$.fragment,l),h=!1},d(l){l&&(y(n),y(r),y(v),y(p)),A(e,l),A(s,l),A(o,l),A(m,l),A(i,l)}}}class Ke extends H{constructor(e){super(),P(this,e,null,We,N,{})}}new Ke({target:document.getElementById("app")});