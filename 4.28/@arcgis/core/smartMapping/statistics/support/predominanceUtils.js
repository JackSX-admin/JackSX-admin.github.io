/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{b as n,c as r}from"../../../chunks/utils2.js";import"../../../chunks/date.js";import"../../../chunks/jsonMap.js";import"../../../config.js";import"../../../chunks/typedArrayUtil.js";import"../../../core/lang.js";import"../../../chunks/locale.js";import"../../../chunks/handleUtils.js";import"../../../chunks/timeZoneUtils.js";import"../../../chunks/datetime.js";import"../../../layers/support/fieldUtils.js";import"../../../core/Error.js";import"../../../chunks/Logger.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/tracking.js";import"../../../chunks/ensureType.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../chunks/time.js";import"../../../core/sql.js";import"../../../intl.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/tslib.es6.js";import"../../../chunks/assets.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/arcadeOnDemand.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../chunks/basemapUtils.js";import"../../../Basemap.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../chunks/collectionUtils.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../portal/Portal.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalItem.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../support/BasemapStyle.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils2.js";import"../../../chunks/utils3.js";import"../../../chunks/colorUtils.js";import"../../../chunks/screenUtils.js";import"../../../chunks/mat4.js";const e="no_dominant_category";function t(n){return`(${n.map((n=>`${n} >= 0`)).join(" OR ")})`}function s(n){return{expression:a(n,{returnFieldName:!0,defaultValue:`'${e}'`})}}function a(e,t){const{returnFieldName:s,defaultValue:a,layer:o}=t,l=[];if(s&&a){const n=e.map((n=>`${n} <= 0`)).join(" AND ");l.push(`WHEN ${n} THEN ${a}`)}for(const t of e){const a=e.reduce(((n,r)=>(t!==r&&n.push(`${t} > ${r}`),n)),[]).join(" AND "),i=o&&n(o,t),u=s&&`'${t}'`?`'${t}'`:i?r(t):t;l.push(`WHEN ${a} THEN ${u}`)}return`CASE ${l.join(" ")} ELSE ${a||"0"} END`}function o(n,r){const e=r.join(" + "),s={sqlExpression:`(${e})`,sqlWhere:t(r)},o={sqlExpression:`(( (${a(r,{layer:n})}) / (${e}) ) * 100)`,sqlWhere:`${t(r)} AND ((${e}) > 0)`};return{predominantCategory:{valueExpression:u(r)},size:{valueExpression:j(r),statisticsQuery:s,histogramQuery:s},opacity:{valueExpression:f(r),statisticsQuery:o,histogramQuery:o}}}function l(n){return n&&n.map((n=>`$feature["${n}"];`)).join("\n")+"\n"||""}function i(n,r=!1){const e=n.map((n=>`"${n}"`));return`\n  var fieldNames = [ ${e.join(", ")} ];\n  var numFields = ${e.length};\n  var maxValueField = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueField = fieldNames[i];\n      }\n      else if (value == maxValue) {\n        maxValueField = null;\n      }\n    }\n    ${r?"\n  if(value != null && value >= 0) {\n    if (totalValue == null) { totalValue = 0; }\n    totalValue = totalValue + value;\n  }\n  ":""}\n  }\n  `}function u(n){const r=i(n);return`\n  ${l(n)}\n  ${r}\n  return maxValueField;\n  `}function p(n){const r=i(n);return`\n  ${l(n)}\n  ${r}\n  return maxValue;\n  `}function m(n,r){const e=n.map((n=>n.fieldName)),t=l(e),s=n.map((n=>n.label?`"${n.label}"`:`"${n.fieldName}"`)),a=e.map((n=>`Number($feature["${n}"])`)),o=[];return r&&r.forEach(((n,r)=>{o.push(`function getValueForExpr${r}() {\n  ${n.expression} \n}`),a.push(`Number(getValueForExpr${r}())`),s.push(`"${n.title||n.name}"`)})),`\n  ${t}\n\n  ${o.length?o.join("\n"):""}\n\n  var values = [ ${a.join(", ")} ];\n  var aliases = [ ${s.join(", ")} ];\n  var numValues = ${a.length};\n  var maxValueAlias = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numValues; i++) {\n    value = values[i];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueAlias = aliases[i];\n      }\n      else if (value == maxValue) {\n        maxValueAlias = "Tie";\n      }\n    }\n  }\n  return maxValueAlias;\n  `}function c(n){return`\n  ${l(n)}\n  var fieldValues = [ ${n.map((n=>`$feature["${n}"]`)).join(", ")} ];\n  var totalValue = Sum(fieldValues);\n  var order = Reverse(Sort(fieldValues));\n  return IIF(totalValue > 0, Round(((order[0] - order[1]) / totalValue) * 100, 2), null);\n  `}function j(n){const r=l(n),e=n.map((n=>`"${n}"`));return`\n  ${r}\n  var fieldNames = [ ${e.join(", ")} ];\n  var numFields = ${e.length};\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value != null && value >= 0) {\n      if (totalValue == null) { totalValue = 0; }\n      totalValue = totalValue + value;\n    }\n  }\n\n  return totalValue;\n  `}function f(n){const r=i(n,!0);return`\n  ${l(n)}\n  ${r}\n\n  var strength = null;\n\n  if (maxValueField != null && totalValue > 0) {\n    strength = (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  `}function v(n,r){const e=l(n.map((n=>n.fieldName))),t=n.map((n=>`{\n    value: Number($feature["${n.fieldName}"]),\n    alias: "${n.label||n.fieldName}"\n    }`)),s=[];return r&&r.forEach(((n,r)=>{s.push(`function getValueForExpr${r}() {\n  ${n.expression} \n}`),t.push(`{\n          value: Number(getValueForExpr${r}()),\n          alias: "${n.title||n.name}"\n          }`)})),`\n  ${e}\n\n  ${s.length?s.join("\n"):""}\n\n  var groups = [ ${t.join(", ")} ];\n  var numTopValues = Count(groups);\n\n  function getValuesArray(arr){\n    var valuesArray = []\n    for(var i in arr){\n      valuesArray[i] = arr[i].value;\n    }\n    return valuesArray;\n  }\n\n  function findAliases(top5Array, fullArray){\n    var aliases = [];\n    var found = "";\n    for(var i in top5Array){\n      for(var k in fullArray){\n        if(top5Array[i] == fullArray[k].value && Find(fullArray[k].alias, found) == -1){\n          found += fullArray[k].alias;\n          aliases[Count(aliases)] = {\n            alias: fullArray[k].alias,\n            value: top5Array[i]\n          };\n        }\n      }\n    }\n    return aliases;\n  }\n\n  function getTopGroups(groupsArray){\n    var values = getValuesArray(groupsArray);\n    var top5Values = IIF(Max(values) > 0, Top(Reverse(Sort(values)),numTopValues), "no data");\n    var top5Aliases = findAliases(top5Values,groupsArray);\n\n    if(TypeOf(top5Values) == "String"){\n      return top5Values;\n    } else {\n      var content = "";\n      for(var i in top5Aliases){\n        if(top5Aliases[i].value > 0){\n          content += (i+1) + ". " + top5Aliases[i].alias + " (" + Text(top5Aliases[i].value, "#,###") + ")";\n          content += IIF(i < numTopValues-1, TextFormatting.NewLine, "");\n        }\n      }\n    }\n\n    return content;\n  }\n\n  getTopGroups(groups);\n  `}export{v as getArcadeForOrderedFields,c as getArcadeForPredominanceMargin,u as getArcadeForPredominantCategory,m as getArcadeForPredominantCategoryAlias,p as getArcadeForPredominantCategoryValue,f as getArcadeForStrengthOfPredominance,j as getArcadeForSumOfFields,o as getPredominanceExpressions,s as getSQLForPredominantCategoryName,e as noDominantCategoryField};