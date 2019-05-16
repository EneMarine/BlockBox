/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

//import './block/block.js';
import './section/block.js';
import './intro/block.js';

wp.domReady( function() {
	const blocks = wp.blocks.getBlockTypes();
	const group = blocks.find( el => el.name == 'core/group' );
	if ( group ) {
		wp.blocks.unregisterBlockType( 'blockbox/section' );
	}
} );
