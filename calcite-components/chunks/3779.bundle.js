/*! For license information please see 3779.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3779,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},3842:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CalciteStepper:()=>l,defineCustomElement:()=>c});var n=s(7210),i=s(9145),r=s(5545);const a=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteStepperItemChange=(0,n.yM)(this,"calciteStepperItemChange",6),this.calciteInternalStepperItemChange=(0,n.yM)(this,"calciteInternalStepperItemChange",6),this.itemMap=new Map,this.items=[],this.enabledItems=[],this.mutationObserver=(0,r.c)("mutation",(()=>this.updateItems())),this.handleDefaultSlotChange=e=>{const t=(0,i.s)(e).filter((e=>"CALCITE-STEPPER-ITEM"===e?.tagName)),s=Array(t.length).fill("1fr").join(" ");this.el.style.gridTemplateAreas=s,this.el.style.gridTemplateColumns=s,this.setStepperItemNumberingSystem()},this.icon=!1,this.layout="horizontal",this.numbered=!1,this.scale="m",this.numberingSystem=void 0,this.selectedItem=null}handleItemPropChange(){this.updateItems()}numberingSystemChange(){this.setStepperItemNumberingSystem()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0}),this.updateItems()}componentDidLoad(){"number"!=typeof this.currentPosition&&this.calciteInternalStepperItemChange.emit({position:0})}render(){return(0,n.h)(n.AA,{"aria-label":"Progress steps",role:"region"},(0,n.h)("slot",{onSlotchange:this.handleDefaultSlotChange}))}calciteInternalStepperItemKeyEvent(e){const t=e.detail.item,s=e.target;switch(t.key){case"ArrowDown":case"ArrowRight":(0,i.i)(this.enabledItems,s,"next");break;case"ArrowUp":case"ArrowLeft":(0,i.i)(this.enabledItems,s,"previous");break;case"Home":(0,i.i)(this.enabledItems,s,"first");break;case"End":(0,i.i)(this.enabledItems,s,"last")}e.stopPropagation()}registerItem(e){const t=e.target,{content:s,position:n}=e.detail;this.itemMap.set(t,{position:n,content:s}),this.items=this.sortItems(),this.enabledItems=this.filterItems(),e.stopPropagation()}updateItem(e){const{position:t}=e.detail;"number"==typeof t&&(this.currentPosition=t,this.selectedItem=e.target),this.calciteInternalStepperItemChange.emit({position:t})}handleUserRequestedStepperItemSelect(){this.calciteStepperItemChange.emit()}async nextStep(){const e=this.getEnabledStepIndex(this.currentPosition+1,"next");"number"==typeof e&&this.updateStep(e)}async prevStep(){const e=this.getEnabledStepIndex(this.currentPosition-1,"previous");"number"==typeof e&&this.updateStep(e)}async goToStep(e){const t=e-1;this.currentPosition!==t&&this.updateStep(t)}async startStep(){const e=this.getEnabledStepIndex(0,"next");"number"==typeof e&&this.updateStep(e)}async endStep(){const e=this.getEnabledStepIndex(this.items.length-1,"previous");"number"==typeof e&&this.updateStep(e)}updateItems(){this.el.querySelectorAll("calcite-stepper-item").forEach((e=>{e.icon=this.icon,e.numbered=this.numbered,e.layout=this.layout,e.scale=this.scale}))}getEnabledStepIndex(e,t="next"){const{items:s,currentPosition:n}=this;let i=e;for(;s[i]?.disabled;)i+="previous"===t?-1:1;return i!==n&&i<s.length&&i>=0?i:null}updateStep(e){this.currentPosition=e,this.calciteInternalStepperItemChange.emit({position:e})}sortItems(){const{itemMap:e}=this;return Array.from(e.keys()).sort(((t,s)=>e.get(t).position-e.get(s).position))}filterItems(){return this.items.filter((e=>!e.disabled))}setStepperItemNumberingSystem(){this.items.forEach((e=>{e.numberingSystem=this.numberingSystem}))}get el(){return this}static get watchers(){return{icon:["handleItemPropChange"],layout:["handleItemPropChange"],numbered:["handleItemPropChange"],scale:["handleItemPropChange"],numberingSystem:["numberingSystemChange"]}}static get style(){return':host{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]){flex:1 1 auto;flex-direction:column}:host([layout=horizontal]){display:grid;grid-template-areas:"items" "content"}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-stepper",{icon:[516],layout:[513],numbered:[516],scale:[513],numberingSystem:[513,"numbering-system"],selectedItem:[1040],nextStep:[64],prevStep:[64],goToStep:[64],startStep:[64],endStep:[64]},[[0,"calciteInternalStepperItemKeyEvent","calciteInternalStepperItemKeyEvent"],[0,"calciteInternalStepperItemRegister","registerItem"],[0,"calciteInternalStepperItemSelect","updateItem"],[0,"calciteInternalUserRequestedStepperItemSelect","handleUserRequestedStepperItemSelect"]]]);function o(){"undefined"!=typeof customElements&&["calcite-stepper"].forEach((e=>{"calcite-stepper"===e&&(customElements.get(e)||customElements.define(e,a))}))}o();const l=a,c=o},5545:(e,t,s)=>{"use strict";s.d(t,{c:()=>i});var n=s(7210);function i(e,t,s){if(!n.Z5.isBrowser)return;const i=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new i(t,s)}}}]);