'use strict';

class ItemObject extends window.BaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.name = obj.name;
    if(!_.isEmpty(obj.comment)) this.comment = obj.comment;
    this.id = obj.id;
    // this.parentFolder = obj.parentFolder;
    // this.selected = obj.selected;
    // this.typeName = obj.typeName;
    // this.label = obj.label;

    // native methods
    // this.remove = obj.remove;

  }

  // methods
}

$.global.ItemObject = window.ItemObject = ItemObject;
