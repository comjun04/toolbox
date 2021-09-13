class Component {
  constructor (parentView, elementType = 'div') {
    this.parent = parentView

    this.element = document.createElement(elementType)
  }
}

export default Component
