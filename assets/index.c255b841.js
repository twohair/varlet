import{A as w}from"./AppType.6775b756.js";import{I as x}from"./index.6428d33d.js";import{d as E,b as v,e as g,o as m,c as B,i as e,j as n,w as S,v as V,a as A,l as F,t as u,H as L,T as N,G as I,r as f,m as d}from"./vendor.49f89f0d.js";import{t as R}from"./components.57927f97.js";import{_ as y}from"./elevation.229458c1.js";import{B as P}from"./index.c1d320c3.js";import{C as U}from"./index.a9e7c4d5.js";import{d as z}from"./index.9b1139e6.js";import{u as M,a as C,_ as j,b as G,c as H}from"./en-US.628e0d34.js";import{w as W,a as q}from"./utils.3a4595f4.js";import"./elements.600984cd.js";import"./index.6e927d89.js";import"./index.48ee5316.js";import"./index.6ee51b1a.js";function J(t){return["default","primary","info","success","warning","danger"].includes(t)}function K(t){return["right-top","right-bottom","left-top","left-bottom"].includes(t)}const O={type:{type:String,default:"default",validator:J},hidden:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},value:{type:[String,Number],default:0},maxValue:{type:[String,Number]},color:{type:String},position:{type:String,default:"right-top",validator:K},icon:{type:String}};const Q=E({name:"VarBadge",components:{VarIcon:x},inheritAttrs:!1,props:O,setup(t,{slots:s}){const c=v(()=>{const{type:i,position:r,dot:o,icon:l}=t,h=s.default&&`var-badge__position var-badge--${r}`,b=o&&"var-badge__dot",T=p(),D=l&&"var-badge__icon";return[`var-badge--${i}`,h,b,T,D]}),a=v(()=>{const{dot:i,value:r,maxValue:o}=t;return i?"":r!==void 0&&o!==void 0&&R(r)>o?`${o}+`:r}),p=()=>{const{position:i,dot:r}=t;if(r&&i.includes("right"))return"var-badge__dot--right";if(r&&i.includes("left"))return"var-badge__dot--left"};return{values:a,contentClass:c}}}),X={class:"var-badge var--box"},Y={key:1};function Z(t,s,c,a,p,i){const r=g("var-icon");return m(),B("div",X,[e(N,{name:"var-badge-fade"},{default:n(()=>[S(A("span",L(t.$attrs,{class:["var-badge__content",t.contentClass],style:{background:t.color}}),[t.icon&&!t.dot?(m(),F(r,{key:0,name:t.icon,size:"10px"},null,8,["name"])):(m(),B("span",Y,u(t.values),1))],16),[[V,!t.hidden]])]),_:1}),I(t.$slots,"default")])}var _=y(Q,[["render",Z]]);_.install=function(t){t.component(_.name,_)};var $={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},ee={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:k,use:ae,pack:te,packs:Ce,merge:ke}=M(),oe=t=>{H(t),ae(t)};C("zh-CN",j);C("en-US",G);k("zh-CN",$);k("en-US",ee);const ne={name:"BadgeExample",components:{VarBadge:_,VarButton:P,VarChip:U,AppType:w},setup(){const t=f(88),s=f(188),c=f(99),a=f(!1),p=()=>{a.value=!a.value};return W(oe),q(z),{value:t,value1:s,maxValue:c,hidden:a,pack:te,handleChange:p}}},re={class:"example"};function ue(t,s,c,a,p,i){const r=g("app-type"),o=g("var-badge"),l=g("var-chip"),h=g("var-button");return m(),B("div",re,[e(r,null,{default:n(()=>[d(u(a.pack.themeColorBadge),1)]),_:1}),e(o),e(o,{type:"primary"}),e(o,{type:"info"}),e(o,{type:"warning"}),e(o,{type:"success"}),e(o,{type:"danger"}),e(r,null,{default:n(()=>[d(u(a.pack.dotBadge),1)]),_:1}),e(o,{dot:"",type:"danger"}),e(r,null,{default:n(()=>[d(u(a.pack.customContentBadge),1)]),_:1}),e(o,{type:"danger",value:"badge"}),e(o,{type:"danger",value:"hot"}),e(o,{type:"danger",value:"66"}),e(r,null,{default:n(()=>[d(u(a.pack.maximum),1)]),_:1}),e(o,{type:"danger",value:a.value,"max-value":a.maxValue},null,8,["value","max-value"]),e(o,{type:"danger",value:a.value1,"max-value":a.maxValue},null,8,["value","max-value"]),e(r,null,{default:n(()=>[d(u(a.pack.differentPositioningBadges),1)]),_:1}),e(o,{type:"danger",position:"right-top"},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.upperRight),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"right-bottom"},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.lowerRight),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"left-top"},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.upperLeft),1)]),_:1})]),_:1}),e(o,{type:"danger",position:"left-bottom"},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.lowerLeft),1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[d(u(a.pack.whetherToDisplayTheBadge),1)]),_:1}),e(h,{onClick:a.handleChange},{default:n(()=>[d(u(a.pack.clickToChangeTheState),1)]),_:1},8,["onClick"]),e(o,{type:"danger",position:"right-top",hidden:a.hidden},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.badge),1)]),_:1})]),_:1},8,["hidden"]),e(r,null,{default:n(()=>[d(u(a.pack.customBadgeColors),1)]),_:1}),e(o,{color:"#6200ea",position:"right-top"},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.badge),1)]),_:1})]),_:1}),e(r,null,{default:n(()=>[d(u(a.pack.customBadgeIcons),1)]),_:1}),e(o,{color:"#6200ea",position:"right-top",icon:"notebook"},{default:n(()=>[e(l,{plain:"",round:!1,color:"#009688"},{default:n(()=>[d(u(a.pack.badge),1)]),_:1})]),_:1})])}var be=y(ne,[["render",ue],["__scopeId","data-v-539a21d4"]]);export{be as default};
