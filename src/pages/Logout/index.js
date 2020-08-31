import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Redirect } from 'react-router-dom'
import routes from '../../routes'

function Logout() {
  const context = useContext(UserContext)

  context.userLogout()
  
  return (
    <Redirect to={routes.login} />
  )
}

export default Logout
