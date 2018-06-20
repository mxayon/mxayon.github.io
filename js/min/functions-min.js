$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.fibo-front').css({
    'transform' : 'translate(0px, -'+ wScroll /90 +'%)'
  });

});
