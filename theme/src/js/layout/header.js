import { CoreModule, CoreEventListener, CoreScrollScene, app } from "../core"
import anime from 'animejs'

class Header extends CoreModule {
  init(options) {
    this.element = options.element
    this.lastScrollPos = window.scrollY
    this.scrollingUp = false
    this.scrollOffset = 0
    this.logo = this.element.querySelector('.branding')

    this.logo.addEventListener('click', () => {
      app.$emit('header:logo-clicked', {})
    })
    
    if (this.element) {
      let scenes = []
      scenes.push(
        new CoreScrollScene({
          offset: () => {
            return 100
          },
          enter: (event) => {
            app.$emit("header:pin")
            this.pin()
          },
          leave: (event) => {
            app.$emit("header:unpin")
            this.unpin()
          }
        })
      )
      super.scrollScenes = scenes

      let events = []
      events.push(
        new CoreEventListener("header:change-color", (event) => {
          this.element.classList.remove("header-blue")
          this.element.classList.remove("header-orange")
          this.element.classList.remove("header-white")

          let color = "header-" + event.color
          this.element.classList.add(color)
        })
      )

      // events.push(
      //   new CoreEventListener("swup:content-replaced", (event) => {
      //     this.element.classList.remove("header-blue")
      //     this.element.classList.remove("header-orange")
      //     this.element.classList.remove("header-white")

          
      //   })
      // )

      events.push(
        new CoreEventListener("core:init", (event) => {
          setTimeout(()=> {
            this.element.classList.remove("hide-top")
          }, 1600)
        })
      )
      super.eventListeners = events
    } else {
      return { id: this.id, status: false, message: "no .header-main element" }
    }

    window.addEventListener('scroll', this.onScroll.bind(this))

    return super.init()
  }

  onScroll(event) {
    if (window.scrollY < 0) {
      // this.showLogo()
      return
    }
    if (window.scrollY < this.lastScrollPos) {
      if (this.scrollingUp === false) {
        this.scrollOffset = 0
      }
      this.scrollOffset += Math.abs(window.scrollY - this.lastScrollPos)
      if (this.scrollOffset > 2) {
        this.showLogo()
      }
      this.scrollingUp = true
    } else {
      if (this.scrollingUp === true) {
        this.scrollOffset = 0
        
      }
      this.scrollOffset += Math.abs(window.scrollY - this.lastScrollPos)
      if (this.scrollOffset > 2) {
        this.hideLogo()
      }
      this.scrollingUp = false
    }
    this.lastScrollPos = window.scrollY
  }

  unpin() {
    this.element.classList.add("pinned")
  }

  pin() {
    this.element.classList.remove("pinned")
  }

  showLogo() {
    if (!this.logo.classList.contains('animating')) {
      this.logo.classList.add('animating')
      this.logo.classList.remove('hide-logo')

      setTimeout(() => {
        this.logo.classList.remove('animating')
      }, 400)
    
      // anime({
      //   targets: this.logo,
      //   translateY: 0,
      //   easing: 'easeInSine',
      //   duration: 400,
      //   complete: () => {
      //     this.logo.classList.remove('animating')
      //   }
      // })
    }
  }

  forceShowLogo() {
    this.logo.classList.add('animating')
    this.logo.classList.remove('hide-logo')

    setTimeout(() => {
      this.logo.classList.remove('animating')
    }, 400)
    
    // anime({
    //   targets: this.logo,
    //   translateY: 0,
    //   easing: 'easeInSine',
    //   duration: 400,
    //   complete: () => {
    //     this.logo.classList.remove('animating')
    //   }
    // })
  }

  hideLogo() {
    if (this.logo.classList.contains('animating') || this.logo.classList.contains('pinned')) {
      return
    } else {
      this.logo.classList.add('animating')
      this.logo.classList.add('hide-logo')

      setTimeout(() => {
        this.logo.classList.remove('animating')
      }, 400)
    
      // let y = '-' + this.element.clientHeight + 'px'
      // // let top = '-' + this.scrollOffset + 'px'
      // anime({
      //   targets: this.logo,
      //   translateY: y,
      //   easing: 'linear',
      //   duration: 200,
      //   complete: () => {
      //     this.logo.classList.remove('animating')
      //   }
      // })
    }
  }
}

export const header = new Header()
