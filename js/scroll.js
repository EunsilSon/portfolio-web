/* 메뉴바 FIXED */
if (jQuery(window).width() > 0) {
  jQuery(window).on("scroll",function(ev){
    if(jQuery(window).scrollTop() > 80 ) { /* 해당 높이를 벗어나면 fixed 클래스 추가 */
      jQuery('.menu_box').addClass('fixed');
    }
    else{
      jQuery('.menu_box').removeClass('fixed');
    }
    return false;
  });
}

/* 해당위치로 스크롤링 */
$(function(){
  var headerHight = 80;
  $("a[href^=#]").click(function() {
    var speed = 500; // 스크롤 속도
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? "div" : href);
    var position = target.offset().top - headerHight; // 헤더 높이 만큼 위치를 조절함
    $("html, body").animate({scrollTop : position}, speed, 'swing');
    return false;
    });
});