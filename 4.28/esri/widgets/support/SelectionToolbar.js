// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../core/deprecate ../../core/handleUtils ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ./componentsUtils ./globalCss ./legacyIcon ./widgetUtils ./decorators/messageBundle ./jsxFactory ./SelectionToolbar/SelectionToolbarViewModel".split(" "),function(h,d,k,n,l,p,f,q,c,D,r,t,u,v,E,F,w,g,
x){const m={lassoTool:!0,rectangleTool:!0},y={createTool:"polygon",createOptions:{mode:"freehand"}},z={createTool:"rectangle"};c=class extends t{constructor(a,b){super(a,b);this.messages=this.activeToolInfo=this._viewModelHandlesGroup=null;this.toolConfigs=[];this.viewModel=new x;this.visibleElements={...m};this._viewModelHandlesGroup=n.handlesGroup([this.viewModel.on("selection-change",e=>this.emit("selection-change",e)),this.viewModel.on("complete",e=>{this._set("activeToolInfo",null);this.emit("complete",
e)})])}destroy(){this._viewModelHandlesGroup=p.removeMaybe(this._viewModelHandlesGroup)}loadDependencies(){return u.loadCalciteComponents({action:()=>new Promise((a,b)=>h(["../../chunks/calcite-action"],a,b)),icon:()=>new Promise((a,b)=>h(["../../chunks/calcite-icon"],a,b))})}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get layers(){k.deprecatedProperty(l.getLogger(this),"layers",{replacement:"Use SelectionToolbar.sources instead."});return this.viewModel.sources}set layers(a){k.deprecatedProperty(l.getLogger(this),
"layers",{replacement:"Use SelectionToolbar.sources instead."});this.viewModel.sources=a}get sources(){return this.viewModel.sources}set sources(a){this.viewModel.sources=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}castVisibleElements(a){return{...m,...a}}get visibleToolCount(){const {view:a,toolConfigs:b,visibleElements:e}=this;return(b?.length??0)+("2d"===a?.type?(e.lassoTool?1:0)+(e.rectangleTool?1:0):0)}activate(a){this.cancel();switch(a){case "lasso":this._activateTool("lasso");
break;case "rectangle":this._activateTool("rectangle");break;default:this._activateTool(a)}}cancel(){this.viewModel.cancel();this._set("activeToolInfo",null)}render(){return g.tsx("div",{"aria-label":this.label,class:this.classes("esri-selection-toolbar",v.globalCss.widget)},g.tsx("div",{class:"esri-selection-toolbar__container"},this._renderDefaultTools(),this._renderCustomTools()))}_renderDefaultTools(){if("2d"===this.view?.type)return[this._renderRectangleTool(),this._renderLassoTool()]}_renderCustomTools(){if(this.toolConfigs?.length)return this.toolConfigs.map(a=>
g.tsx("calcite-action",{active:this.activeToolInfo?.toolName===a.toolName,bind:this,class:"esri-selection-toolbar__tool-button",label:a.toolName,onclick:()=>this._onCustomToolClick(a.toolName),scale:"s",text:a.toolName,title:a.toolName},g.tsx("calcite-icon",{icon:a.icon||"selection",scale:"s"})))}_renderLassoTool(){const {activeToolInfo:a,messages:b,visibleElements:e}=this;if(e.lassoTool)return g.tsx("calcite-action",{active:"lasso"===a?.toolName,bind:this,label:b.selectByLasso,onclick:this._onLassoToolClick,
scale:"s",text:b.selectByLasso,title:b.selectByLasso},g.tsx("calcite-icon",{icon:"lasso-select",scale:"s"}))}_renderRectangleTool(){const {activeToolInfo:a,messages:b,visibleElements:e}=this;if(e.rectangleTool)return g.tsx("calcite-action",{active:"rectangle"===a?.toolName,bind:this,label:b.selectByRectangle,onclick:this._onRectangleToolClick,scale:"s",text:b.selectByRectangle,title:b.selectByRectangle},g.tsx("calcite-icon",{icon:"cursor-marquee",scale:"s"}))}_onCustomToolClick(a){this._toggleTool(a)}_onLassoToolClick(){this._toggleTool("lasso")}_onRectangleToolClick(){this._toggleTool("rectangle")}_activateTool(a){var b=
this._getToolOptions(a);b&&(b=this.viewModel.activate(b))&&this._set("activeToolInfo",{toolName:a,operation:b})}_toggleTool(a){if(this.activeToolInfo){const b=this.activeToolInfo.toolName;this.cancel();if(b===a)return}this._activateTool(a)}_getToolOptions(a){if("lasso"===a)return y;if("rectangle"===a)return z;const b=this.toolConfigs.find(A=>A.toolName===a);if(b){var {createTool:e,createOptions:B,selectionOptions:C}=b;return{createTool:e,createOptions:B,selectionOptions:C}}}};d.__decorate([f.property({readOnly:!0})],
c.prototype,"activeToolInfo",void 0);d.__decorate([f.property()],c.prototype,"label",null);d.__decorate([f.property()],c.prototype,"layers",null);d.__decorate([f.property(),w.messageBundle("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")],c.prototype,"messages",void 0);d.__decorate([f.property()],c.prototype,"sources",null);d.__decorate([f.property()],c.prototype,"toolConfigs",void 0);d.__decorate([f.property()],c.prototype,"view",null);d.__decorate([f.property()],c.prototype,"viewModel",
void 0);d.__decorate([f.property()],c.prototype,"visibleElements",void 0);d.__decorate([q.cast("visibleElements")],c.prototype,"castVisibleElements",null);d.__decorate([f.property()],c.prototype,"visibleToolCount",null);return c=d.__decorate([r.subclass("esri.widgets.support.SelectionToolbar")],c)});