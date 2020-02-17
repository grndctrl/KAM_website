<?php
// Register post types

// Register Custom Post Type global
function create_global_cpt() {

	$labels = array(
		'name' => _x( 'Globals', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'global', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Globals', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'global', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'global Archives', 'textdomain' ),
		'attributes' => __( 'global Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent global:', 'textdomain' ),
		'all_items' => __( 'All Globals', 'textdomain' ),
		'add_new_item' => __( 'Add New global', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New global', 'textdomain' ),
		'edit_item' => __( 'Edit global', 'textdomain' ),
		'update_item' => __( 'Update global', 'textdomain' ),
		'view_item' => __( 'View global', 'textdomain' ),
		'view_items' => __( 'View Globals', 'textdomain' ),
		'search_items' => __( 'Search global', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into global', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this global', 'textdomain' ),
		'items_list' => __( 'Globals list', 'textdomain' ),
		'items_list_navigation' => __( 'Globals list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Globals list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'global', 'textdomain' ),
		'description' => __( 'Global site Globals', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => 'dashicons-megaphone',
		'supports' => array('title'),
		'taxonomies' => array(),
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => false,
		'show_in_nav_menus' => false,
		'can_export' => true,
		'has_archive' => false,
		'hierarchical' => false,
		'exclude_from_search' => true,
		'show_in_rest' => true,
		'publicly_queryable' => false,
		'capability_type' => 'post',
	);
	register_post_type( 'global', $args );

}

create_global_cpt();
