function J(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(K)}function Z(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let v;function pt(t,e){return v||(v=document.createElement("a")),v.href=e,t===v.href}function tt(t){return Object.keys(t).length===0}function gt(t,e,n,i){if(t){const l=Q(t,e,n,i);return t[0](l)}}function Q(t,e,n,i){return t[1]&&i?Y(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const f=[],c=Math.max(e.dirty.length,l.length);for(let o=0;o<c;o+=1)f[o]=e.dirty[o]|l[o];return f}return e.dirty|l}return e.dirty}function wt(t,e,n,i,l,f){if(l){const c=Q(e,n,i,f);t.p(c,l)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let N=!1;function et(){N=!0}function nt(){N=!1}function it(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const s=e[r].claim_order,a=(l>0&&e[n[l]].claim_order<=s?l+1:it(1,l,d=>e[n[d]].claim_order,s))-1;i[r]=n[a]+1;const _=a+1;n[_]=r,l=Math.max(_,l)}const f=[],c=[];let o=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(f.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);f.reverse(),c.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<c.length;r++){for(;s<f.length&&c[r].claim_order>=f[s].claim_order;)s++;const a=s<f.length?f[s]:null;t.insertBefore(c[r],a)}}function ct(t,e){if(N){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){N&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function Et(){return P(" ")}function vt(){return P("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,i,l=!1){ft(t);const f=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function ut(t,e,n,i){return R(t,l=>l.nodeName===e,l=>{const f=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];n[o.name]||f.push(o.name)}f.forEach(c=>l.removeAttribute(c))},()=>i(e))}function jt(t,e,n){return ut(t,e,n,ot)}function at(t,e){return R(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(e),!0)}function Nt(t){return at(t," ")}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let b;function w(t){b=t}function z(){if(!b)throw new Error("Function called outside component initialization");return b}function qt(t){z().$$.on_mount.push(t)}function Bt(t){z().$$.after_update.push(t)}function Lt(t,e){return z().$$.context.set(t,e),e}const x=[],I=[],A=[],G=[],W=Promise.resolve();let L=!1;function U(){L||(L=!0,W.then(V))}function Ot(){return U(),W}function O(t){A.push(t)}const B=new Set;let S=0;function V(){const t=b;do{for(;S<x.length;){const e=x[S];S++,w(e),dt(e.$$)}for(w(null),x.length=0,S=0;I.length;)I.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];B.has(n)||(B.add(n),n())}A.length=0}while(x.length);for(;G.length;)G.pop()();L=!1,B.clear(),w(t)}function dt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const j=new Set;let g;function Pt(){g={r:0,c:[],p:g}}function zt(){g.r||$(g.c),g=g.p}function X(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Dt(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ft=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ht(t,e){t.d(1),e.delete(t.key)}function It(t,e,n,i,l,f,c,o,r,s,a,_){let d=t.length,m=f.length,h=d;const M={};for(;h--;)M[t[h].key]=h;const k=[],C=new Map,T=new Map;for(h=m;h--;){const u=_(l,f,h),y=n(u);let p=c.get(y);p?i&&p.p(u,e):(p=s(y,u),p.c()),C.set(y,k[h]=p),y in M&&T.set(y,Math.abs(h-M[y]))}const D=new Set,F=new Set;function q(u){X(u,1),u.m(o,a),c.set(u.key,u),a=u.first,m--}for(;d&&m;){const u=k[m-1],y=t[d-1],p=u.key,E=y.key;u===y?(a=u.first,d--,m--):C.has(E)?!c.has(p)||D.has(p)?q(u):F.has(E)?d--:T.get(p)>T.get(E)?(F.add(p),q(u)):(D.add(E),d--):(r(y,c),d--)}for(;d--;){const u=t[d];C.has(u.key)||r(u,c)}for(;m;)q(k[m-1]);return k}function Gt(t,e){const n={},i={},l={$$scope:1};let f=t.length;for(;f--;){const c=t[f],o=e[f];if(o){for(const r in c)r in o||(i[r]=1);for(const r in o)l[r]||(n[r]=o[r],l[r]=1);t[f]=o}else for(const r in c)l[r]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Jt(t){return typeof t=="object"&&t!==null?t:{}}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:l,on_mount:f,on_destroy:c,after_update:o}=t.$$;l&&l.m(e,n),i||O(()=>{const r=f.map(K).filter(Z);c?c.push(...r):$(r),t.$$.on_mount=[]}),o.forEach(O)}function ht(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(x.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,l,f,c,o=[-1]){const r=b;w(t);const s=t.$$={fragment:null,ctx:null,props:f,update:J,not_equal:l,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&l(s.ctx[_],s.ctx[_]=h)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](h),a&&mt(t,_)),d}):[],s.update(),a=!0,$(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){et();const _=st(e.target);s.fragment&&s.fragment.l(_),_.forEach(lt)}else s.fragment&&s.fragment.c();e.intro&&X(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),nt(),V()}w(r)}class Wt{$destroy(){ht(this,1),this.$destroy=J}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Gt as A,Jt as B,ht as C,Y as D,Ot as E,gt as F,wt as G,bt as H,xt as I,ct as J,kt as K,Tt as L,pt as M,It as N,Ft as O,St as P,Ht as Q,$ as R,Wt as S,Z as T,Et as a,$t as b,Nt as c,zt as d,vt as e,X as f,Pt as g,lt as h,Rt as i,Lt as j,Bt as k,ot as l,jt as m,J as n,qt as o,st as p,At as q,Ct as r,yt as s,Dt as t,P as u,at as v,Mt as w,Kt as x,Qt as y,_t as z};
