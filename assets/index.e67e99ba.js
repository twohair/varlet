import{s as m,i as C,g as I,a as A,c as B}from"./components.cd8ba2fd.js";import{b as u}from"./elements.579153f5.js";/* empty css               */import{d as E,i as y,_ as F,F as D}from"./vendor.4fe81855.js";const $=t=>["mini","small","normal","large"].includes(t),N=t=>$(t)||m(t)||C(t)||I(t),P=t=>["start","end","center","space-around","space-between"].includes(t),W={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:N},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:P},inline:{type:Boolean,default:!1}};const{n:g,classes:_}=B("space"),k={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]};var f=E({name:"VarSpace",props:W,setup(t,{slots:S}){const w=(s,n)=>n?k[s]:m(s)?s.map(u):[u(s),u(s)];return()=>{var x;const{inline:s,justify:n,align:h,wrap:b,direction:l,size:d}=t;let o=(x=A(S.default))!=null?x:[];const V=$(d),[a,i]=w(d,V);o=(c=>{const r=[];return c.forEach(e=>{if(e.type!==F){if(e.type===D&&m(e.children)){e.children.forEach(v=>{r.push(v)});return}r.push(e)}}),r})(o);const p=o.length-1,j=o.map((c,r)=>{let e="0";return l==="row"&&(n==="start"||n==="center"||n==="end"?r!==p?e=`${a/2}px ${i}px ${a/2}px 0`:e=`${a/2}px 0`:n==="space-around"?e=`${a/2}px ${i/2}px`:n==="space-between"&&(r===0?e=`${a/2}px ${i/2}px ${a/2}px 0`:r===p?e=`${a/2}px 0 ${a/2}px ${i/2}px`:e=`${a/2}px ${i/2}px`)),l==="column"&&r!==p&&(e=`0 0 ${a}px 0`),y("div",{style:{margin:e}},[c])});return y("div",{class:_(g(),"var--box",[s,g("--inline")]),style:{flexDirection:l,justifyContent:n,alignItems:h,flexWrap:b?"wrap":"nowrap",margin:l==="row"?`-${a/2}px 0`:void 0}},[j])}}});f.install=function(t){t.component(f.name,f)};export{f as S};
