import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './routes'

import { UserStorage } from './context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import List from './pages/List'
import Create from './pages/Create'
import Read from './pages/Read'
import Edit from './pages/Edit'
import Logout from './pages/Logout'
import PageNotFound from './pages/PageNotFound'

import './index.scss'

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Switch>
          <Route path={routes.login} component={Login} />
          <ProtectedRoute path={routes.home} component={Home} exact />
          <ProtectedRoute path={routes.dragons.list} component={List} exact />
          <ProtectedRoute path={routes.dragons.create} component={Create} exact />
          <ProtectedRoute path={routes.dragons.read} component={Read} exact />
          <ProtectedRoute path={routes.dragons.edit} component={Edit} exact  />
          <ProtectedRoute path={routes.logout} component={Logout} exact  />
          <Route component={PageNotFound} />
          <Home />
        </Switch>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
