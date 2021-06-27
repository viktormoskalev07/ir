<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="google-site-verification" content="mSdIX6NeOnF38m_gc0_BkySXq-WwAqgrwxKZOIOy6f0" />

    <link rel="icon" type="image/png" href="<?php print get_stylesheet_directory_uri(); ?>/static/favicons/favicon-32x32.png" sizes="32x32"/>
    <link rel="icon" type="image/png" href="<?php print get_stylesheet_directory_uri(); ?>/static/favicons/favicon-16x16.png" sizes="16x16"/>
    <link rel="shortcut icon" href="<?php print get_stylesheet_directory_uri(); ?>/static/favicons/favicon.ico" type="image/x-icon"/>

    <?php wp_head(); ?>

    <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NHMZ4Q3');</script>
    <!-- End Google Tag Manager -->
    


  </head>
  <?php 
    require_once $_SERVER['DOCUMENT_ROOT']."/wp-content/themes/wptheme/libs/Mobile_Detect.php";
    $detect = new Mobile_Detect;
    global $isMobileOrTablet;
    $isMobileOrTablet = $detect->isMobile() || $detect->isTablet();
  ?>
  <body class='<?php if($isMobileOrTablet) echo 'touch' ?> heading-<?php the_field('title_color'); ?>'>
	 
	  <?php //if($isMobileOrTablet) echo 'touch'; ?>
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="link_titledata:application/octet-stream;base64,PCFET0NUWVBFIGh0bWw+CgoKPGh0bWwgbGFuZz1lbj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD11dGYtOD4KICA8dGl0bGU+bnM8L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgogIAoKICAKCiAgCiAgCgogIAoKICAKCiAgCgogIAoKICAKCiAgCgogIAoKICAKCiAgCgogIAoKICAKCiAgCgogIAoKICAKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKPC9ib2R5PjwvaHRtbD4K"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
 
 
 

     <header  class='header'  >
    
                           <div class="header__logo ">  
                              <a href='/' class='header__logo__link'>
                                <img src="21312" alt="12311">
                              </a>
                            <div>         
              <ul class='nav'> 
                <?php while(have_rows('header_menu', 'options')) { the_row(); ?>
               
                  <li class="nav__item  <?php if(have_rows('subitems')){ echo 'nav__submenu__container';};?> ">
                    <a href="<?php echo (get_sub_field('type') == 'internal' ? get_permalink(get_sub_field('internal_link')[0]) : get_sub_field('external_link')); ?>" <?php echo (get_sub_field('open_in_new_tab') == 'yes' ? 'target="_blank"' : ''); ?> class="nav__item__link  <?php echo (get_the_ID() == get_sub_field('internal_link')[0] ? " active" : "");?>  <?php the_sub_field('additional_classes'); ?>">
                         
                           <?php the_sub_field('link_title'); ?>
                         
                    </a>
                    <?php if (have_rows('subitems')) { ?>
                      <ul class="nav__submenu">
                        <?php while(have_rows('subitems')) { the_row(); ?>
                          <li class="nav__submenu__item">
                            <a <?php if (get_sub_field('new_tab') == 'yes') { echo 'target="_blank"'; } ?> href="<?php the_sub_field('link'); ?>"><?php the_sub_field('label'); ?></a>
                          </li>
                        <?php } ?>
                      </ul>
                    <?php } ?>
                  </li>
                <?php } ?> 
            </ul> 
            <div class="nav__bottom">
                   <button   class="nav__button contact-us-btn__js"> Contact Us  </button>  
                   <ul class="nav__social">
                        
                            <?php while(have_rows('social_links', 'options')) { the_row(); ?> 
                            <li class=" nav__social__item">
                              <a href="<?php the_sub_field('link'); ?>">
                                <img src="<?php the_sub_field('image'); ?>" alt="">
                              </a>
                            </li> 
				                  	<?php } ?>
                   </ul>
                </div>

            </nav>                
   </header>
	  
 

