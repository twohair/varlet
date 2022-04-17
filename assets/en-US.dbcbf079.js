import{_ as d}from"./elevation.d7d3ee97.js";import{e as n,o,c,a as t,i as a,j as l,m as s,U as r}from"./vendor.2c1af365.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"PullRefresh",-1),u=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Provides a drop-down refresh interaction.")],-1),m={class:"card"},f=t("h3",null,"Basic Usage",-1),j=t("p",null,[s("The refresh event will be Emitted when pull refresh, you should set "),t("code",null,"v-model"),s(" to "),t("code",null,"true"),s(" at the beginning of the event indicates that loading is under way, and setting "),t("code",null,"v-model"),s(" to "),t("code",null,"false"),s(" after completion indicates that loading is over.")],-1),g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" data1 = "),t("span",{class:"hljs-built_in"},"Array"),s("("),t("span",{class:"hljs-number"},"10"),s(").fill("),t("span",{class:"hljs-string"},"'List Item'"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" data2 = "),t("span",{class:"hljs-built_in"},"Array"),s("("),t("span",{class:"hljs-number"},"10"),s(").fill("),t("span",{class:"hljs-string"},"'This is new List Item'"),s(`)

`),t("span",{class:"hljs-keyword"},"const"),s(" isRefresh = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` data = ref(data1)

`),t("span",{class:"hljs-keyword"},"const"),s(" refresh = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    data.value = data.value[`),t("span",{class:"hljs-number"},"0"),s("] === "),t("span",{class:"hljs-string"},"'List Item'"),s(` ? data2 : data1
    isRefresh.value = `),t("span",{class:"hljs-literal"},"false"),s(`
  }, `),t("span",{class:"hljs-number"},"2000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pull-refresh"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"isRefresh"'),s(" @"),t("span",{class:"hljs-attr"},"refresh"),s("="),t("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(`
      `),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"(item, index) in data"'),s(`
      `),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"index"'),s(`
      `),t("span",{class:"hljs-attr"},"border"),s(`
    >`)]),s(`
      {{ item + ' ' + (index + 1) }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},_=t("h3",null,"Attention",-1),b=t("p",null,[s("When the height of the "),t("code",null,"PullRefresh"),s(" is "),t("code",null,"0"),s(", it will be unavailable, so you need to ensure that the height of its child elements is "),t("strong",null,"not"),s(),t("code",null,"0"),s(" or set height for the "),t("code",null,"PullRefresh"),s(":")],-1),y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`

// or
  
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-pull-refresh"),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"height: 200px"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>Emitted after pulling refresh</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Default slot</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',5);function x(k,S,P,C,A,B){const e=n("var-site-code-example");return o(),c("div",i,[p,u,t("div",m,[f,j,a(e,null,{default:l(()=>[g]),_:1})]),t("div",v,[_,b,a(e,{"playground-ignore":""},{default:l(()=>[y]),_:1})]),w])}var T=d(h,[["render",x]]);export{T as default};
