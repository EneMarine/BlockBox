/**
* BLOCK: Section
*
* Registering a basic block with Gutenberg.
* Simple block, renders and saves the same content without any interactivity.
*/

//  Import CSS.
import './style.scss';
import './editor.scss';

// Import JS parts
import editSection from './edit';
import {
	imageClassName,
	sectionClassName,
} from './helpers.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const {
	InnerBlocks,
} = wp.editor;

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
		html: false,
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
		bgImage: {
			type: 'object',
			default: null,
		},
		bgVideo: {
			type: 'object',
			default: null,
		},
		bgOptions: {
			type: 'object',
			default: {
				position: 'center-center',
				stretch: true,
				fixed: false,
				opacity: 0.5,
				opacityVideo: 0.5,
			},
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
	edit: editSection,

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
		const {
			bgColor,
			txtColor,
			bgImage,
			bgVideo,
			bgOptions,
		} = props.attributes;

		const blockStyle = {
			backgroundColor: bgColor,
			color: txtColor,
		};

		return (
			<section className={
				sectionClassName( props.className, bgVideo, bgImage )
			}
				style={
				blockStyle
			} >
				{
					!! bgImage && <div
						className={
							imageClassName( bgOptions )
						}
						style={
							{
								backgroundImage: bgImage ? 'url("' + bgImage.image.url + '")' : undefined,
								opacity: bgOptions.opacity,
							}
						}
					/>
				}
				{
					!! bgVideo && <div className="section__video"
						style={
							{
								opacity: bgOptions.opacityVideo,
							}
						} > <video muted loop autoPlay >
							<source src={
								bgVideo.video
							}
								type={
								bgVideo.mime
							}
							/> </video></div >
				}
				<div className="editorContent">
					<InnerBlocks.Content />
				</div>
			</section>
		);
	},
	deprecated: [ {
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

		save: function( props ) {
			const blockStyle = {
				backgroundColor: props.attributes.bgColor,
				color: props.attributes.txtColor,
			};
			return ( <section className={
				props.className
			}
				style={
				blockStyle
			} >
				<div className="editorContent" >
					<InnerBlocks.Content />
				</div> </section>
			);
		},
	} ],
} );
