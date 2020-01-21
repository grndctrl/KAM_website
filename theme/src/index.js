import './css/style.css'

import { core } from './js/core'
import { header, nav, footer, swupManager, zenscrollManager } from './js/layout'
import { images, tinySliderManager, lazyloader } from './js/components'

;(function() {
  core.attach(header, { element: document.querySelector('.header-main') })
  core.attach(nav, { element: document.querySelector('.nav-main') })
  core.attach(footer, { element: document.querySelector('.footer-main') })
  core.attach(swupManager, {}, false)
  core.attach(zenscrollManager, {}, false)

  core.attach(tinySliderManager, {}, true)
  core.attach(lazyloader, { target: '.lazy' }, true)
  core.attach(images, {}, true)

  core.init()
})()
