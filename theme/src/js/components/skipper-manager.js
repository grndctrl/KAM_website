import { CoreModule, config } from "../core"
import throttle from "lodash/throttle"
import Swiper from "swiper"

class SkipperManager extends CoreModule {
  init() {
    this.containers = document.querySelectorAll(".skipper")
    this.swipers = []

    this.containers.forEach((container) => {

      const swiper = new Swiper(container, {
        speed: 100,
        spaceBetween: config.gutter,
        slidesPerView: 1,
        centeredSlides: true,
        loop: false,
        effect: 'fade',
        allowTouchMove: false
      })

      container.swiper = swiper

      container.addEventListener('mousemove', throttle(this.onMouseMove.bind(container), 50))
      container.addEventListener('touchmove', throttle(this.onTouchMove.bind(container), 50), {passive: true})

      this.swipers.push(swiper)
    })

    return super.init()
  }

  destroy() {
    this.containers.forEach((container) => {
      container.removeEventListener('mousemove', throttle(this.onMouseMove.bind(container), 50))
      container.removeEventListener('touchmove', throttle(this.onTouchMove.bind(container), 50), {passive: true})
    })

    return super.destroy()
  }

  onMouseMove(event) {
    let numSlides = this.swiper.slides.length
    let regionWidth = this.clientWidth / numSlides

    let x = Math.max(0, event.offsetX)

    let currSlide = Math.floor(x / regionWidth)
    
    this.swiper.slideTo(currSlide)
  }

  onTouchMove(event) {
    let numSlides = this.swiper.slides.length
    let regionWidth = this.clientWidth / numSlides

    let x = Math.max(0, event.touches[0].clientX)

    let currSlide = Math.floor(x / regionWidth)
    
    this.swiper.slideTo(currSlide)
  }
}

export const skipperManager = new SkipperManager()
