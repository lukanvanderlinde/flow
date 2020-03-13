import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as serviceWorker from './Services/ServiceWorker'

// * Auth
import { AuthProvider } from 'Services/Auth'
import PrivateRoute from 'Components/PrivateRoute'

import Home from 'Views/Home'
import CreateAccount from 'Views/CreateAccount'
import Login from 'Views/Login'
import NotFound from 'Views/NotFound'

const Admin = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/create-account' component={CreateAccount} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

ReactDOM.render(<Admin />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
