import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import routes from '../../routes'
import { UserContext } from '../../context/UserContext'

function ProtectedRoute(props) {
  const context = useContext(UserContext)

  if (context.login === true) return <Route {...props} />
  else if (context.login === false) return <Redirect to={routes.login} />
  else return null
}

export default ProtectedRoute
