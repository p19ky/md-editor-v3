import{d as K,r as X,s as Y,a as U,f as Z,w as ee,o as te,b as le,c as D,p as G,ap as W,i as z,aq as oe,ar as ne}from"./index-mstXR5Qg.js";import{i as J,v as se,P as ie,w as re}from"./index-BABYOLP-.js";const ae=`.${G}-preview > [data-line]`,F=(l,e)=>+getComputedStyle(l).getPropertyValue(e).replace("px",""),ge=(l,e)=>{const E=oe(()=>{l.removeEventListener("scroll",o),l.addEventListener("scroll",o),e.removeEventListener("scroll",o),e.addEventListener("scroll",o)},50),o=g=>{const h=l.clientHeight,C=e.clientHeight,s=l.scrollHeight,f=e.scrollHeight,c=(s-h)/(f-C);g.target===l?(e.removeEventListener("scroll",o),e.scrollTo({top:l.scrollTop/c}),E()):(l.removeEventListener("scroll",o),l.scrollTo({top:e.scrollTop*c}),E())};return[()=>{E().finally(()=>{l.dispatchEvent(new Event("scroll"))})},()=>{l.removeEventListener("scroll",o),e.removeEventListener("scroll",o)}]},he=(l,e,E)=>{const{view:o}=E,g=ne(),h=d=>o.lineBlockAt(o.state.doc.line(d+1).from).top,C=d=>o.lineBlockAt(o.state.doc.line(d+1).from).bottom;let s=[],f=[],c=[];const b=()=>{s=[],f=Array.from(e.querySelectorAll(ae)),c=f.map(a=>Number(a.dataset.line));const d=[...c],{lines:r}=o.state.doc;let i=d.shift()||0,n=d.shift()||r;for(let a=0;a<r;a++)a===n&&(i=a,n=d.shift()||r),s.push({start:i,end:n-1})},p=(d,r)=>{let i=1;for(let n=f.length-1;n-1>=0;n--){const a=f[n],I=f[n-1];if(a.offsetTop+a.offsetHeight>r&&I.offsetTop<r){i=Number(I.dataset.line);break}}for(let n=s.length-1;n>=0;n--){const a=C(s[n].end),I=h(s[n].start);if(a>d&&I<=d){i=i<s[n].start?i:s[n].start;break}}return i};let L=0,t=0;const m=()=>{var d,r,i;if(t!==0)return!1;L++;const{scrollDOM:n,contentHeight:a}=o;let I=F(e,"padding-top");const j=o.lineBlockAtHeight(n.scrollTop),{number:_}=o.state.doc.lineAt(j.from),O=s[_-1];if(!O)return!1;let w=1;const B=e.querySelector(`[data-line="${O.start}"]`)||((d=e.firstElementChild)==null?void 0:d.firstElementChild),v=e.querySelector(`[data-line="${O.end+1}"]`)||((r=e.lastElementChild)==null?void 0:r.lastElementChild),T=n.scrollHeight-n.clientHeight,k=e.scrollHeight-e.clientHeight;let S=h(O.start),x=C(O.end),R=B.offsetTop,M=v.offsetTop-R;S===0&&(R=0,B===v?(I=0,x=a-n.offsetHeight,M=k):M=v.offsetTop),w=(n.scrollTop-S)/(x-S);const P=v==((i=e.lastElementChild)==null?void 0:i.lastElementChild)?v.offsetTop+v.clientHeight:v.offsetTop;if(x>=T||P>k){const $=p(T,k);S=h($),w=(n.scrollTop-S)/(T-S);const N=e.querySelector(`[data-line="${$}"]`);S>0&&N&&(R=N.offsetTop),M=k-R+F(e,"padding-top")}const q=R-I+M*w;g(e,q,()=>{L--})},A=()=>{var d,r,i,n,a,I;if(L!==0)return;t++;const{scrollDOM:j}=o,_=e.scrollTop,O=e.scrollHeight,w=j.scrollHeight-j.clientHeight,B=e.scrollHeight-e.clientHeight;let v=(d=e.firstElementChild)==null?void 0:d.firstElementChild,T=(r=e.firstElementChild)==null?void 0:r.lastElementChild;if(c.length>0){let N=Math.ceil(c[c.length-1]*(_/O)),u=c.findLastIndex(H=>H<=N);u=u===-1?0:u,N=c[u];for(let H=u;H>=0&&H<c.length;)if(f[H].offsetTop>_){if(H-1>=0){H--;continue}N=-1,u=H;break}else{if(H+1<c.length&&f[H+1].offsetTop<_){H++;continue}N=c[H],u=H;break}switch(u){case-1:{v=(i=e.firstElementChild)==null?void 0:i.firstElementChild,T=f[u];break}case c.length-1:{v=f[u],T=(n=e.firstElementChild)==null?void 0:n.lastElementChild;break}default:v=f[u],T=f[u+1===f.length?u:u+1]}}let k=v===((a=e.firstElementChild)==null?void 0:a.firstElementChild)?0:v.offsetTop-F(v,"margin-top"),S=T.offsetTop,x=0;const{start:R,end:M}=s[Number(v.dataset.line||0)];let P=h(R);const q=h(M+1===o.state.doc.lines?M:M+1);let $=0;if(q>w||T.offsetTop+T.offsetHeight>B){const N=p(w,B),u=e.querySelector(`[data-line="${N}"]`);k=u?u.offsetTop-F(u,"margin-top"):k,P=h(N),x=(_-k)/(B-k),$=w-P}else v===((I=e.firstElementChild)==null?void 0:I.firstElementChild)?(v===T&&(S=T.offsetTop+T.offsetHeight+ +getComputedStyle(T).marginBottom.replace("px","")),$=q,x=Math.max(_/S,0)):(x=Math.max((_-k)/(S-k),0),$=q-P);g(l,P+$*x,()=>{t--})},y=d=>{var r;const{scrollDOM:i,contentHeight:n}=o,a=i.clientHeight;if(n<=a||e.firstElementChild.clientHeight<=e.clientHeight||o.state.doc.lines<=((r=s[s.length-1])==null?void 0:r.end))return!1;d.target===l?m():A()};return[()=>{b(),l.addEventListener("scroll",y),e.addEventListener("scroll",y),l.dispatchEvent(new Event("scroll"))},()=>{l.removeEventListener("scroll",y),e.removeEventListener("scroll",y)}]},ce={tocItem:{type:Object,default:()=>({})},mdHeadingId:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},scrollElementOffsetTop:{type:Number,default:0}},Q=K({props:ce,setup(l){const e=z("scrollElementRef"),E=z("roorNodeRef");return()=>{const{tocItem:o,mdHeadingId:g,onClick:h,scrollElementOffsetTop:C}=l;return D("div",{class:[`${G}-catalog-link`,o.active&&`${G}-catalog-active`],onClick:s=>{h(s,o),s.stopPropagation();const f=g(o.text,o.level,o.index),c=E.value.getElementById(f),b=e.value;if(c&&b){let p=c.offsetParent,L=c.offsetTop;if(b.contains(p))for(;p&&b!=p;)L+=p==null?void 0:p.offsetTop,p=p==null?void 0:p.offsetParent;const t=c.previousElementSibling;let m=0;t||(m=F(c,"margin-top")),b==null||b.scrollTo({top:L-C-m,behavior:"smooth"})}}},[D("span",{title:o.text},[o.text]),D("div",{class:`${G}-catalog-wrapper`},[o.children&&o.children.map(s=>D(Q,{mdHeadingId:g,key:`${o.text}-link-${s.level}-${s.text}`,tocItem:s,onClick:h,scrollElementOffsetTop:C},null))])])}}}),de=Q,fe={editorId:{type:String},class:{type:String,default:""},mdHeadingId:{type:Function,default:l=>l},scrollElement:{type:[String,Object]},theme:{type:String,default:"light"},offsetTop:{type:Number,default:20},scrollElementOffsetTop:{type:Number,default:0},onClick:{type:Function},onActive:{type:Function},isScrollElementInShadow:{type:Boolean,default:!1}},V=K({name:"MdCatalog",props:fe,emits:["onClick","onActive"],setup(l,e){const E=l.editorId,o=`#${E}-preview-wrapper`,g=X({list:[],show:!1,scrollElement:l.scrollElement||o}),h=Y(),C=U(),s=U(),f=U();W("scrollElementRef",s),W("roorNodeRef",f);const c=Z(()=>{const t=[];return g.list.forEach((m,A)=>{const{text:y,level:d}=m,r={level:d,text:y,index:A+1,active:h.value===m};if(t.length===0)t.push(r);else{let i=t[t.length-1];if(r.level>i.level)for(let n=i.level+1;n<=6;n++){const{children:a}=i;if(!a){i.children=[r];break}if(i=a[a.length-1],r.level<=i.level){a.push(r);break}}else t.push(r)}}),t}),b=()=>{var t;if(g.scrollElement instanceof HTMLElement)return g.scrollElement;let m=document;return(g.scrollElement===o||l.isScrollElementInShadow)&&(m=(t=C.value)==null?void 0:t.getRootNode()),m.querySelector(g.scrollElement)},p=t=>{if(t.length===0)return g.list=[],!1;const{activeHead:m}=t.reduce((A,y,d)=>{var r;const i=(r=f.value)==null?void 0:r.getElementById(l.mdHeadingId(y.text,y.level,d+1));if(i instanceof HTMLElement){const n=re(i,s.value);if(n<l.offsetTop&&n>A.minTop)return{activeHead:y,minTop:n}}return A},{activeHead:t[0],minTop:Number.MIN_SAFE_INTEGER});h.value=m,g.list=t},L=()=>{p(g.list)};return ee(()=>h.value,t=>{const m=t?{...t}:void 0;l.onActive?l.onActive(m):e.emit("onActive",m)}),te(()=>{f.value=C.value.getRootNode();let t=b();s.value=t,J.on(E,{name:se,callback:m=>{t=b(),s.value=t,t==null||t.removeEventListener("scroll",L),p(m),t==null||t.addEventListener("scroll",L)}}),J.emit(E,ie),t==null||t.addEventListener("scroll",L)}),le(()=>{var t;(t=s.value)==null||t.removeEventListener("scroll",L)}),()=>D("div",{class:[`${G}-catalog${l.theme==="dark"?"-dark":""}`,`${l.class}`],ref:C},[c.value.map(t=>D(de,{mdHeadingId:l.mdHeadingId,tocItem:t,key:`link-${t.level}-${t.text}`,onClick:(m,A)=>{l.onClick?l.onClick(m,A):e.emit("onClick",m,A)},scrollElementOffsetTop:l.scrollElementOffsetTop},null))])}});V.install=l=>(l.component(V.name,V),l);export{V as M,ge as a,he as s};
