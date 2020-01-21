import Swup from 'swup'
import axios from 'axios'
import { CoreModule, app } from '../core'
import { zenscrollManager } from './zenscroll-manager'

class SwupManager extends CoreModule {
  init() {
    this.swup = new Swup()

    this.swup.on('animationOutStart', () => {
      zenscrollManager.scrollTo(0)
    })

    this.swup.on('contentReplaced', () => {
      let scripts = swup.querySelectorAll('script')
      
      scripts.forEach((script) => {
        axios
          .get(script.getAttribute('src'))
          .then(function(response) {
            eval(response.data)
          })
          .catch(function(error) {
            console.log(error)
          })
      })

      app.$emit('swup:content-replaced', { current: swup })
    })

    return super.init()
  }
}

export const swupManager = new SwupManager()
