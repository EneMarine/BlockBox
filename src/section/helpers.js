const { __ } = wp.i18n; // Import __() from wp.i18n

const optionsPosition = [ {
	value: 'top-left',
	label: __( 'Top Left', 'blockbox' ),
},
{
	value: 'top-center',
	label: __( 'Top Center', 'blockbox' ),
},
{
	value: 'top-right',
	label: __( 'Top Right', 'blockbox' ),
},
{
	value: 'center-left',
	label: __( 'Center Left', 'blockbox' ),
},
{
	value: 'center-center',
	label: __( 'Center Center', 'blockbox' ),
},
{
	value: 'center-right',
	label: __( 'Center Right', 'blockbox' ),
},
{
	value: 'bottom-left',
	label: __( 'Bottom Left', 'blockbox' ),
},
{
	value: 'bottom-center',
	label: __( 'Bottom Center', 'blockbox' ),
},
{
	value: 'bottom-right',
	label: __( 'Bottom Right', 'blockbox' ),
},
];

const imageClassName = ( bgOptions ) => {
	let name = 'section__image';
	name += ' section__image--' + bgOptions.position;
	if ( bgOptions.stretch || bgOptions.fixed ) {
		name += ' section__image--stretched';
	}
	if ( bgOptions.fixed ) {
		name += ' section__image--fixed';
	}
	return name;
};

const sectionClassName = ( className, bgVideo, bgImage ) => {
	const newClass = 'wp-block-blockbox-section--bg';
	if ( bgVideo || bgImage ) {
		return className ? `${ className } ${ newClass }` : newClass;
	}
	return className;
};

export {
	optionsPosition,
	imageClassName,
	sectionClassName,
};
