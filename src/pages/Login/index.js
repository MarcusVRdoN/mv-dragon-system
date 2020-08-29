import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import LoginCreate from '../../components/LoginCreate'
import LoginForget from '../../components/LoginForget'
import LoginReset from '../../components/LoginReset'
import Page from '../../components/Page'

function Login() {
  return (
    <Page>
      <Switch>
        <Route path="/" element={LoginForm} />
        <Route path="/create" element={LoginCreate} />
        <Route path="/forget" element={LoginForget} />
        <Route path="/reset" element={LoginReset} />
      </Switch>
    </Page>
  )
}

export default Login
