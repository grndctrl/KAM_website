import anime from "animejs"
import { CoreScrollScene, CoreEventListener } from "../core"
import { AnimModule } from "./anim-module"

class AnimTextIn extends AnimModule {
  init(options) {
    this.target = options.target || ".anim-text-in"
    this.elements = document.querySelectorAll(this.target)
    this.lastWindowWidth = window.innerWidth

    let events = []
    events.push(
      new CoreEventListener('core:window-resized', () => {
        if (this.lastWindowWidth > 2000) {
          this.resizeSpans()
        } else if (this.lastWindowWidth >= 768 && window.innerWidth < 768) {
          this.resizeSpans()
        } else if (this.lastWindowWidth < 768 && window.innerWidth >= 768) {
          this.resizeSpans()
        }
        this.lastWindowWidth = window.innerWidth
      })
    )

    this.initElements()
    this.initScenes()

    return super.init()
  }

  initElements() {
    this.elements.forEach((element) => {
      let lines = element.innerHTML.split("<br>")
      let spans = []
      lines.forEach((line) => {
        let span = document.createElement("span")
        span.classList.add("block", "w-full")
        span.innerHTML = line.trim()
        spans.push(span)
      })
      element.innerHTML = ""
      spans.forEach((span) => {
        element.appendChild(span)
      })
      element.spans = element.querySelectorAll("span")

      element.style.opacity = 1
    })
  }

  initScenes() {
    const scenes = []

    this.elements.forEach((element) => {
      const options = this.getOptionsFromAttributes(element)

      scenes.push(
        new CoreScrollScene({
          triggerElement: element,
          triggerHook: options.hook / 100,
          enter: (event) => {
            setTimeout(() => {
              this.revealSpan(element.spans, options, 0, element.spans.length)
            }, 400)
          },
          leave: (event) => {},
          once: options.once
        })
      )
    })

    super.scrollScenes = scenes
  }

  resizeSpans() {
    this.elements.forEach(element => {
      element.spans.forEach(span => {
        span.style.height = 'auto'
      })
    })
  } 

  revealSpan(spans, options, index, num) {
    let h = spans[index].clientHeight

    anime({
      targets: spans[index],
      translateY: [h * 0.5, 0],
      opacity: [0.5, 1],
      height: [0, h],
      easing: "easeOutCirc",
      duration: 200,
      delay: 0,
      complete: () => {
        if (index + 1 < num) {
          this.revealSpan(spans, options, index + 1, num)
        }
      }
    })
  }

  destroy() {
    return super.destroy()
  }
}

export const animTextIn = new AnimTextIn()
