import{_ as c}from"./elevation.46d11dfe.js";import{e as l,o,c as n,a as t,i as d,j as a,U as r,m as s}from"./vendor.4fe81855.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"Cell",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"The cell is a single display item in the list.")],-1),j={class:"card"},_=t("h3",null,"Basic Usage",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(" This is Cell "),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},u=t("h3",null,"Show Icon",-1),b=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"fire"'),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"This is Cell"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"extra"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-icon"),s(),t("span",{class:"hljs-attr"},"name"),s("="),t("span",{class:"hljs-string"},'"information"'),s(" />")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),f={class:"card"},x=t("h3",null,"Show Description",-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"title"),s("="),t("span",{class:"hljs-string"},'"This is Cell"'),s(),t("span",{class:"hljs-attr"},"desc"),s("="),t("span",{class:"hljs-string"},'"description"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},C=t("h3",null,"Show Border",-1),N=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"border"),s(">")]),s(" This is Cell "),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>Description</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>icon-class</code></td><td>Icon className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>Title className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc-class</code></td><td>Description className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>Extra className</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of cell</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon of cell</td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>Description of cell</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra of cell</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--cell-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-desc-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-desc-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table></div>',4);function D(I,V,w,z,B,P){const e=l("var-site-code-example");return o(),n("div",i,[p,m,t("div",j,[_,d(e,null,{default:a(()=>[g]),_:1})]),t("div",v,[u,d(e,null,{default:a(()=>[b]),_:1})]),t("div",f,[x,d(e,null,{default:a(()=>[y]),_:1})]),t("div",S,[C,d(e,null,{default:a(()=>[N]),_:1})]),T])}var E=c(h,[["render",D]]);export{E as default};
