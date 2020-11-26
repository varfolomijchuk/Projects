;
(function ($) {

    $(document).ready(function () {
    	$('.square30-inner .w20').on('click', function() {
            let filter_name = $(this).data('color');
            console.log(filter_name);

            $('.square30-inner h2').css('color', filter_name );
           /* $('.images-list .images-list__item').hide();*/

           /* if (filter_name == 'all') {
                $('.images-list .images-list__item').show();
            } else {
                $('.images-list [data-type="' + filter_name + '"]').show();
           */ 
        });

        $('.test .test-block').on('click', function () {
        	$('.test .test-block').addClass('hide').removeClass('border');
        	$(this).removeClass('hide').addClass('border');

        });

        $('.text-inner .img-arrow').on('click', function() {
        	let increase = $(this).data('size');
        	let fontsize = parseInt($('.text-inner p').css('font-size'));
        	if(fontsize < 40) {
        		$('.text-inner p').css('font-size', (fontsize + increase) + "px");
        	}
        	console.log(fontsize);
        });
        $('.text-inner .img-arrow2').on('click', function() {
        	let increase = $(this).data('size');
        	let fontsize = parseInt($('.text-inner p').css('font-size'));
        	if(fontsize > 10) {
        		$('.text-inner p').css('font-size', (fontsize - increase) + "px");
        	}
        });

        let m = [1, 2, 'f', 56, 43];
        for(let i = 0; i < m.length; i++){
        	$('.loop').append('<p>'+ m[i] +' Nixy9 ne 9sno</p>');
        };
     		
		let obj = {
		 	'0': 1, 
			'float': 2, 
			'color': ['red', 'blue', 'grey']		}  
		console.log(obj);

		for(let key in obj){
			console.log(key , ': ' , obj[key]);
			
		} 

	/*	$('.plane-inner').slick({
		  dots: true,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slideToScroll: 1,
		});

	 	$(".all").on("click", function(e){
	 		e.preventDefault();
	 		$(".none").toggleClass("hide"); 

	 	});*/



	 	$('.plane-blocks img').on('click', function() {
	 		/*let corectsrc = $(this).attr("data-src");*/
	 		let corectsrc = $(this).data('src');
	 		$('.plane-inner__img img').attr("src", corectsrc);
	 		/*console.log(corectsrc);*/

	 		$('.big-image .inner').css('background-image', 'url("' + img_url +'")');
	 	});


	 		let next=0;
	 	$('.plane-inner__button2').on('click', function() {
	 		let col = $('.plane-blocks').length;
	 		$('.plane-blocks').each(function(index) {
			}); 		
	 		if (next <= col) {
	 			let corectImg = $('.plane-blocks img').get(next);
	 			next++;
	 			$('#mainimg').attr('src', $(corectImg).data('src') );	 	
	 		}
	 	});

	 	$('.plane-inner__button1').on('click', function() {
	 		let col = $('.plane-blocks').length;
	 		$('.plane-blocks').each(function(index) {
			}); 		
	 		if (next >= 0 ) {
	 			let corectImg = $('.plane-blocks img').get(next);
	 			next--;
	 			$('#mainimg').attr('src', $(corectImg).data('src') );	 	
	 		} 
	 		
	 	});

	 	$('.form .form-select2')addClass('.none');

	});

}(jQuery));