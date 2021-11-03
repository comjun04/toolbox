import React, { useState } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { defaultCss } from './styles/theme'

import './css/font.css'

import TopBar from './components/TopBar.jsx'
import SideNav from './components/SideNav.jsx'

// NOTE: Pages
import HomePage from './pages/Home.jsx'

const App = () => {
  defaultCss()

  const [sidenavExpanded, setSidenavExpanded] = useState(false)

  const handleSidenavToggle = () => {
    setSidenavExpanded(!sidenavExpanded)
  }

  return (
    <>
      <TopBar openSidenav={handleSidenavToggle} />

      <Router>
        <SideNav
          expanded={sidenavExpanded}
          close={handleSidenavToggle}
        />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
