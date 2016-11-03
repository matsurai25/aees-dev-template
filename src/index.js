'use strict';

// make namespace
var ccm = $.global.ccm = {};

// make modern environment
// with: npm 'after-effects' module
ccm._ = require('underscore');
require('../lib/**/*.js*', {glob: true});

// class
require('./class/**/*.js', {glob: true});
var message = new ccm.Message();


var activeitem = new ccm.ActiveItem();
if(activeitem.type === 'CompItem'){
  console.log("ok");
}else{
  message.alert('NoActiveItem');
}
