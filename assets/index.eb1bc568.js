import{m as C}from"./elements.579153f5.js";import{a as F,c as b}from"./components.cd8ba2fd.js";import{d as N,P as w,q as x,r as E,C as P,o as R,c as U,i as a,V as e,j as n,F as B,m as c,t as p}from"./vendor.4fe81855.js";import{R as z}from"./index.e09eeda3.js";import{S as D}from"./index.090c5b6b.js";import{B as g}from"./index.995aacb5.js";import{A as h}from"./AppType.14280320.js";import{d as j}from"./index.079ade67.js";import{w as $,g as A}from"./utils.dea25200.js";import{u as L,a as v,_ as O,b as q,c as K}from"./en-US.307522bf.js";import"./index.bd1a1c4d.js";import"./elevation.46d11dfe.js";import"./provide.9b5e83d0.js";import"./index.46338cdd.js";import"./index.afd38bc1.js";/* empty css               */import"./index.f32c995c.js";const{n:G}=b("style-provider"),l=N({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(o,{slots:r}){return()=>w("div",{class:G(),style:C(o.styleVars)},F(r.default))}}),y=[];function u(o={}){y.forEach(t=>document.documentElement.style.removeProperty(t)),y.length=0;const r=C(o);Object.entries(r).forEach(([t,s])=>{document.documentElement.style.setProperty(t,s),y.push(t)})}u.Component=l;l.install=function(o){o.component(l.name,l)};u.install=function(o){o.component(l.name,l)};var H={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},I={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:_,use:J,pack:i,packs:de,merge:fe}=L(),M=o=>{K(o),J(o)};v("zh-CN",O);v("en-US",q);_("zh-CN",H);_("en-US",I);const ye={setup(o){const r=u.Component,t=x({score:5,license:!0}),s=E(null),T={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},V=()=>{s.value=s.value?null:T};let d=null;const k={"--color-primary":"#3f51b5"},S=()=>{d=d?null:k,u(d)};return $(M),P(()=>{u(A()==="darkThemes"?j:null)}),(Q,m)=>(R(),U(B,null,[a(e(h),null,{default:n(()=>[c(p(e(i).componentCall),1)]),_:1}),a(e(r),{"style-vars":s.value},{default:n(()=>[a(e(z),{modelValue:e(t).score,"onUpdate:modelValue":m[0]||(m[0]=f=>e(t).score=f)},null,8,["modelValue"]),a(e(D),{modelValue:e(t).license,"onUpdate:modelValue":m[1]||(m[1]=f=>e(t).license=f)},null,8,["modelValue"]),a(e(g),{style:{"margin-top":"10px"},type:"primary",block:"",onClick:V},{default:n(()=>[c(p(e(i).toggleTheme),1)]),_:1})]),_:1},8,["style-vars"]),a(e(h),null,{default:n(()=>[c(p(e(i).functionCall),1)]),_:1}),a(e(g),{type:"primary",block:"",onClick:S},{default:n(()=>[c(p(e(i).toggleRootTheme),1)]),_:1})],64))}};export{ye as default};
