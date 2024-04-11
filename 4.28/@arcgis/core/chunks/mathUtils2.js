/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{b as t}from"./mathUtils.js";import{s,k as n,p as a,i as o,l as r,q as c,d as i,g as u,b as f}from"./vec3.js";import{c as e}from"./vec3f64.js";function h(t){const s=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],n=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],a=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(s,n,a))}function M(t,n){const a=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),o=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),r=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return s(t,a,o,r),t}function m(t,n,r){r=r||t;const c=o(t,n);s(r,t[0]-c*n[0],t[1]-c*n[1],t[2]-c*n[2]),a(r,r)}function p(t,o,r){Math.abs(t[0])>Math.abs(t[1])?s(o,0,1,0):s(o,1,0,0),n(r,t,o),a(o,o),n(o,r,t),a(r,r)}function b(t,s,n,a,o,r){const c=t+(s-t)*o;return c+(n+(a-n)*o-c)*r}function q(t,s,n,a=e()){const f=r(t),h=r(s),M=o(t,s)/(f*h);if(M<.9999999999999999){const o=Math.acos(M),r=((1-n)*f+n*h)/Math.sin(o),u=r/f*Math.sin((1-n)*o),e=r/h*Math.sin(n*o);return c(U,t,u),c(w,s,e),i(a,U,w)}return u(a,t,s,n)}function l(t,s,n,h=e(),M=e()){const m=r(t),p=r(s),b=o(t,s)/(m*p);if(b<.9999999999999999){const a=Math.acos(b),o=Math.sin(a),r=Math.sin(n*a),u=Math.sin((1-n)*a),f=(1-n)*m+n*p;{const n=f/o,a=n/p*r;c(U,t,n/m*u),c(w,s,a),i(h,U,w)}{const e=1/m*(-Math.cos((1-n)*a)*a*f+u*(-m+p));c(U,t,e);const h=1/p*(Math.cos(n*a)*a*f+r*(-m+p));c(w,s,h),i(M,U,w),c(M,M,1/o)}return M}return u(h,t,s,n),f(M,s,t),a(M,M),M}function j(s,r,c){s=a(U,s),r=a(w,r);const i=t(o(s,r));if(c){const t=n(k,s,r);if(o(t,c)<0)return-i}return i}function d(t){const s=t.length;return n=>{if(n<=t[0][0])return t[0][1];if(n>=t[s-1][0])return t[s-1][1];let a=1;for(;n>t[a][0];)a++;const o=t[a-1][0],r=t[a][0],c=(r-n)/(r-o);return c*t[a-1][1]+(1-c)*t[a][1]}}function g(t,s,r,c){f(v,s,t),f(x,r,t),n(c,v,x),a(c,c),c[3]=-o(t,c)}const v=e(),x=e(),k=e(),U=e(),w=e();export{q as a,h as b,d as c,j as d,b as e,M as f,m,g as p,l as s,p as t};