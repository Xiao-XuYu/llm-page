import{a as m,b as f}from"./chunk-G5QFCHV5.js";import"./chunk-CHUR53R7.js";var x=f("API_BASE",""),S="token";function p(){try{return localStorage.getItem(S)||""}catch{return""}}async function c(t,e,{query:s,body:o,headers:b,signal:a}={}){let l=new URL(x+e,location.origin);s&&Object.entries(s).forEach(([r,i])=>i!=null&&l.searchParams.set(r,i));let d={method:t,headers:{"Content-Type":"application/json",...p()?{Authorization:`Bearer ${p()}`}:{},...b},signal:a};o!==void 0&&(d.body=typeof o=="string"?o:JSON.stringify(o));let n=await fetch(l.toString().replace(location.origin,""),d);if(!n.ok){let r=await n.text().catch(()=>n.statusText);throw new u(n.status,r)}return(n.headers.get("content-type")||"").includes("application/json")?n.json():n.text()}var u=class extends Error{constructor(e,s){super(`HTTP ${e}: ${s}`),this.status=e,this.body=s}},y={get:(t,e)=>c("GET",t,e),post:(t,e,s)=>c("POST",t,{...s,body:e}),put:(t,e,s)=>c("PUT",t,{...s,body:e}),delete:(t,e)=>c("DELETE",t,e),async stream(t,e,{onChunk:s,signal:o}={}){let b=(x+t).replace(location.origin,""),a=await fetch(b,{method:"POST",headers:{"Content-Type":"application/json",...p()?{Authorization:`Bearer ${p()}`}:{}},body:JSON.stringify(e),signal:o});if(!a.ok||!a.body)throw new u(a.status,"stream failed");let l=a.body.getReader(),d=new TextDecoder,n="";for(;;){let{done:g,value:r}=await l.read();if(g)break;n+=d.decode(r,{stream:!0});let i=n.split(`
`);n=i.pop()||"";for(let w of i){let h=w.trim();h.startsWith("data:")&&s(h.slice(5).trim())}}}};var v={title:"\u9996\u9875",mount(t){t.innerHTML=`
      <div class="flex flex-col gap-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
          <h2 class="text-lg font-semibold mb-2">\u{1F44B} \u6B22\u8FCE</h2>
          <p class="text-slate-600 dark:text-slate-300">
            \u8FD9\u662F\u4E00\u4E2A\u539F\u751F Web Components + Tailwind \u6A21\u677F\u3002\u65E0\u6784\u5EFA\u5DE5\u5177,\u5F00\u7BB1\u5373\u7528\u3002
          </p>
          <div class="flex items-center gap-3 mt-4">
            <button id="hello" class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">\u6253\u4E2A\u62DB\u547C</button>
            <button id="ping"  class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">\u6D4B\u8BD5 API</button>
            <span id="ping-result" class="text-xs text-slate-500"></span>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
          <div class="flex items-center mb-3 gap-3">
            <strong>\u793A\u4F8B\u8868\u683C</strong>
            <div class="flex-1"></div>
            <span class="text-xs text-slate-500">\u5171 <span id="row-count">0</span> \u6761</span>
          </div>
          <app-table id="tbl"></app-table>
        </div>
      </div>
    `,this._root=t,this._table=t.querySelector("#tbl"),this._table.columns=[{key:"id",label:"#"},{key:"name",label:"\u540D\u79F0"},{key:"desc",label:"\u63CF\u8FF0"}],this._table.data=[{id:1,name:"Web Components",desc:"\u539F\u751F\u7EC4\u4EF6,\u65E0\u9700\u6846\u67B6"},{id:2,name:"ES Modules",desc:"\u73B0\u4EE3\u6D4F\u89C8\u5668\u539F\u751F\u652F\u6301"},{id:3,name:"Tailwind CDN",desc:"\u96F6\u6784\u5EFA utility-first CSS"}],t.querySelector("#row-count").textContent=this._table.data.length,t.querySelector("#hello").addEventListener("click",()=>{document.querySelector("#global-dialog").open({title:"\u4F60\u597D \u{1F44B}",body:`\u5F53\u524D sidebar \u6536\u8D77\u72B6\u6001: ${m.state.sidebarCollapsed?"\u662F":"\u5426"}`,onConfirm:()=>console.log("[home] confirmed")})}),t.querySelector("#ping").addEventListener("click",()=>this._ping())},async _ping(){let t=this._root.querySelector("#ping-result");t.textContent="\u8BF7\u6C42\u4E2D...";try{let e=await y.get("/health");t.textContent="\u2705 "+JSON.stringify(e)}catch(e){t.textContent="\u274C "+e.message}},unmount(){this._root=null}},_=v;export{_ as default,v as page};
