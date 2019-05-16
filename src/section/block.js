/**
* BLOCK: Section
*
* Registering a basic block with Gutenberg.
* Simple block, renders and saves the same content without any interactivity.
*/

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const { InnerBlocks, InspectorControls, PanelColorSettings } = wp.editor;

/**
* Register: aa Gutenberg Block.
*
* Registers a new block provided a unique name and an object defining its
* behavior. Once registered, the block is made editor as an option to any
* editor interface where blocks are implemented.
*
* @link https://wordpress.org/gutenberg/handbook/block-api/
* @param  {string}   name     Block name.
* @param  {Object}   settings Block settings.
* @return {?WPBlock}          The block, if it has been successfully
*                             registered; otherwise `undefined`.
*/
registerBlockType( 'blockbox/section', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Section' ), // Block title.
	icon: 'editor-table', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'blockbox', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'blockbox' ),
		__( 'BlockBox' ),
	],
	supports: {
		anchor: true, // Permet de définir un ID sur le bloc afin de créer une ancre
		align: [ 'wide', 'full' ],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
		bgColor: {
			type: 'string',
		},
		txtColor: {
			type: 'string',
		},
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  * @param {Object} props Information sur le bloc
  * @return {string} Html
  */
	edit: function( props ) {
		//props.className correspond à wp-block-blockbox-section
		const blockStyle = {
			backgroundColor: props.attributes.bgColor,
			color: props.attributes.txtColor,
		};

		return ( [
			<InspectorControls key={ props.clientId + '_inspector' }>
				<PanelColorSettings
					title={ 'Couleurs' }
					colorSettings={ [ {
						value: props.attributes.bgColor,
						label: __( 'Background Color' ),
						onChange: ( colorValue ) => props.setAttributes( { bgColor: colorValue } ),
					},
					{
						value: props.attributes.txtColor,
						label: __( 'Text Color' ),
						onChange: ( colorValue ) => props.setAttributes( { txtColor: colorValue } ),
					} ] }
				/>
			</InspectorControls>,
			<section className={ props.className } style={ blockStyle } key={ props.clientId + '_section' }>
				{ typeof props.insertBlocksAfter !== 'undefined' ?
					<InnerBlocks /> :
					null
				}
			</section>,
		] );
	},

	/**
* The save function defines the way in which the different attributes should be combined
* into the final markup, which is then serialized by Gutenberg into post_content.
*
* The "save" property must be specified and must be a valid function.
*
* @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
* @param {Object} props Information sur le bloc
* @return {string} Html
*/
	save: function( props ) {
		const blockStyle = {
			backgroundColor: props.attributes.bgColor,
			color: props.attributes.txtColor,
		};
		return (
			<section className={ props.className } style={ blockStyle }>
				<InnerBlocks.Content />
			</section>
		);
	},
} );
