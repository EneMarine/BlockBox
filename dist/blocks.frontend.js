(function($) {
  $('.accordion__content').hide();

	var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.accordion__title');
			links.on('click', {
					el: this.el,
					multiple: this.multiple
			}, this.dropdown);
	}

	Accordion.prototype.dropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
					$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
					$el.find('.accordion__content').not($next).slideUp().parent().removeClass('open');
			};
	}
	var accordion = new Accordion( $('.accordion.blockBox' ), false);

})(jQuery);
