var gettype = ccm.gettype = function(anything){
  if(anything === null) return null;
  var objstr = anything.toString();
  return objstr.match(/\[object (.*)\]/)[1];
};
