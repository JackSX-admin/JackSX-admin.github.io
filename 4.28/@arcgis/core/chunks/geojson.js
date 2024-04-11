/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{i as e}from"./date2.js";import t from"../core/Error.js";import{i as n}from"./unitUtils.js";import{O as o}from"./OptimizedFeature.js";import{O as r}from"./OptimizedGeometry.js";import{normalizeFieldName as i,isNumericField as s}from"../layers/support/fieldUtils.js";const c={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function l(e){return c[e]}function*u(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function a(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return h(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const o of t.coordinates)h(e,o,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const o of t.coordinates){g(e,o[0],n);for(let t=1;t<o.length;t++)m(e,o[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return P(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const o=t.coordinates;g(e,o[0],n);for(let t=1;t<o.length;t++)m(e,o[t],n);return e}(e,t,n)}}function g(e,t,n){const o=y(t);p(o)?h(e,o,n):w(e,o,n)}function m(e,t,n){const o=y(t);p(o)?w(e,o,n):h(e,o,n)}function h(e,t,n){for(const o of t)P(e,o,n);e.lengths.push(t.length)}function w(e,t,n){for(let o=t.length-1;o>=0;o--)P(e,t[o],n);e.lengths.push(t.length)}function P(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function j(t){switch(typeof t){case"string":return e(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function b(e,o=4326){if(!e)throw new t("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new t("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:r}=e;if(!r)return;const i="string"==typeof r?r:"name"===r.type?r.properties.name:"EPSG"===r.type?r.properties.code:null,s=n({wkid:o})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${o})$`,"i");if(!i||!s.test(i))throw new t("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:r})}function S(e,t={}){const n=[],o=new Set,r=new Set;let c,p=!1,y=null,d=!1,{geometryType:g=null}=t,m=!1;for(const t of u(e)){const{geometry:e,properties:s,id:u}=t;if((!e||(g||(g=l(e.type)),l(e.type)===g))&&(p||(p=a(f(e))),d||(d=null!=u,d&&(c=typeof u,s&&(y=Object.keys(s).filter((e=>s[e]===u))))),s&&y&&d&&null!=u&&(y.length>1?y=y.filter((e=>s[e]===u)):1===y.length&&(y=s[y[0]]===u?y:[])),!m&&s)){let e=!0;for(const t in s){if(o.has(t))continue;const c=s[t];if(null==c){e=!1,r.add(t);continue}const l=j(c);if("unknown"===l){r.add(t);continue}r.delete(t),o.add(t);const u=i(t);u&&n.push({name:u,alias:t,type:l})}m=e}}const h=i(1===y?.length&&y[0]||null)??void 0;if(h)for(const e of n)if(e.name===h&&s(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:g,hasZ:p,objectIdFieldName:h,objectIdFieldType:c,unknownFields:Array.from(r)}}function F(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:i}=t;for(const s of e){const{geometry:e,properties:c,id:u}=s;if(e&&l(e.type)!==n)continue;const f=c||{};let a;i&&(a=f[i],null==u||a||(f[i]=a=u));const p=new o(e?d(new r,e,t):null,f,null,a??void 0);yield p}}(u(e),t))}export{F as c,l as g,S as i,b as v};