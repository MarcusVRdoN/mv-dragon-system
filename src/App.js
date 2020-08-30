import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './routes'

import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import Create from './pages/Create'
import Edit from './pages/Edit'

import './index.scss'

const Pagina404 = () => (<div>404</div>)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <Route path={routes.login} component={Login} />
        <Route path={routes.dragons.list} component={List} exact />
        <Route path={routes.dragons.create} component={Create} exact />
        <Route path={routes.dragons.edit} component={Edit} exact  />
        <Route component={Pagina404} />
        <Home />
      </Switch>
    </BrowserRouter>
  )
}

export default App
