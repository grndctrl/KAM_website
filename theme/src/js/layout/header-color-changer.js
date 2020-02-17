import { CoreModule, CoreScrollScene, app } from '../core'

class HeaderColorChanger extends CoreModule {
  init(options) {
    this.target = options.target || '.header-color-changer'
    this.elements = document.querySelectorAll(this.target)

    let scenes = []

    this.elements.forEach(element => {
      scenes.push(
        new CoreScrollScene({
          offset: () => {
            let offset = document.querySelector('.header-main').clientHeight / -2
            
            return offset
          },
          triggerElement: element,
          triggerHook: 0.00001,
          enter: (event) => {
            app.$emit('header:change-color', { color: element.getAttribute('data-to') })
            console.log("TCL: init -> header:change-color")
          },
          leave: (event) => {
            app.$emit('header:change-color', { color: element.getAttribute('data-from') })
            console.log("TCL: init -> header:change-color")
          }}
        )
      )
    })

    super.scrollScenes = scenes

    return super.init()
  }

}

export const headerColorChanger = new HeaderColorChanger()
