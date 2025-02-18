import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as ServiceWorker from 'Services/ServiceWorker'

import { hotjar } from 'react-hotjar'

// * Auth
import { AuthProvider } from 'Services/Auth'

// * DateTime
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

// * Theme
import Theme from 'Services/Theme'
import { ThemeProvider } from '@material-ui/styles'

// * Routes
import LandingPage from 'Views/LandingPage'
import ResultadosBusca from 'Views/ResultadosBusca'
import Cadastro from 'Views/Cadastro'
import Sucess from 'Views/Sucess'
import Cardapio from 'Views/Cardapio'
import Checkout from 'Views/Checkout'
import NotFound from 'Views/NotFound'

const Flow = () => {
  hotjar.initialize(1685495, 6)

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route
                path='/resultados/:origem/:destino'
                component={ResultadosBusca}
              />
              <Route
                exact
                path='/cadastro/:origem/:destino/:data/:preco/:tempo'
                component={Cadastro}
              />
              <Route exact path='/sucesso' component={Sucess} />
              <Route exact path='/cardapio' component={Cardapio} />
              <Route exact path='/obrigado' component={Checkout} />
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
