'use strict';

class LayerCollectionObject extends window.CollectionObject {
  constructor(obj) {
    super(obj);

    // native methods
    // this.add = obj.add;
    // this.addNull = obj.addNull;
    // this.addSolid = obj.addSolid;
    // this.addText = obj.addText;
    // this.addBoxText = obj.addBoxText;
    // this.addCamera = obj.addCamera;
    // this.addLight = obj.addLight;
    // this.addShape = obj.addShape;
    // this.byName = obj.byName;
    // this.precompose = obj.precompose;
  }

  // methods
}

$.global.LayerCollectionObject = window.LayerCollectionObject = LayerCollectionObject;
