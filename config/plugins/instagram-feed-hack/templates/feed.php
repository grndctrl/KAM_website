<?php
/**
 * Custom Feeds for Instagram Main Template
 * Creates the wrapping HTML and adds settings as attributes
 *
 * @version 2.1 Instagram Feed by Smash Balloon
 *
 */
// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}
$feed_styles = SB_Instagram_Display_Elements::get_feed_style( $settings ); // already escaped
$sb_images_style = SB_Instagram_Display_Elements::get_sbi_images_style( $settings ); // already escaped
$image_resolution_setting = $settings['imageres'];
$cols_setting = $settings['cols'];
$num_setting = $settings['num'];
$icon_type = $settings['font_method'];

if ( $settings['showheader'] && ! empty( $posts ) && $settings['headeroutside'] ) {
	include sbi_get_feed_template_part( 'header', $settings );
}
if ( ! in_array( 'ajaxPostLoad', $flags, true ) ) { 
			// var_dump($posts);
?>
			
		<div class="instagram-swiper swiper-container" swiper-freemode="true" swiper-slides-per-view="6" swiper-loop="true">
      <div class="swiper-wrapper">


        <?php foreach ($posts as $post) { 
					
					$image = $post['images']['standard_resolution']['url'];
					$link = $post['link'];
					?>

          <div class="swiper-slide relative">
						<div class="w-full">
							<a target="_blank" href="<?php echo $link ?>">
								<figure class="strict square cover">
									<img src="<?php echo $image ?>">
								</figure>
							</a>
						</div>
          </div>

        <?php } ?>

      </div>
    </div>
			
<?php } ?>

</div>