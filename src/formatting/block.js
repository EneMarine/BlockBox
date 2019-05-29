const { __ } = wp.i18n; // Import __() from wp.i18n
const { createElement, Fragment } = window.wp.element;
const { registerFormatType, toggleFormat, applyFormat, removeFormat, getActiveFormat } = window.wp.richText;
const { RichTextToolbarButton, RichTextShortcut, InspectorControls, PanelColorSettings } = window.wp.editor;

const subSup = [
	{
		name: 'sup',
		title: __( 'Superscript', 'blockbox' ),
		character: '.',
		icon: 'arrow-up-alt',
	},
	{
		name: 'sub',
		title: __( 'Subscript', 'blockbox' ),
		character: ',',
		icon: 'arrow-down-alt',
	},
];
const colors = [
	{
		name: 'color',
		title: __( 'Selection Text Color', 'blockbox' ),
	},
	{
		name: 'background-color',
		title: __( 'Selection Background Color', 'blockbox' ),
	},
];

subSup.forEach( ( { name, title, character, icon } ) => {
	const type = `blockbox/${ name }`;

	registerFormatType( type, {
		title,
		tagName: name,
		className: null,
		edit( { isActive, value, onChange } ) {
			const onToggle = () => onChange( toggleFormat( value, { type } ) );

			return (
				createElement( Fragment, null,
					createElement( RichTextShortcut, {
						type: 'primary',
						character,
						onUse: onToggle,
					} ),
					createElement( RichTextToolbarButton, {
						title,
						icon,
						onClick: onToggle,
						isActive,
						shortcutType: 'primary',
						shortcutCharacter: character,
						className: `toolbar-button-with-text toolbar-button__blockbox-${ name }`,
					} )
				)
			);
		},
	} );
} );

colors.forEach( ( { name, title } ) => {
	const type = `blockbox/${ name }`;

	registerFormatType( type, {
		title,
		tagName: 'span',
		className: name,
		attributes: {
			style: 'style',
		},
		edit( { isActive, value, onChange } ) {
			let activeColor;

			if ( isActive ) {
				const activeFormat = getActiveFormat( value, type );
				const style = activeFormat.attributes.style;

				activeColor = style.replace( new RegExp( `^${ name }:\\s*` ), '' );
			}

			return (
				createElement( InspectorControls, null,
					createElement( PanelColorSettings, {
						title,
						initialOpen: true,
						colorSettings: [
							{
								value: activeColor,
								onChange: ( color ) => {
									if ( color ) {
										onChange( applyFormat( value, {
											type,
											attributes: {
												style: `${ name }:${ color }`,
											},
										} ) );
										return;
									}

									onChange( removeFormat( value, type ) );
								},
								label: __( 'Apply colour to the selected text.', 'blockbox' ),
							},
						],
					} )
				)
			);
		},
	} );
} );
