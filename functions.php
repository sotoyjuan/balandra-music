<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-js',
		get_stylesheet_directory_uri() . '/dist/scripts/index.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/index.js' ),
		true
	);

	wp_enqueue_style(
		'vuejs-wordpress-theme-starter-css',
		get_stylesheet_directory_uri() . '/dist/styles.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/styles.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );
add_theme_support('post-thumbnails');

function my_excerpt_length($length)
{
  return 35;
}
add_filter('excerpt_length', 'my_excerpt_length');


// Custom post types

function album_cpt() {
  $args = array(
    'public'       => true,
    'show_in_rest' => true,
    'label'        => 'Albums',
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  register_post_type( 'album', $args );
}
add_action( 'init', 'album_cpt' );
add_post_type_support('album', 'custom-fields');

function music_sheet_cpt() {
  $args = array(
    'public'       => true,
    'show_in_rest' => true,
    'label'        => 'Music Sheets',
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  register_post_type('musicsheet', $args);
}
add_action('init', 'music_sheet_cpt');
add_post_type_support('musicsheet', 'custom-fields');

function gallery_cpt()
{
  $args = array(
    'public'       => true,
    'show_in_rest' => true,
    'label'        => 'Gallery Items',
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  register_post_type('gallery', $args);
}
add_action('init', 'gallery_cpt');
add_post_type_support('gallery', 'custom-fields');

function shows_cpt()
{
  $args = array(
    'public'       => true,
    'show_in_rest' => true,
    'label'        => 'Shows',
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  register_post_type('show', $args);
}
add_action('init', 'shows_cpt');
add_post_type_support('show', 'custom-fields');

function past_shows_cpt()
{
  $args = array(
    'public'       => true,
    'show_in_rest' => true,
    'label'        => 'Past Shows',
    'supports' => array('title', 'editor', 'thumbnail'),
  );
  register_post_type('past_show', $args);
}
add_action('init', 'past_shows_cpt');
add_post_type_support('past_show', 'custom-fields');