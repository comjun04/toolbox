import View from '../../structures/View'

class MainView extends View {
  constructor(app) {
    super(app)

    const view = this.element
    view.classList.add('bg')

    // NOTE: Title area
    const titleDiv = document.createElement('div')
    titleDiv.style.height = '65%'
    titleDiv.style.position = 'relative'
    titleDiv.style.backgroundColor = 'lightblue'
    view.appendChild(titleDiv)

    // title text
    const titleText = document.createElement('span')
    titleText.innerHTML = 'Toolbox'

    titleText.style.position = 'absolute'
    titleText.style.top = '45%'
    titleText.style.left = '50%'
    titleText.style.transform = 'translate(-50%, -50%)'
    titleText.style.fontSize = '2em'

    titleDiv.appendChild(titleText)

    // subtitle text
    const subtitleText = document.createElement('span')
    subtitleText.innerHTML = 'Tools on the web.'

    subtitleText.style.position = 'absolute'
    subtitleText.style.top = '55%'
    subtitleText.style.left = '50%'
    subtitleText.style.transform = 'translate(-50%, -50%)'
    subtitleText.style.fontSize = '1.25em'

    titleDiv.appendChild(subtitleText)

    // NOTE: Menu button area
    const menuDiv = document.createElement('div')
    menuDiv.style.height = '35%'

    view.appendChild(menuDiv)

    // Memo app
    const memoAppBtn = document.createElement('button')
    memoAppBtn.style.width = '50%'
    memoAppBtn.style.height = '100%'
    memoAppBtn.style.backgroundColor = 'aquamarine'
    memoAppBtn.style.position = 'relative'

    memoAppBtn.addEventListener('click', () => {
      try{
      this.core.startApp('memo')
      }catch(e){alert(e.stack)}
      /*
      import('./memoAppView')
        .then((module) => {
          const memoAppView = new module.default()

          const root = document.getElementById('root')
          root.appendChild(memoAppView.element)
          memoAppView.show()
        })
        .catch(e => alert(e.stack))
      */
    })

    menuDiv.appendChild(memoAppBtn)

    const memoAppBtnText = document.createElement('span')
    memoAppBtnText.innerHTML = 'Memo'

    memoAppBtnText.style.position = 'absolute'
    memoAppBtnText.style.top = '50%'
    memoAppBtnText.style.left = '50%'
    memoAppBtnText.style.transform = 'translate(-50%, -50%)'

    memoAppBtn.appendChild(memoAppBtnText)
  }
}

export default MainView
