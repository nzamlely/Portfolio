$(function () {
    gallerySlider();
	pageSlider();
	gridSwitcher();
	progressBar();
	progressBarCorner();
	rombRotateBar();
});
function gallerySlider() {
	var count = $("#slider-box > img").length;
    var slider = 1;
    var speed = 5000;
    var fadeSpeed = 2000;
    var loop;
    start();
    $("#1").fadeIn(fadeSpeed);
    $('.right').click(right);
    $('.left').click(left);
    $('#slider-box').hover(stop,start);
    function start(){
        loop = setInterval(next, speed)
    };
    function stop(){
        clearInterval(loop)
    };
    function right() {
        stop();
        next();
        start();
        return false;
    };
    function left() {
        stop();
        prev();
        start();
        return false;
    };
    function prev() {
        slider--
        if (slider < 1) {
            slider = count
        };
        $("#slider-box > img").fadeOut(fadeSpeed);
        $("#" + slider).fadeIn(fadeSpeed);
    }
    function next() {
        slider++;
        if (slider > count) {
            slider = 1
        };
        $("#slider-box > img").fadeOut(fadeSpeed);
        $("#" + slider).fadeIn(fadeSpeed);
    }
};
function pageSlider(){
	$(".page-slider-about").on("click", function(){
       $(this).addClass('active');
       $("html, body").animate({scrollTop:$('#page-slider-about-point').position().top - 60}, 2000);
    });
	$(".page-slider-portfolio").on("click", function(){
        $(this).addClass("active");
       $("html, body").animate({scrollTop:$("#page-slider-portfolio").position().top - 60}, 2000);
    });
};
function gridSwitcher(){
	$(".filter-nav > ul > li").on("click", function(){
		$(".filter-nav > ul > .filter").removeClass("active");
		$(this).addClass("active");
	})
	var gridButton = $(".filter-nav").find(".grid");
	gridButton.on("click", function (){
		$(".filter-nav > ul > li").removeClass("romb-active-grid");
		$(this).addClass("grid-active-grid");
		$(".gallery-box").children().rotate({animateTo:0});
		$(".romb-form").removeClass().addClass("porfolio-gallery");
	});
	var rombButton = $(".filter-nav").find(".romb");
	rombButton.on("click", function (){
		$(".filter-nav > ul > li").removeClass("grid-active-grid");
		$(this).addClass("romb-active-grid");
		$(".porfolio-gallery").removeClass().addClass("romb-form");
		$(".gallery-box").find("li").each(function (index) {
			$(this).addClass("romb-form" + index)	
		});
		$(".gallery-box").children().rotate({animateTo:45});
	})
};
function progressBar(){
	var html = 65;
	var responsive = 85;
	var ios = 95;
	var js = 77;
	$( ".progressbar-html" ).progressbar({
      value: html
	});
	$( ".progressbar-responsive" ).progressbar({
      value: responsive
    });
	$( ".progressbar-ios" ).progressbar({
      value: ios
    });
	$( ".progressbar-js" ).progressbar({
      value: js
    });
	function widthCount(n){
		var width = $(".ui-progressbar-value").eq(n).css("width");
		var arr = width.split("");
		arr.pop();
		arr.pop();
		var num = (+arr.join("")) - 43 + "px";
		return num;
	};
	var htmlValue = widthCount(0);
	var responsiveValue = widthCount(1)
	var iosValue = widthCount(2);
	var jsValue = widthCount(3);
	$(".html-value").css("left", htmlValue);
	$(".responsive-value").css("left", responsiveValue);
	$(".ios-value").css("left", iosValue);
	$(".js-value").css("left", jsValue);
	$(".html-value").html(html+"%");
	$(".responsive-value").html(responsive+"%");
	$(".ios-value").html(ios+"%");
	$(".js-value").html(js+"%");
};
function progressBarCorner() {
	$(".progressbar").corner("bevel right 15px");
	$(".ui-progressbar-value").corner("bevel right 15px");
}
function rombRotateBar() {
	// input progress value
	var designSkillsPercent = 95;
	var developSkillsPercent = 77;
	var marketingSkillsPercent = 62;
	var consultingSkillsPercent = 99;
	var brandingSkillsPercent = 85;
	// rotate forms
	$(".romb-progressbar-box").find(".romb").each(function(){
		$(this).rotate(45);		
	});
	$(".romb-progressbar-box").find(".progress").each(function(){
		$(this).rotate(45);		
	});
	// set progress value
	var designSkillsValue = valueCount(designSkillsPercent) + "px";
	var developSkillsValue = valueCount(developSkillsPercent) + "px";
	var marketingSkillsValue = valueCount(marketingSkillsPercent) + "px";
	var consultingSkillsValue = valueCount(consultingSkillsPercent) + "px";
	var brandingSkillsValue = valueCount(brandingSkillsPercent) + "px";
	$(".progress-pr-design").css("top", designSkillsValue);
	$(".progress-pr-develop").css("top", developSkillsValue);
	$(".progress-pr-marketing").css("top", marketingSkillsValue);
	$(".progress-pr-consulting").css("top", consultingSkillsValue);
	$(".progress-pr-branding").css("top", brandingSkillsValue);
	// set value icons
	$(".design-value").html(designSkillsPercent);
	$(".develop-value").html(developSkillsPercent);
	$(".marketing-value").html(marketingSkillsPercent);
	$(".consulting-value").html(consultingSkillsPercent);
	$(".branding-value").html(brandingSkillsPercent);
	function valueCount(value){
		var progressCount = value * 1.48;
		var progress = 91 - progressCount;
		return progress; 	
	}
};
