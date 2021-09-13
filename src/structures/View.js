//import TWEEN from '@tweenjs/tween.js'

class View {
  constructor (app) {
    this.app = app
    this.core = app.core

    this.element = document.createElement('div')
    this.element.style.top = 0
    this.element.style.left = 0
    this.element.style.width = '100%'
    this.element.style.height = '100%'
    this.element.style.position = 'fixed'
    this.element.style.display = 'none'

    this.element.style.backgroundColor = 'white'
  }

  show () {
    const el = this.element

    /*
     * Layers
     *
     * 0 - The view itself
     * 1 - view transition temporary
     * 2 - floating view (window)
     * 3 - alert box
     * 4 - toast message
     */

    // Pre-animation code
    el.style.zIndex = 1
    
    // Actually show the element
    el.style.display = 'block'

    // Animation code
    /*
    try{
    this.element.style.zIndex = 1
    this.element.style.transform = 'translateX(100%)'
alert()
    const obj = { w: 100 }
    const tween = new TWEEN.Tween(obj)
    tween.to({ w: 0 }, 500)
      .onUpdate((d) => {
        this.element.style.transform = `translateX(${d.w}%)`
        alert(d.w)
      })
      .start()
  
    }catch(e){alert(e)}
    */

    // Post-animation code
    el.style.zIndex = 0
  }

  hide () {

  }
}

export default View
