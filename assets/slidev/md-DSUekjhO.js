import{d as m,z as v,o as d,b as k,e as t,f as x,h as g,c as y,k as $,C as n,B as i,q as b,s as C}from"../modules/vue-BIAkNnlI.js";import{u as c,f as _}from"./context-CqvQ2rIl.js";import"../index-cCE_oRNH.js";import"../modules/shiki-CzUGn5Gw.js";function u(e){return e.startsWith("/")?"/Coulumb/"+e.slice(1):e}function w(e,l=!1){const o=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),r={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?l?`linear-gradient(#0005, #0008), url(${u(e)})`:`url("${u(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const B={class:"my-auto w-full"},h=m({__name:"cover",props:{background:{default:""}},setup(e){c();const l=e,o=v(()=>w(l.background,!0));return(r,a)=>(d(),k("div",{class:"slidev-layout cover",style:g(o.value)},[t("div",B,[x(r.$slots,"default")])],4))}}),T={__name:"slides.md__slidev_1",setup(e){const{$slidev:l,$nav:o,$clicksContext:r,$clicks:a,$page:z,$renderContext:P,$frontmatter:f}=c();return r.setup(),(S,s)=>(d(),y(h,b(C(n(_)(n(f),0))),{default:$(()=>[s[2]||(s[2]=t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1)),s[3]||(s[3]=t("link",{rel:"stylesheet",href:"/styles/style.css"},null,-1)),s[4]||(s[4]=t("h1",null,"库仑定律与静电场",-1)),s[5]||(s[5]=t("p",null,"Coulumb’s Law and SEFs",-1)),t("button",{onClick:s[0]||(s[0]=(...p)=>n(o).next&&n(o).next(...p))},s[1]||(s[1]=[t("div",{class:"pt-24"},[t("i",null,[i("Press "),t("kbd",null,"space"),i(" or click to page "),t("i",{class:"fa fa-chevron-right fa-fade",style:{"font-size":"13px"}})])],-1)]))]),_:1},16))}};export{T as default};