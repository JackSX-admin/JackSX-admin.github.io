System.register(["jimu-core"],(function(t,e){var n={};return{setters:[function(t){n.AbstractDataAction=t.AbstractDataAction,n.DataLevel=t.DataLevel,n.MutableStoreManager=t.MutableStoreManager,n.dataSourceUtils=t.dataSourceUtils,n.getAppStore=t.getAppStore}],execute:function(){t((()=>{"use strict";var t={48891:t=>{t.exports=n}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{o.r(r),o.d(r,{default:()=>i});var t=o(48891);function e(e,n){var o,r,i,a,u;return r=this,i=void 0,u=function*(){if(e.length>1||n===t.DataLevel.DataSource||!function(e){var n,o,r,i;const a=(0,t.getAppStore)().getState().appStateInBuilder||(0,t.getAppStore)().getState(),{routeConfig:u,searchConfig:c}=a.appConfig.widgets[e].config;if((null===(n=a.appConfig.widgets[e].useMapWidgetIds)||void 0===n?void 0:n[0])&&(null==u?void 0:u.useUtility)&&(null===(r=null===(o=null==c?void 0:c.dataConfig)||void 0===o?void 0:o[0])||void 0===r?void 0:r.useUtility)){const t=null===(i=a.appConfig)||void 0===i?void 0:i.utilities;return!!(t&&t[u.useUtility.utilityId]&&t[c.dataConfig[0].useUtility.utilityId])}return!1}(this.widgetId))return!1;if(1===e[0].records.length){const n=yield t.dataSourceUtils.changeToJSAPIGraphic(null===(o=e[0].records[0])||void 0===o?void 0:o.feature);return!!n.geometry&&"point"===n.geometry.type}return!1},new((a=void 0)||(a=Promise))((function(t,e){function n(t){try{c(u.next(t))}catch(t){e(t)}}function o(t){try{c(u.throw(t))}catch(t){e(t)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof a?r:new a((function(t){t(r)}))).then(n,o)}c((u=u.apply(r,i||[])).next())}))}var n=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function u(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((o=o.apply(t,e||[])).next())}))};class i extends t.AbstractDataAction{isSupported(t,o){return n(this,void 0,void 0,(function*(){return e.bind(this)(t,o)}))}onExecute(e,o){var r;return n(this,void 0,void 0,(function*(){const n=(yield t.dataSourceUtils.changeToJSAPIGraphic(null===(r=e[0].records[0])||void 0===r?void 0:r.feature)).geometry;return t.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"directionsToPoint",n),!0}))}}})(),r})())}}}));