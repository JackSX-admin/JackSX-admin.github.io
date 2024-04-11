"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3092],{93092:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>o});var a=t(94056);function r(n,e){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?a.F.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:a.aB[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},(0,a.Z)(e)):a.F.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:a.aB[n.field.type],min:n.domain.min,max:n.domain.max},(0,a.Z)(e)):null}function o(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(async(n,o,i)=>{if((0,a.p)(i,2,3,e,t),(0,a.s)(i[0]))return r((0,a.as)(i[0],(0,a.y)(i[1]),void 0===i[2]?void 0:i[2]),e);if((0,a.t)(i[0]))return await i[0]._ensureLoaded(),r((0,a.at)((0,a.y)(i[1]),i[0],null,void 0===i[2]?void 0:i[2]),e);throw new a.A(e,a.E.InvalidParameter,t)}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if((0,a.p)(o,1,1,e,t),(0,a.s)(o[0])){const n=(0,a.au)(o[0]);return n?a.F.convertObjectToArcadeDictionary(n,(0,a.Z)(e)):null}if((0,a.t)(o[0])){await o[0]._ensureLoaded();const n=o[0].subtypes();return n?a.F.convertObjectToArcadeDictionary(n,(0,a.Z)(e)):null}throw new a.A(e,a.E.InvalidParameter,t)}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if((0,a.p)(o,2,4,e,t),(0,a.s)(o[0]))return(0,a.av)(o[0],(0,a.y)(o[1]),o[2],void 0===o[3]?void 0:o[3]);if((0,a.t)(o[0])){await o[0]._ensureLoaded();const n=(0,a.at)((0,a.y)(o[1]),o[0],null,void 0===o[3]?void 0:o[3]);return(0,a.aw)(n,o[2])}throw new a.A(e,a.E.InvalidParameter,t)}))},n.signatures.push({name:"domainname",min:2,max:4}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if((0,a.p)(o,2,4,e,t),(0,a.s)(o[0]))return(0,a.ax)(o[0],(0,a.y)(o[1]),o[2],void 0===o[3]?void 0:o[3]);if((0,a.t)(o[0])){await o[0]._ensureLoaded();const n=(0,a.at)((0,a.y)(o[1]),o[0],null,void 0===o[3]?void 0:o[3]);return(0,a.ay)(n,o[2])}throw new a.A(e,a.E.InvalidParameter,t)}))},n.signatures.push({name:"domaincode",min:2,max:4})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,((n,r,o)=>{if((0,a.p)(o,1,2,e,t),!(0,a.t)(o[0]))return(0,a.az)(o[0],o[1]);{const e=(0,a.P)(o[1],"");if(""===e)return o[0].castToText();if("schema"===e.toLowerCase())return o[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return o[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if((0,a.p)(o,1,1,e,t),(0,a.s)(o[0]))return o[0].gdbVersion();if((0,a.t)(o[0]))return(await o[0].load()).gdbVersion;throw new a.A(e,a.E.InvalidParameter,t)}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,o)=>{if((0,a.p)(o,1,1,e,t),(0,a.t)(o[0]))return await o[0].load(),a.F.convertObjectToArcadeDictionary(o[0].schema(),(0,a.Z)(e));if((0,a.s)(o[0])){const n=(0,a.aA)(o[0]);return n?a.F.convertObjectToArcadeDictionary(n,(0,a.Z)(e)):null}throw new a.A(e,a.E.InvalidParameter,t)}))}}t(74569),t(91306),t(48578),t(92143),t(31450),t(76506),t(21801),t(29768),t(34250),t(66396),t(22723),t(86656),t(60991),t(17533),t(6540),t(73796),t(12047),t(21972),t(379),t(62062),t(6906),t(79456),t(50406),t(97714),t(60947),t(53785),t(57251),t(89623),t(73173),t(82058),t(88762),t(32101),t(2906),t(91597),t(86787),t(35132),t(84069),t(44567),t(89034),t(98380),t(92482),t(82426),t(72836),t(66106),t(29794),t(92896),t(22781),t(32422),t(48675),t(35154),t(36097),t(3482),t(97546),t(59465),t(9801),t(53523),t(42911),t(46826),t(45433),t(54732),t(33957),t(40267),t(53326),t(1709),t(14249),t(66284),t(8925),t(76131),t(87239),t(60217),t(49900),t(81184),t(33101),t(58943),t(67477),t(78533),t(74653),t(91091)}}]);