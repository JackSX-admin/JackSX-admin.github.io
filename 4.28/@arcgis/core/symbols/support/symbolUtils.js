/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import"../../chunks/typedArrayUtil.js";import{l as t}from"../../chunks/arcadeOnDemand.js";import{d as e,e as s,f as r,h as o,c as l,a as i,b as a,g as n,i as c}from"../../chunks/utils8.js";import{S as m}from"../../chunks/previewUtils.js";import{g as u,a as p,r as h,b,c as d,d as y,e as f,f as j,h as k}from"../../chunks/renderUtils.js";import{i as g,c as L}from"../../chunks/widgetUtils.js";import{t as S}from"../../chunks/jsxFactory.js";import{getSymbolLayerFill as w}from"../../chunks/previewSymbol3D.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../geometry/Extent.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../symbols.js";import"../CIMSymbol.js";import"../../chunks/enumeration.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../Symbol.js";import"../ExtrudeSymbol3DLayer.js";import"../Symbol3DLayer.js";import"../../chunks/utils4.js";import"../edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../edges/SketchEdges3D.js";import"../edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../FillSymbol.js";import"../SimpleLineSymbol.js";import"../LineSymbol.js";import"../LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../FillSymbol3DLayer.js";import"../patterns/LineStylePattern3D.js";import"../patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../Font.js";import"../IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../LineSymbol3DLayer.js";import"../LineStyleMarker3D.js";import"../../core/Clonable.js";import"../ObjectSymbol3DLayer.js";import"../PathSymbol3DLayer.js";import"../TextSymbol3DLayer.js";import"../WaterSymbol3DLayer.js";import"./StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../callouts/Callout3D.js";import"../callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../LineSymbol3D.js";import"../MarkerSymbol.js";import"../MeshSymbol3D.js";import"../PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../PictureMarkerSymbol.js";import"../PointSymbol3D.js";import"../PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../SimpleFillSymbol.js";import"../SimpleMarkerSymbol.js";import"../TextSymbol.js";import"../WebStyleSymbol.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"./cimSymbolUtils.js";import"../../chunks/utils9.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/projector.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/webStyleSymbolUtils.js";import"../../chunks/devEnvironmentUtils.js";import"./jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/styleUtils.js";const v="esri-relationship-ramp",C=`${v}--diamond`,M=`${v}--square`,U="http://www.w3.org/2000/svg",x={diamondContainer:`${C}__container`,diamondLeftCol:`${C}__left-column`,diamondRightCol:`${C}__right-column`,diamondMidCol:`${C}__middle-column`,diamondMidColLabel:`${C}__middle-column--label`,diamondMidColRamp:`${C}__middle-column--ramp`,squareTable:`${M}__table`,squareTableRow:`${M}__table-row`,squareTableCell:`${M}__table-cell`,squareTableLabel:`${M}__table-label`,squareTableLabelLeftBottom:`${M}__table-label--left-bottom`,squareTableLabelRightBottom:`${M}__table-label--right-bottom`,squareTableLabelLeftTop:`${M}__table-label--left-top`,squareTableLabelRightTop:`${M}__table-label--right-top`};function q(t,s,r={}){const{focus:o,labels:l}=t,i=!!o,a=function(t,s,r={}){const{focus:o,numClasses:l,colors:i,rotation:a}=t,{opacity:n,effectList:c,ariaLabel:m}=r,j=r.size??60,k=!!o,g=Math.sqrt(j**2+j**2)+(k?0:5),L=[],w=[],v=[],C=(j||75)/l;for(let t=0;t<l;t++){const e=t*C;for(let s=0;s<l;s++){const r=s*C,o=u(i[t][s]),l=p(null),a={type:"rect",x:r,y:e,width:C,height:C},n=h(o);n&&L.push(n);const c=b(a,o.fill,l,null);c&&w.push(c),v.push(d(a))}}let M=null;k||(M="margin: -15px -15px -18px -15px");const q=H("left",o,s),T=H("right",o,s),D=y(v),$=f(D,g,g,0,!1,a,!1),_=f(D,g,g,0,!1,k?-45:null,!1),R={filter:e(c)??void 0,opacity:null==n?"":`${n}`};return S("div",{class:k?x.diamondMidColRamp:x.squareTableCell,styles:R},S("svg",{"aria-labelledBy":m,focusable:!1,height:g,role:"image",style:M,width:g,xmlns:U},S("defs",null,S("marker",{id:`${s}_arrowStart`,markerHeight:"10",markerUnits:"strokeWidth",markerWidth:"10",orient:"auto",refX:"5",refY:"5"},S("polyline",{fill:"none",points:"0,0 5,5 0,10",stroke:"#555555","stroke-width":"1"})),S("marker",{id:`${s}_arrowEnd`,markerHeight:"10",markerUnits:"strokeWidth",markerWidth:"10",orient:"auto",refX:"0",refY:"5"},S("polyline",{fill:"none",points:"5,0 0,5 5,10",stroke:"#555555","stroke-width":"1"})),L),S("g",{transform:$},w),S("g",{transform:_},S("line",{fill:"none","marker-end":q.markerEnd,"marker-start":q.markerStart,stroke:"#555555","stroke-width":"1",x1:-10,x2:-10,y1:j-15,y2:15}),S("line",{fill:"none","marker-end":T.markerEnd,"marker-start":T.markerStart,stroke:"#555555","stroke-width":"1",x1:15,x2:j-15,y1:j+10,y2:j+10}))))}(t,s,r),n=g();return i?S("div",{class:x.diamondContainer,styles:{justifyContent:"center"}},S("div",{class:x.diamondLeftCol},n?l.right:l.left),S("div",{class:x.diamondMidCol},S("div",{class:x.diamondMidColLabel},l.top),a,S("div",{class:x.diamondMidColLabel},l.bottom)),S("div",{class:x.diamondRightCol},n?l.left:l.right)):S("div",{class:x.squareTable},S("div",{class:x.squareTableRow},S("div",{class:L(x.squareTableCell,x.squareTableLabel,x.squareTableLabelRightBottom)},n?l.top:l.left),S("div",{class:x.squareTableCell}),S("div",{class:L(x.squareTableCell,x.squareTableLabel,x.squareTableLabelLeftBottom)},n?l.left:l.top)),S("div",{class:x.squareTableRow},S("div",{class:x.squareTableCell}),a,S("div",{class:x.squareTableCell})),S("div",{class:x.squareTableRow},S("div",{class:L(x.squareTableCell,x.squareTableLabel,x.squareTableLabelRightTop)},n?l.right:l.bottom),S("div",{class:x.squareTableCell}),S("div",{class:L(x.squareTableCell,x.squareTableLabel,x.squareTableLabelLeftTop)},n?l.bottom:l.right)))}function H(t,e,s){const r=`${s}_arrowStart`,o=`${s}_arrowEnd`,l="left"===t,i={markerStart:null,markerEnd:null};switch(e){case"HL":l?i.markerStart=`url(#${o})`:i.markerEnd=`url(#${r})`;break;case"LL":i.markerStart=`url(#${o})`;break;case"LH":l?i.markerEnd=`url(#${r})`:i.markerStart=`url(#${o})`;break;default:i.markerEnd=`url(#${r})`}return i}const T={HH:315,HL:45,LL:135,LH:225},D={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};function $(t){if(!t)return;const{type:e}=t;if(e.includes("3d"))return w(t.symbolLayers.at(0));if("simple-line"===e){const e=s(t);return e&&e.color}if("simple-marker"===t.type&&("x"===t.style||"cross"===t.style)){const e=s(t);return e&&e.color}return r(t)}function _(t){const{focus:e,infos:s,numClasses:r}=t,o=D[r],l={};s.forEach((t=>{l[t.value]={label:t.label,fill:$(t.symbol)}}));const i=[];for(let t=0;t<r;t++){const e=[];for(let s=0;s<r;s++){const r=l[o[t][s]];e.push(r.fill)}i.push(e)}const a=function(t,e){const s=e.HH.label,r=e.LL.label,o=e.HL.label,l=e.LH.label;switch(t){case"HH":default:return{top:s,bottom:r,left:o,right:l};case"HL":return{top:o,bottom:l,left:r,right:s};case"LL":return{top:r,bottom:s,left:l,right:o};case"LH":return{top:l,bottom:o,left:s,right:r}}}(e,l);return{type:"relationship-ramp",numClasses:r,focus:e,colors:i,labels:a,rotation:R(e)}}function R(t){let e=T[t];return t&&null==e&&(e=T.HH),e||0}let P=null;const E=[255,255,255];function V(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function A(t,e,s){const{backgroundColor:r,outline:o,dotSize:l}=t,i=s?.swatchSize||m.size,a=Math.round(i*i/l**2*.8),n=window.devicePixelRatio,c=document.createElement("canvas"),u=i*n;c.width=u,c.height=u,c.style.width=c.width/n+"px",c.style.height=c.height/n+"px";const p=c.getContext("2d");if(r&&(p.fillStyle=r.toCss(!0),p.fillRect(0,0,u,u),p.fill()),p.fillStyle=e?.toCss(!0)??"",P&&P.length/2===a)for(let t=0;t<2*a;t+=2){const e=P[t],s=P[t+1];p.fillRect(e,s,l*n,l*n),p.fill()}else{P=[];for(let t=0;t<2*a;t+=2){const t=V(0,u),e=V(0,u);P.push(t,e),p.fillRect(t,e,l*n,l*n),p.fill()}}o&&(o.color&&(p.strokeStyle=o.color.toCss(!0)),p.lineWidth=o.width,p.strokeRect(0,0,u,u));const h=new Image(i,i);return h.src=c.toDataURL(),h.ariaLabel=s?.ariaLabel??null,h.alt=s?.ariaLabel??"",h}function F(t,e={}){const r=e.radius||40,o=2*Math.PI*r,l=t.length,i=o/l,a=[],n=s(e.outline);null!=n?.width&&(n.width*=2),(n||e.backgroundColor)&&a.push({shape:{type:"circle",cx:r,cy:r,r},fill:e.backgroundColor,stroke:n,offset:[0,0]});const c=e.values,m=c&&c.length===l&&100===c.reduce(((t,e)=>t+e),0),u=[0];for(let e=0;e<l;e++){let s=null;m&&(s=c[e]*o/100,u.push(s+u[e])),a.push({shape:{type:"circle",cx:r,cy:r,r:r/2},fill:[0,0,0,0],stroke:{width:r,dashArray:`${(s??i)/2} ${o}`,dashoffset:"-"+(m?u[e]/2:e*(i/2)),color:t[e]},offset:[0,0]})}let p=null;const h=2*r+(n?.width||0),b=e.holePercentage;if(b){n&&a.push({shape:{type:"circle",cx:r,cy:r,r:r*b},fill:null,stroke:n,offset:[0,0]});const t=h/2;p=[[{shape:{type:"circle",cx:t,cy:t,r:t},fill:E,stroke:n?{...n,color:E}:null,offset:[0,0]},{shape:{type:"circle",cx:t,cy:t,r:r*b},fill:[0,0,0],stroke:null,offset:[0,0]}]]}return j([a],[h,h],{effectView:e.effectList,ignoreStrokeWidth:!0,masking:p,rotation:-90,ariaLabel:e.ariaLabel})}function W(t,e={}){const s=t?.authoringInfo;if("relationship"!==s?.type||!s?.numClasses||!t.uniqueValueInfos)return null;const{focus:r,numClasses:o}=s,l=_({focus:r,numClasses:o,infos:t.uniqueValueInfos}),i=e?.node||document.createElement("div");return k(i,(()=>q(l,e.id||"relationship",{opacity:e.opacity||1,effectList:e.effectList,ariaLabel:e.ariaLabel}))),i}function O(t,s={}){const r="horizontal"===s.align,o=r?75:24,l=r?24:75,i=s.width??o,a=s.height??l,n=s.gradient??!0,c=window.devicePixelRatio,m=i*c,u=a*c,p=document.createElement("canvas");p.width=m,p.height=u,p.ariaLabel=s.ariaLabel??null,p.style.width=`${i}px`,p.style.height=`${a}px`;const h=p.getContext("2d"),b=r?m:0,d=r?0:u;if(n){const e=h.createLinearGradient(0,0,b,d),s=t.length,r=1===s?0:1/(s-1);t.forEach(((t,s)=>e.addColorStop(s*r,t.toString()))),h.fillStyle=e,h.fillRect(0,0,m,u)}else{const e=r?m/t.length:m,s=r?u:u/t.length;let o=0,l=0;for(const i of t)h.fillStyle=i.toString(),h.fillRect(o,l,e,s),o=r?o+e:0,l=r?0:l+s}const y=document.createElement("div");return y.style.width=`${i}px`,y.style.height=`${a}px`,function(t,s){if(!s)return;t.style.filter=e(s);const r=s.effects;if(r)for(const e of r)if("drop-shadow"===e?.type){e.offsetX<0?t.style.marginLeft=`${Math.abs(e.offsetX)}px`:t.style.marginRight=`${e.offsetX}px`;break}}(y,s?.effectList),y.appendChild(p),y}async function B(t,e){switch(t.type){case"web-style":{const{previewWebStyleSymbol:s}=await import("../../chunks/previewWebStyleSymbol.js");return s(t,B,e)}case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":{const{previewSymbol3D:s}=await import("../../chunks/previewSymbol3D.js");return s(t,e)}case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":{const{previewSymbol2D:s}=await import("../../chunks/previewSymbol2D.js");return s(t,e)}case"cim":{const{previewCIMSymbol:s}=await import("../../chunks/previewCIMSymbol.js");return s(t,e)}default:return}}function I(t){return t&&"opacity"in t?t.opacity*I(t.parent):1}async function z(e,s){if(!e)return;const r=e.sourceLayer,n=(null!=s&&s.useSourceLayer?r:e.layer)??r,c=I(n);if(null!=e.symbol&&(null==s||!0!==s.ignoreGraphicSymbol)){const t="web-style"===e.symbol.type?await o(e.symbol,{...s,cache:null!=s?s.webStyleCache:null}):e.symbol.clone();return l(t,null,c),t}const m=(null!=s?s.renderer:null)??(n&&"renderer"in n?n.renderer:null);let u=m&&"getSymbolAsync"in m?await m.getSymbolAsync(e,s):null;if(!u)return;if(u="web-style"===u.type?await u.fetchSymbol({...s,cache:null!=s?s.webStyleCache:null}):u.clone(),!m||!("visualVariables"in m)||!m.visualVariables?.length)return l(u,null,c),u;if("arcadeRequiredForVisualVariables"in m&&m.arcadeRequiredForVisualVariables&&null==s?.arcade){const e={...s};e.arcade=await t(),s=e}const{getColor:p,getOpacity:h,getAllSizes:b,getRotationAngle:d}=await import("../../chunks/visualVariableUtils.js").then((t=>t.l)),y=[],f=[],j=[],k=[];for(const t of m.visualVariables)switch(t.type){case"color":y.push(t);break;case"opacity":f.push(t);break;case"rotation":k.push(t);break;case"size":t.target||j.push(t)}const g=!!y.length&&y[y.length-1],L=g?p(g,e,s):null,S=!!f.length&&f[f.length-1];let w=S?h(S,e,s):null;if(null!=c&&(w=null!=w?w*c:c),l(u,L,w),j.length){const t=b(j,e,s);await i(u,t)}for(const t of k)a(u,d(t,e,s),t.axis);return u}async function G(e,s){if(!e)return;const r=e.layer,l=e.sourceLayer,i=I(r??l);if(null!=e.symbol&&(null==s||!0!==s.ignoreGraphicSymbol)){const t="web-style"===e.symbol.type?await o(e.symbol,s):e.symbol.clone();return n(t,i)}const a=s?.renderer||(r&&"renderer"in r?r.renderer:void 0)||(l&&"renderer"in l?l.renderer:void 0);let m=a&&"getSymbolAsync"in a?await a.getSymbolAsync(e,s):void 0;if(!m)return;m="web-style"===m.type?await o(m,s):m.clone();const u=n(m,i);if(!a||!("visualVariables"in a)||"visualVariables"in a&&!a.visualVariables||"visualVariables"in a&&!a.visualVariables?.length)return u;if("arcadeRequiredForVisualVariables"in a&&a.arcadeRequiredForVisualVariables&&null==s?.arcade){const e={...s};e.arcade=await t(),s=e}const{getColor:p,getOpacity:h}=await import("../../chunks/visualVariableUtils.js").then((t=>t.l)),b=[],d=[];for(const t of a.visualVariables)switch(t.type){case"color":b.push(t);break;case"opacity":d.push(t)}const y=b.length>0?b[b.length-1]:null,f=y?p(y,e,s):u,j=d.length>0?d[d.length-1]:null;let k=j?h(j,e,s):null;return null!=i&&(k=null!=k?k*i:i),f?c(f,k):null}export{R as a,_ as g,G as getDisplayedColor,z as getDisplayedSymbol,q as r,O as renderColorRampPreviewHTML,A as renderDotDensityPreviewHTML,F as renderPieChartPreviewHTML,B as renderPreviewHTML,W as renderRelationshipRampPreviewHTML};