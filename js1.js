$(document).ready(function(){
	// DOUBLE RAINBOW!!!!
	setInterval(function () {$('#rainbowSmall').fadeIn(10000).delay(3500).fadeOut(10000), 1000});
	setInterval(function () {$('#rainbowBig').fadeIn(17000).delay(3500).fadeOut(10000), 1000});
	// DOUBLE RAINBOW!!!!
	//Lyrics timing
	$('#audio1')[0].play();
	setTimeout(function () {$('#v1').fadeIn(1000).delay(21000).fadeOut(1000)}, 11000);
	setTimeout(function () {$('#v2').fadeIn(1000).delay(19000).fadeOut(1000)}, 34500);
	setTimeout(function () {$('#v1').fadeIn(1000).delay(20000).fadeOut(1000)}, 56500);
	setTimeout(function () {$('#v4').fadeIn(1000).delay(18000).fadeOut(1000)}, 81000);
	setTimeout(function () {$('#v1').fadeIn(1000).delay(20000).fadeOut(1000)}, 102000);
	setTimeout(function () {$('#v6').fadeIn(1000).delay(18500).fadeOut(1000)}, 127000);
	setTimeout(function () {$('#v1').fadeIn(1000).delay(21000).fadeOut(1000)}, 147000);
	
	//Lyrics timing
	
	$(".members").hide();
	$("p").hide();
	$("li h2").click(function(){
		if ($(this).hasClass('odd')) {														 // if h2 is odd.
			if (!$(this).next().is(':visible')) 											// if <p> is not visible.
				$(this).next().next().hide('scale',[ "top", "center" ],100,'swing'), 		// h2:hover image hide if <p> is visible.
				$(this).next().show('bounce',{direction: "left"},1500,'easeOutElastic'),	 // show <p>.
				$(this).next().next().next().fadeTo('slow', 0.8);							// <p> background fade in.
			else 																			
				$(this).next().next().next().hide('drop',{direction:'right'},300), 			// <p> background fade out.
				$(this).next().hide('drop',{direction:'up'},1000), 							// hide <p>.
				$(this).fadeTo('fast', 0.4) 												// h2 button fade out to 0.4.
				
		} else {if (!$(this).next().is(':visible')) 										// if <p> is not visible , h2 is even.
				$(this).next().next().hide('scale',[ "top", "center" ],100,'swing'), 		// h2:hover image hide if <p> is visible.
				$(this).next().show('bounce',{direction: "right"},1500,'easeOutElastic'), 	// show <p>.
				$(this).next().next().next().fadeTo('slow', 0.8);					 		 // <p> background fade in.
			else
				$(this).next().hide('drop',{direction:'up'},1000), 							// hide <p>.
				$(this).fadeTo('fast', 0.4),												// h2 button fade out to 0.4.
				$(this).next().next().next().hide('drop',{direction:'right'},300) 			// <p> background fade out.
			}		
	});
	
	// hover in & hover out - (h2 button opacity, h2:hover appearing image).
	$( "li h2" ).hover(function() {
		if (!$(this).next().is(':visible'))
			$(this).fadeTo('fast', 1),
			$(this).next().next().show('scale',[ "top", "center" ],100,'swing');
	}, function() {
		if (!$(this).next().is(':visible'))
			$(this).fadeTo('fast', 0.4),
			$(this).next().next().hide('scale',[ "top", "center" ],100,'swing');
	});
});