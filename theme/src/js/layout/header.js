import { CoreModule, CoreEventListener, CoreScrollScene, app } from '../core'

class Header extends CoreModule {
  init(options) {
    this.element = options.element

    if (this.element) {
      let scenes = []
      scenes.push(
        new CoreScrollScene({
          offset: () => {
            return 20
          },
          enter: (event) => {
            app.$emit('header:pin')
            this.pin()
          },
          leave: (event) => {
            app.$emit('header:unpin')
            this.unpin()
          }}
        )
      )
      super.scrollScenes = scenes
    } else {
      return { id: this.id, status: false, message: 'no .header-main element' }
    }

    return super.init()
  }

  pin() {
    this.element.classList.add('pinned')
  }

  unpin() {
    this.element.classList.remove('pinned')
  }
}

export const header = new Header()
