import{S as zt,i as Vt,s as Ct,l as c,m as d,p as v,h as i,q as r,b as ie,n as Ae,K as Xe,u as m,a as b,v as p,c as w,J as t,w as pe,x as St,L as Lt,y as Rt,M as Ue,z as Mt,N as Pt,f as Tt,t as At,C as Bt,O as $t,P as Ht,r as K,Q as Ft}from"../chunks/index-32b719fd.js";function ft(h,a,e){const l=h.slice();return l[1]=a[e].dates,l[2]=a[e].name,l[3]=a[e].place,l[4]=a[e].position,l[5]=a[e].website,l[6]=a[e].achievements,l}function mt(h,a,e){const l=h.slice();return l[9]=a[e],l}function pt(h){let a,e=h[9]+"",l;return{c(){a=c("li"),l=m(e)},l(n){a=d(n,"LI",{});var s=v(a);l=p(s,e),s.forEach(i)},m(n,s){ie(n,a,s),t(a,l)},p(n,s){s&1&&e!==(e=n[9]+"")&&pe(l,e)},d(n){n&&i(a)}}}function gt(h){let a,e,l=h[1].start+"",n,s,o,k,I=h[1].end+"",N,Q,B,$,L,P,U=h[2]+"",Y,re,D,F=h[5]+"",ee,te,oe,T,G=h[4]+"",ae,ce,X,z=h[3]+"",W,de,j,x,J=h[6],y=[];for(let f=0;f<J.length;f+=1)y[f]=pt(mt(h,J,f));return{c(){a=c("div"),e=c("div"),n=m(l),s=m(" -"),o=c("br"),k=b(),N=m(I),Q=b(),B=c("div"),$=c("div"),L=c("div"),P=c("b"),Y=m(U),re=m(" / "),D=c("a"),ee=m(F),oe=b(),T=c("b"),ae=m(G),ce=b(),X=c("div"),W=m(z),de=b(),j=c("ul");for(let f=0;f<y.length;f+=1)y[f].c();x=b(),this.h()},l(f){a=d(f,"DIV",{class:!0});var E=v(a);e=d(E,"DIV",{class:!0});var _=v(e);n=p(_,l),s=p(_," -"),o=d(_,"BR",{}),k=w(_),N=p(_,I),_.forEach(i),Q=w(E),B=d(E,"DIV",{class:!0});var R=v(B);$=d(R,"DIV",{class:!0});var he=v($);L=d(he,"DIV",{});var le=v(L);P=d(le,"B",{class:!0});var M=v(P);Y=p(M,U),re=p(M," / "),D=d(M,"A",{href:!0,target:!0,class:!0});var O=v(D);ee=p(O,F),O.forEach(i),M.forEach(i),oe=w(le),T=d(le,"B",{class:!0});var Z=v(T);ae=p(Z,G),Z.forEach(i),le.forEach(i),ce=w(he),X=d(he,"DIV",{});var ge=v(X);W=p(ge,z),ge.forEach(i),he.forEach(i),de=w(R),j=d(R,"UL",{class:!0});var _e=v(j);for(let H=0;H<y.length;H+=1)y[H].l(_e);_e.forEach(i),R.forEach(i),x=w(E),E.forEach(i),this.h()},h(){r(e,"class","dates svelte-spccmz"),r(D,"href",te=h[5]),r(D,"target","_blank"),r(D,"class","svelte-spccmz"),r(P,"class","lead-text svelte-spccmz"),r(T,"class","lead-text svelte-spccmz"),r($,"class","lead svelte-spccmz"),r(j,"class","achievements svelte-spccmz"),r(B,"class","info svelte-spccmz"),r(a,"class","row svelte-spccmz")},m(f,E){ie(f,a,E),t(a,e),t(e,n),t(e,s),t(e,o),t(e,k),t(e,N),t(a,Q),t(a,B),t(B,$),t($,L),t(L,P),t(P,Y),t(P,re),t(P,D),t(D,ee),t(L,oe),t(L,T),t(T,ae),t($,ce),t($,X),t(X,W),t(B,de),t(B,j);for(let _=0;_<y.length;_+=1)y[_].m(j,null);t(a,x)},p(f,E){if(E&1&&l!==(l=f[1].start+"")&&pe(n,l),E&1&&I!==(I=f[1].end+"")&&pe(N,I),E&1&&U!==(U=f[2]+"")&&pe(Y,U),E&1&&F!==(F=f[5]+"")&&pe(ee,F),E&1&&te!==(te=f[5])&&r(D,"href",te),E&1&&G!==(G=f[4]+"")&&pe(ae,G),E&1&&z!==(z=f[3]+"")&&pe(W,z),E&1){J=f[6];let _;for(_=0;_<J.length;_+=1){const R=mt(f,J,_);y[_]?y[_].p(R,E):(y[_]=pt(R),y[_].c(),y[_].m(j,null))}for(;_<y.length;_+=1)y[_].d(1);y.length=J.length}},d(f){f&&i(a),Xe(y,f)}}}function Gt(h){let a,e=h[0],l=[];for(let n=0;n<e.length;n+=1)l[n]=gt(ft(h,e,n));return{c(){a=c("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){a=d(n,"DIV",{class:!0});var s=v(a);for(let o=0;o<l.length;o+=1)l[o].l(s);s.forEach(i),this.h()},h(){r(a,"class","experience svelte-spccmz")},m(n,s){ie(n,a,s);for(let o=0;o<l.length;o+=1)l[o].m(a,null)},p(n,[s]){if(s&1){e=n[0];let o;for(o=0;o<e.length;o+=1){const k=ft(n,e,o);l[o]?l[o].p(k,s):(l[o]=gt(k),l[o].c(),l[o].m(a,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=e.length}},i:Ae,o:Ae,d(n){n&&i(a),Xe(l,n)}}}function jt(h,a,e){let{experience:l}=a;return h.$$set=n=>{"experience"in n&&e(0,l=n.experience)},[l]}class xt extends zt{constructor(a){super(),Vt(this,a,jt,Gt,Ct,{experience:0})}}const Te=(h,a)=>Math.floor(Math.random()*(a-h+1))+h;const{document:_t}=$t;function kt(h,a,e){const l=h.slice();return l[7]=a[e].gif,l[8]=a[e].x,l[9]=a[e].y,l[10]=a[e].spintime,l[2]=a[e].id,l[11]=a[e].invertRotation,l}function bt(h,a,e){const l=h.slice();return l[14]=a[e],l}function wt(h){let a,e,l,n,s;return{c(){a=c("h3"),e=c("div"),l=m("Print CV / Download as PDF"),this.h()},l(o){a=d(o,"H3",{class:!0});var k=v(a);e=d(k,"DIV",{class:!0});var I=v(e);l=p(I,"Print CV / Download as PDF"),I.forEach(i),k.forEach(i),this.h()},h(){r(e,"class","download svelte-n3k0ak"),r(a,"class","svelte-n3k0ak")},m(o,k){ie(o,a,k),t(a,e),t(e,l),n||(s=Ht(e,"click",h[5]),n=!0)},p:Ae,d(o){o&&i(a),n=!1,s()}}}function Et(h){let a,e=h[14]+"",l;return{c(){a=c("div"),l=m(e),this.h()},l(n){a=d(n,"DIV",{class:!0});var s=v(a);l=p(s,e),s.forEach(i),this.h()},h(){r(a,"class","skill svelte-n3k0ak")},m(n,s){ie(n,a,s),t(a,l)},p:Ae,d(n){n&&i(a)}}}function yt(h,a){let e,l,n;return{key:h,first:null,c(){e=c("img"),this.h()},l(s){e=d(s,"IMG",{class:!0,src:!0,style:!0,alt:!0}),this.h()},h(){r(e,"class","pokemon svelte-n3k0ak"),Ue(e.src,l="gifs/"+a[7])||r(e,"src",l),K(e,"position","absolute"),K(e,"top",a[9]+"px"),K(e,"left",a[8]+"px"),K(e,"animation-duration",a[10]+"ms"),K(e,"animation-direction",a[11]?"reverse":"normal"),r(e,"alt",n=a[7]),this.first=e},m(s,o){ie(s,e,o)},p(s,o){a=s,o&1&&!Ue(e.src,l="gifs/"+a[7])&&r(e,"src",l),o&1&&K(e,"top",a[9]+"px"),o&1&&K(e,"left",a[8]+"px"),o&1&&K(e,"animation-duration",a[10]+"ms"),o&1&&K(e,"animation-direction",a[11]?"reverse":"normal"),o&1&&n!==(n=a[7])&&r(e,"alt",n)},d(s){s&&i(e)}}}function Ot(h){let a,e,l,n,s,o,k,I,N,Q,B,$,L,P,U,Y,re,D,F,ee,te,oe,T,G,ae,ce,X,z,W,de,j,x,J,y,f,E,_,R,he,le,M,O,Z,ge,_e,H,ke,Be,$e,be,He,Fe,ne,we,Ge,je,ve,xe,se,Ee,Oe,qe,ue,Ne,ye,q=[],Ze=new Map,Ve,V=!h[1]&&wt(h),Ie=h[3],C=[];for(let u=0;u<Ie.length;u+=1)C[u]=Et(bt(h,Ie,u));ue=new xt({props:{experience:h[4]}});let Ce=h[0];const Ke=u=>u[2];for(let u=0;u<Ce.length;u+=1){let S=kt(h,Ce,u),g=Ke(S);Ze.set(g,q[u]=yt(g,S))}return{c(){a=b(),e=c("div"),l=c("div"),n=c("div"),s=c("div"),V&&V.c(),o=b(),k=c("h1"),I=m("Vladimir Polovtsev (rzru)"),N=b(),Q=c("h2"),B=m("Lead Frontend Developer / Middle Rust Developer"),$=b(),L=c("h3"),P=c("b"),U=m("Location:"),Y=m(" Berlin, Germany"),re=b(),D=c("h3"),F=c("b"),ee=m("Languages:"),te=m(" English: C1, German: B1, Russian: C2"),oe=b(),T=c("h3"),G=c("b"),ae=m("Education:"),ce=m(" Tertiary, College of Culture And Arts, Arkhangelsk, Russia, 2017"),X=b(),z=c("h3"),W=c("b"),de=m("Contacts:"),j=m(" E-mail: "),x=c("a"),J=m("rzzzzru@gmail.com"),y=m(`,
					Telegram: `),f=c("a"),E=m("@soryulangley"),_=b(),R=c("img"),le=b(),M=c("div"),O=c("div"),Z=c("b"),ge=m("Summary:"),_e=b(),H=c("div"),ke=c("p"),Be=m(`I'm a developer with a solid grasp of the entire web stack and a deep understanding of
						computer science. I love tackling unique challenges and crafting intricate, engaging
						interfaces.`),$e=b(),be=c("p"),He=m(`I've gained a lot of experience in areas like optimization, animation, architecture,
						testing, microfrontends, and library development\u2014along with some fun extras like cooking
						and video games. I also mentor junior devs, conduct interviews, report, give talks, and,
						above all, communicate\u2014a lot. Thanks to my background in theater, soft skills and
						connecting with people come naturally to me. Oh, and I can write backend code and speak
						SQL like it's my native tongue!`),Fe=b(),ne=c("div"),we=c("b"),Ge=m("Skills:"),je=b(),ve=c("div");for(let u=0;u<C.length;u+=1)C[u].c();xe=b(),se=c("div"),Ee=c("b"),Oe=m("Work experience:"),qe=b(),St(ue.$$.fragment),Ne=b(),ye=c("div");for(let u=0;u<q.length;u+=1)q[u].c();this.h()},l(u){Lt('[data-svelte="svelte-1p84lhn"]',_t.head).forEach(i),a=w(u),e=d(u,"DIV",{class:!0});var g=v(e);l=d(g,"DIV",{class:!0});var fe=v(l);n=d(fe,"DIV",{class:!0});var Se=v(n);s=d(Se,"DIV",{class:!0});var A=v(s);V&&V.l(A),o=w(A),k=d(A,"H1",{class:!0});var Ye=v(k);I=p(Ye,"Vladimir Polovtsev (rzru)"),Ye.forEach(i),N=w(A),Q=d(A,"H2",{class:!0});var et=v(Q);B=p(et,"Lead Frontend Developer / Middle Rust Developer"),et.forEach(i),$=w(A),L=d(A,"H3",{class:!0});var Qe=v(L);P=d(Qe,"B",{});var tt=v(P);U=p(tt,"Location:"),tt.forEach(i),Y=p(Qe," Berlin, Germany"),Qe.forEach(i),re=w(A),D=d(A,"H3",{class:!0});var We=v(D);F=d(We,"B",{});var at=v(F);ee=p(at,"Languages:"),at.forEach(i),te=p(We," English: C1, German: B1, Russian: C2"),We.forEach(i),oe=w(A),T=d(A,"H3",{class:!0});var Je=v(T);G=d(Je,"B",{});var lt=v(G);ae=p(lt,"Education:"),lt.forEach(i),ce=p(Je," Tertiary, College of Culture And Arts, Arkhangelsk, Russia, 2017"),Je.forEach(i),X=w(A),z=d(A,"H3",{class:!0});var De=v(z);W=d(De,"B",{});var nt=v(W);de=p(nt,"Contacts:"),nt.forEach(i),j=p(De," E-mail: "),x=d(De,"A",{href:!0,class:!0});var st=v(x);J=p(st,"rzzzzru@gmail.com"),st.forEach(i),y=p(De,`,
					Telegram: `),f=d(De,"A",{href:!0,target:!0,class:!0});var it=v(f);E=p(it,"@soryulangley"),it.forEach(i),De.forEach(i),A.forEach(i),_=w(Se),R=d(Se,"IMG",{class:!0,src:!0,alt:!0}),Se.forEach(i),le=w(fe),M=d(fe,"DIV",{class:!0});var ze=v(M);O=d(ze,"DIV",{class:!0});var Le=v(O);Z=d(Le,"B",{class:!0});var rt=v(Z);ge=p(rt,"Summary:"),rt.forEach(i),_e=w(Le),H=d(Le,"DIV",{class:!0});var Re=v(H);ke=d(Re,"P",{class:!0});var ot=v(ke);Be=p(ot,`I'm a developer with a solid grasp of the entire web stack and a deep understanding of
						computer science. I love tackling unique challenges and crafting intricate, engaging
						interfaces.`),ot.forEach(i),$e=w(Re),be=d(Re,"P",{class:!0});var ct=v(be);He=p(ct,`I've gained a lot of experience in areas like optimization, animation, architecture,
						testing, microfrontends, and library development\u2014along with some fun extras like cooking
						and video games. I also mentor junior devs, conduct interviews, report, give talks, and,
						above all, communicate\u2014a lot. Thanks to my background in theater, soft skills and
						connecting with people come naturally to me. Oh, and I can write backend code and speak
						SQL like it's my native tongue!`),ct.forEach(i),Re.forEach(i),Le.forEach(i),Fe=w(ze),ne=d(ze,"DIV",{class:!0});var Me=v(ne);we=d(Me,"B",{class:!0});var dt=v(we);Ge=p(dt,"Skills:"),dt.forEach(i),je=w(Me),ve=d(Me,"DIV",{class:!0});var ht=v(ve);for(let me=0;me<C.length;me+=1)C[me].l(ht);ht.forEach(i),Me.forEach(i),xe=w(ze),se=d(ze,"DIV",{class:!0});var Pe=v(se);Ee=d(Pe,"B",{class:!0});var vt=v(Ee);Oe=p(vt,"Work experience:"),vt.forEach(i),qe=w(Pe),Rt(ue.$$.fragment,Pe),Pe.forEach(i),ze.forEach(i),fe.forEach(i),Ne=w(g),ye=d(g,"DIV",{});var ut=v(ye);for(let me=0;me<q.length;me+=1)q[me].l(ut);ut.forEach(i),g.forEach(i),this.h()},h(){_t.title="CV | Vladimir Polovtsev",r(k,"class","svelte-n3k0ak"),r(Q,"class","svelte-n3k0ak"),r(L,"class","svelte-n3k0ak"),r(D,"class","svelte-n3k0ak"),r(T,"class","svelte-n3k0ak"),r(x,"href","mailto:rzzzzru@gmail.com"),r(x,"class","svelte-n3k0ak"),r(f,"href","https://t.me/soryulangley"),r(f,"target","_blank"),r(f,"class","svelte-n3k0ak"),r(z,"class","svelte-n3k0ak"),r(s,"class","header-text svelte-n3k0ak"),r(R,"class","me svelte-n3k0ak"),Ue(R.src,he="images/me.jpg")||r(R,"src",he),r(R,"alt","it's me with a cat!"),r(n,"class","header svelte-n3k0ak"),r(Z,"class","block-header svelte-n3k0ak"),r(ke,"class","svelte-n3k0ak"),r(be,"class","svelte-n3k0ak"),r(H,"class","profile svelte-n3k0ak"),r(O,"class","block svelte-n3k0ak"),r(we,"class","block-header svelte-n3k0ak"),r(ve,"class","skills svelte-n3k0ak"),r(ne,"class","block svelte-n3k0ak"),r(Ee,"class","block-header svelte-n3k0ak"),r(se,"class","block svelte-n3k0ak"),r(M,"class","body"),r(l,"class","container svelte-n3k0ak"),r(e,"class","layout svelte-n3k0ak")},m(u,S){ie(u,a,S),ie(u,e,S),t(e,l),t(l,n),t(n,s),V&&V.m(s,null),t(s,o),t(s,k),t(k,I),t(s,N),t(s,Q),t(Q,B),t(s,$),t(s,L),t(L,P),t(P,U),t(L,Y),t(s,re),t(s,D),t(D,F),t(F,ee),t(D,te),t(s,oe),t(s,T),t(T,G),t(G,ae),t(T,ce),t(s,X),t(s,z),t(z,W),t(W,de),t(z,j),t(z,x),t(x,J),t(z,y),t(z,f),t(f,E),t(n,_),t(n,R),t(l,le),t(l,M),t(M,O),t(O,Z),t(Z,ge),t(O,_e),t(O,H),t(H,ke),t(ke,Be),t(H,$e),t(H,be),t(be,He),t(M,Fe),t(M,ne),t(ne,we),t(we,Ge),t(ne,je),t(ne,ve);for(let g=0;g<C.length;g+=1)C[g].m(ve,null);t(M,xe),t(M,se),t(se,Ee),t(Ee,Oe),t(se,qe),Mt(ue,se,null),t(e,Ne),t(e,ye);for(let g=0;g<q.length;g+=1)q[g].m(ye,null);Ve=!0},p(u,[S]){if(u[1]?V&&(V.d(1),V=null):V?V.p(u,S):(V=wt(u),V.c(),V.m(s,o)),S&8){Ie=u[3];let g;for(g=0;g<Ie.length;g+=1){const fe=bt(u,Ie,g);C[g]?C[g].p(fe,S):(C[g]=Et(fe),C[g].c(),C[g].m(ve,null))}for(;g<C.length;g+=1)C[g].d(1);C.length=Ie.length}S&1&&(Ce=u[0],q=Pt(q,S,Ke,1,u,Ce,Ze,ye,Ft,yt,null,kt))},i(u){Ve||(Tt(ue.$$.fragment,u),Ve=!0)},o(u){At(ue.$$.fragment,u),Ve=!1},d(u){u&&i(a),u&&i(e),V&&V.d(),Xe(C,u),Bt(ue);for(let S=0;S<q.length;S+=1)q[S].d()}}}const qt=300,It=85;let Dt=120;function Nt(h,a,e){let l;const n=["JavaScript","TypeScript","Node.JS","Rust","React","Vue","Svelte","VueX","Redux","MobX","GraphQL","HTML","CSS","SQL","*NIX","GIT","CI/CD","Tokio","NPM","Cargo"],s=["bulbasaur.gif","charmander.gif","eevee.gif","squirtle.gif","pikachu.gif"],o=[{dates:{start:"07/2024",end:"To Date"},name:"HelloFresh",place:"Berlin, Germany",position:"Software Staff Engineer",website:"https://www.hellofresh.com/",achievements:[]},{dates:{start:"09/2022",end:"07/2024"},name:"HelloFresh",place:"Berlin, Germany",position:"Senior Frontend Developer",website:"https://www.hellofresh.com/",achievements:["Reduced web application load time by ~40% within the initial two months of working in the company","Led the web implementation of key C-Level initiatives","Led diverse technical initiatives including TypeScript migration, Design System migration, RTL migration and more","Authored technical documentation, RFCs, and ADRs for all ongoing initiatives","Was a part of the team that started the adoption of GraphQL throughout the organization","Presented as a speaker at internal technical meetups, sharing insights and best practices","Conducted coding and architectural interviews, mentored junior and mid-level developers"]},{dates:{start:"11/2021",end:"04/2022"},name:"OZON Technologies",place:"Moscow, Russia",position:"Lead Frontend Developer",website:"https://www.ozon.ru/",achievements:["Authored technical documentation, RFCs, and ADRs for all ongoing initiatives","Moderated code review sessions and Agile project team meetings","Presented as a speaker at internal technical meetups","Conducted coding and architectural interviews, mentored junior and mid-level developers"]},{dates:{start:"06/2020",end:"11/2021"},name:"OZON Technologies",place:"Moscow, Russia",position:"Senior Frontend Developer",website:"https://www.ozon.ru/",achievements:["Engineered logistics systems using intricate graph algorithms to optimize efficiency","Developed custom UI components within a proprietary UI-kit solution","Identified and resolved intricate technical challenges through thorough analysis","Optimized architecture and development stack to enhance efficiency and scalability"]},{dates:{start:"07/2018",end:"06/2020"},name:"data3consulting",place:"Moscow, Russia",position:"Team Lead",website:"https://data3.ru/",achievements:["Directed and mentored a high-performing team of 5+ developers, fostering collaboration and code excellence","Engineered a Web CMS utilizing Laravel and React.js, delivering robust and scalable solutions"]},{dates:{start:"06/2017",end:"07/2018"},name:"LavkaLavka",place:"Moscow, Russia",position:"Full-Stack Web Developer",website:"https://vlavke.ru/",achievements:["Engineered a dynamic Single Page Application (SPA) using Vue.js, delivering an immersive user experience","Innovated user-friendly cryptocurrency projects including exchangers and market price analyzers, employing PHP and JavaScript for robust functionality","Designed and implemented a Cryptocurrency exchange module to facilitate seamless transactions","Created a comprehensive monitoring and analysis system for cryptocurrency exchanges, ensuring real-time insights into market trends"]}];let k=[],I=1;setInterval(()=>{k.length>=Dt&&k.shift(),e(0,k=[...k,{id:I,gif:s[Te(0,s.length-1)],x:Te(0,document.body.scrollWidth-It),y:Te(0,document.body.scrollHeight-It),spintime:Te(200,2e3),invertRotation:Math.random()<.5}]),e(2,I=I===Dt?1:I+1)},qt);const N=()=>window.print();return e(1,l="ontouchstart"in window),[k,l,I,n,o,N]}class Wt extends zt{constructor(a){super(),Vt(this,a,Nt,Ot,Ct,{})}}export{Wt as default};
