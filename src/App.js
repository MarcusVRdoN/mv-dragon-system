import React from 'react'

import './index.scss'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const Pagina404 = () => (<div>404</div>)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route component={Pagina404} />
        <Home />
      </Switch>
    </BrowserRouter>
  )
}

export default App