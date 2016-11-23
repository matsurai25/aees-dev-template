'use strict';

class LightLayerObject extends window.AVLayerObject {
  constructor(obj) {
    super(obj);

    // native props
    if(obj.lightType) this.lightType = obj.lightType;

    // PropertyObjects
    var lightOptions = Util.getObject(obj("ADBE Light Options Group"));
    if(obj("ADBE Light Options Group").isModified) this.lightOptions = lightOptions;

  }

  // methods
}

$.global.LightLayerObject = window.LightLayerObject = LightLayerObject;
