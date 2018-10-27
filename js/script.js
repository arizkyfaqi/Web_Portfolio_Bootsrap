$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap element 
	var elementTujuan = $(tujuan);
	//console.log(elementTujuan);

	$('html, body').animate({

		scrollTop: elementTujuan.offset().top - 60

	}, 1000, 'easeInOutExpo');

	e.preventDefault();

});


// parallax
$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.8 +'%)'
	});


	//portfolio
	if (wScroll > $('.portfolio').offset().top -250) {
		$('.portfolio .img-thumbnail').addClass('muncul');
	}

});