/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import e from"../ElementExpressionInfo.js";import t from"./Content.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";var p;let i=p=class extends t{constructor(s){super(s),this.expressionInfo=null,this.type="expression"}clone(){return new p({expressionInfo:this.expressionInfo?.clone()})}};s([o({type:e,json:{write:!0}})],i.prototype,"expressionInfo",void 0),s([o({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=p=s([r("esri.popup.content.ExpressionContent")],i);const n=i;export{n as default};