<?php
/**
 * Plugin Name: BlockBox
 * Plugin URI: https://github.com/EneMarine
 * Description: BlockBox
 * Author: EneMarine
 * Author URI: https://github.com/EneMarine
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BLOCKBOX_PATH', plugin_dir_path( __FILE__ ) );

/**
 * Update Checker
 */
require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/EneMarine/BlockBox',
	__FILE__,
	'blockbox'
);

/**
 * Block Initializer.
 */
require_once BLOCKBOX_PATH . 'src/init.php';
