import{S as Ct,i as zt,s as Vt,l as c,m as d,p as v,h as i,q as r,b as ie,n as Be,K as Xe,u as m,a as b,v as p,c as w,J as t,w as pe,x as Rt,L as Lt,y as St,M as Ue,z as Pt,N as Mt,f as At,t as Bt,C as Tt,O as $t,P as Ft,r as K,Q as Ht}from"../chunks/index-32b719fd.js";function ft(h,a,e){const n=h.slice();return n[1]=a[e].dates,n[2]=a[e].name,n[3]=a[e].place,n[4]=a[e].position,n[5]=a[e].website,n[6]=a[e].achievements,n}function mt(h,a,e){const n=h.slice();return n[9]=a[e],n}function pt(h){let a,e=h[9]+"",n;return{c(){a=c("li"),n=m(e)},l(l){a=d(l,"LI",{});var s=v(a);n=p(s,e),s.forEach(i)},m(l,s){ie(l,a,s),t(a,n)},p(l,s){s&1&&e!==(e=l[9]+"")&&pe(n,e)},d(l){l&&i(a)}}}function gt(h){let a,e,n=h[1].start+"",l,s,o,k,I=h[1].end+"",q,Q,T,$,L,M,U=h[2]+"",Y,re,D,H=h[5]+"",ee,te,oe,A,G=h[4]+"",ae,ce,X,C=h[3]+"",W,de,j,O,J=h[6],E=[];for(let f=0;f<J.length;f+=1)E[f]=pt(mt(h,J,f));return{c(){a=c("div"),e=c("div"),l=m(n),s=m(" -"),o=c("br"),k=b(),q=m(I),Q=b(),T=c("div"),$=c("div"),L=c("div"),M=c("b"),Y=m(U),re=m(" / "),D=c("a"),ee=m(H),oe=b(),A=c("b"),ae=m(G),ce=b(),X=c("div"),W=m(C),de=b(),j=c("ul");for(let f=0;f<E.length;f+=1)E[f].c();O=b(),this.h()},l(f){a=d(f,"DIV",{class:!0});var y=v(a);e=d(y,"DIV",{class:!0});var _=v(e);l=p(_,n),s=p(_," -"),o=d(_,"BR",{}),k=w(_),q=p(_,I),_.forEach(i),Q=w(y),T=d(y,"DIV",{class:!0});var S=v(T);$=d(S,"DIV",{class:!0});var he=v($);L=d(he,"DIV",{});var ne=v(L);M=d(ne,"B",{class:!0});var P=v(M);Y=p(P,U),re=p(P," / "),D=d(P,"A",{href:!0,target:!0,class:!0});var x=v(D);ee=p(x,H),x.forEach(i),P.forEach(i),oe=w(ne),A=d(ne,"B",{class:!0});var Z=v(A);ae=p(Z,G),Z.forEach(i),ne.forEach(i),ce=w(he),X=d(he,"DIV",{});var ge=v(X);W=p(ge,C),ge.forEach(i),he.forEach(i),de=w(S),j=d(S,"UL",{class:!0});var _e=v(j);for(let F=0;F<E.length;F+=1)E[F].l(_e);_e.forEach(i),S.forEach(i),O=w(y),y.forEach(i),this.h()},h(){r(e,"class","dates svelte-spccmz"),r(D,"href",te=h[5]),r(D,"target","_blank"),r(D,"class","svelte-spccmz"),r(M,"class","lead-text svelte-spccmz"),r(A,"class","lead-text svelte-spccmz"),r($,"class","lead svelte-spccmz"),r(j,"class","achievements svelte-spccmz"),r(T,"class","info svelte-spccmz"),r(a,"class","row svelte-spccmz")},m(f,y){ie(f,a,y),t(a,e),t(e,l),t(e,s),t(e,o),t(e,k),t(e,q),t(a,Q),t(a,T),t(T,$),t($,L),t(L,M),t(M,Y),t(M,re),t(M,D),t(D,ee),t(L,oe),t(L,A),t(A,ae),t($,ce),t($,X),t(X,W),t(T,de),t(T,j);for(let _=0;_<E.length;_+=1)E[_].m(j,null);t(a,O)},p(f,y){if(y&1&&n!==(n=f[1].start+"")&&pe(l,n),y&1&&I!==(I=f[1].end+"")&&pe(q,I),y&1&&U!==(U=f[2]+"")&&pe(Y,U),y&1&&H!==(H=f[5]+"")&&pe(ee,H),y&1&&te!==(te=f[5])&&r(D,"href",te),y&1&&G!==(G=f[4]+"")&&pe(ae,G),y&1&&C!==(C=f[3]+"")&&pe(W,C),y&1){J=f[6];let _;for(_=0;_<J.length;_+=1){const S=mt(f,J,_);E[_]?E[_].p(S,y):(E[_]=pt(S),E[_].c(),E[_].m(j,null))}for(;_<E.length;_+=1)E[_].d(1);E.length=J.length}},d(f){f&&i(a),Xe(E,f)}}}function Gt(h){let a,e=h[0],n=[];for(let l=0;l<e.length;l+=1)n[l]=gt(ft(h,e,l));return{c(){a=c("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){a=d(l,"DIV",{class:!0});var s=v(a);for(let o=0;o<n.length;o+=1)n[o].l(s);s.forEach(i),this.h()},h(){r(a,"class","experience svelte-spccmz")},m(l,s){ie(l,a,s);for(let o=0;o<n.length;o+=1)n[o].m(a,null)},p(l,[s]){if(s&1){e=l[0];let o;for(o=0;o<e.length;o+=1){const k=ft(l,e,o);n[o]?n[o].p(k,s):(n[o]=gt(k),n[o].c(),n[o].m(a,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=e.length}},i:Be,o:Be,d(l){l&&i(a),Xe(n,l)}}}function jt(h,a,e){let{experience:n}=a;return h.$$set=l=>{"experience"in l&&e(0,n=l.experience)},[n]}class Ot extends Ct{constructor(a){super(),zt(this,a,jt,Gt,Vt,{experience:0})}}const Ae=(h,a)=>Math.floor(Math.random()*(a-h+1))+h;const{document:_t}=$t;function kt(h,a,e){const n=h.slice();return n[7]=a[e].gif,n[8]=a[e].x,n[9]=a[e].y,n[10]=a[e].spintime,n[2]=a[e].id,n[11]=a[e].invertRotation,n}function bt(h,a,e){const n=h.slice();return n[14]=a[e],n}function wt(h){let a,e,n,l,s;return{c(){a=c("h3"),e=c("div"),n=m("Print CV / Download as PDF"),this.h()},l(o){a=d(o,"H3",{class:!0});var k=v(a);e=d(k,"DIV",{class:!0});var I=v(e);n=p(I,"Print CV / Download as PDF"),I.forEach(i),k.forEach(i),this.h()},h(){r(e,"class","download svelte-n3k0ak"),r(a,"class","svelte-n3k0ak")},m(o,k){ie(o,a,k),t(a,e),t(e,n),l||(s=Ft(e,"click",h[5]),l=!0)},p:Be,d(o){o&&i(a),l=!1,s()}}}function yt(h){let a,e=h[14]+"",n;return{c(){a=c("div"),n=m(e),this.h()},l(l){a=d(l,"DIV",{class:!0});var s=v(a);n=p(s,e),s.forEach(i),this.h()},h(){r(a,"class","skill svelte-n3k0ak")},m(l,s){ie(l,a,s),t(a,n)},p:Be,d(l){l&&i(a)}}}function Et(h,a){let e,n,l;return{key:h,first:null,c(){e=c("img"),this.h()},l(s){e=d(s,"IMG",{class:!0,src:!0,style:!0,alt:!0}),this.h()},h(){r(e,"class","pokemon svelte-n3k0ak"),Ue(e.src,n="gifs/"+a[7])||r(e,"src",n),K(e,"position","absolute"),K(e,"top",a[9]+"px"),K(e,"left",a[8]+"px"),K(e,"animation-duration",a[10]+"ms"),K(e,"animation-direction",a[11]?"reverse":"normal"),r(e,"alt",l=a[7]),this.first=e},m(s,o){ie(s,e,o)},p(s,o){a=s,o&1&&!Ue(e.src,n="gifs/"+a[7])&&r(e,"src",n),o&1&&K(e,"top",a[9]+"px"),o&1&&K(e,"left",a[8]+"px"),o&1&&K(e,"animation-duration",a[10]+"ms"),o&1&&K(e,"animation-direction",a[11]?"reverse":"normal"),o&1&&l!==(l=a[7])&&r(e,"alt",l)},d(s){s&&i(e)}}}function xt(h){let a,e,n,l,s,o,k,I,q,Q,T,$,L,M,U,Y,re,D,H,ee,te,oe,A,G,ae,ce,X,C,W,de,j,O,J,E,f,y,_,S,he,ne,P,x,Z,ge,_e,F,ke,Te,$e,be,Fe,He,le,we,Ge,je,ve,Oe,se,ye,xe,Ne,ue,qe,Ee,N=[],Ze=new Map,ze,z=!h[1]&&wt(h),Ie=h[3],V=[];for(let u=0;u<Ie.length;u+=1)V[u]=yt(bt(h,Ie,u));ue=new Ot({props:{experience:h[4]}});let Ve=h[0];const Ke=u=>u[2];for(let u=0;u<Ve.length;u+=1){let R=kt(h,Ve,u),g=Ke(R);Ze.set(g,N[u]=Et(g,R))}return{c(){a=b(),e=c("div"),n=c("div"),l=c("div"),s=c("div"),z&&z.c(),o=b(),k=c("h1"),I=m("Vladimir Polovtsev (rzru)"),q=b(),Q=c("h2"),T=m("Lead Frontend Developer / Middle Rust Developer"),$=b(),L=c("h3"),M=c("b"),U=m("Location:"),Y=m(" Berlin, Germany"),re=b(),D=c("h3"),H=c("b"),ee=m("Languages:"),te=m(" English: C1, German: B1, Russian: C2"),oe=b(),A=c("h3"),G=c("b"),ae=m("Education:"),ce=m(" Tertiary, College of Culture And Arts, Arkhangelsk, Russia, 2017"),X=b(),C=c("h3"),W=c("b"),de=m("Contacts:"),j=m(" E-mail: "),O=c("a"),J=m("rzzzzru@gmail.com"),E=m(`,
					Telegram: `),f=c("a"),y=m("@soryulangley"),_=b(),S=c("img"),ne=b(),P=c("div"),x=c("div"),Z=c("b"),ge=m("Summary:"),_e=b(),F=c("div"),ke=c("p"),Te=m(`I'm a developer with a solid grasp of the entire web stack and a deep understanding of
						computer science. I love tackling unique challenges and crafting intricate, engaging
						interfaces.`),$e=b(),be=c("p"),Fe=m(`I've gained a lot of experience in areas like optimization, animation, architecture,
						testing, microfrontends, and library development \u2014 along with some extras like cooking
						and video games. I also mentor junior devs, conduct interviews, report, give talks, and,
						above all, communicate \u2014 a lot. I have a background in theater, so soft skills and
						connecting with people come naturally to me. Oh, and I can write backend code (Node /
						Rust) and speak SQL like it's my native tongue!`),He=b(),le=c("div"),we=c("b"),Ge=m("Skills:"),je=b(),ve=c("div");for(let u=0;u<V.length;u+=1)V[u].c();Oe=b(),se=c("div"),ye=c("b"),xe=m("Work experience:"),Ne=b(),Rt(ue.$$.fragment),qe=b(),Ee=c("div");for(let u=0;u<N.length;u+=1)N[u].c();this.h()},l(u){Lt('[data-svelte="svelte-1p84lhn"]',_t.head).forEach(i),a=w(u),e=d(u,"DIV",{class:!0});var g=v(e);n=d(g,"DIV",{class:!0});var fe=v(n);l=d(fe,"DIV",{class:!0});var Re=v(l);s=d(Re,"DIV",{class:!0});var B=v(s);z&&z.l(B),o=w(B),k=d(B,"H1",{class:!0});var Ye=v(k);I=p(Ye,"Vladimir Polovtsev (rzru)"),Ye.forEach(i),q=w(B),Q=d(B,"H2",{class:!0});var et=v(Q);T=p(et,"Lead Frontend Developer / Middle Rust Developer"),et.forEach(i),$=w(B),L=d(B,"H3",{class:!0});var Qe=v(L);M=d(Qe,"B",{});var tt=v(M);U=p(tt,"Location:"),tt.forEach(i),Y=p(Qe," Berlin, Germany"),Qe.forEach(i),re=w(B),D=d(B,"H3",{class:!0});var We=v(D);H=d(We,"B",{});var at=v(H);ee=p(at,"Languages:"),at.forEach(i),te=p(We," English: C1, German: B1, Russian: C2"),We.forEach(i),oe=w(B),A=d(B,"H3",{class:!0});var Je=v(A);G=d(Je,"B",{});var nt=v(G);ae=p(nt,"Education:"),nt.forEach(i),ce=p(Je," Tertiary, College of Culture And Arts, Arkhangelsk, Russia, 2017"),Je.forEach(i),X=w(B),C=d(B,"H3",{class:!0});var De=v(C);W=d(De,"B",{});var lt=v(W);de=p(lt,"Contacts:"),lt.forEach(i),j=p(De," E-mail: "),O=d(De,"A",{href:!0,class:!0});var st=v(O);J=p(st,"rzzzzru@gmail.com"),st.forEach(i),E=p(De,`,
					Telegram: `),f=d(De,"A",{href:!0,target:!0,class:!0});var it=v(f);y=p(it,"@soryulangley"),it.forEach(i),De.forEach(i),B.forEach(i),_=w(Re),S=d(Re,"IMG",{class:!0,src:!0,alt:!0}),Re.forEach(i),ne=w(fe),P=d(fe,"DIV",{class:!0});var Ce=v(P);x=d(Ce,"DIV",{class:!0});var Le=v(x);Z=d(Le,"B",{class:!0});var rt=v(Z);ge=p(rt,"Summary:"),rt.forEach(i),_e=w(Le),F=d(Le,"DIV",{class:!0});var Se=v(F);ke=d(Se,"P",{class:!0});var ot=v(ke);Te=p(ot,`I'm a developer with a solid grasp of the entire web stack and a deep understanding of
						computer science. I love tackling unique challenges and crafting intricate, engaging
						interfaces.`),ot.forEach(i),$e=w(Se),be=d(Se,"P",{class:!0});var ct=v(be);Fe=p(ct,`I've gained a lot of experience in areas like optimization, animation, architecture,
						testing, microfrontends, and library development \u2014 along with some extras like cooking
						and video games. I also mentor junior devs, conduct interviews, report, give talks, and,
						above all, communicate \u2014 a lot. I have a background in theater, so soft skills and
						connecting with people come naturally to me. Oh, and I can write backend code (Node /
						Rust) and speak SQL like it's my native tongue!`),ct.forEach(i),Se.forEach(i),Le.forEach(i),He=w(Ce),le=d(Ce,"DIV",{class:!0});var Pe=v(le);we=d(Pe,"B",{class:!0});var dt=v(we);Ge=p(dt,"Skills:"),dt.forEach(i),je=w(Pe),ve=d(Pe,"DIV",{class:!0});var ht=v(ve);for(let me=0;me<V.length;me+=1)V[me].l(ht);ht.forEach(i),Pe.forEach(i),Oe=w(Ce),se=d(Ce,"DIV",{class:!0});var Me=v(se);ye=d(Me,"B",{class:!0});var vt=v(ye);xe=p(vt,"Work experience:"),vt.forEach(i),Ne=w(Me),St(ue.$$.fragment,Me),Me.forEach(i),Ce.forEach(i),fe.forEach(i),qe=w(g),Ee=d(g,"DIV",{});var ut=v(Ee);for(let me=0;me<N.length;me+=1)N[me].l(ut);ut.forEach(i),g.forEach(i),this.h()},h(){_t.title="CV | Vladimir Polovtsev",r(k,"class","svelte-n3k0ak"),r(Q,"class","svelte-n3k0ak"),r(L,"class","svelte-n3k0ak"),r(D,"class","svelte-n3k0ak"),r(A,"class","svelte-n3k0ak"),r(O,"href","mailto:rzzzzru@gmail.com"),r(O,"class","svelte-n3k0ak"),r(f,"href","https://t.me/soryulangley"),r(f,"target","_blank"),r(f,"class","svelte-n3k0ak"),r(C,"class","svelte-n3k0ak"),r(s,"class","header-text svelte-n3k0ak"),r(S,"class","me svelte-n3k0ak"),Ue(S.src,he="images/me.jpg")||r(S,"src",he),r(S,"alt","it's me with a cat!"),r(l,"class","header svelte-n3k0ak"),r(Z,"class","block-header svelte-n3k0ak"),r(ke,"class","svelte-n3k0ak"),r(be,"class","svelte-n3k0ak"),r(F,"class","profile svelte-n3k0ak"),r(x,"class","block svelte-n3k0ak"),r(we,"class","block-header svelte-n3k0ak"),r(ve,"class","skills svelte-n3k0ak"),r(le,"class","block svelte-n3k0ak"),r(ye,"class","block-header svelte-n3k0ak"),r(se,"class","block svelte-n3k0ak"),r(P,"class","body"),r(n,"class","container svelte-n3k0ak"),r(e,"class","layout svelte-n3k0ak")},m(u,R){ie(u,a,R),ie(u,e,R),t(e,n),t(n,l),t(l,s),z&&z.m(s,null),t(s,o),t(s,k),t(k,I),t(s,q),t(s,Q),t(Q,T),t(s,$),t(s,L),t(L,M),t(M,U),t(L,Y),t(s,re),t(s,D),t(D,H),t(H,ee),t(D,te),t(s,oe),t(s,A),t(A,G),t(G,ae),t(A,ce),t(s,X),t(s,C),t(C,W),t(W,de),t(C,j),t(C,O),t(O,J),t(C,E),t(C,f),t(f,y),t(l,_),t(l,S),t(n,ne),t(n,P),t(P,x),t(x,Z),t(Z,ge),t(x,_e),t(x,F),t(F,ke),t(ke,Te),t(F,$e),t(F,be),t(be,Fe),t(P,He),t(P,le),t(le,we),t(we,Ge),t(le,je),t(le,ve);for(let g=0;g<V.length;g+=1)V[g].m(ve,null);t(P,Oe),t(P,se),t(se,ye),t(ye,xe),t(se,Ne),Pt(ue,se,null),t(e,qe),t(e,Ee);for(let g=0;g<N.length;g+=1)N[g].m(Ee,null);ze=!0},p(u,[R]){if(u[1]?z&&(z.d(1),z=null):z?z.p(u,R):(z=wt(u),z.c(),z.m(s,o)),R&8){Ie=u[3];let g;for(g=0;g<Ie.length;g+=1){const fe=bt(u,Ie,g);V[g]?V[g].p(fe,R):(V[g]=yt(fe),V[g].c(),V[g].m(ve,null))}for(;g<V.length;g+=1)V[g].d(1);V.length=Ie.length}R&1&&(Ve=u[0],N=Mt(N,R,Ke,1,u,Ve,Ze,Ee,Ht,Et,null,kt))},i(u){ze||(At(ue.$$.fragment,u),ze=!0)},o(u){Bt(ue.$$.fragment,u),ze=!1},d(u){u&&i(a),u&&i(e),z&&z.d(),Xe(V,u),Tt(ue);for(let R=0;R<N.length;R+=1)N[R].d()}}}const Nt=300,It=85;let Dt=120;function qt(h,a,e){let n;const l=["JavaScript","TypeScript","Node.JS","Rust","React","Vue","Svelte","VueX","Redux","MobX","GraphQL","HTML","CSS","SQL","*NIX","GIT","CI/CD","Tokio","NPM","Cargo"],s=["bulbasaur.gif","charmander.gif","eevee.gif","squirtle.gif","pikachu.gif"],o=[{dates:{start:"07/2024",end:"To Date"},name:"HelloFresh",place:"Berlin, Germany",position:"Software Staff Engineer",website:"https://www.hellofresh.com/",achievements:["Participated in the development of the architecture of new product and technical initiatives","Continuously involved in the RFC and ADR writing and review cycle","Completely rewrote one of the crucial pages from scratch along the way getting rid of legacy code and implementing best practices","Completed a POC and ultimately integrated GraphQL to the organisations technical stack","Presented as a speaker at internal technical meetups, sharing insights and best practices","Conducted coding and architectural interviews, mentored junior and mid-level developers"]},{dates:{start:"09/2022",end:"07/2024"},name:"HelloFresh",place:"Berlin, Germany",position:"Senior Frontend Developer",website:"https://www.hellofresh.com/",achievements:["Reduced web application load time by ~40% within the initial two months of working in the company","Led the web implementation of key C-Level initiatives","Led diverse technical initiatives including TypeScript migration, Design System migration, RTL migration and more","Authored technical documentation, RFCs, and ADRs for all ongoing initiatives","Was a part of the team that started the adoption of GraphQL throughout the organization","Presented as a speaker at internal technical meetups, sharing insights and best practices","Conducted coding and architectural interviews, mentored junior and mid-level developers"]},{dates:{start:"11/2021",end:"04/2022"},name:"OZON Technologies",place:"Moscow, Russia",position:"Lead Frontend Developer",website:"https://www.ozon.ru/",achievements:["Authored technical documentation, RFCs, and ADRs for all ongoing initiatives","Moderated code review sessions and Agile project team meetings","Presented as a speaker at internal technical meetups","Conducted coding and architectural interviews, mentored junior and mid-level developers"]},{dates:{start:"06/2020",end:"11/2021"},name:"OZON Technologies",place:"Moscow, Russia",position:"Senior Frontend Developer",website:"https://www.ozon.ru/",achievements:["Engineered logistics systems using intricate graph algorithms to optimize efficiency","Developed custom UI components within a proprietary UI-kit solution","Identified and resolved intricate technical challenges through thorough analysis","Optimized architecture and development stack to enhance efficiency and scalability"]},{dates:{start:"07/2018",end:"06/2020"},name:"data3consulting",place:"Moscow, Russia",position:"Team Lead",website:"https://data3.ru/",achievements:["Directed and mentored a high-performing team of 5+ developers, fostering collaboration and code excellence","Engineered a Web CMS utilizing Laravel and React.js, delivering robust and scalable solutions"]},{dates:{start:"06/2017",end:"07/2018"},name:"LavkaLavka",place:"Moscow, Russia",position:"Full-Stack Web Developer",website:"https://vlavke.ru/",achievements:["Engineered a dynamic Single Page Application (SPA) using Vue.js, delivering an immersive user experience","Innovated user-friendly cryptocurrency projects including exchangers and market price analyzers, employing PHP and JavaScript for robust functionality","Designed and implemented a Cryptocurrency exchange module to facilitate seamless transactions","Created a comprehensive monitoring and analysis system for cryptocurrency exchanges, ensuring real-time insights into market trends"]}];let k=[],I=1;setInterval(()=>{k.length>=Dt&&k.shift(),e(0,k=[...k,{id:I,gif:s[Ae(0,s.length-1)],x:Ae(0,document.body.scrollWidth-It),y:Ae(0,document.body.scrollHeight-It),spintime:Ae(200,2e3),invertRotation:Math.random()<.5}]),e(2,I=I===Dt?1:I+1)},Nt);const q=()=>window.print();return e(1,n="ontouchstart"in window),[k,n,I,l,o,q]}class Wt extends Ct{constructor(a){super(),zt(this,a,qt,xt,Vt,{})}}export{Wt as default};
