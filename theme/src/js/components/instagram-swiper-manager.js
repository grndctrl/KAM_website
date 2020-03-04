import { CoreModule, config, CoreEventListener } from "../core"
import throttle from "lodash/throttle"
import Swiper from 'swiper'
import anime from 'animejs'

class InstagramSwiper extends CoreModule {
  init() {
    this.containers = Array.from(document.querySelectorAll(".instagram-swiper"))
    this.containers = this.containers.concat(Array.from(document.querySelectorAll(".logo-swiper")))
    this.swipers = []

    this.containers.forEach((container) => {
      let slidesPerView = 2
      if (container.classList.contains('logo-swiper')) {
        slidesPerView = 4
      } 
      const swiper = new Swiper(container, {
        speed: 4000,
        allowTouchMove: false,
        spaceBetween: config.gutter,
        slidesPerView: slidesPerView,
        centeredSlides: false,
        loop: true,
        autoplay: {
          delay: 0
        },
        breakpoints: {
          768: {
            spaceBetween: config.gutterTablet,
            slidesPerView: 4
          },
          1024: {
            spaceBetween: config.gutter,
            slidesPerView: 6
          }
        }
      })

      swiper.container = container

      this.swipers.push(swiper)
    })

    let events = []

    events.push(
      new CoreEventListener(
        'core:window-resized', () => {
          this.swipers.forEach(swiper => {
            swiper.autoplay.start();
          })
        }
      )
    )

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const instagramSwiper = new InstagramSwiper()
