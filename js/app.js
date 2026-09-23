import{a as m,b as r}from"./chunk-G5QFCHV5.js";import"./chunk-CHUR53R7.js";var i=new Map,o={on(a,t){return i.has(a)||i.set(a,new Set),i.get(a).add(t),()=>o.off(a,t)},off(a,t){i.get(a)?.delete(t)},emit(a,t){i.get(a)?.forEach(e=>{try{e(t)}catch(s){console.error(`[bus] ${a} handler threw:`,s)}})}};var l=class{constructor(){this.routes=new Map,this.guards=[],this.current=null,this._pageInstance=null}addRoute(t,e){this.routes.set(t,e)}beforeEach(t){this.guards.push(t)}async navigate(t){if(t!==this.current){if(location.hash!=="#"+t){location.hash=t;return}await this._render(t)}}async start(){window.addEventListener("hashchange",()=>this._handleHash()),await this._handleHash()}async _handleHash(){let t=location.hash.replace(/^#/,"")||"/";await this._render(t)}async _render(t){let e=this.routes.get(t)||this.routes.get("/404");if(!e){console.warn(`[router] no route for "${t}"`);return}for(let p of this.guards)if(!await p(t))return;typeof this._pageInstance?.unmount=="function"&&this._pageInstance.unmount();let s=await e();this._pageInstance=s.default||s,o.emit("route:change",{path:t,page:this._pageInstance}),this.current=t}},n=new l;var d=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="flex h-screen">
        <app-sidebar class="w-56 shrink-0"></app-sidebar>
        <main class="flex-1 flex flex-col min-w-0">
          <header class="flex items-center px-5 py-3 border-b border-slate-200 dark:border-slate-700 gap-3">
            <h1 id="page-title" class="text-base font-semibold"></h1>
            <div class="flex-1"></div>
            <span id="env-info" class="text-xs text-slate-500 dark:text-slate-400 font-mono"></span>
          </header>
          <section id="main" class="flex-1 p-5 overflow-auto"></section>
        </main>
      </div>
    `,this.mainEl=this.querySelector("#main"),this.titleEl=this.querySelector("#page-title"),o.on("route:change",({path:t,page:e})=>{this.titleEl.textContent=e.title||t,this.mainEl.innerHTML="",typeof e.mount=="function"&&e.mount(this.mainEl)}),this.querySelector("#env-info").textContent=`PORT=${window.__ENV__?.PORT||"?"} \xB7 API=${window.__ENV__?.API_BASE||"(none)"}`}};customElements.define("app-shell",d);var c=class extends HTMLElement{connectedCallback(){let t=[{path:"/",label:"\u9996\u9875"},{path:"/editor",label:"\u7F16\u8F91\u5668"},{path:"/settings",label:"\u8BBE\u7F6E"}];this.innerHTML=`
      <nav class="h-full bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 p-4 flex flex-col">
        <div class="font-bold px-2 py-1 mb-3">\u26A1 AI App</div>
        <ul class="flex flex-col gap-0.5">
          ${t.map(e=>`
            <li>
              <a href="#${e.path}" data-path="${e.path}"
                 class="block px-3 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition">
                ${e.label}
              </a>
            </li>
          `).join("")}
        </ul>
      </nav>
    `,this._updateActive(),window.addEventListener("hashchange",()=>this._updateActive())}_updateActive(){let t=location.hash.replace(/^#/,"")||"/";this.querySelectorAll("a[data-path]").forEach(e=>{let s=e.dataset.path===t;e.classList.toggle("bg-blue-600",s),e.classList.toggle("text-white",s),e.classList.toggle("hover:bg-blue-700",s)})}};customElements.define("app-sidebar",c);var h=class extends HTMLElement{connectedCallback(){this.innerHTML.trim()||(this.innerHTML=`
        <dialog class="rounded-xl shadow-2xl p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40">
          <form method="dialog" class="p-5 min-w-[320px] max-w-[480px]">
            <h3 class="dialog-title text-base font-semibold mb-3"></h3>
            <div class="dialog-body mb-4 text-slate-600 dark:text-slate-300"></div>
            <div class="flex gap-2 justify-end">
              <button type="button" data-action="cancel"
                      class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                \u53D6\u6D88
              </button>
              <button type="button" data-action="confirm"
                      class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                \u786E\u5B9A
              </button>
            </div>
          </form>
        </dialog>
      `),this.dlg=this.querySelector("dialog"),this.titleEl=this.querySelector(".dialog-title"),this.bodyEl=this.querySelector(".dialog-body"),this.querySelector('[data-action="cancel"]').addEventListener("click",()=>this._close("cancel")),this.querySelector('[data-action="confirm"]').addEventListener("click",()=>this._close("confirm"))}open({title:t="\u63D0\u793A",body:e="",onConfirm:s}={}){this._onConfirm=s,this.titleEl.textContent=t,this.bodyEl.innerHTML="",e instanceof HTMLElement?this.bodyEl.appendChild(e):this.bodyEl.textContent=e,this.dlg.showModal()}_close(t){this.dlg.close(),t==="confirm"&&typeof this._onConfirm=="function"&&this._onConfirm(),this._onConfirm=null}};customElements.define("app-dialog",h);var u=class extends HTMLElement{static get observedAttributes(){return["empty-text"]}set columns(t){this._columns=t,this._render()}get columns(){return this._columns||[]}set data(t){this._data=t||[],this._render()}get data(){return this._data||[]}connectedCallback(){this._columns||(this._columns=[]),this._data||(this._data=[]),this._render()}attributeChangedCallback(){this._render()}_render(){let t=this.getAttribute("empty-text")||"\u6682\u65E0\u6570\u636E";if(!this._columns.length){this.innerHTML='<div class="text-slate-500 text-sm">\u672A\u914D\u7F6E columns</div>';return}if(!this._data.length){this.innerHTML=`<div class="py-8 text-center text-slate-500 text-sm">${t}</div>`;return}this.innerHTML=`
      <div class="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800">
              ${this._columns.map(e=>`<th class="text-left px-4 py-3 font-semibold">${e.label||e.key}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${this._data.map(e=>`
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                ${this._columns.map(s=>`<td class="px-4 py-3 border-t border-slate-200 dark:border-slate-700">${this._cell(e,s)}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `}_cell(t,e){let s=t[e.key];return e.render?e.render(s,t):s==null?"":String(s)}};customElements.define("app-table",u);n.addRoute("/",()=>import("./home.js"));n.addRoute("/editor",()=>import("./editor.js"));n.addRoute("/settings",()=>import("./settings.js"));n.addRoute("/404",()=>import("./not-found.js"));console.info("[app] starting, port=",r("PORT","?"),"API_BASE=",r("API_BASE","(none)"));n.start();window.__app={router:n,store:m};
