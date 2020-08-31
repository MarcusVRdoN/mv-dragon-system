import React, { useState, useContext, useEffect } from 'react'
import Button from '../../components/Button'
import { UserContext } from '../../context/UserContext'

import './loginForm.scss'
import { useHistory } from 'react-router-dom'
import routes from '../../routes'

function LoginForm() {
  const context = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handle = ({ target }) => {
    const { name, value } = target
    const set = {
      email: setEmail,
      password: setPassword
    }

    set[name](value)
  }
  const login = (event) => {
    event.preventDefault()

    const isLoggedIn = context.userLogin(email, password)

    if (isLoggedIn) history.push(routes.home)
  }
  const isLoggedIn = () => {
    const isLoggedIn = context.isLoggedIn()

    if (isLoggedIn) history.push(routes.home)
  }

  useEffect(() => {
    isLoggedIn()
  }, [])

  return (
    <section className="login fade-in-up">
      <div className="login__container">
        <h1 className="login__title title title--large">Login</h1>
        <form className="login__form" onSubmit={login}>
          <div className="login__form__row">
            <label htmlFor="email" className="login__form__label">E-mail</label>
            <input id="email" className="login__form__input" type="email" name="email" placeholder="Seu melhor e-mail" value={email} onChange={handle} />
          </div>
          <div className="login__form__row">
            <label htmlFor="password" className="login__form__label">Senha</label>
            <input id="password" className="login__form__input" type="password" name="password" placeholder="Sua senha" value={password} onChange={handle} />
          </div>
          <div className="login__form__column">
            <Button className="primary" type="submit">Entrar</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginForm
