/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{L as r}from"../chunks/Logger.js";import{throwIfAborted as o}from"../core/promiseUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import l from"../portal/Portal.js";import{r as p,w as m}from"../chunks/persistableUrlUtils.js";import c from"./Symbol.js";import{T as n}from"../chunks/Thumbnail.js";import"../config.js";import"../core/lang.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../chunks/maybe.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";var a;let u=a=class extends c{constructor(t){super(t),this.color=null,this.styleName=null,this.portal=null,this.styleUrl=null,this.thumbnail=null,this.name=null,this.type="web-style"}get _fetchCacheKey(){const t=null!=this.portal?this.portal:l.getDefault(),r=t.user?t.user.username:null;return`${this.styleName}:${this.styleUrl}:${this.name}:${r}:${t.url}`}read(t,r){this.portal=r?.portal,super.read(t,r)}clone(){return new a({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})}fetchSymbol(t){return this._fetchSymbol("webRef",t)}fetchCIMSymbol(t){return this._fetchSymbol("cimRef",t)}async _fetchSymbol(t,s){const e=null!=s?s.cache:null,i=e?this._fetchCacheKey:null;if(null!=e){const t=i&&e.get(i);if(t)return t.clone()}const{resolveWebStyleSymbol:l}=await import("../chunks/webStyleSymbolUtils.js");o(s);const p=l(this,{portal:this.portal},t,s);p.catch((t=>{r.getLogger(this).error("#fetchSymbol()","Failed to create symbol from style",t)}));const m=await p;return"webRef"===t&&"point-3d"===m.type||"cimRef"===t&&"cim"===m.type?(null!=e&&e.set(i,m.clone()),m):null}};t([s({json:{write:!1}})],u.prototype,"color",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"styleName",void 0),t([s({type:l,json:{write:!1}})],u.prototype,"portal",void 0),t([s({type:String,json:{read:p,write:m}})],u.prototype,"styleUrl",void 0),t([s({type:n,json:{read:!1}})],u.prototype,"thumbnail",void 0),t([s({type:String,json:{write:!0}})],u.prototype,"name",void 0),t([e({styleSymbolReference:"web-style"},{readOnly:!0})],u.prototype,"type",void 0),t([s()],u.prototype,"_fetchCacheKey",null),u=a=t([i("esri.symbols.WebStyleSymbol")],u);const h=u;export{h as default};