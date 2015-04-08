
jQuery(document).ready(function($) {

		    //$('#nav-main').scrollspy()
		    
		    // Localscrolling 
		    $('#nav-main, .brand').localScroll();
		    $('#news, .container').localScroll();
		    // var headerwrap = $('div#headerwrap');
		    
		    // headerwrap.delay(2000).animate({
		    // 	opacity: 1
		    // }, 'fast', function () {
		    // 	$(this)
		    // 	.css({
		    // 		'background-image': 'url(img/cover/management.jpg)'
		    // 	})
		    // 	.animate({opacity: 1});
		    // 	// .animate({
		    // 	// 	opacity: 1
		    // 	// }, 'fast', function(){
		    // 	// 	$(this)
		    // 	// 	.delay(5000)
		    // 	// 	.css({
		    // 	// 		// 'background-image': 'url(http://lorempixel.com/g/700/600/technics//Third-One!)'
		    // 	// 		'background-image': 'url(img/cover/literary.jpg)'
		    // 	// 	})
		    // 	// 	.animate({
		    // 	// 		opacity: 1
		    // 	// 	});
		    // 	// });
		    // });

		    // headerwrap.delay(12000).animate({
		    // 	opacity: 1
		    // }, 'fast', function () {
		    // 	$(this)
		    // 	.css({
		    // 		'background-image':'url(img/cover/literary.jpg)'
		    // 	})
		    // 	.animate({opacity: 1});
		    // });

		    // headerwrap.delay(22000).animate({
		    // 	opacity: 1
		    // }, 'fast', function () {
		    // 	$(this)
		    // 	.css({
		    // 		'background-image':'url(img/cover/technical.jpg)'
		    // 	})
		    // 	.animate({opacity: 1});
		    // });

$("iframe").load(function() {
	this.style.height = this.contentWindow.document.body.offsetHeight + "60px";
});



});



