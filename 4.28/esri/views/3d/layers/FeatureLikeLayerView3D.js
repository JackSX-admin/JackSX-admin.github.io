// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ../../../rest/support/Query ../../../symbols/support/utils ./graphics/elevationAlignPointsInFeatures ./graphics/Graphics3DFeatureProcessor ./graphics/QueryEngine ./graphics/queryForSymbologySnapping ./support/HeatmapFeatureProcessor ./support/projectExtentUtils ../webgl-engine/lib/UpdatePolicy ../../support/Scheduler".split(" "),
function(l,d,h,g,m,e,C,D,E,n,p,q,r,t,u,v,w,x,y,z,A,B){l.FeatureLikeLayerView3D=c=>{c=class extends c{constructor(){super(...arguments);this.controller=null;this.updatePolicy=A.UpdatePolicy.SYNC;this.suspendResumeExtentMode="computed";this.slicePlaneEnabled=!1;this.suspendResumeExtent=this.fullExtentInLocalViewSpatialReference=null;this._controllerCreated=!1;this.supportsHeightUnitConversion=!0;this.queryEngine=this._pendingController=null}initialize(){const a=this.layer;if("isTable"in a&&a.isTable)this.addResolvingPromise(Promise.reject(new h("featurelayerview:table-not-supported",
"table feature layer can't be displayed",{layer:a})));else{this.addResolvingPromise(this._validateGeometryType());this._updatingHandles.add(()=>this.layer.renderer,f=>this._recreateProcessor(f),m.initial);this.addResolvingPromise((async()=>{this.fullExtentInLocalViewSpatialReference=await z.toViewIfLocal(this);await this._initializeController()})());this._updatingHandles.add(()=>this.updatePolicy,f=>this.processor.preferredUpdatePolicy=f);var b=()=>this.processor.featureStore;this.queryEngine=new w.QueryEngine({context:{spatialReference:this.view.spatialReference,
layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return b()},hasZ:this.hasZ,hasM:this.hasM},priority:B.TaskPriority.FEATURE_QUERY_ENGINE});this.notifyChange("updating")}}destroy(){this._destroyPendingController();this.controller=g.destroyMaybe(this.controller);this._set("processor",g.destroyMaybe(this.processor));this.queryEngine=g.destroyMaybe(this.queryEngine);this.loadedGraphics=null}_destroyPendingController(){this._pendingController=g.destroyMaybe(this._pendingController)}get legendEnabled(){return this.canResume()&&
this.processor?.legendEnabled}get graphics3DProcessor(){return"graphics-3d"===this.processor?.type?this.processor:null}get heatmapProcessor(){return"heatmap"===this.processor?.type?this.processor:null}get symbologySnappingSupported(){return this.layer?.renderer?.getSymbols()?.some(t.symbolHasExtrudeSymbolLayer)??!1}getHit(a){let b;this.loadedGraphics?.forEach(f=>{f.uid===a&&(b=p.hydrateGraphic(f,this.layer))});return b?{type:"graphic",graphic:b,layer:b.layer}:null}whenGraphicBounds(a,b){return this.processor?.whenGraphicBounds(a,
b)}computeAttachmentOrigin(a,b){return this.processor?.computeAttachmentOrigin(a,b)}async elevationAlignPointsInFeatures(a,b){const f=this.graphics3DProcessor;if(null==f)throw new h("featurelayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");return u.elevationAlignPointsInFeatures(this.view,this.layer,k=>f.getGraphics3DGraphicByObjectId(k),a,b)}async queryForSymbologySnapping(a,b){return this.symbologySnappingSupported?x.queryForSymbologySnapping(this.graphics3DProcessor,
a,b):{candidates:[],sourceCandidateIndices:[]}}queryFeatures(a,b){return this.queryEngine.executeQuery(this._ensureQuery(a),b?.signal)}queryObjectIds(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),b?.signal)}queryFeatureCount(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),b?.signal)}queryExtent(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),b?.signal)}_ensureQuery(a){return null==a?this.createQuery():r.from(a)}highlight(a){return this.processor.highlight(a,
this.layer.objectIdField)}maskOccludee(a){return this.processor.maskOccludee(a)}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}getSuspendInfo(){const a=super.getSuspendInfo();return this.processor?{...a,...this.processor.suspendInfo}:a}isUpdating(){return!this.processor||this.processor.destroyed?!1:!(this._controllerCreated&&!this.controller?.updating&&this.view?.basemapTerrain?.ready&&!this.processor.updating)}async _initializeController(){const a=this.createController();
this._pendingController=a;await a.when();this._setControllerWhenInitialized(a)}async _setControllerWhenInitialized(a){try{await this.when()}catch(b){}this._controllerCreated=!0;this.notifyChange("updating");!this.isResolved()||this.destroyed?this._destroyPendingController():(await m.whenOnce(()=>this.view?.basemapTerrain?.ready),this.beforeSetController(a),this._pendingController=null,this.controller=a,this.loadedGraphics=a.graphics,this.notifyChange("updating"))}_updateClippingExtent(a){this.clippingExtent=
a;if(!this.controller)return!1;switch(this.controller.type){case "stream":return!1;case "feature-tile-3d":return this.controller.extent=a,!0}}async _validateGeometryType(){switch(this.layer.geometryType){case "multipatch":case "multipoint":throw new h("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ${geometryType}",{geometryType:this.layer.geometryType});}}_recreateProcessor(a){var b="heatmap"===a?.type;const f="heatmap"===this.processor?.type;a=this.processor;a&&b===f||
(b=b?new y.HeatmapFeatureProcessor({owner:this}):new v.Graphics3DFeatureProcessor({owner:this,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,preferredUpdatePolicy:this.updatePolicy,updateClippingExtent:k=>this._updateClippingExtent(k)}),this._set("processor",b),a?.destroy(),this.queryEngine?.clear(),this.addResolvingPromise(b.initializePromise))}_getResourceInfo(){const a=this.controller instanceof
q.FeatureTileController3D?this.controller:null;return{displayedNumberOfFeatures:this.loadedGraphics?.length,maximumNumberOfFeatures:a?.maximumNumberOfFeatures??-1,totalNumberOfFeatures:a?.serviceDataCount??-1,nodes:0,...this.processor.performanceInfo}}get performanceInfo(){return this._getResourceInfo()}};d.__decorate([e.property()],c.prototype,"loadedGraphics",void 0);d.__decorate([e.property()],c.prototype,"suspended",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"legendEnabled",
null);d.__decorate([e.property()],c.prototype,"updating",void 0);d.__decorate([e.property()],c.prototype,"controller",void 0);d.__decorate([e.property()],c.prototype,"processor",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"updatePolicy",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"suspendResumeExtentMode",void 0);d.__decorate([e.property({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"suspendInfo",void 0);
d.__decorate([e.property()],c.prototype,"graphics3DProcessor",null);d.__decorate([e.property()],c.prototype,"heatmapProcessor",null);d.__decorate([e.property()],c.prototype,"symbologySnappingSupported",null);return c=d.__decorate([n.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],c)};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});