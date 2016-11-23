'use strict';

class FolderItemObject extends window.ItemObject {
  constructor(obj) {
    super(obj);

    // native props
    this.items = obj.items;
    this.numItems = obj.numItems;

    // native methods
    this.item = obj.item;

  }

  // methods
}

$.global.FolderItemObject = window.FolderItemObject = FolderItemObject;
