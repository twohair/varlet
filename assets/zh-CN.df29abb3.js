import{_ as n}from"./elevation.46d11dfe.js";import{e as d,o as c,c as o,a,i as t,j as e,m as s,U as r}from"./vendor.4fe81855.js";const h={components:{}},i={class:"varlet-site-doc"},p=a("h1",null,"\u65E0\u9650\u6EDA\u52A8\u5217\u8868",-1),j=a("div",{class:"card"},[a("h3",null,"\u4ECB\u7ECD"),a("p",null,"\u65E0\u9650\u6EDA\u52A8\u52A0\u8F7D\u5217\u8868\u3001\u89E6\u5E95\u52A0\u8F7D\uFF0C\u652F\u6301\u624B\u52A8\u68C0\u67E5\u4F4D\u7F6E\u5E76\u52A0\u8F7D\u3002\u652F\u6301\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u3001\u9519\u8BEF\u72B6\u6001\u3001\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u72B6\u6001\u3002")],-1),m={class:"card"},u=a("h3",null,"\u57FA\u672C\u4F7F\u7528",-1),f=a("p",null,[s("\u5F53\u68C0\u6D4B\u5230\u6EDA\u52A8\u5BB9\u5668\u6EDA\u52A8\u5230\u5E95\u90E8\u5E95\u90E8\u65F6\u4F1A\u89E6\u53D1 "),a("code",null,"load"),s(" \u4E8B\u4EF6\uFF0C\u5E76\u4F1A\u8BBE\u7F6E "),a("code",null,"loading"),s(" \u4E3A "),a("code",null,"true"),s("\uFF0C\u5728\u52A0\u8F7D\u7ED3\u675F\u65F6\u60A8\u9700\u8981\u624B\u52A8\u8BBE\u7F6E "),a("code",null,"loading"),s(" \u4E3A "),a("code",null,"false"),s("\uFF0C\u8868\u793A\u52A0\u8F7D\u7ED3\u675F\u3002")],-1),g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`

    `),a("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),a("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),a("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(`
    `),a("span",{class:"hljs-attr"},":finished"),s("="),a("span",{class:"hljs-string"},'"finished"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
    @`),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      \u5217\u8868\u9879: {{ item }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1),v={class:"card"},_=a("h3",null,"\u52A0\u8F7D\u5931\u8D25",-1),b=a("p",null,[s("\u60A8\u53EF\u4EE5\u4F7F\u7528 "),a("code",null,"v-model:error"),s(" \u624B\u52A8\u8BBE\u7F6E\u9519\u8BEF\u72B6\u6001\uFF0C\u4F1A\u5C55\u793A\u9519\u8BEF\u63D0\u793A\uFF0C\u70B9\u51FB\u9519\u8BEF\u63D0\u793A\u4F1A\u5E2E\u60A8\u628A "),a("code",null,"error"),s(" \u8BBE\u7F6E\u6210 "),a("code",null,"false"),s(" \u5E76\u518D\u6B21\u89E6\u53D1 "),a("code",null,"load"),s(" \u4E8B\u4EF6\u3002")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" error = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (list.value.length === "),a("span",{class:"hljs-number"},"40"),s(`) {
      error.value = `),a("span",{class:"hljs-literal"},"true"),s(`
      loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(`
    }

    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(`
    `),a("span",{class:"hljs-attr"},"v-model:error"),s("="),a("span",{class:"hljs-string"},'"error"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
    @`),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      \u5217\u8868\u9879: {{ item }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),k={class:"card"},w=a("h3",null,"\u63D0\u793A\u6587\u5B57",-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),a("span",{class:"hljs-keyword"},"const"),s(" load = "),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"for"),s(" ("),a("span",{class:"hljs-keyword"},"let"),s(" i = "),a("span",{class:"hljs-number"},"0"),s("; i < "),a("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),a("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),a("span",{class:"hljs-literal"},"false"),s(`

    `),a("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),a("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),a("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-list"),s(`
    `),a("span",{class:"hljs-attr"},"loading-text"),s("="),a("span",{class:"hljs-string"},'"\u6B63\u5728\u52AA\u529B\u8F93\u51FA"'),s(`
    `),a("span",{class:"hljs-attr"},"finished-text"),s("="),a("span",{class:"hljs-string"},'"\u4E00\u6EF4\u90FD\u6CA1\u6709\u4E86"'),s(`
    `),a("span",{class:"hljs-attr"},"error-text"),s("="),a("span",{class:"hljs-string"},'"\u51FA\u9519\u4E86\u51FA\u9519\u4E86"'),s(`
    `),a("span",{class:"hljs-attr"},":finished"),s("="),a("span",{class:"hljs-string"},'"finished"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model:loading"),s("="),a("span",{class:"hljs-string"},'"loading"'),s(`
    @`),a("span",{class:"hljs-attr"},"load"),s("="),a("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-cell"),s(),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"item"'),s(),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      \u5217\u8868\u9879: {{ item }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),z=r('<div class="card"><h3>\u6CE8\u610F</h3><p>\u6211\u4EEC\u662F\u901A\u8FC7\u76D1\u542C\u6EDA\u52A8\u5BB9\u5668\u7684 <code>scroll</code> \u4E8B\u4EF6\u68C0\u6D4B\u662F\u5426\u89E6\u5E95\u5E76\u6267\u884C\u52A0\u8F7D\u3002 \u6EDA\u52A8\u5BB9\u5668\u662F\u6307\u6700\u8FD1\u7684\u4E00\u4E2A <code>overflow-y</code> \u4E3A <code>auto</code> \u6216\u8005 <code>scroll</code> \u7684\u5143\u7D20\u3002 \u5F53\u60A8\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u7684 <code>overflow-x</code> \u4E3A\u9664\u4E86 <code>visible</code> \u4EE5\u5916\u7684\u503C\u65F6\uFF0C\u6D4F\u89C8\u5668\u4E3A\u4E86\u7EF4\u62A4\u4E00\u4E2A <code>bfc</code> \u7684\u7ED3\u6784\u4F1A\u4F7F\u60A8\u7684 <code>overflow-y</code> \u4FEE\u6B63\u4E3A <code>auto</code>\u3002 \u8FD9\u65F6\u6211\u4EEC\u5C31\u4F1A\u8BEF\u8BA4\u4E3A\u8FD9\u4E2A\u5143\u7D20\u4E5F\u662F\u4E00\u4E2A\u6EDA\u52A8\u5BB9\u5668\uFF0C\u6CE8\u610F\u89C4\u907F\u3002</p></div><h2>API</h2><div class="card"><h3>\u5C5E\u6027</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>\u9519\u8BEF\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>\u662F\u5426\u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\u7ACB\u523B\u68C0\u6D4B\u4F4D\u7F6E</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>\u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>\u8DDD\u79BB\u5E95\u90E8\u7684\u89E6\u53D1\u8DDD\u79BB</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>\u52A0\u8F7D\u72B6\u6001\u6587\u5B57</td><td><em>string</em></td><td><code>\u52A0\u8F7D\u4E2D</code></td></tr><tr><td><code>finished-text</code></td><td>\u52A0\u8F7D\u5B8C\u6BD5\u6587\u5B57</td><td><em>string</em></td><td><code>\u6CA1\u6709\u66F4\u591A\u4E86</code></td></tr><tr><td><code>error-text</code></td><td>\u52A0\u8F7D\u5931\u8D25\u6587\u5B57</td><td><em>string</em></td><td><code>\u52A0\u8F7D\u5931\u8D25</code></td></tr></tbody></table></div><div class="card"><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>check</code></td><td>\u89E6\u53D1\u4F4D\u7F6E\u68C0\u67E5, \u89E6\u5E95\u89E6\u53D1 load \u4E8B\u4EF6\u3002</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>load</code></td><td>\u89E6\u5E95\u65F6\u89E6\u53D1</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u5217\u8868\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>\u52A0\u8F7D\u4E2D\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>\u52A0\u8F7D\u5931\u8D25\u5185\u5BB9</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>\u52A0\u8F7D\u5B8C\u6BD5\u5185\u5BB9</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="#/zh-CN/style-provider">StyleProvider \u7EC4\u4EF6</a> \u8FDB\u884C\u6837\u5F0F\u5B9A\u5236</p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table></div>',7);function N(C,T,V,$,B,P){const l=d("var-site-code-example");return c(),o("div",i,[p,j,a("div",m,[u,f,t(l,null,{default:e(()=>[g]),_:1})]),a("div",v,[_,b,t(l,null,{default:e(()=>[y]),_:1})]),a("div",k,[w,t(l,null,{default:e(()=>[x]),_:1})]),z])}var E=n(h,[["render",N]]);export{E as default};
