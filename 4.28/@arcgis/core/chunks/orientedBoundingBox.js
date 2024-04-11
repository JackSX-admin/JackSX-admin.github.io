/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{a as t}from"./mat3.js";import{a as n}from"./mat3f64.js";import{c as e,a as r}from"./quat.js";import{b as a,a as i}from"./quatf64.js";import{x as o,y as s,z as c,j as f,l as h,d as u,c as l,s as m,q as j,f as b,A as z,B as S,b as P,v as q,C as x}from"./vec3.js";import{a as M,c as I}from"./vec3f64.js";import{c as V}from"./aaBoundingBox.js";import{s as y,n as N}from"./plane.js";import{V as w}from"./ViewingMode.js";import{V as A}from"./Attribute.js";const d=1e-6,p=[0,0,0],F=[0,0,0],T=[0,0,0],g=[0,0,0],v=[0,0,0],E=[0,0,0],Y=[0,0,0],_=[0,0,0],B=[0,0,0],G=[0,0,0],O=[0,0,0],C=[0,0],k=[0,0,0],D=[0,0,0],H=[0,0,0],J=[0,0,0],K=[0,0,0],L=[0,0,0];function Q(t,n,e,r,a,i){if(Pt(n)<d)return;zt(k,e,n),zt(D,r,n),zt(H,a,n),U(t,n,C),K[1]=C[0],J[1]=C[1],L[1]=J[1]-K[1];const o=[e,r,a],s=[k,D,H];for(let e=0;e<3;++e){U(t,o[e],C),K[0]=C[0],J[0]=C[1],U(t,s[e],C),K[2]=C[0],J[2]=C[1],L[0]=J[0]-K[0],L[2]=J[2]-K[2];const r=ut(L);r<i.quality&&(bt(i.b0,o[e]),bt(i.b1,n),bt(i.b2,s[e]),i.quality=r)}}const R=[0,0,0];function U(t,n,e){const{data:r,size:a}=t;e[0]=Number.POSITIVE_INFINITY,e[1]=Number.NEGATIVE_INFINITY;for(let t=0;t<r.length;t+=a){const a=r[t]*n[0]+r[t+1]*n[1]+r[t+2]*n[2];e[0]=Math.min(e[0],a),e[1]=Math.max(e[1],a)}}function W(t,n,e){bt(e.center,t),jt(e.halfSize,n,.5),e.quaternion[0]=0,e.quaternion[1]=0,e.quaternion[2]=0,e.quaternion[3]=1}const X=[0,0,0],Z=[0,0,0],$=[0,0,0],tt=[0,0,0],nt=[0,0,0],et=[0,0,0];function rt(t,n,e){bt(X,n),Math.abs(n[0])>Math.abs(n[1])&&Math.abs(n[0])>Math.abs(n[2])?X[0]=0:Math.abs(n[1])>Math.abs(n[2])?X[1]=0:X[2]=0,Pt(X)<d&&(X[0]=X[1]=X[2]=1),zt(Z,n,X),St(Z,Z),zt($,n,Z),St($,$),at(t,n,Z,$,tt,nt),mt(et,nt,tt),ct(n,Z,$,tt,nt,et,e)}function at(t,n,e,r,a,i){U(t,n,C),a[0]=C[0],i[0]=C[1],U(t,e,C),a[1]=C[0],i[1]=C[1],U(t,r,C),a[2]=C[0],i[2]=C[1]}const it=[0,0,0],ot=[1,0,0,0,1,0,0,0,1],st=[0,0,0];function ct(t,n,e,r,a,i,o){ot[0]=t[0],ot[1]=t[1],ot[2]=t[2],ot[3]=n[0],ot[4]=n[1],ot[5]=n[2],ot[6]=e[0],ot[7]=e[1],ot[8]=e[2],function(t,n){const e=n[0]+n[4]+n[8];if(e>0){let r=Math.sqrt(e+1);t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r}else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const r=(e+1)%3,a=(e+2)%3;let i=Math.sqrt(n[3*e+e]-n[3*r+r]-n[3*a+a]+1);t[e]=.5*i,i=.5/i,t[3]=(n[3*r+a]-n[3*a+r])*i,t[r]=(n[3*r+e]+n[3*e+r])*i,t[a]=(n[3*a+e]+n[3*e+a])*i}}(o.quaternion,ot),lt(st,r,a),jt(st,st,.5),jt(o.center,t,st[0]),jt(it,n,st[1]),lt(o.center,o.center,it),jt(it,e,st[2]),lt(o.center,o.center,it),jt(o.halfSize,i,.5)}class ft{constructor(t){this.minVert=new Array(7),this.maxVert=new Array(7),this.buffer=new ArrayBuffer(448);let n=0;this.minProj=new Float64Array(this.buffer,n,7),n+=56,this.maxProj=new Float64Array(this.buffer,n,7),n+=56;for(let t=0;t<7;++t)this.minVert[t]=new Float64Array(this.buffer,n,3),n+=24;for(let t=0;t<7;++t)this.maxVert[t]=new Float64Array(this.buffer,n,3),n+=24;for(let t=0;t<7;++t)this.minProj[t]=Number.POSITIVE_INFINITY,this.maxProj[t]=Number.NEGATIVE_INFINITY;const e=new Array(7),r=new Array(7),{data:a,size:i}=t;for(let t=0;t<a.length;t+=i){let n=a[t];n<this.minProj[0]&&(this.minProj[0]=n,e[0]=t),n>this.maxProj[0]&&(this.maxProj[0]=n,r[0]=t),n=a[t+1],n<this.minProj[1]&&(this.minProj[1]=n,e[1]=t),n>this.maxProj[1]&&(this.maxProj[1]=n,r[1]=t),n=a[t+2],n<this.minProj[2]&&(this.minProj[2]=n,e[2]=t),n>this.maxProj[2]&&(this.maxProj[2]=n,r[2]=t),n=a[t]+a[t+1]+a[t+2],n<this.minProj[3]&&(this.minProj[3]=n,e[3]=t),n>this.maxProj[3]&&(this.maxProj[3]=n,r[3]=t),n=a[t]+a[t+1]-a[t+2],n<this.minProj[4]&&(this.minProj[4]=n,e[4]=t),n>this.maxProj[4]&&(this.maxProj[4]=n,r[4]=t),n=a[t]-a[t+1]+a[t+2],n<this.minProj[5]&&(this.minProj[5]=n,e[5]=t),n>this.maxProj[5]&&(this.maxProj[5]=n,r[5]=t),n=a[t]-a[t+1]-a[t+2],n<this.minProj[6]&&(this.minProj[6]=n,e[6]=t),n>this.maxProj[6]&&(this.maxProj[6]=n,r[6]=t)}for(let t=0;t<7;++t){let n=e[t];bt(this.minVert[t],a,n),n=r[t],bt(this.maxVert[t],a,n)}}}class ht{constructor(){this.b0=[1,0,0],this.b1=[0,1,0],this.b2=[0,0,1],this.quality=0}}function ut(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function lt(t,n,e){t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2]}function mt(t,n,e){t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2]}function jt(t,n,e){t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e}function bt(t,n,e=0){t[0]=n[e],t[1]=n[e+1],t[2]=n[e+2]}function zt(t,n,e){const r=n[0],a=n[1],i=n[2],o=e[0],s=e[1],c=e[2];t[0]=a*c-i*s,t[1]=i*o-r*c,t[2]=r*s-a*o}function St(t,n){const e=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(e>0){const r=1/Math.sqrt(e);t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r}}function Pt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function qt(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return e*e+r*r+a*a}function xt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}const Mt=i(),It=I(),Vt=I(),yt=n();function Nt(t=[0,0,0],n=[-1,-1,-1],e=i()){return{center:M(t),halfSize:M(n),quaternion:a(e)}}function wt(t){return Nt(t.center,t.halfSize,t.quaternion)}function At(t,n){l(n.center,t.center),l(n.halfSize,t.halfSize),e(n.quaternion,t.quaternion)}function dt(t,n){return function(t,n){const{data:e,size:r}=t,a=e.length/r;if(a<=0)return;const i=new ft(t);lt(p,i.minProj,i.maxProj),jt(p,p,.5),mt(F,i.maxProj,i.minProj);const o=ut(F),s=new ht;s.quality=o,a<14&&(t=new A(new Float64Array(i.buffer,112,42),3));const c=[0,0,0],f=[0,0,0],h=[0,0,0],u=[0,0,0],l=[0,0,0],m=[0,0,0],j=[0,0,0];switch(function(t,n,e,r,a,i,o,s,c,f){if(function(t,n,e){let r=qt(t.maxVert[0],t.minVert[0]),a=0;for(let n=1;n<7;++n){const e=qt(t.maxVert[n],t.minVert[n]);e>r&&(r=e,a=n)}bt(n,t.minVert[a]),bt(e,t.maxVert[a])}(t,r,a),qt(r,a)<d)return 1;mt(o,r,a),St(o,o);const h=function(t,n,e,r){const{data:a,size:i}=t;let o=Number.NEGATIVE_INFINITY,s=0;for(let t=0;t<a.length;t+=i){O[0]=a[t]-n[0],O[1]=a[t+1]-n[1],O[2]=a[t+2]-n[2];const r=e[0]*O[0]+e[1]*O[1]+e[2]*O[2],i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],c=O[0]*O[0]+O[1]*O[1]+O[2]*O[2]-r*r/i;c>o&&(o=c,s=t)}return bt(r,a,s),o}(n,r,o,i);return h<d?2:(mt(s,a,i),St(s,s),mt(c,i,r),St(c,c),zt(e,s,o),St(e,e),Q(n,e,o,s,c,f),0)}(i,t,j,c,f,h,u,l,m,s)){case 1:return void W(p,F,n);case 2:return void rt(t,u,n)}!function(t,n,e,r,a,i,o,s,c){(function(t,n,e,r,a){!function(t,n,e,r,a){const{data:i,size:o}=t;bt(r,i),bt(a,r),e[0]=xt(R,n),e[1]=e[0];for(let t=o;t<i.length;t+=o){const o=i[t]*n[0]+i[t+1]*n[1]+i[t+2]*n[2];o<e[0]&&(e[0]=o,bt(r,i,t)),o>e[1]&&(e[1]=o,bt(a,i,t))}}(t,n,C,a,r);const i=xt(e,n);C[1]-d<=i&&(r[0]=void 0),C[0]+d>=i&&(a[0]=void 0)})(t,n,e,T,g),void 0!==T[0]&&(mt(v,T,e),St(v,v),mt(E,T,r),St(E,E),mt(Y,T,a),St(Y,Y),zt(_,E,i),St(_,_),zt(B,Y,o),St(B,B),zt(G,v,s),St(G,G),Q(t,_,i,E,v,c),Q(t,B,o,Y,E,c),Q(t,G,s,v,Y,c)),void 0!==g[0]&&(mt(v,g,e),St(v,v),mt(E,g,r),St(E,E),mt(Y,g,a),St(Y,Y),zt(_,E,i),St(_,_),zt(B,Y,o),St(B,B),zt(G,v,s),St(G,G),Q(t,_,i,E,v,c),Q(t,B,o,Y,E,c),Q(t,G,s,v,Y,c))}(t,j,c,f,h,u,l,m,s),at(t,s.b0,s.b1,s.b2,tt,nt);const b=[0,0,0];mt(b,nt,tt),s.quality=ut(b),s.quality<o?ct(s.b0,s.b1,s.b2,tt,nt,b,n):W(p,F,n)}(t,n=n||Nt()),n}function pt(t,n){const e=y(n,t.center),r=_t(t,N(n));return e>r?1:e<-r?-1:0}function Ft(t,n){return It[0]=t.center[0]-n[0],It[1]=t.center[1]-n[1],It[2]=t.center[2]-n[2],r(Mt,t.quaternion),o(It,It,Mt),s(It,It),c(Vt,It,t.halfSize),x(Vt,It)<n[3]*n[3]}function Tt(n,e){e||(e=V());const r=t(yt,n.quaternion),a=n.halfSize[0]*Math.abs(r[0])+n.halfSize[1]*Math.abs(r[3])+n.halfSize[2]*Math.abs(r[6]),i=n.halfSize[0]*Math.abs(r[1])+n.halfSize[1]*Math.abs(r[4])+n.halfSize[2]*Math.abs(r[7]),o=n.halfSize[0]*Math.abs(r[2])+n.halfSize[1]*Math.abs(r[5])+n.halfSize[2]*Math.abs(r[8]);return e[0]=n.center[0]-a,e[1]=n.center[1]-i,e[2]=n.center[2]-o,e[3]=n.center[0]+a,e[4]=n.center[1]+i,e[5]=n.center[2]+o,e}function gt(t,n){return y(n,t.center)-_t(t,N(n))}function vt(t,n){return y(n,t.center)+_t(t,N(n))}function Et(t,n){return pt(t,n[0])<=0&&pt(t,n[1])<=0&&pt(t,n[2])<=0&&pt(t,n[3])<=0&&pt(t,n[4])<=0&&pt(t,n[5])<=0}function Yt(t,n,e,a=0){r(Mt,t.quaternion),P(It,n,t.center);const i=o(It,It,Mt),s=o(Vt,e,Mt);let c=-1/0,f=1/0;for(let n=0;n<3;n++)if(Math.abs(s[n])>1e-6){const e=(a+t.halfSize[n]-i[n])/s[n],r=(-a-t.halfSize[n]-i[n])/s[n];c=Math.max(c,Math.min(e,r)),f=Math.min(f,Math.max(e,r))}else if(i[n]>t.halfSize[n]+a||i[n]<-t.halfSize[n]-a)return!1;return c<=f}function _t(t,n){r(Mt,t.quaternion),o(It,n,Mt);const e=t.halfSize;return Math.abs(It[0]*e[0])+Math.abs(It[1]*e[1])+Math.abs(It[2]*e[2])}function Bt(t,n){for(let e=0;e<8;++e){const r=n[e];r[0]=1&e?-t.halfSize[0]:t.halfSize[0],r[1]=2&e?-t.halfSize[1]:t.halfSize[1],r[2]=4&e?-t.halfSize[2]:t.halfSize[2],o(r,r,t.quaternion),u(r,r,t.center)}}function Gt(t){return q(t.halfSize)}function Ot(t,n,a,i,P){if(e(P.quaternion,t.quaternion),i===w.Global){r(Ht,t.quaternion),o(Ct,t.center,Ht),s(kt,Ct),c(Dt,kt,t.halfSize),f(Dt,kt,Dt);const e=h(Dt);u(Dt,kt,t.halfSize);const i=h(Dt);if(e<a)l(P.center,t.center),m(Ct,a,a,a),u(P.halfSize,t.halfSize,Ct);else{const r=i>0?1+n/i:1,s=e>0?1+a/e:1,c=(s+r)/2,f=(s-r)/2;j(P.halfSize,kt,f),b(P.halfSize,P.halfSize,t.halfSize,c),j(P.center,kt,c),b(P.center,P.center,t.halfSize,f),z(Ct,Ct),S(P.center,P.center,Ct),o(P.center,P.center,P.quaternion)}}else{const e=m(Ct,0,0,1);b(P.center,t.center,e,(a+n)/2),r(Ht,t.quaternion),o(e,e,Ht),s(e,e),b(P.halfSize,t.halfSize,e,(a-n)/2)}return P}(()=>{const t=new Int8Array(162);let n=0;const e=e=>{for(let r=0;r<e.length;r++)t[n+r]=e[r];n+=6};e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4])})();const Ct=I(),kt=I(),Dt=I(),Ht=i();export{dt as a,Bt as b,Nt as c,Ot as d,wt as e,Yt as f,Ft as g,Et as h,pt as i,vt as j,gt as m,_t as p,Gt as r,At as s,Tt as t};