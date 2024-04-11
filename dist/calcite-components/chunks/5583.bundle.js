/*! For license information please see 5583.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5583],{7835:(e,t,i)=>{i.d(t,{H:()=>a,c:()=>o});var n=i(8641);function o(e){return Math.min(Math.max(Math.ceil(e),1),6)}const a=(e,t)=>{const i=e.level?`h${e.level}`:"div";return delete e.level,(0,n.h)(i,{...e},t)}},5611:(e,t,i)=>{function n(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}i.d(t,{g:()=>n})},5583:(e,t,i)=>{i.r(t),i.d(t,{calcite_block:()=>w,calcite_block_section:()=>B});var n=i(8641),o=i(8082),a=i(2322),s=i(9336),c=i(4879),r=i(339),l=i(7835),d=i(3844),h=i(1435),g=i(5306);i(8274);const u="content",p="toggle",f="header",m="icon",v="icon",b="control",x="header-menu-actions",k={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},w=class{constructor(e){(0,n.r)(this,e),this.calciteBlockBeforeClose=(0,n.c)(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=(0,n.c)(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=(0,n.c)(this,"calciteBlockClose",6),this.calciteBlockOpen=(0,n.c)(this,"calciteBlockOpen",6),this.calciteBlockToggle=(0,n.c)(this,"calciteBlockToggle",6),this.openTransitionProp="opacity",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.setTransitionEl=e=>{this.transitionEl=e},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){(0,h.o)(this)}onMessagesChange(){}async setFocus(){await(0,d.c)(this),(0,a.f)(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,s.c)(this),(0,c.c)(this),(0,r.c)(this)}disconnectedCallback(){(0,s.d)(this),(0,c.d)(this),(0,r.d)(this),(0,o.d)(this)}async componentWillLoad(){await(0,r.s)(this),(0,d.s)(this),this.open&&(0,h.o)(this)}componentDidLoad(){(0,d.a)(this)}componentDidRender(){(0,s.u)(this)}renderScrim(){const{loading:e}=this,t=(0,n.h)("slot",null);return[e?(0,n.h)("calcite-scrim",{loading:e}):null,t]}renderIcon(){const{loading:e,messages:t,status:i}=this,o=!!(0,a.e)(this.el,v);return e?(0,n.h)("div",{class:m,key:"loader"},(0,n.h)("calcite-loader",{inline:!0,label:t.loading})):i?(0,n.h)("div",{class:m,key:"status-icon"},(0,n.h)("calcite-icon",{class:{"status-icon":!0,valid:"valid"==i,invalid:"invalid"==i},icon:k[i],scale:"s"})):o?(0,n.h)("div",{class:m,key:"icon-slot"},(0,n.h)("slot",{key:"icon-slot",name:v})):null}renderTitle(){const{heading:e,headingLevel:t,description:i}=this;return e||i?(0,n.h)("div",{class:"title"},(0,n.h)(l.H,{class:"heading",level:t},e),i?(0,n.h)("div",{class:"description"},i):null):null}render(){const{collapsible:e,el:t,loading:i,open:o,messages:s}=this,c=o?s.collapse:s.expand,r=(0,n.h)("header",{class:"header",id:f},this.renderIcon(),this.renderTitle()),l=!!(0,a.e)(t,b),d=!!(0,a.e)(t,x),h=o?k.opened:k.closed,g=(0,n.h)("div",{class:"header-container"},this.dragHandle?(0,n.h)("calcite-handle",null):null,e?(0,n.h)("button",{"aria-controls":u,"aria-describedby":f,"aria-expanded":e?(0,a.t)(o):null,class:"toggle",id:p,onClick:this.onHeaderClick,title:c},r,l||d?null:(0,n.h)("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:h,scale:"s"})):r,l?(0,n.h)("div",{class:"control-container"},(0,n.h)("slot",{name:b})):null,d?(0,n.h)("calcite-action-menu",{label:s.options},(0,n.h)("slot",{name:x})):null);return(0,n.h)(n.H,null,(0,n.h)("article",{"aria-busy":(0,a.t)(i),class:{container:!0}},g,(0,n.h)("section",{"aria-labelledby":p,class:"content",hidden:!o,id:u,ref:this.setTransitionEl},this.renderScrim())))}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};w.style=':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:1rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}';const y="content",C="toggle",E="toggle",L={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},B=class{constructor(e){(0,n.r)(this,e),this.calciteBlockSectionToggle=(0,n.c)(this,"calciteBlockSectionToggle",6),this.handleHeaderKeyDown=e=>{(0,g.i)(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}async setFocus(){await(0,d.c)(this),(0,a.f)(this.el)}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,c.c)(this),(0,r.c)(this)}async componentWillLoad(){await(0,r.s)(this),(0,d.s)(this)}componentDidLoad(){(0,d.a)(this)}disconnectedCallback(){(0,c.d)(this),(0,r.d)(this)}renderStatusIcon(){const{status:e}=this,t=L[e]??!1,i={"status-icon":!0,valid:"valid"==e,invalid:"invalid"==e};return t?(0,n.h)("calcite-icon",{class:i,icon:t,scale:"s"}):null}render(){const{el:e,messages:t,open:i,text:o,toggleDisplay:s}=this,c=(0,a.g)(e),r=i?L.menuOpen:"rtl"===c?L.menuClosedLeft:L.menuClosedRight,l=i?t.collapse:t.expand,d="switch"===s?(0,n.h)("div",{class:{"toggle--switch-container":!0}},(0,n.h)("div",{"aria-controls":y,"aria-expanded":(0,a.t)(i),class:{[E]:!0,"toggle--switch":!0},id:C,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,role:"button",tabIndex:0,title:l},(0,n.h)("div",{class:"toggle--switch__content"},(0,n.h)("span",{class:"toggle--switch__text"},o)),this.renderStatusIcon()),(0,n.h)("calcite-label",{class:"focus-guard",layout:"inline",tabIndex:-1},(0,n.h)("calcite-switch",{checked:i,label:l,scale:"s"}))):(0,n.h)("button",{"aria-controls":y,"aria-expanded":(0,a.t)(i),class:{"section-header":!0,[E]:!0},id:C,onClick:this.toggleSection},(0,n.h)("calcite-icon",{icon:r,scale:"s"}),(0,n.h)("span",{class:"section-header__text"},o),this.renderStatusIcon());return(0,n.h)(n.H,null,d,(0,n.h)("section",{"aria-labelledby":C,class:"content",hidden:!i,id:y},(0,n.h)("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return(0,n.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};B.style=":host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch-container{position:relative;display:flex;inline-size:100%;align-items:center;background-color:transparent}.toggle--switch-container .focus-guard{--calcite-label-margin-bottom:0;pointer-events:none;position:absolute;inset-inline-end:0;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}:host([hidden]){display:none}[hidden]{display:none}"},8082:(e,t,i)=>{i.d(t,{c:()=>r,d:()=>l});var n=i(8641),o=i(5527);const a=new Set;let s;const c={childList:!0};function r(e){s||(s=(0,o.c)("mutation",d)),s.observe(e.el,c)}function l(e){a.delete(e.el),d(s.takeRecords()),s.disconnect();for(const[e]of a.entries())s.observe(e,c)}function d(e){e.forEach((({target:e})=>{(0,n.f)(e)}))}},9336:(e,t,i)=>{i.d(t,{c:()=>f,d:()=>m,u:()=>h});var n=i(5611);const o=/firefox/i.test((0,n.g)()),a=o?new WeakMap:null;function s(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(o&&!a.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const r=["mousedown","mouseup","click"];function l(e){if(o&&!a.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void g(e);p(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function g(e){var t;e.el.click=s,(t=o?u(e):e.el)&&(t.addEventListener("pointerdown",c,d),r.forEach((e=>t.addEventListener(e,l,d))))}function u(e){return a.get(e.el)}function p(e){var t;delete e.el.click,(t=o?u(e):e.el)&&(t.removeEventListener("pointerdown",c,d),r.forEach((e=>t.removeEventListener(e,l,d))))}function f(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;a.set(e.el,t),g(e)}function m(e){o&&(a.delete(e.el),p(e))}},3844:(e,t,i)=>{i.d(t,{a:()=>c,b:()=>r,c:()=>l,s:()=>s});var n=i(8641);const o=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise((t=>o.set(e,t))))}function c(e){o.get(e)()}function r(e){return a.get(e)}async function l(e){return await r(e),(0,n.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},1435:(e,t,i)=>{i.d(t,{o:()=>s});var n=i(8641);function o(e){return"opened"in e?e.opened:e.open}function a(e,t=!1){(t?e[e.transitionProp]:o(e))?e.onBeforeOpen():e.onBeforeClose(),(t?e[e.transitionProp]:o(e))?e.onOpen():e.onClose()}function s(e,t=!1){(0,n.e)((()=>{if(e.transitionEl){const{transitionDuration:i,transitionProperty:n}=getComputedStyle(e.transitionEl),s=i.split(","),c=s[n.split(",").indexOf(e.openTransitionProp)]??s[0];if("0s"===c)return void a(e,t);const r=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",l),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d),a(e,t)}),1e3*parseFloat(c));function l(i){i.propertyName===e.openTransitionProp&&i.target===e.transitionEl&&(clearTimeout(r),e.transitionEl.removeEventListener("transitionstart",l),(t?e[e.transitionProp]:o(e))?e.onBeforeOpen():e.onBeforeClose())}function d(i){i.propertyName===e.openTransitionProp&&i.target===e.transitionEl&&((t?e[e.transitionProp]:o(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d))}e.transitionEl.addEventListener("transitionstart",l),e.transitionEl.addEventListener("transitionend",d),e.transitionEl.addEventListener("transitioncancel",d)}}))}},339:(e,t,i)=>{i.d(t,{c:()=>h,d:()=>g,s:()=>r,u:()=>d});var n=i(8641),o=i(4879);const a={};function s(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function r(e){e.defaultMessages=await l(e,e.effectiveLocale),c(e)}async function l(e,t){const{el:i}=e,c=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return a[i]||(a[i]=fetch((0,n.g)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),a[i]}((0,o.g)(t,"t9n"),c)}async function d(e,t){e.defaultMessages=await l(e,t),c(e)}function h(e){e.onMessagesChange=u}function g(e){e.onMessagesChange=void 0}function u(){c(this)}}}]);