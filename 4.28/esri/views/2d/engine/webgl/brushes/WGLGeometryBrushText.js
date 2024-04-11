// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey","../../../../webgl/enums"],function(r,t,u,v,b){class w extends u{dispose(){}getGeometryType(){return r.WGLGeometryType.TEXT}supportsSymbology(d){return!0}drawGeometry(d,e,f,a){const {context:c,painter:l,rendererInfo:h,state:m,passOptions:n,requestRender:p,allowDelayedRender:x}=d,g=v.TextMaterialKey.load(f.materialKey),y=null!=n&&"hittest"===n.type,{bufferLayouts:z,attributes:q}=t.createProgramDescriptor(g.data,{geometry:[{location:0,
name:"a_pos",count:2,type:b.DataType.SHORT},{location:1,name:"a_id",count:4,type:b.DataType.UNSIGNED_BYTE},{location:2,name:"a_color",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:3,name:"a_haloColor",count:4,type:b.DataType.UNSIGNED_BYTE,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:b.DataType.UNSIGNED_BYTE},{location:5,name:"a_aux",count:4,type:b.DataType.BYTE},{location:6,name:"a_zoomRange",count:2,type:b.DataType.UNSIGNED_SHORT},{location:7,name:"a_vertexOffset",
count:2,type:b.DataType.SHORT},{location:8,name:"a_texCoords",count:2,type:b.DataType.UNSIGNED_SHORT}]});a=l.materialManager.getMaterialProgram(d,g,"materials/text",q,a);if(x&&null!=p&&!a.compiled)p();else{c.useProgram(a);var k=b.PrimitiveType.TRIANGLES;y&&(k=b.PrimitiveType.POINTS);this._setSharedUniforms(a,d,e);l.textureManager.bindTextures(c,a,g);a.setUniformMatrix3fv("u_displayMat3",m.displayMat3);a.setUniformMatrix3fv("u_displayViewMat3",m.displayViewMat3);this._setSizeVVUniforms(g,a,h,e);this._setColorAndOpacityVVUniforms(g,
a,h);this._setRotationVVUniforms(g,a,h);d=f.target.getVAO(c,z,q);e=f.indexFrom*Uint32Array.BYTES_PER_ELEMENT;c.bindVAO(d);a.setUniform1f("u_isHaloPass",0);a.setUniform1f("u_isBackgroundPass",1);c.drawElements(k,f.indexCount,b.DataType.UNSIGNED_INT,e);a.setUniform1f("u_isHaloPass",1);a.setUniform1f("u_isBackgroundPass",0);c.drawElements(b.PrimitiveType.TRIANGLES,f.indexCount,b.DataType.UNSIGNED_INT,e);a.setUniform1f("u_isHaloPass",0);a.setUniform1f("u_isBackgroundPass",0);c.drawElements(k,f.indexCount,
b.DataType.UNSIGNED_INT,e)}}}return w});