import{d as N,K as V,J as T,o as z,c as M,F as L,$ as E,v as p,a0 as f,a1 as P,l as w,Q as D,a2 as F,k,e as s,B as g,q as G,s as K,C as $}from"./modules/vue-BIAkNnlI.js";import{m as J,J as R,K as j,C as q}from"./index-cCE_oRNH.js";import{u as B,f as O}from"./slidev/context-CqvQ2rIl.js";import{I as Q}from"./slidev/default-D2LrWKIv.js";import"./modules/shiki-CzUGn5Gw.js";const U=N({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(i){const l=i,{$clicksContext:o}=B(),d=J();let m=+l.size;return Number.isNaN(m)&&(console.warn(`[slidev] Invalid size for VClickGap: ${l.size}`),m=1),V(()=>{const c=o.currentOffset+m-1;o.register(d,{max:c,delta:m})}),T(()=>{o.unregister(d)}),(c,a)=>(z(),M(L))}}),S=["ul","ol"],X=N({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var C,A;const i=+this.every,l=R(this.at),o=typeof l=="string";if(!l){console.warn("[slidev] Invalid at prop for v-clicks component:",l);return}const d=E("click"),m=(r,e)=>D(r,[[d,e,"",{hide:this.hide,fade:this.fade}]]),c=r=>r.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?c(e.children):[e]);let a=(A=(C=this.$slots).default)==null?void 0:A.call(C);if(!a)return;a=c(j(a));const y=(r,e=1)=>c(r).map(t=>{if(!f(t))return t;if(S.includes(t.type)&&Array.isArray(t.children)){const h=u(t.children,e+1);return p(t,{},h)}return p(t)});let v=1,n=0;const u=(r,e=1)=>c(r).map(t=>{if(!f(t)||t.type===P)return t;const h=+l+Math.ceil(v++/i)-1;let _;e<+this.depth&&Array.isArray(t.children)?_=p(t,{},y(t.children,e)):_=p(t);const b=h-n;return n=h,m(_,o?b>=0?`+${b}`:`${b}`:h)}),x=()=>w(U,{size:+l+Math.ceil((v-1)/i)-1-n});if(this.handleSpecialElements){if(a.length===1&&S.includes(a[0].type)&&Array.isArray(a[0].children))return p(a[0],{},[...u(a[0].children),x()]);if(a.length===1&&a[0].type==="table"){const r=a[0];if(Array.isArray(r.children))return p(r,{},r.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?p(e,{},[...u(e.children),x()]):p(e):e))}}return[...u(a),x()]}}),H=N({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:i=>p("span",i)}},render(){return p(X,{every:q,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var i,l;return(l=(i=this.$slots).default)==null?void 0:l.call(i).map(o=>o.type===F?this.wrapText(o):o)}})}}),W="/Coulumb/assets/Proton.png",Y="/Coulumb/assets/Electron.png",ls={__name:"slides.md__slidev_2",setup(i){const{$slidev:l,$nav:o,$clicksContext:d,$clicks:m,$page:c,$renderContext:a,$frontmatter:y}=B();return d.setup(),(v,n)=>{const u=H;return z(),M(Q,G(K($(O)($(y),1))),{default:k(()=>[n[2]||(n[2]=s("h1",null,"静电是什么?",-1)),n[3]||(n[3]=s("p",null,"和电流相对的就是静电，单独的电荷。我们一般在冬天被电到也是因为静电电荷形成的电势差导致的。 在自然界中，一个静电荷可以是一个电子或者一个质子。",-1)),w(u,null,{default:k(()=>n[0]||(n[0]=[s("div",{class:"h-container"},[s("div",null,[s("h2",null,"质子"),s("p",null,[s("strong",null,"质子 (Proton)"),g(" 是一种自然界中的电荷，携带正电荷。它的电荷量为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"+"),s("mn",null,"1.602"),s("mo",null,"×"),s("msup",null,[s("mn",null,"10"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"19")])])]),s("annotation",{encoding:"application/x-tex"},"+1.602 \\times 10^{-19}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"+"),s("span",{class:"mord"},"1.602"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"19")])])])])])])])])])])]),g(" 库伦。质子存在于原子核中，能够形成静电荷。当质子失去电子时，它形成一个正的静电荷。")])]),s("img",{src:W,style:{height:"200px"}})],-1)])),_:1}),w(u,null,{default:k(()=>n[1]||(n[1]=[s("div",{class:"h-container"},[s("div",null,[s("h2",null,"电子"),s("p",null,[s("strong",null,"电子 (Electron)"),g(" 是一种自然界中的电荷，携带负电荷。它的电荷量为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("mn",null,"1.602"),s("mo",null,"×"),s("msup",null,[s("mn",null,"10"),s("mrow",null,[s("mo",null,"−"),s("mn",null,"19")])])]),s("annotation",{encoding:"application/x-tex"},"-1.602 \\times 10^{-19}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1.602"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"−"),s("span",{class:"mord mtight"},"19")])])])])])])])])])])]),g(" 库伦。电子围绕原子核运动，能够形成静电荷。当电子被孤立时，它会产生负的静电荷。")])]),s("img",{src:Y,style:{height:"200px"}})],-1)])),_:1})]),_:1},16)}}};export{ls as default};
