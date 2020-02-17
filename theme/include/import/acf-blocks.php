<?php
function acf_blocks_init()
{
    // Bail out if function doesn’t exist.
    if (! function_exists('acf_register_block')) {
        return;
    }

    /********
     * COMMON *
     ********/

    acf_register_block(array(
      'name'            => 'h1',
      'title'           => __('H1 Heading', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'h1_callback',
      'category'        => 'text',
      'icon'            => 'editor-textcolor',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'h3',
      'title'           => __('H3 Heading', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'h3_callback',
      'category'        => 'text',
      'icon'            => 'editor-textcolor',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'paragraph',
      'title'           => __('Paragraph', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'paragraph_callback',
      'category'        => 'text',
      'icon'            => 'editor-alignleft',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'body',
      'title'           => __('Body', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'body_callback',
      'category'        => 'text',
      'icon'            => 'editor-alignleft',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'links',
      'title'           => __('Links', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'links_callback',
      'category'        => 'text',
      'icon'            => 'admin-links',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'quote',
      'title'           => __('Quote', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'quote_callback',
      'category'        => 'text',
      'icon'            => 'editor-quote',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'quoteslider',
      'title'           => __('Quote Slider', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'quoteslider_callback',
      'category'        => 'text',
      'icon'            => 'editor-quote',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'image',
      'title'           => __('Image', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'image_callback',
      'category'        => 'images',
      'icon'            => 'format-image',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'skippingimages',
      'title'           => __('Skipping Images', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'skippingimages_callback',
      'category'        => 'images',
      'icon'            => 'format-gallery',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'postsslider',
      'title'           => __('Posts Slider', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'postsslider_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'bikeslider',
      'title'           => __('Bike Slider', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'bikeslider_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'logofeed',
      'title'           => __('Logo Feed', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'logofeed_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'facebookevents',
      'title'           => __('Facebook Events', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'facebookevents_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'instagramfeed',
      'title'           => __('Instagram Feed', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'instagramfeed_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'contactdetails',
      'title'           => __('Contact Details', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'contactdetails_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));

    acf_register_block(array(
      'name'            => 'spacer',
      'title'           => __('Spacer', 'grndctrl'),
      'description'     => __('', 'grndctrl'),
      'render_callback' => 'spacer_callback',
      'category'        => 'other',
      'icon'            => '',
      // 'post_types'      => array('post', 'page'),
      'mode'            => 'edit',
      'supports'        => array(
        'mode' => false,
        'align' => false
      )
    ));
}

function h1_callback($block, $content = '', $is_preview = true)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/text-h1.twig', $context);
}

function h3_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/text-h3.twig', $context);
}

function paragraph_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/text-paragraph.twig', $context);
}

function body_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/text-body.twig', $context);
}

function links_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/text-links.twig', $context);
}

function quote_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;
    
    Timber::render('blocks/common/text-quote.twig', $context);
}

function quoteslider_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/home/quote-swiper.twig', $context);
}

function image_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/image.twig', $context);
}

function skippingimages_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/image-skipper.twig', $context);
}

function postsslider_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/verhalen-swiper.twig', $context);
}

function bikeslider_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/fietsen/fietsen-swiper.twig', $context);
}

function logofeed_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/fietsen/logo-feed.twig', $context);
}

function facebookevents_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/home/facebook-events.twig', $context);
}

function instagramfeed_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/home/instagram-feed.twig', $context);
}

function contactdetails_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/contact-details.twig', $context);
}

function spacer_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview;

    Timber::render('blocks/common/spacer.twig', $context);
}


function my_acf_block_render_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();

    // Store block values.
    $context['block'] = $block;

    // Store field values.
    $context['fields'] = get_fields();

    // Store $is_preview value.
    $context['is_preview'] = $is_preview;

    // Render the block.
    Timber::render('blocks/slider-basic.twig', $context);
}

acf_blocks_init();
