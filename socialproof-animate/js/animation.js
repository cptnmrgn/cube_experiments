var wobble = function() {
  $("#tweet").removeClass('slideOutLeft');
  $('#tweet').addClass('animated wobble');
  $('.feed').removeClass('hide');
  $('.feed').animate({height:'85%'}, 300);
}

var move = function() {
  $("#tweet").addClass('animated slideOutLeft');
   setTimeout(wobble, 400);
   
}
var initTwit= function() {
  console.log('initiated!');
  $(this).addClass('tweet');
  setTimeout(move, 1000);
}


var instaWobble = function() {
  $("#insta").removeClass('slideOutLeft');
  $('#insta').addClass('animated wobble');
  $('.feed2').removeClass('hide');
  $('.feed2').animate({height:'85%'}, 300);
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

$("#tweet").on('click', initTwit);
$("#insta").on('click', initInsta);