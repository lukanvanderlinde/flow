import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ServiceWorker from 'Services/ServiceWorker'

// * Auth
import { AuthProvider } from 'Services/Auth'

// * Time
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

// * Theme
import Theme from 'Services/Theme'
import { ThemeProvider } from '@material-ui/styles'

import LandingPage from 'Views/LandingPage'
import NotFound from 'Views/NotFound'

const Flow = () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

ReactDOM.render(<Flow />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.unregister()
