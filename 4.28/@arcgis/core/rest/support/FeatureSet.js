/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as o}from"../../geometry.js";import e from"../../Graphic.js";import{J as s}from"../../chunks/jsonMap.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as p}from"../../chunks/reader.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import a from"../../geometry/SpatialReference.js";import{fromJSON as u,isPolygon as c}from"../../geometry/support/jsonUtils.js";import y from"../../layers/support/Field.js";import"../../geometry/Extent.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/typedArrayUtil.js";import"../../geometry/Geometry.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";var j;const h=new s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let f=j=class extends r{constructor(t){super(t),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(t,o){const s=a.fromJSON(o.spatialReference),r=[];for(let o=0;o<t.length;o++){const i=t[o],n=e.fromJSON(i),p=i.geometry?.spatialReference;null==n.geometry||p||(n.geometry.spatialReference=s);const l=i.aggregateGeometries,m=n.aggregateGeometries;if(l&&null!=m)for(const t in m){const o=m[t],e=l[t],r=e?.spatialReference;null==o||r||(o.spatialReference=s)}r.push(n)}return r}writeGeometryType(t,o,e,s){if(t)return void h.write(t,o,e,s);const{features:r}=this;if(r)for(const t of r)if(null!=t?.geometry)return void h.write(t.geometry.type,o,e,s)}readQueryGeometry(t,o){if(!t)return null;const e=!!t.spatialReference,s=u(t);return s&&!e&&o.spatialReference&&(s.spatialReference=a.fromJSON(o.spatialReference)),s}writeSpatialReference(t,o){if(t)return void(o.spatialReference=t.toJSON());const{features:e}=this;if(e)for(const t of e)if(t&&null!=t.geometry&&t.geometry.spatialReference)return void(o.spatialReference=t.geometry.spatialReference.toJSON())}clone(){return new j(this.cloneProperties())}cloneProperties(){return i({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(t){const o=this.write();if(o.features&&Array.isArray(t)&&t.length>0)for(let e=0;e<o.features.length;e++){const s=o.features[e];if(s.geometry){const o=t?.[e];s.geometry=o?.toJSON()||s.geometry}}return o}quantize(t){const{scale:[o,e],translate:[s,r]}=t,i=this.features,n=this._getQuantizationFunction(this.geometryType,(t=>Math.round((t-s)/o)),(t=>Math.round((r-t)/e)));for(let t=0,o=i.length;t<o;t++)n?.(i[t].geometry)||(i.splice(t,1),t--,o--);return this.transform=t,this}unquantize(){const{geometryType:t,features:o,transform:e}=this;if(!e)return this;const{translate:[s,r],scale:[i,n]}=e;let p=null,l=null;if(this.hasZ&&null!=e?.scale?.[2]){const{translate:[,,t],scale:[,,o]}=e;p=e=>e*o+t}if(this.hasM&&null!=e?.scale?.[3]){const{translate:[,,,t],scale:[,,,o]}=e;l=e=>null==e?e:e*o+t}const m=this._getHydrationFunction(t,(t=>t*i+s),(t=>r-t*n),p,l);for(const{geometry:t}of o)null!=t&&m&&m(t);return this.transform=null,this}_quantizePoints(t,o,e){let s,r;const i=[];for(let n=0,p=t.length;n<p;n++){const p=t[n];if(n>0){const t=o(p[0]),n=e(p[1]);t===s&&n===r||(i.push([t-s,n-r]),s=t,r=n)}else s=o(p[0]),r=e(p[1]),i.push([s,r])}return i.length>0?i:null}_getQuantizationFunction(t,o,e){return"point"===t?t=>(t.x=o(t.x),t.y=e(t.y),t):"polyline"===t||"polygon"===t?t=>{const s=c(t)?t.rings:t.paths,r=[];for(let t=0,i=s.length;t<i;t++){const i=s[t],n=this._quantizePoints(i,o,e);n&&r.push(n)}return r.length>0?(c(t)?t.rings=r:t.paths=r,t):null}:"multipoint"===t?t=>{const s=this._quantizePoints(t.points,o,e);return s&&s.length>0?(t.points=s,t):null}:"extent"===t?t=>t:null}_getHydrationFunction(t,o,e,s,r){return"point"===t?t=>{t.x=o(t.x),t.y=e(t.y),s&&(t.z=s(t.z))}:"polyline"===t||"polygon"===t?t=>{const i=c(t)?t.rings:t.paths;let n,p;for(let t=0,s=i.length;t<s;t++){const s=i[t];for(let t=0,r=s.length;t<r;t++){const r=s[t];t>0?(n+=r[0],p+=r[1]):(n=r[0],p=r[1]),r[0]=o(n),r[1]=e(p)}}if(s&&r)for(let t=0,o=i.length;t<o;t++){const o=i[t];for(let t=0,e=o.length;t<e;t++){const e=o[t];e[2]=s(e[2]),e[3]=r(e[3])}}else if(s)for(let t=0,o=i.length;t<o;t++){const o=i[t];for(let t=0,e=o.length;t<e;t++){const e=o[t];e[2]=s(e[2])}}else if(r)for(let t=0,o=i.length;t<o;t++){const o=i[t];for(let t=0,e=o.length;t<e;t++){const e=o[t];e[2]=r(e[2])}}}:"extent"===t?t=>{t.xmin=o(t.xmin),t.ymin=e(t.ymin),t.xmax=o(t.xmax),t.ymax=e(t.ymax),s&&null!=t.zmax&&null!=t.zmin&&(t.zmax=s(t.zmax),t.zmin=s(t.zmin)),r&&null!=t.mmax&&null!=t.mmin&&(t.mmax=r(t.mmax),t.mmin=r(t.mmin))}:"multipoint"===t?t=>{const i=t.points;let n,p;for(let t=0,s=i.length;t<s;t++){const s=i[t];t>0?(n+=s[0],p+=s[1]):(n=s[0],p=s[1]),s[0]=o(n),s[1]=e(p)}if(s&&r)for(let t=0,o=i.length;t<o;t++){const o=i[t];o[2]=s(o[2]),o[3]=r(o[3])}else if(s)for(let t=0,o=i.length;t<o;t++){const o=i[t];o[2]=s(o[2])}else if(r)for(let t=0,o=i.length;t<o;t++){const o=i[t];o[2]=r(o[2])}}:null}};t([n({type:String,json:{write:!0}})],f.prototype,"displayFieldName",void 0),t([n({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"exceededTransferLimit",void 0),t([n({type:[e],json:{write:!0}})],f.prototype,"features",void 0),t([p("features")],f.prototype,"readFeatures",null),t([n({type:[y],json:{write:!0}})],f.prototype,"fields",void 0),t([n({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],f.prototype,"geometryType",void 0),t([m("geometryType")],f.prototype,"writeGeometryType",null),t([n({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"hasM",void 0),t([n({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],f.prototype,"hasZ",void 0),t([n({types:o,json:{write:!0}})],f.prototype,"queryGeometry",void 0),t([p("queryGeometry")],f.prototype,"readQueryGeometry",null),t([n({type:a,json:{write:!0}})],f.prototype,"spatialReference",void 0),t([m("spatialReference")],f.prototype,"writeSpatialReference",null),t([n({json:{write:!0}})],f.prototype,"transform",void 0),f=j=t([l("esri.rest.support.FeatureSet")],f),f.prototype.toJSON.isDefaultToJSON=!0;const d=f;export{d as default};