import{a as d,c as a,d as k}from"./chunk-H76I7UO6.js";import{a as v}from"./chunk-CHUR53R7.js";var w={title:"\u8BBE\u7F6E",mount(e){let n=a.get(),f=a.isConfigured();e.innerHTML=`
      <div class="flex flex-col gap-4">

        <!-- MiniMax AI \u914D\u7F6E -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <strong>MiniMax AI \u914D\u7F6E</strong>
            <span id="ai-status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${f?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200"}">
              ${f?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}
            </span>
          </div>
          <p class="text-xs text-slate-500 -mt-1">
            \u9002\u7528\u4E8E MiniMax AI \u56FD\u5185\u7248\uFF08\u9ED8\u8BA4 Base URL: <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">https://api.minimaxi.com/v1</code>\uFF09\u3002
            API Key \u4EC5\u5B58\u4E8E\u6D4F\u89C8\u5668 localStorage\uFF0C\u4E0D\u4E0A\u4F20\u4EFB\u4F55\u4E1A\u52A1\u670D\u52A1\u5668\u3002
          </p>

          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">API Key<span class="text-red-500"> *</span></span>
            <input id="ai-key" type="password" autocomplete="off"
                   class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                   placeholder="sk-..." />
          </label>

          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">Base URL</span>
            <input id="ai-base" type="text" autocomplete="off"
                   class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                   placeholder="${h(a.DEFAULTS.baseUrl)}" />
          </label>

          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
            <input id="ai-model" type="text" autocomplete="off"
                   class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                   placeholder="${h(a.DEFAULTS.model)}" />
          </label>

          <div class="flex flex-wrap items-center gap-3 pt-1">
            <button id="ai-test"  class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition disabled:opacity-50">
              \u6D4B\u8BD5\u8FDE\u63A5
            </button>
            <button id="ai-reset" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
              \u91CD\u7F6E
            </button>
            <div class="flex-1"></div>
            <span id="ai-msg" class="text-xs text-slate-500"></span>
            <button id="ai-save"  class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              \u4FDD\u5B58
            </button>
          </div>

          <pre id="ai-reply" class="hidden text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md p-2 whitespace-pre-wrap break-words"></pre>
        </div>

        <!-- \u73AF\u5883\u53D8\u91CF -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <strong>\u73AF\u5883\u53D8\u91CF (\u6765\u81EA .env)</strong>
          <table class="w-full text-sm">
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">PORT</th><td class="py-1 font-mono">${d("PORT","?")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">API_BASE</th><td class="py-1 font-mono">${d("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_BASE_URL</th><td class="py-1 font-mono">${d("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_MODEL</th><td class="py-1 font-mono">${d("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">DEBUG</th><td class="py-1 font-mono">${d("DEBUG","false")}</td></tr>
          </table>
          <p class="text-xs text-slate-500 mt-2">
            \u4FEE\u6539\u6839\u76EE\u5F55 <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">.env</code> \u540E,\u8FD0\u884C <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">./restart.sh</code> \u91CD\u65B0\u52A0\u8F7D\u3002
          </p>
        </div>

        <!-- \u672C\u5730\u6570\u636E -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <strong>\u672C\u5730\u6570\u636E</strong>
          <div class="flex items-center gap-3">
            <button id="clear-storage"   class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition">\u6E05\u7A7A localStorage</button>
          </div>
        </div>

      </div>
    `,this._root=e;let b=e.querySelector("#ai-key"),x=e.querySelector("#ai-base"),u=e.querySelector("#ai-model");b.value=n.apiKey,x.value=n.baseUrl,u.value=n.model;let c=e.querySelector("#ai-status"),i=t=>{t?(c.textContent="\u2713 \u5DF2\u914D\u7F6E",c.className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"):(c.textContent="\u672A\u914D\u7F6E",c.className="ml-auto text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")},y=e.querySelector("#ai-msg"),s=e.querySelector("#ai-reply"),r=(t,o="info")=>{y.textContent=t||"",y.className="text-xs "+(o==="ok"?"text-green-600 dark:text-green-400":o==="err"?"text-red-600 dark:text-red-400":"text-slate-500")},m=()=>({apiKey:b.value.trim(),baseUrl:x.value.trim()||a.DEFAULTS.baseUrl,model:u.value.trim()||a.DEFAULTS.model}),g=()=>{let t=m();a.save(t),i(!!t.apiKey)};b.addEventListener("input",g),x.addEventListener("input",g),u.addEventListener("input",g),e.querySelector("#ai-save").addEventListener("click",()=>{let t=m();if(!t.apiKey){r("\u8BF7\u586B\u5199 API Key","err");return}a.save(t),i(!0),r(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),s.classList.add("hidden"),s.textContent=""}),e.querySelector("#ai-reset").addEventListener("click",()=>{a.clear(),e.querySelector("#ai-key").value="",e.querySelector("#ai-base").value="",e.querySelector("#ai-model").value="",i(!1),r("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09"),s.classList.add("hidden"),s.textContent=""});let l=e.querySelector("#ai-test");l.addEventListener("click",async()=>{let t=m();if(!t.apiKey){r("\u8BF7\u586B\u5199 API Key","err");return}a.save(t),l.disabled=!0;let o=l.textContent;l.textContent="\u6D4B\u8BD5\u4E2D...",r("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info"),s.classList.add("hidden"),s.textContent="";try{let p=await a.test(t,{timeoutMs:3e4});r(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),s.textContent=p,s.classList.remove("hidden"),i(!0)}catch(p){r(`\u8054\u901A\u5931\u8D25\uFF1A${p?.message||String(p)}`,"err"),i(!1)}finally{l.disabled=!1,l.textContent=o}}),e.querySelector("#clear-storage").addEventListener("click",async()=>{if(await k("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?(\u4F1A\u540C\u65F6\u6E05\u7A7A\u5DE5\u4F5C\u533A + \u6240\u6709\u7F51\u9875\u6570\u636E)",{danger:!0})){v.clear();try{let{del:t,clear:o}=await import("./chunk-RPG75IPN.js");await t("fs","workspace").catch(()=>{}),await o("snapshots").catch(()=>{})}catch(t){console.warn("[settings] \u6E05\u7406 IDB \u5931\u8D25:",t)}}})},unmount(){this._root=null}};function h(e){return String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}var q=w;export{q as default,w as page};
