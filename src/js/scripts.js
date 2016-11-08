jQuery(document).ready(function($) {

// MOBILE MENU

	$('.hamburger').click(function(event) {
		$('nav').toggleClass('active-menu');
		var h = $('nav').height();
		var $target = $('.hamburger');
		var $body = $('body');

		if ($target.css('margin-top') === '0px') {
			$target.css('margin-top', h + 'px');
			$body.css('margin-top', h + 'px');
		} else {
			$target.css('margin-top', '0px');
			$body.css('margin-top', '0px');
		}
	});

// SLIDER

var $sliderItem = $('#slider > li'),
	$paginationItem = $('#slider-pagination > li');

var $prev;

$paginationItem.each(function(index, el) {
	$(this).click(function(event) {
		event.preventDefault();
		$paginationItem.removeClass('pagination-active');
		$(this).addClass('pagination-active');
		if (!$prev) {
			$prev = $('#slider > li.slider-active');
		}
		$prev.removeClass('slider-active');
		$sliderItem.eq(index).addClass('slider-active animation-start slide-in')
			.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass('animation-start slide-in');
				$prev = $(this);
			});
	});
});

// ScrollTo

var $menu = $('#main-menu > li > a, .arrow-down');

console.log($menu);
$menu.click(function(event) {
	event.preventDefault();
	var $link = $(this).attr('href');
	console.log($link);
	$.scrollTo($link, {
		duration: 1000
	});
});




});