import { CoreModule, CoreScrollScene, app } from '../core'

class Footer extends CoreModule {
  init() {
    this.toggles = document.querySelectorAll('.toggle-footer')

    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', this.onToggle)
    })

    let scenes = []
    scenes.push(
      new CoreScrollScene({
        offset: 16,
        triggerElement: '.footer-main',
        enter: (event) => {
          app.$emit('footer:scrolled-to')
        },
        leave: (event) => {
          app.$emit('footer:scrolled-from')
        },
        reinit: true
      })
    )
    super.scrollScenes = scenes

    return super.init()
  }

  destroy() {
    this.toggles.forEach((toggle) => {
      toggle.removeEventListener('click', this.onToggle)
    })

    return super.destroy()
  }

  onToggle() {}
}

export const footer = new Footer()
