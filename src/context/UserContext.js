import React, { createContext, useState } from 'react'

import users from '../users'

const UserContext = createContext()

function UserStorage({ children }) {
  const [user, setUser] = useState(null)
  const [login, setLogin] = useState(false)


  const userLogin = (email, password) => {
    const userFound = users.find(user => user.email === email && user.password === password)
    const isLoggedIn = Boolean(userFound)

    setUser(userFound)
    setLogin(isLoggedIn)

    window.localStorage.setItem('userLoggedIn', JSON.stringify(userFound))
    window.localStorage.setItem('isLoggedIn', isLoggedIn)

    return isLoggedIn
  }

  const userLogout = () => {
    window.localStorage.removeItem('userLoggedIn')
    window.localStorage.removeItem('isLoggedIn')
  }

  const isLoggedIn = () => {
    const userLoggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'))
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')

    setUser(userLoggedIn)
    setLogin(Boolean(isLoggedIn))

    return isLoggedIn
  }

  return (
    <UserContext.Provider value={{ user, login, userLogin, isLoggedIn, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserStorage }
