import React from 'react'

import './css/main.css'

import Core from './structures/Core'
//import MainView from './views/main'

try {
  const root = document.createElement('div')
  root.id = 'root'
  root.classList.add('bg')
  document.body.appendChild(root)

  const core = new Core()

  core.startApp('main')

  //const mainView = new MainView()
  //root.appendChild(mainView.element)

  // NOTE: script area
  const scriptArea = document.createElement('div')
  scriptArea.id = 'scripts'
  document.body.appendChild(scriptArea)
} catch (e) {
  window.alert(e.stack)
}
