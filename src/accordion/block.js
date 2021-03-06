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
const { InnerBlocks, RichText } = wp.editor;

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
registerBlockType( 'blockbox/accordion', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Accordéon' ), // Block title.
	icon: 'editor-kitchensink', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'blockbox', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'blockbox' ),
		__( 'BlockBox' ),
	],
	supports: {
		anchor: true, // Permet de définir un ID sur le bloc afin de créer une ancre
		align: [ 'wide', 'full' ],
		html: false,
	},
	attributes: {
		align: {
			type: 'string',
		},
		title: {
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
		return (
			<section className={ props.className } key={ props.clientId + '_section' }>
				<RichText
					tagName="h2"
					className="accordion__title"
					value={ props.attributes.title }
					onChange={ ( content ) => props.setAttributes( { title: content } ) }
					placeholder={ __( 'Add a title', 'blockbox' ) }
				/>
				<div className="accordion__content">
					<div className="accordion__text">
						{ typeof props.insertBlocksAfter !== 'undefined' ?
							<InnerBlocks
								renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
							/> :
							null
						}
					</div>
				</div>
			</section>
		);
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
	save: function() {
		return <InnerBlocks.Content />;
	},
} );
