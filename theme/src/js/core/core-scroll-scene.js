import { scrollController } from './scroll-controller'
import ScrollMagic from 'scrollmagic'

class CoreScrollScene {
  constructor(options) {
    options = options || {}
    this.triggerElement = options.triggerElement || null

    this.offset =
      options.offset ||
      (() => {
        return 0
      })

    if (typeof this.offset == 'number') {
      this.offset = () => {
        return options.offset
      }
    }
    this.triggerHook = options.triggerHook || 1
    this.enter = options.enter || (() => {})
    this.leave = options.leave || (() => {})
    this.once = options.once || false
  }

  init() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: this.triggerElement,
      triggerHook: this.triggerHook,
      offset: this.offset()
    })

    this.scene.on('enter', () => {
      this.enter()
      if (this.once) {
        this.destroy()
      }
    })
    this.scene.on('leave', this.leave)

    console.log(this.scene)
    scrollController.addScene(this.scene)
  }

  destroy() {
    scrollController.removeScene(this.scene)
  }
}

export { CoreScrollScene }
