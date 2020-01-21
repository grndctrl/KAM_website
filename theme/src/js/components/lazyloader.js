import { CoreModule, CoreEventListener } from '../core'
import lozad from 'lozad'

class Lazyloader extends CoreModule {
  init(options) {
    this.target = options.target || '.lazy'

    this.observer = lozad(this.target, {
      loaded: this.unblur
    })
    this.observer.observe()

    const events = []
    events.push(
      new CoreEventListener(
        'lazyload-images',
        (event) => {
          this.observer.observe()
        }
      )
    )
    super.eventListeners = events

    return super.init()
  }

  unblur(element) {
    element.classList.add('loaded')
  }

  destroy() {
    return super.destroy()
  }
}

export const lazyloader = new Lazyloader()
