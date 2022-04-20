import{D as m}from"./index.9d6dd974.js";import{B as r}from"./index.995aacb5.js";import{I as S}from"./index.bd1a1c4d.js";import{S as i}from"./index.8225ebce.js";import{C as g}from"./index.28589dac.js";import{A as k}from"./AppType.14280320.js";import{d as x}from"./index.079ade67.js";import{u as N,a as h,_ as T,b as $,c as z}from"./en-US.307522bf.js";import{w as I,a as M}from"./utils.dea25200.js";import{_ as V}from"./elevation.46d11dfe.js";import{q as P,$ as H,o as L,c as R,i as t,V as e,j as a,a0 as y,F as j,m as l,t as n}from"./vendor.4fe81855.js";import"./index.21db6a76.js";import"./lock.8e688292.js";import"./index.afd38bc1.js";import"./zIndex.6b63131d.js";import"./components.cd8ba2fd.js";/* empty css               */import"./index.46338cdd.js";import"./elements.579153f5.js";import"./index.f32c995c.js";var q={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},W={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"};const{add:_,use:G,pack:o,packs:Ce,merge:ge}=N(),J=d=>{z(d),G(d)};h("zh-CN",T);h("en-US",$);_("zh-CN",q);_("en-US",W);const K={setup(d){const C=m.Component,E=P({show:!1,show1:!1,show2:!1}),{show:c,show1:p,show2:f}=H(E),v={confirm:()=>i.success("confirm"),cancel:()=>i.error("cancel"),close:()=>i.info("close")},U=()=>m({message:o.value.message}),D=async()=>v[await m(o.value.message)](),b=()=>{m({title:o.value.title,message:o.value.message})},F=()=>{m({message:o.value.message,confirmButton:!1,cancelButton:!1})},B=(w,s)=>{i.loading(o.value.asyncCloseProgress),setTimeout(()=>{v[w](),s()},1e3)},A=()=>{m({message:o.value.message,onBeforeClose:B})};return I(J),M(x),(w,s)=>(L(),R(j,null,[t(e(k),null,{default:a(()=>[l(n(e(o).functionCall),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:U},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:b},{default:a(()=>[l(n(e(o).modifyTitle),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:F},{default:a(()=>[l(n(e(o).hideButton),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:D},{default:a(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),t(e(r),{type:"primary",block:"",onClick:A},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(k),null,{default:a(()=>[l(n(e(o).componentCall),1)]),_:1}),t(e(r),{type:"warning",block:"",onClick:s[0]||(s[0]=u=>c.value=!0)},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=u=>y(c)?c.value=u:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(i).success("confirm")),onCancel:s[3]||(s[3]=()=>e(i).error("cancel")),onClosed:s[4]||(s[4]=()=>e(i).info("closed"))},null,8,["show","title","message"]),t(e(r),{type:"warning",block:"",onClick:s[5]||(s[5]=u=>p.value=!0)},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(C),{show:e(p),"onUpdate:show":s[6]||(s[6]=u=>y(p)?p.value=u:null),title:e(o).title,message:e(o).message,onBeforeClose:B},null,8,["show","title","message"]),t(e(r),{type:"warning",block:"",onClick:s[7]||(s[7]=u=>f.value=!0)},{default:a(()=>[l(n(e(o).customSlots),1)]),_:1}),t(e(C),{show:e(f),"onUpdate:show":s[8]||(s[8]=u=>y(f)?f.value=u:null)},{title:a(()=>[t(e(S),{name:"information",color:"#2979ff"})]),default:a(()=>[t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}};var ye=V(K,[["__scopeId","data-v-4a422242"]]);export{ye as default};
