// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../TimeExtent ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ../../layers/support/MosaicRule ../../layers/support/rasterEnums ../../geometry/Multipoint ../../geometry/Point".split(" "),function(b,l,m,a,n,c,v,p,q,k,r,g,t,u){var h;a=h=class extends a.JSONSupport{constructor(){super(...arguments);
this.geometry=null;this.interpolation="nearest";this.pixelSize=this.outFields=this.mosaicRule=null;this.returnFirstValueOnly=!0;this.timeExtent=this.sliceId=this.sampleCount=this.sampleDistance=null}writeGeometry(d,e,f){null!=d&&(e.geometryType=k.getJsonType(d),e[f]=d.toJSON())}set locations(d){if(d?.length){const e=new t({spatialReference:d[0].spatialReference});e.points=d.map(f=>[f.x,f.y]);this._set("locations",d);this.geometry=e}}clone(){return new h(n.clone({geometry:this.geometry,locations:this.locations,
interpolation:this.interpolation,mosaicRule:this.mosaicRule,outFields:this.outFields,raster:this.raster,returnFirstValueOnly:this.returnFirstValueOnly,sampleDistance:this.sampleDistance,sampleCount:this.sampleCount,sliceId:this.sliceId,pixelSize:this.pixelSize,timeExtent:this.timeExtent}))}};b.__decorate([c.property({types:l.geometryTypes,json:{read:k.fromJSON}})],a.prototype,"geometry",void 0);b.__decorate([q.writer("geometry")],a.prototype,"writeGeometry",null);b.__decorate([c.property()],a.prototype,
"locations",null);b.__decorate([c.property({type:String,json:{type:g.interpolationKebab.jsonValues,read:g.interpolationKebab.read,write:g.interpolationKebab.write}})],a.prototype,"interpolation",void 0);b.__decorate([c.property({type:r,json:{write:!0}})],a.prototype,"mosaicRule",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"outFields",void 0);b.__decorate([c.property({type:u,json:{write:!0}})],a.prototype,"pixelSize",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"raster",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnFirstValueOnly",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"sampleDistance",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"sampleCount",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"sliceId",void 0);b.__decorate([c.property({type:m,json:{read:{source:"time"},write:{target:"time"}}})],
a.prototype,"timeExtent",void 0);return a=h=b.__decorate([p.subclass("esri.rest.support.ImageSampleParameters")],a)});