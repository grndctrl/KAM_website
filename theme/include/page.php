<?php
/**
 * Template Name: Page
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$templates = array( 'pages/' . $timber_post->post_name . '.twig', 'pages/page.twig' );

Timber::render($templates, $context);