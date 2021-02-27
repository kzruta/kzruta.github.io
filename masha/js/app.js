$(document).ready(function() {

	$(".question__item").click(function() {
		$this = $(this), 
		$this.hasClass("question__item_opened") ? ($this.removeClass("question__item_opened"),
		$this.find(".question__item_body").slideUp()) : ($this.addClass("question__item_opened"),
		$this.find(".question__item_body").slideDown())
	});

});

