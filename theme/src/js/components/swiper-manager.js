import { CoreModule, config } from "../core"
import Swiper from 'swiper'

class SwiperManager extends CoreModule {
  init() {
    this.containers = document.querySelectorAll(".swiper")
    this.swipers = []
    this.windowWidth = window.innerWidth

    this.containers.forEach((container) => {
      let target = container

      if (target.classList.contains('quote-swiper')) {
        target = target.querySelector('.swiper-container')
      }
      const prevButton = container.querySelector(".swiper-prev") != null ? container.querySelector(".swiper-prev") : false
      const nextButton = container.querySelector(".swiper-next") != null ? container.querySelector(".swiper-next") : false
      const bullets = container.querySelector(".swiper-bullets") != null ? container.querySelector(".swiper-bullets") : false

      
      let options = {
        slidesPerView:
          container.getAttribute("swiper-slides-per-view") != "" && container.getAttribute("swiper-slides-per-view") != null
            ? container.getAttribute("swiper-slides-per-view")
            : 1,
        loop: container.getAttribute("swiper-loop") === "true" ? true : false,
        effect: container.getAttribute("swiper-effect") === "fade" ? "fade" : "slide",
        offset: container.getAttribute("swiper-offset") === "true" ? true : false,
        center: container.getAttribute("swiper-center") === "false" ? false : true,
        allowTouchMove: container.getAttribute("swiper-allow-touch-move") === "false" ? false : true,
        spaceBetween: container.getAttribute("swiper-space-between") === "false" ? false : true
      }
      
      console.log("TCL: SwiperManager -> init -> container.getAttribute(swiper-space-between)", container.getAttribute("swiper-space-between"))
      let spaceBetween = config.siteOffset
      if (options.spaceBetween) {
        spaceBetween = config.gutterMobile
        console.log("TCL: SwiperManager -> init -> spaceBetween", spaceBetween)
      }

      const swiper = new Swiper(target, {
        speed: 400,
        spaceBetween: spaceBetween,
        slidesPerView: options.slidesPerView,
        centeredSlides: options.center,
        allowTouchMove: options.allowTouchMove,
        loop: options.loop,
        effect: options.effect,
        threshold: 10,
        navigation: {
          prevEl: prevButton,
          nextEl: nextButton
        },
        pagination: {
          el: bullets,
          clickable: true
        },
        slidesOffsetBefore: () => {
          if (options.offset) return config.siteOffset
          return false
        },
        slidesOffsetAfter: () => {
          if (options.offset) return config.siteOffset
          return false
        },
        breakpoints: {
          768: {
            spaceBetween: config.gutterTablet,
            slidesOffsetBefore: () => {
              if (options.offset) {
                let offset = (window.innerWidth - 2 * config.siteOffset + config.gutter) * (1 / 12) + config.siteOffsetTablet
                return offset
              } else {
                return 0
              }
            },
            slidesOffsetAfter: () => {
              if (options.offset) {
                let offset = (window.innerWidth, config.siteMaxWidth - 2 * config.siteOffset + config.gutter) * (1 / 12) + config.siteOffsetTablet
                return offset
              } else {
                return 0
              }
            }
          },
          1024: {
            spaceBetween: config.gutter,
            slidesOffsetBefore: () => {
              if (options.offset) {
                let offset = (window.innerWidth - 2 * config.siteOffset + config.gutter) * (1 / 12) + config.siteOffset
                return offset
              } else {
                return 0
              }
            },
            slidesOffsetAfter: () => {
              if (options.offset) {
                let offset = (window.innerWidth, config.siteMaxWidth - 2 * config.siteOffset + config.gutter) * (1 / 12) + config.siteOffset
                return offset
              } else {
                return 0
              }
            }
          },
          2000: {
            spaceBetween: config.gutter,
            slidesOffsetBefore: () => {
              if (options.offset) {
                let offset = (((window.innerWidth - (((2000) - (2 * config.siteOffset))) * (10 / 12))) / 2);
                return offset
              } else {
                return 0
              }
            },
            slidesOffsetAfter: () => {
              if (options.offset) {
                let offset = (((window.innerWidth - (((2000) - (2 * config.siteOffset))) * (10 / 12))) / 2);
                return offset
              } else {
                return 0
              }
            }
          }
        }
      })

      // if (prevButton) {
      //   prevButton.addEventListener('click', this.prev.bind(swiper))
      // }

      // if (nextButton) {
      //   nextButton.addEventListener('click', this.next.bind(swiper))
      // }

      swiper.container = container
      swiper.prevButton = prevButton
      swiper.nextButton = nextButton

      this.swipers.push(swiper)
    })

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const swiperManager = new SwiperManager()
