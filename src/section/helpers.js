const optionsPosition = [ {
	value: 'top-left',
	label: 'Top Left',
},
{
	value: 'top-center',
	label: 'Top Center',
},
{
	value: 'top-right',
	label: 'Top Right',
},
{
	value: 'center-left',
	label: 'Center Left',
},
{
	value: 'center-center',
	label: 'Center Center',
},
{
	value: 'center-right',
	label: 'Center Right',
},
{
	value: 'bottom-left',
	label: 'Bottom Left',
},
{
	value: 'bottom-center',
	label: 'Bottom Center',
},
{
	value: 'bottom-right',
	label: 'Bottom Right',
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
