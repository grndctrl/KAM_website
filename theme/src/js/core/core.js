import shortid from "shortid"
import throttle from "lodash/throttle"

import Vue from "vue"
import App from "./../../vue/core.vue"
import { scrollController } from "./scroll-controller"


class Core {
  constructor() {
    this.modules = []
    this.scenes = []
    this.app = new Vue({
      render: (h) => h(App)
    }).$mount(document.querySelector("#core"))
  }

  init() {
    this.modules.forEach((module) => {
      let init = module.init(module.options)

      if (!init.status) {
        console.error(init)
      }
    })

    app.$on("swup:content-replaced", () => {
      this.modules.forEach((module) => {
        if (module.reinit) {
          module.destroy()
          module.init(module.options)
        }
      })

      this.scenes.forEach((scene) => {
        if (scene.reinit) {
          scene.destroy()
          scene.init()
        }
      })
    })

    window.addEventListener(
      "resize",
      throttle((event) => {
        app.$emit("core:window-resized", event)
      }, 250)
    )

    window.addEventListener(
      "popstate",
      throttle((event) => {
        app.$emit("core:popstate", event)
      }, 250)
    )

    app.$emit('core:init')
  }

  attach(module, options = {}, reinit = false) {
    let id = shortid.generate()
    module.id = id
    module.reinit = reinit
    module.options = options

    this.modules.push(module)

    return id
  }

  detach(id) {
    if (shortid.isValid(id)) {
      this.modules.forEach((module) => {
        if (module.id === id) {
          module.destroy()
        }
      })
    }
  }
}

const core = new Core()
const app = core.app

export { core, app }
