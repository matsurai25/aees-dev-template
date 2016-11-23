'use strict';

class TextLayerObject extends window.AVLayerObject {
  constructor(obj) {
    super(obj);

    // PropertyObjects
    var text = Util.getObject(obj("ADBE Text Properties"));
    if(obj("ADBE Text Properties").isModified) this.text = text;

  }

  // methods
}

$.global.TextLayerObject = window.TextLayerObject = TextLayerObject;
