import anime from "animejs"
import { CoreScrollScene, CoreEventListener } from "../core"
import { AnimModule } from "./anim-module"

class AnimUnderlineIn extends AnimModule {
  init(options) {
    this.target = options.target ? options.target : ".anim-underline"
    this.elements = document.querySelectorAll(this.target)

    this.elements.forEach((element) => {
      let color = window.getComputedStyle(element).color
      let linearGradient = "linear-gradient(" + color + " 0%, " + color + " 100%)"
      element.style.backgroundImage = linearGradient

      element.addEventListener("mouseenter", this.onMouseEnter.bind(element))
      element.addEventListener("mouseleave", this.onMouseLeave.bind(element))
    })

    return super.init()
  }

  destroy() {
    this.elements.forEach((element) => {
      element.removeEventListener("mouseenter", this.onMouseEnter.bind(element))
      element.removeEventListener("mouseleave", this.onMouseLeave.bind(element))
    })
  }

  onMouseEnter() {
    let color = window.getComputedStyle(this).color
    let linearGradient = "linear-gradient(" + color + " 0%, " + color + " 100%)"
    this.style.backgroundImage = linearGradient

    this.classList.add("triggered")
    this.classList.add("active")
  }

  onMouseLeave() {
    this.classList.remove("active")
  }
}

export const animUnderlineIn = new AnimUnderlineIn()
