$(function(){
	var n;
	$(".tab").click(function(e){
		e.preventDefault();
		$("#mobile").addClass("active")
		$(".dim").addClass("active")
		$("body").addClass("static")
		$(".wrapper").addClass("active")
		$(".tab").addClass("active")
	});
	$(".dim").click(function(){
		$("#mobile").removeClass("active")
		$(".dim").removeClass("active")
		$("body").removeClass("static")
		$(".wrapper").removeClass("active")
		$(".tab").removeClass("active")
	});
	$(window).resize(function(){
		n=$(window).width();
		if(n>720){
			//mobile에 active클래스가 있을 경우에 제거!!
			if($("#mobile").hasClass("active") == true){
				$(".dim").trigger("click");
			}
		}
	});
});
