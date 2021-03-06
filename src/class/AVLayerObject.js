'use strict';

class AVLayerObject extends window.LayerObject {
  constructor(obj) {
    super(obj);

    // native props
    this.source = Util.getObject(obj.source);
    if(!obj.isNameFromSource) this.isNameFromSource = obj.isNameFromSource;
    this.height = obj.height;
    this.width = obj.width;
    // this.audioEnabled = obj.audioEnabled;
    if(obj.motionBlur) this.motionBlur = obj.motionBlur;
    if(!obj.effectsActive) this.effectsActive = obj.effectsActive;
    if(obj.adjustmentLayer) this.adjustmentLayer = obj.adjustmentLayer;
    if(obj.guideLayer) this.guideLayer = obj.guideLayer;
    if(obj.threeDLayer) this.threeDLayer = obj.threeDLayer;
    if(obj.threeDPerChar) this.threeDPerChar = obj.threeDPerChar;
    if(obj.environmentLayer) this.environmentLayer = obj.environmentLayer;
    // this.canSetCollapseTransformation = obj.canSetCollapseTransformation;
    if(obj.collapseTransformation) this.collapseTransformation = obj.canSetCollapseTransformation ? obj.collapseTransformation : null;
    if(obj.frameBlending) this.frameBlending = obj.frameBlending;
    if(obj.frameBlending) this.frameBlendingType = obj.frameBlendingType;
    // this.canSetTimeRemapEnabled = obj.canSetTimeRemapEnabled;
    if(obj.canSetTimeRemapEnabled) this.timeRemapEnabled = obj.timeRemapEnabled;
    // this.hasAudio = obj.hasAudio;
    // this.audioActive = obj.audioActive;
    if(obj.blendingMode !== BlendingMode.NORMAL) this.blendingMode = obj.blendingMode;
    if(obj.preserveTransparency) this.preserveTransparency = obj.preserveTransparency;
    if(obj.trackMatteType !== TrackMatteType.NO_TRACK_MATTE) this.trackMatteType = obj.trackMatteType;
    if(obj.isTrackMatte) this.isTrackMatte = obj.isTrackMatte;
    if(obj.hasTrackMatte) this.hasTrackMatte = obj.hasTrackMatte;
    // this.quality = obj.quality;
    if(obj.autoOrient !== AutoOrientType.NO_AUTO_ORIENT) this.autoOrient = obj.autoOrient;
    // this.samplingQuality = obj.samplingQuality;

    // native methods
    // this.audioActiveAtTime = obj.audioActiveAtTime;
    // this.calculateTransformFromPoints = obj.calculateTransformFromPoints;
    // this.replaceSource = obj.replaceSource;
    // this.sourceRectAtTime = obj.sourceRectAtTime;
    // this.openInViewer = obj.openInViewer;


    // PropertyObjects

    var marker = Util.getObject(obj("ADBE Marker"));
    if(!_.isEmpty(marker) && obj("ADBE Marker").isModified) this.marker = marker;

    var timeRemap = Util.getObject(obj("ADBE Time Remapping"));
    if(!_.isEmpty(timeRemap) && obj("ADBE Time Remapping").isModified) this.timeRemap = timeRemap;

    var motionTrackers = Util.getObject(obj("ADBE MTrackers"));
    if(!_.isEmpty(motionTrackers)) this.motionTrackers = motionTrackers;

    var transform = Util.getObject(obj("ADBE Transform Group"));
    if(!_.isEmpty(transform)) this.transform = transform;

    var layerStyle = Util.getObject(obj("ADBE Layer Styles"));
    if(!_.isEmpty(layerStyle)) this.layerStyle = layerStyle;

    var geometryOptions = Util.getObject(obj("ADBE Geometry Options"));
    if(!_.isEmpty(geometryOptions)) this.geometryOptions = geometryOptions;

    var audio = Util.getObject(obj("ADBE Audio Group"));
    if(!_.isEmpty(audio)) this.audio = audio;

    var effects = Util.getObject(obj("ADBE Effect Parade"));
    if(!_.isEmpty(effects) && obj("ADBE Effect Parade").isModified) this.effects = effects;

    var masks = Util.getObject(obj("ADBE Mask Parade"));
    if(!_.isEmpty(masks) && obj("ADBE Mask Parade").isModified) this.masks = masks;

    // Util.logString(JSON.stringify(obj));
    // Util.logString(JSON.stringify(this));

  }

  // methods
}

$.global.AVLayerObject = window.AVLayerObject = AVLayerObject;
