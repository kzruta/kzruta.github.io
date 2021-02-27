$(document).ready(function(){
  $('[data-modal=consultation]').on("click", function(){
      $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks').fadeOut('slow');
  });

	function valideForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 3
				},
				phone: "required",
				email: {
					required: true,
					email: true,
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите минимум 3 символа!")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен почтовый адрес"
				}
			}
		});
	};
	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#consultation-static');

	$('input[name=phone]').mask("+7 (999) 999-99-99");


	$('form#consultation-form, form#consultation-static').submit(function(e) {
		e.preventDefault();
		if($('.valid').length > 2){
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
				}).done(function() {
				$(this).find("input").val("");
				$('#consultation').fadeOut();
				$('.overlay, #thanks').fadeIn('slow');
				$('form').trigger('reset');
			}); // end ajax
    
		}
		else
		{
			 return false;
		}
	});


});