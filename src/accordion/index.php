<?php
/**
 * Server-side rendering for the accordion.
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
  		'blockbox/accordion',
  		array(
  			'render_callback' => array( $this, 'rendering' ),
  		)
  	);

  }

  function rendering( $attributes, $content ){
    // To show InnerBlocks
    // Instead of doing save() => return null
    // Do : save() => return <InnerBlocks.Content />
    $render = '<section class="blockBox accordion">';
    $render .= '<h2 class="accordion__title">'. $attributes['title'] .'</h2>';
    $render .= '<div class="accordion__content">';
    $render .= '<div class="accordion__text">';
    $render .= $content;
    $render .= '</div>';
    $render .= '</div>';
    $render .= '</section>';

    return $render;
  }

}

new Blockbox_block();
