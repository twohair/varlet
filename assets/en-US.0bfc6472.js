import{_ as l}from"./elevation.d9ce6aff.js";import{e as o,o as c,c as n,a as e,i as d,j as a,m as t,U as r}from"./vendor.49f89f0d.js";const i={components:{}},h={class:"varlet-site-doc"},p=e("h1",null,"Uploader",-1),u=e("div",{class:"card"},[e("h3",null,"Intro"),e("p",null,[t("It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for "),e("code",null,"after-read"),t(" events.")])],-1),f={class:"card"},j=e("h3",null,"Install",-1),g=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { createApp } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`
`),e("span",{class:"hljs-keyword"},"import"),t(" { Uploader } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

createApp().use(Uploader)
`)])],-1),v={class:"card"},m=e("h3",null,"Basic Usage",-1),_=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(" @"),e("span",{class:"hljs-attr"},"after-read"),t("="),e("span",{class:"hljs-string"},'"handleAfterRead"'),t("/>")]),t(`
`)])],-1),y=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),t("("),e("span",{class:"hljs-params"}),t(")")]),t(` {
    `),e("span",{class:"hljs-keyword"},"const"),t(` files = ref([])

    `),e("span",{class:"hljs-keyword"},"const"),t(" handleAfterRead = "),e("span",{class:"hljs-function"},[e("span",{class:"hljs-params"},"file"),t(" =>")]),t(),e("span",{class:"hljs-built_in"},"console"),t(`.log(file)

    `),e("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),b={class:"card"},w=e("h3",null,"File Preview",-1),k=e("p",null,"By analyzing the file URL suffix name to determine the file type, support image and video preview.",-1),x=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t("/>")]),t(`
`)])],-1),F=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),t("("),e("span",{class:"hljs-params"}),t(")")]),t(` {
    `),e("span",{class:"hljs-keyword"},"const"),t(` files = ref([
      {
        `),e("span",{class:"hljs-attr"},"url"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"cover"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`
      },
      {
        `),e("span",{class:"hljs-attr"},"url"),t(": "),e("span",{class:"hljs-string"},"'https://www.runoob.com/try/demo_source/mov_bbb.mp4'"),t(`,
        `),e("span",{class:"hljs-attr"},"cover"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cover.jpg'"),t(`
      }
    ])

    `),e("span",{class:"hljs-keyword"},"return"),t(` { files }
  }
}
`)])],-1),V={class:"card"},R=e("h3",null,"Upload State",-1),T=e("p",null,[t("Three uploading states, "),e("code",null,"loading"),t(", "),e("code",null,"success"),t(" and "),e("code",null,"error"),t(", are provided, and tool functions are provided to quickly obtain files with corresponding states.")],-1),z=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(" @"),e("span",{class:"hljs-attr"},"after-read"),t("="),e("span",{class:"hljs-string"},'"handleAfterRead"'),t("/>")]),t(`
`)])],-1),A=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),t("("),e("span",{class:"hljs-params"}),t(")")]),t(` {
    `),e("span",{class:"hljs-keyword"},"const"),t(` files = ref([
      {
        `),e("span",{class:"hljs-attr"},"url"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"cover"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"state"),t(": "),e("span",{class:"hljs-string"},"'loading'"),t(`
      },
      {
        `),e("span",{class:"hljs-attr"},"url"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"cover"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"state"),t(": "),e("span",{class:"hljs-string"},"'success'"),t(`
      },
      {
        `),e("span",{class:"hljs-attr"},"url"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"cover"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"state"),t(": "),e("span",{class:"hljs-string"},"'error'"),t(`
      }
    ])

    `),e("span",{class:"hljs-keyword"},"const"),t(" handleAfterRead = "),e("span",{class:"hljs-function"},[t("("),e("span",{class:"hljs-params"},"file"),t(") =>")]),t(` {
      file.state = `),e("span",{class:"hljs-string"},"'loading'"),t(`

      `),e("span",{class:"hljs-built_in"},"setTimeout"),t("("),e("span",{class:"hljs-function"},"() =>"),t(` {
        file.state = `),e("span",{class:"hljs-string"},"'success'"),t(`
      }, `),e("span",{class:"hljs-number"},"1000"),t(`)
    }

    `),e("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),S={class:"card"},U=e("h3",null,"File Maxlength",-1),D=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(),e("span",{class:"hljs-attr"},":maxlength"),t("="),e("span",{class:"hljs-string"},'"1"'),t("/>")]),t(`
`)])],-1),B={class:"card"},C=e("h3",null,"File Size Limit",-1),P=e("p",null,[t("If the limit is exceeded, the file will be blocked. You can get the file by listening for the "),e("code",null,"oversize"),t(" event.")],-1),G=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(),e("span",{class:"hljs-attr"},":maxsize"),t("="),e("span",{class:"hljs-string"},'"1024"'),t(" @"),e("span",{class:"hljs-attr"},"oversize"),t("="),e("span",{class:"hljs-string"},'"handleOversize"'),t(" />")]),t(`
`)])],-1),E=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),t("("),e("span",{class:"hljs-params"}),t(")")]),t(` {
    `),e("span",{class:"hljs-keyword"},"const"),t(` files = ref([])

    `),e("span",{class:"hljs-keyword"},"const"),t(" handleOversize = "),e("span",{class:"hljs-function"},[e("span",{class:"hljs-params"},"file"),t(" =>")]),t(),e("span",{class:"hljs-built_in"},"console"),t(`.log(file)

    `),e("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),I={class:"card"},M=e("h3",null,"Upload Preprocessing",-1),O=e("p",null,[t("Operate on a file by registering a "),e("code",null,"before-read"),t(" event that returns a false value to prevent the file from being read.")],-1),W=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(" @"),e("span",{class:"hljs-attr"},"before-read"),t("="),e("span",{class:"hljs-string"},'"handleBeforeRead"'),t("/>")]),t(`
`)])],-1),N=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),t("("),e("span",{class:"hljs-params"}),t(")")]),t(` {
    `),e("span",{class:"hljs-keyword"},"const"),t(` files = ref([])

    `),e("span",{class:"hljs-keyword"},"const"),t(" handleBeforeRead = "),e("span",{class:"hljs-function"},[e("span",{class:"hljs-params"},"file"),t(" =>")]),t(" file.file.size <= "),e("span",{class:"hljs-number"},"1024"),t(" * "),e("span",{class:"hljs-number"},"10"),t(`

    `),e("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleAfterRead
    }
  }
}
`)])],-1),L={class:"card"},$=e("h3",null,"Disabled",-1),q=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"disabled"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t("/>")]),t(`
`)])],-1),H={class:"card"},Y=e("h3",null,"Readonly",-1),J=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"readonly"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t("/>")]),t(`
`)])],-1),K={class:"card"},Q=e("h3",null,"Remove Preprocessing",-1),X=e("p",null,[t("Before deleting the file, the "),e("code",null,"before-remove"),t(" event is triggered, and a falsy value is returned to prevent the delete operation.")],-1),Z=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(" @"),e("span",{class:"hljs-attr"},"remove"),t("="),e("span",{class:"hljs-string"},'"handleBeforeRemove"'),t(" />")]),t(`
`)])],-1),ee=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" { ref } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'vue'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` {
  `),e("span",{class:"hljs-function"},[e("span",{class:"hljs-title"},"setup"),t("("),e("span",{class:"hljs-params"}),t(")")]),t(` {
    `),e("span",{class:"hljs-keyword"},"const"),t(` files = ref([
      {
        `),e("span",{class:"hljs-attr"},"url"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
        `),e("span",{class:"hljs-attr"},"cover"),t(": "),e("span",{class:"hljs-string"},"'https://varlet.gitee.io/varlet-ui/cat.jpg'"),t(`,
      }
    ])

    `),e("span",{class:"hljs-keyword"},"const"),t(" handleBeforeRemove = "),e("span",{class:"hljs-keyword"},"async"),t(` () => {
      `),e("span",{class:"hljs-keyword"},"const"),t(" action = "),e("span",{class:"hljs-keyword"},"await"),t(` Dialog({
        `),e("span",{class:"hljs-attr"},"title"),t(": "),e("span",{class:"hljs-string"},"'Delete or not?'"),t(`,
        `),e("span",{class:"hljs-attr"},"message"),t(": "),e("span",{class:"hljs-string"},"'Cannot be withdrawn after deletion'"),t(`
      })

      `),e("span",{class:"hljs-keyword"},"return"),t(" action === "),e("span",{class:"hljs-string"},"'confirm'"),t(`
    }

    `),e("span",{class:"hljs-keyword"},"return"),t(` {
      files,
      handleBeforeRemove
    }
  }
}
`)])],-1),te={class:"card"},se=e("h3",null,"Customize upload styles",-1),de=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(">")]),t(`
  `),e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-button"),t(),e("span",{class:"hljs-attr"},"type"),t("="),e("span",{class:"hljs-string"},'"primary"'),t(">")]),t("Upload"),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),e("span",{class:"hljs-tag"},[t("</"),e("span",{class:"hljs-name"},"var-uploader"),t(">")]),t(`
`)])],-1),ae={class:"card"},le=e("h3",null,"Validate",-1),oe=e("p",null,[t("The values are validated by passing in an array of validator, If the validator returns "),e("code",null,"true"),t(", the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.")],-1),ce=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-tag"},[t("<"),e("span",{class:"hljs-name"},"var-uploader"),t(`
  `),e("span",{class:"hljs-attr"},":rules"),t("="),e("span",{class:"hljs-string"},`"[
    (v, u) => u.getError(v).length === 0 || 'There is a file that failed to upload'
  ]"`),t(`
  `),e("span",{class:"hljs-attr"},"v-model"),t("="),e("span",{class:"hljs-string"},'"files"'),t(`
/>`)]),t(`
`)])],-1),ne=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>Trigger returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>before-remove</code></td><td>Triggered before file deletion, return false value to prevent file deletion (support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when deleting a file. There is a true value to prevent deleting a file (support promise)</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.3)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-disabled-text-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>',8);function re(ie,he,pe,ue,fe,je){const s=o("var-site-code-example");return c(),n("div",h,[p,u,e("div",f,[j,d(s,null,{default:a(()=>[g]),_:1})]),e("div",v,[m,d(s,null,{default:a(()=>[_]),_:1}),d(s,null,{default:a(()=>[y]),_:1})]),e("div",b,[w,k,d(s,null,{default:a(()=>[x]),_:1}),d(s,null,{default:a(()=>[F]),_:1})]),e("div",V,[R,T,d(s,null,{default:a(()=>[z]),_:1}),d(s,null,{default:a(()=>[A]),_:1})]),e("div",S,[U,d(s,null,{default:a(()=>[D]),_:1})]),e("div",B,[C,P,d(s,null,{default:a(()=>[G]),_:1}),d(s,null,{default:a(()=>[E]),_:1})]),e("div",I,[M,O,d(s,null,{default:a(()=>[W]),_:1}),d(s,null,{default:a(()=>[N]),_:1})]),e("div",L,[$,d(s,null,{default:a(()=>[q]),_:1})]),e("div",H,[Y,d(s,null,{default:a(()=>[J]),_:1})]),e("div",K,[Q,X,d(s,null,{default:a(()=>[Z]),_:1}),d(s,null,{default:a(()=>[ee]),_:1})]),e("div",te,[se,d(s,null,{default:a(()=>[de]),_:1})]),e("div",ae,[le,oe,d(s,null,{default:a(()=>[ce]),_:1})]),ne])}var me=l(i,[["render",re]]);export{me as default};
