'use strict';

class PropertyGroupObject extends window.PropertyBaseObject {
  constructor(obj) {
    super(obj);

    // native props
    this.numProperties = obj.numProperties;

    // native methods
    // this.property = obj.property;
    // this.canAddProperty = obj.canAddProperty;
    // this.addProperty = obj.addProperty;

    this.properties = {};
    for (var i = 1; i <= this.numProperties; i++) {
      var o = obj(i);
      if(!o.isModified) continue;
      if(o.matchName === 'ADBE Position_0' && o.value === 0) continue;
      if(o.matchName === 'ADBE Position_1' && o.value === 0) continue;
      if(o.matchName === 'ADBE Position_2' && o.value === 0) continue;
      var name = o.matchName;
      this.properties[name] = Util.getObject(o);
    }
    return this.properties;
  }
}

$.global.PropertyGroupObject = window.PropertyGroupObject = PropertyGroupObject;
