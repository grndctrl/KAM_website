import { CoreModule, CoreScrollScene, CoreEventListener, app } from '../core'
import anime from 'animejs'

class SplashScreen extends CoreModule {
  init() {
    this.element = document.getElementById('splash-screen')
    const scenes = []
    const events = []

    events.push(
      new CoreEventListener(
        'header:logo-clicked',
        (event) => {
          window.showSplash = true
        }
      )
    )

    events.push(
      new CoreEventListener(
        'swup:content-replaced',
        (event) => {
          console.log(event)
          if (event.current.classList.contains('page-home')) {
            if (window.showSplash) {
              this.showScreen()
            }
            window.showSplash = false
          }
        }
      )
    )

    super.eventListeners = events
    
    if (document.getElementById('swup').classList.contains('page-home')) {
      anime({
        targets: this.element,
        duration: 400,
        opacity: [0, 1],
        easing: 'linear',
        complete: () => {
          this.animateCharsIn()
        }
      })
    } else {
      this.element.classList.add('hidden')
    }

    return super.init()
  }

  destroy() {
    return super.destroy()
  }

  hideScreen() {
    if (this.element.classList.contains('hidden') || this.element.classList.contains('animating')) {
      return
    }

    this.animateCharsOut()
    
    this.element.classList.add('animating')
    anime({
      targets: this.element,
      duration: 200,
      delay: 0,
      opacity: [1, 0],
      easing: 'easeInCirc',
      complete: () => {
        this.element.classList.remove('animating')
        this.element.classList.add('hidden')
      }
    })
  }

  showScreen() {
    if (this.element.classList.contains('animating')) {
      return
    }
    this.resetChars()
    this.element.classList.remove('hidden')
    this.element.classList.add('animating')
    anime({
      targets: this.element,
      duration: 400,
      delay: 100,
      translateY: ['100vh', 0],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      complete: () => {
        this.animateCharsIn()
        this.element.classList.remove('animating')
      }
    })
  }

  resetChars() {
    let logo = document.querySelector('#splash')
    let charK = logo.querySelector('.char-k')
    let charA = logo.querySelector('.char-a')
    let charM = logo.querySelector('.char-m')
    let charU = logo.querySelector('.char-u')
    let smile = document.querySelector('#smile path')
    let offset = anime.setDashoffset(smile);

    charK.style.opacity = 0;
    charA.style.opacity = 0;
    charM.style.opacity = 0;
    charU.style.opacity = 0;

    let progress = 0
    
    let parray = (progress * offset) + ' ' + offset
    smile.style.strokeDasharray = parray
    
    let poffset = (offset * 0.5) + (1.5 * progress * offset) + 'px'
    smile.style.strokeDashoffset = poffset
  }

  animateCharsIn() {
    let logo = document.querySelector('#splash')
    let charK = logo.querySelector('.char-k')
    let charA = logo.querySelector('.char-a')
    let charM = logo.querySelector('.char-m')
    let charU = logo.querySelector('.char-u')
    let smile = document.querySelector('#smile path')
    let offset = anime.setDashoffset(smile);

    let progress = 0
    
    let parray = (progress * offset) + ' ' + offset
    smile.style.strokeDasharray = parray
    
    let poffset = (offset * 0.5) + (1.5 * progress * offset) + 'px'
    smile.style.strokeDashoffset = poffset

    smile.style.opacity = 0

    anime({
      targets: charK,
      duration: 400,
      delay: 100,
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      autoplay: true,
    })

    anime({
      targets: charA,
      duration: 400,
      delay: 200,
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      autoplay: true,
      complete: () => {
        window.addEventListener('scroll', () => {
          this.hideScreen()
        }, {once: true})
        window.addEventListener('click', () => {
          this.hideScreen()
        }, {once: true})
        window.addEventListener('touchstart', () => {
          this.hideScreen()
        }, {oonce: true})

        anime({
          targets: smile,
          duration: 200,
          easing: 'easeOutCirc',
          opacity: [1, 1],
          autoplay: true,
          update: (anim) => {
            let progress = anim.progress / 100
    
            let parray = (progress * offset) + ' ' + offset
            smile.style.strokeDasharray = parray
            
            let poffset = (offset * 0.5) + (1.5 * progress * offset) + 'px'
            smile.style.strokeDashoffset = poffset
          },
          complete: () => {
            setTimeout(() => {
              this.hideScreen()
            }, 400)
          }
        })
      }
    })

    anime({
      targets: charM,
      duration: 400,
      delay: 300,
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      autoplay: true,
    })

    anime({
      targets: charU,
      duration: 400,
      delay: 400,
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutCirc',
      autoplay: true,
    })
  }

  animateCharsOut() {
    let logo = document.querySelector('#splash')
    let charK = logo.querySelector('.char-k')
    let charA = logo.querySelector('.char-a')
    let charM = logo.querySelector('.char-m')
    let charU = logo.querySelector('.char-u')

    let smile = document.querySelector('#smile path')
    let offset = anime.setDashoffset(smile);

    anime({
      targets: charK,
      duration: 400,
      delay: 100,
      translateY: [0, '-20px'],
      opacity: [1, 0],
      easing: 'easeOutCirc',
      autoplay: true,
    })

    anime({
      targets: charA,
      duration: 400,
      delay: 200,
      translateY: [0, '-20px'],
      opacity: [1, 0],
      easing: 'easeOutCirc',
      autoplay: true,
      complete: () => {
        smile.style.opacity = 0
      }
    })

    anime({
      targets: charM,
      duration: 400,
      delay: 300,
      translateY: [0, '-20px'],
      opacity: [1, 0],
      easing: 'easeOutCirc',
      autoplay: true,
    })

    anime({
      targets: charU,
      duration: 400,
      delay: 400,
      translateY: [0, '-20px'],
      opacity: [1, 0],
      easing: 'easeOutCirc',
      autoplay: true,
    })
  }
}

export const splashScreen = new SplashScreen()
