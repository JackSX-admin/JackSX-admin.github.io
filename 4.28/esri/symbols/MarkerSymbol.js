// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Symbol".split(" "),function(c,e,d,b,k,l,f,g){b=class extends g{constructor(a){super(a);this.angle=0;this.type=null;this.yoffset=this.xoffset=0;this.size=9}hash(){return`${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`}};c.__decorate([d.property({type:Number,json:{read:a=>a&&
-1*a,write:(a,h)=>h.angle=a&&-1*a}})],b.prototype,"angle",void 0);c.__decorate([d.property({type:["simple-marker","picture-marker"],readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0);c.__decorate([d.property({type:Number,cast:a=>"auto"===a?a:e.toPt(a),json:{write:!0}})],b.prototype,"size",void 0);return b=c.__decorate([f.subclass("esri.symbols.MarkerSymbol")],
b)});