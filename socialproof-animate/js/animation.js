var wobble = function() {
  $("#bird").removeClass('slideOutLeft');
  $('#bird').addClass('animated wobble');
  var f = $('.feed');
  f.removeClass('hide');
  f.animate({left:'23%'}, {duration:300, queue: false});
  f.animate({width:'74%'}, {duration:300, queue: false});
  f.animate({bottom:'93%'}, {duration:300, queue: false});
  f.animate({height:'85%'}, {duration:300, queue: false});
}

var move = function() {
  $("#bird").addClass('animated slideOutLeft');
   setTimeout(wobble, 400);
   
}

var note1 = function() {
  var m = $("#note1");
  m.removeClass('hide');
  m.animate({left:'57%'}, {duration:500, queue: false});
  m.animate({bottom:'97%'}, {duration:500, queue: false});
  m.delay(500).fadeOut(200);
}

var note2 = function() {
  var m = $("#note2");
  m.removeClass('hide');
  m.animate({left:'57%'}, {duration:500, queue: false});
  m.animate({bottom:'97%'}, {duration:500, queue: false});
  m.delay(500).fadeOut(200);
}

var music = function() {
  note1();
  setTimeout(note2, 200);
}

var initTwit= function() {
  console.log('initiated!');
  $(this).addClass('tweet');
  setTimeout(music, 300);
  setTimeout(move, 1500);
}


var instaWobble = function() {
  $("#insta").removeClass('slideOutLeft');
  $('#insta').addClass('animated wobble');
  var f = $('.feed2');
  f.removeClass('hide');
  f.animate({left:'23%'}, {duration:300, queue: false});
  f.animate({width:'74%'}, {duration:300, queue: false});
  f.animate({bottom:'92%'}, {duration:300, queue: true});
  f.animate({height:'85%'}, {duration:300, queue: false});
}
var instaMove = function() {
  $("#insta").addClass('animated slideOutLeft');
  setTimeout(instaWobble, 300);
}
var initInsta = function() {
  console.log('initiating insta!');
  $("#white").addClass('flash').fadeOut(2000);
  setTimeout(instaMove, 1700);
}

$("#bird").on('click', initTwit);
$("#insta").on('click', initInsta);