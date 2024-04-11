// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./spec","./api","./utils"],function(a,c,d,b){a.scanSpec=c.scan;a.scanAPI=d.scan;a.collectClassPaths=b.collectClassPaths;a.flatten=b.flatten;a.ignoredSchemaDefinitions="baseMapLayer buildingSceneLayer_filterMode buildingSceneLayer_sublayer classBreakInfo_authoringInfo clippingArea codedValue_domain codedValue color colorRamp customParameters dataSource definitionEditor domain drawingInfo edges elevationLayers environment_background_color feature featureSet field_authoringInfo fieldInfo floorFilter format geometry inherited_domain initialState input joinTableDataSource kmlLayer layerDefinition locationInfo mapRangeInfo mediaInfo_chart_value mediaInfo_chart mediaInfo_image_value mediaInfo multidimensionalDefinition navigationConstraint operationalLayers orderByFields parameter pointCloudFilter pointCloudRenderers pointSizeAlgorithm popupElement popupExpressionInfo queryTableDataSource range_domain range rasterClassBreaksRenderer rasterDataElevationLayer rasterDataLayer rasterDataSource rasterRenderers rasterStretchRenderer rasterUniqueValueRenderer relatedRecordsInfo renderer source styleOrigin symbol3D table tableDataSource template transportationNetwork type uniqueValueFromStyleRenderer value version visibleLayer visualVariable visualVariableLegendOptions voxelLayerDefinition wfsInfo widgets".split(" ");
a.schemaToClassModule={applicationProperties:"esri/webscene/ApplicationProperties",authoringInfo:"esri/renderers/support/AuthoringInfo",authoringInfo_visualVariable:"esri/renderers/support/AuthoringInfoVisualVariable",baseMap:"esri/Basemap",border:"esri/symbols/callouts/LineCallout3DBorder",buildingSceneLayer:"esri/layers/BuildingSceneLayer",buildingSceneLayer_filter:"esri/layers/support/BuildingFilter",buildingSceneLayer_filterAuthoringInfo_filterBlock:"esri/layers/support/BuildingFilterAuthoringInfoBlock",
buildingSceneLayer_filterAuthoringInfo_filterType:"esri/layers/support/BuildingFilterAuthoringInfoType",buildingSceneLayer_filterAuthoringInfoCheckbox:"esri/layers/support/BuildingFilterAuthoringInfoCheckbox",buildingSceneLayer_filterBlock:"esri/layers/support/BuildingFilterBlock",buildingSceneLayer_filterModeSolid:"esri/layers/support/BuildingFilterModeSolid",buildingSceneLayer_filterModeWireFrame:"esri/layers/support/BuildingFilterModeWireFrame",buildingSceneLayer_filterModeXray:"esri/layers/support/BuildingFilterModeXRay",
buildingSceneLayer_sublayer:"esri/layers/buildingSublayers/BuildingComponentSublayer",callout:"esri/symbols/callouts/LineCallout3D",camera:"esri/Camera",cimSymbolReference:"esri/symbols/CIMSymbol",classBreakInfo:"esri/renderers/support/ClassBreakInfo",classBreakInfo_authoringInfo:"esri/renderer/support/AuthoringInfoClassBreakInfo",classBreaksRenderer:"esri/renderers/ClassBreaksRenderer",codedValue:"esri/layers/support/CodedValue",codedValue_domain:"esri/layers/support/CodedValueDomain",colorClassBreakInfo:"esri/renderers/support/pointCloud/ColorClassBreakInfo",
colorInfo_visualVariable:"esri/renderers/visualVariables/ColorVariable",colormapInfo:"esri/renderers/support/ColormapInfo",colorModulationInfo:"esri/renderers/support/pointCloud/ColorModulation",colorRamp_algorithmic:"esri/rest/support/AlgorithmicColorRamp",colorRamp_multipart:"esri/rest/support/MultipartColorRamp",colorStop:"esri/renderers/visualVariables/support/ColorStop",colorUniqueValueInfo:"esri/renderers/support/pointCloud/ColorUniqueValueInfo",csvLayer:"esri/layers/CSVLayer",description:"esri/webscene/support/Description",
dynamicDataLayer_source:"esri/layers/support/source/DataLayerSource",dynamicMapLayer_source:"esri/layers/support/source/MapLayerSource",elevationInfo:"esri/symbols/support/ElevationInfo",environment_background_color:"esri/webscene/background/ColorBackground",environment:"esri/webscene/Environment",extent:"esri/geometry/Extent",extrudeSymbol3DLayer:"esri/symbols/ExtrudeSymbol3DLayer",facilityLayerInfo:"esri/layers/support/FacilityLayerInfo",featureExpressionInfo:"esri/layers/support/FeatureExpressionInfo",
featureLayer:"esri/layers/FeatureLayer",featureReduction_select:"esri/layers/support/FeatureReductionSelection",field:"esri/layers/support/Field",field_authoringInfo:"esri/renderers/support/AuthoringInfoFieldInfo",fieldInfo:"esri/popup/FieldInfo",fillSymbol3DLayer:"esri/symbols/FillSymbol3DLayer",font:"esri/symbols/Font",format:"esri/popup/support/FieldInfoFormat",ground:"esri/Ground",groupLayer:"esri/layers/GroupLayer",halo:"esri/symbols/support/Symbol3DHalo",heightModelInfo:"esri/geometry/HeightModelInfo",
iconSymbol3DLayer:"esri/symbols/IconSymbol3DLayer",iconSymbol3DLayer_resource:"esri/symbols/support/IconSymbol3DLayerResource",imageServiceLayer:"esri/layers/ImageryLayer",inherited_domain:"esri/layers/support/InheritedDomain",initialState:"esri/webscene/InitialViewProperties",integratedMeshLayer:"esri/layers/IntegratedMeshLayer",joinTableDataSource:"esri/layers/support/source/JoinTableDataSource",labelExpressionInfo:"esri/layers/support/LabelExpressionInfo",labelingInfo:"esri/layers/support/LabelClass",
labelSymbol3D:"esri/symbols/LabelSymbol3D",layer:"esri/layers/support/Sublayer",layerFloorInfo:"esri/layers/support/LayerFloorInfo",levelLayerInfo:"esri/layers/support/LevelLayerInfo",lighting:"esri/webscene/Lighting",lineSymbol3D:"esri/symbols/LineSymbol3D",lineSymbol3DLayer:"esri/symbols/LineSymbol3DLayer",lineOfSightLayer:"esri/layers/LineOfSightLayer",lineOfSightObserver:"esri/analysis/LineOfSightAnalysisObserver",lineOfSightTarget:"esri/analysis/LineOfSightAnalysisTarget",lod:"esri/layers/support/LOD",
mapFloorInfo:"esri/support/MapFloorInfo",mapServiceLayer:"esri/layers/MapImageLayer",material:"esri/symbols/support/Symbol3DMaterial",materialColorMixMode:"esri/symbols/support/Symbol3DFillMaterial",mediaInfo_chart:"esri/popup/content/BarChartMediaInfo",mediaInfo_chart_value:"esri/popup/content/support/ChartMediaInfoValue",mediaInfo_image:"esri/popup/content/ImageMediaInfo",mediaInfo_image_value:"esri/popup/content/support/ImageMediaInfoValue",meshSymbol3D:"esri/symbols/MeshSymbol3D",mosaicRule:"esri/layers/support/MosaicRule",
multidimensionalDefinition:"esri/layers/support/DimensionalDefinition",multipoint_geometry:"esri/geometry/Multipoint",navigationConstraint:"esri/ground/NavigationConstraint",objectSymbol3DLayer:"esri/symbols/ObjectSymbol3DLayer",objectSymbol3DLayer_resource:"esri/symbols/support/ObjectSymbol3DLayerResource",ogcFeatureLayer:"esri/layers/OGCFeatureLayer",openStreetMapLayer:"esri/layers/OpenStreetMapLayer",orderByFields:"esri/popup/support/RelatedRecordsInfoFieldOrder",outline:"esri/symbols/support/Symbol3DOutline",
pathSymbol3DLayer:"esri/symbols/PathSymbol3DLayer",point_geometry:"esri/geometry/Point",pointCloudBitfieldFilter:"esri/layers/pointCloudFilters/PointCloudBitfieldFilter",pointCloudClassBreaksRenderer:"esri/renderers/PointCloudClassBreaksRenderer",pointCloudFixedSizeAlgorithm:"esri/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm",pointCloudLayer:"esri/layers/PointCloudLayer",pointCloudReturnFilter:"esri/layers/pointCloudFilters/PointCloudReturnFilter",pointCloudRGBRenderer:"esri/renderers/PointCloudRGBRenderer",
pointCloudSplatAlgorithm:"esri/renderers/support/pointCloud/PointSizeSplatAlgorithm",pointCloudStretchRenderer:"esri/renderers/PointCloudStretchRenderer",pointCloudUniqueValueRenderer:"esri/renderers/PointCloudUniqueValueRenderer",pointCloudValueFilter:"esri/layers/pointCloudFilters/PointCloudValueFilter",pointSymbol3D:"esri/symbols/PointSymbol3D",polygon_geometry:"esri/geometry/Polygon",polygonPattern:"esri/symbols/patterns/StylePattern3D",polygonSymbol3D:"esri/symbols/PolygonSymbol3D",polyline_geometry:"esri/geometry/Polyline",
popupElement_attachments:"esri/popup/content/AttachmentsContent",popupElement_fields:"esri/popup/content/FieldsContent",popupElement_media:"esri/popup/content/MediaContent",popupElement_text:"esri/popup/content/TextContent",popupExpressionInfo:"esri/popup/ExpressionInfo",popupInfo:"esri/PopupTemplate",popupLayerOptions:"esri/popup/LayerOptions",presentation:"esri/webscene/Presentation",queryTableDataSource:"esri/layers/support/source/QueryTableDataSource",range_domain:"esri/layers/support/RangeDomain",
rangeInfo:"esri/layers/support/RangeInfo",rasterColormapRenderer:"esri/renderers/RasterColormapRenderer",rasterDataSource:"esri/layers/support/source/RasterDataSource",rasterShadedReliefRenderer:"esri/renderers/RasterShadedReliefRenderer",rasterStretchRenderer:"esri/renderers/RasterStretchRenderer",relatedRecordsInfo:"esri/popup/RelatedRecordsInfo",rendererLegendOptions:"esri/renderers/support/LegendOptions",renderingRule:"esri/layers/support/RasterFunction",rotationInfo_visualVariable:"esri/renderers/visualVariables/RotationVariable",
sceneLayer:"esri/layers/SceneLayer",search:"esri/webdoc/applicationProperties/Search",search_layer:"esri/webdoc/applicationProperties/SearchLayer",search_layer_field:"esri/webdoc/applicationProperties/SearchLayerField",simpleRenderer:"esri/renderers/SimpleRenderer",siteLayerInfo:"esri/layers/support/SiteLayerInfo",sizeInfo_visualVariable:"esri/renderers/visualVariables/SizeVariable",sizeStop:"esri/renderers/visualVariables/support/SizeStop",sketchEdges:"esri/symbols/edges/SketchEdges3D",slide:"esri/webscene/Slide",
slide_ground:"esri/webscene/support/SlideGround",solidEdges:"esri/symbols/support/SolidEdges3D",spatialReference:"esri/geometry/SpatialReference",styleSymbolReference:"esri/symbols/WebStyleSymbol",tableDataSource:"esri/layers/support/source/TableDataSource",textSymbol3DLayer:"esri/symbols/TextSymbol3DLayer",thumbnail:"esri/webdoc/support/Thumbnail",tiledElevationLayer:"esri/layers/ElevationLayer",tiledImageServiceLayer:"esri/layers/ImageryTileLayer",tiledMapServiceLayer:"esri/layers/TileLayer",tileInfo:"esri/layers/support/TileInfo",
title:"esri/webscene/support/Title",transparencyInfo_visualVariable:"esri/renderers/visualVariables/OpacityVariable",transparencyStop:"esri/renderers/visualVariables/support/OpacityStop",transportationNetwork:"esri/webscene/TransportationNetwork",uniqueValueInfo:"esri/renderers/support/UniqueValueInfo",uniqueValueRenderer:"esri/renderers/UniqueValueRenderer",vectorTileLayer:"esri/layers/VectorTileLayer",verticalOffset:"esri/symbols/support/Symbol3DVerticalOffset",viewing:"esri/webdoc/applicationProperties/Viewing",
viewpoint:"esri/Viewpoint",visibleLayer:"esri/webscene/support/SlideVisibleLayer",visualVariableLegendOptions:"esri/renderers/visualVariables/support/VisualVariableLegendOptions",voxelOpacityStop:"esri/layers/voxel/VoxelOpacityStop",voxelColorStop:"esri/layers/voxel/VoxelColorStop",voxelDynamicSection:"esri/layers/voxel/VoxelDynamicSection",voxelIsosurfaceStyle:"esri/layers/voxel/VoxelIsosurface",voxelLayer:"esri/layers/VoxelLayer",voxelRangeFilter:"esri/layers/voxel/VoxelRangeFilter",voxelSection:"esri/layers/voxel/VoxelSection",
voxelShading:"esri/layers/voxel/VoxelSimpleShading",voxelSlice:"esri/layers/voxel/VoxelSlice",voxelStyle:"esri/layers/voxel/VoxelStyle",voxelTransferFunctionStyle:"esri/layers/voxel/VoxelTransferFunctionStyle",voxelUniqueValue:"esri/layers/voxel/VoxelUniqueValue",voxelVariableStyle:"esri/layers/voxel/VoxelVariableStyle",voxelVolumeStyle:"esri/layers/voxel/VoxelVolumeStyle",waterSymbol3DLayer:"esri/symbols/WaterSymbol3DLayer",webTiledLayer:"esri/layers/WebTileLayer",wfsLayer:"esri/layers/WFSLayer",
wmsLayer:"esri/layers/WMSLayer",wmsLayer_layer:"esri/layers/support/WMSSublayer",wmtsInfo:"esri/layer/support/WMTSLayerInfo"};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});