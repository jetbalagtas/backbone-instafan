var $ = require('jquery');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');

$(document).ready(function () {
  $('.userform').on('submit', function(event) {
    event.preventDefault();
    var photoSubmitted = {
    imgUrl: $('input[name="image-url"]').val(),
    comment: $('input[name="comment"]').val()
  };
  var pic = new PictureModel(photoSubmitted);
  pic.save();
  $('.thumbnail').prepend('<img src=' + pic.get('imgUrl') + '><h4>' + pic.get('comment') + '</h4><p><a href=' + "#" + 'class=' + "btn btn-primary" + 'role=' + "button" + '>' + "Like" + '</a> <a href=' + "#" + 'class=' + "btn btn-default" + 'role=' + "button" + '>' + "Dislike" + '</a></p>');
});

});
// <p><a href="#" class="btn btn-primary" role="button">Like</a> <a href="#" class="btn btn-default" role="button">Dislike</a></p>
// var photoSubmitted = {
//   imgUrl: "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11999064_10153014609361496_5126350687549752028_n.jpg?oh=ec559b9a10adb7fb5040577df580310c&oe=56AC5EA3",
//   comment: "Singer Porsche 911 Targa"
// };
//
// var pic = new PictureModel(photoSubmitted);
// pic.save();
// $('.thumbnail').prepend('<img src=' + pic.get('imgUrl') + '>');
// $('.photo-comment').html('<h4>' + pic.get('comment') + '</h4>');
