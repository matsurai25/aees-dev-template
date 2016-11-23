'use strict';

class FootageItemObject extends window.AVItemObject{
  constructor(obj) {
    super(obj);
    // native props
    if(obj.file) this.file = obj.file;
    this.mainSource = Util.getObject(obj.mainSource);

    // native methods
    // this.replace = obj.replace;
    // this.replaceWithSequence = obj.replaceWithSequence;
    // this.replaceWithPlaceholder = obj.replaceWithPlaceholder;
    // this.replaceWithSolid = obj.replaceWithSolid;
    // this.openInViewer = obj.openInViewer;

  }

  // methods
}

$.global.FootageItemObject = window.FootageItemObject = FootageItemObject;
