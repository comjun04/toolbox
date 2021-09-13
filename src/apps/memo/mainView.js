import View from '../../structures/View'
import TopBar from '../../structures/components/TopBar'

class MemoAppView extends View {
  constructor (app) {
    super(app)

    //this.element.style.backgroundColor = 'red'

    const topBar = new TopBar(this)
    this.element.appendChild(topBar.element)
  }
}

export default MemoAppView
