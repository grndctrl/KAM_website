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
        mode:
          wrapper.getAttribute("data-slider-mode") != null && wrapper.getAttribute("data-slider-mode") != ""
            ? wrapper.getAttribute("data-slider-mode")
            : "carousel",
        items: wrapper.getAttribute("data-slider-items") > 0 ? wrapper.getAttribute("data-slider-items") : 1,
        speed: wrapper.getAttribute("data-slider-speed") > 0 ? wrapper.getAttribute("data-slider-speed") : 400
      }

      let prevButton = wrapper.querySelector(".slider-prev") != null ? wrapper.querySelector(".slider-prev") : false

      let nextButton = wrapper.querySelector(".slider-next") != null ? wrapper.querySelector(".slider-next") : false

      console.log("TCL: TinySliderManager -> init -> wrapper.querySelector('.slider-prev')", wrapper.querySelector(".slider-prev"))

      const slider = tns({
        container: container,
        mode: options.mode,
        items: options.items,
        speed: options.speed,
        gutter: config.gutter,
        autoWidth: options.autoWidth,
        controls: true,
        prevButton: prevButton,
        nextButton: nextButton,
        loop: false,
        center: true,
        nav: false,
        autoplayButtonOutput: false,
        touch: true,
        mouseDrag: true,
        onInit: () => {
          wrapper.style.opacity = 1
        }
      })

      this.sliders.push(slider)
    })

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const tinySliderManager = new TinySliderManager()
