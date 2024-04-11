/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"./ensureType.js";import"./typedArrayUtil.js";import"../core/Error.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{L as o}from"./LayerView2D.js";import s from"./GroupLayerView.js";import"../config.js";import"../core/lang.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"../core/Collection.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/property.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./collectionUtils.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"./scaleUtils.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./unitUtils.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./Container.js";import"./mat3f32.js";import"./EffectView.js";import"./parser.js";import"./colorUtils.js";import"./utils3.js";import"./screenUtils.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./DisplayObject.js";import"./definitions.js";import"./enums3.js";import"./Texture.js";import"./contextUtils.js";import"./HighlightOptions.js";import"../Color.js";import"./ClipRect.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../views/layers/LayerView.js";import"../core/Identifiable.js";import"../core/Promise.js";import"./UpdatingHandles.js";let i=class extends(o(s)){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(t){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((t,r)=>this.container.addChildAt(t.container,r)))}};i=t([r("esri.views.2d.layers.GroupLayerView2D")],i);const e=i;export{e as default};