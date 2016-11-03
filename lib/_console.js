'use strict';
var console = ccm.console = {};
$.global.console = console;
$.global["00_log"] = [];
console.log = function(anything){
  $.writeln('log:'+anything.toString());
  $.global["00_log"].push(anything);
};
