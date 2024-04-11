// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(g,n){function t(a,b){let c;const e=d=>{d.stopImmediatePropagation();d=d.composedPath();c=d.slice(d.indexOf(b),d.indexOf(a))};a.addEventListener("custom-element-ancestor-check",e,{once:!0});b.dispatchEvent(new CustomEvent("custom-element-ancestor-check",{composed:!0,bubbles:!0}));a.removeEventListener("custom-element-ancestor-check",e);return 0<c.filter(d=>d!==b&&d!==a).filter(d=>d.tagName?.includes("-")).length}function p(a){var b=a.el;var {id:c}=b;(c=c&&n.queryElementRoots(b,
{selector:`${"calcite-label"}[for="${c}"]`}))?b=c:(c=n.closestElementCrossShadowBoundary(b,"calcite-label"),b=!c||t(c,b)?null:c);if(!(h.has(b)&&b===a.labelEl||!b&&f.has(a)))if(c=u.bind(a),b){a.labelEl=b;const e=k.get(b)||[];e.push(a);k.set(b,e.sort(q));h.has(a.labelEl)||(h.set(a.labelEl,r),a.labelEl.addEventListener("calciteInternalLabelClick",r));f.delete(a);document.removeEventListener("calciteInternalLabelConnected",l.get(a));m.set(a,c);document.addEventListener("calciteInternalLabelDisconnected",
c)}else f.has(a)||(c(),document.removeEventListener("calciteInternalLabelDisconnected",m.get(a)))}function q(a,b){return n.isBefore(a.el,b.el)?-1:1}function r(a){const b=a.detail.sourceEvent.target;var c=k.get(this);const e=c.find(d=>d.el===b);if(!c.includes(e)&&(c=c[0],!c.disabled))c.onLabelClick(a)}function v(){f.has(this)&&p(this)}function u(){f.add(this);const a=l.get(this)||v.bind(this);l.set(this,a);document.addEventListener("calciteInternalLabelConnected",a)}const k=new WeakMap,h=new WeakMap,
l=new WeakMap,m=new WeakMap,f=new WeakSet;g.connectLabel=p;g.disconnectLabel=function(a){f.delete(a);document.removeEventListener("calciteInternalLabelConnected",l.get(a));document.removeEventListener("calciteInternalLabelDisconnected",m.get(a));l.delete(a);m.delete(a);if(a.labelEl){var b=k.get(a.labelEl);1===b.length&&(a.labelEl.removeEventListener("calciteInternalLabelClick",h.get(a.labelEl)),h.delete(a.labelEl));k.set(a.labelEl,b.filter(c=>c!==a).sort(q));a.labelEl=null}};g.getLabelText=function(a){return a.label||
a.labelEl?.textContent?.trim()||""};g.labelConnectedEvent="calciteInternalLabelConnected";g.labelDisconnectedEvent="calciteInternalLabelDisconnected"});