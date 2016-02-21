define(function(require){
  'use strict';
  
  var media = {
    Video: require('./video'),
    Image: require('./image')
  };

  return {
    createMedia: function(type, attr) {
      var MediaType = media[type];
      return new MediaType(attr);
    }
  };
});
