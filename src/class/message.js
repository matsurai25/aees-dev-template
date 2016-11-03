'use strict';

ccm.Message = class {
  constructor() {
    this.lang = app.isoLanguage;
    this.NoActiveItem = {
      en:"select Composition",
      ja:"コンポジションが選択されていません。コンポジションを選択した状態で実行してください。",
    };
  }
  alert(item) {
    var langs = Object.keys(this.NoActiveItem);
    for (var i = 0; i < langs.length; i++) {
      var lang = langs[i];
      if(this.lang.match(lang)){
        alert(this[item][lang]);
        return true;
      }
    }
    // if no match
    alert(this[item][0]);
    return true;
  }
};
