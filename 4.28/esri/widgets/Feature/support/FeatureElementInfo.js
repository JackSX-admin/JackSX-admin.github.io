// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../Widget ../../support/Heading ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(c,d,b,l,m,f,g,h,n,e){b=class extends g{constructor(a,k){super(a,k);this.description=null;this.headingLevel=2;this.title=null}render(){return e.tsx("div",{class:"esri-feature-element-info"},
this._renderTitle(),this._renderDescription())}_renderTitle(){const {title:a}=this;return a?e.tsx(h.Heading,{class:"esri-feature-element-info__title",level:this.headingLevel},a):null}_renderDescription(){const {description:a}=this;return a?e.tsx("div",{class:"esri-feature-element-info__description",key:"description"},a):null}};c.__decorate([d.property()],b.prototype,"description",void 0);c.__decorate([d.property()],b.prototype,"headingLevel",void 0);c.__decorate([d.property()],b.prototype,"title",
void 0);return b=c.__decorate([f.subclass("esri.widgets.Feature.support.FeatureElementInfo")],b)});