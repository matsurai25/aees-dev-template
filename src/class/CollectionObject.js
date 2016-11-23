'use strict';

class CollectionObject extends window.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.length = obj.length;

  }

  // methods
}

$.global.CollectionObject = window.CollectionObject = CollectionObject;
