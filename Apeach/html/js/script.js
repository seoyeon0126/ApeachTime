$(function() {
	
	// 슬라이드
	
	var ww = $(window).width(); 
	// alert(ww);
	
	/* *resize 화면창을늘릴수록 
	(window) width값이 바뀐다. */
	
	$(".cover>div").css("width",ww+"px");
	$(".cover>div").not(":eq(0)").css("left",ww+"px")
	
	$(window).resize(function() {
		var ww = $(window).width(); 
		$(".cover>div").css("width",ww+"px");
		$(".cover>div").not(":eq(0)").css("left",ww+"px")
	});
	
	var clear = setInterval(slide, 3000);
	
	// 슬라이드 0-1-2-3
	
	now = 0;
	imgs = 3;
	
	function slide() {
		var slideImg = 0;
		$(".cover>div").not(":eq("+now+")").css("left",ww+"px")
		now = now == imgs ? 0 : now+= 1;
		$(".cover>div").eq(now-1).animate({left:-ww+"px"},1000);
		$(".cover>div").eq(now).animate({left:"0px"},1000,
		function() {
			$("cover_div").not(":eq("+now+")").css("left",ww+"px");
		})
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}
	

	// prev버튼 클릭시 슬라이드 3-2-1-0
	
	function slide_left() {
		var imgs = 0;	// 지역함수이기에 변수를 꼭 써줄것
			$(".cover>div").not(":eq("+now+")").css("left",-ww+"px");
			now = now == imgs ? 3 : now-=1;
			if( now==3 ) {
				$(".cover>div").eq(0).animate({left:ww+"px"},1000);
			}
			else {
				$(".cover>div").eq(now+1).animate({left:ww+"px"},1000);
			}
			$(".cover>div").eq(now).animate({left:"0px"},1000,
			function() {
				$(".cover>div").not(":eq("+now+")").css("left",-ww+"px");
			})	// left 쓸때 "" 꼭 붙여줄것★★★
			$(".bullet>li").removeClass("hover");
			$(".bullet>li").eq(now).addClass("hover");
		}
	
	// 버튼, 블릿기호 클릭시 자동 슬라이드 clear
	
	$(".prev, .next, .bullet>li").click(function() {
		clearInterval(clear);
	});
	
	// 버튼 클릭시 함수호출
	
	$(".next").click(function() {
		slide();
	});
	$(".prev").click(function() {
		slide_left();
	});
	
	// scrolltop값으로 나타내기
	
	$(".labindex").hide()
	
	$(window).scroll(function() {
		
		var scrollTop = $(this).scrollTop();
		// alert(scrollTop)
		
		if(scrollTop>=200) {
			$(".labindex").fadeIn('slow');
		}
		if(scrollTop>=1200){
		setInterval( numbering, 20 );	
		}
		
	});
	
	// 넘버
	
		number = 0;
		
		function numbering() {
			if( number<300 ) {
				number++;
				$(".img>p").text(number);
			}
			else return false 
		}
		/* setInterval( numbering, 20 );
		값을 if문으로 다시 올려준다음에 스크롤탑값을 줄 것 */
		
	//상품 슬라이드 
	// next 0-1-2-3....
	
	function product_next() {
		$(".product>div>ul").animate({left:"-320px"},800,
		function() {
			$(".product>div>ul>li:first").appendTo
			(".product>div>ul");	
			$(".product>div>ul").css("left","0px");
		})
	}
	
	var clear1 = setInterval(product_next,3000);
	
	/* $("새요소").appendTo("요소선택");	
	선택한 요소의 마지막 위치에 새 요소를 추가합니다 */
	
	$(".product_next").click(function() {
		clearInterval(clear1);
		product_next();
		return false;
	});
	
	/* *return false : a태그를 방지하기 위해서 
	스크립트에서 사용이 필요하다. */
	
	//prev 8-7-6-5-4...
	
	function product_prev() {
		$(".product>div>ul>li:last").prependTo
		(".product>div>ul");
		$(".product>div>ul").css("left","-320px");
		$(".product>div>ul").animate({left : "0px"},800);
	}
	
	$(".product_pre").click(function() {
		clearInterval(clear1);
		product_prev();	
		/* ;(세미콜론) 은 자바스크립트에서 있거나 없어도 작동은 가능하다.
		하지만 넣어주는게 더 좋은 편이다. */
		return false;
	});
	
	/* $("새요소").prependTo("요소선택");	
	선택한 요소의 앞 위치에 새 요소를 추가합니다 */
	
	/* html 에 이미지를 꼭 넣어서 작업할 것 */
	
		
	// 블릿 기호
	
	$(".bullet>li").click(function() {
		var bulletNumber = $(this).index();
		// alert(bulletNumber);
		if ( now == bulletNumber ) return;
		else {
			$(".cover>div").not(":eq("+now+")").css("left",ww+"px");
			$(".cover>div").eq(now).animate({"left":-ww+"px"},1000);	// 1초를 추가해줄것 
			$(".cover>div").eq(bulletNumber).animate({"left":"0px"},1000,
			function() {
				$(".cover>div").not(":eq("+bulletNumber+")").css(
				"left",ww+"px");
			})
			$(".bullet>li").removeClass("hover");
			$(".bullet>li").eq(bulletNumber).addClass("hover");
			now = bulletNumber;
		}
	});
	
	
	
	
	
	
	
	
	
});