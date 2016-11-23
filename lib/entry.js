'use strict';

// make namespace
$.global.window = {}; // for escape error

// make modern environment
$.global.Object = {};
require('es5-shim/es5-sham.min.js');
$.global._ = window._ = require('underscore');
$.global.JSON = require('JSON2');

// class
require('../src/class/Util.js');
require('../src/class/BaseObject.js');
require('../src/class/LayerObject.js');
require('../src/class/ItemObject.js');
require('../src/class/CollectionObject.js');
require('../src/class/PropertyBaseObject.js');
require('../src/class/AVLayerObject.js');
require('../src/class/AVItemObject.js');
require('../src/class/CompItemObject.js');
require('../src/class/FolderItemObject.js');
require('../src/class/FootageItemObject.js');
require('../src/class/FootageSourceObject.js');
require('../src/class/LayerCollectionObject.js');
require('../src/class/PropertyGroupObject.js');
require('../src/class/PropertyObject.js');
require('../src/class/SolidSourceObject.js');
require('../src/class/MarkerValueObject.js');
require('../src/class/**/*.js', {glob: true}); // require other files

// start mainstream
require('../src/main.js');
