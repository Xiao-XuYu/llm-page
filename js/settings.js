import{a as y,b as n}from"./chunk-G5QFCHV5.js";import{a as u}from"./chunk-CHUR53R7.js";var h="ai-config",g={baseUrl:n("AI_BASE_URL","https://api.minimaxi.com/v1").trim(),model:n("AI_MODEL","MiniMax-M3").trim()};function f(){let e=u.get(h,{})||{};return{baseUrl:(e.baseUrl||g.baseUrl||"").trim(),apiKey:(e.apiKey||"").trim(),model:(e.model||g.model||"").trim()}}function k(e){let a={...f(),...e};return a.baseUrl=(a.baseUrl||"").trim(),a.apiKey=(a.apiKey||"").trim(),a.model=(a.model||"").trim(),u.set(h,a),a}function w(){return!!f().apiKey}function S(){u.remove(h)}async function A({baseUrl:e,apiKey:a,model:m}={},{signal:c,timeoutMs:p=3e4}={}){let d={...f(),baseUrl:e,apiKey:a,model:m};if(!d.apiKey)throw new Error("API Key \u4E3A\u7A7A\uFF0C\u8BF7\u5148\u586B\u5199");if(!d.baseUrl)throw new Error("Base URL \u4E3A\u7A7A\uFF0C\u8BF7\u5148\u586B\u5199");let l=d.baseUrl.replace(/\/+$/,"")+"/chat/completions",r=new AbortController,x=setTimeout(()=>r.abort(),p);c?.addEventListener?.("abort",()=>r.abort());try{let t=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d.apiKey}`},body:JSON.stringify({model:d.model||g.model,messages:[{role:"system",content:"You are a helpful assistant. Reply concisely."},{role:"user",content:'Reply with exactly the word "pong" plus a short confirmation sentence.'}],temperature:0,max_tokens:64,stream:!1}),signal:r.signal});if(!t.ok){let b=await t.text().catch(()=>t.statusText);throw new Error(`HTTP ${t.status} ${t.statusText} \u2014 ${b.slice(0,200)}`)}let i=(await t.json().catch(()=>null))?.choices?.[0]?.message?.content?.trim();if(!i)throw new Error("\u8FD4\u56DE\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u6A21\u578B\u540D\u6216\u7F51\u7EDC");return i}catch(t){throw t?.name==="AbortError"?new Error("\u8BF7\u6C42\u8D85\u65F6"):t instanceof TypeError?new Error(`\u7F51\u7EDC\u9519\u8BEF\uFF1A${t.message}\uFF08\u53EF\u80FD\u662F CORS / \u8DE8\u57DF\u88AB\u62E6\uFF09`):t}finally{clearTimeout(x)}}var o={get:f,save:k,clear:S,isConfigured:w,test:A,DEFAULTS:g};var E={title:"\u8BBE\u7F6E",mount(e){let a=o.get(),m=o.isConfigured();e.innerHTML=`
      <div class="flex flex-col gap-4">

        <!-- MiniMax AI \u914D\u7F6E -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <strong>MiniMax AI \u914D\u7F6E</strong>
            <span id="ai-status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${m?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200"}">
              ${m?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}
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
                   placeholder="${v(o.DEFAULTS.baseUrl)}" />
          </label>

          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
            <input id="ai-model" type="text" autocomplete="off"
                   class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                   placeholder="${v(o.DEFAULTS.model)}" />
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
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">PORT</th><td class="py-1 font-mono">${n("PORT","?")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">API_BASE</th><td class="py-1 font-mono">${n("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_BASE_URL</th><td class="py-1 font-mono">${n("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_MODEL</th><td class="py-1 font-mono">${n("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
            <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">DEBUG</th><td class="py-1 font-mono">${n("DEBUG","false")}</td></tr>
          </table>
          <p class="text-xs text-slate-500 mt-2">
            \u4FEE\u6539\u6839\u76EE\u5F55 <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">.env</code> \u540E,\u8FD0\u884C <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">./restart.sh</code> \u91CD\u65B0\u52A0\u8F7D\u3002
          </p>
        </div>

        <!-- \u672C\u5730\u6570\u636E -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <strong>\u672C\u5730\u6570\u636E</strong>
          <div class="flex items-center gap-3">
            <button id="toggle-sidebar" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">\u5207\u6362\u4FA7\u8FB9\u680F</button>
            <button id="clear-storage"   class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition">\u6E05\u7A7A localStorage</button>
          </div>
        </div>

      </div>
    `,this._root=e,e.querySelector("#ai-key").value=a.apiKey,e.querySelector("#ai-base").value=a.baseUrl,e.querySelector("#ai-model").value=a.model;let c=e.querySelector("#ai-status"),p=s=>{s?(c.textContent="\u2713 \u5DF2\u914D\u7F6E",c.className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"):(c.textContent="\u672A\u914D\u7F6E",c.className="ml-auto text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")},d=e.querySelector("#ai-msg"),l=e.querySelector("#ai-reply"),r=(s,i="info")=>{d.textContent=s||"",d.className="text-xs "+(i==="ok"?"text-green-600 dark:text-green-400":i==="err"?"text-red-600 dark:text-red-400":"text-slate-500")},x=()=>({apiKey:e.querySelector("#ai-key").value.trim(),baseUrl:e.querySelector("#ai-base").value.trim()||o.DEFAULTS.baseUrl,model:e.querySelector("#ai-model").value.trim()||o.DEFAULTS.model});e.querySelector("#ai-save").addEventListener("click",()=>{let s=x();if(!s.apiKey){r("\u8BF7\u586B\u5199 API Key","err");return}o.save(s),p(!0),r(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),l.classList.add("hidden"),l.textContent=""}),e.querySelector("#ai-reset").addEventListener("click",()=>{o.clear(),e.querySelector("#ai-key").value="",e.querySelector("#ai-base").value="",e.querySelector("#ai-model").value="",p(!1),r("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09"),l.classList.add("hidden"),l.textContent=""});let t=e.querySelector("#ai-test");t.addEventListener("click",async()=>{let s=x();if(!s.apiKey){r("\u8BF7\u586B\u5199 API Key","err");return}o.save(s),t.disabled=!0;let i=t.textContent;t.textContent="\u6D4B\u8BD5\u4E2D...",r("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info"),l.classList.add("hidden"),l.textContent="";try{let b=await o.test(s,{timeoutMs:3e4});r(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),l.textContent=b,l.classList.remove("hidden"),p(!0)}catch(b){r(`\u8054\u901A\u5931\u8D25\uFF1A${b?.message||String(b)}`,"err"),p(!1)}finally{t.disabled=!1,t.textContent=i}}),e.querySelector("#toggle-sidebar").addEventListener("click",()=>{y.set({sidebarCollapsed:!y.state.sidebarCollapsed})}),e.querySelector("#clear-storage").addEventListener("click",()=>{confirm("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?")&&u.clear()})},unmount(){this._root=null}};function v(e){return String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}var _=E;export{_ as default,E as page};
