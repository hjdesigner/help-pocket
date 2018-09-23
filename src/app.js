'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'views/home'
import cadastro from 'views/cadastro'

class App extends PureComponent {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cadastro' component={cadastro} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
injectGlobal`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f9fafb;
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
  }
`

export default App
