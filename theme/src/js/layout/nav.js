import { app } from '../core'
import { CoreModule } from '../core/core-module'
import { CoreEventListener } from '../core/core-event'

class Nav extends CoreModule {
  init(options) {
    this.element = document.querySelector('.nav-main')
    this.header = document.querySelector('.header-main')
    this.addEventListeners()

    this.toggles = document.querySelectorAll('.toggle-menu')
    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', this.onToggle.bind(toggle))
    })

    this.closers = document.querySelectorAll('.close-menu')
    this.closers.forEach((closer) => {
      closer.addEventListener('click', this.onClose)
    })

    return super.init()
  }

  destroy() {
    super.destroy()

    this.toggles.forEach((toggle) => {
      toggle.removeEventListener('click', this.onToggle)
    })

    this.closers.forEach((closer) => {
      closer.removeEventListener('click', this.onClose)
    })
  }

  onToggle(event) {
    this.classList.add('triggered')
    app.$emit('nav:toggle-menu', event)
  }

  onClose(event) {
    app.$emit('nav:close-menu', event)
  }

  addEventListeners() {
    let events = []
    
    events.push(
      new CoreEventListener('nav:toggle-menu', () => {
        this.toggleMenu()
      })
    )

    
    events.push(
      new CoreEventListener('nav:close-menu', () => {
        this.closeMenu()
      })
    )

    
    events.push(
      new CoreEventListener('core:window-resized', () => {
        if (window.innerWidth >= 1024) {
          this.closeMenu()
        }
      })
    )

    super.events = events
  }

  closeMenu() {
    if (this.element.classList.contains('animating')) {
      return
    }

    if (this.element.classList.contains('active')) {
      this.element.classList.remove('active')
      this.header.classList.remove('nav-active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    }
  }

  toggleMenu() {
    if (this.element.classList.contains('animating')) {
      return
    }

    if (this.element.classList.contains('active')) {
      this.element.classList.remove('active')
      this.header.classList.remove('nav-active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    } else {
      this.element.classList.add('active')
      this.header.classList.add('nav-active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    }
  }
}

export const nav = new Nav()
