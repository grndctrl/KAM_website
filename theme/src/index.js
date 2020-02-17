import './css/style.css'

import { core } from './js/core'
import { header, nav, footer, swupManager, zenscrollManager, headerColorChanger } from './js/layout'
import { images, swiperManager, skipperManager, lazyloader, instagramSwiper, fietsenManager, splashScreen } from './js/components'
import { animUnderlineIn, animTextIn, animMoveIn } from './js/animations'

;(function() {
  core.attach(header, { element: document.querySelector('.header-main') })
  core.attach(nav, { element: document.querySelector('.nav-main') })
  core.attach(footer, { element: document.querySelector('.footer-main') })
  core.attach(swupManager, {}, false)
  core.attach(zenscrollManager, {}, false)
  core.attach(headerColorChanger, { target: '.header-color-changer' }, true)

  core.attach(swiperManager, {}, true)
  core.attach(instagramSwiper, {}, true)
  core.attach(skipperManager, {}, true)
  core.attach(lazyloader, { target: '.lazy' }, true)
  core.attach(images, {}, true)
  core.attach(fietsenManager, {}, true)
  core.attach(splashScreen, {}, false)

  core.attach(animUnderlineIn, {}, true)
  // core.attach(animTextIn, {}, true)
  core.attach(animMoveIn, {}, true)
  
  core.init()
})()
