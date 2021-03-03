$(document).ready(function() {

	/*Аккордеон*/
	$(".question__item").click(function() {
		$this = $(this),
		$this.hasClass("question__item_opened") ? ($this.removeClass("question__item_opened"),
		$this.find(".question__item_body").slideUp()) : ($this.addClass("question__item_opened"),
		$this.find(".question__item_body").slideDown())
	});

	/*Галерея картинок fancybox*/

	$(".gallery-main__thumb-wrap").fancybox({
    fixed : false,
    autoCenter : true
	});

	/*Анимация wow*/
	$(".about__wrap, .info-block__set, .lessons__text, .lessons__wrap, .gallery-main__wrap, .accordion").addClass("wow");


	/*Видео */
	$(".video, .play").click( function(){
    $url = $(this).data("url");
    $('.video_mess .video-block').html($url);
    $('.video_mess').fadeIn(200);
    $('.fon-black').fadeIn(200);
});

	$(".clos, .overlay, .video_mess .clos").click(function(){
		$('..fon-black').fadeOut(100);
		$("body").css("overflow-y","scroll");
		$('.video_mess').fadeOut(100);
		$('.video_mess .video-block').html(" ");
	});


	/*Модальное окно*/

	$('[data-modal=consultation]').on("click", function(){
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function(){
			$('.overlay, #consultation, #thanks').fadeOut('slow');
	});

	$("#consultation-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true,
			}
		},
		messages: {
			messageage: {
				required: "Пожалуйста, введите возраст ученика",
			},
			name: {
				required: "Пожалуйста, введите свое имя",
				minlength: jQuery.validator.format("Введите минимум 3 символа!")
			},
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Неправильно введен почтовый адрес"
			}
		}
	});

	$("#consultation-form").submit(function(evt) {
		evt.preventDefault();
		if($('.valid').length == 2){
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				$('#consultation').fadeOut();
				$('.overlay, #thanks').fadeIn('slow');
				$('#consultation-form').trigger('reset');
		});
	};
		return false;
	});

});


/**/
$(document).ready(function() {

	/*Модальное окно*/

	
	$("#form-qu").validate({
		rules: {
			messageage: {
				required: true
			},
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true,
			}
		},
		messages: {
			messageage: {
				required: "Пожалуйста, введите возраст ученика",
			},
			name: {
				required: "Пожалуйста, введите свое имя",
				minlength: jQuery.validator.format("Введите минимум 3 символа!")
			},
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Неправильно введен почтовый адрес"
			}
		}
	});



	$("#form-qu").submit(function(evt) {
		evt.preventDefault();
		if($('.valid').length >= 3){
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find("input").val("");
				$('.overlay, #thanks').fadeIn('slow');
				$('#form-qu').trigger('reset');
		});
	};
		return false;
	});

});
