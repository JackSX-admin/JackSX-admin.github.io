/*! For license information please see 4273111305d62b5e9d835747feba16d0.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[21521],{21521:(e,t,s)=>{s.r(t),s.d(t,{arcgis_effects:()=>$,arcgis_effects_popovers:()=>B});var r=s(28384),a=s(62727),l=s(81068),o=s(34077),i=s(66716),c=s(74828);s(18869),s(72637);const n="panel",u="hint",f="basemap-type",p="list",h="effect-thumb",d="effect-thumb-img";function g(e){return null!=e}let m=["bloom","dropShadow","blur","brightnessContrast","grayscale","hueRotate","saturate","invert","sepia"],v=["dropShadow_gray","strongDropShadow","dropShadow_transparency","dropShadow_blur","mutedBlur","mutedGray"],y=["bloom_gray","bloom_blur","bloom_transparency","mutedBlur","mutedGray"];const E={bloom:{strength:2,radius:.75,threshold:.1},dropShadow:{line:{color:[0,0,0,255],xoffset:.75,yoffset:.75,blurRadius:1.125},point:{color:[0,0,0,255],xoffset:1.125,yoffset:1.125,blurRadius:1.875},polygon:{color:[0,0,0,255],xoffset:1.125,yoffset:1.125,blurRadius:2.25}},blur:{radius:1.5},brightness:{amount:1.5},contrast:{amount:2},grayscale:{amount:1},hueRotate:{angle:100},saturate:{amount:1},invert:{amount:1},sepia:{amount:.7}},b=JSON.parse(JSON.stringify(E)),x={dropShadow_gray:{included:[{type:"drop-shadow",color:[50,50,50,255],xoffset:1.5,yoffset:1.5,blurRadius:2.25}],excluded:[{type:"grayscale",amount:1},{type:"opacity",amount:.5}]},strongDropShadow:{included:[{type:"drop-shadow",color:[0,0,0,255],xoffset:3,yoffset:3,blurRadius:3}],excluded:[]},dropShadow_transparency:{included:[{type:"drop-shadow",color:[50,50,50,255],xoffset:1.5,yoffset:1.5,blurRadius:4.5}],excluded:[{type:"opacity",amount:.35}]},dropShadow_blur:{included:[{type:"drop-shadow",color:[50,50,50,255],xoffset:1.5,yoffset:1.5,blurRadius:2.25}],excluded:[{type:"blur",radius:2.25},{type:"opacity",amount:.5}]},bloom_gray:{included:[{type:"bloom",strength:1.3,radius:.6,threshold:0}],excluded:[{type:"grayscale",amount:1},{type:"opacity",amount:.5}]},bloom_blur:{included:[{type:"bloom",strength:1.3,radius:.6,threshold:0}],excluded:[{type:"blur",radius:2.25},{type:"opacity",amount:.5}]},bloom_transparency:{included:[{type:"bloom",strength:1.3,radius:.6,threshold:0}],excluded:[{type:"opacity",amount:.35}]},mutedBlur:{included:[],excluded:[{type:"blur",radius:2.25},{type:"opacity",amount:.5}]},mutedGray:{included:[],excluded:[{type:"grayscale",amount:1},{type:"opacity",amount:.5}]}};function S(e){const{layer:t,modules:s,supportsFeatureEffects:r}=e,a=t;if(a.effect&&a.featureEffect)throw new Error("unsupported effect");if(a.featureEffect&&!r)throw new Error("unsupported effect");if(a.effect){const e=a.effect;if("string"==typeof e)return s.effectsUtils.toJSON(e);if(3===e.length){if(function(e){const t=[e[0].value,e[1].value,e[2].value];return!m.some((e=>{if("brightnessContrast"===e){const e="brightness",s="contrast";return t[0].indexOf(e)>-1&&t[0].indexOf(s)>-1?-1===t[1].indexOf(e)||-1===t[2].indexOf(e)||-1===t[1].indexOf(s)||-1===t[2].indexOf(s):-1!==t[0].indexOf(e)||-1!==t[0].indexOf(s)||t[1].indexOf(e)>-1||t[2].indexOf(e)>-1||t[1].indexOf(s)>-1||t[2].indexOf(s)>-1}{const s=N(e);return t[0].indexOf(s)>-1?-1===t[1].indexOf(s)||-1===t[2].indexOf(s):t[1].indexOf(s)>-1||t[2].indexOf(s)>-1}}))}(e))return s.effectsUtils.toJSON(e[1].value);throw new Error("unsupported effect")}throw new Error("unsupported effect")}if(a.featureEffect){const e=a.featureEffect;if(!e.excludedLabelsVisible||e.includedEffect&&"string"!=typeof e.includedEffect||e.excludedEffect&&"string"!=typeof e.excludedEffect||e.filter&&e.filter.geometry)throw new Error("unsupported effect");{const t=e.includedEffect?s.effectsUtils.toJSON(e.includedEffect):[],r=e.excludedEffect?s.effectsUtils.toJSON(e.excludedEffect):[];let a,l;for(a in x){const e=x[a];if(_(e.included,t)&&_(e.excluded,r)){l=a;break}}return l}}return null}function C(e,t){var s,r;const{effectsJSON:a}=t,l=a&&(null===(r=null===(s=Array.from(a))||void 0===s?void 0:s.filter((t=>t.type===N(e))))||void 0===r?void 0:r[0]);if(!l){if("dropShadow"===e){let s=w(t);return b[e][s]}return b[e]}return l}function w(e){const{layer:t}=e;let s="point";const r=t;return"csv"===t.type?s="point":r.geometryType&&(s="polyline"===r.geometryType?"line":["point","multipoint"].includes(r.geometryType)?"point":"polygon"),s}function N(e){switch(e){case"dropShadow":return"drop-shadow";case"hueRotate":return"hue-rotate";case"brightnessContrast":return"brightness";default:return e}}function P(e,t,s){const{modules:r}=s,{FeatureEffect:a}=r,l=x[e];return new a({filter:{where:t},includedEffect:r.effectsUtils.fromJSON(l.included),excludedEffect:r.effectsUtils.fromJSON(l.excluded),excludedLabelsVisible:!0})}function _(e,t){const s=JSON.parse(JSON.stringify(e)),r=JSON.parse(JSON.stringify(t));if(s.length!==r.length)return!1;s.sort(((e,t)=>e.type.localeCompare(t.type))),r.sort(((e,t)=>e.type.localeCompare(t.type)));let a=!0;for(let e=0;e<s.length;e++){const t=s[e],l=r[e];if(Object.keys(t).length!==Object.keys(l).length){a=!1;break}for(let e in t)if(("string"!=typeof t[e]||"string"!=typeof l[e]||t[e]!==l[e])&&!("number"==typeof t[e]&&"number"==typeof l[e]&&t[e]===l[e]||t[e].length&&t[e].length===l[e].length&&t[e].every(((t,s)=>t===l[e][s])))){a=!1;break}if(!a)break}return a}function k(e){const t=Number(e.value);if(!g(t))return null;const s=Math.min(e.max,Math.max(e.min,t));return e.value=`${s}`,s}function I(e,t){const{modules:s}=t,{screenUtils:r}=s;return Math.round(1e3*r.px2pt(e))/1e3}const $=class{constructor(e){(0,r.r)(this,e),this.arcgisEffectsClose=(0,r.c)(this,"arcgisEffectsClose",7),this.arcgisEffectsChange=(0,r.c)(this,"arcgisEffectsChange",7),this.arcgisEffectsApplyLayerEffect=(0,r.c)(this,"arcgisEffectsApplyLayerEffect",7),this.popovers=[],this.imagesPath="../arcgis-app-assets/images/effects/test.jpg",this.afterCreatePanel=e=>{this.panelNode=e;const{props:t}=this,{featureEffectType:s,supportsFeatureEffects:r}=t,{popovers:a,panelNode:l}=this;a&&this.done(),setTimeout((()=>{if((r?m.concat(["featureEffect"]):m).forEach((e=>{a[e]=document.createElement("arcgis-effects-popovers"),a[e].props=t,a[e].type=e,a[e].referenceElement=l,a[e].popovers=a,document.body.appendChild(a[e])})),s){const e=a.featureEffect;e.open=!0,e.updateHeader(s)}}),1e3)},this.onSwitchEffectType=e=>{const{props:t,popovers:s}=this,r=t.layer,a=e.target;let l;for(l in s)s[l].open=!1;if("layer"===a.selectedItem.value)this.lastFeatureEffect=r.featureEffect||this.lastFeatureEffect,r.featureEffect=null,r.effect=this.lastLayerEffect,this.showFeatureEffects=!1;else{if(this.lastLayerEffect=r.effect,r.effect=null,this.lastFeatureEffect)r.featureEffect=this.lastFeatureEffect,t.featureEffectType=S(t);else{const{backgroundTheme:e}=t;this.selectFeatureEffectType("light"===e?v[0]:y[0])}this.showFeatureEffects=!0;const e=s.featureEffect;e.open=!0,e.updateHeader(t.featureEffectType)}this.reRender=!this.reRender},this.onRemoveEffect=()=>{const{props:e}=this,{layer:t}=e;t.effect=null,t.featureEffect=null,this.isUnsupported=!1},this.onSwitchChange=e=>{const{popovers:t}=this,s=e.target,r=(0,o.q)(s,"calcite-value-list-item"),a=r.value;s.checked||(t[a].open=!1,r.selected=!1),this.arcgisEffectsApplyLayerEffect.emit({type:a,keepSwitch:!0})},this.onFeatureEffectEnabledSwitchChange=e=>{const{popovers:t,props:s,lightListNode:r,darkListNode:a}=this,l=s.layer;if(e.target.checked){if(this.lastFeatureEffect)l.featureEffect=this.lastFeatureEffect,s.featureEffectType=S(s);else{const{backgroundTheme:e}=s;s.featureEffectType="light"===e?v[0]:y[0]}null==r||r.querySelectorAll("calcite-value-list-item").forEach((e=>{e.value===s.featureEffectType&&(e.selected=!0)})),null==a||a.querySelectorAll("calcite-value-list-item").forEach((e=>{e.value===s.featureEffectType&&(e.selected=!0)})),this.selectFeatureEffectType(s.featureEffectType)}else t.featureEffect.open=!1,null==r||r.querySelectorAll("calcite-value-list-item").forEach((e=>e.selected=!1)),null==a||a.querySelectorAll("calcite-value-list-item").forEach((e=>e.selected=!1)),this.lastFeatureEffect=l.featureEffect,l.featureEffect=null,this.arcgisEffectsChange.emit()},this.openPopover=e=>{const{popovers:t}=this,s=e.target,r=s.tagName.toLowerCase();let a;if("img"===r)a=(0,o.q)(s,"calcite-value-list-item");else if("calcite-switch"===r){if(!s.checked)return;a=(0,o.q)(s,"calcite-value-list-item")}else{if("calcite-value-list-item"!==r)return;a=s}a.selected=!0;const l=a.value;if(v.concat(y).indexOf(l)>-1)this.selectFeatureEffectType(l);else{const e=a.querySelector("calcite-switch");if(t[l].open)t[l].open=!1,e.checked=!1,a.selected=!1,this.arcgisEffectsApplyLayerEffect.emit();else{let s;for(s in e.checked||(e.checked=!0,this.arcgisEffectsApplyLayerEffect.emit()),t)t[s].open=!1;t[l].open=!0}}},this.view=void 0,this.layer=void 0,this.hideLayerTitle=!1,this.props=void 0,this.reRender=!1,this.isUnsupported=!1,this.showFeatureEffects=!1}arcgisEffectsApplyLayerEffectHandler(e){var t,s;const{props:r,listNode:a}=this,{layer:l}=r,o=null===(t=e.detail)||void 0===t?void 0:t.type;o&&!(null===(s=e.detail)||void 0===s?void 0:s.keepSwitch)&&(Array.from(a.querySelectorAll("calcite-value-list-item")).filter((e=>e.value===o))[0].querySelector("calcite-switch").checked=!0);const i=function(e,t,s){const r=Array.from(e.children).filter((e=>"calcite-value-list-item"===e.tagName.toLowerCase()&&e.querySelector("calcite-switch").checked)).map((e=>function(e,t,s){const r=e.value;switch(r){case"bloom":return function(e,t){const s=e.querySelectorAll("calcite-input");let r=k(s[0]),a=k(s[1]),l=k(s[2]);if(!g(r)||!g(a)||!g(l))return null;if(r=Math.round(10*r)/10,a=I(Math.round(10*a)/10,t),l=Math.round(l),l/=100,b.bloom={strength:r,radius:a,threshold:l},e.querySelector(".auto").checked){const{view:e}=t,s=e.scale,o=2,i=1/o;return[{scale:.25*s,value:`bloom(${r*o}, ${a*o}pt, ${l})`},{scale:s,value:`bloom(${r}, ${a}pt, ${l})`},{scale:4*s,value:`bloom(${r*i}, ${a*i}pt, ${l})`}]}return`bloom(${r}, ${a}pt, ${l})`}(t[r],s);case"dropShadow":return function(e,t){const s=e.querySelector("calcite-color-picker"),r=function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(s.value),a=e.querySelectorAll("calcite-input");let l=k(a[0]),o=k(a[1]),i=k(a[2]),c=k(a[3]);if(!(g(s.value)&&g(l)&&g(o)&&g(i)&&g(c)))return null;l=I(Math.round(l),t),o=I(Math.round(o),t),i=I(Math.round(i),t),c=Math.round(c),c/=100,b.dropShadow[w(t)]={color:[r.r,r.g,r.b,255*c],xoffset:o,yoffset:i,blurRadius:l};const n=`rgba(${r.r}, ${r.g}, ${r.b}, ${c})`;if(e.querySelector(".auto").checked){const{view:e}=t,s=e.scale,r=2,a=1/r;return[{scale:.25*s,value:`drop-shadow(${o*r}pt ${i*r}pt ${l*r}pt ${n})`},{scale:s,value:`drop-shadow(${o}pt ${i}pt ${l}pt ${n})`},{scale:4*s,value:`drop-shadow(${o*a}pt ${i*a}pt ${l*a}pt ${n})`}]}return`drop-shadow(${o}pt ${i}pt ${l}pt ${n})`}(t[r],s);case"blur":return function(e,t){let s=k(e.querySelector("calcite-input"));return g(s)?(s=I(Math.round(10*s)/10,t),b.blur={radius:s},`blur(${s}pt)`):null}(t[r],s);case"brightnessContrast":return function(e){const t=e.querySelectorAll("calcite-input");let s=k(t[0]),r=k(t[1]);return g(s)&&g(r)?(s=Math.round(s)/100,r=Math.round(r)/100,b.brightness={amount:s},b.contrast={amount:r},`brightness(${s}) contrast(${r})`):null}(t[r]);case"grayscale":return function(e){let t=k(e.querySelector("calcite-input"));return g(t)?(t=Math.round(t)/100,b.grayscale={amount:t},`grayscale(${t})`):null}(t[r]);case"hueRotate":return function(e){let t=k(e.querySelector("calcite-input"));return g(t)?(t=Math.round(t),b.hueRotate={angle:t},`hue-rotate(${t}deg)`):null}(t[r]);case"saturate":return function(e){let t=k(e.querySelector("calcite-input"));return g(t)?(t=Math.round(t)/100,b.saturate={amount:t},`saturate(${t})`):null}(t[r]);case"invert":return function(e){let t=k(e.querySelector("calcite-input"));return g(t)?(t=Math.round(t)/100,b.invert={amount:t},`invert(${t})`):null}(t[r]);case"sepia":return function(e){let t=k(e.querySelector("calcite-input"));return g(t)?(t=Math.round(t)/100,b.sepia={amount:t},`sepia(${t})`):null}(t[r])}}(e,t,s)));let a,l="",o="";return r.forEach((e=>{e&&"string"==typeof e?a?a.forEach((t=>{t.value+=o+e})):l+=o+e:e&&"object"==typeof e&&(a?a.forEach((t=>{Array.from(e).filter((e=>t.scale===e.scale)).forEach((e=>t.value+=o+e.value))})):(a=e,a.forEach((e=>{e.value=l+o+e.value})))),o=" "})),a||l}(this.listNode,this.popovers,r);l.effect=i,this.arcgisEffectsChange.emit(),r.effectsJSON=S(r)}arcgisEffectsPopoverFilterChangeHandler(e){const{props:t,hostElement:s}=this,{layer:r}=t,a=e.detail,l=Array.from(s.shadowRoot.querySelectorAll("calcite-value-list-item")).find((e=>e.selected)),o=null==l?void 0:l.value;o?(r.featureEffect=P(o,a,t),this.arcgisEffectsChange.emit()):this.defaultWhere=a}arcgisEffectsPopoverCloseHandler(){const{listNode:e,lightListNode:t,darkListNode:s}=this;null==e||e.querySelectorAll("calcite-value-list-item").forEach((e=>{e.selected&&(e.selected=!1,e.setFocus())})),null==t||t.querySelectorAll("calcite-value-list-item").forEach((e=>{e.selected&&e.setFocus()})),null==s||s.querySelectorAll("calcite-value-list-item").forEach((e=>{e.selected&&e.setFocus()}))}async setFocus(e){var t,s;e&&"dismiss-button"!==e?null===(s=this.listNode)||void 0===s||s.setFocus():null===(t=this.panelNode)||void 0===t||t.setFocus()}async done(){const{popovers:e}=this;let t;for(t in e)e[t].open=!1;document.body.querySelectorAll("arcgis-effects-popovers").forEach((e=>e.parentNode.removeChild(e)))}async componentWillLoad(){const{view:e,layer:t}=this,[s,r]=await(0,a.g)(this.hostElement);this.strings=s;const l=!t.featureReduction&&["feature","geojson","ogc-feature","wfs","csv","stream"].indexOf(t.type)>-1;this.props={view:e,layer:t,strings:s,supportsFeatureEffects:l};const{props:o}=this;o.locale=r;const[c,n,u,f]=await(0,i.l)(["esri/layers/support/FeatureEffect","esri/layers/effects/jsonUtils","esri/core/screenUtils","esri/views/support/colorUtils"]);o.modules={FeatureEffect:c,effectsUtils:n,screenUtils:u},o.backgroundTheme=e&&await f.getBackgroundColorTheme(e);try{const e=t;e.effect&&e.featureEffect?this.isUnsupported=!0:e.effect?(o.effectsJSON=S(o),function(e){const{effectsJSON:t}=e;if(!t)return;const s=t.map((e=>e.type));m.sort(((e,t)=>{const r=s.indexOf(N(e)),a=s.indexOf(N(t));return r>-1&&a>-1&&r<a?-1:r>-1&&a>-1&&r>a?1:r>-1?-1:a>-1?1:0}))}(o)):e.featureEffect&&(o.featureEffectType=S(o))}catch(e){this.isUnsupported=!0}}componentDidLoad(){requestAnimationFrame((()=>this.setFocus()))}disconnectedCallback(){this.done()}render(){const{isUnsupported:e}=this;return(0,r.h)(r.H,{class:"calcite-match-height"},(0,r.h)("calcite-flow",{class:"flow",dir:(0,l.g)(this.hostElement),ref:e=>this.flowNode=e},e?this.renderUnsupported():this.renderContent()))}renderUnsupported(){const{props:e,hideLayerTitle:t}=this,{layer:s,strings:a}=e,o="rtl"===(0,l.g)(this.hostElement);return(0,r.h)("calcite-panel",{heading:a.general.effects,description:t?void 0:s.title,class:{[n]:!0,[l.C.rtl]:o},closable:!0,onCalcitePanelClose:()=>{this.arcgisEffectsClose.emit()},ref:e=>this.panelNode=e},(0,r.h)("calcite-tip",{heading:a.error.title,closeDisabled:!0},(0,r.h)("div",null,a.error.text1),(0,r.h)("div",null,a.error.text2)),(0,r.h)("calcite-fab",{class:"autofocus",slot:"fab",appearance:"outline-fill",kind:"neutral",scale:"s",textEnabled:!0,icon:null,label:a.error.button,text:a.error.button,onClick:this.onRemoveEffect}))}renderContent(){const{props:e,hideLayerTitle:t,showFeatureEffects:s}=this,{layer:a,supportsFeatureEffects:o,strings:i}=e,c="rtl"===(0,l.g)(this.hostElement),u=o&&!!a.featureEffect;return(0,r.h)("calcite-panel",{heading:i.general.effects,description:t?void 0:a.title,class:{[n]:!0,[l.C.rtl]:c},closable:!0,onCalcitePanelClose:()=>{const{popovers:e}=this;let t;for(t in e)e[t].open=!1;this.arcgisEffectsClose.emit()},ref:this.afterCreatePanel},this.renderTip(),o?(0,r.h)("div",{class:"radio-buttons"},(0,r.h)("calcite-segmented-control",{layout:"horizontal",appearance:"solid",scale:"s",width:"full",onCalciteSegmentedControlChange:this.onSwitchEffectType},(0,r.h)("calcite-segmented-control-item",{value:"layer",checked:!(u||s)},i.general.wholeLayer),(0,r.h)("calcite-segmented-control-item",{value:"feature",checked:u||s},i.general.featureSpecific))):null,u||s?this.renderFeatureEffectsContent():this.renderLayerEffectsContent())}renderTip(){const{props:e}=this,{strings:t}=e;return(0,c.g)(c.l.ARCGIS_COMPONENT_NOTIFICATIONS,c.a.EFFECTS_TIP_DISMISSED)?null:(0,r.h)("div",{class:"notice"},(0,r.h)("calcite-notice",{scale:"s",width:"full",open:!0,closable:!0,onCalciteNoticeClose:()=>{(0,c.s)(c.l.ARCGIS_COMPONENT_NOTIFICATIONS,{key:c.a.EFFECTS_TIP_DISMISSED,value:"true"})}},(0,r.h)("div",{slot:"message"},t.general.notice)))}renderLayerEffectsContent(){const{strings:e}=this;return(0,r.h)("div",null,(0,r.h)("div",{class:u},(0,r.h)("calcite-label",{scale:"s"},e.general.dragToReorder)),(0,r.h)("calcite-value-list",{class:p,dragEnabled:!0,onCalciteListOrderChange:()=>this.arcgisEffectsApplyLayerEffect.emit(),ref:e=>this.listNode=e},m.map((e=>this.renderLayerEffectItem(e)))))}renderLayerEffectItem(e){var t;const{props:s}=this,{effectsJSON:a,strings:l}=s;let o=-1;return a&&(null===(t=Array.from(a))||void 0===t||t.forEach(((t,s)=>{t.type===N(e)&&(o=s+1)}))),(0,r.h)("calcite-value-list-item",{label:l.effectsTitle[e],description:l.effectsSummary[e],value:e,onClick:this.openPopover,onKeyDown:e=>{if("Enter"===e.key&&this.openPopover(e)," "===e.key){const t=e.composedPath()[0];"SPAN"===t.tagName&&t.classList.contains("handle")||this.openPopover(e)}}},(0,r.h)("div",{slot:"actions-start",class:h},(0,r.h)("img",{class:d,src:(0,r.a)(`./assets/effect-thumbs/${e}.png`),alt:""})),(0,r.h)("calcite-switch",{scale:"s",checked:o>0,slot:"actions-end",class:"switch",onCalciteSwitchChange:this.onSwitchChange}))}renderFeatureEffectsContent(){const{props:e,lastFeatureEffect:t,strings:s}=this,{layer:a,backgroundTheme:l}=e,o="light"===l,i=(0,r.h)("div",null,(0,r.h)("div",{class:f},(0,r.h)("calcite-label",{scale:"s"},s.general.lightBasemaps)),(0,r.h)("calcite-value-list",{class:p,"data-value":"light",ref:e=>this.lightListNode=e},v.map((e=>this.renderFeatureEffectItem(e,"light"))))),c=(0,r.h)("div",null,(0,r.h)("div",{class:f},(0,r.h)("calcite-label",{scale:"s"},s.general.darkBasemaps)),(0,r.h)("calcite-value-list",{class:p,"data-value":"dark",ref:e=>this.darkListNode=e},y.map((e=>this.renderFeatureEffectItem(e,"dark")))));return(0,r.h)("div",null,(0,r.h)("div",{class:u},(0,r.h)("calcite-label",{scale:"s"},s.general.emphasize),(0,r.h)("calcite-label",{scale:"s",layout:"inline-space-between"},s.general.enabled,(0,r.h)("calcite-switch",{scale:"s",checked:!(!a.featureEffect&&!t),onCalciteSwitchChange:this.onFeatureEffectEnabledSwitchChange,ref:e=>this.enabledSwitchNode=e}))),o?i:c,o?c:i)}renderFeatureEffectItem(e,t){const{props:s}=this,{featureEffectType:a,strings:l}=s,o=v.find((t=>e===t)),i=y.find((t=>e===t));return(0,r.h)("calcite-value-list-item",{label:l.featureEffectsTitle[e],description:l.featureEffectsSummary[e],value:e,selected:a===e,onClick:this.openPopover,onKeyDown:e=>{if("Enter"===e.key&&this.openPopover(e)," "===e.key){const t=e.composedPath()[0];"SPAN"===t.tagName&&t.classList.contains("handle")||this.openPopover(e)}}},(0,r.h)("div",{slot:"actions-start",class:h},(0,r.h)("img",{class:`${d} feature`,src:(0,r.a)(`./assets/effect-thumbs/${e}${o&&i?`_${t}`:""}.png`),alt:""})))}selectFeatureEffectType(e){var t,s;const{popovers:r,props:a,lightListNode:l,darkListNode:o,defaultWhere:i,enabledSwitchNode:c}=this,{layer:n}=a;a.featureEffectType=e,null==l||l.querySelectorAll("calcite-value-list-item").forEach((t=>{t.selected&&t.value!==e&&(t.selected=!1)})),null==o||o.querySelectorAll("calcite-value-list-item").forEach((t=>{t.selected&&t.value!==e&&(t.selected=!1)})),n.featureEffect=P(e,(null===(s=null===(t=n.featureEffect)||void 0===t?void 0:t.filter)||void 0===s?void 0:s.where)||i,a),this.defaultWhere=void 0,this.arcgisEffectsChange.emit();const u=r.featureEffect;if(u.open)u.updateHeader(e);else{let t;for(t in r)r[t].open=!1;u.open=!0,u.updateHeader(e)}c?c.checked=!0:this.reRender=!this.reRender}static get assetsDirs(){return["assets"]}get hostElement(){return(0,r.d)(this)}};$.style=":host{height:100%}.flow{height:100%}.panel{height:100%}.notice{margin:0.5rem}.radio-buttons{padding:0.5rem;background-color:white}.hint{padding:0.25rem 0.5rem;background-color:white}.basemap-type{padding:0.75rem 0.5rem 0.25rem 0.5rem}.switch{margin-right:0.75rem;margin-left:0;align-self:center}.list{flex-flow:column nowrap;margin:1px}.effect-thumb{display:flex;align-items:center;padding-left:0.5rem;cursor:pointer}.effect-thumb-img{margin-top:0.25rem;margin-bottom:0.25rem;height:48px;width:48px}.arcgis--rtl .switch{margin-left:0.75rem;margin-right:0}.arcgis--rtl .effect-thumb{padding-left:0;padding-right:0.5rem}";const M="panel",T="auto",O="effects-content",A="bottom-space",F="switch",L=e=>{e.stopPropagation()},q=e=>{var t,s;null===(s=(t=e.target).setFocus)||void 0===s||s.call(t),e.preventDefault()},R=e=>{const{disabled:t,min:s,max:a,step:l,value:o,units:i,classNames:c,label:n}=e;return(0,r.h)("div",{class:`select-number ${c}`},(0,r.h)("calcite-slider",{disabled:t,min:s,max:a,value:o,step:l,snap:!0,labelTicks:!0,ticks:a-s,minLabel:n,onCalciteSliderInput:t=>D(t,e)}),(0,r.h)("calcite-input",{type:"number",onClick:L,disabled:t,min:s,max:a,value:`${o}`,scale:"s",step:l,suffixText:i,onCalciteInputInput:t=>D(t,e),class:"select-number__input",label:n}))};function D(e,t){const{locale:s}=t,r=e.currentTarget,a=r.parentElement.querySelector("calcite-slider"),l=r.parentElement.querySelector("calcite-input"),o=Number(r.value),i=Math.min(t.max,Math.max(t.min,o));if(i===a.value&&`${i}`===l.value)return;a.value=i,l.value=`${i}`;const c=i.toLocaleString(s);l.querySelectorAll("input").forEach((e=>e.value=c)),t.onValueChange(i,r)}const U="select-xy__input",H=e=>{e.stopPropagation()},V=e=>{const{min:t,max:s,step:a,x:l,y:o,classNames:i,strings:c,locale:n}=e;let u;return(0,r.h)("div",{class:`select-xy ${i}`,ref:e=>u=e},(0,r.h)("arcgis-xy-slider",{"data-value":"slider",minX:t,maxX:s,minY:t,maxY:s,x:l,y:o,step:a,snappable:!0,onArcgisXYSliderInput:t=>{const s=t.currentTarget,r="data-active";s.hasAttribute(r)?J(t,e,u):s.setAttribute(r,"")}}),(0,r.h)("div",null,(0,r.h)("calcite-label",{scale:"s"},c.effectsProps.xOffset,(0,r.h)("calcite-input",{"data-value":"x",type:"number",min:t,max:s,step:a,lang:n,value:`${l}`,class:U,scale:"s",onClick:H,onCalciteInputInput:t=>J(t,e,u)})),(0,r.h)("calcite-label",{scale:"s"},c.effectsProps.yOffset,(0,r.h)("calcite-input",{"data-value":"y",type:"number",min:t,max:s,step:a,lang:n,value:`${o}`,class:U,scale:"s",onClick:H,onCalciteInputInput:t=>J(t,e,u)}))))};function J(e,t,s){const{step:r,locale:a}=t,l=e.currentTarget,o=l.getAttribute("data-value"),i=s.querySelector("arcgis-xy-slider"),c=s.querySelectorAll("calcite-input"),n=Number("slider"===o?l.x:"x"===o?l.value:c[0].value),u=Number("slider"===o?l.y:"y"===o?l.value:c[1].value),f=function(e){if(null==e)return 0;const t=e.toString().split(""),s=t.lastIndexOf(".");return s<0?0:t.length-s}(r),p=Math.pow(10,f),h=Math.round(n*p)/p,d=Math.round(u*p)/p,g=Math.min(t.max,Math.max(t.min,h)),m=Math.min(t.max,Math.max(t.min,d));if(g===i.x&&`${g}`===c[0].value&&m===i.y&&`${m}`===c[1].value)return;i.x=g,i.y=m,c[0].value=`${g}`,c[1].value=`${m}`;const v=g.toLocaleString(a),y=m.toLocaleString(a);c[0].querySelectorAll("input").forEach((e=>e.value=v)),c[1].querySelectorAll("input").forEach((e=>e.value=y)),t.onValueChange(g,m,l)}const B=class{constructor(e){(0,r.r)(this,e),this.arcgisEffectsApplyLayerEffect=(0,r.c)(this,"arcgisEffectsApplyLayerEffect",7),this.arcgisEffectsPopoverFilterChange=(0,r.c)(this,"arcgisEffectsPopoverFilterChange",7),this.arcgisEffectsPopoverClose=(0,r.c)(this,"arcgisEffectsPopoverClose",7),this.defaultExpression=!1,this.onOpen=()=>{setTimeout((()=>requestAnimationFrame((()=>{var e;return null===(e=this.closeNode)||void 0===e?void 0:e.setFocus()}))),1)},this.onClose=()=>{var e;null===(e=this.filterNode)||void 0===e||e.closePopovers()},this.onPropChange=()=>{const{type:e}=this;this.arcgisEffectsApplyLayerEffect.emit({type:e})},this.onReset=()=>{const{type:e,props:t,popoverNode:s}=this,{modules:r}=t,{screenUtils:a}=r,l=E[e];switch(e){case"bloom":{const e=s.querySelectorAll("calcite-input");e[0].value=`${l.strength}`,e[1].value=`${a.pt2px(l.radius)}`,e[2].value=`${Math.round(100*l.threshold)}`;const t=s.querySelectorAll("calcite-slider");t[0].value=l.strength,t[1].value=a.pt2px(l.radius),t[2].value=Math.round(100*l.threshold);break}case"dropShadow":{let e=w(t);s.querySelector("calcite-color-picker").value=`${this.rgb2Hex(l[e].color)}`;const r=s.querySelectorAll("calcite-input");r[0].value=`${Math.round(a.pt2px(l[e].blurRadius))}`,r[1].value=`${Math.round(a.pt2px(l[e].xoffset))}`,r[2].value=`${Math.round(a.pt2px(l[e].yoffset))}`,r[3].value=""+l[e].color[3]/255*100;const o=s.querySelectorAll("calcite-slider");o[0].value=Math.round(a.pt2px(l[e].blurRadius)),o[1].value=l[e].color[3]/255*100;const i=s.querySelectorAll("arcgis-xy-slider");i[0].x=Math.round(a.pt2px(l[e].xoffset)),i[0].y=Math.round(a.pt2px(l[e].yoffset));break}case"blur":s.querySelector("calcite-input").value=`${a.pt2px(l.radius)}`,s.querySelector("calcite-slider").value=a.pt2px(l.radius);break;case"brightnessContrast":{const e=E.brightness,t=E.contrast,r=s.querySelectorAll("calcite-input");r[0].value=`${Math.round(100*e.amount)}`,r[1].value=`${Math.round(100*t.amount)}`;const a=s.querySelectorAll("calcite-slider");a[0].value=Math.round(100*e.amount),a[1].value=Math.round(100*t.amount);break}case"grayscale":case"saturate":case"invert":case"sepia":s.querySelector("calcite-input").value=""+100*l.amount,s.querySelector("calcite-slider").value=100*l.amount;break;case"hueRotate":s.querySelector("calcite-input").value=`${l.angle}`,s.querySelector("calcite-slider").value=l.angle}this.arcgisEffectsApplyLayerEffect.emit({type:e})},this.props=void 0,this.type=void 0,this.open=!1,this.referenceElement=void 0,this.popovers=void 0}async reposition(){var e;null===(e=this.popoverNode)||void 0===e||e.reposition()}async updateHeader(e){const{props:t,filterNode:s}=this,{strings:r}=t;s&&(s.closePopovers(),s.panelHeading=r.featureEffectsTitle[e]||r.effectsTitle[e])}async componentWillLoad(){const{props:e}=this,{layer:t}=e;t.featureEffect||(this.defaultExpression=!0)}render(){const{props:e,referenceElement:t,type:s,open:a}=this,{strings:o}=e,i="rtl"===(0,l.g)(this.hostElement),c=["featureEffect","dropShadow"].indexOf(s)>-1;return(0,r.h)(r.H,{class:"js-app-flyout"},(0,r.h)("calcite-popover",{dir:(0,l.g)(this.hostElement),pointerDisabled:!0,label:o.effectsTitle[s],offsetDistance:10,offsetSkidding:c?10:100,open:a,placement:"leading-start",triggerDisabled:!0,class:{"arcgis-effects-popover":!0,popover:!0,[l.C.rtl]:i},referenceElement:t,onCalcitePopoverOpen:this.onOpen,onCalcitePopoverClose:this.onClose,ref:e=>{this.popoverNode=e}},"featureEffect"===s?this.renderFeatureEffectProps():this.renderLayerEffectProps()))}renderLayerEffectProps(){const{props:e,referenceElement:t,type:s}=this,{strings:a}=e,o="rtl"===(0,l.g)(this.hostElement),i=t.getBoundingClientRect();return(0,r.h)("calcite-panel",{closable:!1,heading:a.effectsTitle[s],class:M,style:{maxHeight:.9*i.height+"px"},ref:e=>this.panelNode=e},["bloom","dropShadow","blur","brightnessContrast","grayscale","hueRotate","saturate","invert","sepia"].indexOf(s)>-1?(0,r.h)("calcite-action",{text:a.effectsProps.reset,scale:"s",slot:"header-actions-end",title:a.effectsProps.reset,onClick:this.onReset},(0,r.h)("calcite-icon",{scale:"s",icon:o?"redo":"undo"})):null,(0,r.h)("calcite-action",{text:a.general.close,icon:"x",slot:"header-actions-end",title:a.general.close,ref:e=>this.closeNode=e,onClick:()=>{this.arcgisEffectsPopoverClose.emit(),this.open=!1,this.popoverNode.open=!1,this.panelNode.closed=!1}}),"bloom"===s?this.renderBloom():null,"dropShadow"===s?this.renderDropShadow():null,"blur"===s?this.renderBlur():null,"brightnessContrast"===s?this.renderBrightnessContrast():null,"grayscale"===s?this.renderGrayscale():null,"hueRotate"===s?this.renderHueRotate():null,"saturate"===s?this.renderSaturate():null,"invert"===s?this.renderInvert():null,"sepia"===s?this.renderSepia():null)}renderBloom(){const{props:e,type:t}=this,{layer:s,strings:a,locale:l,modules:o}=e,{screenUtils:i}=o,c=s,n=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},a.effectsProps.strength,(0,r.h)(R,{min:0,max:5,step:.1,locale:l,value:Math.round(10*n.strength)/10,classNames:A,label:a.effectsProps.strength,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{scale:"s",onClick:q},a.effectsProps.radius,(0,r.h)(R,{min:0,max:5,step:.1,locale:l,value:Math.round(10*i.pt2px(n.radius))/10,classNames:A,label:a.effectsProps.radius,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{scale:"s",onClick:q},a.effectsProps.threshold,(0,r.h)(R,{min:0,max:100,step:1,locale:l,value:Math.round(100*n.threshold),classNames:A,label:a.effectsProps.threshold,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{layout:"inline-space-between",scale:"s",class:F},a.effectsProps.autoAdjust,(0,r.h)("calcite-switch",{checked:!(c.effect&&"string"==typeof c.effect),scale:"s",class:T,onCalciteSwitchChange:this.onPropChange})))}renderDropShadow(){const{props:e,type:t}=this,{layer:s,strings:a,locale:l,modules:o}=e,{screenUtils:i}=o,c=s,n=C(t,e),u=this.rgb2Hex(n.color);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s"},a.effectsProps.color,(0,r.h)("calcite-color-picker",{scale:"m",value:u,hideSaved:!0,onCalciteColorPickerInput:this.onPropChange})),(0,r.h)("calcite-label",{scale:"s"},a.effectsProps.width,(0,r.h)(R,{min:0,max:20,step:1,locale:l,value:Math.round(i.pt2px(n.blurRadius)),classNames:A,label:a.effectsProps.width,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{scale:"s"},a.effectsProps.offset,(0,r.h)(V,{min:-20,max:20,step:1,locale:l,x:Math.round(i.pt2px(n.xoffset)),y:Math.round(i.pt2px(n.yoffset)),classNames:"bottom-space-little",strings:a,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{scale:"s",onClick:q},a.effectsProps.opacity,(0,r.h)(R,{min:0,max:100,step:1,locale:l,value:n.color[3]/255*100,classNames:A,label:a.effectsProps.opacity,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{layout:"inline-space-between",scale:"s",class:F},a.effectsProps.autoAdjust,(0,r.h)("calcite-switch",{checked:!(c.effect&&"string"==typeof c.effect),scale:"s",class:T,onCalciteSwitchChange:this.onPropChange})))}renderBlur(){const{props:e,type:t}=this,{strings:s,locale:a,modules:l}=e,{screenUtils:o}=l,i=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},s.effectsProps.strength,(0,r.h)(R,{min:0,max:30,step:.1,locale:a,value:Math.round(10*o.pt2px(i.radius))/10,classNames:A,label:s.effectsProps.strength,onValueChange:this.onPropChange})))}renderBrightnessContrast(){const{props:e}=this,{strings:t,locale:s}=e,a=C("brightness",e),l=C("contrast",e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},t.effectsProps.brightness,(0,r.h)(R,{min:0,max:300,step:1,locale:s,value:Math.round(100*a.amount),classNames:A,label:t.effectsProps.brightness,onValueChange:this.onPropChange})),(0,r.h)("calcite-label",{scale:"s",onClick:q},t.effectsProps.contrast,(0,r.h)(R,{min:0,max:300,step:1,locale:s,value:Math.round(100*l.amount),classNames:A,label:t.effectsProps.contrast,onValueChange:this.onPropChange})))}renderGrayscale(){const{props:e,type:t}=this,{strings:s,locale:a}=e,l=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},s.effectsProps.strength,(0,r.h)(R,{min:0,max:100,step:1,locale:a,value:100*l.amount,classNames:A,label:s.effectsProps.strength,onValueChange:this.onPropChange})))}renderHueRotate(){const{props:e,type:t}=this,{strings:s,locale:a}=e,l=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},s.effectsProps.degrees,(0,r.h)(R,{min:0,max:360,step:1,locale:a,value:l.angle,classNames:A,label:s.effectsProps.degrees,onValueChange:this.onPropChange})))}renderSaturate(){const{props:e,type:t}=this,{strings:s,locale:a}=e,l=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},s.effectsProps.strength,(0,r.h)(R,{min:0,max:200,step:1,locale:a,value:100*l.amount,classNames:A,label:s.effectsProps.strength,onValueChange:this.onPropChange})))}renderInvert(){const{props:e,type:t}=this,{strings:s,locale:a}=e,l=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},s.effectsProps.strength,(0,r.h)(R,{min:0,max:100,step:1,locale:a,value:100*l.amount,classNames:A,label:s.effectsProps.strength,onValueChange:this.onPropChange})))}renderSepia(){const{props:e,type:t}=this,{strings:s,locale:a}=e,l=C(t,e);return(0,r.h)("div",{class:O},(0,r.h)("calcite-label",{scale:"s",onClick:q},s.effectsProps.strength,(0,r.h)(R,{min:0,max:100,step:1,locale:a,value:100*l.amount,classNames:A,label:s.effectsProps.strength,onValueChange:this.onPropChange})))}renderFeatureEffectProps(){const{props:e,type:t,defaultExpression:s}=this,{view:a,layer:l,strings:o}=e,i=function(e){var t,s,r,a,l;const{layer:o}=e,{renderer:i}=o;if(!i)return null;switch(i.type){case"unique-value":return"predominance"===(null===(t=i.authoringInfo)||void 0===t?void 0:t.type)?i.uniqueValueInfos[0].value:"relationship"===(null===(s=i.authoringInfo)||void 0===s?void 0:s.type)?i.authoringInfo.field1.field:i.field;case"class-breaks":if(!i.visualVariables)return i.field;{let e=null===(r=i.visualVariables.find((e=>"color"===e.type)))||void 0===r?void 0:r.field;if(e)return e;if(e=null===(a=i.visualVariables.find((e=>"size"===e.type&&!e.target&&"$view.scale"!==e.valueExpression)))||void 0===a?void 0:a.field,e)return e}break;case"dot-density":return null===(l=i.attributes)||void 0===l?void 0:l[0].field}return null}(e);return(0,r.h)("arcgis-filter",{class:`${M} filter`,view:a,layer:l,hideLayerTitle:!0,panelHeading:o.featureEffectsTitle[t],tipHeading:o.filter.tipHeading,tipMsg:o.filter.tipMsg,invalidHeading:o.filter.invalidHeading,invalidMsg:o.filter.invalidMsg,mode:"effects",defaultFieldName:i,defaultOperator:">",defaultExpression:!!i&&s,hideButtons:!0,dismissible:!0,panelMaxHeight:"80vh",onArcgisFilterDismissedChange:()=>{this.arcgisEffectsPopoverClose.emit(),this.popoverNode.open=!1,this.open=!1},onArcgisFilterWhereChange:({detail:e})=>{this.arcgisEffectsPopoverFilterChange.emit(e)},ref:e=>this.filterNode=e})}rgb2Hex(e){return"#"+this.componentToHex(Math.max(0,Math.min(255,e[0])))+this.componentToHex(Math.max(0,Math.min(255,e[1])))+this.componentToHex(Math.max(0,Math.min(255,e[2])))}componentToHex(e){const t=e.toString(16);return 1==t.length?"0"+t:t}get hostElement(){return(0,r.d)(this)}};B.style=".select-number.sc-arcgis-effects-popovers{display:flex;align-items:center;justify-content:space-between;position:relative}.select-number.sc-arcgis-effects-popovers calcite-slider.sc-arcgis-effects-popovers{width:58%;height:30px;margin:0 4px;overflow-wrap:normal;word-break:normal}.select-number__input.sc-arcgis-effects-popovers{width:35%;font-size:var(--arcgis-app-font-size-0);font-family:var(--arcgis-app-font-family)}.select-xy.sc-arcgis-effects-popovers{display:flex;align-items:center}.select-xy.sc-arcgis-effects-popovers arcgis-xy-slider.sc-arcgis-effects-popovers{width:120px;min-width:120px;margin:0 10px}.select-xy__input.sc-arcgis-effects-popovers{width:100%;font-size:var(--arcgis-app-font-size-0);font-family:var(--arcgis-app-font-family)}.popover.sc-arcgis-effects-popovers{z-index:99}.panel.sc-arcgis-effects-popovers{width:325px}.panel.filter.sc-arcgis-effects-popovers{min-height:500px;background-color:var(--calcite-ui-background)}.effects-content.sc-arcgis-effects-popovers{padding:1rem;background-color:white;max-height:80vh}.bottom-space.sc-arcgis-effects-popovers{margin-bottom:1.5rem}.bottom-space-little.sc-arcgis-effects-popovers{margin-bottom:0.5rem}.switch.sc-arcgis-effects-popovers{width:100%;display:flex;justify-content:space-between}.reset.sc-arcgis-effects-popovers{display:flex;align-items:center}.sub-header.sc-arcgis-effects-popovers{margin-left:0.75rem;margin-right:0}.arcgis--rtl.sc-arcgis-effects-popovers .sub-header.sc-arcgis-effects-popovers{margin-right:0.75rem;margin-left:0}"},74828:(e,t,s)=>{var r,a;s.d(t,{a:()=>a,g:()=>i,l:()=>r,s:()=>o}),function(e){e.ARCGIS_COMPONENT_NOTIFICATIONS="arcgisComponent_notifications"}(r||(r={})),function(e){e.FEATURE_REDUCTION_WARNING_DISMISSED="arcgis_feature_reduction_warning_dismissed",e.POPUP_WARNING_DISMISSED="arcgis_popup_warning_dismissed",e.INCOMPATIBLE_VECTOR_SYMBOLS_DISMISSED="arcgis_symbol_styler_incompatible_vector_symbols_dismissed",e.EFFECTS_TIP_DISMISSED="arcgis_effects_tip_dismissed",e.LAYER_VIEW_DEFINITION_DISMISSED="arcgis_layer_view_definition_dismissed",e.LAYER_OVERRIDE_STATUS_TIP_DISMISSED="arcgis_layer_override_status_tip_dismissed",e.LAYER_VIEW_JOIN_TIP_DISMISSED="arcgis_layer_view_join_tip_dismissed",e.MULTIDIMENSIONAL_INFO_TIP_DISMISSED="arcgis_multidimensional_info_tip_dismissed"}(a||(a={}));const l=e=>JSON.parse((e=>localStorage.getItem(e))(e))||{},o=(e,t)=>{const s=l(e);s[t.key]=t.value,((e,t)=>{localStorage.setItem(e,t)})(e,JSON.stringify(s))},i=(e,t)=>{const s=l(e);return(null==s?void 0:s.hasOwnProperty(t))?s[t]:null}},62727:(e,t,s)=>{s.d(t,{a:()=>o,g:()=>n});var r=s(18869),a=s(81068),l=s(28384);function o(e){var t,s,l;const o=null!==(t=(0,r.c)(e,"[lang]"))&&void 0!==t?t:null===(l=null===(s=e.shadowRoot)||void 0===s?void 0:s.ownerDocument)||void 0===l?void 0:l.documentElement,i=((null==o?void 0:o.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return a.l.has(i)?a.l.get(i):a.l.has(i.slice(0,2))?a.l.get(i.slice(0,2)):"en"}const i={};function c(e,t){const s=`${e}${t}`;return i[s]||(i[s]=function(e,t){return new Promise(((s,r)=>{fetch((0,l.a)(`../arcgis-app-assets/i18n/${e}.i18n.${t}.json`)).then((e=>{e.ok?s(e.json()):r()}),(()=>r()))}))}(e,t)),i[s]}async function n(e,t){const s=t||e.tagName.toLowerCase(),l=o(e),i=function(e){var t,s,l;const o=null!==(t=(0,r.c)(e,"[lang]"))&&void 0!==t?t:null===(l=null===(s=e.shadowRoot)||void 0===s?void 0:s.ownerDocument)||void 0===l?void 0:l.documentElement,i=((null==o?void 0:o.lang)||(null===navigator||void 0===navigator?void 0:navigator.language)||"en").toLowerCase();return a.l.has(i)?a.l.get(i):a.l.has(i.slice(0,2))?i:"en"}(e);let n;try{n=await c(s,l)}catch(e){console.warn(`no locale for ${s} (${l}) loading default locale en.`),n=await c(s,"en")}return[n,l,i]}}}]);