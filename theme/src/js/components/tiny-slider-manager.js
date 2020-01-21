import { CoreModule, config } from "../core"
import { tns } from "tiny-slider/src/tiny-slider"

class TinySliderManager extends CoreModule {
  init() {
    this.wrappers = document.querySelectorAll(".slider-wrapper")
    this.sliders = []
    this.windowWidth = window.innerWidth

    this.wrappers.forEach((wrapper) => {
      const container = wrapper.querySelector(".slider-container")
      const loader = wrapper.querySelector(".slider-loader")

      let options = {
        autoWidth: wrapper.getAttribute("data-slider-auto-width") === "true" ? true : false,
        loop: wrapper.getAttribute("data-slider-loop") === "true" ? true : false,
        interactive: wrapper.getAttribute("data-slider-interactive") === "false" ? false : true,
        autoplay: wrapper.getAttribute("data-slider-autoplay") > 0 ? true : false,
        autoplayTimeout: wrapper.getAttribute("data-slider-autoplay") > 0 ? wrapper.getAttribute("data-slider-autoplay") : 2000,
        center: wrapper.getAttribute("data-slider-center") === "false" ? false : true,
        mode:
          wrapper.getAttribute("data-slider-mode") != null && wrapper.getAttribute("data-slider-mode") != ""
            ? wrapper.getAttribute("data-slider-mode")
            : "carousel",
        items: wrapper.getAttribute("data-slider-items") > 0 ? wrapper.getAttribute("data-slider-items") : 1,
        speed: wrapper.getAttribute("data-slider-speed") > 0 ? wrapper.getAttribute("data-slider-speed") : 400
      }

      let prevButton = wrapper.querySelector(".slider-prev") != null ? wrapper.querySelector(".slider-prev") : false

      let nextButton = wrapper.querySelector(".slider-next") != null ? wrapper.querySelector(".slider-next") : false

      const slider = tns({
        container: container,
        mode: options.mode,
        items: options.items,
        speed: options.speed,
        gutter: config.gutter,
        autoWidth: options.autoWidth,
        autoplay: options.autoplay,
        autoplayTimeout: options.autoplayTimeout,
        controls: false,
        loop: options.loop,
        center: options.center,
        nav: false,
        autoplayButtonOutput: false,
        touch: options.interactive,
        mouseDrag: options.interactive,
        onInit: () => {
          wrapper.style.opacity = 1
        }
      })

      if (nextButton) {
        slider.nextButton = nextButton
        slider.nextButton.addEventListener('click', this.next.bind(slider))
      }

      if (prevButton) {
        slider.prevButton = prevButton
        slider.prevButton.addEventListener('click', this.prev.bind(slider))
      }

      this.sliders.push(slider)
    })

    return super.init()
  }

  prev() {
    this.goTo('prev')
  }

  next() {
    this.goTo('next')
    
  }

  destroy() {
    this.sliders.forEach(slider => {
      if (slider.prevButton != undefined) {
        slider.prevButton.removeEventListener('click', this.prev.bind(slider))
      }

      if (slider.nextButton != undefined) {
        slider.nextButton.removeEventListener('click', this.next.bind(slider))
      }
    })

    return super.destroy()
  }
}

export const tinySliderManager = new TinySliderManager()
