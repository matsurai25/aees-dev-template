'use strict';

class Util {
  constructor() {
    this.logs = $.global.__debug = [];
  }
  logString(o){
    $.writeln(o);
    this.logs.push(o);
  }
  // Recursively
  log(something){
    $.writeln(JSON.stringify(something));
    this.logs.push(something);
  }
  getType(anything){
    if(anything === null || anything === 'undifiend') return null;
    var objstr = String(anything);
    if(objstr.match(/\[object (.*)\]/)){
      return objstr.match(/\[object (.*)\]/)[1];
    }
    return objstr;
  }
  getObject(anything){
    if(anything === null || anything === 'undifiend') return null;
    var type = this.getType(anything);
    if($.global[`${type}Object`]){
      return new $.global[`${type}Object`](anything);
    }
    return null;
  }
  getPropertyValue(obj){
    switch (obj.propertyValueType) {
      case PropertyValueType.TEXT_DOCUMENT:
        return new TextDocumentObject(obj.value);
      case PropertyValueType.SHAPE:
        return new ShapeObject(obj.value);
        break;
      case PropertyValueType.NO_VALUE:
        return null
        break;
      default:
        return obj.value;
    }
  }
};

$.global.Util = window.Util = new Util();
