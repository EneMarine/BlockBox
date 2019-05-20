if ( window.BlockBox === undefined ) {
	window.BlockBox = {
		blocks: {},
	};
}
window.BlockBox.blocks.accordion = {
	multiple: true,
};

( function( $ ) {
	$( '.accordion__content' ).hide();

	const Accordion = function( el, multiple ) {
		this.el = el || {};
		this.multiple = multiple || false;

		const links = this.el.find( '.accordion__title' );
		links.on( 'click', {
			el: this.el,
			multiple: this.multiple,
		}, this.dropdown );
	};

	Accordion.prototype.dropdown = function( e ) {
		const $el = e.data.el;
		const $this = $( this );
		const $next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass( 'open' );

		if ( ! e.data.multiple ) {
			$el.find( '.accordion__content' ).not( $next ).slideUp().parent().removeClass( 'open' );
		}
	};

	new Accordion( $( '.accordion.blockBox' ), window.BlockBox.blocks.accordion.multiple );
}( jQuery ) );
