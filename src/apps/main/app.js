import App from '../../structures/App'

import MainView from './mainView'

class MainApp extends App {
  constructor (core) {
    super(core, 'main', {
      name: 'Main Application',
      description: 'The Main Appliation of Toolbox'
    })

    const mainView = new MainView(this)
    this.startView = mainView
  }
}

export default MainApp
