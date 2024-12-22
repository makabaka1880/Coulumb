const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-BptcDgKG.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-DLWw8zJ_.js","assets/modules/vue-BIAkNnlI.js","assets/modules/shiki-CzUGn5Gw.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-Cks29E8R.js","assets/index-cCE_oRNH.js","assets/index-BJRu9ja_.css","assets/SlideWrapper-DchzhrKm.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CIS_xz-5.js","assets/slidev/shortcuts-Cyg9Eyq-.js","assets/slidev/context-CqvQ2rIl.js","assets/modules/unplugin-icons-DzMnpH9l.js","assets/shortcuts-DHgzE6mW.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as g,N as D,o,c,C as e,b as _,e as a,f as P,i as C,g as n,a3 as z,z as E,k as S,B,a4 as $,T as y,l as m,F as M,h as L,t as R}from"../modules/vue-BIAkNnlI.js";import{u as T,b as A}from"./SlideWrapper-Cks29E8R.js";import{L as k,h as N,M as I,N as h,O as x,s as V,P as O,A as w,Q as W}from"../index-cCE_oRNH.js";import{b as H,G as U,c as F,u as G,r as j,a as K,S as Q,_ as X,o as Y}from"./shortcuts-Cyg9Eyq-.js";import{b as q}from"../modules/unplugin-icons-DzMnpH9l.js";import"../modules/shiki-CzUGn5Gw.js";import"./context-CqvQ2rIl.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CIS_xz-5.js";const J="/Coulumb/assets/logo-BYkHSa_O.png",Z={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ee=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:u}){const d=f,s=D(d,"modelValue",u);function i(){s.value=!1}return(p,t)=>(o(),c(z,null,[e(s)?(o(),_("div",Z,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:t[0]||(t[0]=r=>i())}),a("div",{class:C(["m-auto rounded-md bg-main shadow",d.class]),"dark:border":"~ main"},[P(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},oe=["innerHTML"],se=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:u}){const s=D(f,"modelValue",u),i=E(()=>typeof k.info=="string");return(p,t)=>(o(),c(ee,{modelValue:e(s),"onUpdate:modelValue":t[0]||(t[0]=r=>$(s)?s.value=r:null),class:"px-6 py-4"},{default:S(()=>[a("div",te,[i.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,oe)):n("v-if",!0),t[1]||(t[1]=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:J,alt:"Slidev logo"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),B("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ae=g({__name:"Controls",setup(f){const{isEmbedded:u}=N(),d=!k.drawings.presenterOnly&&!u.value,l=y();d&&I(()=>import("./DrawingControls-BptcDgKG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(p=>l.value=p.default);const s=y(),i=y();return(p,t)=>(o(),_(M,null,[l.value?(o(),c(e(l),{key:0})):n("v-if",!0),m(H),m(U),s.value?(o(),c(e(s),{key:1})):n("v-if",!0),i.value?(o(),c(e(i),{key:2,modelValue:e(h),"onUpdate:modelValue":t[0]||(t[0]=r=>$(h)?h.value=r:null)},null,8,["modelValue"])):n("v-if",!0),e(k).info?(o(),c(se,{key:3,modelValue:e(x),"onUpdate:modelValue":t[1]||(t[1]=r=>$(x)?x.value=r:null)},null,8,["modelValue"])):n("v-if",!0),m(F)],64))}}),le={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ne=g({__name:"PresenterMouse",setup(f){return(u,d)=>{const l=q;return e(V).cursor?(o(),_("div",le,[m(l,{class:"absolute stroke-white dark:stroke-black",style:L({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),_e=g({__name:"play",setup(f){const{next:u,prev:d,isPrintMode:l}=N(),{isDrawing:s}=T(),i=R();function p(b){var v;w.value||b.button===0&&((v=b.target)==null?void 0:v.id)==="slide-container"&&(b.pageX/window.innerWidth>.5?u():d())}G(i),j(),K();const t=E(()=>O.value||w.value),r=y();return(b,v)=>(o(),_(M,null,[a("div",{id:"page-root",ref_key:"root",ref:i,class:C(["grid",e(W)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(A,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"",onPointerdown:p,onContextmenu:e(Y)},{default:S(()=>[m(Q,{"render-context":"slide"}),m(ne)]),controls:S(()=>[e(l)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[t.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[m(X,{persist:t.value},null,8,["persist"])],2))]),_:1},8,["onContextmenu"]),r.value&&e(w)?(o(),c(e(r),{key:0,resize:!0})):n("v-if",!0)],2),e(l)?n("v-if",!0):(o(),c(ae,{key:0})),v[0]||(v[0]=a("div",{id:"twoslash-container"},null,-1))],64))}});export{_e as default};
