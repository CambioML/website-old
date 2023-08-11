var fe=Object.defineProperty;var pe=(t,e,n)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var J=(t,e,n)=>(pe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function y(){}function re(t){return t()}function X(){return Object.create(null)}function Y(t){t.forEach(re)}function oe(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function j(t,e){return t===e?!0:(q||(q=document.createElement("a")),q.href=e,t===q.href)}function de(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function $(){return F(" ")}function me(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function Z(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let B;function D(t){B=t}function ge(){if(!B)throw new Error("Function called outside component initialization");return B}function $e(t){ge().$$.on_mount.push(t)}const O=[],ee=[];let G=[];const te=[],ye=Promise.resolve();let K=!1;function be(){K||(K=!0,ye.then(ce))}function Q(t){G.push(t)}const W=new Set;let H=0;function ce(){if(H!==0)return;const t=B;do{try{for(;H<O.length;){const e=O[H];H++,D(e),xe(e.$$)}}catch(e){throw O.length=0,H=0,e}for(D(null),O.length=0,H=0;ee.length;)ee.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];W.has(n)||(W.add(n),n())}G.length=0}while(O.length);for(;te.length;)te.pop()();K=!1,W.clear(),D(t)}function xe(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Le(t){const e=[],n=[];G.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),G=e}const U=new Set;let Ce;function k(t,e){t&&t.i&&(U.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(U.has(t))return;U.add(t),Ce.c.push(()=>{U.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ne(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function V(t){t&&t.c()}function M(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),Q(()=>{const o=t.$$.on_mount.map(re).filter(oe);t.$$.on_destroy?t.$$.on_destroy.push(...o):Y(o),t.$$.on_mount=[]}),r.forEach(Q)}function A(t,e){const n=t.$$;n.fragment!==null&&(Le(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(O.push(t),be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,s,r,o,v,m=[-1]){const p=B;D(t);const i=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:X(),dirty:m,skip_bound:!1,root:e.target||p.$$.root};v&&v(i.root);let _=!1;if(i.ctx=n?n(t,e.props||{},(l,d,...u)=>{const g=u.length?u[0]:d;return i.ctx&&r(i.ctx[l],i.ctx[l]=g)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](g),_&&ze(t,l)),d}):[],i.update(),_=!0,Y(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const l=_e(e.target);i.fragment&&i.fragment.l(l),l.forEach(b)}else i.fragment&&i.fragment.c();e.intro&&k(t.$$.fragment),M(t,e.target,e.anchor),ce()}D(p)}class S{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){A(this,1),this.$destroy=y}$on(e,n){if(!oe(n))return y;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const we="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(we);const ie="/assets/logo-8b972bb6.svg",ae="/assets/github-1ea8d62e.svg";function Ee(t){let e,n,s,r,o,v,m,p,i,_,l,d,u,g,h;return{c(){e=f("header"),n=f("div"),s=f("div"),r=f("a"),o=f("img"),m=$(),p=f("h1"),p.textContent="CambioML",i=$(),_=f("nav"),l=f("a"),l.textContent="Docs",d=$(),u=f("a"),g=f("img"),j(o.src,v=ie)||a(o,"src",v),a(o,"alt","CambioML Logo"),a(o,"class","svelte-ev35r1"),a(r,"href","https://www.cambioml.com"),a(r,"class","svelte-ev35r1"),a(s,"class","logo-bg svelte-ev35r1"),a(p,"class","logo"),a(n,"class","corner svelte-ev35r1"),a(l,"href","/docs/index.html"),a(l,"class","svelte-ev35r1"),j(g.src,h=ae)||a(g,"src",h),a(g,"alt","GitHub"),a(g,"class","svelte-ev35r1"),a(u,"href","https://github.com/cambioml"),a(u,"target","_blank"),a(u,"class","svelte-ev35r1"),a(_,"class","svelte-ev35r1"),a(e,"class","svelte-ev35r1")},m(C,z){x(C,e,z),c(e,n),c(n,s),c(s,r),c(r,o),c(n,m),c(n,p),c(e,i),c(e,_),c(_,l),c(_,d),c(_,u),c(u,g)},p:y,i:y,o:y,d(C){C&&b(e)}}}class Ie extends S{constructor(e){super(),P(this,e,null,Ee,N,{})}}function Te(t){let e,n,s,r,o,v,m,p,i,_,l,d,u,g,h,C,z,w,E,I,L;return{c(){e=f("footer"),n=f("div"),s=f("div"),r=f("a"),o=f("img"),m=$(),p=f("h1"),p.textContent="CambioML",i=$(),_=f("nav"),l=f("a"),l.textContent="Docs",d=$(),u=f("a"),u.textContent="Tutorial",g=$(),h=f("a"),h.textContent="Community",C=$(),z=f("a"),w=f("img"),I=$(),L=f("p"),L.textContent="© 2023 CambioML",j(o.src,v=ie)||a(o,"src",v),a(o,"alt","CambioML Logo"),a(o,"class","svelte-p6p3sz"),a(r,"href","https://www.cambioml.com"),a(s,"class","logo-bg svelte-p6p3sz"),a(p,"class","logo"),a(n,"class","corner svelte-p6p3sz"),a(l,"href","/docs/index.html"),a(u,"href","/"),a(h,"href","/"),j(w.src,E=ae)||a(w,"src",E),a(w,"alt","GitHub"),a(w,"class","svelte-p6p3sz"),a(z,"href","https://github.com/cambioml"),a(z,"target","_blank"),a(e,"class","svelte-p6p3sz")},m(T,ue){x(T,e,ue),c(e,n),c(n,s),c(s,r),c(r,o),c(n,m),c(n,p),c(e,i),c(e,_),c(_,l),c(_,d),c(_,u),c(_,g),c(_,h),c(_,C),c(_,z),c(z,w),c(e,I),c(e,L)},p:y,i:y,o:y,d(T){T&&b(e)}}}class ke extends S{constructor(e){super(),P(this,e,null,Te,N,{})}}function se(t,e,n){const s=t.slice();return s[3]=e[n],s}function le(t){let e,n,s;function r(){return t[2](t[3])}return{c(){e=f("li"),e.textContent=`${t[3]} `,a(e,"class","svelte-p7v5oz"),Z(e,"background-color",t[0]==t[3]?"var(--red)":"")},m(o,v){x(o,e,v),n||(s=me(e,"click",r),n=!0)},p(o,v){t=o,v&1&&Z(e,"background-color",t[0]==t[3]?"var(--red)":"")},d(o){o&&b(e),n=!1,s()}}}function Me(t){let e;return{c(){e=f("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Install the package<br/># into python virtual environment</span><span class="svelte-p7v5oz">git clone ...</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">cd plotano</span>
      <span class="svelte-p7v5oz">python app.py</span></pre>`},m(n,s){x(n,e,s)},d(n){n&&b(e)}}}function Ae(t){let e;return{c(){e=f("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Clone the repo</span><span class="svelte-p7v5oz">git clone https://github.com/CambioML/plotano.git</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">cd plotano</span><span class="svelte-p7v5oz">python app.py</span>
    </pre>`},m(n,s){x(n,e,s)},d(n){n&&b(e)}}}function Ne(t){let e;return{c(){e=f("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Install the package</span><span class="svelte-p7v5oz">pip install pykoi</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">import pykoi as pk</span>
      </pre>`},m(n,s){x(n,e,s)},d(n){n&&b(e)}}}function Pe(t){let e,n,s,r,o,v,m,p=ne(t[1]),i=[];for(let u=0;u<p.length;u+=1)i[u]=le(se(t,p,u));function _(u,g){if(u[0]==u[1][0])return Ne;if(u[0]==u[1][1])return Ae;if(u[0]==u[1][2])return Me}let l=_(t),d=l&&l(t);return{c(){e=f("div"),n=f("div"),s=f("div"),s.textContent="Quick Start",r=$(),o=f("ul");for(let u=0;u<i.length;u+=1)i[u].c();v=$(),m=f("div"),d&&d.c(),a(s,"class","title svelte-p7v5oz"),a(o,"class","tabs svelte-p7v5oz"),a(n,"class","header svelte-p7v5oz"),a(m,"class","tabs-container svelte-p7v5oz"),a(e,"class","code-example svelte-p7v5oz")},m(u,g){x(u,e,g),c(e,n),c(n,s),c(n,r),c(n,o);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(o,null);c(e,v),c(e,m),d&&d.m(m,null)},p(u,[g]){if(g&3){p=ne(u[1]);let h;for(h=0;h<p.length;h+=1){const C=se(u,p,h);i[h]?i[h].p(C,g):(i[h]=le(C),i[h].c(),i[h].m(o,null))}for(;h<i.length;h+=1)i[h].d(1);i.length=p.length}l!==(l=_(u))&&(d&&d.d(1),d=l&&l(u),d&&(d.c(),d.m(m,null)))},i:y,o:y,d(u){u&&b(e),ve(i,u),d&&d.d()}}}function Se(t,e,n){const s=["pip"];let r=s[0];return[r,s,v=>{n(0,r=v)}]}class He extends S{constructor(e){super(),P(this,e,Se,Pe,N,{})}}function Oe(t){let e,n,s,r,o,v,m,p,i,_,l,d,u,g,h,C,z,w,E,I;return E=new He({}),{c(){e=f("div"),n=f("div"),s=f("h1"),r=F("Open Source "),o=f("br"),v=$(),m=f("div"),p=f("span"),i=F(t[0]),_=F(" "),l=$(),d=f("br"),u=F("Platform In Python"),g=$(),h=f("h3"),h.textContent=`The most flexible data labeling platform to fine-tune LLMs, prepare
      training data or validate AI models.`,C=$(),z=f("div"),z.innerHTML="<button>Get Started</button> <button>Join Community</button>",w=$(),V(E.$$.fragment),a(p,"class","highlight"),a(m,"class","typewriter svelte-2ccix7"),a(s,"class","hero-text svelte-2ccix7"),a(h,"class","subheader svelte-2ccix7"),a(z,"class","button-holder svelte-2ccix7"),a(e,"class","hero svelte-2ccix7")},m(L,T){x(L,e,T),c(e,n),c(n,s),c(s,r),c(s,o),c(s,v),c(s,m),c(m,p),c(p,i),c(p,_),c(s,l),c(s,d),c(s,u),c(n,g),c(n,h),c(n,C),c(n,z),c(e,w),M(E,e,null),I=!0},p(L,[T]){(!I||T&1)&&he(i,L[0])},i(L){I||(k(E.$$.fragment,L),I=!0)},o(L){R(E.$$.fragment,L),I=!1},d(L){L&&b(e),A(E)}}}const Re=100,Ve=75,Ge=1e3,Fe=500,De=500;function je(t,e,n){const s=["Data Collection","RLHF","Monitoring"];let r=0,o=s[r],v=0,m="",p;const i=()=>{if(v<o.length)n(0,m+=o[v]),v++;else{clearInterval(p),setTimeout(h,Ge);return}},_=()=>{if(m.length>1)n(0,m=m.substring(0,m.length-1));else{n(0,m=""),clearInterval(p),l();return}},l=()=>{r=r===s.length-1?0:r+1,o=s[r],v=0,setTimeout(u,Fe)},d=()=>{},u=()=>p=setInterval(i,Re),g=()=>setInterval(d,De),h=()=>p=setInterval(_,Ve);return $e(()=>{u(),g()}),[m]}class Be extends S{constructor(e){super(),P(this,e,je,Oe,N,{})}}function qe(t){let e,n,s;return{c(){e=f("div"),n=f("video"),j(n.src,s=Ue)||a(n,"src",s),n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,a(n,"class","video-content svelte-1m2fz0c"),a(e,"class","video-container svelte-1m2fz0c")},m(r,o){x(r,e,o),c(e,n)},p:y,i:y,o:y,d(r){r&&b(e)}}}let Ue="cambioML.mp4";class Ye extends S{constructor(e){super(),P(this,e,null,qe,N,{})}}function Je(t){let e;return{c(){e=f("div"),e.innerHTML='<div><h1 class="cta-text svelte-1p54kp0">CambioML</h1> <div class="button-holder svelte-1p54kp0"><button class="svelte-1p54kp0">Get Started</button> <button class="svelte-1p54kp0">Join Community</button></div></div>',a(e,"class","cta-container svelte-1p54kp0")},m(n,s){x(n,e,s)},p:y,i:y,o:y,d(n){n&&b(e)}}}class We extends S{constructor(e){super(),P(this,e,null,Je,N,{})}}function Ke(t){let e,n,s,r,o,v,m,p,i,_;return e=new Ie({}),s=new Be({}),o=new Ye({}),m=new We({}),i=new ke({}),{c(){V(e.$$.fragment),n=$(),V(s.$$.fragment),r=$(),V(o.$$.fragment),v=$(),V(m.$$.fragment),p=$(),V(i.$$.fragment)},m(l,d){M(e,l,d),x(l,n,d),M(s,l,d),x(l,r,d),M(o,l,d),x(l,v,d),M(m,l,d),x(l,p,d),M(i,l,d),_=!0},p:y,i(l){_||(k(e.$$.fragment,l),k(s.$$.fragment,l),k(o.$$.fragment,l),k(m.$$.fragment,l),k(i.$$.fragment,l),_=!0)},o(l){R(e.$$.fragment,l),R(s.$$.fragment,l),R(o.$$.fragment,l),R(m.$$.fragment,l),R(i.$$.fragment,l),_=!1},d(l){l&&(b(n),b(r),b(v),b(p)),A(e,l),A(s,l),A(o,l),A(m,l),A(i,l)}}}class Qe extends S{constructor(e){super(),P(this,e,null,Ke,N,{})}}new Qe({target:document.getElementById("app")});