import{d as n,o as l,c,e as s,F as u,f as r,a,b as t}from"./app.0ab80f39.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const k={},b=r(`<h1 id="dialog-\u5BF9\u8BDD\u6846" tabindex="-1"><a class="header-anchor" href="#dialog-\u5BF9\u8BDD\u6846" aria-hidden="true">#</a> Dialog \u5BF9\u8BDD\u6846</h1><p>\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002</p><p><br><br></p><h3 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a> \u4EE3\u7801\u6F14\u793A</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flag<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6807\u9898<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-button</span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u5E95\u90E8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-dialog</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flag = !flag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">let</span> flag <span class="token operator">=</span> ref<span class="token operator">&lt;</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6211\u5173\u95ED\u4E86!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><br><br></p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>`,7),g=a("p",null,[a("br"),a("br")],-1),d=a("h3",{id:"slots",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#"),t(" Slots")],-1),m=a("p",null,[a("br"),a("br")],-1),h=a("h3",{id:"events",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),t(" Events")],-1);function f(_,v){const p=n("props"),e=n("slots"),o=n("events");return l(),c(u,null,[b,s(p,{list:[{attributes:"model-value",illustrate:"\u662F\u5426\u663E\u793A Dialog",type:"boolean",optional:"\u2014\u2014",default:"false"},{attributes:"width",illustrate:"Dialog \u7684\u5BBD\u5EA6",type:"string",optional:"\u2014\u2014",default:"50"},{attributes:"top",illustrate:"Dialog CSS \u4E2D\u7684 margin-top \u503C",type:"string",optional:"\u2014\u2014",default:"15"},{attributes:"title",illustrate:"Dialog \u7684\u6807\u9898\uFF0C \u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \uFF08\u89C1\u4E0B\u8868\uFF09\u4F20\u5165",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{attributes:"show-close",illustrate:"\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE",type:"boolean",optional:"\u2014\u2014",default:"true"},{attributes:"close-on-click-modal",illustrate:"\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB modal \u5173\u95ED Dialog",type:"boolean",optional:"\u2014\u2014",default:"true"}]}),g,d,s(e,{list:[{name:"\u2014\u2014",illustrate:"body\u7684\u5185\u5BB9"},{name:"title",illustrate:"\u6807\u9898\u7684\u5185\u5BB9"},{name:"footer",illustrate:"footer\u7684\u5185\u5BB9"}]}),m,h,s(o,{list:[{name:"close",illustrate:"\u5173\u95ED\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6",parameter:"\u2014\u2014"},{name:"open",illustrate:"\u6253\u5F00\u540E\u89E6\u53D1\u7684\u4E8B\u4EF6",parameter:"\u2014\u2014"}]})],64)}var x=i(k,[["render",f]]);export{x as default};
