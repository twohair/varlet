import{_ as n}from"./elevation.d7d3ee97.js";import{e as d,o,c,a as t,i as l,j as e,m as s,U as r}from"./vendor.2c1af365.js";const i={components:{}},h={class:"varlet-site-doc"},p=t("h1",null,"List",-1),j=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.")],-1),m={class:"card"},u=t("h3",null,"Basic Use",-1),g=t("p",null,[s("The "),t("code",null,"load"),s(" event is emitted when a scroll container is detected scrolling to the bottom\uFF0Cand will be set "),t("code",null,"loading"),s(" to "),t("code",null,"true"),s(", you need to manually set "),t("code",null,"loading"),s(" to "),t("code",null,"false"),s(" at the end of loading, that\u2019s the end of the load.")],-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` list = ref([])
    
`),t("span",{class:"hljs-keyword"},"const"),s(" load = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    `),t("span",{class:"hljs-keyword"},"for"),s(" ("),t("span",{class:"hljs-keyword"},"let"),s(" i = "),t("span",{class:"hljs-number"},"0"),s("; i < "),t("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),t("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),t("span",{class:"hljs-literal"},"false"),s(`

    `),t("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),t("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),t("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-list"),s(`
    `),t("span",{class:"hljs-attr"},":finished"),s("="),t("span",{class:"hljs-string"},'"finished"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(`
    @`),t("span",{class:"hljs-attr"},"load"),s("="),t("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item"'),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),v={class:"card"},b=t("h3",null,"Load Fail",-1),y=t("p",null,[s("You can manually set the error status using "),t("code",null,"v-model:error"),s(", an error message is displayed. Clicking on the error message will help you set the "),t("code",null,"error"),s(" to "),t("code",null,"false"),s(" and trigger the "),t("code",null,"load"),s(" event again.")],-1),_=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" error = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` list = ref([])
    
`),t("span",{class:"hljs-keyword"},"const"),s(" load = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    `),t("span",{class:"hljs-keyword"},"if"),s(" (list.value.length === "),t("span",{class:"hljs-number"},"40"),s(`) {
      error.value = `),t("span",{class:"hljs-literal"},"true"),s(`
      loading.value = `),t("span",{class:"hljs-literal"},"false"),s(`
      `),t("span",{class:"hljs-keyword"},"return"),s(`
    }

    `),t("span",{class:"hljs-keyword"},"for"),s(" ("),t("span",{class:"hljs-keyword"},"let"),s(" i = "),t("span",{class:"hljs-number"},"0"),s("; i < "),t("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),t("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),t("span",{class:"hljs-literal"},"false"),s(`
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-list"),s(`
    `),t("span",{class:"hljs-attr"},"v-model:error"),s("="),t("span",{class:"hljs-string"},'"error"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model:loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(`
    @`),t("span",{class:"hljs-attr"},"load"),s("="),t("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item"'),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=t("h3",null,"Tip Text",-1),x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),t("span",{class:"hljs-literal"},"false"),s(`)
`),t("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),t("span",{class:"hljs-keyword"},"const"),s(" load = "),t("span",{class:"hljs-function"},"() =>"),s(` {
  `),t("span",{class:"hljs-built_in"},"setTimeout"),s("("),t("span",{class:"hljs-function"},"() =>"),s(` {
    `),t("span",{class:"hljs-keyword"},"for"),s(" ("),t("span",{class:"hljs-keyword"},"let"),s(" i = "),t("span",{class:"hljs-number"},"0"),s("; i < "),t("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),t("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),t("span",{class:"hljs-literal"},"false"),s(`

    `),t("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),t("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),t("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),t("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-list"),s(` 
    `),t("span",{class:"hljs-attr"},"loading-text"),s("="),t("span",{class:"hljs-string"},'"loading QAQ"'),s(` 
    `),t("span",{class:"hljs-attr"},"finished-text"),s("="),t("span",{class:"hljs-string"},'"finished ORZ"'),s(` 
    `),t("span",{class:"hljs-attr"},"error-text"),s("="),t("span",{class:"hljs-string"},'"error TNT"'),s(` 
    `),t("span",{class:"hljs-attr"},":finished"),s("="),t("span",{class:"hljs-string"},'"finished"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-model:loading"),s("="),t("span",{class:"hljs-string"},'"loading"'),s(` 
    @`),t("span",{class:"hljs-attr"},"load"),s("="),t("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"item"'),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T=r('<div class="card"><h3>Be Careful</h3><p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element\u2019s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when it hit bottom</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',7);function L(S,z,A,B,C,D){const a=d("var-site-code-example");return o(),c("div",h,[p,j,t("div",m,[u,g,l(a,null,{default:e(()=>[f]),_:1})]),t("div",v,[b,y,l(a,null,{default:e(()=>[_]),_:1})]),t("div",k,[w,l(a,null,{default:e(()=>[x]),_:1})]),T])}var E=n(i,[["render",L]]);export{E as default};
