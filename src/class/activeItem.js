'use strict';

ccm.ActiveItem = class {
  constructor() {
    let activeItem = app.project.activeItem;
    ccm._.extend(this,activeItem);
    this.type = ccm.gettype(activeItem);
  }
};
