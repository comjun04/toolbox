import App from '../../structures/App'

import MainView from './mainView'

class MemoApp extends App {
  constructor (core) {
    super(core, 'memo', {
      name: 'Memo',
      description: 'Memo All!'
    })

    const mainView = new MainView(this)
    this.startView = mainView
  }
}

export default MemoApp
