'use strict';

class SolidSourceObject extends window.FootageSourceObject {
  constructor(obj) {
    super(obj);

    // native props
    this.color = obj.color;

  }

}

$.global.SolidSourceObject = window.SolidSourceObject = SolidSourceObject;
