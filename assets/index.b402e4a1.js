import{S as p}from"./index.5cb59533.js";import{h as u,m as _,c as l}from"./components.57927f97.js";import{T as d,a as f}from"./provide.e1906a2c.js";import{_ as b}from"./elevation.4d11ec3f.js";import{d as v,r as c,b as I,e as T,o as S,l as C,j as B,G as E,h as w,p as P}from"./vendor.49f89f0d.js";function h(){const{parentProvider:e,bindParent:s}=u(d),{index:t}=_(f);if(!e||!s||!t)throw Error("<var-tab-item/> must in <var-tabs-items/>");return{index:t,tabsItems:e,bindTabsItems:s}}const A={name:{type:[String,Number]}};const{n:N,classes:$}=l("tab-item"),y=v({name:"VarTabItem",components:{VarSwipeItem:p},props:A,setup(e){const s=c(!1),t=c(!1),n=I(()=>e.name),{index:r,bindTabsItems:o}=h();return o({index:r,name:n,setCurrent:i=>{!t.value&&i&&(t.value=!0),s.value=i}}),{n:N,classes:$,current:s,initSlot:t}}});function M(e,s,t,n,r,o){const m=T("var-swipe-item");return S(),C(m,{class:P(e.classes(e.n(),[!e.current,e.n("--inactive")])),"var-tab-item-cover":""},{default:B(()=>[e.initSlot?E(e.$slots,"default",{key:0}):w("v-if",!0)]),_:3},8,["class"])}var a=b(y,[["render",M]]);a.install=function(e){e.component(a.name,a)};export{a as T};
