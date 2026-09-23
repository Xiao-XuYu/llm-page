import{e as a,f}from"./chunk-VYNVXMHE.js";var l="files:",u="current";async function p(e){if(!e)throw new Error("loadFiles: pageId \u5FC5\u586B");let n=await f("fs",l+e);return n&&typeof n=="object"&&n.files?n:{files:{},updatedAt:0}}async function d(e,n){if(!e)throw new Error("saveFiles: pageId \u5FC5\u586B");let t={files:n,updatedAt:Date.now()};return await a("fs",t,l+e),t}async function y(e){if(!e)throw new Error("resetFiles: pageId \u5FC5\u586B");return d(e,{"index.html":""})}async function b(e){if(e){await a("fs",void 0,l+e);try{let{del:n}=await import("./chunk-RPG75IPN.js");await n("fs",l+e)}catch{}}}function m(e){let n=Object.keys(e);if(n.length===1&&n[0]==="index.html")return e["index.html"];let t=e["index.html"]||"",r={},c={};for(let[o,i]of Object.entries(e)){if(o==="index.html")continue;let s=o.toLowerCase();s.endsWith(".css")?r[o]=i:s.endsWith(".js")&&(c[o]=i)}if(Object.keys(r).length>0){let i=`<style>
${Object.keys(r).sort().map(s=>`/* ${s} */
${r[s]}`).join(`

`)}
</style>`;/<\/head>/i.test(t)?t=t.replace(/<\/head>/i,`${i}
</head>`):t=t.replace(/<body[^>]*>/i,s=>`${s}
${i}`)}if(Object.keys(c).length>0){let i=`<script>
${Object.keys(c).sort().map(s=>`/* ${s} */
${c[s]}`).join(`

`)}
<\/script>`;/<\/body>/i.test(t)?t=t.replace(/<\/body>/i,`${i}
</body>`):t=`${t}
${i}`}return t}function w(e){return Object.entries(e).map(([n,t])=>({path:n,size:t.length,lines:t.split(/\r?\n/).length}))}export{u as a,p as b,d as c,y as d,b as e,m as f,w as g};
