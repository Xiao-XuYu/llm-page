import{a as t}from"./chunk-CHUR53R7.js";var s={title:"\u7F16\u8F91\u5668",mount(e){let r=t.get("editor:draft",{title:"",content:""});e.innerHTML=`
      <div class="flex flex-col gap-4">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <strong>\u6807\u9898</strong>
          <input id="title" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900" placeholder="\u7ED9\u8FD9\u7BC7\u6587\u7AE0\u8D77\u4E2A\u6807\u9898..." />
          <strong>\u5185\u5BB9</strong>
          <textarea id="content" rows="10" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono" placeholder="\u5F00\u59CB\u5199..."></textarea>
          <div class="flex items-center gap-3">
            <button id="clear" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">\u6E05\u7A7A</button>
            <div class="flex-1"></div>
            <span id="status" class="text-xs text-slate-500">\u672A\u4FDD\u5B58</span>
            <button id="save" class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">\u4FDD\u5B58</button>
          </div>
        </div>
      </div>
    `,this._root=e,e.querySelector("#title").value=r.title,e.querySelector("#content").value=r.content,e.querySelector("#save").addEventListener("click",()=>this._save()),e.querySelector("#clear").addEventListener("click",()=>{e.querySelector("#title").value="",e.querySelector("#content").value="",this._setStatus("\u5DF2\u6E05\u7A7A")})},_save(){let e={title:this._root.querySelector("#title").value,content:this._root.querySelector("#content").value};t.set("editor:draft",e),this._setStatus(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`)},_setStatus(e){this._root.querySelector("#status").textContent=e},unmount(){this._root=null}},o=s;export{o as default,s as page};
