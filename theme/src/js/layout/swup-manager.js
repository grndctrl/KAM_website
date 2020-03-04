import Swup from "swup"
import axios from "axios"
import { CoreModule, app, scrollController } from "../core"
import { zenscrollManager } from "./zenscroll-manager"

class SwupManager extends CoreModule {
  init() {
    this.swup = new Swup({
      linkSelector:
      'a[href^="' +
      window.location.origin +
      '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup]), a[href^="#"]:not([target="_blank"])',
    })
    this.element = document.querySelector("#swup")

    
    this.swup.on("transitionStart", () => {
      zenscrollManager.scrollTo(0)
    })
  
    this.swup.on("contentReplaced", () => {
      
      let scripts = swup.querySelectorAll("script")
      
      scripts.forEach((script) => {
        console.log("TCL: SwupManager -> init -> script.getAttribute(src)", script.getAttribute("src"))
        axios
        .get(script.getAttribute("src"))
        .then(function(response) {
          eval(response.data)
        })
        .catch(function(error) {
          console.log(error)
        })
      })
      
      app.$emit("swup:content-replaced", { current: swup })

      this.adjustHeaderColor()
    })

    this.adjustHeaderColor()

    return super.init()
  }

  adjustHeaderColor() {
    if (swup.classList.contains("page-blue")) {
      app.$emit("header:change-color", { color: "white" })
    } else if (swup.classList.contains("page-pink")) {
      app.$emit("header:change-color", { color: "orange" })
    } else if (swup.classList.contains("page-blue-orange")) {
      app.$emit("header:change-color", { color: "orange" })
    } else if (swup.classList.contains("page-yellow")) {
      app.$emit("header:change-color", { color: "orange" })
    } else {
      app.$emit("header:change-color", { color: "blue" })
    }
  }
}

export const swupManager = new SwupManager()
