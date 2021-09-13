import Component from '../Component'

class TopBar extends Component {
  constructor (parent) {
    super(parent)

    this.element.style.position = 'relative'
    this.element.style.top = '10px'
    this.element.style.left = '10px'
    this.element.style.width = '100%'
    this.element.style.height = '10%'
    this.element.style.backgroundColor = 'blue'

    this.element.innerHTML = 'asdf'
  }
}

export default TopBar
