'use strict';

var _ = window._;

class BaseObject {
  constructor() {
  }

  getProps(){
    var props = [];
    for (var key in this) {
      if (!this.hasOwnProperty(key) || typeof this[key] == 'function') {
        continue;
      }
      props.push(key);
    }
    return props;
  }
  getMethods(){
    var methods = [];
    for (var key in this) {
      if (!this.hasOwnProperty(key) || typeof this[key] !== 'function') {
        continue;
      }
      methods.push(key);
    }
    return methods;
  }

  logProps(){
    var self = this;
    var props = self.getProps();
    // Util.logString(JSON.stringify(props));
    // Util.logString(JSON.stringify(self));
    // _.each(props,function(prop,i){
    //   if(self[prop] === null ){
    //     Util.logString(`■■■　${prop} is null`);
    //     return;
    //   }
    //   if(self[prop] === 'undefined' ){
    //     Util.logString(`■■■　${prop} is undefined`);
    //     return;
    //   }
    //   if(typeof self[prop] === 'object'){
    //     Util.logString(`■■■　${prop} is object`);
    //     // Util.logString(`{${prop}:${JSON.stringify(self[prop])}}`);
    //     return;
    //   }
    //   Util.logString(`{${prop}:${self[prop]}}`);
    // });
  }
}

window.BaseObject = BaseObject;
