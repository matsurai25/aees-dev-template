'use strict';

class ShapeLayerObject extends window.AVLayerObject {
  constructor(obj) {
    super(obj);

    // PropertyObjects

    var contents = Util.getObject(obj("ADBE Root Vectors Group"));
    if(obj("ADBE Root Vectors Group").isModified) this.contents = contents;

  }

  // methods
}

$.global.ShapeLayerObject = window.ShapeLayerObject = ShapeLayerObject;
