import{P as t}from"./Pagination.fcc1b965.js";import{w as n}from"./en-US.fc126591.js";import{u as o,p as s}from"./index.9ab321e3.js";import{_ as r}from"./elevation.703f44d6.js";import{d as c,o as _,k as f,c as g,h as m,F as h}from"./vendor.ea41cd30.js";const k={name:"BasicUse",components:{VarPagination:t},setup(){return n(o,"pc"),{pack:s}}};function x(i,p,l,e,u,d){const a=c("var-pagination");return _(),f(a,{current:3,total:120,simple:!1})}var Q=r(k,[["render",x],["__scopeId","data-v-3124b49a"]]);const b={name:"BasicUse",components:{VarPagination:t},setup(){return n(o,"pc"),{pack:s}}};function w(i,p,l,e,u,d){const a=c("var-pagination");return _(),f(a,{current:3,total:120,simple:!1,"show-quick-jumper":""})}var F=r(b,[["render",w],["__scopeId","data-v-056fb256"]]);const y={name:"BasicUse",components:{VarPagination:t},setup(){return n(o,"pc"),{pack:s}}};function B(i,p,l,e,u,d){const a=c("var-pagination");return _(),g(h,null,[m(a,{current:3,total:120,simple:!1,"show-size-changer":!1}),m(a,{current:3,total:120,simple:!1,"size-option":[10,20,30,40]})],64)}var J=r(y,[["render",B],["__scopeId","data-v-655158ea"]]);const P={name:"BasicUse",components:{VarPagination:t},setup(){return n(o,"pc"),{pack:s}}};function j(i,p,l,e,u,d){const a=c("var-pagination");return _(),g(h,null,[m(a,{current:3,size:10,total:120,simple:!1,"show-total":v=>`${e.pack.pcTotal} ${v} ${e.pack.item}`},null,8,["show-total"]),m(a,{current:3,size:10,total:120,simple:!1,"show-total":(v,$)=>`${e.pack.current} ${$[0]}-${$[1]} / ${e.pack.pcTotal} ${v} ${e.pack.item}`},null,8,["show-total"])],64)}var O=r(P,[["render",j],["__scopeId","data-v-84d6c2fa"]]);const z={name:"Disabled",components:{VarPagination:t},setup(){return n(o,"pc"),{pack:s}}};function S(i,p,l,e,u,d){const a=c("var-pagination");return _(),f(a,{current:6,total:115,simple:!1,disabled:""})}var q=r(z,[["render",S],["__scopeId","data-v-1bb89c0a"]]);export{Q as B,q as D,F as Q,J as S,O as a};
