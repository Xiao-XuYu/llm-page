var n=new Map,p={on(o,e){return n.has(o)||n.set(o,new Set),n.get(o).add(e),()=>p.off(o,e)},off(o,e){n.get(o)?.delete(e)},emit(o,e){n.get(o)?.forEach(t=>{try{t(e)}catch(r){console.error(`[bus] ${o} handler threw:`,r)}})}};var f=["javascript:","vbscript:","data:","file:","blob:"],u=new Set(["href","src","xlink:href","action","formaction","poster","background","ping"]),b=new Set(["http","https","mailto","tel","ftp","ftps"]);function c(o){if(o==null)return!1;let e=String(o).replace(/^[\s﻿‌‍]+|[\s﻿‌‍]+$/g,"").replace(/\s+/g,"");if(!e)return!1;let t=e.toLowerCase();if(t.startsWith("#")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../")||t.startsWith("?"))return!1;for(let s of f)if(t.startsWith(s))return!0;let r=t.match(/^([a-z][a-z0-9+\-.]*):/);return!!(r&&!b.has(r[1]))}function h(o){let t=new DOMParser().parseFromString(o,"text/html");if(t.querySelector("parsererror"))throw new Error("HTML \u89E3\u6790\u5931\u8D25,\u53EF\u80FD\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF");for(let r of Array.from(t.querySelectorAll("*"))){for(let s of Array.from(r.attributes)){let i=s.name,l=i.toLowerCase();if(l==="srcdoc"){r.removeAttribute(i);continue}u.has(l)&&c(s.value)&&r.removeAttribute(i)}r.tagName==="A"&&c(r.getAttribute("href"))&&r.removeAttribute("href")}return`<!DOCTYPE html>
`+t.documentElement.outerHTML}var m=`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: var(--preview-bg, #ffffff);
    overflow: hidden;
  }
`,d=`
  /* \u5185\u5BB9\u5BB9\u5668:\u4E0D\u52A0\u8FB9\u6846/\u5706\u89D2/\u9634\u5F71,\u5B8C\u5168\u586B\u5145 host */
  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  /* iframe sandbox:\u586B\u6EE1\u5BB9\u5668,\u5E26\u9ED8\u8BA4\u767D\u5E95,\u65E0\u8FB9\u6846 */
  .preview-iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
    background: white;
    color-scheme: light dark;
  }

  /* \u7A7A\u72B6\u6001:\u9ED8\u8BA4\u9690\u85CF,\u7236\u7EA7\u9700\u8981\u65F6\u901A\u8FC7 [data-show-empty] \u6253\u5F00 */
  :host([data-show-empty]) .content::before {
    content: attr(data-empty-text);
    display: block;
    color: #8b949e;
    font-style: italic;
    padding: 16px 20px;
  }

  /* \u9519\u8BEF banner */
  .error {
    color: #cf222e;
    background: #ffebe9;
    border: 1px solid #ff8182;
    border-radius: 6px;
    padding: 10px 14px;
    margin: 12px;
    font-weight: 500;
  }
  .error::before {
    content: "\u26A0 ";
  }
`;var a=class extends HTMLElement{static get observedAttributes(){return["empty-text","data-show-empty"]}constructor(){super(),this.attachShadow({mode:"open"}),this._lastHtml="";let e=document.createElement("style");e.textContent=m+d,this.shadowRoot.appendChild(e),this._contentEl=document.createElement("div"),this._contentEl.className="content preview-content",this.shadowRoot.appendChild(this._contentEl)}get html(){return this._lastHtml}set html(e){let t=e||"";if(this._lastHtml=t,!t){this._renderEmpty();return}let r;try{r=h(t)}catch(s){this._renderError("\u9884\u89C8\u6E32\u67D3\u5931\u8D25: "+(s?.message||String(s)));return}this._renderContent(r)}clear(){this.html=""}showError(e){this._renderError(e==null?"\u672A\u77E5\u9519\u8BEF":String(e))}setEmptyText(e){e?(this.setAttribute("empty-text",e),this.setAttribute("data-show-empty","")):(this.removeAttribute("empty-text"),this.removeAttribute("data-show-empty"))}attributeChangedCallback(e,t,r){e==="empty-text"&&this._contentEl&&(this._contentEl.dataset.emptyText=r||"")}_clearContent(){for(;this._contentEl.firstChild;)this._contentEl.removeChild(this._contentEl.firstChild);this._contentEl.classList.remove("has-error")}_renderEmpty(){this._clearContent(),this.hasAttribute("data-show-empty")||this.removeAttribute("data-show-empty")}_renderContent(e){this._clearContent(),this.removeAttribute("data-show-empty");let t=document.createElement("iframe");t.setAttribute("sandbox","allow-scripts allow-modals allow-same-origin"),t.setAttribute("title","HTML \u9884\u89C8"),t.className="preview-iframe",t.srcdoc=e,this._contentEl.appendChild(t)}_renderError(e){this._clearContent(),this._contentEl.classList.add("has-error");let t=document.createElement("div");t.className="error",t.textContent=e,this._contentEl.appendChild(t),this.removeAttribute("data-show-empty")}};customElements.get("html-preview")||customElements.define("html-preview",a);export{p as a};
