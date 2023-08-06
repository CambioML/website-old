var fe=Object.defineProperty;var pe=(t,e,n)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var J=(t,e,n)=>(pe(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function y(){}function re(t){return t()}function X(){return Object.create(null)}function Y(t){t.forEach(re)}function oe(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let q;function j(t,e){return t===e?!0:(q||(q=document.createElement("a")),q.href=e,t===q.href)}function de(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function g(){return F(" ")}function me(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function i(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function Z(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let B;function D(t){B=t}function ge(){if(!B)throw new Error("Function called outside component initialization");return B}function $e(t){ge().$$.on_mount.push(t)}const O=[],ee=[];let G=[];const te=[],ye=Promise.resolve();let K=!1;function be(){K||(K=!0,ye.then(ce))}function Q(t){G.push(t)}const W=new Set;let H=0;function ce(){if(H!==0)return;const t=B;do{try{for(;H<O.length;){const e=O[H];H++,D(e),xe(e.$$)}}catch(e){throw O.length=0,H=0,e}for(D(null),O.length=0,H=0;ee.length;)ee.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];W.has(n)||(W.add(n),n())}G.length=0}while(O.length);for(;te.length;)te.pop()();K=!1,W.clear(),D(t)}function xe(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Ce(t){const e=[],n=[];G.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),G=e}const U=new Set;let Le;function k(t,e){t&&t.i&&(U.delete(t),t.i(e))}function R(t,e,n,s){if(t&&t.o){if(U.has(t))return;U.add(t),Le.c.push(()=>{U.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ne(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function V(t){t&&t.c()}function M(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),Q(()=>{const o=t.$$.on_mount.map(re).filter(oe);t.$$.on_destroy?t.$$.on_destroy.push(...o):Y(o),t.$$.on_mount=[]}),r.forEach(Q)}function A(t,e){const n=t.$$;n.fragment!==null&&(Ce(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(O.push(t),be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,s,r,o,_,h=[-1]){const p=B;D(t);const a=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:X(),dirty:h,skip_bound:!1,root:e.target||p.$$.root};_&&_(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(l,v,...f)=>{const $=f.length?f[0]:v;return a.ctx&&r(a.ctx[l],a.ctx[l]=$)&&(!a.skip_bound&&a.bound[l]&&a.bound[l]($),d&&ze(t,l)),v}):[],a.update(),d=!0,Y(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const l=_e(e.target);a.fragment&&a.fragment.l(l),l.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),M(t,e.target,e.anchor),ce()}D(p)}class S{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){A(this,1),this.$destroy=y}$on(e,n){if(!oe(n))return y;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const we="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(we);const ie="/assets/logo-8b972bb6.svg",ae="/assets/github-1ea8d62e.svg";function Ee(t){let e,n,s,r,o,_,h,p,a,d,l,v,f,$,m,I,b,x,w;return{c(){e=u("header"),n=u("div"),s=u("div"),r=u("a"),o=u("img"),h=g(),p=u("h1"),p.textContent="CambioML",a=g(),d=u("nav"),l=u("a"),l.textContent="Docs",v=g(),f=u("a"),f.textContent="Tutorial",$=g(),m=u("a"),m.textContent="Community",I=g(),b=u("a"),x=u("img"),j(o.src,_=ie)||i(o,"src",_),i(o,"alt","CambioML Logo"),i(o,"class","svelte-ev35r1"),i(r,"href","https://www.cambioml.com"),i(r,"class","svelte-ev35r1"),i(s,"class","logo-bg svelte-ev35r1"),i(p,"class","logo"),i(n,"class","corner svelte-ev35r1"),i(l,"href","/docs/index.html"),i(l,"class","svelte-ev35r1"),i(f,"href","/"),i(f,"class","svelte-ev35r1"),i(m,"href","/"),i(m,"class","svelte-ev35r1"),j(x.src,w=ae)||i(x,"src",w),i(x,"alt","GitHub"),i(x,"class","svelte-ev35r1"),i(b,"href","https://github.com/cambioml"),i(b,"target","_blank"),i(b,"class","svelte-ev35r1"),i(d,"class","svelte-ev35r1"),i(e,"class","svelte-ev35r1")},m(E,C){z(E,e,C),c(e,n),c(n,s),c(s,r),c(r,o),c(n,h),c(n,p),c(e,a),c(e,d),c(d,l),c(d,v),c(d,f),c(d,$),c(d,m),c(d,I),c(d,b),c(b,x)},p:y,i:y,o:y,d(E){E&&L(e)}}}class Ie extends S{constructor(e){super(),P(this,e,null,Ee,N,{})}}function Te(t){let e,n,s,r,o,_,h,p,a,d,l,v,f,$,m,I,b,x,w,E,C;return{c(){e=u("footer"),n=u("div"),s=u("div"),r=u("a"),o=u("img"),h=g(),p=u("h1"),p.textContent="CambioML",a=g(),d=u("nav"),l=u("a"),l.textContent="Docs",v=g(),f=u("a"),f.textContent="Tutorial",$=g(),m=u("a"),m.textContent="Community",I=g(),b=u("a"),x=u("img"),E=g(),C=u("p"),C.textContent="© 2023 CambioML",j(o.src,_=ie)||i(o,"src",_),i(o,"alt","CambioML Logo"),i(o,"class","svelte-p6p3sz"),i(r,"href","https://www.cambioml.com"),i(s,"class","logo-bg svelte-p6p3sz"),i(p,"class","logo"),i(n,"class","corner svelte-p6p3sz"),i(l,"href","/docs/index.html"),i(f,"href","/"),i(m,"href","/"),j(x.src,w=ae)||i(x,"src",w),i(x,"alt","GitHub"),i(x,"class","svelte-p6p3sz"),i(b,"href","https://github.com/cambioml"),i(b,"target","_blank"),i(e,"class","svelte-p6p3sz")},m(T,ue){z(T,e,ue),c(e,n),c(n,s),c(s,r),c(r,o),c(n,h),c(n,p),c(e,a),c(e,d),c(d,l),c(d,v),c(d,f),c(d,$),c(d,m),c(d,I),c(d,b),c(b,x),c(e,E),c(e,C)},p:y,i:y,o:y,d(T){T&&L(e)}}}class ke extends S{constructor(e){super(),P(this,e,null,Te,N,{})}}function se(t,e,n){const s=t.slice();return s[3]=e[n],s}function le(t){let e,n,s;function r(){return t[2](t[3])}return{c(){e=u("li"),e.textContent=`${t[3]} `,i(e,"class","svelte-p7v5oz"),Z(e,"background-color",t[0]==t[3]?"var(--red)":"")},m(o,_){z(o,e,_),n||(s=me(e,"click",r),n=!0)},p(o,_){t=o,_&1&&Z(e,"background-color",t[0]==t[3]?"var(--red)":"")},d(o){o&&L(e),n=!1,s()}}}function Me(t){let e;return{c(){e=u("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Install the package<br/># into python virtual environment</span><span class="svelte-p7v5oz">git clone ...</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">cd plotano</span>
      <span class="svelte-p7v5oz">python app.py</span></pre>`},m(n,s){z(n,e,s)},d(n){n&&L(e)}}}function Ae(t){let e;return{c(){e=u("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Clone the repo</span><span class="svelte-p7v5oz">git clone https://github.com/CambioML/plotano.git</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">cd plotano</span><span class="svelte-p7v5oz">python app.py</span>
    </pre>`},m(n,s){z(n,e,s)},d(n){n&&L(e)}}}function Ne(t){let e;return{c(){e=u("section"),e.innerHTML=`<pre class="svelte-p7v5oz"><span class="comment svelte-p7v5oz"># Install the package</span><span class="svelte-p7v5oz">pip install pykoi</span><span class="svelte-p7v5oz"></span><span class="comment svelte-p7v5oz"># Launch it!</span><span class="svelte-p7v5oz">import pykoi as pk</span>
      </pre>`},m(n,s){z(n,e,s)},d(n){n&&L(e)}}}function Pe(t){let e,n,s,r,o,_,h,p=ne(t[1]),a=[];for(let f=0;f<p.length;f+=1)a[f]=le(se(t,p,f));function d(f,$){if(f[0]==f[1][0])return Ne;if(f[0]==f[1][1])return Ae;if(f[0]==f[1][2])return Me}let l=d(t),v=l&&l(t);return{c(){e=u("div"),n=u("div"),s=u("div"),s.textContent="Quick Start",r=g(),o=u("ul");for(let f=0;f<a.length;f+=1)a[f].c();_=g(),h=u("div"),v&&v.c(),i(s,"class","title svelte-p7v5oz"),i(o,"class","tabs svelte-p7v5oz"),i(n,"class","header svelte-p7v5oz"),i(h,"class","tabs-container svelte-p7v5oz"),i(e,"class","code-example svelte-p7v5oz")},m(f,$){z(f,e,$),c(e,n),c(n,s),c(n,r),c(n,o);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(o,null);c(e,_),c(e,h),v&&v.m(h,null)},p(f,[$]){if($&3){p=ne(f[1]);let m;for(m=0;m<p.length;m+=1){const I=se(f,p,m);a[m]?a[m].p(I,$):(a[m]=le(I),a[m].c(),a[m].m(o,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=p.length}l!==(l=d(f))&&(v&&v.d(1),v=l&&l(f),v&&(v.c(),v.m(h,null)))},i:y,o:y,d(f){f&&L(e),ve(a,f),v&&v.d()}}}function Se(t,e,n){const s=["pip"];let r=s[0];return[r,s,_=>{n(0,r=_)}]}class He extends S{constructor(e){super(),P(this,e,Se,Pe,N,{})}}function Oe(t){let e,n,s,r,o,_,h,p,a,d,l,v,f,$,m,I,b,x,w,E;return w=new He({}),{c(){e=u("div"),n=u("div"),s=u("h1"),r=F("Open Source "),o=u("br"),_=g(),h=u("div"),p=u("span"),a=F(t[0]),d=F(" "),l=g(),v=u("br"),f=F("Platform In Python"),$=g(),m=u("h3"),m.textContent=`The most flexible data labeling platform to fine-tune LLMs, prepare
      training data or validate AI models.`,I=g(),b=u("div"),b.innerHTML="<button>Get Started</button> <button>Join Community</button>",x=g(),V(w.$$.fragment),i(p,"class","highlight"),i(h,"class","typewriter svelte-2ccix7"),i(s,"class","hero-text svelte-2ccix7"),i(m,"class","subheader svelte-2ccix7"),i(b,"class","button-holder svelte-2ccix7"),i(e,"class","hero svelte-2ccix7")},m(C,T){z(C,e,T),c(e,n),c(n,s),c(s,r),c(s,o),c(s,_),c(s,h),c(h,p),c(p,a),c(p,d),c(s,l),c(s,v),c(s,f),c(n,$),c(n,m),c(n,I),c(n,b),c(e,x),M(w,e,null),E=!0},p(C,[T]){(!E||T&1)&&he(a,C[0])},i(C){E||(k(w.$$.fragment,C),E=!0)},o(C){R(w.$$.fragment,C),E=!1},d(C){C&&L(e),A(w)}}}const Re=100,Ve=75,Ge=1e3,Fe=500,De=500;function je(t,e,n){const s=["Data Collection","RLHF","Monitoring"];let r=0,o=s[r],_=0,h="",p;const a=()=>{if(_<o.length)n(0,h+=o[_]),_++;else{clearInterval(p),setTimeout(m,Ge);return}},d=()=>{if(h.length>1)n(0,h=h.substring(0,h.length-1));else{n(0,h=""),clearInterval(p),l();return}},l=()=>{r=r===s.length-1?0:r+1,o=s[r],_=0,setTimeout(f,Fe)},v=()=>{},f=()=>p=setInterval(a,Re),$=()=>setInterval(v,De),m=()=>p=setInterval(d,Ve);return $e(()=>{f(),$()}),[h]}class Be extends S{constructor(e){super(),P(this,e,je,Oe,N,{})}}function qe(t){let e,n,s;return{c(){e=u("div"),n=u("video"),j(n.src,s=Ue)||i(n,"src",s),n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,i(n,"class","video-content svelte-1m2fz0c"),i(e,"class","video-container svelte-1m2fz0c")},m(r,o){z(r,e,o),c(e,n)},p:y,i:y,o:y,d(r){r&&L(e)}}}let Ue="cambioML.mp4";class Ye extends S{constructor(e){super(),P(this,e,null,qe,N,{})}}function Je(t){let e;return{c(){e=u("div"),e.innerHTML='<div><h1 class="cta-text svelte-1p54kp0">CambioML</h1> <div class="button-holder svelte-1p54kp0"><button class="svelte-1p54kp0">Get Started</button> <button class="svelte-1p54kp0">Join Community</button></div></div>',i(e,"class","cta-container svelte-1p54kp0")},m(n,s){z(n,e,s)},p:y,i:y,o:y,d(n){n&&L(e)}}}class We extends S{constructor(e){super(),P(this,e,null,Je,N,{})}}function Ke(t){let e,n,s,r,o,_,h,p,a,d;return e=new Ie({}),s=new Be({}),o=new Ye({}),h=new We({}),a=new ke({}),{c(){V(e.$$.fragment),n=g(),V(s.$$.fragment),r=g(),V(o.$$.fragment),_=g(),V(h.$$.fragment),p=g(),V(a.$$.fragment)},m(l,v){M(e,l,v),z(l,n,v),M(s,l,v),z(l,r,v),M(o,l,v),z(l,_,v),M(h,l,v),z(l,p,v),M(a,l,v),d=!0},p:y,i(l){d||(k(e.$$.fragment,l),k(s.$$.fragment,l),k(o.$$.fragment,l),k(h.$$.fragment,l),k(a.$$.fragment,l),d=!0)},o(l){R(e.$$.fragment,l),R(s.$$.fragment,l),R(o.$$.fragment,l),R(h.$$.fragment,l),R(a.$$.fragment,l),d=!1},d(l){l&&(L(n),L(r),L(_),L(p)),A(e,l),A(s,l),A(o,l),A(h,l),A(a,l)}}}class Qe extends S{constructor(e){super(),P(this,e,null,Ke,N,{})}}new Qe({target:document.getElementById("app")});
