jQuery(function() {
	var nav = jQuery('.navfix');
	//スクロール位置
	var navTop = 300;
	//ナビゲーションの高さ（シャドウの分だけ足してます）
	var navHeight = nav.height()+10;
	var showFlag = false;
	nav.css('top', -navHeight+'px');
	//ナビゲーションの位置まできたら表示
	jQuery(window).scroll(function () {
		var winTop = jQuery(this).scrollTop();
		if (winTop >= navTop) {
			if (showFlag == false) {
				showFlag = true;
				nav
					.addClass('fixed')
					.stop().animate({'top' : '0px'}, 200);
			}
		} else if (winTop <= navTop) {
			if (showFlag) {
				showFlag = false;
				nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
					nav.removeClass('fixed');
				});
			}
		}
	});
	
});

jQuery(function () {
  if(jQuery('#navControl a').attr('class') == 'close'){
    jQuery('#globalNav').css('display', 'none');
	jQuery('#globalNav_top').css('display', 'none');
  }
    jQuery('#navControl a').click(function() {
    jQuery('#globalNav').slideToggle();
	 jQuery('#globalNav_top').slideToggle();
    jQuery(this).toggleClass('close');
  });  
});