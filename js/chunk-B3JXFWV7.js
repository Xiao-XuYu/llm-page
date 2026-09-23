import{e as y,f as j}from"./chunk-VYNVXMHE.js";var b="files:",I="current";async function O(t){if(!t)throw new Error("loadFiles: pageId \u5FC5\u586B");let o=await j("fs",b+t);return o&&typeof o=="object"&&o.files?o:{files:{},updatedAt:0}}async function g(t,o){if(!t)throw new Error("saveFiles: pageId \u5FC5\u586B");let e={files:o,updatedAt:Date.now()};return await y("fs",e,b+t),e}async function S(t){if(!t)throw new Error("resetFiles: pageId \u5FC5\u586B");return g(t,{"index.html":""})}async function A(t){if(t){await y("fs",void 0,b+t);try{let{del:o}=await import("./chunk-RPG75IPN.js");await o("fs",b+t)}catch{}}}function M(t){let o=Object.keys(t);if(o.length===1&&o[0]==="index.html")return t["index.html"];let e=t["index.html"]||"",f={},r={};for(let[n,c]of Object.entries(t)){if(n==="index.html")continue;let m=n.toLowerCase();m.endsWith(".css")?f[n]=c:m.endsWith(".js")&&(r[n]=c)}if(Object.keys(f).length>0){let c=`<style>
${Object.keys(f).sort().map(m=>`/* ${m} */
${f[m]}`).join(`

`)}
</style>`;/<\/head>/i.test(e)?e=e.replace(/<\/head>/i,`${c}
</head>`):e=e.replace(/<body[^>]*>/i,m=>`${m}
${c}`)}let a=Object.values(r).join(`
`),i=/\bfrom\s+['"]([^'"]*three@[^\/'"]+\/build\/three\.module\.js)['"]/,u=/\bfrom\s+['"]([^'"]*three@[^\/'"]+\/examples\/jsm\/)['"]/,p=/\bfrom\s+['"]three['"]/,s=/\bfrom\s+['"]three\/addons\//;if((p.test(a)||s.test(a)||i.test(a)||u.test(a))&&!/<script[^>]*type=["']?importmap["']?/i.test(e)){let n=null,c=null,m=a.match(i);if(m)n=m[1],c=n.replace(/\/build\/three\.module\.js$/,"/examples/jsm/");else{let h=a.match(u);h?(c=h[1],n=c.replace(/\/examples\/jsm\/$/,"/build/three.module.js")):(n="https://unpkg.com/three@0.160.0/build/three.module.js",c="https://unpkg.com/three@0.160.0/examples/jsm/")}let d=`<script type="importmap">
{"imports":{"three":"${n}","three/addons/":"${c}"}}
<\/script>`;/<\/head>/i.test(e)?e=e.replace(/<\/head>/i,`${d}
</head>`):/<body[^>]*>/i.test(e)?e=e.replace(/(<body[^>]*>)/i,`${d}
$1`):e=`${d}
${e}`}if(Object.keys(r).length>0){let n=Object.keys(r).sort().map($=>({path:$,content:r[$]})),m=n.some(({content:$})=>k($))?' type="module"':"",d;if(n.length===1)d=`/* ${n[0].path} */
${n[0].content}`;else{let $=w(n);d=($.imports?$.imports+`

`:"")+$.body}let h=`<script${m}>
${d}
<\/script>`;e=e.replace(/<script\b[^>]*type=["']?module["']?[^>]*\s+src=["'][^"']+["'][^>]*>\s*<\/script>/gi,""),/<\/body>/i.test(e)?e=e.replace(/<\/body>/i,`${h}
</body>`):e=`${e}
${h}`}return e}function w(t){let o=new Set(t.map(a=>a.path)),e=new Map,f=[];for(let{path:a,content:i}of t){let{imports:u,body:p}=N(i);for(let s of u){if((s.spec.startsWith("./")||s.spec.startsWith("../")||s.spec.startsWith("/"))&&x(a,s.spec,o))continue;let l=e.get(s.spec);l||(l={defaultName:null,namespaceName:null,named:new Map,sideEffect:!1},e.set(s.spec,l)),s.defaultName&&(l.defaultName=s.defaultName),s.namespaceName&&(l.namespaceName=s.namespaceName),s.sideEffect&&(l.sideEffect=!0);for(let[n,c]of s.named)l.named.has(n)||l.named.set(n,c)}f.push(`/* ${a} */
${p}`)}let r=[];for(let[a,i]of e){let u=[];if(i.defaultName&&u.push(i.defaultName),i.namespaceName&&u.push(`* as ${i.namespaceName}`),i.named.size>0){let p=Array.from(i.named.entries()).map(([s,l])=>s===l?s:`${l} as ${s}`).join(", ");u.push(`{ ${p} }`)}u.length===0?r.push(`import '${a}';`):r.push(`import ${u.join(", ")} from '${a}';`)}return{imports:r.join(`
`),body:f.join(`

`)}}function x(t,o,e){let f=t.includes("/")?t.slice(0,t.lastIndexOf("/")):"",r=(f?f.split("/"):[]).concat(o.split("/")),a=[];for(let p of r)p===""||p==="."||(p===".."?a.pop():a.push(p));let i=a.join("/");if(e.has(i))return!0;let u=[".js",".mjs",".jsx"];for(let p of u)if(e.has(i+p))return!0;return!1}function N(t){let o=[],e=t.split(`
`),f=[],r=0;for(;r<e.length;){let a=e[r].replace(/^\s+/,"");if(!/^import\b/.test(a)){f.push(e[r]),r++;continue}let i=e[r],u=(i.match(/\{/g)||[]).length-(i.match(/\}/g)||[]).length;for(;u>0&&r+1<e.length;)r++,i+=`
`+e[r],u=(i.match(/\{/g)||[]).length-(i.match(/\}/g)||[]).length;let p=E(i);p?o.push(p):f.push(i),r++}return{imports:o,body:f.join(`
`)}}function E(t){let o=t.replace(/\s+/g," ").trim(),e=o.match(/^import\s+['"]([^'"]+)['"](?:\s*;.*)?$/);if(e)return{spec:e[1],defaultName:null,namespaceName:null,named:[],sideEffect:!0};let f=o.match(/^import\s+([\s\S]+?)\s+from\s+(['"])([^'"]+)\2(?:[\s;].*)?$/);if(!f)return null;let r=f[1].trim(),a=f[3],u=(s=>{let l=[],n=0,c=0;for(let d=0;d<s.length;d++){let h=s[d];h==="{"?n++:h==="}"?n--:h===","&&n===0&&(l.push(s.slice(c,d).trim()),c=d+1)}let m=s.slice(c).trim();return m&&l.push(m),l})(r),p={spec:a,defaultName:null,namespaceName:null,named:[],sideEffect:!1};for(let s of u)if(s.startsWith("*")){let l=s.match(/^\*\s*as\s+(\w+)$/);l&&(p.namespaceName=l[1])}else if(s.startsWith("{")){let l=s.replace(/^\{|\}$/g,"");if(l.trim()==="")continue;for(let n of l.split(",")){let c=n.trim();if(!c)continue;let m=c.match(/^(\w+)\s+as\s+(\w+)$/);m?p.named.push([m[2],m[1]]):p.named.push([c,c])}}else/^\w+$/.test(s)&&(p.defaultName=s);return p}function k(t){return t?/(^|\n)\s*(import|export)\s+[\w{*'"]/.test(t):!1}function v(t){return Object.entries(t).map(([o,e])=>({path:o,size:e.length,lines:e.split(/\r?\n/).length}))}export{I as a,O as b,g as c,S as d,A as e,M as f,v as g};
