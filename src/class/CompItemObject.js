'use strict';

class CompItemObject extends window.AVItemObject {
  constructor(obj) {
    super(obj);

    // native props

    this.frameDuration = obj.frameDuration;
    if(obj.dropFrame) this.dropFrame = obj.dropFrame;
    this.workAreaStart = obj.workAreaStart;
    this.workAreaDuration = obj.workAreaDuration;
    this.numLayers = obj.numLayers;
    this.hideShyLayers = obj.hideShyLayers;
    this.motionBlur = obj.motionBlur;
    this.draft3d = obj.draft3d;
    this.frameBlending = obj.frameBlending;
    this.preserveNestedFrameRate = obj.preserveNestedFrameRate;
    this.preserveNestedResolution = obj.preserveNestedResolution;
    // this.bgColor = obj.bgColor;
    // this.activeCamera = obj.activeCamera;
    this.displayStartTime = obj.displayStartTime;
    // this.resolutionFactor = obj.resolutionFactor;
    // this.shutterAngle = obj.shutterAngle;
    // this.shutterPhase = obj.shutterPhase;
    // this.motionBlurSamplesPerFrame = obj.motionBlurSamplesPerFrame;
    // this.motionBlurAdaptiveSampleLimit = obj.motionBlurAdaptiveSampleLimit;
    // this.layers = obj.layers;
    // this.selectedLayers = obj.selectedLayers;
    // this.selectedProperties = obj.selectedProperties;
    this.renderer = obj.renderer;
    // this.renderers = obj.renderers;

    // native methods
    // this.duplicate = obj.duplicate;
    // this.layer = obj.layer;
    // this.openInViewer = obj.openInViewer;

    this.layers = [];
    for (var i = 1; i <= obj.numLayers; i++) {
      var o = obj.layer(i);
      this.layers.push(Util.getObject(o));
    }

  }

  // methods
}

$.global.CompItemObject = window.CompItemObject = CompItemObject;
