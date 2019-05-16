<?php
/**
 * Server-side rendering for the block.
 *
 * @since   1.0.0
 */

class Blockbox_block {

  function __construct() {
    add_filter( 'init',  array( $this, 'register_blocks' ), 10, 2 );
  }

  function register_blocks(){
    if ( ! function_exists( 'register_block_type' ) ) return;

  	register_block_type(
  		'blockbox/block',
  		array(
  			'render_callback' => array( $this, 'rendering' ),
  		)
  	);

  }

  function rendering( $attributes, $content ){
    // To show InnerBlocks
    // Instead of doing save() => return null
    // Do : save() => return <InnerBlocks.Content />
    return $content;
  }

}

new Blockbox_block();
