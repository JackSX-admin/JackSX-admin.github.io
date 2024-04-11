// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../../../../webgl/BufferObject","../../../../webgl/enums"],function(d,e){class f{constructor(a,b,c){this._elementSize=b;this._buffer=d.BufferObject.createVertex(a,e.Usage.STATIC_DRAW);this.resize(c)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.byteLength}copyRange(a,b,c,g=0){a=new Uint8Array(this.array,
a*this.elementSize,(b-a)*this.elementSize);(new Uint8Array(c.array,g*this.elementSize)).set(a)}transferAll(){this._buffer.setData(this._array)}transferRange(a,b){a*=this._elementSize;b*=this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),a,a,b)}resize(a){const b=a*this._elementSize,c=new ArrayBuffer(b);this._array&&(a>=this._capacity?(new Uint8Array(c)).set(new Uint8Array(this._array)):(new Uint8Array(c)).set((new Uint8Array(this._array)).subarray(0,a*this._elementSize)));this._array=
c;this._buffer.setSize(b);this._capacity=a}}return f});