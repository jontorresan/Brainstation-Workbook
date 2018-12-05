import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
  <Router>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
