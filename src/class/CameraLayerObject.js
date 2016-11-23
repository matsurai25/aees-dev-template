'use strict';

class CameraLayerObject extends window.AVLayerObject {
  constructor(obj) {
    super(obj);

    // PropertyObjects
    var cameraOptions = Util.getObject(obj("ADBE Camera Options Group"));
    if(obj("ADBE Camera Options Group").isModified) this.cameraOptions = cameraOptions;

  }

  // methods
}

$.global.CameraLayerObject = window.CameraLayerObject = CameraLayerObject;
