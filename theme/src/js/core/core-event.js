import { app } from './index.js'

class CoreEventListener {
  constructor(name, callback) {
    this.name = name
    this.callback = callback

    app.$on(this.name, this.callback)
  }
}

export { CoreEventListener }
