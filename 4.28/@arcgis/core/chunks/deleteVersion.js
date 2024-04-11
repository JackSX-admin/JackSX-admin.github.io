/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import r from"../request.js";import o from"../core/Error.js";import{p as s,a as e,e as t}from"./utils6.js";import{a as i}from"./serverVersionUtils.js";import"../config.js";import"./typedArrayUtil.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"../core/promiseUtils.js";import"./time.js";const p=new Map;async function m(m,a,c){p.has(m)||await i(p,m);const j=p.get(m);if((j?.serverVersion??0)<=11.1)throw new o("deleteVersion:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");const n=s(m),l=a.toJSON(),u=e(n.query,{query:t({...l,f:"json"}),...c,authMode:"immediate",method:"post"}),d=`${n.path}/delete`,{data:g}=await r(d,u);return g.success}export{m as deleteVersion,p as serverVersionCacheMap};