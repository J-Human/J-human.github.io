import{r as f,o as u,c as _,a as c,b as i,w as m,p as h,d as v,e as d,f as I,g as L,h as g,F as $,i as E,j as C,k as N}from"./vendor.50d9e387.js";const P=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};P();var S="/assets/favicon.fff3c3ff.ico";var y=(t,s)=>{for(const[n,o]of s)t[n]=o;return t};const O={},R=t=>(h("data-v-4df34f49"),t=t(),v(),t),V=R(()=>c("img",{id:"logo",alt:"logo",src:S},null,-1)),j={id:"navbar"},D={id:"navbar-links"},B=d("About me"),F=d("Contact");function K(t,s){const n=f("router-link");return u(),_("header",null,[V,c("nav",j,[c("ul",D,[c("li",null,[i(n,{to:"/"},{default:m(()=>[B]),_:1})]),c("li",null,[i(n,{to:"/contact"},{default:m(()=>[F]),_:1})])])])])}var T=y(O,[["render",K],["__scopeId","data-v-4df34f49"]]);const l=I(0),p=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function q(){L(p,t=>{l.value=t.key===p[l.value]?l.value+1:0,l.value===p.length&&alert("\u2728")})}const H=g({setup(t){return q(),(s,n)=>{const o=f("router-view");return u(),_($,null,[i(T),i(o)],64)}}}),U="modulepreload",w={},W="/",k=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${W}${o}`,o in w)return;w[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":U,e||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),e)return new Promise((x,A)=>{a.addEventListener("load",x),a.addEventListener("error",A)})})).then(()=>s())};const b=t=>(h("data-v-a241fcc4"),t=t(),v(),t),J=b(()=>c("h2",null,[d("Justin "),c("span",null,"(he/him)")],-1)),z=b(()=>c("p",null," Hi there. I make software. I have experience in open source, backend, and a good amount of web development with React and Vue. I also like to game and travel. ",-1)),G=[J,z],M=g({setup(t){return(s,n)=>(u(),_("div",null,G))}});var Q=y(M,[["__scopeId","data-v-a241fcc4"]]);const X=[{name:"contact",path:"/contact",component:()=>k(()=>import("./contact.3315b222.js"),["assets/contact.3315b222.js","assets/contact.168373c1.css","assets/vendor.50d9e387.js"]),props:!0},{name:"index",path:"/",component:Q,props:!0},{name:"all",path:"/:all(.*)*",component:()=>k(()=>import("./[...all].61622eeb.js"),["assets/[...all].61622eeb.js","assets/[...all].33dca440.css","assets/vendor.50d9e387.js"]),props:!0}];var Y=E({history:C(),routes:X});N(H).use(Y).mount("#app");export{y as _};