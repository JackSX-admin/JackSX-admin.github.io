// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../css ../TooltipContentWithHelpMessage ../TooltipField ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(a,d,q,r,t,u,v,e,b,f,g,h,w,c){var k=`${b.content} ${`${b.content}--extent-rotate`}`;a.TooltipContentExtentRotate=
class extends h.TooltipContent{render(){const {angle:l,tooltipOptions:m}=this.info,{visibleElements:n}=m,p=this._messagesTooltip.sketch;return c.tsx(f.TooltipContentWithHelpMessage,{className:k,helpMessage:this._getHelpMessage()},n.rotation?c.tsx(g.TooltipField,{title:p.rotation,value:this._formatRelativeOrientation(l)}):null)}};a.TooltipContentExtentRotate=d.__decorate([e.subclass("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],a.TooltipContentExtentRotate);Object.defineProperty(a,
Symbol.toStringTag,{value:"Module"})});