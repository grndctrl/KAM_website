import zenscroll from 'zenscroll'
import { CoreModule } from '../core'

class ZenscrollManager extends CoreModule {
  init() {
    zenscroll.setup(400)

    return super.init()
  }

  scrollTo(target) {
    if (typeof(target) === 'number') {
      zenscroll.toY(target)
    } else if (typeof(target) === 'string') {
      try {
        zenscroll.to(document.querySelector(target))
      }
      catch {
        console.error('zenscrollManager: scroll target not found')
      }
    } else if (typeof(target) === 'object') {
      try {
        zenscroll.to(target)
      }
      catch {
        console.error('zenscrollManager: scroll target not found')
      }
    }
  }
}

export const zenscrollManager = new ZenscrollManager()
