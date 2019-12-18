$(function(){
	var n = 0; //
	var t= 0;
	var firstFlag = false;

	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800, function(){
			firstFlag= true;
			$(window).trigger("scroll")
		})
	}, 10);

	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(firstFlag == false){
			return;
		}

		if(t < $("#service").offset().top-200){
			n=0;
		}
		else if (t < $("#portfolio").offset().top-200) {
			n=1;
		}
		else if (t < $("#about").offset().top-200) {
			n=2;
		}
		else if (t < $("#team").offset().top-200) {
			n=3;
		}
		else if (t < $("#contact").offset().top-200) {
			n=4;
		}
		else{
			n=5;
		}
		// console.log(n);

		if(n == 0){
			$("header").addClass("active");
			if(t > 150){
				$("header").addClass("fixed");
			}
			else {
				$("header").removeClass("fixed");
			}
		}
		else{
			$("section").eq(n-1).addClass("active");
		}
		$(".navi li").removeClass("active")
		$(".navi li").eq(n).addClass("active")
	});
	$(window).trigger("scroll"); // Hoisting Error

	//checkbox 관련된 쿼리
	$("label[for=check]").click(function(){
		$(this).toggleClass("active");
	});
	$("#check").click(function(){ // 2019-10-23
		if($(this).prop("checked")){
			$("label[for=check]").addClass("active");
		}
		else{
			$("label[for=check]").removeClass("active");
		}
	});

	//quick_up
	$(".quick_up").click(function(e){
		e.preventDefault();
		firstFlag= true;
		$("html").animate({scrollTop : 0}, 800, function(){
			$(window).trigger("scroll")
	});

})
});
