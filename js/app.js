import{a as p}from"./chunk-7ICZ64LN.js";import{a as i,c as n,d as y}from"./chunk-H76I7UO6.js";import{a as c}from"./chunk-CHUR53R7.js";var g=class{constructor(){this.routes=new Map,this.guards=[],this.current=null,this._pageInstance=null}addRoute(e,t){this.routes.set(e,t)}beforeEach(e){this.guards.push(e)}async navigate(e){if(e!==this.current){if(location.hash!=="#"+e){location.hash=e;return}await this._render(e)}}async start(){window.addEventListener("hashchange",()=>this._handleHash()),await this._handleHash()}async _handleHash(){let e=location.hash.replace(/^#/,"")||"/";await this._render(e)}async _render(e){let t=this.routes.get(e)||this.routes.get("/404");if(!t){console.warn(`[router] no route for "${e}"`);return}for(let a of this.guards)if(!await a(e))return;typeof this._pageInstance?.unmount=="function"&&this._pageInstance.unmount();let s=await t();this._pageInstance=s.default||s,p.emit("route:change",{path:e,page:this._pageInstance}),this.current=e}},d=new g;function k(u={},e={}){let{persistKey:t,transform:s}=e,a=t?c.get(t):null,o=new Proxy({...u,...a||{}},{set(r,f,m){return r[f]=m,t&&c.set(t,s?s(r):{...r}),h(),!0}}),l=new Set,h=()=>l.forEach(r=>r(o));return{get state(){return o},subscribe(r){return l.add(r),r(o),()=>l.delete(r)},set(r){Object.assign(o,r),t&&c.set(t,{...o}),h()},reset(){Object.keys(o).forEach(r=>delete o[r]),Object.assign(o,u),t&&c.remove(t),h()}}}var _=k({user:null,sidebarCollapsed:!1},{persistKey:"app-state"});var x=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="flex h-screen overflow-hidden">
        <main class="flex-1 min-w-0 min-h-0">
          <section id="main" class="h-full overflow-hidden"></section>
        </main>
      </div>

      <!-- \u8BBE\u7F6E\u5F39\u6846 -->
      <dialog id="dlg-settings"
              class="rounded-xl shadow-2xl p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/50 w-[min(92vw,720px)] max-w-none">
        <form method="dialog" class="p-5 flex flex-col gap-4 max-h-[88vh]">
          <div class="flex items-center gap-2 shrink-0">
            <h3 class="text-base font-semibold flex-1">\u2699 \u8BBE\u7F6E</h3>
            <button type="button" data-action="close"
                    class="w-8 h-8 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-center"
                    aria-label="\u5173\u95ED">
              \u2715
            </button>
          </div>

          <!-- \u6EDA\u52A8\u5BB9\u5668,\u5185\u5BB9\u8D85\u51FA\u65F6\u53EF\u6EDA\u52A8 -->
          <div class="flex-1 min-h-0 overflow-y-auto pr-1 flex flex-col gap-4">

            <!-- 1. MiniMax AI \u914D\u7F6E -->
            <section class="flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <strong class="text-sm">MiniMax AI \u914D\u7F6E</strong>
                <span id="ai-status" class="ml-auto text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200">
                  \u672A\u914D\u7F6E
                </span>
              </div>
              <p class="text-xs text-slate-500 -mt-1">
                API Key \u4EC5\u5B58\u4E8E\u6D4F\u89C8\u5668 localStorage,\u4E0D\u4E0A\u4F20\u4EFB\u4F55\u4E1A\u52A1\u670D\u52A1\u5668\u3002
              </p>

              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">API Key<span class="text-red-500"> *</span></span>
                <input id="ai-key" type="password" autocomplete="off"
                       class="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm"
                       placeholder="sk-..." />
              </label>

              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">Base URL</span>
                <input id="ai-base" type="text" autocomplete="off"
                       class="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm" />
              </label>

              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">Model</span>
                <input id="ai-model" type="text" autocomplete="off"
                       class="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm" />
              </label>

              <!-- \u6027\u80FD\u9009\u9879:\u601D\u8003\u6863\u4F4D + \u5C0F\u6A21\u578B\u52A0\u901F (2026-09-23 \u52A0\u5165,v2 \u6539\u4E3A\u4E0B\u62C9,\u9ED8\u8BA4\u5C55\u5F00) -->
              <div class="flex flex-col gap-2 pt-2 pl-1 border-l-2 border-slate-200 dark:border-slate-700 ml-1">
                <strong class="text-xs text-slate-600 dark:text-slate-300 select-none">
                  \u26A1 \u6027\u80FD\u9009\u9879
                </strong>

                <!-- \u601D\u8003\u6863\u4F4D:\u679A\u4E3E\u4E0B\u62C9,v1 \u7684 number \u5B57\u6BB5\u5DF2\u88AB\u66FF\u6362 -->
                <label class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">
                    \u601D\u8003\u6863\u4F4D <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">reasoning_effort</code>
                  </span>
                  <select id="ai-thinking"
                          class="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm">
                    <option value="">\u8DDF\u968F API \u9ED8\u8BA4 (\u63A8\u8350)</option>
                    <option value="0">\u7981\u7528\u601D\u8003 \u2014 \u6700\u5FEB (\u753B\u82F9\u679C/\u6539\u989C\u8272\u7B49\u7B80\u5355\u4EFB\u52A1)</option>
                    <option value="1">\u6700\u5C0F \u2014 reasoning_effort=minimal</option>
                    <option value="2">\u4E2D\u7B49 \u2014 reasoning_effort=medium</option>
                    <option value="3">\u9AD8   \u2014 reasoning_effort=high</option>
                  </select>
                  <span class="text-[10px] text-slate-500 -mt-0.5">
                    \u8BBE\u4E3A"\u7981\u7528"\u5927\u5E45\u7F29\u77ED\u8017\u65F6;\u8BBE\u4E3A"\u9AD8"\u8D28\u91CF\u6700\u597D\u4F46\u6700\u6162\u3002
                    M2.x \u6A21\u578B\u5728 OpenAI \u517C\u5BB9\u7AEF\u70B9\u4E0A"\u7981\u7528\u601D\u8003"\u5B9E\u9645\u4ECD\u4F1A\u601D\u8003(API \u9650\u5236)\u3002
                  </span>
                </label>

                <div class="flex items-center gap-2 pt-1">
                  <input id="ai-use-fast" type="checkbox"
                         class="w-4 h-4 accent-blue-600 cursor-pointer" />
                  <label for="ai-use-fast" class="text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                    \u542F\u7528\u5C0F\u6A21\u578B\u52A0\u901F(\u7528\u4E0B\u65B9 Fast Model \u66FF\u4EE3\u4E3B Model)
                  </label>
                </div>

                <!-- Fast Model:select \u9884\u8BBE + input \u81EA\u5B9A\u4E49 -->
                <div class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">Fast Model</span>
                  <select id="ai-fast-preset"
                          class="w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm">
                    <option value="">\u2014 \u9009\u62E9\u9884\u8BBE \u2014</option>
                    <option value="MiniMax-M2.7-highspeed">MiniMax-M2.7-highspeed \u2B50 \u6700\u65B0\u9AD8\u901F\u7248</option>
                    <option value="MiniMax-M2.5-highspeed">MiniMax-M2.5-highspeed</option>
                    <option value="MiniMax-M2.1-highspeed">MiniMax-M2.1-highspeed</option>
                    <option value="MiniMax-M2.7">MiniMax-M2.7</option>
                    <option value="MiniMax-M2.5">MiniMax-M2.5</option>
                    <option value="MiniMax-M3">MiniMax-M3 (\u4E3B\u6A21\u578B)</option>
                    <option value="__custom__">\u81EA\u5B9A\u4E49...</option>
                  </select>
                  <input id="ai-fast-model" type="text" autocomplete="off"
                         class="hidden w-full px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm"
                         placeholder="\u8F93\u5165\u81EA\u5B9A\u4E49 model \u540D" />
                  <span class="text-[10px] text-slate-500 -mt-0.5">
                    \u9884\u8BBE\u6765\u81EA <code class="bg-slate-100 dark:bg-slate-700 px-0.5 rounded">/v1/models</code> \u5B9E\u9645\u53EF\u7528\u5217\u8868\u3002
                    \u9009"\u81EA\u5B9A\u4E49"\u540E\u5728\u4E0B\u65B9\u8F93\u5165\u6846\u586B\u4EFB\u610F model \u540D\u3002
                  </span>
                </div>
              </div>

              <div class="flex flex-wrap items-center gap-2 pt-1">
                <button type="button" id="ai-test"
                        class="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm disabled:opacity-50">
                  \u6D4B\u8BD5\u8FDE\u63A5
                </button>
                <button type="button" id="ai-reset"
                        class="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">
                  \u91CD\u7F6E
                </button>
                <div class="flex-1"></div>
                <span id="ai-msg" class="text-xs text-slate-500"></span>
                <button type="button" id="ai-save"
                        class="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">
                  \u4FDD\u5B58
                </button>
              </div>
            </section>

            <!-- 2. \u73AF\u5883\u53D8\u91CF (\u53EA\u8BFB) -->
            <section class="flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700 pt-4">
              <strong class="text-sm">\u73AF\u5883\u53D8\u91CF (\u6765\u81EA .env)</strong>
              <table class="w-full text-xs">
                <tr><th class="text-left py-0.5 pr-3 text-slate-500 font-normal w-28">PORT</th><td class="py-0.5 font-mono">${i("PORT","?")}</td></tr>
                <tr><th class="text-left py-0.5 pr-3 text-slate-500 font-normal w-28">API_BASE</th><td class="py-0.5 font-mono">${i("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
                <tr><th class="text-left py-0.5 pr-3 text-slate-500 font-normal w-28">AI_BASE_URL</th><td class="py-0.5 font-mono">${i("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
                <tr><th class="text-left py-0.5 pr-3 text-slate-500 font-normal w-28">AI_MODEL</th><td class="py-0.5 font-mono">${i("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
                <tr><th class="text-left py-0.5 pr-3 text-slate-500 font-normal w-28">DEBUG</th><td class="py-0.5 font-mono">${i("DEBUG","false")}</td></tr>
              </table>
            </section>

            <!-- 3. UI \u504F\u597D -->
            <section class="flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700 pt-4">
              <strong class="text-sm">UI \u504F\u597D</strong>
              <div class="flex items-center gap-2">
                <button type="button" id="reset-fs-float-pos"
                        class="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">
                  \u91CD\u7F6E\u60AC\u6D6E\u5168\u5C4F\u6309\u94AE\u4F4D\u7F6E
                </button>
                <span id="fs-float-msg" class="text-xs text-slate-500"></span>
              </div>
              <p class="text-xs text-slate-500 -mt-1">
                \u628A\u9884\u89C8\u533A\u60AC\u6D6E\u7684"\u5168\u5C4F"\u6309\u94AE\u653E\u56DE\u9ED8\u8BA4\u53F3\u4E0A\u89D2\u3002\u4EC5\u6E05\u9664\u4F4D\u7F6E\u7F13\u5B58,\u4E0D\u5F71\u54CD\u5176\u4ED6\u6570\u636E\u3002
              </p>
            </section>

            <!-- 4. \u672C\u5730\u6570\u636E -->
            <section class="flex flex-col gap-2 border-t border-slate-200 dark:border-slate-700 pt-4">
              <strong class="text-sm">\u672C\u5730\u6570\u636E</strong>
              <div class="flex items-center gap-2">
                <button type="button" id="clear-storage"
                        class="px-3 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700 transition text-sm">
                  \u6E05\u7A7A localStorage
                </button>
                <span id="storage-msg" class="text-xs text-slate-500"></span>
              </div>
            </section>

          </div>
        </form>
      </dialog>
    `,this.mainEl=this.querySelector("#main"),this._dlg=this.querySelector("#dlg-settings"),p.on("route:change",({path:e,page:t})=>{this.mainEl.innerHTML="",typeof t.mount=="function"&&t.mount(this.mainEl)}),p.on("settings:open",()=>this._openSettings()),this._dlg.querySelector('[data-action="close"]').addEventListener("click",()=>this._dlg.close()),this._wireSettingsForm()}_openSettings(){this._populateSettingsForm(),this._dlg.showModal()}_populateSettingsForm(){let e=n.get(),t=this._dlg;t.querySelector("#ai-key").value=e.apiKey,t.querySelector("#ai-base").value=e.baseUrl,t.querySelector("#ai-model").value=e.model,t.querySelector("#ai-thinking").value=e.thinkingEffort==null?"":String(e.thinkingEffort),t.querySelector("#ai-use-fast").checked=!!e.useFastModel;let s=t.querySelector("#ai-fast-preset"),a=t.querySelector("#ai-fast-model"),o=Array.from(s.options).map(l=>l.value).filter(Boolean);e.fastModel&&!o.includes(e.fastModel)?(s.value="__custom__",a.value=e.fastModel,a.classList.remove("hidden")):e.fastModel?(s.value=e.fastModel,a.value="",a.classList.add("hidden")):(s.value="",a.value="",a.classList.add("hidden")),this._refreshAiStatus(),this._setAiMsg("","info"),this._setStorageMsg("")}_refreshAiStatus(){let e=this._dlg.querySelector("#ai-status");n.isConfigured()?(e.textContent="\u2713 \u5DF2\u914D\u7F6E",e.className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"):(e.textContent="\u672A\u914D\u7F6E",e.className="ml-auto text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")}_setAiMsg(e,t="info"){let s=this._dlg.querySelector("#ai-msg");s.textContent=e||"",s.className="text-xs "+(t==="ok"?"text-green-600 dark:text-green-400":t==="err"?"text-red-600 dark:text-red-400":"text-slate-500")}_setStorageMsg(e,t="info"){let s=this._dlg.querySelector("#storage-msg");s.textContent=e||"",s.className="text-xs "+(t==="ok"?"text-green-600 dark:text-green-400":t==="err"?"text-red-600 dark:text-red-400":"text-slate-500")}_readSettingsForm(){let e=this._dlg,t=e.querySelector("#ai-thinking").value.trim(),s=e.querySelector("#ai-fast-preset"),a=e.querySelector("#ai-fast-model"),o=s.value,l=o==="__custom__"?a.value.trim():o.trim();return{apiKey:e.querySelector("#ai-key").value.trim(),baseUrl:e.querySelector("#ai-base").value.trim()||n.DEFAULTS.baseUrl,model:e.querySelector("#ai-model").value.trim()||n.DEFAULTS.model,thinkingEffort:t===""?null:Number(t),fastModel:l,useFastModel:e.querySelector("#ai-use-fast").checked}}_wireSettingsForm(){let e=this._dlg;e.querySelector("#ai-save").addEventListener("click",()=>{let s=this._readSettingsForm();if(!s.apiKey){this._setAiMsg("\u8BF7\u586B\u5199 API Key","err");return}n.save(s),this._refreshAiStatus(),this._setAiMsg(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok")}),e.querySelector("#ai-reset").addEventListener("click",()=>{n.clear(),e.querySelector("#ai-key").value="",e.querySelector("#ai-base").value="",e.querySelector("#ai-model").value="",e.querySelector("#ai-thinking").value="",e.querySelector("#ai-use-fast").checked=!1,e.querySelector("#ai-fast-preset").value="";let s=e.querySelector("#ai-fast-model");s.value="",s.classList.add("hidden"),this._refreshAiStatus(),this._setAiMsg("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09")}),e.querySelector("#ai-fast-preset").addEventListener("change",s=>{let a=e.querySelector("#ai-fast-model");s.target.value==="__custom__"?a.classList.remove("hidden"):(a.classList.add("hidden"),a.value="")});let t=e.querySelector("#ai-test");t.addEventListener("click",async()=>{let s=this._readSettingsForm();if(!s.apiKey){this._setAiMsg("\u8BF7\u586B\u5199 API Key","err");return}n.save(s),this._refreshAiStatus(),t.disabled=!0;let a=t.textContent;t.textContent="\u6D4B\u8BD5\u4E2D...",this._setAiMsg("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info");try{await n.test(s,{timeoutMs:3e4}),this._setAiMsg(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),this._refreshAiStatus()}catch(o){this._setAiMsg(`\u8054\u901A\u5931\u8D25:${o?.message||String(o)}`,"err"),this._refreshAiStatus()}finally{t.disabled=!1,t.textContent=a}}),e.querySelector("#clear-storage").addEventListener("click",async()=>{await y("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?",{danger:!0})&&(c.clear(),this._setStorageMsg(`\u5DF2\u6E05\u7A7A (${new Date().toLocaleTimeString()})`,"ok"))}),e.querySelector("#reset-fs-float-pos").addEventListener("click",()=>{p.emit("web-builder:reset-fs-btn");let s=e.querySelector("#fs-float-msg");s.textContent=`\u5DF2\u91CD\u7F6E (${new Date().toLocaleTimeString()})`,s.className="text-xs text-green-600 dark:text-green-400"})}};customElements.define("app-shell",x);var b=class extends HTMLElement{connectedCallback(){this.innerHTML.trim()||(this.innerHTML=`
        <dialog class="rounded-xl shadow-2xl p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40">
          <form method="dialog" class="p-5 min-w-[320px] max-w-[480px]">
            <h3 class="dialog-title text-base font-semibold mb-3"></h3>
            <div class="dialog-body mb-4 text-slate-600 dark:text-slate-300"></div>
            <div class="dialog-input-wrap mb-4 hidden">
              <input class="dialog-input w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
            </div>
            <div class="flex gap-2 justify-end">
              <button type="button" data-action="cancel"
                      class="dlg-cancel px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                \u53D6\u6D88
              </button>
              <button type="button" data-action="confirm"
                      class="dlg-confirm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                \u786E\u5B9A
              </button>
            </div>
          </form>
        </dialog>
      `),this.dlg=this.querySelector("dialog"),this.titleEl=this.querySelector(".dialog-title"),this.bodyEl=this.querySelector(".dialog-body"),this.inputWrap=this.querySelector(".dialog-input-wrap"),this.inputEl=this.querySelector(".dialog-input"),this.cancelBtn=this.querySelector('[data-action="cancel"]'),this.confirmBtn=this.querySelector('[data-action="confirm"]'),this.cancelBtn.addEventListener("click",()=>this._fire("cancel")),this.confirmBtn.addEventListener("click",()=>this._fire("confirm")),this.dlg.addEventListener("cancel",e=>{e.preventDefault(),this._fire("cancel")}),this.dlg.addEventListener("click",e=>{e.target===this.dlg&&this._fire("cancel")}),this.inputEl.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),this._fire("confirm"))}),this.dlg.addEventListener("keydown",e=>{e.key==="Enter"&&this._mode!=="prompt"&&e.target?.tagName!=="BUTTON"&&(e.preventDefault(),this._fire("confirm"))})}open({title:e="\u63D0\u793A",body:t="",onConfirm:s}={}){this._render({mode:"confirm",title:e,body:t,onResolve:()=>{}}),this._onLegacyConfirm=s,this.dlg.showModal()}confirm(e={}){return new Promise(t=>{this._render({mode:"confirm",...e,onResolve:t}),this.dlg.showModal(),this.dlg.focus()})}alert(e={}){return new Promise(t=>{this._render({mode:"alert",...e,onResolve:t}),this.dlg.showModal(),this.dlg.focus()})}prompt(e={}){return new Promise(t=>{this._render({mode:"prompt",...e,onResolve:t}),this.dlg.showModal(),this.inputEl.focus(),this.inputEl.select()})}_render({mode:e,title:t="\u63D0\u793A",body:s="",defaultValue:a="",placeholder:o="",confirmText:l="\u786E\u5B9A",cancelText:h="\u53D6\u6D88",danger:r=!1,onResolve:f}){this._mode=e,this._onResolve=f,this._onLegacyConfirm=null,this.titleEl.textContent=t,this.bodyEl.innerHTML="",s instanceof HTMLElement?this.bodyEl.appendChild(s):this.bodyEl.textContent=String(s??"");let m=e==="prompt";this.inputWrap.classList.toggle("hidden",!m),m&&(this.inputEl.value=a??"",this.inputEl.placeholder=o??""),e==="alert"?this.cancelBtn.classList.add("hidden"):(this.cancelBtn.classList.remove("hidden"),this.cancelBtn.textContent=h),this.confirmBtn.textContent=l,this.confirmBtn.className="dlg-confirm px-4 py-2 rounded-md transition "+(r?"bg-red-600 text-white hover:bg-red-700":"bg-blue-600 text-white hover:bg-blue-700")}_fire(e){if(this.dlg.open){if(this.dlg.close(),e==="confirm"){let t=this._mode==="prompt"?this.inputEl.value:void 0;this._onResolve?.(this._mode==="prompt"?t:!0),this._onLegacyConfirm&&this._onLegacyConfirm()}else this._onResolve?.(this._mode==="prompt"?null:!1);this._onResolve=null,this._onLegacyConfirm=null}}};customElements.define("app-dialog",b);var v=class extends HTMLElement{static get observedAttributes(){return["empty-text"]}set columns(e){this._columns=e,this._render()}get columns(){return this._columns||[]}set data(e){this._data=e||[],this._render()}get data(){return this._data||[]}connectedCallback(){this._columns||(this._columns=[]),this._data||(this._data=[]),this._render()}attributeChangedCallback(){this._render()}_render(){let e=this.getAttribute("empty-text")||"\u6682\u65E0\u6570\u636E";if(!this._columns.length){this.innerHTML='<div class="text-slate-500 text-sm">\u672A\u914D\u7F6E columns</div>';return}if(!this._data.length){this.innerHTML=`<div class="py-8 text-center text-slate-500 text-sm">${e}</div>`;return}this.innerHTML=`
      <div class="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800">
              ${this._columns.map(t=>`<th class="text-left px-4 py-3 font-semibold">${t.label||t.key}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${this._data.map(t=>`
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                ${this._columns.map(s=>`<td class="px-4 py-3 border-t border-slate-200 dark:border-slate-700">${this._cell(t,s)}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `}_cell(e,t){let s=e[t.key];return t.render?t.render(s,e):s==null?"":String(s)}};customElements.define("app-table",v);d.addRoute("/",()=>import("./web-builder.js"));d.addRoute("/editor",()=>import("./editor.js"));d.addRoute("/web-builder",()=>import("./web-builder.js"));d.addRoute("/settings",()=>import("./settings.js"));d.addRoute("/404",()=>import("./not-found.js"));console.info("[app] starting, port=",i("PORT","?"),"API_BASE=",i("API_BASE","(none)"));d.start();window.__app={router:d,store:_};
