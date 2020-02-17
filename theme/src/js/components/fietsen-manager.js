import { CoreModule } from '../core'

class FietsenManager extends CoreModule {
  init() {
    this.triggers = document.querySelectorAll('.fietsen-trigger')
    this.swipers = document.querySelectorAll('.fietsen-swiper .swiper')

    this.triggers.forEach(trigger => {
      trigger.current = trigger
      trigger.triggers = this.triggers
      trigger.swipers = this.swipers
      trigger.addEventListener('click', this.onClick)
    })

    return super.init()
  }

  destroy() {
    return super.destroy()
  }

  onClick() {
    if (this.current.classList.contains('swiper-active')) {
      return
    }

    this.triggers.forEach(trigger => {
      trigger.classList.remove('swiper-active')
    })

    this.swipers.forEach(swiper => {
      swiper.classList.add('fade-out')
    })
    
    setTimeout(() => {
      this.swipers.forEach(swiper => {
        swiper.classList.add('disabled')
      })
      document.getElementById('swiper-' + this.current.getAttribute('trigger-target')).classList.remove('fade-out')
      document.getElementById('swiper-' + this.current.getAttribute('trigger-target')).classList.remove('disabled')
      this.current.classList.add('swiper-active')
    }, 400)
  }
}

export const fietsenManager = new FietsenManager()
