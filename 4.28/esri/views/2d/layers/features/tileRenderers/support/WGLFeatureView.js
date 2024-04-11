// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/has ../../../../../../core/promiseUtils ../../../../engine/brushes ../../../../engine/FeatureContainer ../../../../engine/webgl/enums".split(" "),function(g,h,k,c,l,f){const m=h("featurelayer-order-by-server-enabled");class n extends l.FeatureContainer{constructor(a,b,d,e){super(a);this._hitTestsRequests=[];this._layer=d;this._layerView=b;this._onUpdate=e}renderChildren(a){this.attributeView.update();this.hasAnimation&&a.painter.effects.integrate.draw(a,a.attributeView);
super.renderChildren(a)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(a){let b=this._hitTestsRequests.find(({x:e,y:p})=>e===a.x&&p===a.y);const d=k.createResolver();b?b.resolvers.push(d):(b={x:a.x,y:a.y,resolvers:[d]},this._hitTestsRequests.push(b));this.requestRender();return d.promise}onTileData(a,b){const d=m&&"orderBy"in this._layer&&this._layer.orderBy,e=d&&d?.length&&!d[0].valueExpression&&d[0].field;a.patch(b,!!d&&this._layerView.orderByFields===
e);this.contains(a)||this.addChild(a);this.requestRender()}onTileError(a){this.contains(a)||this.addChild(a)}updateTransitionProperties(a,b){super.updateTransitionProperties(a,b);this._layerView.featureEffectView.transitionStep(a,b);this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(a){const {minScale:b,maxScale:d}=this._layer.effectiveScaleRange,e=a.state.scale;e<=(b||Infinity)&&e>=d&&super.doRender(a)}afterRender(a){super.afterRender(a);this._hitTestsRequests.length&&
this.requestRender()}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate();this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(a){const {rendererSchema:b}=a.rendererInfo;if("dot-density"===b?.type&&1<b?.dotSize||"heatmap"===b?.type)for(const d of this.children)d.stencilRef=d.key.level+1;else super.setStencilReference(a)}get hasHighlight(){return this._layerView.hasHighlight()}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(b=>
!!b.labelingInfo?.length&&b.labelsVisible);var a=this._layer.featureReduction;a=a&&"labelingInfo"in a&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length;return this._layer.labelingInfo?.length&&this._layer.labelsVisible||!!a}prepareRenderPasses(a){const b=super.prepareRenderPasses(a),d=a.registerRenderPass({name:"label",brushes:[c.brushes.label],target:()=>this.hasLabels?this.children:null,drawPhase:f.WGLDrawPhase.LABEL|f.WGLDrawPhase.LABEL_ALPHA});if(h("featurelayer-force-marker-text-draw-order")){var e=
a.registerRenderPass({name:"geometry",brushes:[c.brushes.fill,c.brushes.dotDensity,c.brushes.line,c.brushes.heatmap,c.brushes.pieChart],target:()=>this.children,forceDrawByDisplayOrder:!0,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:a.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:a.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>
this._layerView.featureEffectView.includedEffects},{apply:a.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]});b.push(e)}else e=a.registerRenderPass({name:"geometry",brushes:[c.brushes.fill,c.brushes.dotDensity,c.brushes.line,c.brushes.marker,c.brushes.heatmap,c.brushes.pieChart,c.brushes.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:a.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,
args:()=>this._layerView.featureEffectView.excludedEffects},{apply:a.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:a.effects.hittest,enable:()=>!!this._hitTestsRequests.length,args:()=>this._hitTestsRequests}]}),b.push(e);a=a.registerRenderPass({name:"highlight",brushes:[c.brushes.fill,c.brushes.dotDensity,c.brushes.line,c.brushes.marker,c.brushes.pieChart,c.brushes.text],target:()=>this.children,drawPhase:f.WGLDrawPhase.HIGHLIGHT,
enableDefaultDraw:()=>!1,effects:[{apply:a.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});b.push(a);b.push(d);return b}}g.WGLFeatureView=n;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});