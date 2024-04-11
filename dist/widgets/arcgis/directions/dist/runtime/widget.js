System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/widgets/Directions","esri/layers/RouteLayer","esri/rest/locator"],(function(e,t){var o={},i={},r={},n={},a={},u={};return{setters:[function(e){o.DataSourceManager=e.DataSourceManager,o.DataSourceStatus=e.DataSourceStatus,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.UtilityManager=e.UtilityManager,o.css=e.css,o.dataSourceUtils=e.dataSourceUtils,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.WidgetPlaceholder=e.WidgetPlaceholder,r.defaultMessages=e.defaultMessages},function(e){n.default=e.default},function(e){a.default=e.default},function(e){u.default=e.default}],execute:function(){e((()=>{var e={75465:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M1.414 10 10 1.414 18.586 10 10 18.586 1.414 10Zm-.707.707a1 1 0 0 1 0-1.414L9.293.707a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0L.707 10.707Zm14.19-2.041-3.314 3.352a9.065 9.065 0 0 0-.398-1.126l2.918-2.832.794.606ZM7.71 8H10V7H6v4h1V8.706l1.33 1.325C9.483 11.3 10 11.987 10 14.5v.5h1v-.5c.16-2.227-.537-3.43-1.948-5.16L7.71 8Z" clip-rule="evenodd"></path></svg>'},20404:e=>{"use strict";e.exports=a},50724:e=>{"use strict";e.exports=u},35254:e=>{"use strict";e.exports=n},26826:e=>{"use strict";e.exports=i},48891:e=>{"use strict";e.exports=o},30726:e=>{"use strict";e.exports=r}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var l={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(l),s.d(l,{__set_webpack_public_path__:()=>j,default:()=>w});var e=s(48891),t=s(26826),o=s(30726),i=s(35254),r=s(20404),n=s(50724);const a={includeDefaultSources:!1,locationEnabled:!1,maxSuggestions:6};function u(e){return`${e}_output_stop`}function c(e){return`${e}_output_direction_point`}function d(e){return`${e}_output_direction_line`}function v(e){return`${e}_output_route`}const g={_widgetLabel:"Directions",_action_DirectionsFrom_label:"Directions From",_action_DirectionsTo_label:"Directions To",outOfCredit:"Cannot load route service. This may be due to the service not being accessible."};var p=s(75465),f=s.n(p),m=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{s(i.next(e))}catch(e){n(e)}}function u(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}s((i=i.apply(e,t||[])).next())}))};const{useEffect:y,useState:h,useRef:S,useCallback:_,useMemo:b}=e.React,w=s=>{var l,p;const{config:w,id:D}=s,{searchConfig:j,routeConfig:T}=w,A=null===(l=s.theme)||void 0===l?void 0:l.darkTheme,L=null===(p=s.useMapWidgetIds)||void 0===p?void 0:p[0],[R,O]=h(null),k=S(null),F=S(null),V=S(null),E=e.hooks.useTranslation(g,o.defaultMessages),H=b((()=>E("findAddressOrPlace")),[E]),N=_((e=>{O(e)}),[]),W=_((()=>{var t,o,i;if(L&&(null==T?void 0:T.useUtility)&&(null===(o=null===(t=null==j?void 0:j.dataConfig)||void 0===t?void 0:t[0])||void 0===o?void 0:o.useUtility)){const t=null===(i=(0,e.getAppStore)().getState().appConfig)||void 0===i?void 0:i.utilities;return!!(t&&t[T.useUtility.utilityId]&&t[j.dataConfig[0].useUtility.utilityId])}return!1}),[L,null==T?void 0:T.useUtility,null==j?void 0:j.dataConfig]),J=_((e=>m(void 0,void 0,void 0,(function*(){const t=j.dataConfig.map((e=>m(void 0,void 0,void 0,(function*(){return yield x(e.useUtility)})))),o=yield Promise.all(t);o.push("https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer");const i=o.map((t=>m(void 0,void 0,void 0,(function*(){return n.default.locationToAddress(t,{location:e})}))));let r=null;for(const e of i)try{const{address:t}=yield e;if(t){r=t;break}}catch(e){console.error(e)}return r}))),[null==j?void 0:j.dataConfig]),Z=_((()=>m(void 0,void 0,void 0,(function*(){if(W()&&F.current&&s.mutableStateProps){const{directionsFromPoint:t,directionsToPoint:o}=s.mutableStateProps;if(t){const o=yield J(t);F.current.layer.stops.at(0).geometry=t,F.current.layer.stops.at(0).name=o,e.MutableStoreManager.getInstance().updateStateValue(s.widgetId,"directionsFromPoint",null)}if(o){const t=yield J(o),i=F.current.layer.stops.length;F.current.layer.stops.at(i-1).geometry=o,F.current.layer.stops.at(i-1).name=t,e.MutableStoreManager.getInstance().updateStateValue(s.widgetId,"directionsToPoint",null)}yield F.current.viewModel.load(),F.current.viewModel.layer.stops.filter((e=>null!==e.geometry)).length>=2&&(yield F.current.viewModel.getDirections())}}))),[J,W,s.mutableStateProps,s.widgetId]);return y((()=>{Z()})),y((()=>{function t(){var e,t,o;if(null===(t=null===(e=F.current)||void 0===e?void 0:e.view)||void 0===t?void 0:t.map){const e=F.current.view.map.findLayerById(D);e&&R.view.map.remove(e),F.current.destroy()}k.current&&(k.current.innerHTML="");try{const e=null===(o=document.querySelector("calcite-panel.esri-save-layer"))||void 0===o?void 0:o.parentElement;e&&"CALCITE-POPOVER"===e.tagName.toUpperCase()&&document.body.removeChild(e)}catch(e){}}return W()&&(null==R?void 0:R.view)&&k.current?function(){var o,n,l,g;m(this,void 0,void 0,(function*(){t();const p=yield x(null==T?void 0:T.useUtility),f=yield function(e,t){var o,i,r;return m(this,void 0,void 0,(function*(){const n=Object.assign({},a),u=(null===(o=null==e?void 0:e.generalConfig)||void 0===o?void 0:o.hint)||t;if(u&&(n.allPlaceholder=u),"number"==typeof(null===(i=null==e?void 0:e.suggestionConfig)||void 0===i?void 0:i.maxSuggestions)&&(n.maxSuggestions=e.suggestionConfig.maxSuggestions),"boolean"==typeof(null===(r=null==e?void 0:e.suggestionConfig)||void 0===r?void 0:r.isUseCurrentLoation)&&(n.locationEnabled=e.suggestionConfig.isUseCurrentLoation),Array.isArray(null==e?void 0:e.dataConfig)){const o=e.dataConfig.map((e=>m(this,void 0,void 0,(function*(){const o={url:yield x(e.useUtility),name:e.label,placeholder:e.hint||t};return Promise.resolve(o)}))));yield Promise.all(o).then((e=>{n.sources=e}))}return Promise.resolve(n)}))}(j,H);if(!p||!(null===(n=null===(o=null==f?void 0:f.sources)||void 0===o?void 0:o[0])||void 0===n?void 0:n.url))return;const y=document.createElement("div");y.className="directions-container",A&&(y.className+=" dark-theme"),k.current.innerHTML="",k.current.appendChild(y);const h=new r.default({id:D,url:p});null===(g=null===(l=null==R?void 0:R.view)||void 0===l?void 0:l.map)||void 0===g||g.add(h),F.current=new i.default({id:D,layer:h,container:y,view:null==R?void 0:R.view,searchProperties:f}),F.current.viewModel.routeParameters.returnRoutes=!0,F.current.viewModel.routeParameters.returnDirections=!0,F.current.viewModel.routeParameters.returnStops=!0,Z(),C(D),V.current=F.current.watch("lastRoute",(()=>{s.autoHeight&&(k.current.style.maxHeight="750px"),F.current.lastRoute?function(t,o){var i,r,n;m(this,void 0,void 0,(function*(){try{const a=yield e.DataSourceManager.getInstance().createDataSource(u(t)),s=yield e.DataSourceManager.getInstance().createDataSource(v(t)),l=yield e.DataSourceManager.getInstance().createDataSource(c(t)),g=yield e.DataSourceManager.getInstance().createDataSource(d(t));yield I(a,"point",U(null===(i=o.stops)||void 0===i?void 0:i.toArray())),yield I(s,"polyline",U(o.routeInfo?[o.routeInfo]:[])),yield I(l,"point",U(null===(r=o.directionPoints)||void 0===r?void 0:r.toArray())),yield I(g,"polyline",U(null===(n=o.directionLines)||void 0===n?void 0:n.toArray())),P(a),P(s),P(l),P(g)}catch(e){console.log("Failed to create directions output data sources. ",e)}}))}(D,F.current.lastRoute):C(D)}))}))}():t(),()=>{var e;null===(e=V.current)||void 0===e||e.remove(),t()}}),[D,null==R?void 0:R.view,j,null==T?void 0:T.useUtility,H,W,A,s.autoHeight,Z]),(0,e.jsx)("div",{className:"widget-directions jimu-widget"},W()?(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:L,onActiveViewChange:N}):(0,e.jsx)(o.WidgetPlaceholder,{widgetId:D,icon:f(),message:E("_widgetLabel")}),(0,e.jsx)("div",{ref:k,css:M}))},M=e.css`
  width: 100% !important;
  height: 100% !important;
  .directions-container{
    width: 100% !important;
    height: 100% !important;
    .esri-search{
      .esri-search__container{
        .esri-search__sources-button{
          z-index: 0;
          border-top: none;
          border-right: solid 1px var(--light-300);
          border-bottom: none;
          border-left: none;
          margin-right: 1px;
          margin-bottom: 2px;
        }
        .esri-search__input-container{
          margin: auto;
          .esri-search__clear-button{
            z-index: 0;
            right: 4px;
          }
        }
      }
      .esri-search--multiple-sources {
        .esri-search__sources-button {
          border-right: inherit;
        }
        .esri-search__input {
          border: 1px solid #959595;
        }
      }
    }
    .esri-directions__panel-content{
      padding: 0 0 20px 0;
    }
    .esri-directions__add-stop-button{
      --calcite-ui-text-1: var(--dark);
    }
    &.dark-theme img.esri-directions__maneuver-icon{
      filter: invert(100%);
    }
  }
`;function x(t){return t?e.UtilityManager.getInstance().getUrlOfUseUtility(t).catch((e=>null)):Promise.resolve(null)}function C(t){return m(this,void 0,void 0,(function*(){try{const o=yield e.DataSourceManager.getInstance().createDataSource(u(t)),i=yield e.DataSourceManager.getInstance().createDataSource(v(t)),r=yield e.DataSourceManager.getInstance().createDataSource(c(t)),n=yield e.DataSourceManager.getInstance().createDataSource(d(t));D(o),D(i),D(r),D(n)}catch(e){console.log("Failed to create directions output data sources. ",e)}}))}function D(t){t&&(t.setStatus(e.DataSourceStatus.NotReady),t.setCountStatus(e.DataSourceStatus.NotReady))}function P(t){t&&(t.setStatus(e.DataSourceStatus.Unloaded),t.setCountStatus(e.DataSourceStatus.Unloaded))}function I(t,o,i){return m(this,void 0,void 0,(function*(){if(!t)return;const r=t.getSchema().fields[t.getIdField()],n=e.dataSourceUtils.changeJimuFieldsToJSAPIFields(t.getSchema().fields,r);yield t.updateSourceByFeatures(i,n,null==r?void 0:r.name,{id:t.id,geometryType:o})}))}function U(e){return e?e.map((e=>null==e?void 0:e.toGraphic())).filter((e=>!!e)):[]}function j(e){s.p=e}})(),l})())}}}));