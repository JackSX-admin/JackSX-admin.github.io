// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/GeometryCursor","./enums"],function(t,x,u){class y{constructor(b,a){}isEmpty(b){if(!b.nextPoint())return!0;let a,h,f,c;a=b.x;for(h=b.y;b.nextPoint();a=h,h=c)if(f=b.x,c=b.y,f!==a||c!==h)return b.seekPathStart(),!1;b.seekPathStart();return!0}normalize(b){const a=Math.sqrt(b[0]*b[0]+b[1]*b[1]);0!==a&&(b[0]/=a,b[1]/=a)}getLength(b,a,h,f){b=h-b;a=f-a;return Math.sqrt(b*b+a*a)}getSegLength(b){const [[a,h],[f,c]]=b;return this.getLength(a,h,f,c)}getCoord2D(b,a,h,f,c){return[b+
(h-b)*c,a+(f-a)*c]}getSegCoord2D(b,a){const [[h,f],[c,l]]=b;return this.getCoord2D(h,f,c,l,a)}getAngle(b,a,h,f,c){return Math.atan2(f-a,h-b)}getAngleCS(b,a,h,f,c){b=h-b;a=f-a;f=Math.sqrt(b*b+a*a);return 0<f?[b/f,a/f]:[1,0]}getSegAngleCS(b,a){const [[h,f],[c,l]]=b;return this.getAngleCS(h,f,c,l,a)}cut(b,a,h,f,c,l){c=0>=c?[b,a]:this.getCoord2D(b,a,h,f,c);b=1<=l?[h,f]:this.getCoord2D(b,a,h,f,l);return[c,b]}getSubCurve(b,a,h){const f=x.GeometryCursor.createEmptyOptimizedCIM("esriGeometryPolyline");return this.appendSubCurve(f,
b,a,h)?f:null}appendSubCurve(b,a,h,f){b.startPath();a.seekPathStart();let c=0;var l=!0;if(!a.nextPoint())return!1;var k=a.x;let m=a.y;for(;a.nextPoint();){const d=this.getLength(k,m,a.x,a.y);if(0!==d){if(l){if(c+d>h){const e=(h-c)/d;let g=1;l=!1;c+d>=f&&(g=(f-c)/d,l=!0);(k=this.cut(k,m,a.x,a.y,e,g))&&b.pushPoints(k);if(l)break;l=!1}}else{if(c+d>f){(a=this.cut(k,m,a.x,a.y,0,(f-c)/d))&&b.pushPoint(a[1]);break}b.pushXY(a.x,a.y)}c+=d}k=a.x;m=a.y}return!0}getCIMPointAlong(b,a){if(!b.nextPoint())return null;
let h=0,f,c,l,k;f=b.x;for(c=b.y;b.nextPoint();f=l,c=k){l=b.x;k=b.y;const m=this.getLength(f,c,l,k);if(0!==m){if(h+m>a)return this.getCoord2D(f,c,l,k,(a-h)/m);h+=m}}return null}offset(b,a,h,f,c){if(!b||2>b.length)return null;var l=0,k=b[l++];for(c=l;l<b.length;){var m=b[l];if(m[0]!==k[0]||m[1]!==k[1])l!==c&&(b[c]=b[l]),k=b[c++];l++}(l=b[0][0]===b[c-1][0]&&b[0][1]===b[c-1][1])&&--c;if(c<(l?3:2))return null;m=[];k=l?b[c-1]:null;let d=b[0];for(let r=0;r<c;r++){const q=r===c-1?l?b[0]:null:b[r+1];if(k)if(q){var e=
[q[0]-d[0],q[1]-d[1]];this.normalize(e);var g=[d[0]-k[0],d[1]-k[1]];this.normalize(g);var n=g[0]*e[1]-g[1]*e[0],p=g[0]*e[0]+g[1]*e[1];if(0===n&&1===p){d=q;continue}if(0<=n===0>=a)1>p&&(e=[e[0]-g[0],e[1]-g[1]],this.normalize(e),g=Math.sqrt((1+p)/2),g>1/f&&(g=-Math.abs(a)/g,m.push([d[0]-e[0]*g,d[1]-e[1]*g])));else switch(h){case u.GeometricEffectOffsetMethod.Mitered:if(k=Math.sqrt((1+p)/2),0<k&&1/k<f){e=[e[0]-g[0],e[1]-g[1]];this.normalize(e);g=Math.abs(a)/k;m.push([d[0]-e[0]*g,d[1]-e[1]*g]);break}case u.GeometricEffectOffsetMethod.Bevelled:m.push([d[0]+
g[1]*a,d[1]-g[0]*a]);m.push([d[0]+e[1]*a,d[1]-e[0]*a]);break;case u.GeometricEffectOffsetMethod.Rounded:if(1>p){m.push([d[0]+g[1]*a,d[1]-g[0]*a]);k=Math.floor(2.5*(1-p));if(0<k){n=p=1/k;for(let w=1;w<k;w++,n+=p){const v=[g[1]*(1-n)+e[1]*n,-g[0]*(1-n)-e[0]*n];this.normalize(v);m.push([d[0]+v[0]*a,d[1]+v[1]*a])}}m.push([d[0]+e[1]*a,d[1]-e[0]*a])}break;default:0>n?(m.push([d[0]+(g[1]+g[0])*a,d[1]+(g[1]-g[0])*a]),m.push([d[0]+(e[1]-e[0])*a,d[1]-(e[0]+e[1])*a])):(k=Math.sqrt((1+Math.abs(p))/2),e=[e[0]-
g[0],e[1]-g[1]],this.normalize(e),g=a/k,m.push([d[0]-e[0]*g,d[1]-e[1]*g]))}}else e=[d[0]-k[0],d[1]-k[1]],this.normalize(e),m.push([d[0]+e[1]*a,d[1]-e[0]*a]);else e=[q[0]-d[0],q[1]-d[1]],this.normalize(e),m.push([d[0]+e[1]*a,d[1]-e[0]*a]);k=d;d=q}if(m.length<(l?3:2))return null;l&&m.push([m[0][0],m[0][1]]);return m}}t.CurveHelper=y;t.pixelTolerance=.03;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});