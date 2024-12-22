import{d as I,z as g,o as v,b as m,e as u,C as N,F as B,x as C,U as T,Q as z,R as F,i as f,h as D,t as E,I as P,n as R,K,L as V}from"../modules/vue-BIAkNnlI.js";import{G as U,I as j,C as H,_ as q}from"../index-cCE_oRNH.js";const G=["title"],Q={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},X={"text-primary":""},J={op50:"","text-sm":""},O={key:1,op50:"","flex-auto":"",pl1:""},W={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},Y=["min","max"],Z=I({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(L){const d=L,t=g(()=>d.clicksContext.total),k=g(()=>U(0,d.clicksContext.clicksStart,t.value)),p=g(()=>t.value-k.value+1),i=g({get(){return d.clicksContext.current>t.value?-1:d.clicksContext.current},set(s){d.clicksContext.current=s}}),b=g(()=>j(k.value,t.value+1));function x(){d.readonly||(i.value<0||i.value>t.value)&&(i.value=0)}return(s,n)=>(v(),m("div",{class:f(["flex gap-1 items-center select-none",p.value&&d.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${p.value}`},[u("div",Q,[n[4]||(n[4]=u("div",{class:"i-carbon:cursor-1 text-sm op50"},null,-1)),i.value>=0&&i.value!==N(H)&&s.active?(v(),m(B,{key:0},[n[2]||(n[2]=u("div",{"flex-auto":""},null,-1)),u("span",X,C(i.value),1),n[3]||(n[3]=u("span",{op25:"","text-sm":""},"/",-1)),u("span",J,C(t.value),1)],64)):(v(),m("div",O,C(t.value),1))]),u("div",W,[(v(!0),m(B,null,T(b.value,o=>(v(),m("div",{key:o,border:"y main","of-hidden":"",relative:"",class:f([o===0?"rounded-l border-l":"",o===t.value?"rounded-r border-r":""]),style:D({width:p.value>0?`${1/p.value*100}%`:"100%"})},[u("div",{absolute:"","inset-0":"",class:f(o<=i.value&&s.active?"bg-primary op15":"")},null,2),u("div",{class:f([+o==+i.value&&s.active?"text-primary font-bold op100 border-primary":"op30 border-main",o===0?"rounded-l":"",o===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},C(o),3)],6))),128)),z(u("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>i.value=o),class:f(["range",s.readonly?"pointer-events-none":""]),type:"range",min:k.value,max:t.value,step:1,absolute:"","inset-0":"","z-label":"",op0:"",style:D({"--thumb-width":`${1/(p.value+1)*100}%`}),onMousedown:x,onFocus:n[1]||(n[1]=o=>{var h;return(h=o.currentTarget)==null?void 0:h.blur()})},null,46,Y),[[F,i.value]])])],10,G))}}),ne=q(Z,[["__scopeId","data-v-b214048c"]]),ee=["innerHTML"],te=["textContent"],oe=["textContent"],M="slidev-note-fade",y="slidev-note-click-mark",ae=I({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(L,{emit:d}){const t=L,k=d,p=g(()=>{var s;return t.clicksContext!=null&&((s=t.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),i=E(null);function b(){var $,A;if(!i.value||!p.value)return;const s=Array.from(i.value.querySelectorAll(`.${y}`)),n=new Map,o=new Map;let h=0;for(const r of s){const a=Number(r.dataset.clicks);n.set(r,a);let l=r,e=r.parentElement;for(;e&&l!==i.value;)o.has(e)||o.set(e,[[null,h]]),o.get(e).push([l,a]),l=e,e=e.parentElement;h=a}const S=new Map;for(const[r,a]of o){let l=!1,e=0;for(const c of Array.from(r.childNodes)){let _=!1;for(;c===(($=a[e+1])==null?void 0:$[0]);)_=!0,e++;if(_)continue;let w=c;if(c.nodeType===3){if(!((A=c.textContent)!=null&&A.trim()))continue;w=document.createElement("span"),w.textContent=c.textContent,r.insertBefore(w,c),c.remove()}l||(l=e===0),S.set(w,a[e][1])}l||(a[0][1]=-1)}return r=>{const a=t.highlight;for(const[l,e]of o)l.classList.toggle(M,a&&!e.some(([c,_])=>_===r));for(const[l,e]of S)l.classList.toggle(M,a&&e!==r);for(const[l,e]of n)l.classList.remove(M),l.classList.toggle(`${y}-past`,a&&e<r),l.classList.toggle(`${y}-active`,a&&e===r),l.classList.toggle(`${y}-next`,a&&e===r+1),l.classList.toggle(`${y}-future`,a&&e>r+1),l.ondblclick=a?c=>{k("markerDblclick",c,e),!c.defaultPrevented&&(t.clicksContext.current=e,c.stopPropagation(),c.stopImmediatePropagation())}:null,l.onclick=a?c=>{k("markerClick",c,e)}:null,a&&t.autoScroll&&e===r&&l.scrollIntoView({block:"center",behavior:"smooth"})}}const x=E();return P(()=>[t.noteHtml,t.highlight],()=>{R(()=>{x.value=b()})},{immediate:!0}),K(()=>{b()}),V(()=>{var n,o;const s=((n=t.clicksContext)==null?void 0:n.current)??H;(o=x.value)==null||o.call(x,s)}),(s,n)=>s.noteHtml?(v(),m("div",{key:0,ref_key:"noteDisplay",ref:i,class:f(["prose overflow-auto outline-none slidev-note",[t.class,p.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,ee)):s.note?(v(),m("div",{key:1,class:f(["prose overflow-auto outline-none slidev-note",t.class])},[u("p",{textContent:C(s.note)},null,8,te)],2)):(v(),m("div",{key:2,class:f(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[u("p",{textContent:C(t.placeholder||"No notes.")},null,8,oe)],2))}});export{ne as C,ae as _};
