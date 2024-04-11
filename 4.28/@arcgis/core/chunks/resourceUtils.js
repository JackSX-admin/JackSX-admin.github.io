/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import e from"../request.js";import r from"../core/Error.js";import{join as t,getPathExtension as o}from"../core/urlUtils.js";import"../config.js";import"./typedArrayUtil.js";import"../core/lang.js";import"../kernel.js";import"./Logger.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";async function s(e,r={},o){await e.load(o);const s=t(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:i="asc",sortField:p="created"}=r,c={query:{start:a,num:n,sortOrder:i,sortField:p,token:e.apiKey},signal:o?.signal},l=await e.portal.request(s,c);return{total:l.total,nextStart:l.nextStart,resources:l.resources.map((({created:r,size:t,resource:o})=>({created:new Date(r),size:t,resource:e.resourceFromPath(o)})))}}async function a(e,o,s,a){if(!e.hasPath())throw new r(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(a);const i=t(n.userItemUrl,"add"===o?"addResources":"updateResources"),[c,l]=p(e.path),u=new FormData;return c&&"."!==c&&u.append("resourcesPrefix",c),null!=a&&a.compress&&u.append("compress","true"),u.append("fileName",l),u.append("file",s,l),u.append("f","json"),a?.access&&u.append("access",a.access),await n.portal.request(i,{method:"post",body:u,signal:a?.signal}),e}async function n(e,o,s){if(!o.hasPath())throw new r("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(s);const a=t(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:o.path},signal:s?.signal}),o.portalItem=null}async function i(e,r){await e.load(r);const o=t(e.userItemUrl,"removeResources");return e.portal.request(o,{method:"post",query:{deleteAll:!0},signal:r?.signal})}function p(e){const r=e.lastIndexOf("/");return-1===r?[".",e]:[e.slice(0,r),e.slice(r+1)]}function c(e){const[r,t]=function(e){const r=o(e);return null==r?[e,""]:[e.slice(0,e.length-r.length-1),`.${r}`]}(e),[s,a]=p(r);return[s,a,t]}async function l(r){return"blob"===r.type?r.blob:"json"===r.type?new Blob([r.jsonString],{type:"application/json"}):(await e(r.url,{responseType:"blob"})).data}function u(e,r){if(!e.hasPath())return null;const[o,,s]=c(e.path);return e.portalItem.resourceFromPath(t(o,r+s))}function m(e,r){if(!e.hasPath())return null;const[o,,s]=c(e.path);return e.portalItem.resourceFromPath(t(o,r+s))}export{a as addOrUpdateResource,l as contentToBlob,s as fetchResources,u as getSiblingOfSameType,m as getSiblingOfSameTypeI,i as removeAllResources,n as removeResource,c as splitPrefixFileNameAndExtension};