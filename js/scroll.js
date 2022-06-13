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