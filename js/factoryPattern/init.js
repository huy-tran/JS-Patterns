define(function(require){
  'user strict';

  return {
    init: function(){
      var mediaFactory = require('./mediaFactory');

      var myVideo = mediaFactory.createMedia('Video', {
        length: 10.50,
        name: 'My Video'
      });

      var myImage = mediaFactory.createMedia('Image', {
        width: 640,
        height: 480,
        name: 'My Image'
      });

      console.log(myVideo);
      console.log(myImage);
    }
  };
});
