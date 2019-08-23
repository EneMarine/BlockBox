<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


// Include PHP Render functions
include_once('accordion/index.php');

function add_blockbox_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'blockbox',
				'title' => __( 'BlockBox', 'blockbox' ),
			),
		)
	);
}
add_filter( 'block_categories', 'add_blockbox_category', 10, 2);

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function blockbox_block_assets() { // phpcs:ignore
	$version = '1.0.1';

	// Register block styles for both frontend + backend.
	wp_register_style(
		'blockbox-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		$version
	);

	wp_register_script(
		'blockbox-script-js', // Handle.
		plugins_url( 'dist/blocks.frontend.build.js', dirname( __FILE__ ) ), // Block style CSS.
		array( 'jquery' ), // Dependency to include the CSS after it.
		$version,
		true // Enqueue the script in the footer.
	);

	// Register block editor script for backend.
	wp_register_script(
		'blockbox-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-rich-text', 'wp-components', 'wp-compose', 'wp-format-library', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		$version,
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'blockbox-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		$version
	);

	// Enqueue editor styles webpack chunk.
	wp_enqueue_script(
		'blockbox-editor-styles-js-chunk', // Handle.
		plugins_url( '/dist/blocks.editor.js', dirname( __FILE__ ) ), // Blocks.editor.js: Chunk built with webpack. For more information, see this: https://github.com/webpack/webpack/issues/1967.
		array(), // Dependencies.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);
	// Enqueue block styles webpack chunk.
	wp_enqueue_script(
		'blockbox-style-styles-js-chunk', // Handle.
		plugins_url( '/dist/blocks.style.js', dirname( __FILE__ ) ), // Blocks.style.js: Chunk built with webpack. For more information, see this: https://github.com/webpack/webpack/issues/1967.
		array(), // Dependencies.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'blockbox/block-blockbox', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'blockbox-style-css',
			'script'         => 'blockbox-script-js',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'blockbox-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'blockbox-block-editor-css',
		)
	);

	wp_set_script_translations( 'blockbox-block-js', 'blockbox', BLOCKBOX_PATH . 'lang' );
}

// Hook: Block assets.
add_action( 'init', 'blockbox_block_assets' );
