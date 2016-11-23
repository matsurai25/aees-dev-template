'use strict';

class AVItemObject extends window.ItemObject {
  constructor(obj) {
    super(obj);

    // native props
    this.width = obj.width;
    this.height = obj.height;
    if(obj.pixelAspect != 1) this.pixelAspect = obj.pixelAspect;
    if(!_.isEmpty(obj.frameRate)) this.frameRate = obj.frameRate;
    if(obj.frameDuration != 1) this.frameDuration = obj.frameDuration;
    if(!_.isEmpty(obj.duration)) this.duration = obj.duration;
    if(obj.useProxy) this.useProxy = obj.useProxy;
    if(obj.useProxy) this.proxySource = Util.getObject(obj.proxySource);
    // this.time = obj.time;
    // this.usedIn = obj.usedIn;
    if(!obj.hasVideo) this.hasVideo = obj.hasVideo;
    if(obj.hasAudio) this.hasAudio = obj.hasAudio;
    if(obj.footageMissing) this.footageMissing = obj.footageMissing;

    // native methods
    this.setProxy = obj.setProxy;
    this.setProxyWithSequence = obj.setProxyWithSequence;
    this.setProxyWithSolid = obj.setProxyWithSolid;
    this.setProxyWithPlaceholder = obj.setProxyWithPlaceholder;
    this.setProxyToNone = obj.setProxyToNone;

  }

  // methods
}

$.global.AVItemObject = window.AVItemObject = AVItemObject;
