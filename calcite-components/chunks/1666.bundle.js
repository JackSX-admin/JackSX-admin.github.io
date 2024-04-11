/*! For license information please see 1666.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1666],{1666:(e,t,r)=>{r.r(t),r.d(t,{DateEngine:()=>n});class n{constructor(){this._formatterCache=new Map,this._commonDateTimeFormatterOptions={year:"numeric",month:"2-digit",day:"2-digit",timeZoneName:"shortOffset"}}get name(){return"native"}create(e){return new Date(e)}increase(e){return new Date(e.getTime()+864e5)}formatToIsoDateString(e){const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();return`${t}-${r.toString().padStart(2,"0")}-${n.toString().padStart(2,"0")}`}isoToTimeZone(e,t){const r=this._toDate(e),n=this._getFormatter(t).formatToParts(r),[i]=n.filter((({type:e})=>"timeZoneName"===e)).map((({value:e})=>e)),a=this._getTimeZoneOffsetInMins(i),o=r.getMinutes()-(r.getTimezoneOffset()-a);return r.setMinutes(o),r}same(e,t){return e.getTime()===t.getTime()}_toDate(e){return new Date(e)}_getFormatter(e){let t=this._formatterCache.get(e);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,...this._commonDateTimeFormatterOptions}),this._formatterCache.set(e,t)),t}_getTimeZoneOffsetInMins(e){const[t,...r]=e.slice(3),[n,i]=r.join("").split(":");return("+"===t?1:-1)*(60*Number(n)+Number(i||0))}}}}]);