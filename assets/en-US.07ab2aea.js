import{_ as l}from"./elevation.d7d3ee97.js";import{e as n,o as t,c,a,i as o,j as i,m as s}from"./vendor.2c1af365.js";const h={components:{}},r={class:"varlet-site-doc"},p=a("h1",null,"Elevation",-1),d=a("div",{class:"card"},[a("h3",null,"Intro"),a("p",null,[s("The component library provides a shadow elevation effect based on the "),a("code",null,"Material"),s(" specification to represent the dimensionality of an element.")])],-1),j={class:"card"},m=a("h3",null,"Basic Usage",-1),_=a("p",null,[s("Shadows are divided into "),a("code",null,"0-24"),s(" levels, and the higher the level, the higher the altitude.")],-1),v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-demo__item"'),s(),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},'"`var-elevation--${e}`"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"e in 24"'),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"e"'),s(">")]),s(`
      {{ e }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".elevation-demo"),s(),a("span",{class:"hljs-selector-class"},".elevation-demo__item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"25vw"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"25vw"),s(`;
  `),a("span",{class:"hljs-attribute"},"transition"),s(": "),a("span",{class:"hljs-number"},"0.25s"),s(` background-color;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1);function u(g,f,b,x,y,w){const e=n("var-site-code-example");return t(),c("div",r,[p,d,a("div",j,[m,_,o(e,null,{default:i(()=>[v]),_:1})])])}var B=l(h,[["render",u]]);export{B as default};
